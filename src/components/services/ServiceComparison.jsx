import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, FileText, Scale } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { comparisonMatrix } from '../../data/servicesData';
import { Button } from '../common/Button';

export const ServiceComparison = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <section id="turnkey-vs-labour" className="py-20 lg:py-28 bg-[#161D24] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            align="center"
            theme="dark"
            number="02"
            badge="TRANSPARENCY COMPARISON"
            title="Turnkey vs. Labour Contract:"
            highlight="The Real Cost."
            description={comparisonMatrix.subtitle}
          />
        </div>

        {/* Informative Editorial Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Turnkey Card */}
          <div className="p-8 bg-[#0E1318] border border-emerald-500/30 rounded-xs relative">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                [ Recommended ]
              </span>
              <span className="px-2.5 py-0.5 rounded-xs bg-emerald-500/20 text-emerald-300 text-xs font-mono">
                100% Peace of Mind
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Full Turnkey Construction
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Speeddex manages the entire lifecycle: architectural blueprints, Nagar Nigam building sanctions, direct factory procurement of Tata Tiscon steel and UltraTech cement, civil execution, MEP, and luxury finishes.
            </p>
            <div className="space-y-2 text-xs text-emerald-300 font-mono">
              <p>✓ Legally binding fixed-price contract (0% Cost Overrun)</p>
              <p>✓ 10-Year Structural & 5-Year Waterproofing Warranty</p>
              <p>✓ Milestone payments billed only after on-site civil sign-off</p>
            </div>
          </div>

          {/* Labour Contract Card */}
          <div className="p-8 bg-[#0E1318] border border-red-500/30 rounded-xs relative">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                [ High Risk Model ]
              </span>
              <span className="px-2.5 py-0.5 rounded-xs bg-red-500/20 text-red-300 text-xs font-mono">
                Exhausting & Uncertain
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Unorganized Labour-Only Contract
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Homeowner must coordinate 100+ raw material trucks (bricks, river sand, TMT steel, cement), guard against transit theft and adulteration, and resolve daily disputes between mason crews and plumbers.
            </p>
            <div className="space-y-2 text-xs text-red-300 font-mono">
              <p>✕ 15% to 20% material wastage cost borne entirely by you</p>
              <p>✕ Zero written structural warranty or post-handover liability</p>
              <p>✕ Contractor routinely demands cash advances and revises rates</p>
            </div>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-[#0E1318] border border-white/10 rounded-xs overflow-hidden shadow-2xl mb-8">
          <div className="p-6 bg-white/5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Detailed Scope & Accountability Comparison
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Evaluated across 6 critical Indian construction risk factors
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E09F3E]">
              <Scale className="w-4 h-4" />
              <span>Direct Responsibility Matrix</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 font-mono uppercase text-[11px]">
                  <th className="p-4 sm:p-5 w-1/4">Core Parameter</th>
                  <th className="p-4 sm:p-5 w-3/8 text-emerald-400 bg-emerald-950/20 font-bold">
                    Speeddex Turnkey Model
                  </th>
                  <th className="p-4 sm:p-5 w-3/8 text-red-400 bg-red-950/15">
                    Unorganized Labour-Only Thekedar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {comparisonMatrix.criteria.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">
                      {row.parameter}
                    </td>
                    <td className="p-4 sm:p-5 bg-emerald-950/15 text-emerald-100">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.turnkey}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 bg-red-950/10 text-red-200">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.labourOnly}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Statutory Legal Scope Disclaimer */}
        <div className="p-5 bg-[#1C252E] border border-white/10 rounded-xs flex items-start gap-3.5 text-xs text-gray-300">
          <AlertTriangle className="w-5 h-5 text-[#E09F3E] shrink-0 mt-0.5" />
          <div>
            <span className="font-display font-bold text-white block mb-0.5">
              Contractual Scope Notice
            </span>
            <p className="leading-relaxed text-gray-400">
              {comparisonMatrix.disclaimer} Detailed inclusions (e.g. tile brands, sanitaryware allowances, door wood types) are itemized in our formal BOQ schedule attached to your legal construction agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
