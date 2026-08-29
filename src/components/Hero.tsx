import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import { UshersIncLogo } from './UshersIncLogo';
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Smartphone,
  RefreshCw,
  TrendingUp,
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const whatsappQuoteUrl = getWhatsAppLink(
    'Hi Arnold, I want to get a quote for my business website with Ushers Inc. (Found you from your website hero!)'
  );

  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Bento Tile 1: Main Hero Banner (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gradient-to-br from-[#1A3A6B] to-[#0a1529] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 flex flex-col justify-center border border-white/10 relative overflow-hidden"
          >
            {/* Radial glow backdrop */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#4A90D9] opacity-20 blur-[90px] -mr-20 -mt-20 pointer-events-none" />
            
            {/* Background Logo Watermark */}
            <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none w-96 select-none">
              <UshersIncLogo variant="light" size="xl" showTagline={false} />
            </div>

            <div className="relative z-10 space-y-5 sm:space-y-6">
              {/* Tag pill & Official Logo Emblem */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-semibold backdrop-blur-md self-start flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-[#4A90D9] animate-pulse"></span>
                  <span>Ushers Inc • Service to All</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white font-bold">From GHS 1,100</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] tracking-tight">
                Build a Website<br />
                That Builds Your<br />
                <span className="text-[#4A90D9]">Business.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-300 text-sm sm:text-lg max-w-lg font-normal leading-relaxed font-body">
                Professional web design and digital services tailored for small businesses and creatives in Ghana.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#portfolio"
                  id="hero-view-work-cta"
                  className="bg-white text-[#1A3A6B] hover:bg-gray-100 min-h-[48px] px-7 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 touch-card"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-get-quote-cta"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md min-h-[48px] px-6 py-3.5 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all active:scale-95 touch-card"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Get a Quote</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 2: Our Expertise Snapshot (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-[#111111] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 border border-white/10 flex flex-col justify-between gap-4 sm:gap-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5 font-heading">
                <span className="w-2.5 h-2.5 bg-[#4A90D9] rounded-full"></span>
                Our Expertise
              </h3>
              <button
                onClick={onOpenQuoteModal}
                className="text-xs text-[#4A90D9] hover:underline font-semibold flex items-center gap-1 cursor-pointer p-1.5 touch-card"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Calculate GHS
              </button>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {/* Service 1 */}
              <a
                href="#services"
                className="p-3.5 sm:p-4 bg-white/5 hover:bg-white/[0.08] active:bg-white/[0.1] transition-all rounded-2xl border border-white/5 space-y-1 block touch-card"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#4A90D9]" />
                    <span className="text-sm font-bold text-[#4A90D9]">Website Design</span>
                  </div>
                  <span className="text-[10px] font-bold bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                    From GHS 1,100
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-body">
                  Custom, modern websites designed to convert visitors into customers with WhatsApp lead capture.
                </p>
              </a>

              {/* Service 2 */}
              <a
                href="#services"
                className="p-3.5 sm:p-4 bg-white/5 hover:bg-white/[0.08] active:bg-white/[0.1] transition-all rounded-2xl border border-white/5 space-y-1 block touch-card"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#4A90D9]" />
                    <span className="text-sm font-bold text-[#4A90D9]">Social Media Setup</span>
                  </div>
                  <span className="text-[10px] font-bold bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                    From GHS 650
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-body">
                  Professional profiles that attract attention and build your brand authority on IG & Facebook.
                </p>
              </a>

              {/* Service 3 */}
              <a
                href="#services"
                className="p-3.5 sm:p-4 bg-white/5 hover:bg-white/[0.08] active:bg-white/[0.1] transition-all rounded-2xl border border-white/5 space-y-1 block touch-card"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-[#4A90D9]" />
                    <span className="text-sm font-bold text-[#4A90D9]">Website Redesign</span>
                  </div>
                  <span className="text-[10px] font-bold bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                    From GHS 950
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-body">
                  Give your existing site a fresh, high-performance makeover with superfast load times.
                </p>
              </a>
            </div>
          </motion.div>

          {/* Bottom Bento Row: 3 Modular Cards (4 cols each) */}

          {/* Bento Tile 3: Featured Project Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4 bg-[#1a1a1a] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 border border-white/10 flex flex-col justify-between space-y-4 touch-card"
          >
            <div className="flex justify-between items-start">
              <span className="font-bold uppercase tracking-wider text-[11px] text-gray-400">
                Featured Project
              </span>
              <span className="text-[#4A90D9] text-xs font-semibold bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                Live & Fast
              </span>
            </div>

            <div className="my-1 sm:my-2">
              <h4 className="text-lg sm:text-xl font-bold text-white font-heading">AfroChic Fashion Boutique</h4>
              <p className="text-xs text-gray-400 mt-1 font-body">E-commerce & WhatsApp Checkout Solution</p>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-gray-400 mb-1.5">
                <span>Speed & Mobile Ready</span>
                <span className="text-emerald-400 font-bold">0.8s ⚡ (100%)</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-[#4A90D9] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 4: Client Love & Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-4 bg-[#1a1a1a] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 border border-white/10 flex flex-col justify-between overflow-hidden relative space-y-4 touch-card"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase tracking-wider text-[11px] text-gray-400">
                Client Love
              </span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              </div>
            </div>

            <p className="text-xs sm:text-sm italic text-gray-300 my-1 sm:my-2 font-body leading-relaxed">
              "Arnold transformed our digital presence. The new website is faster, sleeker, and orders route seamlessly into WhatsApp!"
            </p>

            <span className="text-xs font-semibold text-white/50">
              — More testimonials coming soon
            </span>
          </motion.div>

          {/* Bento Tile 5: Let's Talk CTA Tile */}
          <motion.a
            href={getWhatsAppLink('Hi Arnold, I want to talk about building a website for my business.')}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="lg:col-span-4 bg-[#4A90D9] hover:bg-[#3a7ec9] active:scale-[0.98] text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-7 flex flex-col items-center justify-center text-center group cursor-pointer transition-all shadow-xl shadow-[#4A90D9]/20 touch-card min-h-[140px]"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 fill-white/20 text-white" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-heading mb-0.5">Let's Talk</h4>
            <p className="text-xs font-medium text-white/90">WhatsApp: {BUSINESS_INFO.displayWhatsApp}</p>
            <span className="mt-3 bg-white text-[#4A90D9] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
              Start Chat
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

