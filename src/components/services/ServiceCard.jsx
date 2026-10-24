import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Clock, UserCheck, ShieldCheck } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ServiceCard = ({ service, featured = false }) => {
  return (
    <div
      className={`group bg-white border border-[#E4DFD5] hover:border-[#C25E38]/60 transition-all duration-300 shadow-xs hover:shadow-xl rounded-xs flex flex-col overflow-hidden ${
        featured ? 'lg:col-span-2 md:flex-row' : ''
      }`}
    >
      {/* Image Crop Container */}
      <div
        className={`relative overflow-hidden bg-gray-200 ${
          featured ? 'md:w-1/2 h-72 md:h-auto min-h-[300px]' : 'h-64'
        }`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Badge variant="white" size="xs">
            {service.category}
          </Badge>
          {service.tag && (
            <span className="px-2.5 py-0.5 rounded-xs bg-[#C25E38] text-white text-[10px] font-mono font-semibold uppercase tracking-wider shadow-xs">
              {service.tag}
            </span>
          )}
        </div>

        {/* Bottom Image Stats */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
          <span className="font-bold text-[#E09F3E]">
            {service.priceRange}
          </span>
          <span className="flex items-center gap-1 opacity-90 text-[11px]">
            <Clock className="w-3.5 h-3.5" />
            {service.duration}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`p-6 sm:p-7 flex-1 flex flex-col justify-between ${
          featured ? 'md:w-1/2' : ''
        }`}
      >
        <div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0E1318] group-hover:text-[#C25E38] transition-colors mb-2.5">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Client target */}
          {service.clientType && (
            <div className="p-3 bg-[#FAF8F5] border-l-2 border-[#E09F3E] rounded-r-xs mb-5 text-[11px] text-[#334155] leading-snug">
              <span className="font-mono uppercase font-bold text-gray-500 block text-[9px] mb-0.5">
                Ideal For:
              </span>
              {service.clientType}
            </div>
          )}

          {/* Key Deliverables */}
          <div className="space-y-2 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
              Key Deliverables:
            </span>
            {(service.highlights || service.deliverables || service.inclusions || []).slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#334155] leading-snug">
                <Check className="w-3.5 h-3.5 text-[#C25E38] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer: Explore Service Route Link */}
        <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
          <span className="font-mono text-[11px] text-gray-400 uppercase tracking-widest">
            Fixed Scope BOQ
          </span>
          <Link
            to={`/services/${service.slug}`}
            className="font-display font-semibold text-xs uppercase tracking-wider text-[#0F263B] group-hover:text-[#C25E38] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Service Scope</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
