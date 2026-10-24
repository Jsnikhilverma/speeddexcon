import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ShieldCheck, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Button } from '../common/Button';

export const ServiceCTA = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-[#0E1318] text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white/10 border border-white/15 text-xs font-mono text-[#E09F3E]">
            <ShieldCheck className="w-4 h-4 text-[#E09F3E]" />
            <span>Complimentary Initial Consultation & Site Feasibility</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            Schedule a Guided Site Visit or Architectural Consultation
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a residential plot in Indore, an industrial warehouse requirement in Pithampur, or an upcoming commercial plaza? Let our civil engineers assess your site, review municipal regulations, and draft an itemized estimate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="terracotta"
              size="lg"
              onClick={onOpenQuoteModal}
              showArrow
            >
              Book Site Inspection Visit
            </Button>

            <a
              href={getWhatsAppUrl("Hi Speeddex Team, I would like to schedule an on-site consultation for my construction project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-semibold text-sm rounded-xs shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E09F3E]" />
              <span>HQ: Scheme 54, Vijay Nagar, Indore</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E09F3E]" />
              <span>Direct: {siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E09F3E]" />
              <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
