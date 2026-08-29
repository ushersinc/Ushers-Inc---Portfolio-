import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import {
  Calculator,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Globe,
  RefreshCw,
} from 'lucide-react';

export const InteractiveCalculatorSection: React.FC = () => {
  const [serviceType, setServiceType] = useState<string>('website-design');
  const [pages, setPages] = useState<'1-page' | '3-5-pages' | '6-10-pages'>('1-page');
  const [needsEcommerce, setNeedsEcommerce] = useState<boolean>(false);
  const [needsSocialMedia, setNeedsSocialMedia] = useState<boolean>(false);
  const [needsFastTrack, setNeedsFastTrack] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [businessName, setBusinessName] = useState<string>('');

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

  const getCustomWhatsAppLink = () => {
    const msg = [
      `Hello Arnold, I customized a quote on the Ushers Inc website:`,
      clientName ? `• Name: ${clientName}` : '',
      businessName ? `• Business: ${businessName}` : '',
      `• Service: ${getServiceLabel()}`,
      serviceType !== 'social-media-setup' ? `• Pages: ${pages}` : '',
      needsEcommerce ? `• E-Commerce / Online Store: Yes` : '',
      needsSocialMedia ? `• Social Media Setup: Yes` : '',
      needsFastTrack ? `• Express Turnaround: Yes` : '',
      `• Estimated Investment: GHS ${estimatedTotal.toLocaleString()}`,
      ``,
      `Can you share the next steps to start?`,
    ]
      .filter(Boolean)
      .join('\n');

    return getWhatsAppLink(msg);
  };

  return (
    <section id="calculator" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#4A90D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4A90D9] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            <Calculator className="w-3.5 h-3.5 text-[#4A90D9] shrink-0" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your Website <span className="text-[#4A90D9]">Cost in GHS</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-body">
            Pick your desired features to see transparent pricing. Export straight to Arnold on WhatsApp with 1 tap.
          </p>
        </div>

        {/* Main Bento Calculator Box */}
        <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 shadow-2xl p-6 sm:p-10 space-y-8">
          {/* Service Selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
              1. Choose Your Project Type:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'website-design',
                  label: 'Website Design',
                  sub: 'Custom, modern site',
                  price: 'From GHS 1,100',
                  icon: Globe,
                },
                {
                  id: 'social-media-setup',
                  label: 'Social Media Setup',
                  sub: 'IG & FB profile branding',
                  price: 'From GHS 650',
                  icon: Smartphone,
                },
                {
                  id: 'website-redesign',
                  label: 'Website Redesign',
                  sub: 'Fresh look & speed upgrade',
                  price: 'From GHS 950',
                  icon: RefreshCw,
                },
              ].map((item) => {
                const IconComponent = item.icon;
                const isSelected = serviceType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceType(item.id)}
                    className={`min-h-[90px] p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between active:scale-[0.98] touch-card ${
                      isSelected
                        ? 'bg-[#1A3A6B]/70 border-[#4A90D9] shadow-lg text-white ring-2 ring-[#4A90D9]/60'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20 active:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent
                        className={`w-5 h-5 ${isSelected ? 'text-[#4A90D9]' : 'text-gray-400'}`}
                      />
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm sm:text-base text-white">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
                      <div className="text-xs font-bold text-[#4A90D9] mt-2 font-heading">
                        {item.price}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Page Count (Only for Website & Redesign) */}
          {serviceType !== 'social-media-setup' && (
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                2. Approximate Size / Pages Needed:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: '1-page',
                    label: 'Single Page / Landing',
                    desc: 'Hero, Services, About, Contact & WhatsApp',
                    cost: 'Included in Base',
                  },
                  {
                    id: '3-5-pages',
                    label: '3 - 5 Pages (Standard)',
                    desc: 'Home, About, Services, Portfolio, Contact',
                    cost: '+ GHS 450',
                  },
                  {
                    id: '6-10-pages',
                    label: '6 - 10 Pages (Full SME)',
                    desc: 'Full corporate/agency multipage structure',
                    cost: '+ GHS 850',
                  },
                ].map((pg) => (
                  <button
                    key={pg.id}
                    type="button"
                    onClick={() => setPages(pg.id as any)}
                    className={`min-h-[70px] p-3.5 rounded-2xl text-left border transition-all cursor-pointer active:scale-[0.98] touch-card ${
                      pages === pg.id
                        ? 'bg-[#1A3A6B]/70 border-[#4A90D9] text-white shadow-md ring-2 ring-[#4A90D9]/50'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 active:bg-white/10'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-white">{pg.label}</div>
                    <div className="text-[11px] text-gray-400 mt-1 leading-snug">{pg.desc}</div>
                    <div className="text-[11px] font-semibold text-[#4A90D9] mt-2">{pg.cost}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons Checkboxes */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
              3. Feature Add-ons (Optional):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label
                className={`min-h-[85px] p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all active:scale-[0.98] touch-card ${
                  needsEcommerce
                    ? 'bg-[#1A3A6B]/70 border-[#4A90D9] ring-2 ring-[#4A90D9]/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20 active:bg-white/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={needsEcommerce}
                    onChange={(e) => setNeedsEcommerce(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded text-[#4A90D9] bg-black/40 border-white/20"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">E-Commerce Store</span>
                    <span className="text-[11px] text-gray-400 block mt-0.5">
                      Product catalog & MoMo ready
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#4A90D9] mt-3 font-heading">
                  + GHS 600
                </span>
              </label>

              {serviceType !== 'social-media-setup' && (
                <label
                  className={`min-h-[85px] p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all active:scale-[0.98] touch-card ${
                    needsSocialMedia
                      ? 'bg-[#1A3A6B]/70 border-[#4A90D9] ring-2 ring-[#4A90D9]/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20 active:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={needsSocialMedia}
                      onChange={(e) => setNeedsSocialMedia(e.target.checked)}
                      className="w-5 h-5 mt-0.5 rounded text-[#4A90D9] bg-black/40 border-white/20"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-white block">Social Media Setup</span>
                      <span className="text-[11px] text-gray-400 block mt-0.5">
                        Cohesive IG & FB branding
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#4A90D9] mt-3 font-heading">
                    + GHS 400
                  </span>
                </label>
              )}

              <label
                className={`min-h-[85px] p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all active:scale-[0.98] touch-card ${
                  needsFastTrack
                    ? 'bg-[#1A3A6B]/70 border-[#4A90D9] ring-2 ring-[#4A90D9]/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20 active:bg-white/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={needsFastTrack}
                    onChange={(e) => setNeedsFastTrack(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded text-[#4A90D9] bg-black/40 border-white/20"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">Express Fast-Track</span>
                    <span className="text-[11px] text-gray-400 block mt-0.5">
                      Priority 5-day delivery sprint
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#4A90D9] mt-3 font-heading">
                  + GHS 350
                </span>
              </label>
            </div>
          </div>

          {/* Quick Business Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Arnold or Sandra"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full min-h-[46px] px-4 py-2.5 text-base rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                Business / Project Name
              </label>
              <input
                type="text"
                placeholder="e.g. Accra Creative Hub"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full min-h-[46px] px-4 py-2.5 text-base rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Bento Result Card & Action */}
          <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1A3A6B] to-[#0a1529] border border-white/10 shadow-xl space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-blue-200 uppercase font-bold tracking-wider block">
                  Estimated Investment Breakdown
                </span>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                  Includes mobile optimization, WhatsApp direct lead capture, and domain setup guidance.
                </p>
              </div>
              <div className="sm:text-right">
                <div className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                  Estimated Total
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                  GHS {estimatedTotal.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#4A90D9] shrink-0" />
                <span>Service to All • Flexible installments & MoMo support</span>
              </div>

              <a
                href={getCustomWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="calculator-whatsapp-send-btn"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2.5 group transition-all touch-card"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Send Quote to Arnold on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
