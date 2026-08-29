import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, getWhatsAppLink, BUSINESS_INFO } from '../data/portfolioData';
import { Project } from '../types';
import {
  Sparkles,
  ArrowRight,
  Eye,
  Calendar,
  Layers,
  MapPin,
  CheckCircle2,
  Clock,
  Printer,
  ChevronRight,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Filter tabs including subcategory tags from user inspiration
  const categories = [
    'ALL',
    'EVENT WEBSITE',
    'BUSINESS WEBSITE',
    'STATIONERY',
    'MARKETING',
    'APPAREL',
    'SIGNAGE',
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'ALL') return true;
    const catUpper = project.category.toUpperCase();
    if (catUpper === activeCategory) return true;
    if (project.subCategories?.some((sub) => sub.toUpperCase() === activeCategory)) return true;
    return false;
  });

  return (
    <section id="portfolio" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4A90D9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4A90D9] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#4A90D9] shrink-0" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Real Client Projects & <span className="text-[#4A90D9]">Case Studies</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-body max-w-2xl">
              Explore high-performance websites engineered for Ghanaian businesses, ministries, and creative brands.
            </p>
          </div>

          {/* Clean Horizontal Filter Bar */}
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-2 bg-[#111111]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`snap-start min-h-[38px] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 touch-card shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[#4A90D9] text-white shadow-md shadow-[#4A90D9]/30 ring-1 ring-[#4A90D9]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {filteredProjects.map((project, index) => {
            const isPlaceholder = project.isPlaceholder;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`group rounded-[2rem] border overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                  isPlaceholder
                    ? 'bg-gradient-to-b from-[#0d1424] to-[#111111] border-dashed border-white/20 hover:border-[#4A90D9]/50'
                    : 'bg-[#111111] hover:bg-[#151515] border-white/10 hover:border-[#4A90D9]/50'
                }`}
              >
                {/* Thumbnail Image with Overlays */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-black/50">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                      isPlaceholder ? 'opacity-40 grayscale group-hover:grayscale-0' : 'group-hover:scale-105'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#4A90D9] border border-white/10">
                      {project.category}
                    </span>

                    {project.eventDate && (
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold text-white bg-blue-950/90 border border-blue-500/40 backdrop-blur-md flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#4A90D9]" />
                        {project.eventDate}
                      </span>
                    )}

                    {isPlaceholder && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-500/40 backdrop-blur-md">
                        Slot Available
                      </span>
                    )}
                  </div>

                  {/* Bottom Stats Preview */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1 font-medium bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] border border-white/5">
                      <MapPin className="w-3 h-3 text-[#4A90D9]" />
                      {project.location}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      {project.stats[0].label}: {project.stats[0].value}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#4A90D9] tracking-widest uppercase block">
                      {project.client}
                    </span>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#4A90D9] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-body line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Sub-category tags or tech stack */}
                  {project.subCategories && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                        Included Categories:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.subCategories.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/5 text-gray-300 border border-white/5"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="pt-4 border-t border-white/10">
                    {isPlaceholder ? (
                      <a
                        href={getWhatsAppLink('Hi Arnold, I want to book the next website slot for my business!')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-white/10 hover:bg-[#4A90D9] active:scale-[0.98] text-white text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 touch-card"
                      >
                        <MessageCircle className="w-4 h-4 fill-white/20" />
                        <span>Book Your Project Slot</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => onSelectProject(project)}
                        id={`view-case-study-btn-${project.id}`}
                        className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-white/5 hover:bg-[#4A90D9] active:scale-[0.98] text-white text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer border border-white/5 hover:border-transparent shadow-md touch-card"
                      >
                        <Eye className="w-4 h-4 text-[#4A90D9] group-hover/btn:text-white transition-colors" />
                        <span>View Case Study & Screenshots</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Pitch Script Banner for Arnold's Outreach */}
        <div className="p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest block">
                Quick Pitch Script for Prospective Clients
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Share Ushers Inc With Ambitious Businesses
              </h3>
            </div>
            <a
              href={getWhatsAppLink(
                "Hi, I'm Arnold from Ushers Inc. I specialize in building professional, modern websites for small businesses and creatives in Ghana—starting at just GHS 1,100. You can see my work at ushersinc.com. Would you be open to a quick chat about your website needs?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white text-xs font-bold flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>Forward Pitch to WhatsApp</span>
            </a>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
              "Hi [Name], I'm Arnold from Ushers Inc. I specialize in building professional, modern websites for small businesses and creatives in Ghana—starting at just GHS 1,100. You can see my work at ushersinc.com. Would you be open to a quick chat about your website needs?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
