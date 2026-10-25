import React, { useState } from 'react';
import PetalsBackground from './components/PetalsBackground.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import OpeningScreen from './components/OpeningScreen.jsx';
import HeroSection from './components/HeroSection.jsx';
import CuteNotesSection from './components/CuteNotesSection.jsx';
import PhotoGallerySection from './components/PhotoGallerySection.jsx';
import LetterSection from './components/LetterSection.jsx';
import WishesSection from './components/WishesSection.jsx';
import CakeAndSurpriseSection from './components/CakeAndSurpriseSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [hasOpenedSurprise, setHasOpenedSurprise] = useState(false);
  const [autoPlayRequested, setAutoPlayRequested] = useState(false);

  const handleOpenSurprise = () => {
    setHasOpenedSurprise(true);
    setAutoPlayRequested(true);
  };

  return (
    <div className="relative min-h-screen text-[#3F3338]">
      {/* Background Falling Flower Petals */}
      <PetalsBackground />

      {/* Background Music Player */}
      <MusicPlayer isAutoPlayRequested={autoPlayRequested} />

      {/* Opening Surprise Gate / Invitation Screen */}
      {!hasOpenedSurprise && (
        <OpeningScreen onOpenSurprise={handleOpenSurprise} />
      )}

      {/* Main Birthday Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <CuteNotesSection />
        <PhotoGallerySection />
        <LetterSection />
        <WishesSection />
        <CakeAndSurpriseSection />
      </main>

      <Footer />
    </div>
  );
}
