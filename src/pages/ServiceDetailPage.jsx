import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { SEOHead } from '../components/common/SEOHead';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { QuickQuoteModal } from '../components/forms/QuickQuoteModal';
import { ServiceDetailHero } from '../components/service-detail/ServiceDetailHero';
import { ServiceProblemsSolutions } from '../components/service-detail/ServiceProblemsSolutions';
import { ServiceScopeSection } from '../components/service-detail/ServiceScopeSection';
import { ServiceEngineeringWorkflow } from '../components/service-detail/ServiceEngineeringWorkflow';
import { ServicePricingTimeline } from '../components/service-detail/ServicePricingTimeline';
import { ServiceVerifiedProjects } from '../components/service-detail/ServiceVerifiedProjects';
import { ServiceDetailFAQ } from '../components/service-detail/ServiceDetailFAQ';
import { ServiceDetailForm } from '../components/service-detail/ServiceDetailForm';
import { ServiceRelatedSection } from '../components/service-detail/ServiceRelatedSection';

export const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Match service by slug dynamically from central data file
  const service = servicesData.find((s) => s.slug === serviceSlug);

  // Fallback redirect if slug is invalid or not found
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#11161B] flex flex-col font-sans selection:bg-[#C25E38]/20 selection:text-[#C25E38]">
      {/* Dynamic Unique SEO Title, Meta Description & Canonical URL */}
      <SEOHead
        title={service.metaTitle || `${service.title} | Speeddex Construction`}
        description={service.metaDescription || service.description}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Top Notice Bar */}
      <AnnouncementBar />

      {/* Responsive Navigation */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* 1 & 2. Breadcrumbs, Hero Photography, Name, Headline & Primary CTA */}
        <ServiceDetailHero
          service={service}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />

        {/* 3. Typical Customer Problems & Speeddex Engineering Solutions */}
        <ServiceProblemsSolutions service={service} />

        {/* 4 & 5. Detailed Scope of Work, Deliverables, Inclusions, Exclusions, Customer Responsibilities */}
        <ServiceScopeSection service={service} />

        {/* 6 & 7. Project-Specific Planning, Engineering, Materials & Quality Assurance */}
        <ServiceEngineeringWorkflow service={service} />

        {/* 8 & 9. Indicative Cost Guidance & Visual Realistic Timeline */}
        <ServicePricingTimeline
          service={service}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />

        {/* 10. Relevant Verified Completed or Ongoing Projects */}
        <ServiceVerifiedProjects service={service} />

        {/* 11. Service-Specific FAQs & Transparent Answers */}
        <ServiceDetailFAQ service={service} />

        {/* 12. Service-Specific Lead Generation Form */}
        <ServiceDetailForm service={service} />

        {/* 13. Related Services & Final Strong Consultation CTA */}
        <ServiceRelatedSection
          service={service}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />
      </main>

      {/* Comprehensive Architectural Footer */}
      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Floating Sticky WhatsApp & Calling Controls */}
      <WhatsAppButton />

      {/* Quotation Pop-Up Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={service.projectType}
      />
    </div>
  );
};
