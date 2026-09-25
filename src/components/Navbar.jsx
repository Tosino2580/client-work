import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentView = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      if (currentView === 'home') {
        const sections = ['home', 'about', 'rates', 'gallery', 'contact'];
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks = [
    { label: 'Home', targetId: 'home' },
    { label: 'About', targetId: 'about' },
    { label: 'Services', targetId: 'rates' },
    { label: 'Gallery', targetId: 'gallery' },
    { label: 'Contact', targetId: 'contact' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentView === 'gallery') {
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const showDarkNav = isScrolled || currentView === 'gallery';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showDarkNav
          ? 'py-3.5 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={(e) => handleNavClick(e, 'home')}
          className="cursor-pointer"
        >
          <Logo isScrolled={showDarkNav} />
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => {
            const isActive =
              currentView === 'home' && activeSection === link.targetId;

            return (
              <a
                key={link.label}
                href={`#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`text-[14.5px] font-medium transition-colors duration-200 relative group py-1 cursor-pointer ${
                  showDarkNav
                    ? isActive
                      ? 'text-[#cf6e5b] font-semibold'
                      : 'text-gray-900 hover:text-[#cf6e5b]'
                    : isActive
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${showDarkNav ? 'bg-[#cf6e5b]' : 'bg-[#e28775]'}`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:block">
          <a
            href="#rates"
            onClick={(e) => handleNavClick(e, 'rates')}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] hover:from-[#efa394] hover:to-[#e28775] shadow-md shadow-[#e28775]/25 hover:shadow-lg hover:shadow-[#e28775]/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-xl transition-colors focus:outline-none ${
              showDarkNav
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with smooth slide transition */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 transition-all duration-300 shadow-2xl border-b animate-in slide-in-from-top-4 ${
            showDarkNav
              ? 'bg-white/98 backdrop-blur-xl border-gray-100 text-gray-900'
              : 'bg-[#0c0d12]/98 backdrop-blur-xl border-white/10 text-white'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive =
                currentView === 'home' && activeSection === link.targetId;

              return (
                <a
                  key={link.label}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className={`text-base font-medium py-1.5 transition-colors cursor-pointer flex items-center justify-between ${
                    showDarkNav
                      ? isActive
                        ? 'text-[#cf6e5b] font-semibold pl-2 border-l-2 border-[#cf6e5b]'
                        : 'text-gray-800 hover:text-[#cf6e5b]'
                      : isActive
                      ? 'text-[#efa394] font-semibold pl-2 border-l-2 border-[#efa394]'
                      : 'text-gray-200 hover:text-[#efa394]'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              );
            })}

            <div className="pt-3">
              <a
                href="#rates"
                onClick={(e) => handleNavClick(e, 'rates')}
                className="block text-center w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] shadow-md shadow-[#cf6e5b]/25 active:scale-[0.98] transition-transform"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
