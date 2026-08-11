import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { BreadcrumbStructuredData } from "@/components/structured-data";
import { routes, site } from "@/content/site";

const { about } = site;

export const metadata: Metadata = {
  title: "About Nathan Shears — Sport Psychologist in Hampshire",
  description: about.hero.intro,
  alternates: { canonical: routes.about },
  openGraph: {
    title: "About Nathan Shears — Sport Psychologist in Hampshire",
    description: about.hero.intro,
    url: routes.about,
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbStructuredData name="About" path={routes.about} />
      <PageHero {...about.hero} />

      <section className="container aboutGrid">
        <div className="aboutGrid__media">
          <div aria-hidden="true" className="aboutGrid__mediaShadow" />
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            width={1200}
            height={1160}
            className="aboutGrid__portrait"
          />
        </div>

        <div>
          <div className="aboutGrid__prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} style={{ margin: 0 }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="panel aboutGrid__quals">
            <div
              className="eyebrow eyebrow--onNavy"
              style={{ letterSpacing: "0.18em", marginBottom: 22 }}
            >
              {about.qualifications.title}
            </div>
            <div className="qualGrid">
              {about.qualifications.items.map((item) => (
                <div key={item} className="ruledItem">
                  <span aria-hidden="true" className="ruledItem__marker" />
                  <span className="ruledItem__label" style={{ fontSize: 15.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="aboutGrid__actions">
            <Link href={about.actions.primary.href} className="btn btn--navy btn--sm">
              {about.actions.primary.label}
            </Link>
            <Link href={about.actions.secondary.href} className="btn btn--outline btn--sm">
              {about.actions.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
