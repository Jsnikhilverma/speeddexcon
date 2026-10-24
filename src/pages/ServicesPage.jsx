import React, { useState } from 'react';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { QuickQuoteModal } from '../components/forms/QuickQuoteModal';
import { SectionHeading } from '../components/common/SectionHeading';
import { servicesData } from '../data/servicesData';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceIntroduction } from '../components/services/ServiceIntroduction';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceComparison } from '../components/services/ServiceComparison';
import { ProcessSteps } from '../components/services/ProcessSteps';
import { ServiceMaterials } from '../components/services/ServiceMaterials';
import { RelatedProjects } from '../components/services/RelatedProjects';
import { ServiceFAQ } from '../components/services/ServiceFAQ';
import { ServiceEnquiry } from '../components/services/ServiceEnquiry';
import { ServiceCTA } from '../components/services/ServiceCTA';

export const ServicesPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('RESIDENTIAL');

  const handleOpenQuoteModal = (service = 'RESIDENTIAL') => {
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#11161B] flex flex-col font-sans selection:bg-[#C25E38]/20 selection:text-[#C25E38]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Responsive Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

      <main className="flex-1">
        {/* 1. Breadcrumb & Page Hero */}
        <ServiceHero onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 2. Clear Introduction & Client Profiles */}
        <ServiceIntroduction />

        {/* 3 & 4. 9 Image-Led Service Categories Grid with Varied Layout */}
        <section id="services-list" className="py-20 lg:py-28 bg-[#F4F1EB] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionHeading
                align="center"
                number="02"
                badge="COMPREHENSIVE CAPABILITIES"
                title="9 Distinct Construction Domains Built For"
                highlight="Long-Term Reliability."
                description="Explore our specialized construction services. Every service is governed by clear technical specifications, fixed pricing formulas, and certified on-site supervision."
              />
            </div>

            {/* Varied Grid Layout: First card featured wide, then standard grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Turnkey (Flagship) - Featured Wide Card */}
              <ServiceCard service={servicesData[0]} featured={true} />

              {/* Other 8 Specialized Services */}
              {servicesData.slice(1).map((service) => (
                <ServiceCard key={service.id} service={service} featured={false} />
              ))}
            </div>
          </div>
        </section>

        {/* 5 & 6. Turnkey vs Labour-Contract Comparison & Scope Matrix */}
        <ServiceComparison onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 7. Universal 7-Step Construction Workflow */}
        <ProcessSteps onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 8. Materials, Specifications, QA & Site Supervision */}
        <ServiceMaterials />

        {/* 9. Featured Relevant Projects */}
        <RelatedProjects />

        {/* 10. Indian Construction Service FAQs */}
        <ServiceFAQ />

        {/* 11. Multi-factor Service Enquiry Form */}
        <ServiceEnquiry />

        {/* 12. Final Consultation & Site Visit CTA */}
        <ServiceCTA onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

      {/* Floating WhatsApp and Calling Controls */}
      <WhatsAppButton />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={selectedService}
      />
    </div>
  );
};
