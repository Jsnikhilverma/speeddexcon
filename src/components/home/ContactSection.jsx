import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { LeadForm } from '../forms/LeadForm';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            align="center"
            number="11"
            badge="GET IN TOUCH"
            title="Visit Our Office or Schedule a"
            highlight="Site Consultation."
            description="Whether you have an empty residential plot, need commercial drawings, or seek project supervision, our senior civil engineers in Indore are here to assist."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details, Contact Cards & Service Areas */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Office Card */}
            <div className="p-6 sm:p-8 bg-white border border-[#E6E1D8] rounded-xs shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-[#C25E38] font-mono text-xs uppercase tracking-widest font-semibold">
                <MapPin className="w-4 h-4 text-[#C25E38]" />
                <span>Central India Headquarters</span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0E1318] mb-2">
                {siteConfig.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed mb-6">
                {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#F0ECE4] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-mono">Direct Phone:</span>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="font-mono font-bold text-[#0F263B] hover:text-[#C25E38] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-mono">Email:</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-[#0F263B] hover:text-[#C25E38] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-mono">Office Timings:</span>
                  <span className="text-gray-600">{siteConfig.businessHours}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0ECE4] flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl("Hi Speeddex, I want to book an in-person meeting at your Indore office.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-xs shadow-xs text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-[#FAF8F5] hover:bg-[#EAE6DF] text-[#0E1318] text-xs font-semibold rounded-xs border border-[#E2DDD3] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className="p-6 bg-[#FAF8F5] border border-[#EAE5DC] rounded-xs">
              <h4 className="font-display font-bold text-sm text-[#0E1318] uppercase tracking-wider mb-3">
                Active Construction Service Locations
              </h4>
              <p className="text-xs text-[#5A6572] leading-relaxed mb-4">
                Our mobile civil engineering teams and machinery fleets are operational across:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#334155]">
                {siteConfig.serviceRegions.map((region) => (
                  <div key={region} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C25E38] shrink-0" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reusable Lead Form */}
          <div className="lg:col-span-7">
            <LeadForm
              title="Request a Custom Quotation & Site Visit"
              subtitle="Fill in your project details below. Our civil engineering team will contact you within your selected window with preliminary floor ideas and pricing."
              defaultService="RESIDENTIAL"
              source="HOME_CONTACT_SECTION"
              compact={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
