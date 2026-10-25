import React, { useState } from 'react';
import { Mail, MailOpen, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    if (!isOpen) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFB3C6', '#FF85A1', '#FFFDF9', '#FFA6C1'],
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section
      id="letter"
      style={{
        padding: '70px 20px',
        maxWidth: '820px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
          <Mail size={18} />
          <span>A Letter from Bestie</span>
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
          Surat Manis untuk Seyla 💌
        </h2>
        <p style={{ color: '#7E6B74', marginTop: '6px', fontSize: '0.95rem' }}>
          Ada sebuah pesan tulus yang ditulis khusus untukmu di hari spesial ini.
        </p>
      </div>

      {/* Amplop / Letter Envelope Container */}
      <div
        className="glass-card"
        style={{
          padding: isOpen ? '40px 32px' : '48px 24px',
          background: isOpen ? '#FFFDF9' : 'linear-gradient(135deg, #FFF0F5, #FFE4EC)',
          border: '2px solid rgba(255, 133, 161, 0.45)',
          transition: 'all 0.5s ease',
          boxShadow: '0 16px 40px rgba(255, 133, 161, 0.2)',
          position: 'relative',
        }}
      >
        {!isOpen ? (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF85A1, #FF6584)',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(255, 101, 132, 0.35)',
              }}
              className="animate-pulse-glow"
            >
              <MailOpen size={38} />
            </div>

            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#70263E',
                marginBottom: '10px',
              }}
            >
              Surat Tertutup Bersegel Bunga 🌸
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#7E6B74',
                maxWidth: '460px',
                margin: '0 auto 26px',
                lineHeight: 1.6,
              }}
            >
              Ditujukan khusus untuk: <strong>Seyla (Seylala)</strong>. Klik tombol di bawah untuk membuka dan membaca pesannya!
            </p>

            <button onClick={toggleLetter} className="btn-cute-primary">
              <Mail size={18} />
              <span>Buka Surat Sekarang ✉️✨</span>
            </button>
          </div>
        ) : (
          <div>
            {/* Letter Header */}
            <div
              style={{
                borderBottom: '2px dashed #FFB3C6',
                paddingBottom: '20px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: '#A24A68',
                    fontWeight: 600,
                  }}
                >
                  Tanggal: 24 Oktober 2026
                </span>
                <h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: '#70263E',
                    marginTop: '2px',
                  }}
                >
                  Dear Seyla, 🌸
                </h3>
              </div>

              <div
                style={{
                  background: '#FFEBF1',
                  color: '#D84A75',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}
              >
                🎀 Sweet 23
              </div>
            </div>

            {/* Letter Content */}
            <div
              style={{
                fontSize: '1.05rem',
                color: '#42333A',
                lineHeight: 1.85,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <p>
                <strong>Selamat ulang tahun yang ke-23! 🎉✨</strong>
              </p>
              <p>
                Di tanggal 24 Oktober yang istimewa ini, semoga segala hal baik selalu mengiringi setiap langkahmu. Nggak terasa waktu berlalu begitu cepat, dan sekarang kamu sudah resmi memasuki babak baru yang lebih dewasa, lebih anggun, dan tentu saja makin mempesona!
              </p>
              <p>
                Terima kasih ya sudah menjadi teman sekaligus sahabat yang luar biasa. Terima kasih atas setiap senyuman, tawa renyah, cerita-cerita seru, dan energi positif yang selalu kamu bawa di manapun kamu berada. Kehadiranmu selalu berhasil membuat hari-hari jadi terasa lebih cerah, persis seperti bunga musim semi yang mekar di pagi hari.
              </p>
              <p>
                Memasuki usia 23 tahun mungkin akan membawa banyak hal baru dan tantangan tersendiri. Tapi kami percaya sepenuhnya, Seyla adalah sosok yang kuat, tangguh, dan punya kemampuan luar biasa untuk melewati segalanya dengan indah. Jangan pernah ragu pada potensi dirimu ya!
              </p>
              <p>
                Semoga di usia 23 ini, kesehatanmu selalu terjaga, rezekimu melimpah ruah, impian dan kariermu dilancarkan, serta hatimu senantiasa dipenuhi kedamaian dan kebahagiaan.
              </p>
              <p>
                Tetaplah jadi Seyla yang kita kenal—yang ceria, baik hati, dan selalu bikin kangen. Nikmati setiap momen di usia 23 ini ya! 💖
              </p>
            </div>

            {/* Signature */}
            <div
              style={{
                marginTop: '32px',
                textAlign: 'right',
                borderTop: '2px dashed #FFB3C6',
                paddingTop: '20px',
              }}
            >
              <p style={{ fontSize: '0.9rem', color: '#7E6B74' }}>
                Dengan penuh rasa sayang & doa tulus,
              </p>
              <h4
                className="font-handwriting"
                style={{
                  fontSize: '2rem',
                  color: '#D84A75',
                  marginTop: '4px',
                }}
              >
                Sahabatmu yang selalu mendukungmu 🌸
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#A24A68', fontStyle: 'italic' }}>
                P.S. Jangan lupa traktiran ultahnya ya, Seylala! 🍰😋
              </p>
            </div>

            {/* Close Button */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button
                onClick={toggleLetter}
                className="btn-cute-secondary"
                style={{ fontSize: '0.9rem' }}
              >
                Lipat Kembali Surat ✉️
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
