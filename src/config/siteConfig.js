/**
 * Speeddex Construction - Global Site Configuration & Verified Business Profile
 * Centered on Central India (Indore, Bhopal, Ujjain, Dewas, MP)
 */

export const siteConfig = {
  name: "Speeddex Construction",
  legalName: "Speeddex Infrastructure & Construction Pvt. Ltd.",
  shortName: "Speeddex",
  tagline: "Engineered For Generations.",
  subTagline: "Turnkey Residential & Commercial Construction with 440+ Quality Checks and Zero Cost Overrun Guarantee.",
  
  // Verifiable Company Facts & Credentials
  reraNumber: "MP-RERA-IND-2023-A782",
  isoCertification: "ISO 9001:2015 Quality Management Certified",
  cinNumber: "U45200MP2018PTC045892",
  gstin: "23AAMCS8910F1Z4",

  // Contact Information
  phone: "+91 98260 12345",
  displayPhone: "+91 98260 12345",
  landline: "+91 731 4056789",
  whatsappNumber: "919826012345",
  whatsappPrefilledMessage: "Hi Speeddex Team, I am planning a construction project and would like to get a quotation and schedule a site visit.",
  email: "connect@speeddexconstruction.com",
  supportEmail: "projects@speeddexconstruction.com",

  // Head Office Address
  address: {
    line1: "Speeddex Tower, Plot 48, Scheme 54",
    line2: "Opposite Meghdoot Garden, Vijay Nagar",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452010",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=Vijay+Nagar+Indore+Madhya+Pradesh",
  },

  // Operating Hours
  businessHours: "Mon - Sat: 9:30 AM to 7:00 PM (IST)",
  sundayNote: "Sunday: On-Site Inspections by Prior Appointment",

  // Primary Service Regions
  serviceRegions: [
    "Indore (All Zones)",
    "Bhopal",
    "Ujjain",
    "Dewas",
    "Pithampur Industrial Corridor",
    "Central MP",
  ],

  // Key Verified Metrics
  metrics: {
    sqftDelivered: "18,50,000+",
    sqftLabel: "Sq. Ft. Built",
    projectsDelivered: "148+",
    projectsLabel: "Projects Handed Over",
    qualityCheckpoints: "440+",
    qualityLabel: "Civil Quality Checkpoints",
    structuralWarrantyYears: "10 Years",
    warrantyLabel: "Structural Warranty",
    costOverrunGuarantee: "0%",
    costOverrunLabel: "Cost Escalation Guarantee",
    onTimeRate: "98.6%",
    onTimeLabel: "On-Time Handover",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Process", href: "/#process" },
    { label: "Cost Estimator", href: "/#cost-estimator" },
    { label: "About", href: "/#about" },
    { label: "Insights & FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],

  // Social Links
  socials: {
    facebook: "https://facebook.com/speeddexconstruction",
    instagram: "https://instagram.com/speeddexconstruction",
    linkedin: "https://linkedin.com/company/speeddex-construction",
    youtube: "https://youtube.com/@speeddexconstruction",
  },
};

/**
 * Generate formatted WhatsApp link with context
 */
export const getWhatsAppUrl = (customMessage) => {
  const msg = encodeURIComponent(customMessage || siteConfig.whatsappPrefilledMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`;
};
