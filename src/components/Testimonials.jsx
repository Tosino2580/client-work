import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [carouselRef, carouselVisible] = useScrollReveal(0.1);

  const testimonials = [
    {
      initial: 'D',
      name: 'Daniel C.',
      role: 'Finance Director',
      quote:
        '“Pure relief after a brutal quarter-end crunch. The combination of skilled technique and calming atmosphere left me recharged and ready for whatever comes next—highly recommended.”',
    },
    {
      initial: 'A',
      name: 'Andrew T.',
      role: 'Creative Director',
      quote:
        '“It’s understated but incredibly effective. Kasie works with precision and care, and the entire session feels like a true escape from the noise of daily demands.”',
    },
    {
      initial: 'R',
      name: 'Ryan E.',
      role: 'Software Developer',
      quote:
        '“Her touch is both strong and gentle exactly when it needs to be. The warm table, subtle scents, and perfect pacing turn an hour into genuine renewal—my well-being staple now.”',
    },
    {
      initial: 'B',
      name: 'Benjamin F.',
      role: 'Physician',
      quote:
        '“Kasie’s ability to read the body and adjust on the fly is remarkable. After back-to-back meetings and flights, this session brought me back to myself—quiet, focused, and deeply restored.”',
    },
    {
      initial: 'W',
      name: 'William J.',
      role: 'Investor',
      quote:
        '“She has an intuitive gift; she finds the exact spots that need work and releases them without ever feeling aggressive. The serene room and thoughtful touches make it an experience I look forward to every month.”',
    },
    {
      initial: 'M',
      name: 'Marcus L.',
      role: 'Architect',
      quote:
        '“A sanctuary in every sense. Her professionalism and attentive approach create an atmosphere where you can completely let your guard down and leave feeling entirely revitalized.”',
    },
    {
      initial: 'J',
      name: 'Julian K.',
      role: 'Executive Consultant',
      quote:
        '“The level of care and personal warmth Kasie brings is rare. An unrushed, profoundly restorative experience that sets the gold standard for therapeutic bodywork.”',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef(0);

  // Responsive cards per view tracking
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-advance every 2 seconds as requested
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    setIsPaused(false);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FAF6F0] text-[#1c1c1f] py-16 sm:py-24 px-5 sm:px-10 lg:px-14 overflow-hidden border-t border-[#ede7de]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Centered Section Header */}
      <div
        ref={headerRef}
        className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 reveal-on-scroll ${
          headerVisible ? 'reveal-visible' : ''
        }`}
      >
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#cf6e5b] block mb-2">
          TESTIMONIALS
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[54px] font-bold text-[#121316] tracking-tight">
          What Clients Say
        </h2>
        {/* Subtle accent horizontal divider */}
        <div className="w-12 h-[2px] bg-[#cf6e5b]/40 mx-auto mt-4 mb-4" />
        <p className="max-w-md mx-auto text-sm sm:text-base text-[#5c5e66] leading-relaxed px-2">
          Hear from those who&apos;ve experienced the difference a session can make.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className={`max-w-6xl mx-auto relative overflow-hidden reveal-on-scroll delay-100 ${
          carouselVisible ? 'reveal-visible' : ''
        }`}
      >
        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {testimonials.concat(testimonials.slice(0, 3)).map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4"
            >
              <div className="h-full bg-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ede6db] flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Quotation Icon & Text */}
                <div>
                  {/* Luxury Quote Mark */}
                  <div className="mb-3 sm:mb-4">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-[#cf6e5b]/70 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="font-serif-luxury italic text-[14px] sm:text-[15px] leading-relaxed text-[#383a42] mb-6">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-[#f4efe8]">
                  {/* Round Initial Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#cf6e5b] text-white font-bold text-sm flex items-center justify-center shadow-xs select-none flex-shrink-0">
                    {item.initial}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-[#121316] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[12px] text-gray-500 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex % testimonials.length === idx
                ? 'w-6 h-2 bg-[#cf6e5b]'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
