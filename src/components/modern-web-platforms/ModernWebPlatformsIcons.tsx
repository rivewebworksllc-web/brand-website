/**
 * RW-PAGE-14: two new bespoke inline-stroke icons for the Modern Web
 * Platforms page, matching `PricingIcons.tsx`/`DesignSystemIcons.tsx`'s
 * established convention (viewBox 0 0 24 24, stroke="currentColor",
 * strokeWidth 1.5, round caps). Deliberately limited to two, per this
 * page's Design Decision Brief (Icon Opportunity Audit). Included/excluded
 * list icons reuse `PricingIcons.tsx`'s existing `IncludedIcon` directly
 * rather than drawing new ones. No technology logos are used (no verified,
 * licensed asset source exists in this repository).
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

/** Three stacked, separated layers: the Platform Stack chapter mark. */
export function LayerStackIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M12 3.5 3.5 8l8.5 4.5L20.5 8 12 3.5Z" />
      <path d="M3.5 12 12 16.5 20.5 12" />
      <path d="M3.5 16 12 20.5 20.5 16" />
    </svg>
  );
}

/** A single path splitting into distinct branches: the platform decision mark. */
export function DecisionBranchIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="5" cy="12" r="1.75" />
      <path d="M6.75 12h3" />
      <path d="M9.75 12c2 0 2-6.5 4-6.5h4" />
      <path d="M9.75 12c2 0 2 0 4 0h4" />
      <path d="M9.75 12c2 0 2 6.5 4 6.5h4" />
    </svg>
  );
}
