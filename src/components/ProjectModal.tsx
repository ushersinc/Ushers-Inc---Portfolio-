import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { getWhatsAppLink, BUSINESS_INFO } from '../data/portfolioData';
import {
  X,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Smartphone,
  Laptop,
  Layers,
  MapPin,
  Calendar,
  Image as ImageIcon,
  Clock,
  Send,
  Calculator,
  Sliders,
  Check,
  ChevronRight,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'interactive'>('overview');
  const [activeDeviceView, setActiveDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<number>(0);

  // Christian Event Interactive state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regSeats, setRegSeats] = useState('1');
  const [regSubmitted, setRegSubmitted] = useState(false);

  // Print Press Interactive state
  const [printCategory, setPrintCategory] = useState<'stationery' | 'marketing' | 'apparel' | 'signage'>('stationery');
  const [printQuantity, setPrintQuantity] = useState<number>(500);
  const [printPaper, setPrintPaper] = useState<'standard' | 'premium-gloss' | 'matte-laminate'>('premium-gloss');
  const [printFastTrack, setPrintFastTrack] = useState(false);

  useEffect(() => {
    // Reset state when project changes
    setActiveTab('overview');
    setSelectedGalleryImg(0);
    setRegSubmitted(false);
  }, [project]);

  if (!project) return null;

  const whatsappProjectInquiry = getWhatsAppLink(
    `Hi Arnold, I saw your case study for "${project.title}" on Ushers Inc. I would love something similar for my business!`
  );

  // Calculate Print Press estimate
  const calculatePrintPressEstimate = () => {
    let base = 0;
    if (printCategory === 'stationery') base = 180;
    else if (printCategory === 'marketing') base = 350;
    else if (printCategory === 'apparel') base = 650;
    else if (printCategory === 'signage') base = 850;

    let multiplier = 1;
    if (printQuantity > 1000) multiplier = 2.2;
    else if (printQuantity > 500) multiplier = 1.6;
    else if (printQuantity > 250) multiplier = 1.2;

    let paperCost = printPaper === 'matte-laminate' ? 120 : printPaper === 'premium-gloss' ? 60 : 0;
    let fastTrackCost = printFastTrack ? 150 : 0;

    return Math.round(base * multiplier + paperCost + fastTrackCost);
  };

  const generatePrintWhatsAppOrder = () => {
    const total = calculatePrintPressEstimate();
    const message = `*Apex Print Press Order Inbound via Website:*\n• Category: ${printCategory.toUpperCase()}\n• Quantity: ${printQuantity} units\n• Finish: ${printPaper}\n• Priority: ${printFastTrack ? 'Express Sprint' : 'Standard'}\n• Estimated Total: GHS ${total}\n\nHi Apex Print / Arnold, please confirm availability and turnaround time.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleChristianEventRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSubmitted(true);
    const msg = `*Christian Event 2026 Registration Ticket:*\n• Name: ${regName || 'Attendee'}\n• Email: ${regEmail || 'Not provided'}\n• Seats: ${regSeats}\n• Event Date: August 15, 2026\n\nPlease confirm my seat reservation.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 shadow-2xl text-gray-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/10 text-[#4A90D9]">
                {project.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#4A90D9]" />
                {project.location}
              </span>
              {project.eventDate && (
                <span className="text-xs text-amber-300 font-semibold flex items-center gap-1 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  <Calendar className="w-3 h-3" />
                  {project.eventDate}
                </span>
              )}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-[#4A90D9] text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Overview & Metrics
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'gallery'
                ? 'bg-[#4A90D9] text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Screenshots Gallery ({project.galleryImages ? project.galleryImages.length : 3})
          </button>

          {(project.id === 'christian-event' || project.id === 'print-press') && (
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'interactive'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-emerald-400 hover:text-white hover:bg-emerald-950/40 border border-emerald-500/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Live Interactive Demo
            </button>
          )}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Interactive Device View Toggle & Simulated Preview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Simulated Device View
                </span>
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveDeviceView('desktop')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activeDeviceView === 'desktop'
                        ? 'bg-[#4A90D9] text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    Desktop
                  </button>
                  <button
                    onClick={() => setActiveDeviceView('mobile')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activeDeviceView === 'mobile'
                        ? 'bg-[#4A90D9] text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Mobile (Ghana 4G)
                  </button>
                </div>
              </div>

              {/* Device Mockup Canvas */}
              <div
                className={`mx-auto rounded-2xl overflow-hidden border border-white/10 bg-black/60 transition-all duration-300 ${
                  activeDeviceView === 'mobile' ? 'max-w-sm shadow-xl' : 'w-full shadow-2xl'
                }`}
              >
                <div className="bg-[#0a0a0a] px-4 py-2 border-b border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {project.id}.ushersinc.gh
                  </span>
                  <span className="text-[10px] text-gray-500">Live SSL 256-bit</span>
                </div>

                <div className="relative h-64 sm:h-72 overflow-hidden bg-black/40">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent flex items-end p-5">
                    <div>
                      <p className="text-xs font-semibold text-[#4A90D9] tracking-wide uppercase">
                        {project.client}
                      </p>
                      <p className="font-heading text-lg sm:text-xl font-bold text-white">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 gap-3">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1"
                >
                  <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                  <p className="text-lg sm:text-xl font-bold text-emerald-400 font-heading">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="text-rose-400">●</span> The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="text-emerald-400">●</span> Ushers Inc Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A90D9]" /> Key Deliverables
                  </h4>
                  <ul className="space-y-1.5">
                    {project.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D9]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                    Technologies Built With:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 text-xs font-medium border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            {project.testimonialSnippet && (
              <div className="p-5 rounded-2xl bg-[#1A3A6B]/30 border border-[#4A90D9]/30 space-y-1.5">
                <p className="text-xs sm:text-sm italic text-blue-200">
                  "{project.testimonialSnippet.quote}"
                </p>
                <p className="text-xs font-bold text-white">
                  — {project.testimonialSnippet.author},{' '}
                  <span className="text-gray-400 font-normal">{project.testimonialSnippet.role}</span>
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SCREENSHOTS GALLERY (3-4 Images) */}
        {activeTab === 'gallery' && project.galleryImages && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Main Selected Image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/80">
              <div className="relative h-80 sm:h-96">
                <img
                  src={project.galleryImages[selectedGalleryImg].url}
                  alt={project.galleryImages[selectedGalleryImg].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#4A90D9] text-white">
                      Image {selectedGalleryImg + 1} of {project.galleryImages.length}
                    </span>
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                      {project.galleryImages[selectedGalleryImg].title}
                    </h4>
                    <p className="text-xs text-gray-300">
                      {project.galleryImages[selectedGalleryImg].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryImg(idx)}
                  className={`p-1.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedGalleryImg === idx
                      ? 'border-[#4A90D9] bg-[#4A90D9]/20 ring-2 ring-[#4A90D9]/40'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="h-20 rounded-lg overflow-hidden mb-1.5">
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-bold text-white truncate">{img.title}</p>
                  <p className="text-[10px] text-gray-400 truncate">Screenshot {idx + 1}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: LIVE INTERACTIVE DEMO (For Christian Event & Print Press) */}
        {activeTab === 'interactive' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {project.id === 'christian-event' && (
              <div className="space-y-6">
                {/* Event Countdown Simulation */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-500/40 text-center space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-blue-200">
                    <Clock className="w-3.5 h-3.5 text-[#4A90D9]" />
                    Live Event Countdown
                  </span>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    Kingdom Gatherings Conference 2026
                  </h4>
                  <p className="text-xs text-blue-200">
                    August 15, 2026 • Accra International Conference Centre, Ghana
                  </p>

                  <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto pt-2">
                    {[
                      { label: 'DAYS', val: '168' },
                      { label: 'HOURS', val: '14' },
                      { label: 'MINS', val: '42' },
                      { label: 'SECS', val: '08' },
                    ].map((unit, uIdx) => (
                      <div key={uIdx} className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                        <span className="font-heading text-xl font-bold text-white block">
                          {unit.val}
                        </span>
                        <span className="text-[9px] font-bold text-gray-400">{unit.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Speaker Bios Simulation */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Featured Speakers & Ministration
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: 'Dr. Mensah Otabil', topic: 'Strategic Leadership in Kingdom Growth' },
                      { name: 'Pastor Nathaniel Bassey', topic: 'Worship & Atmosphere of Miracles' },
                      { name: 'Rev. Eastwood Anaba', topic: 'Faith, Power & Revival in Africa' },
                    ].map((spk, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                        <div className="w-8 h-8 rounded-full bg-[#4A90D9]/20 text-[#4A90D9] font-bold flex items-center justify-center text-xs">
                          {spk.name[0]}
                        </div>
                        <p className="text-xs font-bold text-white">{spk.name}</p>
                        <p className="text-[11px] text-gray-400 leading-snug">{spk.topic}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Embedded Attendee Registration Form */}
                <div className="p-6 rounded-2xl bg-[#151515] border border-white/10 space-y-4">
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#4A90D9]" />
                      <span>Test Attendee Registration Flow</span>
                    </h5>
                    <p className="text-xs text-gray-400">
                      Submitting generates an instant ticket reservation confirmation on WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleChristianEventRegister} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#4A90D9]"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#4A90D9]"
                        required
                      />
                      <select
                        value={regSeats}
                        onChange={(e) => setRegSeats(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs text-white focus:outline-none focus:border-[#4A90D9]"
                      >
                        <option value="1">1 Ticket (Individual)</option>
                        <option value="2">2 Tickets (Couple)</option>
                        <option value="5">5 Tickets (Ministry Team)</option>
                        <option value="10">10 Tickets (VIP Delegation)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Simulate Registration & Send Ticket to WhatsApp</span>
                    </button>
                  </form>
                </div>
              </div>
            )}

            {project.id === 'print-press' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950/60 border border-[#4A90D9]/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest block">
                        Apex Print Press Dynamic Configurator
                      </span>
                      <h4 className="font-heading text-xl font-bold text-white">
                        Interactive Print Order Estimator
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block uppercase">Estimated GHS</span>
                      <span className="text-xl font-extrabold text-emerald-400 font-heading">
                        GHS {calculatePrintPressEstimate()}
                      </span>
                    </div>
                  </div>

                  {/* Category Filter Tabs */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      1. Select Print Category:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'stationery', label: 'Stationery & Cards' },
                        { id: 'marketing', label: 'Marketing & Flyers' },
                        { id: 'apparel', label: 'Branded Apparel' },
                        { id: 'signage', label: 'Signage & Banners' },
                      ].map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setPrintCategory(c.id as any)}
                          className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            printCategory === c.id
                              ? 'bg-[#4A90D9] text-white shadow-md'
                              : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity & Finish Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                        Quantity: {printQuantity} pieces
                      </label>
                      <input
                        type="range"
                        min="100"
                        max="2500"
                        step="100"
                        value={printQuantity}
                        onChange={(e) => setPrintQuantity(Number(e.target.value))}
                        className="w-full accent-[#4A90D9] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                        <span>100</span>
                        <span>500</span>
                        <span>1,000</span>
                        <span>2,500</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                        Finishing Quality:
                      </label>
                      <select
                        value={printPaper}
                        onChange={(e) => setPrintPaper(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#4A90D9]"
                      >
                        <option value="standard">Standard Matte 300gsm</option>
                        <option value="premium-gloss">Premium High-Gloss (+GHS 60)</option>
                        <option value="matte-laminate">Velvet Touch Laminate (+GHS 120)</option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={printFastTrack}
                      onChange={(e) => setPrintFastTrack(e.target.checked)}
                      className="w-4 h-4 rounded text-[#4A90D9]"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-white block">
                        24-Hour Express Sprint (+GHS 150)
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Priority press run with same-day Accra/Kumasi dispatch
                      </span>
                    </div>
                  </label>

                  <a
                    href={generatePrintWhatsAppOrder()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Submit Configured Order to WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer CTAs */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400">
            <span>Ready for a website with similar impact in Ghana?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold transition-colors cursor-pointer border border-white/10"
            >
              Close
            </button>
            <a
              href={whatsappProjectInquiry}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white text-xs font-bold shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Discuss Similar Project on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
