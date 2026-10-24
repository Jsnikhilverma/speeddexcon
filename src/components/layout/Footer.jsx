import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  Award, 
  Building2 
} from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';

export const Footer = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#0E1318] text-white pt-16 pb-24 sm:pb-16 border-t border-white/10 relative overflow-hidden">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Credentials Banner */}
        <div className="pb-12 mb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#E09F3E]" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-white">
                RERA Registered & ISO Certified
              </h4>
              <p className="text-xs text-gray-400 mt-0.5 font-mono">
                {siteConfig.reraNumber} | ISO 9001:2015
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#C25E38]" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-white">
                10-Year Structural Guarantee
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Legally backed structural and anti-leakage warranty
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-white">
                Zero Cost Overrun Guarantee
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Fixed BOQ contract with milestone-linked billing
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Col 1 & 2: Company Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-[#C25E38] text-white flex items-center justify-center font-display font-extrabold text-xl">
                S
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-white block">
                  SPEEDDEX
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#E09F3E] uppercase font-semibold">
                  Construction & Infrastructure
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Premier turnkey residential and commercial builders in Central India. We combine chartered civil engineering supervision, 440+ stage quality inspections, and locked-in pricing for stress-free construction.
            </p>

            <div className="pt-2 text-xs font-mono text-gray-400 space-y-1">
              <p><span className="text-gray-500">CIN:</span> {siteConfig.cinNumber}</p>
              <p><span className="text-gray-500">GSTIN:</span> {siteConfig.gstin}</p>
            </div>
          </div>

          {/* Col 3: Construction Services */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white tracking-wide uppercase mb-4 text-[#E09F3E]">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Turnkey Home Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial Complexes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Industrial PEB & Warehouses
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Structural Renovation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Architectural & 3D Plans
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Project Management (PMC)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white tracking-wide uppercase mb-4 text-[#E09F3E]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Portfolio & Sites
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our 6-Stage Process
                </a>
              </li>
              <li>
                <a href="#cost-estimator" className="hover:text-white transition-colors">
                  Cost Calculator
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Speeddex
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Indian Construction FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-[#C25E38] hover:text-[#E09F3E] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Quote & BOQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office & Contacts */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white tracking-wide uppercase mb-4 text-[#E09F3E]">
              Head Office
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C25E38] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C25E38] shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white font-mono">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C25E38] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                <span>{siteConfig.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors">Terms of Service</span>
            <span className="hover:text-gray-400 transition-colors">RERA Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
