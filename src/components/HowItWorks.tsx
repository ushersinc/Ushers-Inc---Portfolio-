import React from 'react';
import { motion } from 'motion/react';
import { WORK_PROCESS, GHANA_ADVANTAGES, getWhatsAppLink } from '../data/portfolioData';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Award, Zap } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4A90D9] text-[11px] font-bold uppercase tracking-[0.2em]">
            <span>Process & Guarantees</span>
            <span className="text-white/30">•</span>
            <span className="text-white">Simple & Stress-Free</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Arnold & Ushers Inc <span className="text-[#4A90D9]">Deliver Your Website</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-body">
            From your first message on WhatsApp to your live launch in Ghana, we make every step straightforward.
          </p>
        </div>

        {/* 4 Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative p-6 rounded-[2rem] bg-[#111111] hover:bg-[#151515] border border-white/10 hover:border-white/20 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-extrabold text-[#4A90D9]/50 group-hover:text-[#4A90D9] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-[#4A90D9] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#4A90D9] group-hover:text-white" />
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest">
                  Step {index + 1} of 4
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ghana Business Focus Bento Grid */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Why Ghana Businesses Choose Ushers Inc
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Built specifically around the needs of local entrepreneurs, creative founders, and SMEs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GHANA_ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[2rem] bg-[#111111] border border-white/10 space-y-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A90D9]">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                  {adv.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-body">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
