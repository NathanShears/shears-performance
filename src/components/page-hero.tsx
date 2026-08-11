import type { ReactNode } from "react";

import type { SplitHeading } from "@/content/site";
import { Heading } from "./heading";

/**
 * The navy banner with the drifting orange blade, shared by every interior
 * page. Content comes from `site.<page>.hero` in the copy config.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: SplitHeading;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="heroBand">
      <div aria-hidden="true" className="heroBand__art">
        <div className="heroBand__blade" />
        <div className="heroBand__stripe" />
        <div className="heroBand__wash" />
      </div>
      <div className="container heroBand__inner">
        <div className="badgePill">
          <span className="badgePill__dot" />
          <span className="badgePill__label">{eyebrow}</span>
        </div>
        <Heading value={title} className="display heroBand__title" />
        <p className="heroBand__intro">{intro}</p>
        {children}
      </div>
    </section>
  );
}
