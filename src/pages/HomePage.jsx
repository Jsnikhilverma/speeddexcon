import React, { useState } from 'react';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { ServicesSection } from '../components/home/ServicesSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { QualitySafety } from '../components/home/QualitySafety';
import { BudgetEstimatorTeaser } from '../components/home/BudgetEstimatorTeaser';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ConstructionDiary } from '../components/home/ConstructionDiary';
import { FAQSection } from '../components/home/FAQSection';
import { LeadGenBanner } from '../components/home/LeadGenBanner';
import { ContactSection } from '../components/home/ContactSection';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { QuickQuoteModal } from '../components/forms/QuickQuoteModal';

export const HomePage = () => {
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
      {/* 1. Announcement bar */}
      <AnnouncementBar />

      {/* 2. Premium responsive navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 3 & 4. Architectural Hero */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 5. Compact trust strip */}
        <TrustStrip />

        {/* 6. Company introduction section */}
        <CompanyIntro onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 7. Services section */}
        <ServicesSection onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 8. Featured projects section */}
        <FeaturedProjects onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 9. Why Choose Us section */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 10. Step-by-step construction journey */}
        <ProcessTimeline onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 11. Quality and safety section */}
        <QualitySafety onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 12. Construction budget estimator teaser */}
        <BudgetEstimatorTeaser onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 13. Client testimonials section */}
        <TestimonialsSection />

        {/* 14. Project progress / Construction diary */}
        <ConstructionDiary />

        {/* 15. FAQ accordion */}
        <FAQSection />

        {/* 16. Lead-generation banner */}
        <LeadGenBanner onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

        {/* 17. Contact section */}
        <ContactSection />
      </main>

      {/* 18. Comprehensive footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal('RESIDENTIAL')} />

      {/* Conversion Floating Controls */}
      <WhatsAppButton />

      {/* Quick Quote Pop-Up Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={selectedService}
      />
    </div>
  );
};
