import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Building, 
  Wrench, 
  Sparkles, 
  Key, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ProcessTimeline = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      step: "01",
      icon: Compass,
      title: "Consultation & Soil Survey",
      duration: "Days 1 – 7",
      paymentTranche: "Stage 1 (5% Booking)",
      description: "We visit your plot, conduct borehole soil testing to establish safe bearing capacity (vital for Central Indian Black Cotton soil), review Vastu requirements, and formulate the initial project charter.",
      deliverable: "Geo-technical soil report & preliminary architectural brief",
    },
    {
      step: "02",
      icon: Layers,
      title: "3D Design & Sanctions",
      duration: "Days 8 – 25",
      paymentTranche: "Stage 2 (Design Approval)",
      description: "Our architects model your project in photorealistic 3D, draft complete structural CAD blueprints, compute exact steel and concrete schedules, and submit files for municipal sanctions.",
      deliverable: "3D Walkthrough renders & certified structural drawings",
    },
    {
      step: "03",
      icon: Building,
      title: "Foundation & Plinth Casting",
      duration: "Weeks 4 – 8",
      paymentTranche: "Stage 3 (15% Plinth Milestone)",
      description: "Excavation, anti-termite chemical soil injection, reinforcement cage tying with cover blocks, and high-grade concrete casting for column footings and tie-beams.",
      deliverable: "Plinth beam inspection & anti-termite warranty certificate",
    },
    {
      step: "04",
      icon: Layers,
      title: "RCC Superstructure Framing",
      duration: "Weeks 9 – 20",
      paymentTranche: "Stage 4 (25% Slab Milestone)",
      description: "Casting RCC columns, beams, and roof slabs using Tata Tiscon Fe550D and UltraTech PPC. Every pour is accompanied by concrete test cubes tested at 7 and 28 days for compressive strength.",
      deliverable: "NABL concrete cube test reports & rebar mill test slips",
    },
    {
      step: "05",
      icon: Wrench,
      title: "Brickwork, MEP & Waterproofing",
      duration: "Weeks 21 – 32",
      paymentTranche: "Stage 5 (25% Finishing Milestone)",
      description: "Fly ash / clay brick masonry, concealed electrical conduit wiring (Havells/Polycab), pressure-tested Astral CPVC plumbing, and 3-coat polymer waterproofing across wet areas and terraces.",
      deliverable: "Plumbing pressure test log & waterproofing warranty deed",
    },
    {
      step: "06",
      icon: Key,
      title: "Finishing & Key Handover",
      duration: "Weeks 33 – 40",
      paymentTranche: "Stage 6 (Final Handover)",
      description: "Premium flooring installation, double-coat interior/exterior painting (Asian Paints Apex Ultima), sanitaryware installation, final 440-point snag inspection, deep cleaning, and ceremonial key handover.",
      deliverable: "10-Year Structural Warranty Deed & As-Built Drawings folder",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="05"
            badge="THE SPEEDDEX SYSTEM"
            title="The 6-Stage Transparent Journey From"
            highlight="Plot to Possession."
            description="A predictable, civil engineer-managed roadmap. Every phase is verified by laboratory tests, documented with daily photos, and billed on progress."
          />

          <Button
            variant="terracotta"
            size="md"
            onClick={onOpenQuoteModal}
            showArrow
            className="shrink-0"
          >
            Start Your Journey
          </Button>
        </div>

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-[#E3DED4] p-8 rounded-xs hover:border-[#C25E38]/60 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between relative group"
              >
                {/* Step Index Watermark */}
                <span className="absolute top-6 right-6 font-display font-black text-4xl text-[#EAE6DF] group-hover:text-[#C25E38]/20 transition-colors select-none">
                  {item.step}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-xs bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#C25E38] mb-6 group-hover:bg-[#C25E38] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-2">
                    <span className="font-semibold text-[#0F263B]">{item.duration}</span>
                    <span className="opacity-40">•</span>
                    <span className="text-[#E09F3E] font-medium">{item.paymentTranche}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0E1318] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0ECE4] text-xs">
                  <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                    Formal Deliverable:
                  </span>
                  <div className="flex items-start gap-1.5 text-[#0F263B] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.deliverable}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
