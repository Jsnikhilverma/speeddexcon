import React from 'react';
import { ShieldCheck, Ruler, CheckCircle2, Award, Zap } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const TrustStrip = () => {
  const facts = [
    {
      icon: Ruler,
      number: siteConfig.metrics.sqftDelivered,
      title: siteConfig.metrics.sqftLabel,
      detail: "Across Indore, Bhopal & Central MP",
    },
    {
      icon: CheckCircle2,
      number: siteConfig.metrics.projectsDelivered,
      title: siteConfig.metrics.projectsLabel,
      detail: "Zero abandoned sites",
    },
    {
      icon: ShieldCheck,
      number: siteConfig.metrics.qualityCheckpoints,
      title: siteConfig.metrics.qualityLabel,
      detail: "Independent lab batch testing",
    },
    {
      icon: Award,
      number: siteConfig.metrics.structuralWarrantyYears,
      title: siteConfig.metrics.warrantyLabel,
      detail: "Comprehensive legal guarantee",
    },
    {
      icon: Zap,
      number: siteConfig.metrics.costOverrunGuarantee,
      title: siteConfig.metrics.costOverrunLabel,
      detail: "Locked-in itemized BOQ",
    },
  ];

  return (
    <section id="trust-strip" className="bg-[#161D24] text-white py-10 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div 
                key={fact.title}
                className={`relative ${
                  index !== 0 ? 'lg:pl-6 lg:border-l lg:border-white/10' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-[#E09F3E]">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {fact.number}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-xs sm:text-sm text-gray-200 tracking-tight leading-snug">
                  {fact.title}
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-normal">
                  {fact.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
