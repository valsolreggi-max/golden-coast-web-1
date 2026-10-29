import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
  type?: 'website' | 'article' | 'profile';
  jsonLd?: Record<string, unknown>;
}

const DOMAIN = 'https://www.goldencoastpropertyadvisory.com';
const DEFAULT_OG_IMAGE = `${DOMAIN}/og-image.jpg`;

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  type = 'website',
  jsonLd,
}) => {
  // Format canonical URL ensuring clean path
  const normalizedPath = canonicalPath.startsWith('/')
    ? canonicalPath
    : `/${canonicalPath}`;
  const canonicalUrl =
    normalizedPath === '/' ? `${DOMAIN}/` : `${DOMAIN}${normalizedPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create a meta tag
    const setMeta = (attribute: string, name: string, content: string) => {
      let meta = document.head.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical Link Tag
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // 4. OpenGraph Tags
    setMeta('property', 'og:site_name', 'Golden Coast Property Advisory');
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:locale', 'es_ES');

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 6. Optional Per-Page JSON-LD Script
    let pageJsonLdScript = document.head.querySelector('script[data-page-jsonld]') as HTMLScriptElement | null;
    if (jsonLd) {
      if (!pageJsonLdScript) {
        pageJsonLdScript = document.createElement('script');
        pageJsonLdScript.type = 'application/ld+json';
        pageJsonLdScript.setAttribute('data-page-jsonld', 'true');
        document.head.appendChild(pageJsonLdScript);
      }
      pageJsonLdScript.textContent = JSON.stringify(jsonLd);
    } else if (pageJsonLdScript) {
      pageJsonLdScript.remove();
    }
  }, [title, description, canonicalUrl, ogImage, noindex, type, jsonLd]);

  return null;
};
