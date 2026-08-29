import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import { UshersIncLogo } from './UshersIncLogo';
import { MessageCircle, Menu, X, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Cost Estimator', href: '#calculator' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`max-w-7xl mx-auto px-3.5 sm:px-6 py-2 transition-all duration-300 rounded-2xl border ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/90'
            : 'bg-white/5 backdrop-blur-md border-white/10'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Official Ushers Inc Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2 group focus:outline-none rounded-xl p-1 hover:bg-white/5 transition-all"
            aria-label="Ushers Inc Home"
          >
            <div className="h-8 sm:h-9 flex items-center">
              <UshersIncLogo variant="color" size="sm" showTagline={false} className="h-7 sm:h-8 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col pl-1 border-l border-white/10">
              <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight leading-none">
                USHERS INC
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#4A90D9] font-bold mt-0.5">
                Service To All
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-300 hover:text-[#4A90D9] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              id="nav-instant-estimator-btn"
              className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4A90D9]" />
              Instant Quote
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-cta-btn"
              className="bg-[#4A90D9] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#3a7ec9] shadow-md shadow-[#4A90D9]/30 transition-all flex items-center gap-2 group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white fill-white/20" />
              <span>Get a Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenQuoteModal}
              aria-label="Calculate Price"
              className="p-2.5 rounded-xl bg-white/5 text-[#4A90D9] border border-white/10 hover:bg-white/10 active:scale-95 transition-transform"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl bg-[#4A90D9]/20 text-[#4A90D9] border border-[#4A90D9]/30 hover:bg-[#4A90D9]/30 active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-[#4A90D9]/20" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white border border-white/10 active:scale-95 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden max-w-7xl mx-auto mt-2 bg-[#0c0c0c]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] px-4 py-2.5 text-sm font-semibold text-gray-200 hover:text-[#4A90D9] active:bg-white/10 rounded-xl transition-all flex items-center justify-between touch-card"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full min-h-[46px] py-2.5 px-4 text-xs font-bold text-white bg-white/10 hover:bg-white/15 active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 border border-white/10 transition-all touch-card cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#4A90D9]" />
              Calculate Website Cost (GHS)
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[46px] py-2.5 px-4 text-xs font-extrabold text-white bg-[#4A90D9] hover:bg-[#3a7ec9] active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#4A90D9]/30 transition-all touch-card"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              Get a Quote ({BUSINESS_INFO.displayWhatsApp})
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
              <Phone className="w-3.5 h-3.5 text-[#4A90D9]" />
              <span>Direct Phone: {BUSINESS_INFO.phone}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
