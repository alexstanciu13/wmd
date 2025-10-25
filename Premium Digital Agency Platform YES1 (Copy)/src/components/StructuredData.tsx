import { Helmet } from 'react-helmet-async';

interface OrganizationData {
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  organization?: OrganizationData;
  breadcrumbs?: BreadcrumbItem[];
  webpage?: {
    name: string;
    description: string;
    url: string;
  };
}

export function StructuredData({ organization, breadcrumbs, webpage }: StructuredDataProps) {
  const structuredData: any[] = [];

  // Organization Schema
  if (organization) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: organization.name,
      description: organization.description,
      url: organization.url,
      logo: {
        '@type': 'ImageObject',
        url: organization.logo,
      },
      ...(organization.contactPoint && {
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: organization.contactPoint.telephone,
          contactType: organization.contactPoint.contactType,
          email: organization.contactPoint.email,
        },
      }),
    });
  }

  // WebPage Schema
  if (webpage) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: webpage.name,
      description: webpage.description,
      url: webpage.url,
    });
  }

  // Breadcrumb Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  return (
    <Helmet>
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
