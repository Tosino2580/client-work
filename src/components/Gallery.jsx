import React from 'react';
import tallImage from '../assets/three.jpeg';
import gridImg1 from '../assets/two.jpeg';
import gridImg2 from '../assets/three.jpeg';
import gridImg3 from '../assets/twelve.jpeg';
import gridImg4 from '../assets/ten.jpeg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery({ onViewFullGallery }) {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#FAF6F0] text-[#1c1c1f] py-16 sm:py-24 px-5 sm:px-10 lg:px-14 overflow-hidden border-t border-[#ede7de]"
    >
      {/* Centered Header matching reference */}
      <div
        ref={headerRef}
        className={`max-w-4xl mx-auto text-center mb-10 sm:mb-14 reveal-on-scroll ${
          headerVisible ? 'reveal-visible' : ''
        }`}
      >
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#cf6e5b] block mb-2">
          MOMENTS
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[54px] font-bold text-[#121316] tracking-tight">
          Gallery
        </h2>
        {/* Subtle accent horizontal divider */}
        <div className="w-12 h-[2px] bg-[#cf6e5b]/40 mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#61636c] max-w-md mx-auto">
          A glimpse into the collection.
        </p>
      </div>

      {/* Featured Layout Grid matching reference */}
      <div
        ref={gridRef}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch reveal-on-scroll delay-100 ${
          gridVisible ? 'reveal-visible' : ''
        }`}
      >
        {/* Left Column: Tall Featured Image */}
        <div className="md:col-span-5 h-full">
          <div
            onClick={onViewFullGallery}
            className="group relative w-full h-[360px] sm:h-[480px] md:h-full min-h-[340px] md:min-h-[420px] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#e5dfd5]"
          >
            <img
              src={tallImage}
              alt="Kasie Featured Moment"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle luxury hover overlay */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <span className="px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-[#121316] tracking-wider uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                View Full Photo
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Grid of 4 Images */}
        <div className="md:col-span-7 grid grid-cols-2 gap-3.5 sm:gap-6">
          {/* Image 1: Elephant Blanket */}
          <div
            onClick={onViewFullGallery}
            className="group relative aspect-[4/3] sm:aspect-square rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#e5dfd5]"
          >
            <img
              src={gridImg1}
              alt="Kasie Moment 1"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Image 2: Fishnet Bodysuit Front */}
          <div
            onClick={onViewFullGallery}
            className="group relative aspect-[4/3] sm:aspect-square rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#e5dfd5]"
          >
            <img
              src={gridImg2}
              alt="Kasie Moment 2"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Image 3: Butterfly Bikini Top */}
          <div
            onClick={onViewFullGallery}
            className="group relative aspect-[4/3] sm:aspect-square rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#e5dfd5]"
          >
            <img
              src={gridImg3}
              alt="Kasie Moment 3"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Image 4: Arching on bed */}
          <div
            onClick={onViewFullGallery}
            className="group relative aspect-[4/3] sm:aspect-square rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#e5dfd5]"
          >
            <img
              src={gridImg4}
              alt="Kasie Moment 4"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Button below matching reference */}
      <div className="mt-10 sm:mt-12 text-center">
        <button
          onClick={onViewFullGallery}
          className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#cf6e5b] bg-transparent border-2 border-[#cf6e5b] hover:bg-[#cf6e5b] hover:text-white shadow-xs hover:shadow-md hover:shadow-[#cf6e5b]/25 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
        >
          <span>VIEW FULL GALLERY</span>
          <span className="text-base">&rarr;</span>
        </button>
      </div>
    </section>
  );
}
