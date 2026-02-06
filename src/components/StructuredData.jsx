import { useEffect } from "react";
import { SITE } from "../data/site";

const PERSON_ID = `${SITE.siteUrl}#person`;

const SECTION_BREADCRUMBS = [
  { name: "Home", hash: "" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Testimonials", hash: "#testimonials" },
  { name: "Contact", hash: "#contact" },
];

function buildPersonSchema() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.person.name,
    jobTitle: SITE.person.jobTitle,
    url: SITE.siteUrl,
  };
  if (SITE.person.description) person.description = SITE.person.description;
  if (SITE.person.image) person.image = SITE.person.image;
  if (SITE.person.sameAs?.length) person.sameAs = SITE.person.sameAs;
  return person;
}

function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.person.name} | ${SITE.person.jobTitle}`,
    url: SITE.siteUrl,
    description: SITE.person.description ?? undefined,
    publisher: { "@id": PERSON_ID },
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: SECTION_BREADCRUMBS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.siteUrl}${item.hash}`,
    })),
  };
}

export function StructuredData() {
  useEffect(() => {
    const schemas = [
      buildPersonSchema(),
      buildWebSiteSchema(),
      buildBreadcrumbSchema(),
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemas);
    script.setAttribute("data-structured-data", "portfolio");
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
