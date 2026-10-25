import React, { useState } from 'react';
import { Camera, X, Heart, Sparkles, ZoomIn } from 'lucide-react';

export default function PhotoGallerySection() {
  const BASE_URL = import.meta.env.BASE_URL;

  // Daftar foto galeri umum Seyla
  const initialPhotos = [
    {
      id: 1,
      preferredSrc: `${BASE_URL}assets/images/seyla1.jpg`,
      fallbackSrc: `${BASE_URL}assets/images/photo1.svg`,
      title: 'Blooming Beauty 🌸',
      caption: 'Senyuman termanis yang selalu menghangatkan suasana di sekitar!',
      date: '24 Oktober',
      rotation: '-2deg',
    },
    {
      id: 2,
      preferredSrc: `${BASE_URL}assets/images/seyla2.jpg`,
      fallbackSrc: `${BASE_URL}assets/images/photo2.svg`,
      title: 'Sweet & Silly Moment 🧋',
      caption: 'Momen santai, segelas kopi enak, dan tawa lepas yang tak terlupakan.',
      date: 'Forever Young',
      rotation: '3deg',
    },
    {
      id: 3,
      preferredSrc: `${BASE_URL}assets/images/seyla3.jpg`,
      fallbackSrc: `${BASE_URL}assets/images/photo3.svg`,
      title: '23rd Birthday Joy 🎂',
      caption: 'Merayakan usia baru dengan penuh rasa syukur dan harapan baik.',
      date: 'Level 23',
      rotation: '-1.5deg',
    },
    {
      id: 4,
      preferredSrc: `${BASE_URL}assets/images/seyla4.jpg`,
      fallbackSrc: `${BASE_URL}assets/images/photo4.svg`,
      title: 'Precious Memories 📸',
      caption: 'Setiap detik kebersamaan selalu menjadi kenangan yang berharga.',
      date: 'Best Moments',
      rotation: '2.5deg',
    },
    {
      id: 5,
      preferredSrc: `${BASE_URL}assets/images/seyla5.jpg`,
      fallbackSrc: `${BASE_URL}assets/images/photo5.svg`,
      title: 'Garden of Happiness 🌷',
      caption: 'Mekar dan bertumbuh menjadi sosok yang semakin luar biasa.',
      date: 'Happy Soul',
      rotation: '-2.5deg',
    },
    {
      id: 6,
      preferredSrc: `${BASE_URL}assets/images/seyla6.jpg`,
      fallbackSrc: `${BASE_URL}assets/images/photo6.svg`,
      title: 'Gift of Friendship 🎀',
      caption: 'Terima kasih sudah selalu menjadi sahabat yang begitu berharga!',
      date: 'Special Edition',
      rotation: '1.5deg',
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [imageSources, setImageSources] = useState(
    initialPhotos.reduce((acc, p) => ({ ...acc, [p.id]: p.preferredSrc }), {})
  );

  const handleImageError = (id, fallback) => {
    setImageSources((prev) => ({
      ...prev,
      [id]: fallback,
    }));
  };

  return (
    <section
      id="gallery"
      style={{
        padding: '70px 20px',
        maxWidth: '1140px',
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
          <span>Photo Scrapbook</span>
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
          Koleksi foto polaroid berbingkai bunga pink. Klik foto untuk melihat lebih jelas!
        </p>
      </div>

      {/* Grid Scrapbook Polaroid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '34px 24px',
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
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: '8px',
                background: '#FFEBF1',
                position: 'relative',
              }}
            >
              <img
                src={imageSources[photo.id]}
                alt={photo.title}
                onError={() => handleImageError(photo.id, photo.fallbackSrc)}
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
                  background: 'rgba(216, 74, 117, 0.15)',
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
                    background: 'rgba(255, 133, 161, 0.85)',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}
                >
                  <ZoomIn size={16} />
                  <span>Lihat Foto</span>
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

      {/* Info Tip Cara Ganti Foto */}
      <div
        style={{
          marginTop: '36px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.75)',
          padding: '12px 24px',
          borderRadius: '16px',
          border: '1px dashed #FFB3C6',
          maxWidth: '680px',
          margin: '36px auto 0',
          fontSize: '0.88rem',
          color: '#7E6B74',
        }}
      >
        💡 <strong>Tips:</strong> Kamu dapat mengganti foto di atas dengan foto asli Seyla! Cukup letakkan file foto di folder <code>assets/images/</code> dengan nama <code>seyla1.jpg</code>, <code>seyla2.jpg</code>, dst.
      </div>

      {/* Modal Zoom Foto */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            background: 'rgba(63, 51, 56, 0.8)',
            backdropFilter: 'blur(6px)',
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
              maxWidth: '520px',
              width: '100%',
              padding: '24px',
              background: '#FFFFFF',
              position: 'relative',
              borderRadius: '24px',
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
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: '100%',
                maxHeight: '440px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#FFF0F5',
                marginBottom: '16px',
              }}
            >
              <img
                src={imageSources[selectedPhoto.id]}
                alt={selectedPhoto.title}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '440px',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
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
                  fontSize: '1rem',
                  color: '#55424B',
                  lineHeight: 1.6,
                }}
              >
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
