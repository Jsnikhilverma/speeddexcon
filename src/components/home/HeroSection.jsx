import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Award, CheckCircle, ChevronDown, Phone } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../common/Button';

export const HeroSection = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center bg-[#0E1318] text-white overflow-hidden">
      {/* Background Architectural Photography with Multi-Layer Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-tower.jpg"
          alt="Speeddex modern architectural residential and commercial construction"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-105 animate-subtle-zoom"
        />
        {/* Editorial Vignette & Gradient Overlays for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1318] via-[#0E1318]/85 to-transparent/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-[#0E1318]/60" />
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Subtle Trust Pre-Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-white/10 border border-white/20 backdrop-blur-md mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#E09F3E]" />
            <span className="font-mono text-xs uppercase tracking-widest text-gray-200 font-semibold">
              RERA Compliant // Central India
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E09F3E]" />
            <span className="font-mono text-xs text-gray-300">
              440+ Quality Audits
            </span>
          </motion.div>

          {/* Master Architectural Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
          >
            Built With Precision.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#E09F3E] to-[#C25E38]">
              Engineered
            </span>{' '}
            For Generations.
          </motion.h1>

          {/* Subheading focused on Indian market clarity */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-gray-300 leading-relaxed font-light mb-10 max-w-2xl"
          >
            Premier turnkey residential villas and commercial infrastructure in Indore. Backed by guaranteed on-time handover, certified civil engineering oversight, and a strict <strong className="font-medium text-white">0% Cost Overrun Guarantee</strong>.
          </motion.p>

          {/* Dual Primary CTAs */}
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
              Discuss Your Project
            </Button>

            <Button
              variant="outlineWhite"
              size="lg"
              href="#projects"
            >
              Explore Our Work
            </Button>
          </motion.div>

          {/* Verifiable Quick Proof Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-gray-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#E09F3E] shrink-0" />
              <span>10-Yr Structural Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#E09F3E] shrink-0" />
              <span>Milestone-Based Escrow</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle className="w-4 h-4 text-[#E09F3E] shrink-0" />
              <span>Daily Photographic Logs</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#trust-strip"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs font-mono tracking-widest uppercase opacity-75 hover:opacity-100"
      >
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
