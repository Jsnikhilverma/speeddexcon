import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ServiceProblemsSolutions = ({ service }) => {
  if (!service.painPoints || service.painPoints.length === 0) return null;

  return (
    <section className="py-20 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <SectionHeading
            number="01"
            badge="INDIAN MARKET REALITIES"
            title="Common Construction Risks & How"
            highlight="Speeddex Solves Them."
            description={`High-value ${service.shortTitle.toLowerCase()} projects in India frequently suffer from lack of technical oversight and budget creep. Here is how our engineering protocols protect your investment.`}
          />
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.painPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E6E1D8] rounded-xs p-6 sm:p-7 shadow-xs hover:border-[#C25E38]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Problem Block */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 text-red-700 font-mono text-xs uppercase font-bold tracking-wider">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>The Typical Problem:</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#0E1318] mb-1">
                  {item.problem}
                </h4>
              </div>

              {/* Solution Block */}
              <div className="pt-4 border-t border-[#F0ECE4] bg-[#FAF8F5] p-4 rounded-xs -mx-2 -mb-2 border border-[#EAE5DC]">
                <div className="flex items-center gap-2 mb-1.5 text-emerald-800 font-mono text-xs uppercase font-bold tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>The Speeddex Engineering Solution:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
