import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

import img1 from '../assets/one.jpeg';
import img2 from '../assets/two.jpeg';
import img3 from '../assets/three.jpeg';
import img4 from '../assets/four.jpeg';
import img5 from '../assets/five.jpeg';
import img6 from '../assets/six.jpeg';
import img7 from '../assets/seven.jpeg';
import img8 from '../assets/eight.jpeg';
import img9 from '../assets/nine.jpeg';
import img10 from '../assets/ten.jpeg';
import img11 from '../assets/eleven.jpeg';
import img12 from '../assets/twelve.jpeg';
import img13 from '../assets/thirteen.jpeg';

export default function FullGallery({ onBackToHome }) {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const images = [
    { src: img13, title: 'Intimate Radiance', tag: 'Portraits' },
    { src: img3, title: 'Sensual Silhouette', tag: 'Collection' },
    { src: img12, title: 'Butterfly Reverie', tag: 'Exclusive' },
    { src: img2, title: 'Quiet Serenity', tag: 'Boudoir' },
    { src: img10, title: 'Elegance in Motion', tag: 'Portraits' },
    { src: img8, title: 'Cascading Tresses', tag: 'Collection' },
    { src: img1, title: 'Alluring Curves', tag: 'Boudoir' },
    { src: img9, title: 'Gentle Embrace', tag: 'Portraits' },
    { src: img4, title: 'Sunlit Warmth', tag: 'Collection' },
    { src: img5, title: 'Playful Reflection', tag: 'Moments' },
    { src: img6, title: 'Pure Femininity', tag: 'Boudoir' },
    { src: img7, title: 'Soft Awakening', tag: 'Collection' },
    { src: img11, title: 'Tender Gaze', tag: 'Portraits' },
  ];

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, images.length]);

  return (
    <div className="min-h-screen bg-[#090a0d] text-white pt-28 pb-24 px-6 sm:px-10 lg:px-16 animate-in fade-in duration-300">
      {/* Top Header & Navigation */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#efa394] hover:text-white transition-colors mb-4 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#e28775] block mb-2">
            COMPLETE COLLECTION
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Photo Gallery
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#book"
            onClick={onBackToHome}
            className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] hover:from-[#efa394] hover:to-[#e28775] shadow-lg shadow-[#e28775]/25 transition-all"
          >
            Book Your Session
          </a>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-[#14151b] aspect-[3/4] cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300 border border-white/5 hover:border-[#e28775]/40"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />

            {/* Hover Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#efa394] mb-1">
                {img.tag}
              </span>
              <h3 className="font-serif-luxury text-lg font-bold text-white">
                {img.title}
              </h3>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-300">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 cursor-pointer"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-4 sm:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-4 sm:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-4xl max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIdx].src}
              alt={images[selectedIdx].title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <h4 className="font-serif-luxury text-xl font-bold text-white">
                {images[selectedIdx].title}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Photo {selectedIdx + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
