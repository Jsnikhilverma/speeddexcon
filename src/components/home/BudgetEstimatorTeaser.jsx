import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowUpRight, Check, Sparkles, ShieldAlert, IndianRupee } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const BudgetEstimatorTeaser = ({ onOpenQuoteModal }) => {
  const [plotArea, setPlotArea] = useState(1500); // in sq ft
  const [floors, setFloors] = useState(2); // G+1
  const [packageType, setPackageType] = useState('PREMIUM');

  const packages = {
    CLASSIC: {
      name: "Classic Turnkey",
      rate: 1650,
      description: "Ideal for modern independent rental floors and budget villas.",
      specs: ["Tata / Jindal 550D TMT", "UltraTech PPC Cement", "Vitrified 2x4 ft Tiles", "Jaquar / Cera Sanitary"],
    },
    PREMIUM: {
      name: "Premium Luxury",
      rate: 1950,
      description: "Our most popular package for bespoke family duplex residences.",
      specs: ["Tata Tiscon 550D Super Ductile", "Italian Marble Foyer & Living", "Kohler / Grohe Fittings", "Teakwood Main Doors"],
    },
    LUXURY: {
      name: "Architectural Bespoke",
      rate: 2450,
      description: "Ultra-luxury mansions with double heights and smart home automations.",
      specs: ["Full Italian Statuario Marble", "Saint-Gobain Acoustic Glazing", "VRV Air Conditioning Conduit", "Designer Elevation Facade"],
    },
  };

  const selectedPkg = packages[packageType];
  const builtUpArea = useMemo(() => Math.round(plotArea * (floors === 1 ? 0.9 : floors === 2 ? 1.7 : 2.5)), [plotArea, floors]);
  const estimatedCost = useMemo(() => Math.round(builtUpArea * selectedPkg.rate), [builtUpArea, selectedPkg]);

  const costInLakhs = (estimatedCost / 100000).toFixed(2);
  const civilCost = ((estimatedCost * 0.58) / 100000).toFixed(2);
  const finishingCost = ((estimatedCost * 0.27) / 100000).toFixed(2);
  const mepCost = ((estimatedCost * 0.15) / 100000).toFixed(2);

  return (
    <section id="cost-estimator" className="py-20 lg:py-28 bg-[#161D24] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            align="center"
            theme="dark"
            number="07"
            badge="TRANSPARENT PRICING"
            title="Instant Construction Cost"
            highlight="Estimator."
            description="Select your plot size, number of floors, and specification grade to calculate your expected turnkey construction cost in ₹ Lakhs."
          />
        </div>

        {/* Interactive Estimator Console */}
        <div className="bg-[#0E1318] border border-white/15 rounded-xs p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls: Sliders & Selectors */}
            <div className="lg:col-span-7 space-y-8">
              {/* Control 1: Plot Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-display font-semibold text-sm text-gray-200">
                    Plot Ground Area:
                  </label>
                  <span className="font-mono text-base font-bold text-[#E09F3E]">
                    {plotArea.toLocaleString('en-IN')} Sq. Ft.{' '}
                    <span className="text-xs text-gray-400 font-normal">
                      (Approx {Math.round(plotArea / 9)} Gaj)
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="6000"
                  step="50"
                  value={plotArea}
                  onChange={(e) => setPlotArea(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C25E38]"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500 mt-1.5">
                  <span>600 sq. ft. (20x30)</span>
                  <span>1500 sq. ft. (30x50)</span>
                  <span>3000 sq. ft. (50x60)</span>
                  <span>6000 sq. ft.</span>
                </div>
              </div>

              {/* Control 2: Number of Floors */}
              <div>
                <label className="block font-display font-semibold text-sm text-gray-200 mb-2">
                  Number of Floors (Storeys):
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Ground Only (G)', value: 1, sub: 'Single Storey' },
                    { label: 'Ground + 1 (G+1)', value: 2, sub: 'Duplex Home' },
                    { label: 'Ground + 2 (G+2)', value: 3, sub: 'Multi-Floor' },
                  ].map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setFloors(f.value)}
                      className={`p-3 text-left rounded-xs border transition-all cursor-pointer ${
                        floors === f.value
                          ? 'bg-[#0F263B] border-[#E09F3E] text-white shadow-xs'
                          : 'bg-[#161D24] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span className="block font-display font-semibold text-xs sm:text-sm">
                        {f.label}
                      </span>
                      <span className="block font-mono text-[10px] text-gray-400 mt-0.5">
                        {f.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 3: Quality Package */}
              <div>
                <label className="block font-display font-semibold text-sm text-gray-200 mb-2">
                  Select Construction Package:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(packages).map(([key, pkg]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPackageType(key)}
                      className={`p-3.5 text-left rounded-xs border transition-all cursor-pointer ${
                        packageType === key
                          ? 'bg-[#C25E38]/20 border-[#C25E38] text-white shadow-xs'
                          : 'bg-[#161D24] border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-xs sm:text-sm text-white">
                          {pkg.name.split(' ')[0]}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#E09F3E]">
                          ₹{pkg.rate}/sqft
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">
                        {pkg.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Display: Instant Financial Breakdown */}
            <div className="lg:col-span-5 bg-[#161D24] p-6 sm:p-8 rounded-xs border border-white/15 relative">
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E09F3E]" />

              <span className="font-mono text-xs uppercase tracking-widest text-gray-400 block mb-1">
                Estimated Turnkey Cost
              </span>
              <div className="flex items-baseline gap-1 text-white mb-2">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#E09F3E] tracking-tight">
                  ₹{costInLakhs}
                </span>
                <span className="font-display font-bold text-xl sm:text-2xl text-gray-200">
                  Lakhs*
                </span>
              </div>

              <div className="font-mono text-xs text-gray-400 mb-6 pb-4 border-b border-white/10 flex justify-between">
                <span>Calculated Built-Up:</span>
                <span className="text-white font-semibold">{builtUpArea.toLocaleString('en-IN')} Sq. Ft.</span>
              </div>

              {/* Cost Component Breakdown */}
              <div className="space-y-3 mb-8 text-xs font-mono">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E09F3E]" />
                    <span>Civil Framing & RCC (58%):</span>
                  </span>
                  <span className="font-semibold text-white">₹{civilCost} L</span>
                </div>

                <div className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
                    <span>Finishing & Flooring (27%):</span>
                  </span>
                  <span className="font-semibold text-white">₹{finishingCost} L</span>
                </div>

                <div className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Plumbing, MEP & Electrical (15%):</span>
                  </span>
                  <span className="font-semibold text-white">₹{mepCost} L</span>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="mb-6 pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase text-gray-400 block mb-2">
                  Package Inclusions ({selectedPkg.name}):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-300">
                  {selectedPkg.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="terracotta"
                size="md"
                onClick={onOpenQuoteModal}
                className="w-full justify-center"
                showArrow
              >
                Download Itemized BOQ PDF
              </Button>

              <p className="text-[10px] text-gray-500 text-center mt-3">
                *Preliminary estimate based on standard Central MP architectural codes. Final cost locked upon soil test & approved drawings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
