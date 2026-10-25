import React, { useState } from 'react';
import { Smile, Coffee, Sparkles, Moon, Gift, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const notesData = [
  {
    id: 1,
    icon: <Moon size={24} color="#FF6584" />,
    title: 'Fakta Usia 23 🌸',
    text: 'Masih seimut kelopak bunga musim semi, tapi jam tidur dan pinggang sudah mulai mirip lansia.',
    reaction: 'Relate banget kan? 🛌',
    tag: '#SleepyPrincess',
  },
  {
    id: 2,
    icon: <Coffee size={24} color="#FF85A1" />,
    title: 'Nutrisi Penting 🧋',
    text: 'Kalau bunga butuh disiram air buat mekar, kalau Seyla butuh iced coffee, camilan enak, dan cuti liburan!',
    reaction: 'Auto semangat mekar! ✨',
    tag: '#FuelForSeyla',
  },
  {
    id: 3,
    icon: <Sparkles size={24} color="#FFA6C1" />,
    title: 'Doa Glowing 💅',
    text: 'Semoga glowing lahir batin, rezeki terus mengalir deras, dan overthinking tengah malam langsung kabur!',
    reaction: 'Aamiin paling kencang! 🤲',
    tag: '#GlowingAt23',
  },
  {
    id: 4,
    icon: <Heart size={24} color="#FF6584" />,
    title: 'Statistik Kecantikan 💖',
    text: 'Umur nambah setahun, tapi cantiknya nambah berkali-kali lipat. Tolong diarsip baik-baik ya fakta ini!',
    reaction: '100% Valid No Debat! 💯',
    tag: '#PrettySeyla',
  },
  {
    id: 5,
    icon: <Gift size={24} color="#FF85A1" />,
    title: 'Tugas Sahabat 🍰',
    text: 'Tugas kami adalah memberi doa terbaik, menemani disaat butuh curhat, dan pura-pura kaget saat ditraktir!',
    reaction: 'Ditunggu traktirannya! 😋',
    tag: '#BestieVibes',
  },
  {
    id: 6,
    icon: <Smile size={24} color="#FFA6C1" />,
    title: 'Level 23 Mindset 🎀',
    text: 'Kamu adalah karakter utama di kehidupanmu sendiri. Masalah boleh datang, tapi Seyla yang menang!',
    reaction: 'Kamu pasti bisa! 👑',
    tag: '#MainCharacter',
  },
];

export default function CuteNotesSection() {
  const [activeReactions, setActiveReactions] = useState({});

  const handleCardClick = (id) => {
    setActiveReactions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#FFB3C6', '#FF85A1', '#FFD1DC'],
    });
  };

  return (
    <section
      id="notes"
      style={{
        padding: '70px 20px',
        maxWidth: '1080px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '46px' }}>
        <span
          style={{
            fontSize: '0.9rem',
            color: '#D84A75',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          Special Notes & Jokes
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 800,
            color: '#70263E',
            marginTop: '8px',
          }}
        >
          Catatan Gemas untuk Seyla 🌸
        </h2>
        <p style={{ color: '#7E6B74', marginTop: '6px', fontSize: '0.95rem' }}>
          *Tap atau klik setiap kartu untuk memunculkan pesan rahasia!
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '22px',
        }}
      >
        {notesData.map((note) => {
          const isClicked = activeReactions[note.id];
          return (
            <div
              key={note.id}
              onClick={() => handleCardClick(note.id)}
              className="glass-card"
              style={{
                padding: '26px',
                cursor: 'pointer',
                border: isClicked
                  ? '2px solid #FF85A1'
                  : '1.5px solid rgba(255, 182, 193, 0.5)',
                transform: isClicked ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
            >
              {/* Header card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: '#FFF0F5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(255, 133, 161, 0.15)',
                  }}
                >
                  {note.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#A24A68',
                    fontWeight: 600,
                    background: 'rgba(255, 214, 224, 0.6)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                  }}
                >
                  {note.tag}
                </span>
              </div>

              {/* Title & Body */}
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#70263E',
                  marginBottom: '10px',
                }}
              >
                {note.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#55424B',
                  lineHeight: 1.6,
                }}
              >
                {note.text}
              </p>

              {/* Reaction badge on click */}
              {isClicked && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '8px 14px',
                    background: 'linear-gradient(135deg, #FF85A1, #FF6584)',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    animation: 'floatGentle 3s ease-in-out infinite',
                    boxShadow: '0 4px 12px rgba(255, 101, 132, 0.3)',
                  }}
                >
                  {note.reaction}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
