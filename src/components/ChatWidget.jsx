import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    alert(`Thank you for reaching out! Kasie's private concierge will respond shortly.`);
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#13141a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 text-white transition-all transform animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="text-sm font-semibold text-white">Kasie Concierge</h4>
                <p className="text-[11px] text-gray-400">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-3 text-xs text-gray-300">
            <div className="bg-white/5 p-3 rounded-xl rounded-tl-sm border border-white/5">
              Hello! Looking to arrange a private, unrushed escape or have questions about our sessions? Send a discreet note below.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your discreet message..."
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#e28775] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#e28775] hover:bg-[#efa394] text-white p-2 rounded-xl transition-all shadow-md shadow-[#e28775]/20"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Badge matching reference */}
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {/* Curved / Arc Text "We Are Here!" Badge */}
        <div className="relative flex items-center justify-center">
          {/* Subtle rotation svg for text */}
          <div className="absolute -top-5 -left-5 w-24 h-24 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="curve"
                d="M 18,52 A 34,34 0 0,1 82,52"
                fill="transparent"
              />
              <text className="text-[10px] font-extrabold fill-white tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  We Are Here!
                </textPath>
              </text>
            </svg>
          </div>

          {/* Waving Hand Badge */}
          <span className="absolute -left-2 top-3 text-xl z-20 transform -rotate-12 group-hover:rotate-12 transition-transform duration-300">
            👋
          </span>

          {/* Glowing Green Button */}
          <button
            type="button"
            className="w-14 h-14 rounded-full bg-[#00a86b] hover:bg-[#00c27a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(0,168,107,0.45)] hover:shadow-[0_10px_30px_rgba(0,168,107,0.6)] transform group-hover:scale-105 active:scale-95 transition-all duration-300 relative z-10"
            aria-label="Open chat concierge"
          >
            <MessageSquare className="w-6 h-6 fill-white stroke-none" />
          </button>
        </div>
      </div>
    </div>
  );
}
