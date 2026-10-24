import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Loader2 
} from 'lucide-react';
import { submitWebsiteLead, validateIndianPhone } from '../../api/leadApi';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';

export const LeadForm = ({
  title = "Plan Your Construction Project",
  subtitle = "Direct consultation with our senior civil engineers. Free preliminary architectural layout & itemized BOQ estimate.",
  defaultService = "RESIDENTIAL",
  source = "WEBSITE_HOME",
  theme = "light",
  className = "",
  compact = false,
}) => {
  const isDark = theme === "dark";

  // Form states
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    email: '',
    projectType: defaultService,
    city: 'Indore',
    estimatedAreaSqFt: '',
    budget: '',
    preferredCallbackTime: 'Morning (10 AM - 1 PM)',
    requirements: '',
    honeypot: '', // bot trap
  });

  const [isExpanded, setIsExpanded] = useState(!compact);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null); // { success: boolean, leadId?, message?, error? }

  const projectTypes = [
    { value: 'RESIDENTIAL', label: 'Residential Home / Villa' },
    { value: 'COMMERCIAL', label: 'Commercial & Retail Complex' },
    { value: 'INDUSTRIAL', label: 'Industrial PEB / Warehouse' },
    { value: 'RENOVATION', label: 'Structural Renovation & Remodel' },
    { value: 'INTERIOR', label: 'Architectural Planning & Interiors' },
  ];

  const callbackSlots = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 7:00 PM)',
    'Urgent (Call within 2 hours)',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.clientName || formData.clientName.trim().length < 2) {
      newErrors.clientName = "Please enter your full name (minimum 2 characters)";
    }

    const phoneCheck = validateIndianPhone(formData.phone);
    if (!phoneCheck.valid) {
      newErrors.phone = phoneCheck.error;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com)";
    }

    if (formData.estimatedAreaSqFt && Number(formData.estimatedAreaSqFt) < 0) {
      newErrors.estimatedAreaSqFt = "Area cannot be negative";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      return; // Silent fail for automated spambots
    }

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    setResult(null);

    const res = await submitWebsiteLead({
      ...formData,
      requirements: `${formData.requirements ? formData.requirements + " | " : ""}Source: ${source} | Callback: ${formData.preferredCallbackTime}`,
    });

    setSubmitting(false);
    setResult(res);

    if (res.success) {
      // Clear form on success
      setFormData({
        clientName: '',
        phone: '',
        email: '',
        projectType: defaultService,
        city: 'Indore',
        estimatedAreaSqFt: '',
        budget: '',
        preferredCallbackTime: 'Morning (10 AM - 1 PM)',
        requirements: '',
        honeypot: '',
      });
    }
  };

  return (
    <div
      className={`relative p-6 sm:p-8 lg:p-10 border transition-all duration-300 ${
        isDark
          ? 'bg-[#161D24] border-white/10 text-white'
          : 'bg-white border-[#E6E1D8] text-[#11161B] shadow-sm'
      } ${className}`}
    >
      {/* Architectural corner tick */}
      <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${
        isDark ? 'border-[#E09F3E]' : 'border-[#C25E38]'
      }`} />

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#C25E38]">
          <ShieldCheck className="w-4 h-4 text-[#C25E38]" />
          <span>Zero Obligation Consultation</span>
        </div>
        <h3 className={`font-display text-xl sm:text-2xl font-bold tracking-tight mb-2 ${
          isDark ? 'text-white' : 'text-[#0E1318]'
        }`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`text-xs sm:text-sm leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-[#5A6572]'
          }`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Success State */}
      {result && result.success && (
        <div className="p-6 mb-6 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-950 animate-fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-base text-emerald-900">
                Inquiry Successfully Logged!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed">
                Thank you! Your reference inquiry ID is{' '}
                <span className="font-mono font-bold">{result.leadId}</span>. Our senior civil engineering coordinator will review your requirements and call you back during your preferred time window.
              </p>
              <div className="mt-4 pt-3 border-t border-emerald-200 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hi Speeddex, I just submitted an inquiry (Ref: ${result.leadId}). Sharing my project location.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 hover:text-emerald-700 underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send Plot Photos via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Failure State with Instant WhatsApp Fallback */}
      {result && !result.success && (
        <div className="p-5 mb-6 rounded-xs bg-amber-50 border border-amber-200 text-amber-950 animate-fade-in">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-semibold text-sm text-amber-900">
                Server Connection Issue
              </h4>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                {result.error || "Could not log lead to server right now."}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <a
                  href={getWhatsAppUrl(`Hi Speeddex, I tried submitting an enquiry for ${formData.clientName || 'Home Construction'} (${formData.phone}). Please share quotation details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-xs font-semibold rounded-xs shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0F263B] text-white text-xs font-semibold rounded-xs shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actual Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Primary Row: Name & Indian Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-gray-300' : 'text-[#161D24]'
            }`}>
              Full Name <span className="text-[#C25E38]">*</span>
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-3.5 py-2.5 text-sm rounded-xs border transition-colors ${
                errors.clientName
                  ? 'border-red-500 bg-red-50/20 focus:border-red-500'
                  : isDark
                  ? 'bg-[#0E1318] border-white/15 text-white placeholder-gray-500 focus:border-[#E09F3E]'
                  : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] placeholder-gray-400 focus:border-[#C25E38] focus:bg-white'
              } focus:outline-none`}
            />
            {errors.clientName && (
              <p className="text-red-500 text-xs mt-1">{errors.clientName}</p>
            )}
          </div>

          <div>
            <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-gray-300' : 'text-[#161D24]'
            }`}>
              Mobile Number <span className="text-[#C25E38]">*</span>
            </label>
            <div className="relative">
              <span className={`absolute left-3 top-2.5 text-xs font-mono font-semibold ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                +91
              </span>
              <input
                type="tel"
                name="phone"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98260 12345"
                className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-xs border font-mono tracking-wide transition-colors ${
                  errors.phone
                    ? 'border-red-500 bg-red-50/20 focus:border-red-500'
                    : isDark
                    ? 'bg-[#0E1318] border-white/15 text-white placeholder-gray-500 focus:border-[#E09F3E]'
                    : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] placeholder-gray-400 focus:border-[#C25E38] focus:bg-white'
                } focus:outline-none`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Row 2: Service Type & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-gray-300' : 'text-[#161D24]'
            }`}>
              Construction Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xs border transition-colors ${
                isDark
                  ? 'bg-[#0E1318] border-white/15 text-white focus:border-[#E09F3E]'
                  : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] focus:border-[#C25E38] focus:bg-white'
              } focus:outline-none`}
            >
              {projectTypes.map((pt) => (
                <option key={pt.value} value={pt.value}>
                  {pt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
              isDark ? 'text-gray-300' : 'text-[#161D24]'
            }`}>
              Project City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Indore, Bhopal, Ujjain"
              className={`w-full px-3.5 py-2.5 text-sm rounded-xs border transition-colors ${
                isDark
                  ? 'bg-[#0E1318] border-white/15 text-white placeholder-gray-500 focus:border-[#E09F3E]'
                  : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] placeholder-gray-400 focus:border-[#C25E38] focus:bg-white'
              } focus:outline-none`}
            />
          </div>
        </div>

        {/* Progressive Disclosure Toggle Button */}
        {!isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className={`w-full py-2 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-[#5A6572] hover:text-[#0E1318]'
            }`}
          >
            <span>+ Add Plot Size, Budget & Timing (Optional)</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Expanded Progressive Fields */}
        {isExpanded && (
          <div className="space-y-4 pt-2 border-t border-dashed border-gray-300/40">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isDark ? 'text-gray-300' : 'text-[#161D24]'
                }`}>
                  Plot / Built-up Area
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="estimatedAreaSqFt"
                    value={formData.estimatedAreaSqFt}
                    onChange={handleChange}
                    placeholder="e.g. 2400"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xs border transition-colors ${
                      isDark
                        ? 'bg-[#0E1318] border-white/15 text-white placeholder-gray-500 focus:border-[#E09F3E]'
                        : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] placeholder-gray-400 focus:border-[#C25E38] focus:bg-white'
                    } focus:outline-none`}
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-mono">
                    sq. ft.
                  </span>
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isDark ? 'text-gray-300' : 'text-[#161D24]'
                }`}>
                  Estimated Budget
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-gray-500 font-bold">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. 4500000"
                    className={`w-full pl-8 pr-3.5 py-2.5 text-sm rounded-xs border font-mono transition-colors ${
                      isDark
                        ? 'bg-[#0E1318] border-white/15 text-white placeholder-gray-500 focus:border-[#E09F3E]'
                        : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] placeholder-gray-400 focus:border-[#C25E38] focus:bg-white'
                    } focus:outline-none`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isDark ? 'text-gray-300' : 'text-[#161D24]'
                }`}>
                  Callback Window
                </label>
                <select
                  name="preferredCallbackTime"
                  value={formData.preferredCallbackTime}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xs border transition-colors ${
                    isDark
                      ? 'bg-[#0E1318] border-white/15 text-white focus:border-[#E09F3E]'
                      : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] focus:border-[#C25E38] focus:bg-white'
                  } focus:outline-none`}
                >
                  {callbackSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                isDark ? 'text-gray-300' : 'text-[#161D24]'
              }`}>
                Email Address <span className="text-gray-400 font-normal lowercase">(optional for BOQ PDF)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full px-3.5 py-2.5 text-sm rounded-xs border transition-colors ${
                  errors.email
                    ? 'border-red-500 bg-red-50/20'
                    : isDark
                    ? 'bg-[#0E1318] border-white/15 text-white placeholder-gray-500 focus:border-[#E09F3E]'
                    : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] placeholder-gray-400 focus:border-[#C25E38] focus:bg-white'
                } focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                isDark ? 'text-gray-300' : 'text-[#161D24]'
              }`}>
                Specific Requirements / Plot Details
              </label>
              <textarea
                name="requirements"
                rows="2"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="e.g. Looking for G+1 duplex construction with Vastu compliant kitchen on East-facing 30x50 plot in Vijay Nagar."
                className={`w-full px-3.5 py-2.5 text-sm rounded-xs border transition-colors ${
                  isDark
                    ? 'bg-[#0E1318] border-white/15 text-white placeholder-gray-500 focus:border-[#E09F3E]'
                    : 'bg-[#FAF8F5] border-[#D9D3C7] text-[#11161B] placeholder-gray-400 focus:border-[#C25E38] focus:bg-white'
                } focus:outline-none`}
              />
            </div>
          </div>
        )}

        {/* Legal Consent & Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 px-6 bg-[#C25E38] hover:bg-[#A94F2E] text-white font-display font-semibold text-sm tracking-wide rounded-xs shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Logging Inbound Project...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request Detailed Quote & Site Visit</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-gray-500 text-center mt-2.5 leading-normal">
            🔒 By submitting, you authorize Speeddex civil engineers to contact you regarding your construction enquiry. Zero spam guaranteed.
          </p>
        </div>
      </form>
    </div>
  );
};
