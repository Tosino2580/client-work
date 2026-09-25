import React, { useState } from 'react';
import aboutImage from '../assets/thirteen.jpeg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [contentRef, contentVisible] = useScrollReveal(0.1);

  const traits = [
    {
      title: 'Personality',
      description:
        "A soft tone with a touch of lightness once you're at ease, always blending quiet femininity with solid calm.",
    },
    {
      title: 'Vibe',
      description:
        'A close, reassuring feel with a hint of gentle pull \u2014 steady in its movement, rich with real notice, set apart from the dull cycle of the usual.',
    },
    {
      title: 'Space',
      description:
        "A tidy spot away from it all, warmed by candlelight's easy flicker, filled with faint background sounds, set up with linens soft for settling in.",
    },
    {
      title: 'Focus',
      description:
        'To hold your look steadily, to tend to your quieter tensions with hands that know the way to quiet, to bring you into a full, natural rest right from the start.',
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#FAF6F0] text-[#1c1c1f] py-16 sm:py-24 px-5 sm:px-10 lg:px-14 overflow-hidden border-t border-[#ede7de]"
    >
      {/* Top Heading with scroll reveal */}
      <div
        ref={headerRef}
        className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 reveal-on-scroll ${
          headerVisible ? 'reveal-visible' : ''
        }`}
      >
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#cf6e5b] block mb-2">
          GET TO KNOW ME
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[54px] font-bold text-[#121316] tracking-tight">
          About Me
        </h2>
      </div>

      <div
        ref={contentRef}
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start reveal-on-scroll delay-100 ${
          contentVisible ? 'reveal-visible' : ''
        }`}
      >
        {/* Left Column: Image with exact decorative background boxes (Responsive for mobile) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start px-2 sm:px-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[430px] my-3 sm:my-4">
            {/* Top-Left Outlined Accent Box */}
            <div
              className="absolute -top-4 sm:-top-6 -left-3 sm:-left-6 w-32 sm:w-44 h-32 sm:h-44 rounded-[22px] sm:rounded-[26px] border-2 border-[#cf6e5b]/50 pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* Bottom-Right Solid Filled Accent Box */}
            <div
              className="absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 w-36 sm:w-52 h-36 sm:h-52 rounded-[24px] sm:rounded-[30px] bg-[#cf6e5b] pointer-events-none z-0 shadow-md"
              aria-hidden="true"
            />

            {/* Main Rounded Image */}
            <div className="relative z-10 w-full rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-xl sm:shadow-2xl bg-[#e8e2d8]">
              <img
                src={aboutImage}
                alt="Kasie Portrait"
                className="w-full h-auto object-cover object-center filter contrast-[1.02] block hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Bio text, Read More/Less Toggle, and 2x2 Trait Cards */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Paragraph 1 with Drop Cap 'K' */}
          <div className="text-[14.5px] sm:text-[16px] leading-[1.75] text-[#33353b]">
            <p>
              <span className="float-left font-serif-luxury text-5xl sm:text-[58px] font-bold text-[#cf6e5b] leading-[0.8] pr-3 pt-1 select-none">
                K
              </span>
              asie is a breathtaking woman with an enchanting aura that
              captivates you even before she utters a word. Her demeanor is soft
              and serene, radiating a subtle yet powerful self-assurance. With her
              warm eyes and gentle smile, she exudes a naturally feminine energy that
              invites comfort and ease.
            </p>
          </div>

          {/* Paragraph 2 */}
          <p className="mt-5 text-[14px] sm:text-[15.5px] leading-[1.75] text-[#44464d]">
            Kasie’s background weaves together a rich tapestry of intuitive bodywork,
            relaxation methods, and a heartfelt commitment to those caught in the whirlwind
            of demanding lives. Kasie draws in busy professionals, globe-trotters, and men
            who are constantly &ldquo;on&rdquo; for others, offering them a precious retreat from the
            pressures of their everyday roles. In her presence, they find a sanctuary where
            there’s no need to perform, justify, or seek approval. Here, you are guaranteed a
            King treatment where you can let go of expectations and relish in the soothing
            care that she effortlessly provides.
          </p>

          {/* Expandable Paragraphs (Paragraph 3 and 4) */}
          {isExpanded && (
            <div className="space-y-4 sm:space-y-5 mt-5 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Paragraph 3 */}
              <p className="text-[14px] sm:text-[15.5px] leading-[1.75] text-[#44464d]">
                She has a deep appreciation for gentle details that create a calm atmosphere.
                The flicker of candlelight, crisp clean sheets, comforting warm oils, and the
                embrace of slow, melodic music. Her most cherished sessions are those moments
                where time seems to stand still, allowing for calming breaths, gentle conversation,
                and a heartfelt connection that gradually releases tension from your body. Her approach
                is patient and sensual, fully attuned to your needs; she is attentively aware of
                your reactions and the silent signals your body expresses, ensuring you feel cherished
                and at ease throughout your experience.
              </p>

              {/* Paragraph 4 */}
              <p className="text-[14px] sm:text-[15.5px] leading-[1.75] text-[#44464d]">
                Her love languages are quality time and touch. She enjoys hosting gentlemen who
                value discretion, respect, and consistency. The kind of clients who understand
                that luxury is not loud, but intimate, relaxed, and deeply personal.
              </p>
            </div>
          )}

          {/* Read More / Read Less Button */}
          <div className="mt-6 mb-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] hover:from-[#efa394] hover:to-[#e28775] shadow-md shadow-[#cf6e5b]/25 hover:shadow-lg hover:shadow-[#cf6e5b]/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* 2x2 Trait Cards Grid: Positioned directly under button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {traits.map((trait, idx) => (
              <div
                key={trait.title}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#ebe4d8] hover:shadow-md hover:border-[#cf6e5b]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
              >
                <h3 className="font-serif-luxury text-base sm:text-[19px] font-bold text-[#cf6e5b] mb-2 sm:mb-2.5">
                  {trait.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4d4f56] leading-[1.65]">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
