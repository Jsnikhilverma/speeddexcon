import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const FeaturedProjects = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.projectType === filter || (filter === 'ONGOING' && p.statusType === 'ongoing'));

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="03"
            badge="PORTFOLIO & SITES"
            title="Real Construction Sites. Authentic"
            highlight="Execution."
            description="Explore our delivered residences, active commercial hubs, and industrial facilities across Indore and Central Madhya Pradesh."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All Projects', value: 'ALL' },
              { label: 'Residential Villas', value: 'RESIDENTIAL' },
              { label: 'Commercial Plazas', value: 'COMMERCIAL' },
              { label: 'Active Sites', value: 'ONGOING' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                  filter === tab.value
                    ? 'bg-[#0F263B] text-white border-[#0F263B] shadow-xs'
                    : 'bg-white text-[#475569] border-[#E2DDD3] hover:border-[#0F263B]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white border border-[#E6E1D8] hover:border-[#C25E38]/50 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xs overflow-hidden flex flex-col"
              >
                {/* Large Project Image with Gradient Overlay & Status Badge */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="white" size="xs">
                      {project.category}
                    </Badge>
                    
                    <span className={`px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase font-semibold rounded-xs shadow-xs ${
                      project.statusType === 'completed'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Location & Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#E09F3E]" />
                      <span>{project.location}</span>
                      <span className="opacity-40">•</span>
                      <span>{project.areaSqFt.toLocaleString('en-IN')} Sq. Ft.</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#E09F3E] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Specs Strip */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed mb-4">
                      {project.tagline}
                    </p>

                    {/* Structural Specification Badges */}
                    <div className="p-3 bg-[#FAF8F5] border border-[#EAE5DC] rounded-xs space-y-1.5 mb-4 text-xs font-mono text-[#334155]">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Steel & Cement:</span>
                        <span className="font-semibold text-[#0E1318]">
                          {project.structuralSpecs.steel?.split(' ')[0]} + {project.structuralSpecs.cement?.split(' ')[0]}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Plot Dimensions:</span>
                        <span className="font-semibold text-[#0E1318]">{project.plotSize}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Quality Score:</span>
                        <span className="text-emerald-700 font-semibold">{project.qualityScore}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#F0ECE4]">
                    <span className="font-mono text-xs text-gray-400">
                      Completed: {project.completionYear}
                    </span>
                    <button
                      onClick={onOpenQuoteModal}
                      className="font-display font-semibold text-xs uppercase tracking-wider text-[#C25E38] hover:text-[#A94F2E] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire Similar Build</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-[#0F263B] text-white rounded-xs border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#E09F3E] shrink-0" />
            <div>
              <h4 className="font-display font-bold text-base">
                Want to physically inspect our ongoing sites in Indore?
              </h4>
              <p className="text-xs text-gray-300">
                We arrange guided site tours in Vijay Nagar, Nipania, Super Corridor, and Pithampur with our Project Engineer.
              </p>
            </div>
          </div>
          <Button
            variant="terracotta"
            size="sm"
            onClick={onOpenQuoteModal}
            className="shrink-0"
          >
            Book Guided Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
};
