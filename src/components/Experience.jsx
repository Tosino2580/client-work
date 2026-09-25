import React from 'react';
import { Sparkles, Heart, Flame, Sun, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);

  const steps = [
    {
      step: '01',
      title: 'Arrive',
      subtitle: 'Leave the noise behind',
      description:
        'Leave the outside world and its demands at the door. Step into a calm, private setting where soft amber lighting and subtle aromatherapy immediately signal your mind that it is safe to unwind.',
      icon: <Sparkles className="w-5 h-5 text-[#cf6e5b]" />,
    },
    {
      step: '02',
      title: 'Connect',
      subtitle: 'Attuned to your comfort',
      description:
        'We take an unhurried moment to discuss your preferences, your comfort level, and what your body needs most — ensuring every part of your session is curated exclusively for you.',
      icon: <Heart className="w-5 h-5 text-[#cf6e5b]" />,
    },
    {
      step: '03',
      title: 'Unwind',
      subtitle: 'At your own pace',
      description:
        'Your session moves smoothly and without rush. Intuitive touch, warmed botanical oils, and attuned pressure work in unison to melt deep tension and quiet racing thoughts.',
      icon: <Flame className="w-5 h-5 text-[#cf6e5b]" />,
    },
    {
      step: '04',
      title: 'Reset',
      subtitle: 'Return renewed & centered',
      description:
        'There is never a sudden rush to leave. Take your time to gently reawaken, enjoy private amenities or a refreshing shower, and return to the world feeling deeply grounded, relaxed, and restored.',
      icon: <Sun className="w-5 h-5 text-[#cf6e5b]" />,
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-white text-[#1c1c1f] py-20 sm:py-28 px-5 sm:px-10 lg:px-14 border-t border-[#ede7de] overflow-hidden"
    >
      {/* Decorative ambient backdrop accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FAF6F0] rounded-full blur-3xl pointer-events-none -z-0 opacity-70" />

      {/* Header Container */}
      <div
        ref={headerRef}
        className={`relative z-10 max-w-3xl mx-auto text-center mb-14 sm:mb-20 reveal-on-scroll ${
          headerVisible ? 'reveal-visible' : ''
        }`}
      >
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#cf6e5b] block mb-2.5">
          THE EXPERIENCE
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[54px] font-bold text-[#121316] tracking-tight">
          A Moment to Slow Down
        </h2>

        {/* Accent Divider */}
        <div className="w-12 h-[2px] bg-[#cf6e5b]/40 mx-auto mt-4 mb-5" />

        <p className="text-sm sm:text-base md:text-[17px] text-[#555760] leading-relaxed">
          Life demands a relentless pace. Your session is an intentional pause from all of it.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-[#727580] leading-relaxed max-w-2xl mx-auto">
          At Kasie BodyWork, every appointment is private, unrushed, and centered around your comfort.
          From the moment you arrive, the goal is simple: create an environment where you can settle in,
          let go of the day, and enjoy being fully present.
        </p>
      </div>

      {/* 4-Step Progressive Grid */}
      <div
        ref={cardsRef}
        className={`relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 reveal-on-scroll delay-100 ${
          cardsVisible ? 'reveal-visible' : ''
        }`}
      >
        {steps.map((item, idx) => (
          <div
            key={item.title}
            className="group relative bg-[#FAF6F0]/80 hover:bg-[#FAF6F0] border border-[#ede7de] hover:border-[#cf6e5b]/40 rounded-2xl sm:rounded-[24px] p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Top Step Row */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif-luxury text-3xl font-bold text-[#cf6e5b]/30 group-hover:text-[#cf6e5b] transition-colors duration-300">
                  {item.step}
                </span>

                <div className="w-11 h-11 rounded-full bg-white border border-[#ede7de] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#cf6e5b]/40 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-serif-luxury text-2xl font-bold text-[#121316] mb-1">
                {item.title}
              </h3>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-[#cf6e5b] mb-4">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-[13.5px] text-[#555760] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Step Bottom Indicator */}
            <div className="mt-6 pt-4 border-t border-[#ede7de]/80 flex items-center justify-between text-[11px] text-[#858790]">
              <span className="font-medium tracking-wide">Phase {idx + 1} of 4</span>
              <span className="w-2 h-2 rounded-full bg-[#cf6e5b]/40 group-hover:bg-[#cf6e5b] transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Closing Statement Banner */}
      <div className="relative z-10 max-w-4xl mx-auto mt-14 sm:mt-18 text-center">
        <div className="bg-[#FAF6F0] border border-[#ede7de] rounded-2xl sm:rounded-full py-5 px-6 sm:px-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-medium text-[#121316] tracking-wide">
            <span className="text-[#cf6e5b] font-semibold">&bull;</span> No rushing. 
            <span className="mx-2 text-gray-300">|</span> 
            No distractions. 
            <span className="mx-2 text-gray-300">|</span> 
            Just time set aside for you.
          </p>

          <a
            href="#rates"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#cf6e5b] hover:text-[#b85b49] transition-colors group"
          >
            <span>Explore Session Rates</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
