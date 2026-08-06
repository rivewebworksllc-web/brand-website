/**
 * RW-PW07C: semantic mega-menu icons, replacing the `.charAt(0)` letter
 * badges. No icon library is installed in this repository (confirmed —
 * `package.json` has no Phosphor/HugeIcons/Radix/Tabler/Lucide dependency),
 * and the directive explicitly forbids adding one ("Only use icons already
 * available within the project's approved icon library. Do not introduce a
 * new icon dependency."). There is no approved icon library on file either
 * (checked `docs/design-system/`, `docs/creative-direction/`) — so instead
 * of stalling on a genuinely missing dependency, this reuses the *stroke
 * convention* the project already established for exactly this kind of
 * mark: `CapabilityVisual.tsx`'s buyer-path icons (`viewBox="0 0 24 24"
 * fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
 * strokeLinejoin="round"`), one consistent family, ~20px, outlined,
 * abstract "interface symbols" per the directive's own §2 ("avoid
 * decorative illustrations") — not a new visual language, the existing one.
 *
 * Every icon here is a plain function component so `currentColor` inherits
 * the tile's tone class (directive §6: "icons inherit the existing accent
 * treatment"); none carry their own colour.
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

function BrowserIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
      <path d="M6.5 6.5h.01M9.5 6.5h.01" />
    </svg>
  );
}

function CloudIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M7 18a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.66-1.79A4.5 4.5 0 0 1 15.5 18H7Z" />
    </svg>
  );
}

function SparklesIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M12 4l1.6 5.4L19 11l-5.4 1.6L12 18l-1.6-5.4L5 11l5.4-1.6L12 4Z" />
      <path d="M19 3v3M17.5 4.5h3" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M12 3.5l7 2.5v5.2c0 4.4-3 7.4-7 9.3-4-1.9-7-4.9-7-9.3V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GridIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
  );
}

function WorkflowIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 6h6a4 4 0 0 1 4 4M7 18h6a4 4 0 0 0 4-4" />
    </svg>
  );
}

function BookIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5v-13Z" />
    </svg>
  );
}

function ChartIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M4 20V10M10 20V4M16 20v-7M4 20h16" />
    </svg>
  );
}

function TagIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M11.5 4h-5A2.5 2.5 0 0 0 4 6.5v5c0 .5.2 1 .6 1.4l8 8c.8.8 2 .8 2.8 0l5-5c.8-.8.8-2 0-2.8l-8-8c-.4-.4-.9-.6-1.4-.6H11.5Z" />
      <circle cx="8" cy="8" r="1" />
    </svg>
  );
}

function QuestionIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.7v.3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <path d="M12 7.5h.01" />
    </svg>
  );
}

function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5v-2A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5v2" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

function HandshakeIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <path d="M2.5 12.5l3-2.5a2 2 0 0 1 2.5 0l2 1.6" />
      <path d="M21.5 12.5l-3-2.5a2 2 0 0 0-2.5 0l-4.7 3.8a1.3 1.3 0 0 0 1.6 2l.4-.3" />
      <path d="M9.5 12.5l1.8 1.5a1.3 1.3 0 0 0 1.8-.2" />
      <path d="M2.5 12.5v4M21.5 12.5v4" />
    </svg>
  );
}

function UsersIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 8.5a3 3 0 1 1 3.5 5.2" />
      <path d="M15.5 12.5c2.8.4 5 2.3 5 6.5" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

/** Defensive fallback for any label not in the map below — should never
 * actually render given the coverage here, but degrades safely rather than
 * throwing if a new link is added without an icon mapping. */
export function DefaultDestinationIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

/**
 * One icon per mega-menu link label currently rendered by `TileLink`
 * (Solutions/Services/Resources/Company — Work has no `links`, nothing to
 * map). Concepts that repeat across groups (Cloud, AI) share one icon
 * component — directive §9: "no destination should receive a unique visual
 * treatment that breaks the system."
 */
export const MEGA_MENU_ICONS: Record<string, (props: IconProps) => React.JSX.Element> = {
  "Website & Growth": BrowserIcon,
  "Cloud Modernization": CloudIcon,
  "AI & Automation": SparklesIcon,
  "Managed Services": ShieldCheckIcon,
  Web: BrowserIcon,
  Cloud: CloudIcon,
  Microsoft: GridIcon,
  AI: SparklesIcon,
  Automation: WorkflowIcon,
  Guides: BookIcon,
  Insights: ChartIcon,
  Pricing: TagIcon,
  FAQs: QuestionIcon,
  About: InfoIcon,
  Process: WorkflowIcon,
  Work: BriefcaseIcon,
  "Partners and Readiness": HandshakeIcon,
  Careers: UsersIcon,
  Contact: MailIcon,
};
