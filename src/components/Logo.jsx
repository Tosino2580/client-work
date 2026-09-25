import React from 'react';

export default function Logo({ isScrolled = false, className = '' }) {
  return (
    <a href="#home" className={`flex items-center gap-3.5 group cursor-pointer select-none ${className}`}>
      {/* Circular Emblem */}
      <div
        className={`relative w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden ${
          isScrolled
            ? 'bg-[#121316] text-white'
            : 'bg-white text-[#121316]'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Elegant Lotus / Crown Monogram Motif */}
          <path
            d="M50 20 C50 38 32 46 22 58 C16 65 19 78 30 80 C40 82 46 72 50 64 C54 72 60 82 70 80 C81 78 84 65 78 58 C68 46 50 38 50 20 Z"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <path d="M50 24 V65" stroke="currentColor" strokeWidth="3" />
          <path d="M50 44 C42 48 34 54 30 64" stroke="currentColor" />
          <path d="M50 44 C58 48 66 54 70 64" stroke="currentColor" />
          <circle cx="50" cy="20" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col tracking-tight text-left">
        <span
          className={`font-serif-luxury text-xl font-bold tracking-wide leading-tight transition-colors duration-200 ${
            isScrolled ? 'text-black group-hover:text-[#cf6e5b]' : 'text-white group-hover:text-[#efa394]'
          }`}
        >
          Kasie
        </span>
        <span
          className={`text-[9.5px] uppercase tracking-[0.28em] font-semibold -mt-0.5 transition-colors duration-200 ${
            isScrolled ? 'text-gray-800' : 'text-gray-200'
          }`}
        >
          BodyWork
        </span>
      </div>
    </a>
  );
}
