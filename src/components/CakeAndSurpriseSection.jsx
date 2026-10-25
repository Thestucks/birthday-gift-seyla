import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Gift } from 'lucide-react';

export default function CakeAndSurpriseSection() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showWishModal, setShowWishModal] = useState(false);

  const blowCandles = () => {
    setCandlesLit(false);
    setShowWishModal(true);

    // Multi-stage confetti celebration
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#FF85A1', '#FFB3C6', '#FFD1DC', '#FFEAA7', '#FFA6C1'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const relightCandles = () => {
    setCandlesLit(true);
    setShowWishModal(false);
  };

  return (
    <section
      id="cake"
      style={{
        padding: '70px 20px',
        maxWidth: '820px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '36px' }}>
        <span
          style={{
            fontSize: '0.9rem',
            color: '#D84A75',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          Make a Birthday Wish
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 800,
            color: '#70263E',
            marginTop: '8px',
          }}
        >
          Kue Ulang Tahun ke-23 🎂
        </h2>
        <p style={{ color: '#7E6B74', marginTop: '6px', fontSize: '0.95rem' }}>
          Tutup mata sejenak, ucapkan doa terbaikmu dalam hati, lalu tiup lilinnya!
        </p>
      </div>

      {/* Birthday Cake Card */}
      <div
        className="glass-card"
        style={{
          padding: '44px 24px',
          background: 'linear-gradient(135deg, #FFFDF9, #FFEBF1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* SVG Cake Display */}
        <div style={{ margin: '0 auto 30px', maxWidth: '340px' }}>
          <svg viewBox="0 0 300 240" width="100%" height="auto">
            {/* Plate */}
            <ellipse cx="150" cy="210" rx="120" ry="18" fill="#FFFFFF" stroke="#FFA6C1" stroke-width="2"/>
            
            {/* Bottom Cake Tier */}
            <rect x="50" y="130" width="200" height="70" rx="14" fill="#FFE4EC" stroke="#FFB3C6" stroke-width="2"/>
            {/* Bottom Frosting Pattern */}
            <path d="M50,150 Q75,170 100,150 Q125,170 150,150 Q175,170 200,150 Q225,170 250,150" fill="none" stroke="#FF85A1" stroke-width="4" stroke-linecap="round"/>
            
            {/* Top Cake Tier */}
            <rect x="80" y="80" width="140" height="55" rx="10" fill="#FFF0F5" stroke="#FFA6C1" stroke-width="2"/>
            {/* Top Frosting Drips */}
            <path d="M80,95 Q95,110 110,95 Q125,110 140,95 Q155,110 170,95 Q185,110 200,95 Q210,105 220,95" fill="none" stroke="#FF6584" stroke-width="3" stroke-linecap="round"/>

            {/* Candle 2 */}
            <g transform="translate(125, 45)">
              <rect x="-6" y="0" width="12" height="35" rx="4" fill="#FF85A1"/>
              <text x="0" y="24" font-family="'Quicksand', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">2</text>
              <line x1="0" y1="0" x2="0" y2="-6" stroke="#4A4A4A" stroke-width="2"/>
              {candlesLit ? (
                <g className="animate-pulse-glow">
                  <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#FFEAA7"/>
                  <ellipse cx="0" cy="-14" rx="3" ry="6" fill="#FF7675"/>
                </g>
              ) : (
                <text x="0" y="-8" font-size="12" text-anchor="middle">💨</text>
              )}
            </g>

            {/* Candle 3 */}
            <g transform="translate(175, 45)">
              <rect x="-6" y="0" width="12" height="35" rx="4" fill="#FF85A1"/>
              <text x="0" y="24" font-family="'Quicksand', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">3</text>
              <line x1="0" y1="0" x2="0" y2="-6" stroke="#4A4A4A" stroke-width="2"/>
              {candlesLit ? (
                <g className="animate-pulse-glow">
                  <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#FFEAA7"/>
                  <ellipse cx="0" cy="-14" rx="3" ry="6" fill="#FF7675"/>
                </g>
              ) : (
                <text x="0" y="-8" font-size="12" text-anchor="middle">💨</text>
              )}
            </g>

            {/* Decorative Strawberries & Flowers */}
            <text x="65" y="130" font-size="18">🍓</text>
            <text x="142" y="78" font-size="16">🌸</text>
            <text x="215" y="130" font-size="18">🍓</text>
          </svg>
        </div>

        {/* Action Button */}
        {candlesLit ? (
          <button
            onClick={blowCandles}
            className="btn-cute-primary"
            style={{ fontSize: '1.05rem', padding: '14px 34px' }}
          >
            <span>Tiup Lilin Ulang Tahun 🎂💨</span>
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={relightCandles}
              className="btn-cute-secondary"
            >
              <span>Nyalakan Lilin Lagi 🕯️</span>
            </button>
            <button
              onClick={() => setShowWishModal(true)}
              className="btn-cute-primary"
            >
              <span>Lihat Pesan Kejutan 🎁✨</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal Popup Kejutan setelah Tiup Lilin */}
      {showWishModal && (
        <div
          onClick={() => setShowWishModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            background: 'rgba(63, 51, 56, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-card"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '36px 28px',
              background: '#FFFFFF',
              textAlign: 'center',
              borderRadius: '24px',
              border: '2px solid #FF85A1',
              boxShadow: '0 20px 50px rgba(255, 101, 132, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: '52px',
                marginBottom: '16px',
              }}
              className="animate-float"
            >
              🎉🌸🎂
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#D84A75',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '8px',
              }}
            >
              <Sparkles size={16} />
              <span>WISH GRANTED!</span>
              <Sparkles size={16} />
            </div>

            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#70263E',
                marginBottom: '12px',
              }}
            >
              Selamat Ulang Tahun ke-23, Seyla! 💖
            </h3>

            <p
              style={{
                fontSize: '1rem',
                color: '#55424B',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Semoga semua doa dan harapan terbaik yang kamu bisikkan di dalam hati tadi segera menjadi kenyataan. Teruslah tersenyum ceria dan nikmati hari istimewamu ini dengan penuh kebahagiaan!
            </p>

            <button
              onClick={() => setShowWishModal(false)}
              className="btn-cute-primary"
              style={{ width: '100%', padding: '14px' }}
            >
              <Heart size={18} fill="#FFFFFF" />
              <span>Terima Kasih Banyak! 🌸</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
