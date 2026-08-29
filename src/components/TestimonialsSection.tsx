import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import { MessageSquare, Sparkles, MessageCircle, Star, ArrowRight, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4A90D9] text-[11px] font-bold uppercase tracking-[0.2em]">
            <MessageSquare className="w-3.5 h-3.5 text-[#4A90D9]" />
            <span>Client Voices</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-body">
            We are committed to delivering the highest level of craftsmanship for every client under our motto "Service to All".
          </p>
        </div>

        {/* Testimonials Bento Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#4A90D9]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            {/* Primary placeholder specified by the prompt */}
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Client testimonials coming soon
            </h3>
            <p className="text-sm text-gray-300 font-body leading-relaxed">
              We are currently completing custom web design projects for our newest client cohort in Accra, Kumasi, and across Ghana.
            </p>
          </div>

          {/* Partner Invitation Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#4A90D9] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Launch Partner Invitation</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300">
              Work directly with Arnold as one of our featured launch clients and enjoy special priority pricing starting at GHS 1,100.
            </p>
            <a
              href={getWhatsAppLink(
                'Hi Arnold, I would love to be one of your featured client projects on Ushers Inc!'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white text-xs sm:text-sm font-bold shadow-md transition-all w-full"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Become Our Next Success Story</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
