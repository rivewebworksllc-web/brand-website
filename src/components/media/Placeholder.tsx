import { Reveal } from "@/components/ui/Reveal";

export type PlaceholderCategory =
  | "hero-illustration"
  | "editorial-photography"
  | "team-photography"
  | "workspace-photography"
  | "product-mockup"
  | "architecture-diagram"
  | "feature-illustration"
  | "device-render"
  | "brand-graphic"
  | "video";

export type PlaceholderMotion = "none" | "reveal" | "ambient-drift";

export type PlaceholderMeta = {
  /** e.g. "RW-HOME-HERO-01" — traceable when the real asset replaces this. */
  id: string;
  category: PlaceholderCategory;
  purpose: string;
  aspect: string;
  composition: string;
  mood: string;
  replacement: string;
  priority: "P0" | "P1" | "P2";
  motion: PlaceholderMotion;
};

type PlaceholderProps = {
  meta: PlaceholderMeta;
  className?: string;
};

export const CATEGORY_LABEL: Record<PlaceholderCategory, string> = {
  "hero-illustration": "Hero illustration",
  "editorial-photography": "Editorial photography",
  "team-photography": "Team photography",
  "workspace-photography": "Workspace photography",
  "product-mockup": "Product mockup",
  "architecture-diagram": "Architecture diagram",
  "feature-illustration": "Feature illustration",
  "device-render": "Device render",
  "brand-graphic": "Brand graphic",
  video: "Video",
};

/**
 * RW-PHASE-02: ten distinct, tasteful, brand-token-only treatments — never a
 * grey rectangle. No image-generation tool is available in this environment,
 * so every category is CSS/SVG-only, built from colours and patterns already
 * approved elsewhere in the codebase (the atmosphere-grid/radial primitives,
 * the gold-ring node mark from RiveOperatingArchitecture). The visible corner
 * tag states plainly that this is a placeholder — matching the project's own
 * "Author & reading time: pending review" convention (ResourceCard) — rather
 * than pretending to be a finished asset.
 */
function CategoryArt({ category }: { category: PlaceholderCategory }) {
  switch (category) {
    case "hero-illustration":
      return (
        <div className="atmosphere-grid absolute inset-0" aria-hidden="true">
          <svg
            viewBox="0 0 64 64"
            className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gold-deep"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="32" cy="32" r="20" />
            <path d="M32 12 L32 52 M12 32 L52 32" />
            <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
          </svg>
        </div>
      );
    case "editorial-photography":
      return (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-surface-alt) 0%, var(--color-surface-alt) 55%, var(--color-accent-azure-soft) 100%)",
          }}
        >
          <div className="absolute inset-4 border border-hairline" />
        </div>
      );
    case "team-photography":
      return (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, var(--color-accent-azure-soft), var(--color-surface-alt) 75%)",
          }}
        >
          <svg viewBox="0 0 24 24" className="h-10 w-10 text-muted" fill="currentColor">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </div>
      );
    case "workspace-photography":
      return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-surface-alt">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(100deg, var(--color-hairline) 0px, var(--color-hairline) 1px, transparent 1px, transparent 28px)",
            }}
          />
          <span className="absolute right-3 bottom-3 h-2 w-2 rounded-full bg-accent-azure-strong" />
        </div>
      );
    case "product-mockup":
      return (
        <div aria-hidden="true" className="absolute inset-3 rounded-lg border-2 border-hairline bg-surface">
          <span className="absolute top-3 left-3 h-2.5 w-2.5 rounded-full border-2 border-gold-deep" />
        </div>
      );
    case "architecture-diagram":
      return (
        <div className="atmosphere-grid absolute inset-0 bg-surface-alt" aria-hidden="true">
          <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full" fill="none">
            <path
              d="M10 45 L35 20 L65 40 L90 15"
              stroke="var(--color-accent-azure-strong)"
              strokeWidth="1"
            />
            {[
              [10, 45],
              [35, 20],
              [65, 40],
              [90, 15],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="var(--color-gold-deep)" />
            ))}
          </svg>
        </div>
      );
    case "feature-illustration":
      return (
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-surface-alt">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-deep">
            <span className="h-2 w-2 rounded-full bg-gold-deep" />
          </span>
        </div>
      );
    case "device-render":
      return (
        <div aria-hidden="true" className="absolute inset-6 rounded-md border-2 border-navy-950/20 bg-surface">
          <span className="absolute top-2 right-2 h-1.5 w-6 rounded-full bg-accent-azure-strong" />
        </div>
      );
    case "brand-graphic":
      return (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-gold-deep) 0%, var(--color-gold-deep) 48%, var(--color-brand-maroon) 52%, var(--color-brand-maroon) 100%)",
          }}
        />
      );
    case "video":
      return (
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-surface-alt">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-heading/70">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 text-heading/70" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      );
  }
}

export function Placeholder({ meta, className = "" }: PlaceholderProps) {
  const motionClass =
    meta.motion === "ambient-drift"
      ? "motion-safe:animate-[placeholder-drift_12s_ease-in-out_infinite]"
      : "";

  const content = (
    <div
      className={`relative overflow-hidden rounded-lg border border-hairline ${motionClass} ${className}`.trim()}
      style={{ aspectRatio: meta.aspect.replace(":", " / ") }}
      role="img"
      aria-label={`${meta.purpose} — placeholder, ${meta.mood.toLowerCase()}`}
    >
      <CategoryArt category={meta.category} />
      <span className="absolute bottom-2 left-2 rounded-sm border border-hairline bg-surface/90 px-2 py-0.5 text-[11px] font-medium text-muted backdrop-blur-sm">
        {CATEGORY_LABEL[meta.category]} · pending
      </span>
    </div>
  );

  if (meta.motion === "reveal") {
    return <Reveal>{content}</Reveal>;
  }

  return content;
}
