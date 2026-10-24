import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Ruler, Award, CheckCircle } from 'lucide-react';
import { Button } from '../common/Button';

export const ServiceHero = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative bg-[#0E1318] text-white pt-10 pb-20 lg:pb-28 overflow-hidden">
      {/* Editorial Background Image with Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-crane.jpg"
          alt="Speeddex architectural construction and structural engineering capabilities"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1318] via-[#0E1318]/90 to-[#0E1318]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-[#0E1318]/50" />
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            </li>
            <li className="text-[#E09F3E] font-medium" aria-current="page">
              Services & Capabilities
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          {/* Architectural Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-white/10 border border-white/20 backdrop-blur-md mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#E09F3E]" />
            <span className="font-mono text-xs uppercase tracking-widest text-gray-200 font-semibold">
              Turnkey & Civil Engineering // Central India
            </span>
          </motion.div>

          {/* Master Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
          >
            Engineering Capabilities.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#E09F3E] to-[#C25E38]">
              Uncompromising
            </span>{' '}
            Standards.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-gray-300 leading-relaxed font-light mb-10 max-w-2xl"
          >
            From turnkey luxury duplex villas to large-span commercial plazas and pre-engineered warehouses. Every project is backed by fixed-price BOQ contracts, certified civil engineering oversight, and a legally binding 10-Year Structural Guarantee.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <Button
              variant="terracotta"
              size="lg"
              onClick={onOpenQuoteModal}
              showArrow
            >
              Get Itemized BOQ Quote
            </Button>

            <Button
              variant="outlineWhite"
              size="lg"
              href="#services-list"
            >
              Explore 9 Service Categories
            </Button>
          </motion.div>

          {/* Quick Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-gray-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#E09F3E] shrink-0" />
              <span>Fixed Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#E09F3E] shrink-0" />
              <span>440+ Quality Audits</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle className="w-4 h-4 text-[#E09F3E] shrink-0" />
              <span>RERA Registered Contractor</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
