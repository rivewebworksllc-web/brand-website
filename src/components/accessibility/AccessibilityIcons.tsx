/**
 * RW-PAGE-12R: bespoke inline stroke icons for the Accessibility Trust
 * page, matching the established `PricingIcons.tsx`/`EvidencePackIcons.tsx`
 * convention (viewBox 0 0 24 24, stroke="currentColor", strokeWidth 1.5,
 * round caps). No icon library is installed in this repository; UI/UX Pro
 * Max recommended Phosphor, rejected per the Design Decision Brief. No
 * wheelchair symbol used anywhere, per the commissioning directive.
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

export function KeyboardIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="11" rx="1.5" />
      <path d="M6.5 10h.01M9.5 10h.01M12.5 10h.01M15.5 10h.01M17.5 10h.01M6.5 13.5h11" />
    </svg>
  );
}

export function FocusIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4 8.5V6a2 2 0 0 1 2-2h2.5M20 8.5V6a2 2 0 0 0-2-2h-2.5M4 15.5V18a2 2 0 0 0 2 2h2.5M20 15.5V18a2 2 0 0 1-2 2h-2.5" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function ContrastIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SemanticsIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M9 5 4.5 12 9 19M15 5l4.5 7-4.5 7" />
    </svg>
  );
}

export function ScreenReaderIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M6 9.5v5h3.5L14 18V6l-4.5 3.5H6Z" />
      <path d="M17 9.5a4 4 0 0 1 0 5M19.5 7.5a7.5 7.5 0 0 1 0 9" />
    </svg>
  );
}

export function RetestIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5M19.5 12a7.5 7.5 0 0 1-12.6 5.5" />
      <path d="M17.5 3.5v3.5H14M6.5 20.5V17H10" />
      <path d="M9.5 12.3 11.3 14l3.2-3.8" />
    </svg>
  );
}
