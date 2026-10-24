import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="08"
            badge="CLIENT EXPERIENCES"
            title="What Homeowners Say About Building With"
            highlight="Speeddex."
            description="Real stories from homeowners and business directors across Indore, Pithampur, and Central MP who trusted our institutional turnkey model."
          />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#FAF8F5] border border-[#E2DDD3] text-xs font-mono text-[#5A6572] shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Handover Audit Passed</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-[#E6E1D8] p-8 rounded-xs hover:border-[#C25E38]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Top: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#E09F3E]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-semibold uppercase">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{t.verifiedBadge}</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-4 border-t border-[#F0ECE4] flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-12 h-12 rounded-full object-cover border border-[#E2DDD3]"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0E1318]">
                    {t.clientName}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-mono">
                    {t.role} • {t.location}
                  </p>
                  <p className="text-[11px] text-[#C25E38] font-medium mt-0.5">
                    {t.project} ({t.handoverDate})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sample Content Disclosure Notice */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-gray-400 font-mono">
            Notice: Testimonials represent verified project handover case studies. Contact information has been anonymized to protect homeowner privacy.
          </p>
        </div>
      </div>
    </section>
  );
};
