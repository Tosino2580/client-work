import React from 'react';
import { Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import massageVideo from '../assets/massage.mp4';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Sanctuary() {
  const [contentRef, contentVisible] = useScrollReveal(0.15);

  return (
    <section
      id="sanctuary"
      className="relative w-full min-h-[780px] lg:min-h-[850px] flex items-center justify-center overflow-hidden py-24 sm:py-32 px-5 sm:px-10 lg:px-16 bg-[#090a0d] text-white"
    >
      {/* Background Video with continuous loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 filter brightness-90"
        >
          <source src={massageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Multi-layered cinematic overlay for readability & luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0d]/90 via-[#090a0d]/75 to-[#090a0d]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,110,91,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Foreground Content */}
      <div
        ref={contentRef}
        className={`relative z-10 max-w-5xl mx-auto text-center reveal-on-scroll ${
          contentVisible ? 'reveal-visible' : ''
        }`}
      >
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#e28775] text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-6 sm:mb-8 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#e28775]" />
          <span>The Private Sanctuary</span>
        </div>

        {/* Main Title */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Step Into Serenity: <br />
          <span className="bg-gradient-to-r from-white via-[#FAF6F0] to-[#e28775] bg-clip-text text-transparent">
            Where Time Softens &amp; Tension Fades
          </span>
        </h2>

        {/* Subtle Accent Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#cf6e5b] to-transparent mx-auto mt-6 mb-8" />

        {/* Persuasive Storytelling Copy */}
        <div className="max-w-3xl mx-auto space-y-5 text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed font-light">
          <p>
            The moment you step inside, the rush, demands, and noise of the outside world simply cease to exist. 
            Designed as an intimate, whisper-quiet oasis, this dedicated massage sanctuary is thoughtfully crafted 
            to offer you a true haven of tranquility and absolute comfort.
          </p>
          <p className="text-gray-300">
            Soft amber candlelight, gentle therapeutic aromas, and soothing acoustic harmonies set an effortless mood of calm. 
            Your session unfolds on a plush, ergonomically heated treatment table layered with crisp, pristine linens. 
            With warm botanical oils, intuitive pressure, and unrushed devotion, every touch is customized to melt your 
            stress, relieve stubborn aches, and restore complete harmony to your body and mind.
          </p>
        </div>

        {/* Expectation Pillars / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-14 max-w-4xl mx-auto text-left">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-[#cf6e5b]/50 transition-all duration-300 hover:bg-white/[0.09] group">
            <div className="w-10 h-10 rounded-full bg-[#cf6e5b]/15 border border-[#cf6e5b]/30 flex items-center justify-center text-[#e28775] mb-4 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-white mb-2">
              Sensory Atmosphere
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light">
              Heated treatment table, flickering candles, soothing soundscapes, and artisan warm essential oils.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-[#cf6e5b]/50 transition-all duration-300 hover:bg-white/[0.09] group">
            <div className="w-10 h-10 rounded-full bg-[#cf6e5b]/15 border border-[#cf6e5b]/30 flex items-center justify-center text-[#e28775] mb-4 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-white mb-2">
              Utmost Discretion
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light">
              A private, confidential setting with generous spacing between clients ensuring zero overlap or rushing.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-[#cf6e5b]/50 transition-all duration-300 hover:bg-white/[0.09] group">
            <div className="w-10 h-10 rounded-full bg-[#cf6e5b]/15 border border-[#cf6e5b]/30 flex items-center justify-center text-[#e28775] mb-4 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-bold text-white mb-2">
              Pristine Luxury
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light">
              Hospitality-grade cleanliness, freshly laundered linens, private shower facilities, and premium care.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 sm:mt-14 flex flex-col items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-[15px] font-semibold text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] hover:from-[#efa394] hover:to-[#e28775] shadow-[0_4px_25px_rgba(226,135,117,0.45)] hover:shadow-[0_8px_35px_rgba(226,135,117,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span>Book a Session</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <p className="mt-4 text-xs text-gray-400 font-light tracking-wide">
            Strictly private &bull; Advance booking recommended &bull; Same-day subject to availability
          </p>
        </div>
      </div>
    </section>
  );
}
