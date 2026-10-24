import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { serviceWorkflowSteps } from '../../data/servicesData';
import { Button } from '../common/Button';

export const ProcessSteps = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="03"
            badge="UNIVERSAL ROADMAP"
            title="The 7-Step Lifecycle of Every"
            highlight="Speeddex Project."
            description="From the first plot survey in Central India to ceremonial key handover, every milestone is orchestrated with civil engineering oversight."
          />

          <Button
            variant="terracotta"
            size="md"
            onClick={onOpenQuoteModal}
            showArrow
            className="shrink-0"
          >
            Schedule Step 1 Consultation
          </Button>
        </div>

        {/* 7-Step Flow Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceWorkflowSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 bg-white border border-[#E6E1D8] rounded-xs shadow-xs hover:border-[#C25E38]/50 hover:shadow-md transition-all duration-300 relative flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-2 bg-[#FAF8F5]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-2xl text-[#C25E38]">
                    {step.step}
                  </span>
                  <span className="font-mono text-[11px] text-gray-500 font-semibold bg-[#F3EFEA] px-2.5 py-0.5 rounded-xs">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#0E1318] mb-2">
                  {step.name}
                </h3>

                <p className="text-xs text-[#5A6572] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0ECE4] flex items-center gap-1.5 text-[11px] text-[#0F263B] font-mono font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Audited Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
