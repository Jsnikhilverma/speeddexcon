import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const ServiceVerifiedProjects = ({ service }) => {
  const matchedProjects = projectsData.filter((p) =>
    service.relevantProjectIds?.includes(p.id) ||
    p.projectType === service.projectType
  ).slice(0, 2);

  if (matchedProjects.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            number="05"
            badge="VERIFIED EXECUTION"
            title="Relevant Projects Executed Under"
            highlight={service.shortTitle}
            description="Verified case studies showcasing completed and active sites built with these exact specifications."
          />

          <Link
            to="/#projects"
            className="font-display font-semibold text-xs uppercase tracking-wider text-[#0F263B] hover:text-[#C25E38] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Site Logs</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2 High-Impact Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {matchedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-[#E6E1D8] hover:border-[#C25E38]/50 shadow-xs hover:shadow-xl transition-all duration-300 rounded-xs overflow-hidden flex flex-col"
            >
              <div className="relative h-72 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <Badge variant="white" size="xs">
                    {project.category}
                  </Badge>
                  <span className="px-2.5 py-0.5 text-[11px] font-mono tracking-wider uppercase font-semibold rounded-xs bg-emerald-600 text-white shadow-xs">
                    {project.status.split('(')[0]}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E09F3E]" />
                    <span>{project.location}</span>
                    <span className="opacity-40">•</span>
                    <span>{project.areaSqFt.toLocaleString('en-IN')} Sq. Ft.</span>
                  </div>
                  <h4 className="font-display font-bold text-xl text-white group-hover:text-[#E09F3E] transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <div className="p-3 bg-[#FAF8F5] border border-[#EAE5DC] rounded-xs text-xs font-mono text-[#334155] mb-4 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Structural Specs:</span>
                      <span className="font-semibold text-[#0E1318]">
                        {project.structuralSpecs.steel?.split(' ')[0]} + {project.structuralSpecs.cement?.split(' ')[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Quality Score:</span>
                      <span className="text-emerald-700 font-semibold">{project.qualityScore}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-xs">
                  <span className="font-mono text-gray-400">
                    Handover: {project.completionYear}
                  </span>
                  <Link
                    to="/#contact"
                    className="font-display font-semibold text-[#C25E38] hover:text-[#A94F2E] inline-flex items-center gap-1"
                  >
                    <span>Inquire Similar Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
