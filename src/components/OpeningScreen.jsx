import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles } from 'lucide-react';

export default function OpeningScreen({ onOpenSurprise }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Fire cute pink celebratory confetti
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF85A1', '#FFB3C6', '#FFD1DC', '#FFFFFF', '#FFA6C1'],
    });

    setTimeout(() => {
      onOpenSurprise();
    }, 600);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'radial-gradient(circle at center, #FFF0F5 0%, #FFE4EC 60%, #FFD1DC 100%)',
        transition: 'all 0.8s ease-in-out',
        opacity: isOpening ? 0 : 1,
        transform: isOpening ? 'scale(1.08)' : 'scale(1)',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '460px',
          width: '100%',
          textAlign: 'center',
          padding: '40px 28px',
          border: '2px solid rgba(255, 133, 161, 0.4)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ribbon decoration at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #FF85A1, #FF6584)',
            color: '#FFFFFF',
            padding: '4px 24px',
            borderRadius: '0 0 16px 16px',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(255, 101, 132, 0.3)',
          }}
        >
          SPECIAL BIRTHDAY INVITATION
        </div>

        {/* Floating Flower Icon */}
        <div style={{ marginTop: '20px', marginBottom: '16px' }} className="animate-float">
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFE4EC, #FFD1DC)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '44px',
              boxShadow: '0 8px 24px rgba(255, 133, 161, 0.3)',
              border: '3px solid #FFFFFF',
            }}
          >
            🌸
          </div>
        </div>

        {/* Target name */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#D84A75', marginBottom: '6px' }}>
          <Sparkles size={16} />
          <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Dear Seyla (Seylala)</span>
          <Heart size={16} fill="#FF85A1" color="#FF85A1" />
        </div>

        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#70263E',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}
        >
          Happy 23rd Birthday! 🎀
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: '#7E6B74',
            lineHeight: 1.6,
            marginBottom: '28px',
          }}
        >
          Ada sebuah taman bunga kejutan manis yang sudah bermekaran khusus untuk merayakan hari ulang tahunmu hari ini.
        </p>

        {/* Open Button */}
        <button
          onClick={handleOpen}
          className="btn-cute-primary"
          style={{
            width: '100%',
            padding: '16px 32px',
            fontSize: '1.1rem',
          }}
        >
          <Gift size={20} />
          <span>Buka Kejutan Seyla 🌷✨</span>
        </button>

        <div
          style={{
            marginTop: '20px',
            fontSize: '0.85rem',
            color: '#A24A68',
            fontStyle: 'italic',
          }}
        >
          *Pastikan volume suaramu menyala untuk pengalaman terbaik 🎶
        </div>
      </div>
    </div>
  );
}
