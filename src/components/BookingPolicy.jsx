import React from 'react';
import { ShieldCheck, Clock, MapPin, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const policies = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#cf6e5b]" />,
    title: '50% Deposit Required',
    body: 'A 50% deposit is required to secure your appointment. Your session is not considered confirmed until the deposit has been received and your booking has been approved by Kasie.',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#cf6e5b]" />,
    title: 'Confirmation & Details',
    body: 'Once your appointment is confirmed you will receive the full session details, including the exact location and address. Details are never shared before deposit confirmation.',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#cf6e5b]" />,
    title: 'Private & Discreet',
    body: 'All booking communications are handled directly and confidentially. Your personal information is never shared with third parties and will only be used to coordinate your session.',
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-[#cf6e5b]" />,
    title: 'Cancellation Notice',
    body: 'Cancellations made less than 24 hours before a confirmed appointment may result in partial or full loss of deposit. Please reach out as early as possible if you need to reschedule.',
  },
];

export default function BookingPolicy() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);

  return (
    <section
      id="policy"
      className="relative w-full bg-[#121316] text-white py-20 sm:py-28 px-5 sm:px-10 lg:px-14 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#cf6e5b]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-[#cf6e5b]/4 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div
        ref={headerRef}
        className={`relative z-10 max-w-3xl mx-auto text-center mb-14 sm:mb-18 reveal-on-scroll ${
          headerVisible ? 'reveal-visible' : ''
        }`}
      >
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#e28775] block mb-2.5">
          BEFORE YOU BOOK
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[52px] font-bold text-white tracking-tight">
          Booking Policy
        </h2>
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#cf6e5b] to-transparent mx-auto mt-4 mb-5" />
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
          To ensure a smooth, private, and professional experience for every client, please read
          the following booking terms carefully before reaching out.
        </p>
      </div>

      {/* Policy Cards — 2x2 Grid */}
      <div
        ref={cardsRef}
        className={`relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 reveal-on-scroll delay-100 ${
          cardsVisible ? 'reveal-visible' : ''
        }`}
      >
        {policies.map((policy, idx) => (
          <div
            key={policy.title}
            className="group relative bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#cf6e5b]/40 rounded-2xl sm:rounded-[22px] p-7 sm:p-8 transition-all duration-300"
          >
            {/* Top Row */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#cf6e5b]/12 border border-[#cf6e5b]/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#cf6e5b]/20 transition-all duration-300">
                {policy.icon}
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#cf6e5b]/70 block mb-1">
                  Policy 0{idx + 1}
                </span>
                <h3 className="font-serif-luxury text-[18px] sm:text-[20px] font-bold text-white leading-tight">
                  {policy.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <p className="text-[13px] sm:text-sm text-gray-300 leading-relaxed">
              {policy.body}
            </p>

            {/* Bottom Rule */}
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">Applies to all bookings</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cf6e5b]/40 group-hover:bg-[#cf6e5b] transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Callout Banner */}
      <div className="relative z-10 max-w-4xl mx-auto mt-12 sm:mt-14">
        <div className="bg-gradient-to-r from-[#cf6e5b]/15 via-[#cf6e5b]/10 to-[#cf6e5b]/15 border border-[#cf6e5b]/25 rounded-2xl sm:rounded-full py-5 px-6 sm:px-10 text-center">
          <p className="text-xs sm:text-[13.5px] text-gray-200 leading-relaxed">
            <span className="text-[#e28775] font-semibold">By reaching out or submitting the form below</span>
            {' '}you confirm that you have read and agree to these booking terms, that you are{' '}
            <span className="font-semibold text-white">18 years of age or older</span>, and that all
            services are consensual adult-only experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
