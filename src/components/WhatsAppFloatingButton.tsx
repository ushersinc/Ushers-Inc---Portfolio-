import React, { useState } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('Hi Arnold, I want a quote for a new website!');

  const handleSend = () => {
    window.open(getWhatsAppLink(quickMsg), '_blank');
    setIsOpen(false);
  };

  const presetMessages = [
    'Hi Arnold, I need a website design (from GHS 1,100).',
    'Hi Arnold, I need social media setup for my business.',
    'Hi Arnold, I want to redesign my existing website.',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-[2rem] bg-[#111111] border border-white/10 shadow-2xl overflow-hidden p-5 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#4A90D9] flex items-center justify-center text-white font-bold text-xs">
                  A
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#111111]"></span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Arnold • Ushers Inc</p>
                <p className="text-[10px] text-emerald-400 font-medium">Online on WhatsApp (0543580030)</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300">
            👋 Hello! How can we help your business today? Pick a quick message or type your own:
          </p>

          {/* Quick presets */}
          <div className="space-y-1.5">
            {presetMessages.map((msg, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setQuickMsg(msg)}
                className={`w-full text-left text-[11px] p-2.5 rounded-xl border transition-all cursor-pointer ${
                  quickMsg === msg
                    ? 'bg-[#4A90D9]/20 border-[#4A90D9] text-white font-medium'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                }`}
              >
                {msg}
              </button>
            ))}
          </div>

          <button
            onClick={handleSend}
            className="w-full py-3 px-4 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white font-bold text-xs shadow-lg shadow-[#4A90D9]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Open WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Arnold on WhatsApp"
        id="floating-whatsapp-trigger"
        className="w-14 h-14 rounded-2xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white shadow-xl shadow-black/80 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 relative group cursor-pointer border border-white/10"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] text-white font-bold items-center justify-center">
            1
          </span>
        </span>
      </button>
    </div>
  );
};
