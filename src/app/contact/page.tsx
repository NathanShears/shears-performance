import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Icon, WhatsAppIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbStructuredData } from "@/components/structured-data";
import { routes, site } from "@/content/site";

const { contact, contactDetails } = site;

const TITLE = "Contact — Book a Free Discovery Call";

export const metadata: Metadata = {
  title: TITLE,
  description: contact.hero.intro,
  alternates: { canonical: routes.contact },
  openGraph: {
    title: TITLE,
    description: contact.hero.intro,
    url: routes.contact,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbStructuredData name="Contact" path={routes.contact} />
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        intro={contact.hero.intro}
      >
        <a
          href={contactDetails.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--accent"
          style={{ marginTop: 26 }}
        >
          <WhatsAppIcon size={17} color="#0E2755" />
          {contact.hero.whatsappCta}
        </a>
      </PageHero>

      <section className="container contactGrid">
        <div>
          <div
            className="eyebrow"
            style={{ fontSize: 13, letterSpacing: "0.18em", marginBottom: 20 }}
          >
            {contact.details.eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {contact.details.items.map((item) => (
              <div key={item.label} className="contactRow">
                <span className="contactRow__icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <div className="contactRow__label">{item.label}</div>
                  <div className="contactRow__value">{contactDetails[item.valueKey]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contactFormCard">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
