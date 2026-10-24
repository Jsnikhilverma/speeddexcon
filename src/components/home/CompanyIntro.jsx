import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Shield, HardHat, FileCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const CompanyIntro = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FBFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Large Image */}
            <div className="relative border border-[#E6E1D8] shadow-lg overflow-hidden rounded-xs bg-[#EAE6DF]">
              <img
                src="/images/about-engineers.jpg"
                alt="Speeddex certified civil engineers reviewing architectural site blueprints"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center filter contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#E09F3E] font-semibold block mb-1">
                  Civil Engineering Oversight
                </span>
                <p className="font-display font-medium text-sm sm:text-base leading-snug">
                  Chartered structural engineers supervising every concrete pour & rebar tie.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Inset Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-64 bg-[#0F263B] text-white p-5 rounded-xs border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-[#E09F3E]">
                <HardHat className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Zero Subcontracting
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Direct in-house civil engineering, procurement, and execution. No passing off to third-party thekedars.
              </p>
            </div>
          </motion.div>

          {/* Right: Architectural Narrative & Positioning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionHeading
              number="01"
              badge="WHO WE ARE"
              title="Transforming Indian Construction Into An"
              highlight="Exact Science."
              description="For decades, building a home or commercial building in India has been plagued by uncertain estimates, contractor disappearances, and compromised materials. Speeddex was founded to replace guesswork with institutional engineering standards."
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-xs bg-[#C25E38]/10 text-[#C25E38] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#0E1318]">
                    100% Locked-In Transparent BOQ
                  </h4>
                  <p className="text-sm text-[#5A6572] leading-relaxed mt-0.5">
                    Before laying the first brick, you receive an itemized, legally binding Bill of Quantities. Every cement bag, steel grade, and electrical fitting is documented with zero surprise costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-xs bg-[#C25E38]/10 text-[#C25E38] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#0E1318]">
                    Daily Digital Progress & WhatsApp Feeds
                  </h4>
                  <p className="text-sm text-[#5A6572] leading-relaxed mt-0.5">
                    Track your site from anywhere in the world. Receive daily photographic inspection logs, drone flyovers, and material testing slips directly on your phone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-xs bg-[#C25E38]/10 text-[#C25E38] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#0E1318]">
                    Rigorous Black Cotton Soil Engineering
                  </h4>
                  <p className="text-sm text-[#5A6572] leading-relaxed mt-0.5">
                    Specific deep-foundation engineering tailored to Central India's expansive soil profiles, ensuring zero settlement cracks or long-term structural weakness.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="terracotta"
                size="md"
                onClick={onOpenQuoteModal}
                showArrow
              >
                Schedule Site Visit
              </Button>

              <a
                href="#why-us"
                className="font-display font-semibold text-sm text-[#0F263B] hover:text-[#C25E38] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Read our Quality Standards</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
