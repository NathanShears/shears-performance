import type { ReactNode } from "react";
import type { IconName } from "@/content/site";

type IconProps = { size?: number };

const strokeProps = {
  fill: "none",
  stroke: "#F4A020",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const paths: Record<IconName, ReactNode> = {
  athletes: <path d="M6.5 9v6M4.3 10.6v2.8M17.5 9v6M19.7 10.6v2.8M6.5 12h11" />,
  teams: (
    <>
      <circle cx="12" cy="7" r="2.5" />
      <path d="M7.8 14c0-2.1 1.9-3.6 4.2-3.6s4.2 1.5 4.2 3.6" />
      <circle cx="5.3" cy="9.2" r="1.9" />
      <path d="M2.8 14.4c0-1.7 1.2-2.9 2.9-2.9c.5 0 1 .1 1.4.3" />
      <circle cx="18.7" cy="9.2" r="1.9" />
      <path d="M21.2 14.4c0-1.7-1.2-2.9-2.9-2.9c-.5 0-1 .1-1.4.3" />
    </>
  ),
  coaches: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M15.4 8.6l-1.9 4.9-4.9 1.9 1.9-4.9Z" />
      <circle cx="12" cy="12" r="0.6" fill="#F4A020" stroke="none" />
    </>
  ),
  esports: (
    <>
      <path d="M7.6 8.6h8.8a4 4 0 0 1 3.9 3.1l.85 3.8a2.4 2.4 0 0 1-4.2 2L15 15H9l-1.95 2.5a2.4 2.4 0 0 1-4.2-2l.85-3.8A4 4 0 0 1 7.6 8.6Z" />
      <path d="M6.2 12.3h2.5M7.45 11.05v2.5" />
      <circle cx="15.6" cy="11.7" r="0.55" fill="#F4A020" stroke="none" />
      <circle cx="17.3" cy="13.4" r="0.55" fill="#F4A020" stroke="none" />
    </>
  ),
  professionals: (
    <path d="M12 3.6l2.5 5.1 5.6.8-4.05 3.95.96 5.55L12 16.4l-5.02 2.6.96-5.55L3.9 9.5l5.6-.8Z" />
  ),
  other: (
    <>
      <path d="M4.6 16.6a7.8 7.8 0 1 1 14.8 0" />
      <path d="M12 16.6l3.6-3.9" />
      <circle cx="12" cy="16.6" r="1.05" fill="#F4A020" stroke="none" />
      <path d="M6 16.4h.02M18 16.4h.02M8.5 11.4h.02M15.5 11.4h.02" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M4 7.6l8 5.4 8-5.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 20.5s6.5-5.6 6.5-10.5a6.5 6.5 0 0 0-13 0c0 4.9 6.5 10.5 6.5 10.5Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
};

/** Accent-stroked pictogram, referenced by name from the copy config. */
export function Icon({ name, size = 26 }: IconProps & { name: IconName }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...strokeProps}>
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({
  size = 25,
  color = "#FFFFFF",
}: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F4A020"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path d="M3 6.5h18M3 12h18" />
          {/* The design tips the short bottom bar in the accent colour. */}
          <path d="M9.5 17.5h11.5" stroke="#F4A020" />
        </>
      )}
    </svg>
  );
}
