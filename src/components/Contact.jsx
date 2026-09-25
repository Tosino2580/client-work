import React, { useState, useRef } from 'react';
import { ChevronRight, Mail, Copy, Check, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [contentRef, contentVisible] = useScrollReveal(0.1);

  const formRef = useRef(null);
  const [copiedZangi, setCopiedZangi] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    message: '',
  });

  const handleCopyZangi = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('27-8269-4595');
    setCopiedZangi(true);
    setTimeout(() => setCopiedZangi(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormStatus('sending');

    const templateParams = {
      from_name:    formData.name,
      from_email:   formData.email,
      phone:        formData.phone   || 'Not provided',
      address:      formData.address || 'Not provided',
      city:         formData.city    || 'Not provided',
      state:        formData.state   || 'Not provided',
      zip:          formData.zip     || 'Not provided',
      message:      formData.message || 'No message',
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 6000);
    }
  };

  const directChannels = [
    {
      name: 'Text',
      value: '+1 (716) 287-0729',
      href: 'sms:+17162870729',
      bgColor: 'bg-emerald-50',
      icon: (
        <svg className="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          <circle cx="8" cy="10" r="1.5"/>
          <circle cx="12" cy="10" r="1.5"/>
          <circle cx="16" cy="10" r="1.5"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      value: 'kasiebodymassage@gmail.com',
      href: 'mailto:kasiebodymassage@gmail.com',
      bgColor: 'bg-sky-50',
      icon: <Mail className="w-4 h-4 text-sky-600" />,
    },
    {
      name: 'Signal',
      value: '+1 (716) 287-0729',
      href: 'https://signal.me/#p/+17162870729',
      bgColor: 'bg-blue-50',
      icon: (
        <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.22-1.31C8.63 21.49 10.27 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      value: '+1 (438) 230-3163',
      href: 'https://wa.me/14382303163',
      bgColor: 'bg-green-50',
      icon: (
        <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16Z"/>
        </svg>
      ),
    },
    {
      name: 'Telegram',
      value: '@kasiebodywork',
      href: 'https://t.me/kasiebodywork',
      bgColor: 'bg-sky-50',
      icon: (
        <svg className="w-4 h-4 text-[#229ED9] fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      ),
    },
    {
      name: 'Discord',
      value: 'angel_perry1',
      href: '#',
      bgColor: 'bg-indigo-50',
      icon: (
        <svg className="w-4 h-4 text-[#5865F2] fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
    },
    {
      name: 'Zangi',
      value: '27-8269-4595',
      isCopy: true,
      bgColor: 'bg-orange-50',
      icon: (
        <svg className="w-4 h-4 text-orange-600 fill-current" viewBox="0 0 24 24">
          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 7V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FAF6F0] text-[#1c1c1f] py-16 sm:py-24 px-5 sm:px-10 lg:px-14 overflow-hidden border-t border-[#ede7de]"
    >
      {/* Centered Header */}
      <div
        ref={headerRef}
        className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 reveal-on-scroll ${
          headerVisible ? 'reveal-visible' : ''
        }`}
      >
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#cf6e5b] block mb-2">
          LET&apos;S CONNECT
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-[54px] font-bold text-[#121316] tracking-tight">
          Contact Me
        </h2>
        {/* Subtle accent horizontal divider */}
        <div className="w-12 h-[2px] bg-[#cf6e5b]/40 mx-auto mt-4 mb-4" />
        <p className="max-w-md mx-auto text-sm sm:text-base text-[#5c5e66] leading-relaxed px-2">
          Ready to book your session or have a question? Reach out through any of the channels below.
        </p>
      </div>

      {/* Two Column Grid - EQUAL WIDTH CONTAINERS CENTERED IN SCREEN */}
      <div
        ref={contentRef}
        className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-start reveal-on-scroll delay-100 ${
          contentVisible ? 'reveal-visible' : ''
        }`}
      >
        {/* Left Column: Direct Channels (Equal 50% width) */}
        <div className="w-full bg-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ede6db]">
          <h3 className="font-bold text-lg text-[#121316] mb-5 sm:mb-6">
            Direct Channels
          </h3>

          <div className="space-y-1 sm:space-y-1.5">
            {directChannels.map((channel) => {
              if (channel.isCopy) {
                return (
                  <button
                    key={channel.name}
                    type="button"
                    onClick={handleCopyZangi}
                    className="w-full flex items-center justify-between py-3 px-3 sm:px-3.5 rounded-2xl hover:bg-[#FAF6F0] active:bg-[#f4eee6] transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5">
                      <div className={`w-9 h-9 rounded-full ${channel.bgColor} flex items-center justify-center shadow-xs flex-shrink-0`}>
                        {channel.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">
                          {channel.name}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#121316] group-hover:text-[#cf6e5b] transition-colors truncate block">
                          {channel.value}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-[#cf6e5b] transition-colors pr-1 flex-shrink-0">
                      {copiedZangi ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                );
              }

              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between py-3 px-3 sm:px-3.5 rounded-2xl hover:bg-[#FAF6F0] active:bg-[#f4eee6] transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className={`w-9 h-9 rounded-full ${channel.bgColor} flex items-center justify-center shadow-xs flex-shrink-0`}>
                      {channel.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">
                        {channel.name}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#121316] group-hover:text-[#cf6e5b] transition-colors truncate block">
                        {channel.value}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#cf6e5b] group-hover:translate-x-0.5 transition-all pr-1 flex-shrink-0" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Send a Message Form (Equal 50% width) */}
        <div className="w-full bg-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ede6db]">
          <h3 className="font-bold text-lg text-[#121316]">
            Send a Message
          </h3>
          <p className="text-xs text-gray-400 mt-0.5 mb-5 sm:mb-6">
            I&apos;ll get back to you as soon as possible.
          </p>

          {formStatus === 'success' && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium animate-in fade-in">
              ✅ Thank you! Your private inquiry has been sent to Kasie. She'll be in touch soon.
            </div>
          )}

          {formStatus === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium animate-in fade-in">
              ⚠️ Something went wrong. Please try reaching out directly via text or email instead.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Street address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors"
              />
            </div>

            {/* City / State / Zip row */}
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 sm:gap-4">
              <div className="sm:col-span-3">
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  State
                </label>
                <input
                  type="text"
                  placeholder="e.g. CA"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-gray-500 mb-1 whitespace-nowrap">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="12345"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#cf6e5b] focus:ring-1 focus:ring-[#cf6e5b] text-sm text-[#121316] placeholder-gray-400 transition-colors resize-none"
              />
            </div>

            {/* Send Message Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#e28775] to-[#cf6e5b] hover:from-[#efa394] hover:to-[#e28775] shadow-md shadow-[#cf6e5b]/25 hover:shadow-lg hover:shadow-[#cf6e5b]/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
