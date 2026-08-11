import Link from "next/link";
import type { Metadata } from "next";

import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import {
  BreadcrumbStructuredData,
  FaqStructuredData,
} from "@/components/structured-data";
import { routes, site } from "@/content/site";

const { how } = site;

const TITLE = "Sport Psychology Sessions, Workshops & Team Consulting";

export const metadata: Metadata = {
  title: TITLE,
  description: how.hero.intro,
  alternates: { canonical: routes.how },
  openGraph: {
    title: TITLE,
    description: how.hero.intro,
    url: routes.how,
  },
};

export default function HowIHelpPage() {
  return (
    <>
      <BreadcrumbStructuredData name="How I help" path={routes.how} />
      {/* The accordion below renders every one of these Q&As in the DOM, which
          is what makes the page eligible for the FAQ rich result. */}
      <FaqStructuredData items={how.faq.items} path={routes.how} />
      <PageHero {...how.hero} />

      {/* ------------------------------------------------------ services */}
      <section className="container" style={{ padding: "20px var(--gutter)" }}>
        <div className="grid grid--2">
          {how.services.map((service) => {
            // The design gives the "Something else?" card a dark treatment;
            // it is the only service that carries its own call to action.
            const isDark = "action" in service && Boolean(service.action);
            return (
              <article
                key={service.number}
                className={isDark ? "serviceCard serviceCard--dark" : "serviceCard"}
              >
                <div className="serviceCard__head">
                  <span className="display serviceCard__number">{service.number}</span>
                  <h2 className="display serviceCard__title">{service.title}</h2>
                </div>
                <p className="serviceCard__body">{service.body}</p>
                {"action" in service && service.action && (
                  <Link
                    href={service.action.href}
                    className="btn btn--accent btn--sm"
                    style={{ alignSelf: "flex-start", marginTop: 18 }}
                  >
                    {service.action.label}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------- pricing */}
      <section className="container" style={{ padding: "70px var(--gutter) 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 className="display sectionTitle sectionTitle--lg">{how.pricing.title}</h2>
        </div>

        <div className="grid grid--3" style={{ alignItems: "stretch" }}>
          {how.pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={plan.featured ? "planCard planCard--featured" : "planCard"}
            >
              <div className="planCard__name">{plan.name}</div>
              <div className="planCard__priceRow">
                <span className="display planCard__price">{plan.price}</span>
                {plan.unit && <span className="planCard__unit">{plan.unit}</span>}
              </div>
              <p className="planCard__body">{plan.body}</p>
              {plan.note && <p className="planCard__note">{plan.note}</p>}
              <Link
                href={plan.action.href}
                className={
                  plan.featured
                    ? "btn btn--accent btn--block btn--sm"
                    : "btn btn--outline btn--block btn--sm"
                }
                style={{ marginTop: "auto" }}
              >
                {plan.action.label}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- faq */}
      <section
        className="container container--narrow"
        style={{ padding: "70px var(--gutter) 40px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 38 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {how.faq.eyebrow}
          </div>
          <h2 className="display sectionTitle">{how.faq.title}</h2>
        </div>
        <FaqAccordion items={how.faq.items} />
      </section>
    </>
  );
}
