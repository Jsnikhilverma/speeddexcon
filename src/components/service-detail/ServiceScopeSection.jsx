import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, FileText, CheckCircle2, UserCheck, ShieldAlert, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ServiceScopeSection = ({ service }) => {
  return (
    <section id="service-scope" className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeading
            number="02"
            badge="CONTRACTUAL SCOPE"
            title="Comprehensive Scope of Work &"
            highlight="Boundaries."
            description="Clear contracts prevent disputes. Here is the exact technical scope, itemized deliverables, contractual inclusions, documented exclusions, and client responsibilities."
          />
        </div>

        {/* Section 4: Categorized Detailed Scope of Work */}
        {service.detailedScope && service.detailedScope.length > 0 && (
          <div className="mb-16">
            <h3 className="font-display font-bold text-xl text-[#0E1318] mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C25E38]" />
              <span>Categorized Scope Breakdown</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.detailedScope.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E4DFD5] p-6 sm:p-7 rounded-xs shadow-xs"
                >
                  <h4 className="font-display font-bold text-base text-[#0E1318] mb-4 pb-2 border-b border-[#F0ECE4] text-[#C25E38]">
                    {cat.category}
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <Check className="w-4 h-4 text-[#C25E38] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: Deliverables, Inclusions, Exclusions, Customer Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Deliverables Card */}
          <div className="bg-white border border-[#E4DFD5] p-6 rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#0F263B] font-mono text-xs uppercase font-bold tracking-wider">
                <Award className="w-4 h-4 text-[#E09F3E]" />
                <span>Formal Deliverables</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#334155]">
                {service.deliverables?.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F263B] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inclusions Card */}
          <div className="bg-white border border-emerald-300/60 p-6 rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-emerald-800 font-mono text-xs uppercase font-bold tracking-wider">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Scope Inclusions</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#334155]">
                {service.inclusions?.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 leading-snug">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exclusions Card */}
          <div className="bg-white border border-gray-300 p-6 rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-500 font-mono text-xs uppercase font-bold tracking-wider">
                <X className="w-4 h-4 text-gray-400" />
                <span>Documented Exclusions</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#64748B]">
                {service.exclusions?.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2 leading-snug">
                    <X className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Customer Responsibilities Card */}
          <div className="bg-white border border-[#E4DFD5] p-6 rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#C25E38] font-mono text-xs uppercase font-bold tracking-wider">
                <UserCheck className="w-4 h-4 text-[#C25E38]" />
                <span>Client Responsibilities</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#334155]">
                {service.customerResponsibilities?.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C25E38] shrink-0 mt-1.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-mono text-gray-500">
            Note: All inclusions and specifications are formally bound by the signed project agreement and approved Schedule BOQ.
          </p>
        </div>
      </div>
    </section>
  );
};
