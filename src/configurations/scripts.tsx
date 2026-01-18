import Script from "next/script";

export function AppScripts() {
  const siteUrl =
    process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://www.techsaws.com";

  const socialLinks = [
    process.env.NEXT_PUBLIC_SOCIAL_GITHUB,
    process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
    process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    process.env.NEXT_PUBLIC_SOCIAL_TRUSTPILOT,
  ].filter(Boolean) as string[];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "TechSaws",
        url: siteUrl,
        logo: `${siteUrl}/favicons/logo.svg`,
        description:
          "TechSaws is a global software engineering agency building future-ready web applications, SaaS platforms, AI systems, and cybersecurity-first digital products.",
        sameAs: socialLinks,
        brand: {
          "@type": "Brand",
          name: "TechSaws",
        },
        founder: [
          { "@type": "Person", name: "Syed Hassan Ali" },
          { "@type": "Person", name: "Muhammad Omair" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
          email: "contact@techsaws.com",
        },
        foundingLocation: {
          "@type": "Place",
          name: "Global",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "TechSaws",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <Script
      id="jsonld-techsaws"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
