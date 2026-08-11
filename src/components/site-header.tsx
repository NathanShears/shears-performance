"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { routes, site } from "@/content/site";
import { MenuIcon } from "./icons";

const { brand, nav } = site;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href={routes.home} className="brand">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={44}
            height={44}
            className="brand__mark"
            priority
          />
          <span style={{ textAlign: "left", lineHeight: 1.05 }}>
            <span className="brand__top">{brand.nameTop}</span>
            <span className="brand__bottom">{brand.nameBottom}</span>
          </span>
        </Link>

        <nav className="nav">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav__link"
              aria-current={isCurrent(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href={nav.action.href} className="header__cta">
          {nav.action.label}
          <span className="header__ctaDot" />
        </Link>

        <button
          type="button"
          className="header__menuBtn"
          aria-expanded={open}
          aria-label={open ? nav.closeLabel : nav.menuLabel}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* A drawer left open across a route change would cover the new page,
          so every link inside it closes the drawer on the way out. */}
      {open && (
        <div className="header__drawer">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav__link"
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={nav.action.href}
            className="btn btn--navy btn--sm"
            style={{ marginTop: 12 }}
            onClick={() => setOpen(false)}
          >
            {nav.action.label}
          </Link>
        </div>
      )}
    </header>
  );
}
