import React, { useState } from 'react';
import { Heart, Sparkles, Flower } from 'lucide-react';
import confetti from 'canvas-confetti';

const wishesList = [
  {
    id: 1,
    flower: '🌸',
    title: 'Sehat & Bugar',
    desc: 'Semoga Seyla senantiasa diberikan kesehatan prima, tubuh yang bugar, dan energi positif melimpah.',
    category: 'Kesehatan',
  },
  {
    id: 2,
    flower: '🌷',
    title: 'Mimpi & Karier Lancar',
    desc: 'Semoga setiap rencana, cita-cita, dan target di usia 23 tahun dimudahkan dan tercapai satu per satu.',
    category: 'Masa Depan',
  },
  {
    id: 3,
    flower: '🌼',
    title: 'Ketenangan Hati',
    desc: 'Bebas dari overthinking tengah malam, tidur selalu nyenyak, dan hati selalu tenang serta bersyukur.',
    category: 'Peace of Mind',
  },
  {
    id: 4,
    flower: '💐',
    title: 'Sahabat & Cinta Tulus',
    desc: 'Selalu dikelilingi oleh keluarga dan sahabat yang tulus, pengertian, serta saling mendukung setiap saat.',
    category: 'Hubungan',
  },
  {
    id: 5,
    flower: '🌻',
    title: 'Rezeki Melimpah Ruah',
    desc: 'Pintu rezeki terbuka dari berbagai arah yang tak terduga, cukup untuk membahagiakan diri & orang tercinta.',
    category: 'Keberkahan',
  },
  {
    id: 6,
    flower: '🌺',
    title: 'Makin Glowing & Manis',
    desc: 'Makin anggun, cantik mempesona, glowing luar dalam, dan auranya selalu memancarkan kehangatan.',
    category: 'Pesona',
  },
  {
    id: 7,
    flower: '🍀',
    title: 'Tawa & Momen Indah',
    desc: 'Tahun ke-23 yang penuh petualangan seru, jalan-jalan menyenangkan, dan tawa lepas tanpa beban.',
    category: 'Kebahagiaan',
  },
  {
    id: 8,
    flower: '🎀',
    title: 'Keberuntungan Berlipat',
    desc: 'Selalu beruntung dalam setiap keputusan dan terhindar dari segala drama yang tidak penting.',
    category: 'Keberuntungan',
  },
];

export default function WishesSection() {
  const [aamiinCounts, setAamiinCounts] = useState({});

  const handleAamiin = (id) => {
    setAamiinCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));

    confetti({
      particleCount: 20,
      spread: 45,
      origin: { y: 0.75 },
      colors: ['#FF85A1', '#FF6584', '#FFD1DC'],
    });
  };

  return (
    <section
      id="wishes"
      style={{
        padding: '70px 20px',
        maxWidth: '1080px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '46px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#D84A75',
            fontWeight: 700,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          <Flower size={18} />
          <span>Garden of Wishes</span>
          <Sparkles size={18} />
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 800,
            color: '#70263E',
            marginTop: '8px',
          }}
        >
          Taman Doa & Harapan untuk Seyla 🌸
        </h2>
        <p style={{ color: '#7E6B74', marginTop: '6px', fontSize: '0.95rem' }}>
          8 harapan manis untuk menyambut usia ke-23. Klik tombol "Aamiin" untuk mengaminkan!
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        {wishesList.map((item) => {
          const count = aamiinCounts[item.id] || 0;
          return (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '24px 20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1.5px solid rgba(255, 182, 193, 0.5)',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '10px',
                  }}
                  className="animate-float"
                >
                  {item.flower}
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#A24A68',
                    background: '#FFEBF1',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.category}
                </span>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#70263E',
                    marginTop: '10px',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#55424B',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => handleAamiin(item.id)}
                style={{
                  background: count > 0 ? '#FF85A1' : '#FFFDF9',
                  color: count > 0 ? '#FFFFFF' : '#D84A75',
                  border: '1.5px solid #FF85A1',
                  borderRadius: '9999px',
                  padding: '8px 16px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.25s ease',
                  boxShadow: count > 0 ? '0 4px 12px rgba(255, 133, 161, 0.3)' : 'none',
                }}
              >
                <Heart size={14} fill={count > 0 ? '#FFFFFF' : 'none'} />
                <span>{count > 0 ? `Aamiin! (${count}) 💖` : 'Aamiin 🤲'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
