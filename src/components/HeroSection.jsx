import React from 'react';
import { Sparkles, Calendar, Heart, Flower2, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px 40px',
        position: 'relative',
      }}
    >
      {/* Level 23 Badge */}
      <div
        className="animate-float"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '8px 20px',
          borderRadius: '9999px',
          boxShadow: '0 4px 16px rgba(255, 133, 161, 0.25)',
          border: '1.5px solid #FFB3C6',
          marginBottom: '20px',
        }}
      >
        <Sparkles size={18} color="#FF85A1" />
        <span style={{ color: '#D84A75', fontWeight: 700, fontSize: '0.95rem' }}>
          LEVEL 23 UNLOCKED 🎀
        </span>
        <Sparkles size={18} color="#FF85A1" />
      </div>

      {/* Main Big Name & Heading */}
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 900,
          color: '#70263E',
          lineHeight: 1.15,
          marginBottom: '14px',
          letterSpacing: '-0.5px',
        }}
      >
        Happy Birthday, <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #FF6584 0%, #D84A75 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Seyla! 🌸✨
        </span>
      </h1>

      {/* Birth Date and Age Information */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#7E6B74',
            background: '#FFFFFF',
            padding: '6px 16px',
            borderRadius: '9999px',
            fontSize: '0.9rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <Calendar size={15} color="#FF85A1" />
          <span>24 Oktober 2003 • 24 Oktober 2026</span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#7E6B74',
            background: '#FFFFFF',
            padding: '6px 16px',
            borderRadius: '9999px',
            fontSize: '0.9rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <Heart size={15} fill="#FF85A1" color="#FF85A1" />
          <span>Blooming at 23 Years Old</span>
        </div>
      </div>

      {/* Warm Subtitle Paragraph */}
      <p
        style={{
          maxWidth: '620px',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#55424B',
          lineHeight: 1.7,
          marginBottom: '36px',
        }}
      >
        Selamat ulang tahun yang ke-23 untuk Seyla tercinta! Semoga hari-harimu selalu semekar, seindah, dan seharum bunga-bunga pink yang bermekaran di musim semi. Tetaplah menjadi sosok yang ceria, manis, dan membawa kebahagiaan bagi semua orang di sekitarmu! 🌷💖
      </p>

      {/* Quick Navigation Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => scrollToSection('gallery')}
          className="btn-cute-primary"
        >
          <Flower2 size={18} />
          <span>Buka Galeri Foto 📸</span>
        </button>

        <button
          onClick={() => scrollToSection('letter')}
          className="btn-cute-secondary"
        >
          <span>Baca Surat Manis 💌</span>
        </button>

        <button
          onClick={() => scrollToSection('cake')}
          className="btn-cute-secondary"
        >
          <span>Tiup Lilin 🎂</span>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollToSection('notes')}
        style={{
          marginTop: '60px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: '#FF85A1',
          fontSize: '0.85rem',
          fontWeight: 600,
        }}
        className="animate-float"
      >
        <span>Gulir ke bawah untuk melihat cerita</span>
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
