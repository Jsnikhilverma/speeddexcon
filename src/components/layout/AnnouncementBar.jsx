import React from 'react';
import { Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#0E1318] text-[#D1D5DB] border-b border-white/10 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Genuine Company Notification & Compliance */}
        <div className="flex items-center gap-3 overflow-hidden text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#C25E38]/20 text-[#E09F3E] text-[10px] font-mono font-semibold uppercase tracking-wider shrink-0">
            <ShieldCheck className="w-3 h-3 text-[#E09F3E]" />
            <span>RERA Registered: {siteConfig.reraNumber}</span>
          </span>
          <p className="truncate text-[11px] sm:text-xs text-gray-300">
            Now booking turnkey residential & commercial sites across Indore & Central MP
          </p>
        </div>

        {/* Right: City, Hours & Quick Direct Call */}
        <div className="hidden md:flex items-center gap-6 font-mono text-[11px] text-gray-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#E09F3E]" />
            <span>HQ: Vijay Nagar, Indore</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            <span>{siteConfig.businessHours}</span>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-white hover:text-[#E09F3E] font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C25E38]" />
            <span>Direct: {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
