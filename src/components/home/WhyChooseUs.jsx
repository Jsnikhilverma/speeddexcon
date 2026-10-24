import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Ruler, 
  Clock, 
  FileText, 
  Camera, 
  Award, 
  Scale 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const WhyChooseUs = ({ onOpenQuoteModal }) => {
  const pillars = [
    {
      icon: Scale,
      title: "Fixed-Price BOQ Guarantee",
      subtitle: "Zero hidden charges or mid-project price escalation",
      description: "Local contractors frequently quote low to win the job, then demand extra money mid-way when you are locked in. Speeddex signs an exhaustive, legally binding Bill of Quantities with locked-in material specifications.",
    },
    {
      icon: Ruler,
      title: "440+ Quality Audit Checks",
      subtitle: "Laboratory-tested structural integrity at every pour",
      description: "Our chartered civil engineers cast concrete test cubes at every slab, tested for compressive strength at 7 and 28 days in NABL-accredited labs. Rebar ductility, slump tests, and cover blocks are formally signed off.",
    },
    {
      icon: FileText,
      title: "Milestone-Linked Escrow Payments",
      subtitle: "You only pay after physical verification of completed work",
      description: "Never risk your hard-earned savings. Payments are broken into 6 clear construction milestones. Each invoice is generated only after you or your representative physically inspect the completed stage.",
    },
    {
      icon: Camera,
      title: "Daily Photographic WhatsApp Feeds",
      subtitle: "Total transparency for local, outstation and NRI owners",
      description: "Receive daily high-definition site photos, drone footage, and material delivery vouchers directly on your dedicated project WhatsApp group. You are always in command without having to stand in the dust.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0E1318] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            align="center"
            theme="dark"
            number="04"
            badge="WHY SPEEDDEX"
            title="Why Central India Chooses Us Over"
            highlight="Informal Contractors."
            description="High-value construction requires institutional accountability. Here is how our engineering protocols protect your investment, timeline, and peace of mind."
          />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-[#161D24] border border-white/10 hover:border-[#C25E38]/60 transition-all duration-300 rounded-xs relative group"
              >
                <div className="w-12 h-12 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-[#E09F3E] mb-6 group-hover:bg-[#C25E38] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-mono text-xs text-[#E09F3E] uppercase tracking-wider mb-1">
                  {pillar.subtitle}
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table: Traditional Thekedar vs Speeddex Institutional Construction */}
        <div className="bg-[#161D24] border border-white/10 rounded-xs overflow-hidden shadow-2xl">
          <div className="p-6 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <h4 className="font-display font-bold text-base sm:text-lg text-white">
              Institutional Construction vs. Unorganized Contractor
            </h4>
            <span className="font-mono text-xs text-[#E09F3E] uppercase tracking-widest hidden sm:inline">
              Transparency Matrix
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 font-mono uppercase text-[11px]">
                  <th className="p-4 sm:p-5">Parameters</th>
                  <th className="p-4 sm:p-5 text-red-400 bg-red-950/10">Traditional Local Thekedar</th>
                  <th className="p-4 sm:p-5 text-emerald-400 bg-emerald-950/20 font-bold">Speeddex Construction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Pricing & Estimates</td>
                  <td className="p-4 sm:p-5 bg-red-950/10 flex items-center gap-2 text-red-300">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Vague lump-sum, frequent budget revisions mid-project</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-950/20 text-emerald-200 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Itemized legally-binding BOQ with 0% Cost Overrun</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Quality Inspection</td>
                  <td className="p-4 sm:p-5 bg-red-950/10 flex items-center gap-2 text-red-300">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>No lab testing, reliance on visual judgment</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-950/20 text-emerald-200 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>440+ Checks, NABL lab concrete cube tests & MTC slips</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Payment Terms</td>
                  <td className="p-4 sm:p-5 bg-red-950/10 flex items-center gap-2 text-red-300">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Heavy upfront cash advances without progress link</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-950/20 text-emerald-200 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>6-stage milestone billing verified after physical sign-off</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Warranty & Handover</td>
                  <td className="p-4 sm:p-5 bg-red-950/10 flex items-center gap-2 text-red-300">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Verbal assurances, untraceable once final cash is cleared</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-950/20 text-emerald-200 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>10-Year Structural & 5-Year Waterproofing Warranty on paper</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
