import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1.5px solid rgba(255, 182, 193, 0.5)',
        background: 'rgba(255, 253, 249, 0.85)',
        backdropFilter: 'blur(10px)',
        padding: '40px 20px 30px',
        textAlign: 'center',
        marginTop: '60px',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '1.05rem',
            color: '#70263E',
            fontWeight: 700,
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          }}
        >
          <span>Made with love, pink petals & friendship</span>
          <Heart size={16} fill="#FF85A1" color="#FF85A1" />
        </p>

        <p style={{ fontSize: '0.9rem', color: '#7E6B74', marginBottom: '20px' }}>
          Dedicated especially for <strong>Seyla (Seylala)</strong> — 24 Oktober 2026 🌸
        </p>

        <button
          onClick={scrollToTop}
          className="btn-cute-secondary"
          style={{ fontSize: '0.85rem', padding: '8px 18px' }}
        >
          <ArrowUp size={15} />
          <span>Kembali ke Atas</span>
        </button>

        <div
          style={{
            marginTop: '26px',
            fontSize: '0.8rem',
            color: '#A24A68',
          }}
        >
          © 2026 Happy 23rd Birthday Seyla • Forever Blooming 🌷
        </div>
      </div>
    </footer>
  );
}
