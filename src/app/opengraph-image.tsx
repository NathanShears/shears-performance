import { ImageResponse } from "next/og";

import { site } from "@/content/site";

/**
 * Site-wide social share card. Generated rather than shipped as a binary so it
 * tracks the brand palette and the headline copy in `site.ts`.
 *
 * ImageResponse supports a Satori subset of CSS: flexbox only, and every
 * element with more than one child needs an explicit `display: flex`.
 */
export const alt = `${site.meta.titleSuffix} — ${site.home.hero.eyebrow}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY_DARK = "#0e2755";
const ACCENT = "#f4a020";
const CREAM = "#f7efdd";
const MUTED = "#c4cee4";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: NAVY_DARK,
          padding: "72px 80px",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Diagonal accent bands echoing the hero artwork: one wide and soft,
            one narrow and solid, mirroring the site's navy/amber pairing. */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -170,
            width: 300,
            height: 950,
            background: ACCENT,
            opacity: 0.22,
            transform: "rotate(16deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -160,
            right: 30,
            width: 26,
            height: 950,
            background: ACCENT,
            transform: "rotate(16deg)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: ACCENT,
            }}
          />
          <div
            style={{
              color: CREAM,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {site.meta.titleSuffix}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: CREAM,
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Train the mind behind the performance.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              color: MUTED,
              fontSize: 29,
              lineHeight: 1.4,
              maxWidth: 880,
            }}
          >
            Sport &amp; performance psychology · Hampshire, UK &amp; online
          </div>
        </div>
      </div>
    ),
    size,
  );
}
