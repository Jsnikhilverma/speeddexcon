import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const RelatedProjects = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="05"
            badge="PROOF OF WORK"
            title="Real Projects Delivered Across"
            highlight="Our Service Domains."
            description="Explore delivered residences and commercial complexes constructed under our turnkey and civil engineering contracts."
          />

          <Link
            to="/#projects"
            className="font-display font-semibold text-xs uppercase tracking-wider text-[#0F263B] hover:text-[#C25E38] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-[#E6E1D8] hover:border-[#C25E38]/50 shadow-xs hover:shadow-xl transition-all duration-300 rounded-xs overflow-hidden flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <Badge variant="white" size="xs">
                    {project.category}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-gray-300 font-mono mb-0.5">
                    <MapPin className="w-3 h-3 text-[#E09F3E]" />
                    <span>{project.location}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#E09F3E] transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#5A6572] leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <div className="p-2.5 bg-[#FAF8F5] border border-[#EAE5DC] rounded-xs text-[11px] font-mono text-[#334155] mb-4 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Built-Up Area:</span>
                      <span className="font-semibold text-[#0E1318]">{project.areaSqFt.toLocaleString('en-IN')} sq.ft.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Quality Audit:</span>
                      <span className="text-emerald-700 font-semibold">{project.qualityScore.split('(')[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-xs">
                  <span className="font-mono text-gray-400 text-[11px]">
                    Status: {project.status.split('(')[0]}
                  </span>
                  <Link
                    to="/#contact"
                    className="font-display font-semibold text-[#C25E38] hover:text-[#A94F2E] inline-flex items-center gap-1"
                  >
                    <span>Inquire Build</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
