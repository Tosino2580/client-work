import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Etiquette() {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [listRef, listVisible] = useScrollReveal(0.1);

  const guidelines = [
    {
      title: 'Code of Conduct',
      content:
        'Always treat kasie with respect, kindness, and courtesy. Any form of aggression, pressure, disrespect, or entitlement will immediately end the conversation or session with no refund.',
    },
    {
      title: 'Boundaries & Consent',
      content:
        'Everything that happens in a session is based on mutual comfort. Consent is ongoing and can be withdrawn at any time. If at any point she feels uncomfortable or unsafe, the session may end immediately.',
    },
    {
      title: 'Payment & Deposits',
      content:
        'First-time clients may be required to provide a deposit or verification. Full payment is expected at the start of the in-person session or prior to any digital service. No chargebacks, no time-wasting, and no games.',
    },
    {
      title: 'Age & Legal Requirements',
      content:
        'You must be at least 18 years old to contact or book Kasie. By reaching out, you confirm that you are of legal age and understand that all services are consensual, adult-only experiences.',
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="etiquette"
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
          BEFORE WE MEET
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[54px] font-bold text-[#121316] tracking-tight">
          Etiquette &amp; Expectations
        </h2>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#5c5e66] leading-relaxed mt-4 px-2">
          These guidelines protect both you and Kasie, ensuring every encounter feels safe,
          relaxed, and genuinely enjoyable.
        </p>
      </div>

      {/* Accordion List */}
      <div
        ref={listRef}
        className={`max-w-3xl mx-auto space-y-3.5 sm:space-y-4 reveal-on-scroll delay-100 ${
          listVisible ? 'reveal-visible' : ''
        }`}
      >
        {guidelines.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.title}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-white border-[#cf6e5b]/40 shadow-md shadow-[#cf6e5b]/5'
                  : 'bg-white border-[#ece5da] hover:border-[#cf6e5b]/30 shadow-sm'
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-pointer focus:outline-none select-none"
                aria-expanded={isOpen}
              >
                <span
                  className={`text-[15px] sm:text-[17px] font-semibold tracking-tight transition-colors duration-200 pr-3 ${
                    isOpen ? 'text-[#cf6e5b]' : 'text-[#121316]'
                  }`}
                >
                  {item.title}
                </span>

                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen
                      ? 'transform rotate-180 text-[#cf6e5b] bg-[#FAF6F0]'
                      : 'text-[#9c9fa8] bg-transparent'
                  }`}
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>

              {/* Accordion Content Body */}
              {isOpen && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-[13px] sm:text-[14.5px] text-[#4a4c53] leading-relaxed border-t border-[#f4efe8] animate-in fade-in duration-200">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
