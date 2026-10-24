import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Factory, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ServiceIntroduction = () => {
  const clientTypes = [
    {
      icon: Home,
      title: "Private Homeowners & NRIs",
      description: "Planning turnkey custom villas, duplex residences, or multi-family floors with zero contractor hassle, complete Vastu harmony, and remote photographic tracking.",
    },
    {
      icon: Building2,
      title: "Commercial Property Developers",
      description: "Requiring high-yield retail spaces, corporate office plazas, and institutional facilities engineered for heavy footfall and statutory NBC clearances.",
    },
    {
      icon: Factory,
      title: "Industrialists & Logistics Hubs",
      description: "Demanding high-tensile PEB steel structures, laser-screeded superflat FM2 industrial floors, and rapid execution within stringent industrial corridor schedules.",
    },
    {
      icon: Wrench,
      title: "Property Owners & Renovators",
      description: "Upgrading legacy properties, adding floors with column jacketing, replacing aging plumbing/electrical infrastructure, and modernizing building facades.",
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              number="01"
              badge="WHO WE SERVE"
              title="Tailored Engineering For Every"
              highlight="Scale & Complexity."
              description="Whether you are building your dream residence in Indore, developing a commercial landmark on AB Road, or commissioning an industrial warehouse in Pithampur, Speeddex brings institutional engineering rigor."
            />

            <div className="p-5 bg-white border border-[#E6E1D8] rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-[#C25E38] font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Single-Point Engineering Responsibility</span>
              </div>
              <p className="text-xs text-[#5A6572] leading-relaxed">
                We eliminate the traditional conflict between architects, structural consultants, material vendors, and local thekedars. Speeddex coordinates every phase under one unified contractual guarantee.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Client Profile Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clientTypes.map((client, idx) => {
              const Icon = client.icon;
              return (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-white border border-[#E6E1D8] rounded-xs hover:border-[#C25E38]/50 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#C25E38] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0E1318] mb-2">
                    {client.title}
                  </h3>
                  <p className="text-xs text-[#5A6572] leading-relaxed">
                    {client.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
