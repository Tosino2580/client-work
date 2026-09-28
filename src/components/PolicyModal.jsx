import React, { useEffect } from 'react';
import { X, ShieldCheck, AlertCircle } from 'lucide-react';

export default function PolicyModal({ isOpen, onAgree, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="policy-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-[24px] shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Header Strip */}
        <div className="bg-gradient-to-r from-[#121316] to-[#1e1f24] px-6 pt-6 pb-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#cf6e5b]/20 border border-[#cf6e5b]/40 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#e28775]" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#e28775] block">
                  Before You Proceed
                </span>
                <h2
                  id="policy-modal-title"
                  className="font-serif-luxury text-xl font-bold text-white leading-tight"
                >
                  Booking Policy
                </h2>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 flex-shrink-0 mt-0.5"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4 max-h-[55vh] overflow-y-auto">
          {/* Policy Block 1 */}
          <div className="bg-[#FAF6F0] border border-[#ede7de] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-[#cf6e5b]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-[#cf6e5b]">01</span>
              </div>
              <h3 className="text-sm font-bold text-[#121316]">50% Deposit Required</h3>
            </div>
            <p className="text-[13px] text-[#555760] leading-relaxed">
              A <strong className="text-[#121316]">50% deposit</strong> is required to secure your appointment.
              Your session is <strong className="text-[#121316]">not considered confirmed</strong> until the deposit
              has been received and your booking has been approved.
            </p>
          </div>

          {/* Policy Block 2 */}
          <div className="bg-[#FAF6F0] border border-[#ede7de] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-[#cf6e5b]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-[#cf6e5b]">02</span>
              </div>
              <h3 className="text-sm font-bold text-[#121316]">Location Shared After Confirmation</h3>
            </div>
            <p className="text-[13px] text-[#555760] leading-relaxed">
              Once your appointment is confirmed, you will receive the full session details including
              the <strong className="text-[#121316]">exact location and address</strong>. This information
              is only shared after deposit confirmation.
            </p>
          </div>

          {/* Policy Block 3 */}
          <div className="bg-[#FAF6F0] border border-[#ede7de] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-[#cf6e5b]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-[#cf6e5b]">03</span>
              </div>
              <h3 className="text-sm font-bold text-[#121316]">Adults Only — 18+</h3>
            </div>
            <p className="text-[13px] text-[#555760] leading-relaxed">
              By proceeding you confirm that you are <strong className="text-[#121316]">18 years of age or older</strong>{' '}
              and that all services are consensual, adult-only experiences.
            </p>
          </div>

          {/* Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Cancellations made less than 24 hours before a confirmed appointment may result in
              partial or full loss of deposit. Please reach out early if you need to reschedule.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 pb-6 pt-3 border-t border-[#ede7de] flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="sm:flex-1 py-3 px-5 rounded-full text-sm font-semibold text-[#555760] bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAgree();
            }}
            className="sm:flex-[2] py-3 px-5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] hover:from-[#efa394] hover:to-[#e28775] shadow-md shadow-[#cf6e5b]/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            I Agree — Continue
          </button>
        </div>
      </div>
    </div>
  );
}
