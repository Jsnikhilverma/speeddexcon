import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Clock, AlertTriangle, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ServicePricingTimeline = ({ service, onOpenQuoteModal }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#161D24] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            align="center"
            theme="dark"
            number="04"
            badge="COST & SCHEDULE GUIDANCE"
            title="Transparent Pricing & Realistic"
            highlight="Timelines."
            description="We believe in grounded, honest estimates. No artificially low teaser rates to lure clients, and no unrealistic timeline promises that fail to respect concrete curing physics."
          />
        </div>

        {/* Section 8: Indicative Cost Guidance */}
        {service.indicativePricing && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs uppercase text-[#E09F3E] font-semibold tracking-widest block">
                  Location Benchmark: Indore & Central MP
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  Indicative Package Tiers
                </h3>
              </div>
              <div className="text-xs font-mono text-gray-400">
                Base Benchmark: <strong className="text-white text-sm">{service.indicativePricing.baseRate}</strong> {service.indicativePricing.unit}
              </div>
            </div>

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {service.indicativePricing.tiers?.map((tier, idx) => (
                <div
                  key={idx}
                  className="bg-[#0E1318] border border-white/10 hover:border-[#C25E38] p-6 rounded-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-display font-bold text-lg text-white">
                        {tier.name}
                      </h4>
                      <span className="font-mono text-xs font-bold text-[#E09F3E]">
                        {tier.rate}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      {tier.desc}
                    </p>
                  </div>

                  <button
                    onClick={onOpenQuoteModal}
                    className="w-full py-2.5 px-4 bg-white/5 hover:bg-[#C25E38] text-white text-xs font-display font-semibold rounded-xs border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Get Detailed BOQ</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Pricing Disclaimer Alert */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xs flex items-start gap-3 text-xs text-gray-400">
              <AlertTriangle className="w-4 h-4 text-[#E09F3E] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-gray-200">Notice on Pricing:</strong> {service.indicativePricing.disclaimer}
              </p>
            </div>
          </div>
        )}

        {/* Section 9: Visual Realistic Timeline Stages */}
        {service.timelineStages && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs uppercase text-[#E09F3E] font-semibold tracking-widest block">
                  Execution Cadence
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  Typical Project Stages & Delivery Cadence
                </h3>
              </div>
              <div className="text-xs font-mono text-gray-400">
                Total Horizon: <strong className="text-white text-sm">{service.duration}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.timelineStages.map((stage, i) => (
                <div
                  key={i}
                  className="bg-[#0E1318] border border-white/10 p-6 rounded-xs relative group hover:border-[#E09F3E]/60 transition-colors"
                >
                  <span className="absolute top-4 right-4 font-mono text-xs font-bold text-[#C25E38]">
                    [{stage.step}]
                  </span>
                  <span className="font-mono text-[11px] text-[#E09F3E] block mb-1">
                    {stage.duration}
                  </span>
                  <h4 className="font-display font-bold text-base text-white mb-2">
                    {stage.stage}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-[11px] font-mono text-gray-500">
                *Timelines account for mandatory concrete wet-curing intervals and weather buffers in Central MP. Unrealistic expedited schedules are avoided to protect structural strength.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
