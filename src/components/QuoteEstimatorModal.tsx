import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import {
  X,
  Calculator,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface QuoteEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteEstimatorModal: React.FC<QuoteEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'website-design',
}) => {
  const [serviceType, setServiceType] = useState<string>(initialServiceId);
  const [pages, setPages] = useState<'1-page' | '3-5-pages' | '6-10-pages'>('1-page');
  const [needsEcommerce, setNeedsEcommerce] = useState<boolean>(false);
  const [needsSocialMedia, setNeedsSocialMedia] = useState<boolean>(false);
  const [needsFastTrack, setNeedsFastTrack] = useState<boolean>(false);
  const [businessName, setBusinessName] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');

  useEffect(() => {
    if (initialServiceId) {
      setServiceType(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  // Pricing calculation in GHS
  let basePrice = 1100;
  if (serviceType === 'social-media-setup') basePrice = 650;
  if (serviceType === 'website-redesign') basePrice = 950;

  let pageAddon = 0;
  if (serviceType !== 'social-media-setup') {
    if (pages === '3-5-pages') pageAddon = 450;
    if (pages === '6-10-pages') pageAddon = 850;
  }

  const ecommerceAddon = needsEcommerce ? 600 : 0;
  const socialAddon = needsSocialMedia ? 400 : 0;
  const fastTrackAddon = needsFastTrack ? 350 : 0;

  const estimatedTotal = basePrice + pageAddon + ecommerceAddon + socialAddon + fastTrackAddon;

  const getServiceLabel = () => {
    if (serviceType === 'website-design') return 'Website Design';
    if (serviceType === 'social-media-setup') return 'Social Media Setup';
    return 'Website Redesign';
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Hello Arnold! I used the instant cost estimator on the Ushers Inc website.`,
      clientName ? `• My Name: ${clientName}` : '',
      businessName ? `• Business Name: ${businessName}` : '',
      `• Primary Service: ${getServiceLabel()}`,
      serviceType !== 'social-media-setup' ? `• Scope: ${pages}` : '',
      needsEcommerce ? `• E-Commerce / MoMo Payment Integration: Yes` : '',
      needsSocialMedia ? `• Social Media Setup Package: Yes` : '',
      needsFastTrack ? `• Express Turnaround: Yes` : '',
      `• Estimated Total: GHS ${estimatedTotal.toLocaleString()}`,
      ``,
      `Could we discuss finalizing this project? Thank you!`,
    ]
      .filter(Boolean)
      .join('\n');

    return getWhatsAppLink(lines);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 shadow-2xl text-gray-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/10 text-[#4A90D9]">
              <Calculator className="w-3.5 h-3.5 text-[#4A90D9]" />
              <span>Instant GHS Cost Calculator</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
              Get an Instant Quote for Your Project
            </h3>
            <p className="text-xs text-gray-400">
              Transparent rates for Ghana businesses. Generate a customized quote and connect directly with Arnold.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Select Service */}
        <div className="space-y-2.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
            1. Select Primary Service:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'website-design', label: '🖥️ Website Design', price: 'GHS 1,100' },
              { id: 'social-media-setup', label: '📱 Social Media Setup', price: 'GHS 650' },
              { id: 'website-redesign', label: '🔄 Website Redesign', price: 'GHS 950' },
            ].map((srv) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => setServiceType(srv.id)}
                className={`min-h-[64px] p-3.5 rounded-2xl text-left border transition-all cursor-pointer active:scale-[0.98] touch-card ${
                  serviceType === srv.id
                    ? 'bg-[#4A90D9]/30 border-[#4A90D9] shadow-md text-white ring-2 ring-[#4A90D9]/50'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20 active:bg-white/10'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm">{srv.label}</div>
                <div className="text-[11px] text-[#4A90D9] font-semibold mt-1">
                  Base: {srv.price}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Page count (if website) */}
        {serviceType !== 'social-media-setup' && (
          <div className="space-y-2.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
              2. Website Scope & Size:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: '1-page', label: 'Single Page', extra: '+ GHS 0' },
                { id: '3-5-pages', label: '3 to 5 Pages', extra: '+ GHS 450' },
                { id: '6-10-pages', label: '6 to 10 Pages', extra: '+ GHS 850' },
              ].map((pg) => (
                <button
                  key={pg.id}
                  type="button"
                  onClick={() => setPages(pg.id as any)}
                  className={`min-h-[58px] p-3 rounded-2xl text-left border transition-all cursor-pointer active:scale-[0.98] touch-card ${
                    pages === pg.id
                      ? 'bg-[#4A90D9]/30 border-[#4A90D9] text-white ring-2 ring-[#4A90D9]/50'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 active:bg-white/10'
                  }`}
                >
                  <div className="font-semibold text-xs">{pg.label}</div>
                  <div className="text-[10px] text-gray-400 mt-1">{pg.extra}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Optional Add-ons */}
        <div className="space-y-2.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
            3. Optional Add-ons & Integrations:
          </label>
          <div className="space-y-2">
            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-all active:scale-[0.99] touch-card">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={needsEcommerce}
                  onChange={(e) => setNeedsEcommerce(e.target.checked)}
                  className="w-4 h-4 rounded text-[#4A90D9] bg-black/40 border-white/20 focus:ring-[#4A90D9]"
                />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    E-Commerce Catalog & Mobile Money / Paystack Ready
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Product listings, cart, and automated order notifications
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400 shrink-0">+ GHS 600</span>
            </label>

            {serviceType !== 'social-media-setup' && (
              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-all active:scale-[0.99] touch-card">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={needsSocialMedia}
                    onChange={(e) => setNeedsSocialMedia(e.target.checked)}
                    className="w-4 h-4 rounded text-[#4A90D9] bg-black/40 border-white/20 focus:ring-[#4A90D9]"
                  />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Bundled Social Media Profile Setup Package
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Cohesive branding for Instagram & Facebook (@ushersinc standard)
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 shrink-0">+ GHS 400</span>
              </label>
            )}

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-all active:scale-[0.99] touch-card">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={needsFastTrack}
                  onChange={(e) => setNeedsFastTrack(e.target.checked)}
                  className="w-4 h-4 rounded text-[#4A90D9] bg-black/40 border-white/20 focus:ring-[#4A90D9]"
                />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Express 5-Day Fast-Track Delivery
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Priority queue & dedicated sprint delivery
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400 shrink-0">+ GHS 350</span>
            </label>
          </div>
        </div>

        {/* Optional Business info for quote */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="text-[11px] font-semibold text-gray-400 block mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Kwame or Sarah"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold text-gray-400 block mb-1">
              Business / Brand Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Osu Bistro & Bar"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white"
            />
          </div>
        </div>

        {/* Calculated Total Card & WhatsApp Export */}
        <div className="p-5 rounded-[2rem] bg-gradient-to-r from-blue-950/40 to-slate-900 border border-[#4A90D9]/30 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] text-[#4A90D9] uppercase font-bold tracking-widest block">
                Estimated Project Total
              </span>
              <p className="text-[11px] text-gray-400">
                All-inclusive initial quote with WhatsApp integration & mobile responsiveness
              </p>
            </div>
            <div className="text-right">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                GHS {estimatedTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#4A90D9]/20 flex items-center justify-center gap-2 group transition-all touch-card"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
              <span>Send My Quote to Arnold on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>No commitment required • Friendly local support across Ghana</span>
        </div>
      </div>
    </div>
  );
};
