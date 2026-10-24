import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Clock, Award, ArrowDown, Phone, MessageCircle } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';

export const ServiceDetailHero = ({ service, onOpenQuoteModal }) => {
  return (
    <section className="relative bg-[#0E1318] text-white pt-10 pb-20 lg:pb-28 overflow-hidden">
      {/* Background Architectural Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.image}
          alt={`${service.title} by Speeddex Construction`}
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.1] scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1318] via-[#0E1318]/90 to-[#0E1318]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-[#0E1318]/50" />
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            </li>
            <li className="text-[#E09F3E] font-medium truncate" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* 2. Headline & Introduction */}
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Badge variant="white" size="xs">
              {service.category}
            </Badge>
            {service.tag && (
              <span className="px-2.5 py-0.5 rounded-xs bg-[#C25E38] text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                {service.tag}
              </span>
            )}
            <span className="font-mono text-xs text-[#E09F3E] font-semibold">
              RERA Compliant // Central India
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
          >
            {service.headline || service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-8 max-w-2xl"
          >
            {service.description}
          </motion.p>

          {/* Quick Specifications Pill Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-xs grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 font-mono text-xs"
          >
            <div>
              <span className="text-gray-400 block text-[10px] uppercase">
                Indicative Benchmark:
              </span>
              <span className="text-[#E09F3E] font-bold text-sm sm:text-base">
                {service.priceRange}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase">
                Typical Duration:
              </span>
              <span className="text-white font-semibold text-sm sm:text-base">
                {service.duration}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-gray-400 block text-[10px] uppercase">
                Warranty Term:
              </span>
              <span className="text-emerald-400 font-semibold text-sm sm:text-base">
                10-Year Structural
              </span>
            </div>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              variant="terracotta"
              size="lg"
              onClick={onOpenQuoteModal}
              showArrow
            >
              Request Project Quotation
            </Button>

            <a
              href="#service-scope"
              className="px-6 py-4 rounded-xs border border-white/30 text-white hover:bg-white/10 font-display font-medium text-sm tracking-wide transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Review Scope & Deliverables</span>
              <ArrowDown className="w-4 h-4 text-gray-300" />
            </a>

            <a
              href={getWhatsAppUrl(`Hi Speeddex, I want to discuss ${service.title} for my site in ${siteConfig.address.city}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-mono font-semibold rounded-xs shadow-xs inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
