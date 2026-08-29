import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, WHY_CHOOSE_US, WORK_PROCESS, getWhatsAppLink } from '../data/portfolioData';
import { UshersIncLogo } from './UshersIncLogo';
import {
  HeartHandshake,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Search,
  PenTool,
  Code2,
  Rocket,
  UserCheck,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getProcessIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5 text-[#4A90D9]" />;
      case '02':
        return <PenTool className="w-5 h-5 text-[#4A90D9]" />;
      case '03':
        return <Code2 className="w-5 h-5 text-[#4A90D9]" />;
      case '04':
        return <Rocket className="w-5 h-5 text-[#4A90D9]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#4A90D9]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#4A90D9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4A90D9] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            <HeartHandshake className="w-3.5 h-3.5 text-[#4A90D9] shrink-0" />
            <span>About Ushers Inc</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tell Your Story & <span className="text-[#4A90D9]">Build Real Trust</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-body">
            Dedicated web designer in Ghana passionate about helping small businesses shine online.
          </p>
        </div>

        {/* Bento Top: About Me & Why Choose Us Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Founder Bio Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden"
          >
            {/* Background brand watermark */}
            <div className="absolute -bottom-8 -right-8 opacity-5 pointer-events-none w-72 select-none">
              <UshersIncLogo variant="light" size="lg" showTagline={false} />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Profile Avatar / Badge Header */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1A3A6B] to-[#4A90D9] p-0.5 shadow-lg shadow-[#4A90D9]/20">
                      <div className="w-full h-full bg-[#0d1522] rounded-[14px] flex items-center justify-center text-white font-bold text-xl sm:text-2xl font-heading">
                        A
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-emerald-500 border-2 border-[#111111] flex items-center justify-center" title="Available for new projects">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white animate-pulse" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-2xl font-bold text-white">
                      Arnold
                    </h3>
                    <p className="text-xs font-semibold text-[#4A90D9] tracking-wider uppercase">
                      Founder & Lead Web Designer • Ushers Inc
                    </p>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                      📍 Ghana (Available Nationwide & Worldwide)
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 hidden sm:flex items-center">
                  <UshersIncLogo variant="color" size="sm" showTagline={false} className="h-6" />
                </div>
              </div>

              {/* Exact Stated Quotes */}
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <p className="text-sm sm:text-lg text-white font-medium leading-relaxed italic">
                    "Hi, I'm Arnold. I'm a web designer based in Ghana, and I started Ushers Inc with one mission: to help small businesses get the proper online presence they deserve."
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#1A3A6B]/20 border border-[#4A90D9]/30 space-y-2">
                  <p className="text-xs sm:text-base text-blue-200 leading-relaxed font-body">
                    "I believe every business deserves a professional, modern website—regardless of budget. That's why I offer affordable packages starting at just <strong className="text-white font-bold underline decoration-[#4A90D9] decoration-2">GHS 1,100</strong>."
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <a
                href={getWhatsAppLink('Hi Arnold, I read your story on Ushers Inc and would love to discuss a website for my business!')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#4A90D9]/20 flex items-center justify-center gap-2 transition-all touch-card"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat with Arnold ({BUSINESS_INFO.displayWhatsApp})</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>1-on-1 Direct Collaboration</span>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Ushers Inc Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-5 sm:space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest block">
                  The Ushers Inc Guarantee
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Why Choose Ushers Inc
                </h3>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed font-body">
                We combine fast execution, high aesthetic standards, and friendly local communication.
              </p>

              {/* 5 Checklist Points */}
              <div className="space-y-2.5 sm:space-y-3 pt-1">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 active:bg-white/[0.08] transition-all flex items-start gap-3 touch-card"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 leading-snug mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center text-[11px] text-gray-400 gap-2 border-t border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Dedicated to Ghanaian SMEs and creatives</span>
            </div>
          </motion.div>
        </div>

        {/* Bento Bottom: My Process (4-step visual) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest block">
              How We Work
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              My 4-Step Process
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-body">
              A smooth, transparent workflow from initial conversation to live launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {WORK_PROCESS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-[2rem] bg-[#111111] hover:bg-[#151515] active:scale-[0.99] border border-white/10 hover:border-[#4A90D9]/50 transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between touch-card"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-black text-[#4A90D9]/40">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getProcessIcon(item.step)}
                    </div>
                  </div>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-400 leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1 text-[10px] font-bold text-[#4A90D9] uppercase tracking-wider">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
