import { useEffect } from 'react';

/**
 * Lightweight dynamic SEO component for page titles, descriptions, and canonical metadata
 */
export const SEOHead = ({ title, description, canonicalPath }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonicalPath) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${window.location.origin}${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);

  return null;
};
