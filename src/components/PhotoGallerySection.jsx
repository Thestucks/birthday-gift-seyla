import React, { useState } from 'react';
import { Camera, X, Sparkles, ZoomIn } from 'lucide-react';

export default function PhotoGallerySection() {
  const BASE_URL = import.meta.env.BASE_URL;

  // 10 Foto asli Seyla dari folder asset (1.jpg - 10.jpg)
  const initialPhotos = [
    {
      id: 1,
      src: `${BASE_URL}asset/1.jpg`,
      title: 'Blooming Beauty 🌸',
      caption: 'Senyuman manis yang selalu menghangatkan suasana!',
      date: '24 Oktober',
      rotation: '-2deg',
    },
    {
      id: 2,
      src: `${BASE_URL}asset/2.jpg`,
      title: 'Sweet & Charming 🎀',
      caption: 'Pesona cantiknya Seyla yang selalu memukau dan anggun.',
      date: 'Sweet Soul',
      rotation: '2.5deg',
    },
    {
      id: 3,
      src: `${BASE_URL}asset/3.jpg`,
      title: 'Candid & Good Vibes ✨',
      caption: 'Tawa renyah dan keceriaan yang nggak pernah ada habisnya.',
      date: 'Forever Young',
      rotation: '-1.5deg',
    },
    {
      id: 4,
      src: `${BASE_URL}asset/4.jpg`,
      title: 'Forever Cute 🌷',
      caption: 'Selalu punya gaya dan ekspresi yang paling menggemaskan!',
      date: 'Cute Vibes',
      rotation: '2deg',
    },
    {
      id: 5,
      src: `${BASE_URL}asset/5.jpg`,
      title: 'Shining Bright 💖',
      caption: 'Makin bertambah usia, auranya makin memancarkan pesona positif.',
      date: 'Level 23',
      rotation: '-2.5deg',
    },
    {
      id: 6,
      src: `${BASE_URL}asset/6.jpg`,
      title: 'Precious Moments 📸',
      caption: 'Setiap detik dan kenangan indah yang selalu tersimpan rapi.',
      date: 'Memory Lane',
      rotation: '1.5deg',
    },
    {
      id: 7,
      src: `${BASE_URL}asset/7.jpg`,
      title: 'Lovely Sunshine 🌼',
      caption: 'Membawa kehangatan dan kebahagiaan untuk orang-orang tersayang.',
      date: 'Sunny Day',
      rotation: '-2deg',
    },
    {
      id: 8,
      src: `${BASE_URL}asset/8.jpg`,
      title: 'Bestie Energy 🌺',
      caption: 'Sahabat terbaik yang selalu seru diajak cerita, curhat, dan bercanda.',
      date: 'Best Friend',
      rotation: '2.5deg',
    },
    {
      id: 9,
      src: `${BASE_URL}asset/9.jpg`,
      title: 'Sweet 23rd Year 🍰',
      caption: 'Menyambut usia ke-23 dengan penuh rasa syukur dan harapan baru.',
      date: 'Birthday Joy',
      rotation: '-1deg',
    },
    {
      id: 10,
      src: `${BASE_URL}asset/10.jpg`,
      title: 'Forever Loved 💐',
      caption: 'Terima kasih sudah menjadi sosok yang begitu istimewa, Seyla!',
      date: 'Special Edition',
      rotation: '2deg',
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="gallery"
      style={{
        padding: '70px 20px',
        maxWidth: '1200px',
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
          <Camera size={18} />
          <span>Seyla\'s Photo Scrapbook</span>
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
          Galeri Kenangan Manis Seyla 🌸
        </h2>
        <p style={{ color: '#7E6B74', marginTop: '6px', fontSize: '0.95rem' }}>
          10 potret polaroid manis berbingkai bunga pink. Klik foto mana saja untuk memperbesar!
        </p>
      </div>

      {/* Grid Scrapbook Polaroid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '34px 22px',
          padding: '10px',
        }}
      >
        {initialPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="polaroid-frame"
            style={{
              transform: `rotate(${photo.rotation})`,
              cursor: 'pointer',
            }}
          >
            {/* Washi tape decoration */}
            <div className="washi-tape" />

            {/* Photo Container */}
            <div
              style={{
                width: '100%',
                aspectRatio: '1 / 1.15',
                overflow: 'hidden',
                borderRadius: '8px',
                background: '#FFEBF1',
                position: 'relative',
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(216, 74, 117, 0.2)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <div
                  style={{
                    background: 'rgba(255, 133, 161, 0.9)',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  <ZoomIn size={16} />
                  <span>Perbesar</span>
                </div>
              </div>
            </div>

            {/* Polaroid Bottom Caption */}
            <div style={{ marginTop: '14px', textAlign: 'center' }}>
              <h4
                className="font-handwriting"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#70263E',
                  lineHeight: 1.2,
                }}
              >
                {photo.title}
              </h4>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#7E6B74',
                  marginTop: '4px',
                  lineHeight: 1.4,
                }}
              >
                {photo.caption}
              </p>
              <div
                style={{
                  marginTop: '8px',
                  fontSize: '0.75rem',
                  color: '#D84A75',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                🎀 {photo.date} 🌸
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Zoom Foto */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            background: 'rgba(63, 51, 56, 0.85)',
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
              maxWidth: '540px',
              width: '100%',
              padding: '20px',
              background: '#FFFFFF',
              position: 'relative',
              borderRadius: '24px',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#FFE4EC',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#70263E',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: '100%',
                maxHeight: '65vh',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#FFF0F5',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                style={{
                  width: '100%',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div style={{ textAlign: 'center', padding: '0 10px 10px' }}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#70263E',
                  marginBottom: '6px',
                }}
              >
                {selectedPhoto.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#55424B',
                  lineHeight: 1.6,
                }}
              >
                {selectedPhoto.caption}
              </p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  fontSize: '0.8rem',
                  color: '#D84A75',
                  fontWeight: 700,
                  background: '#FFEBF1',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                }}
              >
                🌸 {selectedPhoto.date} 🌸
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
