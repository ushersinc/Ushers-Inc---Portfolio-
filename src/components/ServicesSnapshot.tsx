import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, ADD_ON_SERVICES, BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import { Service, AddOnService } from '../types';
import {
  Monitor,
  Layers,
  Sparkles,
  Smartphone,
  RefreshCw,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  FileText,
  Palette,
  Phone,
} from 'lucide-react';

interface ServicesSnapshotProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesSnapshot: React.FC<ServicesSnapshotProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: Service['iconName']) => {
    switch (iconName) {
      case 'monitor':
        return <Monitor className="w-6 h-6 text-[#4A90D9]" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-[#4A90D9]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#4A90D9]" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6 text-[#4A90D9]" />;
      case 'refresh-cw':
        return <RefreshCw className="w-6 h-6 text-[#4A90D9]" />;
      default:
        return <Monitor className="w-6 h-6 text-[#4A90D9]" />;
    }
  };

  const getAddOnIcon = (icon: AddOnService['icon']) => {
    switch (icon) {
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'file-text':
        return <FileText className="w-5 h-5 text-[#4A90D9]" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#4A90D9]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4A90D9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4A90D9] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            <Layers className="w-3.5 h-3.5 text-[#4A90D9] shrink-0" />
            <span>Packages & Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clearly Explained <span className="text-[#4A90D9]">Packages & Pricing</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-body">
            High-converting website packages and digital assets tailored for Ghana small businesses.
          </p>
        </div>

        {/* 5 Core Service Packages (Bento Grid) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>Service Packages</span>
            </h3>
            <span className="text-xs text-[#4A90D9] font-semibold bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              From GHS 1,100
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES.map((service, index) => {
              const whatsappServiceUrl = getWhatsAppLink(service.whatsappMessage);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-[2rem] p-5 sm:p-7 transition-all duration-300 border flex flex-col justify-between ${
                    service.popular
                      ? 'bg-gradient-to-b from-[#101b2f] to-[#111111] border-[#4A90D9]/60 shadow-2xl shadow-[#4A90D9]/15 ring-1 ring-[#4A90D9]/40'
                      : 'bg-[#111111] hover:bg-[#151515] border-white/10 hover:border-white/20 shadow-lg'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#4A90D9] text-white text-[10px] font-black tracking-widest uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap z-10">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>Recommended for Starters</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Header: Icon & Price Pill */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {getIcon(service.iconName)}
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                          Starting Price
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#4A90D9] bg-white/5 px-3 py-1 rounded-full border border-white/10 inline-block font-heading">
                          {service.priceNote}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                        {service.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#4A90D9] mt-0.5">
                        {service.shortDesc}
                      </p>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-body">
                      {service.fullDesc}
                    </p>

                    {/* Features List */}
                    <div className="pt-2 space-y-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        Included Features:
                      </span>
                      <div className="space-y-1.5">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2 text-xs text-gray-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4A90D9] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-5 mt-5 border-t border-white/10 space-y-2">
                    <a
                      href={whatsappServiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full min-h-[46px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] touch-card ${
                        service.popular
                          ? 'bg-[#4A90D9] hover:bg-[#3a7ec9] text-white shadow-md shadow-[#4A90D9]/30'
                          : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 fill-current/20" />
                      <span>Choose {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => onOpenQuoteModal(service.id)}
                      className="w-full min-h-[38px] py-1 text-xs font-semibold text-gray-400 hover:text-white transition-colors text-center cursor-pointer touch-card flex items-center justify-center"
                    >
                      Customize with add-ons →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Add-On Services Section */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest block">
              Enhance Your Website
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Add-On Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-body">
              Flexible add-ons to keep your website fresh, articulate, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {ADD_ON_SERVICES.map((addon, idx) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-[2rem] bg-[#111111] hover:bg-[#151515] border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between touch-card"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getAddOnIcon(addon.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-emerald-400 border border-white/10 font-heading">
                      {addon.price}
                    </span>
                  </div>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                    {addon.title}
                  </h4>

                  <p className="text-xs text-gray-400 leading-relaxed font-body">
                    {addon.description}
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(`Hi Arnold, I want to inquire about adding the ${addon.title} (${addon.price}) to my website project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-gray-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all touch-card"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#4A90D9]" />
                  <span>Add to My Project</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Primary Page 3 CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-r from-[#111D36] via-[#1A3A6B] to-[#111D36] border border-[#4A90D9]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest block">
              Direct Access to Arnold
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Ready to get started? Chat with me on WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 font-body">
              Let's discuss your project goals, recommend the ideal package, and launch your site quickly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink('Hi Arnold, I am ready to get started on my website project with Ushers Inc!')}
              target="_blank"
              rel="noopener noreferrer"
              id="services-section-whatsapp-cta-btn"
              className="px-7 py-4 rounded-2xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white font-bold text-sm shadow-xl shadow-black/40 flex items-center gap-2.5 transition-all group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
              <span>WhatsApp: {BUSINESS_INFO.displayWhatsApp}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
