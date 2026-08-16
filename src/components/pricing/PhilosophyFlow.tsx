import { EvidenceIcon, PriceIcon, ScopeIcon, TimelineIcon } from "@/components/pricing/PricingIcons";

const steps = [
  { icon: ScopeIcon, label: "Scope" },
  { icon: EvidenceIcon, label: "Evidence" },
  { icon: TimelineIcon, label: "Timeline" },
  { icon: PriceIcon, label: "Price" },
] as const;

/**
 * RW-PAGE-08C: the page's first visual-depth moment, added after Product
 * Office review found the upper half of the page (hero through the package
 * field) almost entirely typographic. A bespoke four-step flow, not a
 * generic `Placeholder` box - no image-generation tool is connected this
 * session, and this relationship (scope determines evidence, timeline and
 * price, in that order) is better shown as an authored diagram than
 * implied photography. Built from existing tokens/icons only; no new
 * dependency.
 */
export function PhilosophyFlow() {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-6 sm:flex-nowrap" aria-hidden="true">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex items-center gap-2 sm:contents">
            <div className="flex flex-col items-center gap-2.5 text-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-hairline bg-surface text-brand-maroon">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-[11px] font-semibold tracking-[0.04em] text-heading uppercase">{step.label}</p>
            </div>
            {index < steps.length - 1 ? (
              <span className="h-px min-w-8 flex-1 bg-hairline sm:min-w-0" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
