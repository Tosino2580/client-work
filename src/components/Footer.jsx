import React from 'react';
import Logo from './Logo';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (e, target) => {
    if (target === 'gallery') {
      e.preventDefault();
      if (onNavigate) onNavigate('gallery');
    } else {
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="w-full bg-[#0b0c10] text-white pt-16 pb-12 sm:pt-20 sm:pb-14 px-6 sm:px-10 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-10 items-start">
          {/* Column 1: Brand & Ethos (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo isScrolled={false} />
            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed max-w-sm mt-5">
              A private, luxury spa and companionship experience &mdash; discreet, gentle,
              and designed entirely around your comfort.
            </p>
          </div>

          {/* Column 2: Explore Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#cf6e5b] block mb-4">
              EXPLORE
            </span>
            <ul className="space-y-3 text-xs sm:text-[13.5px]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#rates"
                  onClick={(e) => handleLinkClick(e, '#rates')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery-page"
                  onClick={(e) => handleLinkClick(e, 'gallery')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#cf6e5b] block mb-4">
              GET IN TOUCH
            </span>

            <div className="space-y-2 text-xs sm:text-[13.5px]">
              <a
                href="sms:+17162870729"
                className="text-gray-300 hover:text-white transition-colors block"
              >
                +1 (716) 287-0729
              </a>
              <a
                href="mailto:Kasiebodywork@gmail.com"
                className="text-gray-300 hover:text-white transition-colors block"
              >
                Kasiebodywork@gmail.com
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-xs mt-4">
              By reaching out you confirm you are 18+ and that all services are consensual,
              adult-only experiences.
            </p>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-white/10 my-10 sm:my-12" />

        {/* Centered Copyright Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500 tracking-wide">
            &copy; 2025 Kasie BodyWork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
