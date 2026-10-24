import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, ShieldCheck, HardHat, FileCheck, Award, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ServiceMaterials = () => {
  const qaProtocols = [
    {
      icon: Beaker,
      title: "NABL Concrete Cube Testing",
      spec: "150mm concrete cubes cast for every slab pour and tested for compressive strength at 7 and 28 days.",
      standard: "IS 516 & IS 456 Compliant",
    },
    {
      icon: FileCheck,
      title: "Manufacturer Mill Test Certificates",
      spec: "Direct primary mill delivery slips for Tata Tiscon and UltraTech cement provided with batch chemical composition.",
      standard: "Fe550D Super Ductile Grade",
    },
    {
      icon: ShieldCheck,
      title: "24-Hour Hydrostatic Plumbing Test",
      spec: "Concealed Astral CPVC and drainage pipelines pressurized to 10 Bar before any plaster or tile work commences.",
      standard: "Zero Pressure Drop Tolerance",
    },
    {
      icon: HardHat,
      title: "Chartered Civil Engineer Supervision",
      spec: "In-house civil engineers verify formwork alignment, cover block placement, and rebar spacing before every pour.",
      standard: "440+ Quality Audits Signed Off",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              number="04"
              badge="QUALITY ASSURANCE"
              title="Material Specifications & On-Site"
              highlight="Engineering Rigor."
              description="A premium structure cannot be built on compromise. We enforce strict industrial lab testing for every component, ensuring that your building withstands earthquakes, monsoons, and generations of wear."
            />

            <div className="space-y-4 pt-2">
              {qaProtocols.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="p-4 bg-white border border-[#E4DFD5] rounded-xs shadow-2xs">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-[#0E1318] font-display font-bold text-sm sm:text-base">
                        <Icon className="w-4 h-4 text-[#C25E38]" />
                        <span>{p.title}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#E09F3E] font-bold">
                        {p.standard}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A6572] leading-relaxed pl-6">
                      {p.spec}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative border border-[#E4DFD5] rounded-xs overflow-hidden shadow-xl bg-gray-200">
              <img
                src="/images/safety-inspection.jpg"
                alt="Speeddex civil engineers inspecting concrete slump and rebar ties"
                className="w-full h-80 sm:h-96 object-cover object-center filter contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E09F3E] font-semibold block mb-1">
                  On-Site Audit Protocol
                </span>
                <p className="font-display font-medium text-sm sm:text-base">
                  Over 440 quality checkpoints digitally audited before key handover.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#E4DFD5] rounded-xs flex items-center justify-between text-xs font-mono text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Tata Tiscon Primary Steel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>UltraTech PPC Cement</span>
              </div>
              <div className="flex items-center gap-2 hidden sm:flex">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Astral CPVC Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
