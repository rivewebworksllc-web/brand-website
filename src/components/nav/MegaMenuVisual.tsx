import { CATEGORY_LABEL, type PlaceholderMeta } from "@/components/media/Placeholder";

type MegaMenuVisualProps = {
  meta: PlaceholderMeta;
  className?: string;
};

/**
 * RW-PW07B Product Office calibration: the mega menu's visual column is a
 * "Visual Story Panel", not a generic image placeholder — it should
 * communicate a category's identity (architectural / operational /
 * evidence-driven / editorial / human) before any final asset exists, and
 * carry more visual weight than the nav column next to it. Each of the five
 * compositions below is bespoke to its category rather than a shared
 * generic icon, built CSS/SVG-only (no image-gen tool available), using
 * only brand tokens already approved elsewhere in the codebase. Motion is
 * restrained to the one place it reinforces meaning — Solutions' converging
 * paths — and is `motion-safe:`-gated like every other animation on the
 * site.
 */

function SolutionsVisual() {
  const nodes = [
    { x: 46, y: 42, color: "var(--color-gold-deep)" },
    { x: 254, y: 42, color: "var(--color-brand-maroon)" },
    { x: 46, y: 178, color: "var(--color-accent-azure-strong)" },
    { x: 254, y: 178, color: "var(--color-gold-deep)" },
  ];
  const center = { x: 150, y: 110 };

  return (
    <div className="atmosphere-grid absolute inset-0" aria-hidden="true">
      <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full" fill="none">
        {nodes.map((node, index) => (
          <line
            key={index}
            x1={node.x}
            y1={node.y}
            x2={center.x}
            y2={center.y}
            stroke={node.color}
            strokeWidth="1.25"
            className="motion-safe:animate-[connector-pulse_2.6s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 0.35}s` }}
          />
        ))}
        {nodes.map((node, index) => (
          <circle key={index} cx={node.x} cy={node.y} r="6" fill="var(--color-surface)" stroke={node.color} strokeWidth="2" />
        ))}
        <circle cx={center.x} cy={center.y} r="11" fill="var(--color-gold-deep)" />
        <circle cx={center.x} cy={center.y} r="11" fill="none" stroke="var(--color-surface)" strokeWidth="2" />
      </svg>
    </div>
  );
}

function ServicesVisual() {
  const stages = [
    { x: 55, color: "var(--color-gold-deep)" },
    { x: 150, color: "var(--color-brand-maroon)" },
    { x: 245, color: "var(--color-accent-azure-strong)" },
  ];

  return (
    <div className="absolute inset-0 bg-surface-alt" aria-hidden="true">
      <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full" fill="none">
        <line x1="55" y1="110" x2="245" y2="110" stroke="var(--color-hairline)" strokeWidth="1.5" strokeDasharray="4 5" />
        {stages.map((stage, index) => (
          <g key={index}>
            <circle cx={stage.x} cy="110" r="17" fill="var(--color-surface)" stroke={stage.color} strokeWidth="2" />
            <text
              x={stage.x}
              y="115"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill={stage.color}
              fontFamily="var(--font-sans, sans-serif)"
            >
              {index + 1}
            </text>
          </g>
        ))}
        <path d="M262 104 L272 110 L262 116" stroke="var(--color-accent-azure-strong)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function WorkVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface-alt" aria-hidden="true">
      <div className="relative h-32 w-44">
        <div className="absolute inset-0 -rotate-3 rounded-md border border-hairline bg-surface shadow-sm">
          <div className="flex items-center gap-1 border-b border-hairline px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
            <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
            <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
          </div>
          <div className="space-y-1.5 p-2.5">
            <div className="h-2 w-3/4 rounded-full bg-hairline" />
            <div className="h-2 w-1/2 rounded-full bg-hairline" />
          </div>
        </div>
        <div className="absolute inset-0 translate-x-5 translate-y-3 rotate-2 rounded-md border border-hairline bg-surface shadow-md">
          <div className="flex items-center gap-1 border-b border-hairline px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-deep/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
            <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
          </div>
          <div className="space-y-1.5 p-2.5">
            <div className="h-2 w-2/3 rounded-full bg-brand-maroon/25" />
            <div className="h-2 w-full rounded-full bg-hairline" />
            <div className="h-2 w-1/3 rounded-full bg-hairline" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesVisual() {
  const covers = [
    { rotate: "-rotate-6", offset: "-translate-x-10", band: "bg-accent-azure-strong/70" },
    { rotate: "rotate-0", offset: "translate-x-0", band: "bg-gold-deep/70" },
    { rotate: "rotate-6", offset: "translate-x-10", band: "bg-brand-maroon/60" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface-alt" aria-hidden="true">
      <div className="relative h-32 w-24">
        {covers.map((cover, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${cover.rotate} ${cover.offset} overflow-hidden rounded-sm border border-hairline bg-surface shadow-sm`}
          >
            <div className={`h-2.5 w-full ${cover.band}`} />
            <div className="space-y-1.5 p-2">
              <div className="h-1.5 w-full rounded-full bg-hairline" />
              <div className="h-1.5 w-4/5 rounded-full bg-hairline" />
              <div className="h-1.5 w-2/3 rounded-full bg-hairline" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanyVisual() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, var(--color-accent-azure-soft), var(--color-surface-alt) 70%)",
      }}
    >
      <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full" fill="none">
        <circle cx="120" cy="110" r="46" fill="var(--color-gold-deep)" opacity="0.18" />
        <circle cx="175" cy="95" r="34" fill="var(--color-brand-maroon)" opacity="0.16" />
        <circle cx="165" cy="140" r="26" fill="var(--color-accent-azure-strong)" opacity="0.2" />
      </svg>
    </div>
  );
}

const COMPOSITIONS: Record<PlaceholderMeta["category"], () => React.ReactElement> = {
  "architecture-diagram": SolutionsVisual,
  "device-render": ServicesVisual,
  "editorial-photography": WorkVisual,
  "feature-illustration": ResourcesVisual,
  "team-photography": CompanyVisual,
  "hero-illustration": SolutionsVisual,
  "workspace-photography": CompanyVisual,
  "product-mockup": WorkVisual,
  "brand-graphic": ServicesVisual,
  video: WorkVisual,
};

export function MegaMenuVisual({ meta, className = "" }: MegaMenuVisualProps) {
  const Composition = COMPOSITIONS[meta.category];

  return (
    <div
      role="img"
      aria-label={`${meta.purpose} — placeholder, ${meta.mood.toLowerCase()}`}
      className={`relative h-full min-h-[280px] overflow-hidden rounded-lg border border-hairline ${className}`.trim()}
    >
      <Composition />
      <span className="absolute bottom-2 left-2 rounded-sm border border-hairline bg-surface/90 px-2 py-0.5 text-[11px] font-medium text-muted backdrop-blur-sm">
        {CATEGORY_LABEL[meta.category]} · pending
      </span>
    </div>
  );
}
