/**
 * Lead API Client - Connects directly to Speeddex CRM Backend
 * Endpoint: POST /api/v1/leads/website
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const WEBSITE_INTEGRATION_KEY = import.meta.env.VITE_WEBSITE_INTEGRATION_KEY || 'speeddex_website_sec_2026_indore';

/**
 * Validates a 10-digit Indian mobile number
 * Indian numbers start with 6, 7, 8, or 9 and are exactly 10 digits
 */
export const validateIndianPhone = (phone) => {
  if (!phone) return { valid: false, error: "Mobile number is required" };
  const cleaned = phone.replace(/[\s\-\+\(\)]/g, '').replace(/^91/, '');
  if (!/^[6-9]\d{9}$/.test(cleaned)) {
    return { valid: false, error: "Please enter a valid 10-digit Indian mobile number (starts with 6-9)" };
  }
  return { valid: true, cleaned };
};

/**
 * Submit inbound website lead to the backend CRM
 * Returns real server response. Never masks failures.
 */
export const submitWebsiteLead = async (formData) => {
  const endpoint = `${API_BASE_URL}/api/v1/leads/website`;
  
  // Anti-abuse: Generate idempotency key and submission timestamp
  const idempotencyKey = `web_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const submissionTimestamp = Date.now();

  const payload = {
    clientName: formData.clientName?.trim(),
    phone: formData.phone?.trim(),
    email: formData.email?.trim() || undefined,
    projectType: formData.projectType || 'RESIDENTIAL',
    city: formData.city?.trim() || 'Indore',
    budget: Number(formData.budget) || 0,
    estimatedAreaSqFt: Number(formData.estimatedAreaSqFt) || 0,
    requirements: formData.requirements?.trim() || '',
    leadSource: 'WEBSITE',
    honeypot: formData.honeypot || '', // honeypot must be empty
    submissionTimestamp,
    idempotencyKey,
    websiteMetadata: {
      pageUrl: window.location.href,
      referrer: document.referrer || '',
      preferredCallbackTime: formData.preferredCallbackTime || 'Anytime during office hours',
    },
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-website-api-key': WEBSITE_INTEGRATION_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = 
        data.message || 
        (data.errors && data.errors[0]?.message) || 
        `Server error (${response.status}). Could not record inquiry.`;
      
      return {
        success: false,
        error: errorMessage,
        statusCode: response.status,
      };
    }

    return {
      success: true,
      data: data.data || data,
      leadId: data.data?.leadId || data.leadId || idempotencyKey,
      message: data.message || "Thank you! Your construction inquiry has been logged with our engineering team.",
    };
  } catch (networkError) {
    return {
      success: false,
      isNetworkError: true,
      error: "Unable to reach the Speeddex server. Please check your internet connection or use direct WhatsApp / Phone.",
    };
  }
};
