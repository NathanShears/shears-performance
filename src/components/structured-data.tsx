/**
 * JSON-LD structured data.
 *
 * Everything here is derived from `site.ts` so the markup can never drift from
 * the copy on the page — Google treats schema that contradicts visible content
 * as spam, so a single source of truth matters more here than elsewhere.
 *
 * Deliberately NOT included: Review / AggregateRating for the testimonials.
 * Google ignores self-serving review markup (a business publishing reviews
 * about itself) and flags it as a structured-data violation. Those reviews
 * belong on the Google Business Profile instead.
 */

import { routes, site } from "@/content/site";
import type { FaqItem } from "@/content/site";

const { meta, brand, contactDetails, how } = site;

const url = (path: string) => new URL(path, meta.url).toString();

/** Stable @id anchors so the graph nodes can reference each other. */
const ids = {
  business: url("/#business"),
  person: url("/#nathan"),
  website: url("/#website"),
};

/**
 * `contactDetails.location` is display copy ("Hampshire, UK · online
 * worldwide"); schema wants the bare place name.
 */
const AREA_SERVED = ["Hampshire", "United Kingdom"];

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Content is our own static copy from site.ts, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Site-wide graph: the practice, the practitioner behind it, and the website.
 * Rendered once from the root layout.
 */
export function SiteStructuredData({ sameAs }: { sameAs: string[] }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ids.business,
        name: meta.titleSuffix,
        description: meta.description,
        url: meta.url,
        email: contactDetails.email,
        image: url(brand.logo.src),
        logo: url(brand.logo.src),
        priceRange: "££",
        areaServed: AREA_SERVED.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        address: {
          "@type": "PostalAddress",
          addressRegion: "Hampshire",
          addressCountry: "GB",
        },
        founder: { "@id": ids.person },
        provider: { "@id": ids.person },
        // The four service lines from the How I help page.
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sport & performance psychology services",
          itemListElement: how.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.body,
            },
          })),
        },
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: "Nathan Shears",
        jobTitle: "Sport & Exercise Psychologist (in training)",
        description: site.about.hero.intro,
        url: url(routes.about),
        image: url(site.about.portrait.src),
        email: contactDetails.email,
        worksFor: { "@id": ids.business },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Portsmouth",
        },
        knowsAbout: [
          "Sport psychology",
          "Performance psychology",
          "Performance anxiety",
          "Confidence in sport",
          "Focus and concentration",
        ],
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: meta.url,
        name: meta.titleSuffix,
        description: meta.description,
        inLanguage: "en-GB",
        publisher: { "@id": ids.business },
      },
    ],
  };

  return <JsonLd data={graph} />;
}

/**
 * FAQPage for a route that renders an accordion. Only include this where the
 * questions and answers are genuinely visible on the page — that is a hard
 * requirement of the FAQ rich result.
 */
export function FaqStructuredData({
  items,
  path,
}: {
  items: readonly FaqItem[];
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": url(`${path}#faq`),
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

/** Breadcrumb trail for interior pages. */
export function BreadcrumbStructuredData({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: meta.url },
          { "@type": "ListItem", position: 2, name, item: url(path) },
        ],
      }}
    />
  );
}
