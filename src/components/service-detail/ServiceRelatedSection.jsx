import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Button } from '../common/Button';

export const ServiceRelatedSection = ({ service, onOpenQuoteModal }) => {
  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs?.includes(s.slug)
  );

  return (
    <div>
      {/* Related Services Cards */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-[#F4F1EB] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C25E38] font-semibold block mb-1">
                  Complementary Engineering
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0E1318]">
                  Explore Related Construction Services
                </h3>
              </div>
              <Link
                to="/services"
                className="font-display font-semibold text-xs uppercase tracking-wider text-[#0F263B] hover:text-[#C25E38] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>All 9 Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="group bg-white border border-[#E4DFD5] hover:border-[#C25E38] p-6 rounded-xs transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#E09F3E] font-bold block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-lg text-[#0E1318] group-hover:text-[#C25E38] transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#5A6572] leading-relaxed mb-4 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0E1318] font-bold">{rel.priceRange}</span>
                    <span className="text-[#C25E38] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>View Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Strong Final CTA */}
      <section className="py-20 bg-[#0E1318] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-35 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white/10 border border-white/15 text-xs font-mono text-[#E09F3E]">
              <ShieldCheck className="w-4 h-4 text-[#E09F3E]" />
              <span>Complimentary On-Site Geotechnical & Elevation Feasibility</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
              Ready to Initiate Your {service.shortTitle} Project?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
              Schedule an in-person technical consultation at our Vijay Nagar, Indore headquarters or arrange for our senior civil engineer to conduct an on-site inspection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="terracotta"
                size="lg"
                onClick={onOpenQuoteModal}
                showArrow
              >
                Book Guided Site Inspection
              </Button>

              <a
                href={getWhatsAppUrl(`Hi Speeddex, I want to book a site inspection for ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-semibold text-sm rounded-xs shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E09F3E]" />
                <span>Scheme 54, Vijay Nagar, Indore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E09F3E]" />
                <span>Direct: {siteConfig.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
