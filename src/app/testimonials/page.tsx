import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { BreadcrumbStructuredData } from "@/components/structured-data";
import { routes, site } from "@/content/site";

const { testimonials } = site;

const TITLE = "Testimonials — What Clients Say";

export const metadata: Metadata = {
  title: TITLE,
  description: testimonials.hero.intro,
  alternates: { canonical: routes.testimonials },
  openGraph: {
    title: TITLE,
    description: testimonials.hero.intro,
    url: routes.testimonials,
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbStructuredData
        name="Testimonials"
        path={routes.testimonials}
      />
      <PageHero {...testimonials.hero} />

      <section className="container" style={{ padding: "26px var(--gutter) 8px" }}>
        <div className="testimonialColumns">
          {testimonials.items.map((item) => (
            <figure key={item.name} className="testimonialCard">
              <div aria-hidden="true" className="testimonialCard__art" />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="display testimonialCard__mark" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="testimonialCard__quote">{item.quote}</blockquote>
                <figcaption className="testimonialCard__foot">
                  <span className="display testimonialCard__avatar" aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="testimonialCard__name">{item.name}</span>
                    <span className="testimonialCard__role">{item.role}</span>
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="container"
        style={{ maxWidth: 900, padding: "34px var(--gutter) 40px", textAlign: "center" }}
      >
        <h2 className="display closing__title" style={{ fontSize: 30 }}>
          {testimonials.closing.title}
        </h2>
        <p className="closing__body" style={{ fontSize: 16.5, maxWidth: 470 }}>
          {testimonials.closing.body}
        </p>
        <Link
          href={testimonials.closing.action.href}
          className="btn btn--navy btn--sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {testimonials.closing.action.label}
        </Link>
      </section>
    </>
  );
}
