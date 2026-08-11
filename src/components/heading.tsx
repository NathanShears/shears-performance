import type { SplitHeading } from "@/content/site";

/**
 * Renders a `SplitHeading` from the copy config, tinting the highlighted run
 * with the accent colour. Used by every hero so the mobile layout can reuse
 * the same strings without re-splitting them.
 */
export function Heading({
  value,
  className,
  as: Tag = "h1",
}: {
  value: SplitHeading;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={className}>
      {value.lead}
      {value.breakBefore && <br />}
      {value.highlight && <span className="accentText">{value.highlight}</span>}
      {value.trail}
    </Tag>
  );
}
