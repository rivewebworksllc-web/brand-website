/**
 * RW-PAGE-10: bespoke inline stroke icons for the six Evidence Pack
 * artifacts, matching the established `PricingIcons.tsx`/`MegaMenuIcons.tsx`
 * convention (viewBox 0 0 24 24, stroke="currentColor", strokeWidth 1.5,
 * round caps). No icon library is installed in this repository; UI/UX Pro
 * Max recommended Phosphor, rejected per the Evidence Pack Design Decision
 * Brief's Icon Opportunity Audit (no new dependency authorized).
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

export function ScopeRecordIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M7 5H5.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1H7M17 5h1.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H17" />
      <path d="M9 12.5l2 2 4-4.5" />
    </svg>
  );
}

export function ArchitectureRecordIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M7.3 15.8 10.9 7.6M13.1 7.6l3.6 8.2M7.8 17h8.4" />
      <circle cx="6" cy="17" r="1.6" />
      <circle cx="18" cy="17" r="1.6" />
      <circle cx="12" cy="6" r="1.6" />
    </svg>
  );
}

export function QaEvidenceRecordIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M12 3.5 19 6.3v5.4c0 4.4-2.9 7.9-7 9.3-4.1-1.4-7-4.9-7-9.3V6.3L12 3.5Z" />
      <path d="M9 12.3l2.1 2.1 4-4.6" />
    </svg>
  );
}

export function LaunchRecordIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M6 3.5v17" />
      <path d="M6 5h11l-2.5 3.25L17 11.5H6" />
    </svg>
  );
}

export function RunbookRecordIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4.5 15.5a7.5 7.5 0 0 1 15 0" />
      <path d="M12 15.5l4-5" />
      <circle cx="12" cy="15.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BacklogRecordIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4.5 7h15M4.5 12h10.5M4.5 17h6" />
    </svg>
  );
}

export const artifactIcon: Record<string, (props: IconProps) => React.JSX.Element> = {
  scope: ScopeRecordIcon,
  architecture: ArchitectureRecordIcon,
  qa: QaEvidenceRecordIcon,
  launch: LaunchRecordIcon,
  runbook: RunbookRecordIcon,
  backlog: BacklogRecordIcon,
};
