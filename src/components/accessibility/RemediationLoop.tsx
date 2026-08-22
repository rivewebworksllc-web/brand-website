import { remediationLoop } from "@/lib/content/accessibility";
import { RetestIcon } from "@/components/accessibility/AccessibilityIcons";

/**
 * RW-PAGE-12R: major visual moment B. Visually distinct from Keyboard
 * Path's dark rail (light `surface-alt`) and from `FrictionMap`'s vertical
 * register: a horizontal sequence that explicitly closes back on itself,
 * making the loop (not roadmap) concept legible without relying on shape
 * alone - the "returns to Detect" line states it in text too.
 */
export function RemediationLoop() {
  return (
    <div>
      <ol className="flex flex-wrap items-start gap-x-2 gap-y-6 sm:flex-nowrap">
        {remediationLoop.map((step, index) => (
          <li key={step.id} className="flex items-center sm:contents">
            <div className="w-28 text-center sm:w-auto sm:flex-1">
              <span
                aria-hidden="true"
                className="mx-auto flex h-11 w-11 items-center justify-center border border-hairline bg-surface font-mono text-xs text-muted"
              >
                {step.order}
              </span>
              <p className="mt-2.5 text-[13px] font-semibold text-heading">{step.label}</p>
              <p className="mt-1.5 max-w-[9rem] text-[11px] leading-[1.5] text-body mx-auto">{step.detail}</p>
            </div>
            {index < remediationLoop.length - 1 ? (
              <span aria-hidden="true" className="h-px min-w-4 flex-1 bg-hairline sm:min-w-0" />
            ) : null}
          </li>
        ))}
      </ol>
      <div className="mt-6 flex items-center gap-2 border-t border-dashed border-hairline pt-5 text-[12px] text-muted">
        <RetestIcon className="h-4 w-4 shrink-0 text-brand-maroon" />
        <span>Record closes the loop: it returns to Detect for the next review, rather than moving on to a scheduled roadmap item.</span>
      </div>
    </div>
  );
}
