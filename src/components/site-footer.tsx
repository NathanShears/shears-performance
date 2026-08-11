import Image from "next/image";
import Link from "next/link";

import { routes, site } from "@/content/site";

const { brand, footer } = site;

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div>
            <Link
              href={routes.home}
              className="brand"
              style={{ marginBottom: 20 }}
            >
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={42}
                height={42}
                style={{ borderRadius: 10, objectFit: "cover" }}
              />
              <span style={{ lineHeight: 1.05 }}>
                <span
                  className="brand__top"
                  style={{ color: "var(--cream)" }}
                >
                  {brand.nameTop}
                </span>
                <span
                  className="brand__bottom"
                  style={{ color: "var(--on-navy-muted)" }}
                >
                  {brand.nameBottom}
                </span>
              </span>
            </Link>
            <p className="footer__description">{footer.description}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <div className="footer__heading">{column.title}</div>
              <div className="footer__links">
                {column.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="footer__link"
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                {"note" in column && column.note && (
                  <span className="footer__note">{column.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>{footer.copyright}</span>
          <span>{footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
