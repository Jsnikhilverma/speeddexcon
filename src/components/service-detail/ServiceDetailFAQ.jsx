import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { getWhatsAppUrl } from '../../config/siteConfig';

export const ServiceDetailFAQ = ({ service }) => {
  if (!service.faqs || service.faqs.length === 0) return null;

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            align="center"
            number="06"
            badge="CLARITY & TRANSPARENCY"
            title="Common Questions Regarding"
            highlight={service.shortTitle}
            description="Transparent answers to the most frequent inquiries our civil engineers receive from clients in Central India."
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-12">
          {service.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border transition-all duration-200 rounded-xs overflow-hidden ${
                  isOpen
                    ? 'border-[#C25E38] bg-white shadow-sm'
                    : 'border-[#E4DFD5] bg-white hover:border-[#C25E38]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-bold text-base sm:text-lg transition-colors ${
                    isOpen ? 'text-[#C25E38]' : 'text-[#0E1318]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#C25E38] text-white' : 'bg-[#FAF8F5] text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#5A6572] leading-relaxed border-t border-[#F0ECE4]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="p-6 bg-white border border-[#E4DFD5] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#C25E38] shrink-0" />
            <div>
              <h4 className="font-display font-semibold text-sm text-[#0E1318]">
                Have a specific question about your plot dimensions or sanction status?
              </h4>
              <p className="text-xs text-[#5A6572] mt-0.5">
                Our project engineers in Indore will guide you with direct technical answers.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(`Hi Speeddex, I have a specific question about ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-xs shadow-xs inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
