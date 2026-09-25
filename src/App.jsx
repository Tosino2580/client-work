import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Rates from './components/Rates';
import Sanctuary from './components/Sanctuary';
import Gallery from './components/Gallery';
import FullGallery from './components/FullGallery';
import Etiquette from './components/Etiquette';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash === '#gallery-page' ? 'gallery' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#gallery-page') {
        setCurrentView('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'gallery') {
      window.location.hash = 'gallery-page';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-white selection:bg-[#e28775]/30 selection:text-white relative">
      {/* Top Navigation */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main>
        {currentView === 'gallery' ? (
          <FullGallery onBackToHome={() => navigateTo('home')} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* The Experience (4-Step Journey) */}
            <Experience />

            {/* The Sanctuary (Background Video Showcase) */}
            <Sanctuary />

            {/* Rates & What's Included Section */}
            <Rates />

            {/* Featured Gallery Section matching reference */}
            <Gallery onViewFullGallery={() => navigateTo('gallery')} />

            {/* Etiquette & Expectations Section */}
            <Etiquette />

            {/* Contact Me Section */}
            <Contact />

            {/* Testimonials Carousel Section */}
            <Testimonials />
          </>
        )}
      </main>

      {/* Footer matching reference */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}





