/**
 * RW-PAGE-08B: inline stroke icons for Pricing, matching the existing
 * `MegaMenuIcons.tsx`/`CapabilityVisual.tsx` convention (viewBox 0 0 24 24,
 * stroke="currentColor", strokeWidth 1.5, round caps). No icon library is
 * installed in this repository and the directive forbids adding one, so
 * this reuses the project's own established icon language rather than a
 * new one. `currentColor` inherits the caller's tone class.
 */

type IconProps = { className?: string };

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WebIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5s1.2-6.2 3.6-8.5Z" />
    </svg>
  );
}

export function AiIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" />
      <circle cx="9.5" cy="11" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="11" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M7 17.5a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.66-1.9A4.25 4.25 0 0 1 17 17.5H7Z" />
    </svg>
  );
}

export function IncludedIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4.5 12.5 9 17l10.5-10.5" />
    </svg>
  );
}

export function SeparateIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M8 4.5H5.5a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1H8M16 4.5h2.5a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H16M12 3v18" strokeDasharray="2.5 3" />
    </svg>
  );
}

export function TimelineIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12.5" r="8" />
      <path d="M12 8v4.5l3 2" />
    </svg>
  );
}

export function EvidenceIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V4a.5.5 0 0 1 .5-.5Z" />
      <path d="M9 12h6M9 15.5h6M9 8.5h3" />
    </svg>
  );
}

export function DiscoveryIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15.3 15.3" />
    </svg>
  );
}

export function ContinuityIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66" />
      <path d="M17.5 3.5v3.5H14M6.5 20.5V17H10" />
    </svg>
  );
}

export function ScopeIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M8 4.5H5.5a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1H8M16 4.5h2.5a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H16" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function PriceIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M12 3.5v17M16.5 7.5c0-1.66-2-3-4.5-3s-4.5 1.34-4.5 3c0 4.5 9 2.5 9 6.5 0 1.66-2 3-4.5 3s-4.5-1.34-4.5-3" />
    </svg>
  );
}

export function AttachIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M6 12 12 6l6 6M12 6v13" />
    </svg>
  );
}

export const groupIcon = {
  web: WebIcon,
  ai: AiIcon,
  "cloud-data": CloudIcon,
} as const;

/**
 * RW-PAGE-08D: bespoke, more architectural icons for the three Managed
 * Services cards. Product Office review found the previous single shared
 * `ContinuityIcon` too generic a "utility treatment" to function as a
 * recognition device per service. Each composes two or three established
 * strokes from this file's own language (browser frame, cloud, loop arcs)
 * into one larger (48-64px at call site) architectural mark, so each service
 * gets a distinct silhouette rather than a shared badge. No icon library
 * added; still viewBox 0 0 24 24 / stroke="currentColor" / strokeWidth 1.5.
 */

export function WebsiteCareIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      {/* browser frame + chrome dots */}
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 8.5h18" />
      <circle cx="5.6" cy="6.75" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="7.4" cy="6.75" r="0.5" fill="currentColor" stroke="none" />
      {/* stewardship pulse across the page body */}
      <path d="M5.5 14.75h2.5l1.3 -3.5l1.8 6l1.3 -4.5l0.9 2h4.7" />
    </svg>
  );
}

export function CloudCareIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      {/* cloud layer */}
      <path d="M7.3 10.7a2.9 2.9 0 0 1-.4-5.77A3.62 3.62 0 0 1 13.85 3a3.35 3.35 0 0 1 3.08 1.98A3 3 0 0 1 16.7 10.7H7.3Z" />
      {/* control-plane pulse connecting cloud to infrastructure */}
      <path d="M12 10.7v1.8" />
      <circle cx="12" cy="13.4" r="0.85" fill="currentColor" stroke="none" />
      {/* infrastructure layers */}
      <rect x="5" y="15.3" width="14" height="2.9" rx="0.9" />
      <rect x="5" y="18.9" width="14" height="2.9" rx="0.9" />
    </svg>
  );
}

export function AiOpsIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      {/* evaluation loop */}
      <path d="M4 12a8 8 0 0 1 13.66-5.66" />
      <path d="M20 12a8 8 0 0 1-13.66 5.66" />
      <path d="M17.5 3.5v3.5H14" />
      <path d="M6.5 20.5V17H10" />
      {/* model / system node at center */}
      <rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.1" />
      {/* bounded human-control point on the loop */}
      <rect x="15.65" y="4.65" width="2.1" height="2.1" rx="0.4" transform="rotate(45 16.7 5.7)" />
    </svg>
  );
}

export const managedServiceIcon: Record<string, (props: IconProps) => React.JSX.Element> = {
  "MGT-03": WebsiteCareIcon,
  "MGT-21": CloudCareIcon,
  "MGT-16": AiOpsIcon,
};
