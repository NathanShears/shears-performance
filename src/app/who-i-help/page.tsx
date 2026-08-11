import Link from "next/link";
import type { Metadata } from "next";

import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbStructuredData } from "@/components/structured-data";
import { routes, site } from "@/content/site";

const { who } = site;

const TITLE = "Who I help — Athletes, Teams, Coaches & Performers";

export const metadata: Metadata = {
  title: TITLE,
  description: who.hero.intro,
  alternates: { canonical: routes.who },
  openGraph: {
    title: TITLE,
    description: who.hero.intro,
    url: routes.who,
  },
};

export default function WhoIHelpPage() {
  return (
    <>
      <BreadcrumbStructuredData name="Who I help" path={routes.who} />
      <PageHero {...who.hero} />

      <section className="container" style={{ padding: "20px var(--gutter) 30px" }}>
        <div className="grid grid--3">
          {who.cards.map((card) => (
            <article key={card.title} className="card">
              <div className="card__icon">
                <Icon name={card.icon} />
              </div>
              <h2 className="card__title">{card.title}</h2>
              <p className="card__body">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container" style={{ marginTop: 40 }}>
        <div className="panel">
          <div className="eyebrow eyebrow--onNavy" style={{ marginBottom: 16 }}>
            {who.challenges.eyebrow}
          </div>
          <h2 className="display panel__title" style={{ maxWidth: 620, marginBottom: 34 }}>
            {who.challenges.title}
          </h2>
          <div className="challengeGrid">
            {who.challenges.items.map((item) => (
              <div key={item} className="ruledItem">
                <span aria-hidden="true" className="ruledItem__marker" />
                <span className="ruledItem__label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "56px var(--gutter) 40px", textAlign: "center" }}>
        <h2 className="display closing__title">{who.closing.title}</h2>
        <p className="closing__body">{who.closing.body}</p>
        <Link href={who.closing.action.href} className="btn btn--navy">
          {who.closing.action.label}
        </Link>
      </section>
    </>
  );
}
