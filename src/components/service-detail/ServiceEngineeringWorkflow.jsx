import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, ShieldCheck, Ruler, CheckCircle2, HardHat, FileCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ServiceEngineeringWorkflow = ({ service }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section 6 Planning & Engineering */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              number="03"
              badge="ENGINEERING INTEGRITY"
              title="Project-Specific Planning &"
              highlight="Structural Protocols."
              description={`How we approach structural modeling, Black Cotton soil mitigation, and computerized schedules specifically for ${service.shortTitle.toLowerCase()} projects.`}
            />

            <div className="space-y-4 pt-2">
              {service.planningAndEngineering?.map((plan, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#E6E1D8] rounded-xs shadow-2xs"
                >
                  <div className="flex items-center gap-2 mb-1.5 text-[#0E1318] font-display font-bold text-base">
                    <Ruler className="w-4 h-4 text-[#C25E38]" />
                    <span>{plan.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed">
                    {plan.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Section 7 Materials & QA Matrix */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0F263B] text-white p-6 sm:p-8 rounded-xs border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E09F3E] font-semibold block mb-0.5">
                    Section 07 // QA Protocols
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    Materials & Laboratory Verification
                  </h3>
                </div>
                <Beaker className="w-6 h-6 text-[#E09F3E]" />
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                All raw materials are tested for structural compliance before application on site. Manufacturer test certificates are archived in your digital project dossier.
              </p>

              <div className="space-y-3">
                {service.materialsAndQA?.map((qa, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-white/5 border border-white/10 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="text-[#E09F3E] font-mono text-[10px] uppercase font-bold block">
                        {qa.item}
                      </span>
                      <span className="font-display font-semibold text-sm text-white">
                        {qa.spec}
                      </span>
                    </div>
                    <div className="text-right sm:text-right">
                      <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-xs inline-block">
                        {qa.check}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-gray-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Subject strictly to the signed project BOQ and IS standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
