/**
 * RW-PAGE-11: bespoke inline stroke icons for the five Experience Friction
 * Map stages, matching the established `PricingIcons.tsx`/
 * `EvidencePackIcons.tsx` convention (viewBox 0 0 24 24,
 * stroke="currentColor", strokeWidth 1.5, round caps). No icon library is
 * installed in this repository; UI/UX Pro Max recommended Phosphor,
 * rejected per the Design Decision Brief (no new dependency authorized).
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

export function EntryIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M5 3.5h9v17H5Z" />
      <path d="M14 3.5 19 5v14l-5 1.5" />
      <circle cx="16.5" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function OrientationIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M15.2 8.8 13 13l-4.2 2.2L11 11Z" />
    </svg>
  );
}

export function PersuasionIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M12 3.5v17M6 7h12" />
      <path d="M6 7 3.5 12a2.5 2.5 0 0 0 5 0L6 7ZM18 7l-2.5 5a2.5 2.5 0 0 0 5 0L18 7Z" />
    </svg>
  );
}

export function ActionIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M6 4 10.2 19l2-6.2 6.2-2Z" />
      <path d="M14.5 14.5 18.5 18.5" />
    </svg>
  );
}

export function ConfirmationIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.3 12.3 10.9 14.9 15.9 8.9" />
    </svg>
  );
}

export const frictionStageIcon: Record<string, (props: IconProps) => React.JSX.Element> = {
  entry: EntryIcon,
  orientation: OrientationIcon,
  persuasion: PersuasionIcon,
  action: ActionIcon,
  confirmation: ConfirmationIcon,
};
