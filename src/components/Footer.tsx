import React from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import { UshersIncLogo } from './UshersIncLogo';
import {
  Globe,
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowUp,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-gray-400 font-body">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 inline-block shadow-lg">
                <UshersIncLogo variant="color" size="lg" showTagline={true} className="max-w-[240px]" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Professional web design and digital services by <strong className="text-white">Arnold</strong>. Dedicated to building fast, high-converting websites for small businesses and creatives in Ghana.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @ushersinc"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-[#4A90D9] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook @ushersinc"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-[#4A90D9] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-xs text-gray-500 font-medium">@ushersinc</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#4A90D9] transition-colors">
                  Services Snapshot
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#4A90D9] transition-colors">
                  Featured Portfolio
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#4A90D9] transition-colors">
                  Cost Estimator (GHS)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#4A90D9] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#4A90D9] transition-colors">
                  About Arnold & Ushers Inc
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#4A90D9] transition-colors">
                  Contact & Brief
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & WhatsApp Button (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest">
              Direct Contact
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4A90D9] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4A90D9] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="w-full py-3 px-4 rounded-2xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#4A90D9]/20 flex items-center justify-center gap-2 group transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2 flex-wrap text-center sm:text-left">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</span>
            <span>•</span>
            <span className="text-gray-400">Tagline: "{BUSINESS_INFO.tagline}"</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
