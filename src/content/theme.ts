/**
 * Design tokens lifted from the Claude Design source. Kept alongside the copy
 * config so a mobile layout inherits the same palette without redeclaring it.
 * The same values are mirrored as CSS custom properties in `app/globals.css`.
 */
export const theme = {
  color: {
    cream: "#F7EFDD",
    creamCard: "#FDF8ED",
    creamSoft: "#F5E9CF",
    border: "#E6DAC0",
    borderCard: "#E7DBC2",
    borderTan: "#C9B78E",

    ink: "#16233F",
    inkSoft: "#3A4560",
    muted: "#5A6478",
    mutedSoft: "#6A7488",
    mutedFaint: "#8A93A6",

    navy: "#133168",
    navyDeep: "#0E2A5E",
    navyDark: "#0E2755",
    navyStripe: "#0B2049",
    onNavy: "#C4CEE4",
    onNavyMuted: "#9AA6C2",
    onNavyBright: "#DDE3EF",
    onNavyFaint: "#7683A0",

    accent: "#F4A020",
    accentLight: "#FFB13A",
    accentDark: "#E07D0C",

    whatsapp: "#25D366",
  },
  radius: {
    sm: "12px",
    md: "16px",
    lg: "22px",
    xl: "28px",
    pill: "100px",
  },
  layout: {
    maxWidth: "1240px",
    narrowWidth: "860px",
    gutter: "32px",
    headerHeight: "76px",
  },
} as const;
