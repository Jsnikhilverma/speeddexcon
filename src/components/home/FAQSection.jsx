import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { faqsData } from '../../data/faqsData';
import { SectionHeading } from '../common/SectionHeading';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';

export const FAQSection = () => {
  const [openId, setOpenId] = useState(faqsData[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            align="center"
            number="10"
            badge="INDIAN CONSTRUCTION FAQ"
            title="Everything You Need to Know Before"
            highlight="Breaking Ground."
            description="Clear, candid answers regarding pricing, soil testing, payment milestones, RERA safety, and quality checks in Central India."
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 mb-12">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border transition-all duration-200 rounded-xs overflow-hidden ${
                  isOpen
                    ? 'border-[#C25E38] bg-white shadow-sm'
                    : 'border-[#E6E1D8] bg-white hover:border-[#C25E38]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
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

        {/* Still have questions banner */}
        <div className="p-6 bg-[#FAF8F5] border border-[#E4DFD5] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#C25E38] shrink-0" />
            <div>
              <h4 className="font-display font-semibold text-sm text-[#0E1318]">
                Have a specific question about your plot or municipal sanctions?
              </h4>
              <p className="text-xs text-[#5A6572] mt-0.5">
                Our civil engineering team in Indore is ready to assist you directly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Hi Speeddex, I have a query regarding construction sanctions and pricing for my plot.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-xs shadow-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2 bg-[#0F263B] hover:bg-[#163854] text-white text-xs font-semibold rounded-xs shadow-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E09F3E]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
