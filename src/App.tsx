/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSnapshot } from './components/ServicesSnapshot';
import { PortfolioSection } from './components/PortfolioSection';
import { InteractiveCalculatorSection } from './components/InteractiveCalculatorSection';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { QuoteEstimatorModal } from './components/QuoteEstimatorModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string>('basic-website');

  const handleOpenQuoteModal = (serviceId?: string) => {
    if (serviceId) {
      setQuoteServiceId(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#4A90D9] selection:text-white relative flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Page 1: Hero & Home Entrance */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Page 2: About Arnold, Ushers Inc & 4-Step Process */}
        <AboutSection />

        {/* Page 3: Services & Pricing Packages (Transparent GHS Rates + Add-ons) */}
        <ServicesSnapshot onOpenQuoteModal={(srvId) => handleOpenQuoteModal(srvId)} />

        {/* Page 4: Portfolio Showcase (Christian Event, Print Press & Case Studies) */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive GHS Cost Calculator */}
        <InteractiveCalculatorSection />

        {/* Why Choose Ushers Inc & Client Trust */}
        <TestimonialsSection />

        {/* Page 5: Contact Arnold (Phone, WhatsApp, Email, Ghana Location & Form) */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Case Study & Screenshots Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Instant Project Quote Modal */}
      <QuoteEstimatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialServiceId={quoteServiceId}
      />

      {/* Universal Floating WhatsApp Support Button (0543580030) */}
      <WhatsAppFloatingButton />
    </div>
  );
}
