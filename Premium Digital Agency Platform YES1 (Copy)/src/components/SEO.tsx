import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

export function SEO({ title, description, path, image, type = 'website' }: SEOProps) {
  const siteName = 'Web Media Design';
  const siteUrl = 'https://webmediadesign.com'; // Update with actual domain
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonical = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og-image.jpg`; // Default OG image

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ro_RO" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
}
