import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Disc3 } from 'lucide-react';

export default function MusicPlayer({ isAutoPlayRequested }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioSourceType, setAudioSourceType] = useState('detecting'); // 'file' or 'synth'
  const audioRef = useRef(null);
  const synthTimerRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Path ke file audio di folder asset
  const BASE_URL = import.meta.env.BASE_URL;
  const audioFilePath = `${BASE_URL}asset/hbdsong.mp3`;

  // Web Audio API Music Box Fallback (Happy Birthday melody)
  const notes = [
    { freq: 261.63, dur: 0.35, pause: 0.1 }, // C4
    { freq: 261.63, dur: 0.2, pause: 0.05 }, // C4
    { freq: 293.66, dur: 0.5, pause: 0.1 }, // D4
    { freq: 261.63, dur: 0.5, pause: 0.1 }, // C4
    { freq: 349.23, dur: 0.5, pause: 0.1 }, // F4
    { freq: 329.63, dur: 0.9, pause: 0.3 }, // E4

    { freq: 261.63, dur: 0.35, pause: 0.1 }, // C4
    { freq: 261.63, dur: 0.2, pause: 0.05 }, // C4
    { freq: 293.66, dur: 0.5, pause: 0.1 }, // D4
    { freq: 261.63, dur: 0.5, pause: 0.1 }, // C4
    { freq: 392.0, dur: 0.5, pause: 0.1 },  // G4
    { freq: 349.23, dur: 0.9, pause: 0.3 }, // F4

    { freq: 261.63, dur: 0.35, pause: 0.1 }, // C4
    { freq: 261.63, dur: 0.2, pause: 0.05 }, // C4
    { freq: 523.25, dur: 0.5, pause: 0.1 }, // C5
    { freq: 440.0, dur: 0.5, pause: 0.1 },  // A4
    { freq: 349.23, dur: 0.5, pause: 0.1 }, // F4
    { freq: 329.63, dur: 0.5, pause: 0.1 }, // E4
    { freq: 293.66, dur: 0.9, pause: 0.3 }, // D4

    { freq: 466.16, dur: 0.35, pause: 0.1 }, // Bb4
    { freq: 466.16, dur: 0.2, pause: 0.05 }, // Bb4
    { freq: 440.0, dur: 0.5, pause: 0.1 },  // A4
    { freq: 349.23, dur: 0.5, pause: 0.1 }, // F4
    { freq: 392.0, dur: 0.5, pause: 0.1 },  // G4
    { freq: 349.23, dur: 1.2, pause: 0.6 }, // F4
  ];

  const playSynthMelody = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    let currentTime = ctx.currentTime + 0.1;

    const scheduleTune = () => {
      notes.forEach((note) => {
        // Music box oscillator
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, currentTime);

        // Music box chime envelope
        gain.gain.setValueAtTime(0, currentTime);
        gain.gain.linearRampToValueAtTime(0.18, currentTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, currentTime + note.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(currentTime);
        osc.stop(currentTime + note.dur);

        currentTime += note.dur + note.pause;
      });

      // Loop after tune ends
      const loopDuration = (currentTime - ctx.currentTime) * 1000;
      synthTimerRef.current = setTimeout(() => {
        if (isPlaying) {
          playSynthMelody();
        }
      }, loopDuration);
    };

    scheduleTune();
  };

  const stopSynthMelody = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopSynthMelody();
      setIsPlaying(false);
    } else {
      // Play
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setAudioSourceType('file');
          })
          .catch(() => {
            // File not found or blocked: Fallback to synth music box
            setAudioSourceType('synth');
            setIsPlaying(true);
            playSynthMelody();
          });
      } else {
        setAudioSourceType('synth');
        setIsPlaying(true);
        playSynthMelody();
      }
    }
  };

  // Start music automatically when user opened the surprise envelope
  useEffect(() => {
    if (isAutoPlayRequested && !isPlaying) {
      togglePlay();
    }
  }, [isAutoPlayRequested]);

  // Handle Mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={audioFilePath}
        loop
        preload="auto"
        onError={() => {
          setAudioSourceType('synth');
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 253, 249, 0.95)',
          padding: '8px 16px',
          borderRadius: '9999px',
          boxShadow: '0 8px 24px rgba(255, 133, 161, 0.35)',
          border: '1.5px solid #FFB3C6',
          backdropFilter: 'blur(8px)',
        }}
      >
        <button
          onClick={togglePlay}
          title={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: '#70263E',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
          }}
        >
          <div
            className={isPlaying ? 'animate-spin-slow' : ''}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF85A1, #FF6584)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 2px 6px rgba(255, 101, 132, 0.3)',
            }}
          >
            🌸
          </div>
          <span>{isPlaying ? 'Lagu Aktif 🎶' : 'Putar Musik 🎵'}</span>
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            title={isMuted ? 'Nyalakan Suara' : 'Bisukan'}
            style={{
              background: 'none',
              border: 'none',
              color: '#D84A75',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
            }}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
