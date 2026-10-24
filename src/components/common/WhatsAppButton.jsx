import React, { useState } from 'react';
import { MessageCircle, Phone, X, ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Floating WhatsApp for Desktop & Tablet */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Subtle proactive hint bubble */}
        {showTooltip && (
          <div className="bg-[#0E1318] text-white p-3.5 rounded-sm shadow-xl border border-white/10 max-w-[260px] text-xs relative animate-fade-in">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Civil Engineer Available</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Have plot dimensions? Share your details on WhatsApp for an instant estimate.
            </p>
          </div>
        )}

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
            aria-label="Chat with Speeddex on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
            <span className="hidden sm:inline font-display font-medium text-sm tracking-wide">
              Chat on WhatsApp
            </span>
            <span className="sm:hidden font-display font-semibold text-xs">
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Quick-Action Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5E1D8] px-4 py-2.5 flex items-center gap-3 shadow-2xl">
        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#0F263B] text-white py-3 px-3 rounded-sm font-display font-semibold text-xs uppercase tracking-wider shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#E09F3E]" />
          <span>Call Engineer</span>
        </a>
        <a
          href={getWhatsAppUrl("Hi Speeddex, I need a quick quotation for my home construction.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-3 rounded-sm font-display font-semibold text-xs uppercase tracking-wider shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </>
  );
};
