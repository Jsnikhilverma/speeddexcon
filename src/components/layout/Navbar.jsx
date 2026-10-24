import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ArrowUpRight, HardHat, Compass } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Button } from '../common/Button';

export const Navbar = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Estimator', href: '#cost-estimator' },
    { name: 'Insights & FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E6E1D8] py-3'
          : 'bg-[#FBFBF9] border-b border-[#EAE6DF] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Construction Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xs bg-[#0F263B] text-white flex items-center justify-center font-display font-extrabold text-xl tracking-tight border border-[#0F263B] shadow-xs group-hover:bg-[#C25E38] transition-colors">
              <span className="text-[#E09F3E] group-hover:text-white">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#0E1318] leading-none">
                SPEEDDEX
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#C25E38] uppercase font-semibold mt-1">
                Construction & Infra
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-display text-sm font-medium text-[#475569] hover:text-[#0E1318] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C25E38] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Phone & Quote Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium text-[#0F263B] hover:text-[#C25E38] border border-[#E2DDD3] rounded-xs bg-white hover:bg-[#FAF8F5] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C25E38]" />
              <span>{siteConfig.phone}</span>
            </a>

            <Button
              variant="terracotta"
              size="sm"
              onClick={onOpenQuoteModal}
              showArrow
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-3 py-1.5 bg-[#C25E38] text-white text-xs font-display font-semibold rounded-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E1318] hover:bg-gray-100 rounded-xs transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-[#E6E1D8] shadow-2xl p-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-base font-semibold text-[#0E1318] py-1 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <Button
              variant="terracotta"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              showArrow
            >
              Request Detailed Quote & BOQ
            </Button>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-3 bg-[#FAF8F5] border border-[#E2DDD3] text-[#0F263B] text-xs font-mono font-semibold rounded-xs"
            >
              <Phone className="w-4 h-4 text-[#C25E38]" />
              <span>Call: {siteConfig.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-mono font-semibold rounded-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
