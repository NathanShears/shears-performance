"use client";

import { usePathname } from "next/navigation";

import { routes, site } from "@/content/site";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";

/** Hidden on the contact page, which already leads with a WhatsApp CTA. */
export function WhatsAppFab() {
  const pathname = usePathname();
  if (pathname.startsWith(routes.contact)) return null;

  return (
    <div className="fab">
      <div className="fab__label">
        {site.whatsappFab.label}
        <ArrowRightIcon />
      </div>
      <a
        href={site.contactDetails.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fab__button"
        aria-label={site.whatsappFab.ariaLabel}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
