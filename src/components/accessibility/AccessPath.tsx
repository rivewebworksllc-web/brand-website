import { accessPath } from "@/lib/content/accessibility";

/**
 * RW-PAGE-12R: the page's opening visual. A horizontal connector row
 * (matching the established `PhilosophyFlow` device) of five journey
 * stages, each with a full text barrier/verified pair - never encoded by
 * color alone, never a fake client screenshot. Distinct from the page's
 * two major moments (Keyboard Path, Remediation Loop), which use their own
 * devices per the Design Decision Brief's cross-page differentiation.
 */
export function AccessPath() {
  return (
    <div className="grid gap-6 sm:grid-cols-5 sm:gap-0">
      {accessPath.map((step, index) => (
        <div key={step.id} className="relative flex flex-col items-center text-center sm:px-3">
          {index > 0 ? (
            <span aria-hidden="true" className="absolute top-7 right-full hidden h-px w-6 bg-hairline sm:block" />
          ) : null}
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center border border-hairline bg-surface-alt font-mono text-xs text-muted"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-[13px] font-semibold text-heading">{step.label}</p>
          <p className="mt-2 max-w-[11rem] text-[11px] leading-[1.5] text-muted">
            <span className="font-semibold text-brand-maroon">Barrier: </span>
            {step.barrier}
          </p>
          <p className="mt-1.5 max-w-[11rem] text-[11px] leading-[1.5] text-body">
            <span className="font-semibold text-heading">Verified: </span>
            {step.verified}
          </p>
        </div>
      ))}
    </div>
  );
}
