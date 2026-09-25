import React from 'react';
import { Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Rates() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);
  const [includedRef, includedVisible] = useScrollReveal(0.1);

  const rates = [
    {
      duration: '40 MINUTES',
      price: '120',
      popular: false,
    },
    {
      duration: '60 / 90 MINUTES',
      price: '150',
      popular: true,
    },
    {
      duration: '2 HOURS',
      price: '250',
      popular: false,
    },
    {
      duration: '3 HOURS',
      price: '350',
      popular: false,
    },
    {
      duration: '4 HOURS',
      price: '450',
      popular: false,
    },
    {
      duration: 'FULL NIGHT',
      price: '600',
      popular: false,
    },
  ];

  const includedServices = [
    {
      title: 'Swedish Massage',
      description:
        'Experience complete tranquility with a personalized full-body massage, encompassing your abdomen, face, and feet. This comprehensive treatment promotes deep relaxation from head to toe, reducing stress and purifying your body and mind.',
    },
    {
      title: 'Nuru Massage',
      description:
        'Experience a deeply fluid and sensual massage with nuru, where a special gel and full-body contact create a unique gliding sensation.',
    },
    {
      title: 'Aromatherapy',
      description:
        'The use of essential oils applied topically, often diluted in a carrier oil like almond or jojoba. The massage helps the skin absorb these oils, allowing their therapeutic properties to take effect while easing muscle tension and promoting relaxation.',
    },
    {
      title: 'Deep Tissue Massage',
      description:
        'A focused massage using firmer, slower pressure to work through areas of persistent tension and tightness. Ideal for clients who prefer a deeper, more targeted approach to relaxation and muscle relief.',
    },
  ];

  return (
    <section
      id="rates"
      className="relative w-full bg-[#FAF6F0] text-[#1c1c1f] py-16 sm:py-24 px-5 sm:px-10 lg:px-14 overflow-hidden border-t border-[#ede7de]"
    >
      {/* Centered Section Header */}
      <div
        ref={headerRef}
        className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 reveal-on-scroll ${
          headerVisible ? 'reveal-visible' : ''
        }`}
      >
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#cf6e5b] block mb-2">
          INVESTMENT
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[54px] font-bold text-[#121316] tracking-tight">
          Session Rates
        </h2>
        {/* Subtle accent horizontal divider */}
        <div className="w-12 h-[2px] bg-[#cf6e5b]/40 mx-auto mt-4 mb-4" />
        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#595b63] leading-relaxed px-2">
          Choose the perfect session duration that fits your needs. Every rate includes a
          premium, personalized experience.
        </p>
      </div>

      {/* Pricing Cards Grid (3 Columns x 2 Rows) */}
      <div
        ref={cardsRef}
        className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch reveal-on-scroll delay-100 ${
          cardsVisible ? 'reveal-visible' : ''
        }`}
      >
        {rates.map((rate, idx) => (
          <div
            key={rate.duration}
            className={`relative rounded-[26px] sm:rounded-[28px] p-7 sm:p-9 flex flex-col justify-between text-center transition-all duration-300 hover:-translate-y-1.5 ${
              rate.popular
                ? 'bg-gradient-to-b from-[#d97764] to-[#cf6e5b] text-white shadow-xl shadow-[#cf6e5b]/25 transform lg:-translate-y-2'
                : 'bg-white text-[#121316] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ede6db] hover:shadow-lg hover:border-[#cf6e5b]/40'
            }`}
          >
            {/* "MOST POPULAR" Floating Badge for Featured Card */}
            {rate.popular && (
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-[#cf6e5b] text-[10px] sm:text-[10.5px] font-bold tracking-[0.18em] uppercase px-4 py-1 rounded-full shadow-md border border-[#ede7de]">
                  MOST POPULAR
                </span>
              </div>
            )}

            {/* Duration Title */}
            <div className="mt-1 sm:mt-2">
              <span
                className={`text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase block ${
                  rate.popular ? 'text-white/90' : 'text-[#6b6e76]'
                }`}
              >
                {rate.duration}
              </span>
            </div>

            {/* Price Display */}
            <div className="my-6 sm:my-8 flex items-start justify-center">
              <span
                className={`text-xl sm:text-2xl font-serif-luxury font-medium mt-1 mr-1 ${
                  rate.popular ? 'text-white/90' : 'text-[#121316]'
                }`}
              >
                $
              </span>
              <span
                className={`font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
                  rate.popular ? 'text-white' : 'text-[#121316]'
                }`}
              >
                {rate.price}
              </span>
            </div>

            {/* Book Now Button */}
            <div>
              <a
                href="#contact"
                className={`block w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  rate.popular
                    ? 'bg-white text-[#cf6e5b] hover:bg-[#fff9f8] shadow-md'
                    : 'bg-gradient-to-r from-[#e28775] to-[#cf6e5b] text-white hover:from-[#efa394] hover:to-[#e28775] shadow-md shadow-[#cf6e5b]/25 hover:shadow-lg'
                }`}
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* "What's Included" Container */}
      <div
        ref={includedRef}
        className={`max-w-6xl mx-auto mt-14 sm:mt-20 reveal-on-scroll delay-200 ${
          includedVisible ? 'reveal-visible' : ''
        }`}
      >
        <div className="bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-12 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#ede6db]">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#cf6e5b] block mb-2">
              COMPLIMENTARY WITH EVERY SESSION
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#121316]">
              What&apos;s Included
            </h3>
            <div className="w-10 h-[2px] bg-[#cf6e5b]/40 mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-[#595b63] leading-relaxed">
              Every appointment is fully customizable to your comfort and relaxation goals at no extra cost.
            </p>
          </div>

          {/* Balanced 2x2 Grid for 4 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {includedServices.map((service, idx) => (
              <div
                key={service.title}
                className="group relative bg-[#FAF6F0]/70 hover:bg-[#FAF6F0] border border-[#ede6db] hover:border-[#cf6e5b]/40 rounded-2xl sm:rounded-[22px] p-6 sm:p-7 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3.5">
                    {/* Heart Icon inside soft circle badge */}
                    <div className="w-10 h-10 rounded-full bg-white border border-[#ede6db] flex items-center justify-center text-[#cf6e5b] shadow-sm group-hover:scale-105 group-hover:border-[#cf6e5b]/40 transition-all duration-300 flex-shrink-0">
                      <Heart className="w-4 h-4 fill-[#cf6e5b]/15 stroke-current" strokeWidth={1.8} />
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#cf6e5b]/80 block">
                        MODALITY 0{idx + 1}
                      </span>
                      <h4 className="font-serif-luxury text-lg sm:text-[20px] font-bold text-[#121316] tracking-tight">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13.5px] text-[#555760] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ede6db]/60 flex items-center justify-between text-[11px] text-[#858790]">
                  <span className="font-medium">Included in all durations</span>
                  <span className="text-[#cf6e5b] font-semibold tracking-wide uppercase text-[10px]">
                    Tailored for you
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
