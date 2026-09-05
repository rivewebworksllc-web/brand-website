import { processSteps } from "@/lib/content/brand-identity-digital-design-system";

/**
 * RW-PAGE-13: six-step process sequence, deliberately not the generic
 * "Discovery -> Design -> Develop -> Launch" pattern (directive §19 rejects
 * that as describing a website project, not a system-building engagement).
 * Numbered badges rather than a repeated icon keep this visually distinct
 * from the deliverables grid and the Fragments-to-System dark chain -
 * connector lines only render at `lg`+, so mobile simply wraps into rows
 * rather than showing a horizontal system map.
 */
export function ProcessSequence() {
  return (
    <ol className="flex flex-wrap items-start gap-x-3 gap-y-8 lg:flex-nowrap">
      {processSteps.map((step, index) => (
        <li key={step.id} className="flex items-start gap-2 lg:contents">
          <div className="flex max-w-[10rem] flex-col items-center gap-2.5 text-center">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-hairline bg-surface-alt font-mono text-xs text-brand-maroon"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-[12px] font-semibold text-heading">{step.label}</p>
            <p className="text-[11px] leading-[1.5] text-muted">{step.description}</p>
          </div>
          {index < processSteps.length - 1 ? (
            <span aria-hidden="true" className="mt-5 hidden h-px min-w-4 flex-1 bg-hairline lg:block" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
