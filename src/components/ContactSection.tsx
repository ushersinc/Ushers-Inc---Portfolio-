import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/portfolioData';
import { UshersIncLogo } from './UshersIncLogo';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Instagram,
  Facebook,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceInterested, setServiceInterested] = useState('Basic Website (GHS 1,100)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedText = [
      `Hello Arnold! I'm reaching out from the Ushers Inc website contact form.`,
      name ? `• Name: ${name}` : '',
      email ? `• Email: ${email}` : '',
      phone ? `• Phone: ${phone}` : '',
      `• Service Interested In: ${serviceInterested}`,
      message ? `• Message: ${message}` : '',
      ``,
      `Please get back to me with project details and availability.`,
    ]
      .filter(Boolean)
      .join('\n');

    // Open WhatsApp
    window.open(getWhatsAppLink(formattedText), '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A90D9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4A90D9] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            <MessageCircle className="w-3.5 h-3.5 text-[#4A90D9] shrink-0" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Make It Easy to <span className="text-[#4A90D9]">Reach You</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-body">
            Get in touch directly with Arnold for inquiries, consultations, or quotes across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="p-7 rounded-[2rem] bg-[#111111] border border-white/10 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-15 pointer-events-none w-32 hidden sm:block select-none">
                <UshersIncLogo variant="light" size="sm" showTagline={false} />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#4A90D9]/10 border border-[#4A90D9]/30 flex items-center justify-center text-[#4A90D9]">
                  <MessageCircle className="w-6 h-6 fill-[#4A90D9]/20" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest block">
                    Fastest Direct Support
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">WhatsApp Chat</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 font-body">
                Reach Arnold on WhatsApp for instant project scoping, pricing clarifications, or design advice.
              </p>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-direct-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#4A90D9]/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp ({BUSINESS_INFO.displayWhatsApp})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Information Details */}
            <div className="p-7 rounded-[2rem] bg-[#111111] border border-white/10 shadow-xl space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Contact Information
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-3.5 text-gray-300 hover:text-white p-3 rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#4A90D9] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-semibold">Phone</span>
                    <span className="font-bold text-white font-mono">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-gray-300 hover:text-white p-3 rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 block uppercase font-semibold">WhatsApp</span>
                    <span className="font-bold text-white font-mono">{BUSINESS_INFO.displayWhatsApp}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3.5 text-gray-300 hover:text-white p-3 rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#4A90D9] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-gray-400 block uppercase font-semibold">Email</span>
                    <span className="font-bold text-white truncate block">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-gray-300 p-3 rounded-2xl border border-white/5 bg-white/5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#4A90D9] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-semibold">Location</span>
                    <span className="font-bold text-white">{BUSINESS_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-6 rounded-[2rem] bg-[#111111] border border-white/10 flex items-center justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-white block">Social Media Links</span>
                <span className="text-[11px] text-gray-400">{BUSINESS_INFO.socialMedia.handles}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={BUSINESS_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook @ushersinc"
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#4A90D9] text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors border border-white/5 text-xs font-semibold"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <a
                  href={BUSINESS_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @ushersinc"
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#4A90D9] text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors border border-white/5 text-xs font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] border border-white/10 p-7 sm:p-9 shadow-xl space-y-6"
          >
            <div className="space-y-1">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Contact Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Send your inquiry directly to Arnold. We respond quickly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. kwame@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0543580030"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                    Service Interested In *
                  </label>
                  <select
                    value={serviceInterested}
                    onChange={(e) => setServiceInterested(e.target.value)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl bg-black border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white cursor-pointer"
                  >
                    <option value="Basic Website (GHS 1,100)" className="bg-[#111111] text-white">
                      Basic Website — GHS 1,100 (1-page)
                    </option>
                    <option value="Standard Website (GHS 2,200)" className="bg-[#111111] text-white">
                      Standard Website — GHS 2,200 (3-5 pages)
                    </option>
                    <option value="Premium Website (GHS 4,500+)" className="bg-[#111111] text-white">
                      Premium Website — GHS 4,500+ (5-10 pages)
                    </option>
                    <option value="Social Media Setup (GHS 800)" className="bg-[#111111] text-white">
                      Social Media Setup — GHS 800
                    </option>
                    <option value="Website Redesign (GHS 2,000+)" className="bg-[#111111] text-white">
                      Website Redesign — GHS 2,000+
                    </option>
                    <option value="Add-on: Ongoing Maintenance (GHS 300/mo)" className="bg-[#111111] text-white">
                      Add-on: Ongoing Maintenance (GHS 300/mo)
                    </option>
                    <option value="Add-on: Content Writing (GHS 500/page)" className="bg-[#111111] text-white">
                      Add-on: Content Writing (GHS 500/page)
                    </option>
                    <option value="Add-on: Logo Design (GHS 400)" className="bg-[#111111] text-white">
                      Add-on: Logo Design (GHS 400)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell Arnold about your project requirements, goals, or questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#4A90D9] text-white placeholder-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                id="contact-form-submit-message-btn"
                className="w-full py-4 px-6 rounded-xl bg-[#4A90D9] hover:bg-[#3a7ec9] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#4A90D9]/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Quick dispatch to WhatsApp (0543580030) & Email</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
