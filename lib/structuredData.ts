export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kulmi Digital Agency",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kulmi Digital Agency",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  logo: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.webp`,
  sameAs: [
    "https://twitter.com/kulmidigital",
    "https://www.linkedin.com/company/kulmidigital",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "customer service",
    areaServed: ["Africa", "Worldwide"],
  },
};
