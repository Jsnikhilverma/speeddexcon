import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Clock, IndianRupee } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const ServicesSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="02"
            badge="OUR CORE CAPABILITIES"
            title="Comprehensive Construction Solutions Built For"
            highlight="Lasting Value."
            description="From luxury bespoke duplexes to high-capacity commercial plazas and pre-engineered warehouses, we manage every phase under a single unified engineering contract."
          />

          <Button
            variant="outlineNavy"
            size="md"
            onClick={onOpenQuoteModal}
            showArrow
            className="shrink-0"
          >
            Request Custom BOQ
          </Button>
        </div>

        {/* 6 Image-Led Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-[#E4DFD5] hover:border-[#C25E38]/60 transition-all duration-300 shadow-xs hover:shadow-xl rounded-xs flex flex-col overflow-hidden"
            >
              {/* Image Container with Tag & Hover Zoom */}
              <div className="relative h-60 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <Badge variant="white" size="xs">
                    {service.category}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="flex items-center gap-1 font-semibold text-[#E09F3E]">
                    {service.priceRange}
                  </span>
                  <span className="flex items-center gap-1 opacity-90 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#0E1318] group-hover:text-[#C25E38] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 mb-6 border-t border-[#F0ECE4] pt-4">
                    {(service.highlights || service.deliverables || service.inclusions || []).slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#334155] leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#C25E38] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                    Fixed-Cost Contract
                  </span>
                  <button
                    onClick={onOpenQuoteModal}
                    className="font-display font-semibold text-xs uppercase tracking-wider text-[#0F263B] group-hover:text-[#C25E38] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Get Pricing</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
