import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  ShieldCheck, 
  Loader2, 
  Calendar, 
  MapPin, 
  Ruler, 
  IndianRupee 
} from 'lucide-react';
import { submitWebsiteLead, validateIndianPhone } from '../../api/leadApi';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';

export const ServiceDetailForm = ({ service }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    email: '',
    city: 'Indore',
    estimatedAreaSqFt: '',
    budgetRange: '₹40 Lakhs - ₹75 Lakhs',
    preferredStartDate: 'Within 1-2 Months',
    requirements: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const budgetRanges = [
    'Under ₹35 Lakhs',
    '₹35 Lakhs - ₹60 Lakhs',
    '₹60 Lakhs - ₹1.2 Crore',
    '₹1.2 Crore - ₹2.5 Crore',
    '₹2.5 Crore+',
  ];

  const startDateOptions = [
    'Immediate (Within 15 Days)',
    'Within 1-2 Months',
    'Within 3-6 Months',
    'Planning Ahead (Next Year)',
  ];

  const cities = [
    'Indore',
    'Bhopal',
    'Ujjain',
    'Dewas',
    'Pithampur Corridor',
    'Other Central MP',
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
      newErrors.clientName = 'Please enter your full name (minimum 2 characters)';
    }

    const phoneCheck = validateIndianPhone(formData.phone);
    if (!phoneCheck.valid) {
      newErrors.phone = phoneCheck.error;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.estimatedAreaSqFt && Number(formData.estimatedAreaSqFt) < 0) {
      newErrors.estimatedAreaSqFt = 'Area must be positive';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validate()) return;

    setSubmitting(true);
    setResult(null);

    const numericBudget = formData.budgetRange.includes('Crore') ? 12000000 : 5000000;

    const res = await submitWebsiteLead({
      clientName: formData.clientName,
      phone: formData.phone,
      email: formData.email,
      projectType: service.projectType || 'RESIDENTIAL',
      city: formData.city,
      estimatedAreaSqFt: Number(formData.estimatedAreaSqFt) || 0,
      budget: numericBudget,
      requirements: `Service: ${service.title} | Timeline: ${formData.preferredStartDate} | Budget: ${formData.budgetRange} | Notes: ${formData.requirements}`,
    });

    setSubmitting(false);
    setResult(res);

    if (res.success) {
      setFormData({
        clientName: '',
        phone: '',
        email: '',
        city: 'Indore',
        estimatedAreaSqFt: '',
        budgetRange: '₹40 Lakhs - ₹75 Lakhs',
        preferredStartDate: 'Within 1-2 Months',
        requirements: '',
        honeypot: '',
      });
    }
  };

  return (
    <section id="service-lead-form" className="py-20 lg:py-28 bg-[#FBFBF9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E6E1D8] rounded-xs p-6 sm:p-10 shadow-xl relative">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C25E38]" />

          {/* Form Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#C25E38]">
              <ShieldCheck className="w-4 h-4 text-[#C25E38]" />
              <span>Tailored Technical Proposal</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0E1318] tracking-tight mb-2">
              Request Quotation for {service.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6572] leading-relaxed">
              Service <strong className="text-[#0E1318]">{service.title}</strong> is preselected below. Enter your site location and parameters for a comprehensive Bill of Quantities.
            </p>
          </div>

          {/* Success Banner */}
          {result && result.success && (
            <div className="p-6 mb-6 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-950 animate-fade-in">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-base text-emerald-900">
                    Quotation Request Registered!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-1">
                    Your reference inquiry ID is <span className="font-mono font-bold">{result.leadId}</span>. The Project Engineer assigned to {service.category.toLowerCase()} projects will review your parameters and contact you.
                  </p>
                  <div className="mt-4 pt-3 border-t border-emerald-200">
                    <a
                      href={getWhatsAppUrl(`Hi Speeddex, I registered an inquiry for ${service.title} (Ref: ${result.leadId}). Sending plot location.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 hover:text-emerald-700 underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Share Plot Map on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Banner with WhatsApp Fallback */}
          {result && !result.success && (
            <div className="p-5 mb-6 rounded-xs bg-amber-50 border border-amber-200 text-amber-950 animate-fade-in">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-amber-900">
                    Server Connection Alert
                  </h4>
                  <p className="text-xs text-amber-800 mt-1">
                    {result.error || 'Server is temporarily unreachable.'}
                  </p>
                  <div className="mt-3">
                    <a
                      href={getWhatsAppUrl(`Hi Speeddex, I would like a quote for ${service.title} in ${formData.city}. Contact: ${formData.phone}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-xs font-semibold rounded-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Connect Instantly on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            {/* Row 1: Preselected Service (Readonly) & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Selected Service <span className="text-gray-400 font-normal">(Preselected)</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={service.title}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xs border border-[#D9D3C7] bg-[#F3EFEA] text-[#0E1318] font-medium cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Project Location / City <span className="text-[#C25E38]">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xs border border-[#D9D3C7] bg-[#FAF8F5] text-[#11161B] focus:border-[#C25E38] focus:bg-white focus:outline-none"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: Name & Indian Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Your Full Name <span className="text-[#C25E38]">*</span>
                </label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xs border transition-colors ${
                    errors.clientName
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-[#D9D3C7] bg-[#FAF8F5] focus:border-[#C25E38] focus:bg-white'
                  } focus:outline-none`}
                />
                {errors.clientName && (
                  <p className="text-red-500 text-xs mt-1">{errors.clientName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Mobile Number <span className="text-[#C25E38]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs font-mono font-semibold text-gray-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98260 12345"
                    className={`w-full pl-12 pr-3.5 py-2.5 text-sm font-mono tracking-wide rounded-xs border transition-colors ${
                      errors.phone
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-[#D9D3C7] bg-[#FAF8F5] focus:border-[#C25E38] focus:bg-white'
                    } focus:outline-none`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Row 3: Plot Area, Budget & Start Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Plot / Built-up Area
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="estimatedAreaSqFt"
                    value={formData.estimatedAreaSqFt}
                    onChange={handleChange}
                    placeholder="e.g. 2400"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xs border border-[#D9D3C7] bg-[#FAF8F5] focus:border-[#C25E38] focus:bg-white focus:outline-none"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-mono">
                    sq. ft.
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Budget Range
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xs border border-[#D9D3C7] bg-[#FAF8F5] focus:border-[#C25E38] focus:bg-white focus:outline-none"
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Preferred Start Date
                </label>
                <select
                  name="preferredStartDate"
                  value={formData.preferredStartDate}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xs border border-[#D9D3C7] bg-[#FAF8F5] focus:border-[#C25E38] focus:bg-white focus:outline-none"
                >
                  {startDateOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Email & Specific Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Email Address <span className="text-gray-400 font-normal lowercase">(for detailed BOQ PDF)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xs border border-[#D9D3C7] bg-[#FAF8F5] focus:border-[#C25E38] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#161D24] mb-1.5">
                  Plot Dimensions / Notes
                </label>
                <input
                  type="text"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="e.g. 30x50 plot, G+1 duplex in Vijay Nagar"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xs border border-[#D9D3C7] bg-[#FAF8F5] focus:border-[#C25E38] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 bg-[#C25E38] hover:bg-[#A94F2E] text-white font-display font-semibold text-sm tracking-wide rounded-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Technical Scope Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request BOQ & Site Inspection for {service.shortTitle}</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-500 text-center mt-2.5">
                🔒 Strictly confidential. 0% spam. Your inquiry is reviewed by our lead civil engineer in Indore.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
