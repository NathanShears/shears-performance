import Image from "next/image";
import Link from "next/link";

import { FaqAccordion } from "@/components/faq-accordion";
import { Heading } from "@/components/heading";
import { Icon } from "@/components/icons";
import { Marquee } from "@/components/marquee";
import { FaqStructuredData } from "@/components/structured-data";
import { routes, site } from "@/content/site";

const { home } = site;

export default function HomePage() {
  const { hero, whoPreview, howPreview, aboutPreview, testimonialPreview, faq, cta } =
    home;

  return (
    <>
      <FaqStructuredData items={home.faq.items} path={routes.home} />

      {/* ---------------------------------------------------------- hero */}
      <section className="heroBand">
        <div aria-hidden="true" className="heroBand__art">
          <div className="homeHero__blade" />
          <div className="homeHero__stripe" />
          <div className="homeHero__wash" />
        </div>

        {/* Copy, portrait and stats are siblings so the mobile layout can put
            the portrait between the copy and the stats. */}
        <div className="container homeHero__grid">
          <div className="homeHero__copy">
            <div className="badgePill" style={{ marginBottom: 28 }}>
              <span className="badgePill__dot" style={{ width: 8, height: 8 }} />
              <span className="badgePill__label">{hero.eyebrow}</span>
            </div>

            <Heading value={hero.title} className="display homeHero__title" />

            <p className="homeHero__intro">{hero.intro}</p>

            <div className="homeHero__actions">
              <Link href={hero.primaryCta.href} className="btn btn--accent">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="btn btn--ghostLight">
                {hero.secondaryCta.label}
              </Link>
            </div>

          </div>

          <div className="homeHero__media">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1200}
              height={1160}
              className="homeHero__portrait"
              priority
            />
            <div className="homeHero__badge">{hero.badge}</div>
          </div>

          <dl className="homeHero__stats">
            {hero.stats.map((stat, index) => (
              <div key={stat.label} className="homeHero__stat">
                {index > 0 && <span aria-hidden="true" className="homeHero__statRule" />}
                <div>
                  <dt
                    className="display homeHero__statValue"
                    style={stat.accent ? { color: "var(--accent)" } : undefined}
                  >
                    {stat.value}
                  </dt>
                  <dd className="homeHero__statLabel">{stat.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <Marquee words={home.marquee} />
      </section>

      {/* -------------------------------------------------- who I help */}
      <section className="container" style={{ padding: "90px var(--gutter) 20px" }}>
        <div className="sectionHead">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              {whoPreview.eyebrow}
            </div>
            <h2 className="display sectionHead__title">{whoPreview.title}</h2>
          </div>
          <Link href={whoPreview.link.href} className="arrowLink">
            {whoPreview.link.label}
          </Link>
        </div>

        <div className="grid grid--4">
          {whoPreview.cards.map((card) => (
            <article key={card.title} className="card card--sm card--hoverable">
              <div className="card__icon">
                <Icon name={card.icon} size={25} />
              </div>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__body">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------- how I help */}
      <section className="container" style={{ padding: "70px var(--gutter) 100px" }}>
        <div className="panel">
          <div className="eyebrow eyebrow--onNavy" style={{ marginBottom: 16 }}>
            {howPreview.eyebrow}
          </div>
          <h2 className="display panel__title">{howPreview.title}</h2>

          <div className="howPreview__body">
            <div className="howPreview__list">
              {howPreview.items.map((item) => (
                <div key={item.number} className="howPreview__row">
                  <span className="display howPreview__number">{item.number}</span>
                  <div>
                    <div className="howPreview__rowTitle">{item.title}</div>
                    <div className="howPreview__rowBody">{item.body}</div>
                  </div>
                </div>
              ))}
              <Link
                href={howPreview.cta.href}
                className="btn btn--accent btn--sm howPreview__cta"
              >
                {howPreview.cta.label}
              </Link>
            </div>

            {howPreview.image && (
              <Image
                src={howPreview.image.src}
                alt={howPreview.image.alt}
                width={900}
                height={750}
                className="howPreview__image"
              />
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------ about + testimonial teaser */}
      <section className="container grid grid--2" style={{ padding: "0 var(--gutter) 40px", gap: 24 }}>
        <div className="teaserCard">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            {aboutPreview.eyebrow}
          </div>
          <h2 className="display teaserCard__title">{aboutPreview.title}</h2>
          <p className="teaserCard__body">{aboutPreview.body}</p>
          <Link
            href={aboutPreview.link.href}
            className="arrowLink"
            style={{ marginTop: "auto", alignSelf: "flex-start" }}
          >
            {aboutPreview.link.label}
          </Link>
        </div>

        <div className="quoteCard">
          <div className="display quoteCard__mark" aria-hidden="true">
            &ldquo;
          </div>
          <p className="display quoteCard__quote">{testimonialPreview.quote}</p>
          <div className="quoteCard__foot">
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{testimonialPreview.name}</div>
              <div style={{ fontSize: 13, color: "var(--on-navy-muted)" }}>
                {testimonialPreview.role}
              </div>
            </div>
            <Link href={testimonialPreview.link.href} className="arrowLink arrowLink--pill">
              {testimonialPreview.link.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- faq */}
      <section className="container container--narrow" style={{ padding: "70px var(--gutter) 10px" }}>
        <div style={{ textAlign: "center", marginBottom: 38 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {faq.eyebrow}
          </div>
          <h2 className="display sectionTitle">{faq.title}</h2>
        </div>

        <FaqAccordion items={faq.items} />

        <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
          <Link href={faq.link.href} className="arrowLink arrowLink--accentHover">
            {faq.link.label}
          </Link>
        </div>
      </section>

      {/* ----------------------------------------------------------- cta */}
      <section className="container" style={{ padding: "30px var(--gutter) 76px" }}>
        <div className="ctaBand">
          <div aria-hidden="true" className="ctaBand__blade" />
          <div aria-hidden="true" className="ctaBand__stripe" />
          <div className="ctaBand__copy">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "var(--accent)",
                  borderRadius: "50%",
                }}
              />
              <span className="badgePill__label">{cta.eyebrow}</span>
            </div>
            <Heading value={cta.title} as="h2" className="display ctaBand__title" />
            <p className="ctaBand__body">{cta.body}</p>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <Link href={cta.action.href} className="btn btn--accent">
              {cta.action.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
