import React, { useEffect, useRef } from 'react';
import heroImage from '../assets/twelve.jpeg';

export default function Hero() {
  // Subtle parallax on mouse move for the hero image
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xPct = (e.clientX / innerWidth - 0.5) * 12;
      const yPct = (e.clientY / innerHeight - 0.5) * 8;
      bgRef.current.style.transform = `scale(1.08) translate(${xPct}px, ${yPct}px)`;
    };
    const handleMouseLeave = () => {
      if (bgRef.current) bgRef.current.style.transform = 'scale(1.08) translate(0, 0)';
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center overflow-hidden pt-24 pb-10 px-6 sm:px-10"
    >
      {/* Background: Slow zoom + subtle mouse parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#090a0d]">
        <img
          ref={bgRef}
          src={heroImage}
          alt="Kasie Luxury Therapeutic Ambience"
          className="w-full h-full object-cover object-[center_25%] filter brightness-[0.78] contrast-[1.05] animate-slow-zoom"
          style={{ transition: 'transform 0.15s ease-out' }}
        />
        {/* Cinematic vignette + gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-[#090a0d]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_rgba(9,10,13,0.75)_100%)] pointer-events-none" />
      </div>

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 left-[8%] w-56 h-56 rounded-full bg-[#e28775]/5 blur-3xl orb-float-1 pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-[6%] w-72 h-72 rounded-full bg-[#cf6e5b]/6 blur-3xl orb-float-2 pointer-events-none z-0" />

      {/* Spacer */}
      <div className="w-full h-8 sm:h-12" />

      {/* Central Hero Content – staggered entrance */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center my-auto">
        {/* Pre-header Tag */}
        <div className="mb-4 inline-flex items-center hero-tag">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#e28775] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            PRIVATE &middot; DISCREET &middot; UNHURRIED
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="flex flex-col items-center tracking-tight leading-[1.08] mb-6">
          <span className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] hero-title-1">
            Therapeutic Touch,
          </span>
          <span className="font-display-luxury italic text-5xl sm:text-7xl md:text-8xl font-normal shimmer-text drop-shadow-[0_4px_25px_rgba(226,135,117,0.45)] mt-1 hero-title-2">
            Reimagined
          </span>
        </h1>

        {/* Body Text */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] mb-8 px-2 hero-body">
          A private, luxury spa and companionship experience for the gentleman who
          values softness, discretion, and unforgettable connection. One-on-one,
          unrushed sessions in a calm, intimate setting &mdash; warm oils, soft lighting,
          slow sensual touch, and real conversation. Perfect for stress relief, pampering,
          and quiet escape from everyday noise.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto hero-cta">
          {/* Primary CTA with pulse ring */}
          <a
            href="#contact"
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] hover:from-[#efa394] hover:to-[#e28775] shadow-[0_4px_20px_rgba(226,135,117,0.4)] hover:shadow-[0_6px_28px_rgba(226,135,117,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 btn-ripple pulse-ring"
          >
            <span>Book Your Escape</span>
            <span className="text-lg leading-none">&rarr;</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#rates"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-medium text-white bg-black/40 hover:bg-white/10 border border-white/30 hover:border-white/60 backdrop-blur-sm transition-all duration-200 shadow-lg shadow-black/50 hover:scale-[1.02] active:scale-[0.98] btn-ripple"
          >
            View Rates
          </a>
        </div>

        {/* Ethos Sub-text */}
        <p className="mt-8 text-xs sm:text-sm text-gray-300 font-light tracking-wide max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] hero-sub">
          Discreet. Gentle. Feminine. Every session is designed around your comfort,
          your pace, and your desires.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 mt-6 flex flex-col items-center hero-scroll">
        <a
          href="#about"
          className="group flex flex-col items-center transition-opacity hover:opacity-80"
          aria-label="Scroll down"
        >
          <div className="w-[18px] h-8 rounded-full border border-white/40 group-hover:border-[#e28775] flex justify-center pt-1.5 transition-colors duration-300">
            <div className="w-1 h-2 rounded-full bg-white group-hover:bg-[#e28775] animate-scroll-dot transition-colors duration-300" />
          </div>
        </a>
      </div>
    </section>
  );
}
