import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, MessageCircle, ShieldCheck, Ruler, Calendar } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Button } from '../common/Button';

export const LeadGenBanner = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-20 bg-[#0E1318] text-white overflow-hidden border-t border-b border-white/10">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-35 pointer-events-none" />

      {/* Decorative architectural angled backdrop */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C25E38]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#0F263B]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white/10 border border-white/15 text-xs font-mono text-[#E09F3E]">
            <ShieldCheck className="w-4 h-4 text-[#E09F3E]" />
            <span>Guaranteed Zero Cost Overruns • RERA Registered</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Ready to Build Your Home or Commercial Landmark?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Connect with our senior civil engineering team today. We provide a complimentary site soil assessment, preliminary 3D elevation sketches, and an itemized BOQ estimate.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="terracotta"
              size="lg"
              onClick={onOpenQuoteModal}
              showArrow
            >
              Plan Your Construction Project
            </Button>

            <a
              href={getWhatsAppUrl("Hi Speeddex, I want to discuss planning my construction project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-semibold text-sm rounded-xs shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>

          {/* Quick verification stamps */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-gray-400">
            <div className="flex items-center justify-center gap-2">
              <Ruler className="w-4 h-4 text-[#E09F3E]" />
              <span>Complimentary Plot Inspection</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#E09F3E]" />
              <span>Fixed Milestone Handover Dates</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-[#E09F3E]" />
              <span>Direct Civil Engineer Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
