import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { LeadForm } from './LeadForm';

export const QuickQuoteModal = ({ isOpen, onClose, defaultService = 'RESIDENTIAL' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0E1318]/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#E6E1D8] shadow-2xl rounded-xs overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-xs bg-[#FAF8F5] hover:bg-[#E6E1D8] text-[#0E1318] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          <LeadForm
            title="Get a Detailed Construction Quote"
            subtitle="Tell us about your plot or built-up requirements. Our civil engineering team in Indore will prepare an itemized BOQ estimation."
            defaultService={defaultService}
            source="POPUP_MODAL"
            compact={false}
          />
        </div>
      </div>
    </div>
  );
};
