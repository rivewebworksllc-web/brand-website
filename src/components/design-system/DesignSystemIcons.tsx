/**
 * RW-PAGE-13: two new bespoke inline-stroke icons for the Brand Identity +
 * Digital Design System page, matching `PricingIcons.tsx`/
 * `FrictionMapIcons.tsx`'s established convention (viewBox 0 0 24 24,
 * stroke="currentColor", strokeWidth 1.5, round caps). Deliberately limited
 * to two: the Card/Icon Opportunity Audit in this page's Design Decision
 * Brief rejected a full seven-icon family as repetitive given the site
 * already has five prior icon-badge families. Included/excluded list icons
 * reuse `PricingIcons.tsx`'s existing `IncludedIcon`/`SeparateIcon` directly
 * rather than drawing new ones.
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

/** A raw value resolving into a named tag: the Fragments-to-System chapter mark. */
export function TokenIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <rect x="4" y="4" width="8" height="8" rx="1.5" />
      <path d="M12 8h4.5l3.5 3.5v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** An arrow crossing a boundary: the developer-handoff relationship. */
export function HandoffIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4 12h11" />
      <path d="M11 7.5 15.5 12 11 16.5" />
      <path d="M18 5v14" strokeDasharray="2.5 3" />
    </svg>
  );
}
