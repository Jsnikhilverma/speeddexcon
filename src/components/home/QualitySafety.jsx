import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Beaker, FileCheck, Award, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const QualitySafety = ({ onOpenQuoteModal }) => {
  const materials = [
    {
      brand: "Tata Tiscon 550D",
      category: "Reinforcement Steel",
      spec: "Super Ductile TMT Rebar with higher elongation for earthquake resistance (Zone III/IV compliant).",
    },
    {
      brand: "UltraTech Super / Ambuja",
      category: "Structural Cement",
      spec: "High-grade Portland Pozzolana Cement (PPC) engineered for low heat of hydration and micro-pore impermeability.",
    },
    {
      brand: "Astral CPVC Pro & Silencio",
      category: "Plumbing Infrastructure",
      spec: "100% leak-proof, hot/cold thermal expansion resistant piping with sound-attenuated drainage lines.",
    },
    {
      brand: "Havells / Polycab FRLS",
      category: "Electrical Conductors",
      spec: "Flame Retardant Low Smoke (FRLS) 100% electrolytic pure copper cabling preventing electrical short-circuit hazards.",
    },
    {
      brand: "Fosroc & Dr. Fixit",
      category: "Advanced Waterproofing",
      spec: "Elastomeric polyurethane multi-layer membrane applied across subterranean footings, bathrooms, and terrace slabs.",
    },
    {
      brand: "Asian Paints Apex Ultima",
      category: "Surface Coatings",
      spec: "Anti-algal, dust-resistant exterior weather shield with advanced PU cross-linking and 10-year color durability warranty.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              number="06"
              badge="ENGINEERING INTEGRITY"
              title="Only Tier-1 Materials. Non-Negotiable"
              highlight="Site Safety."
              description="A building is only as reliable as the materials hidden inside its concrete. We refuse to cut costs on secondary steel or blended cement. Every raw batch is verified with Mill Test Certificates."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-[#E6E1D8] rounded-xs shadow-2xs">
                <div className="flex items-center gap-2 text-[#C25E38] font-bold text-sm mb-1">
                  <Beaker className="w-4 h-4" />
                  <span>Cube Strength Testing</span>
                </div>
                <p className="text-xs text-[#5A6572] leading-relaxed">
                  Concrete test cubes poured at site and tested at 7 & 28 days for compressive strength in NABL labs.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E6E1D8] rounded-xs shadow-2xs">
                <div className="flex items-center gap-2 text-[#0F263B] font-bold text-sm mb-1">
                  <HardHat className="w-4 h-4 text-[#E09F3E]" />
                  <span>Strict PPE Safety</span>
                </div>
                <p className="text-xs text-[#5A6572] leading-relaxed">
                  Mandatory safety helmets, high-altitude harness tying, and zero-accident compliance on all active sites.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[#E6E1D8] rounded-xs overflow-hidden shadow-xl bg-gray-100">
              <img
                src="/images/safety-inspection.jpg"
                alt="Speeddex site engineer conducting concrete slump and safety inspection"
                className="w-full h-80 sm:h-96 object-cover object-center filter contrast-[1.04]"
              />
              <div className="p-4 bg-[#0F263B] text-white flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[#E09F3E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>IS 456:2000 Code Compliant</span>
                </span>
                <span className="text-gray-300">Live Quality Audited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier-1 Brands Showcase Grid */}
        <div className="border border-[#E6E1D8] bg-white p-6 sm:p-8 rounded-xs shadow-xs">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0ECE4] pb-4">
            <h4 className="font-display font-bold text-lg text-[#0E1318]">
              Standard Tier-1 Brand Specifications
            </h4>
            <span className="font-mono text-xs text-gray-500">
              Original Manufacturer Mill Test Invoices Supplied to Client
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((m) => (
              <div key={m.brand} className="p-4 bg-[#FAF8F5] border border-[#EAE5DC] rounded-xs">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C25E38] font-bold block mb-1">
                  {m.category}
                </span>
                <h5 className="font-display font-bold text-base text-[#0E1318] mb-1.5">
                  {m.brand}
                </h5>
                <p className="text-xs text-[#5A6572] leading-relaxed">
                  {m.spec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
