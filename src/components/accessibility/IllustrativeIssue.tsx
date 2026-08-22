import { illustrativeIssue } from "@/lib/content/accessibility";

/**
 * RW-PAGE-12R: one illustrative accessibility issue, matching the sitewide
 * "ILLUSTRATIVE" disclosure convention already established by
 * `IllustrativeFinding` (UXR-01) and `SampleView` (Evidence Pack) - a
 * consistent claims-safety signal, not page-specific anatomy reuse. Never
 * a real client issue; impact stated as a qualitative label, since no
 * accessibility severity taxonomy exists in repository authority.
 */
export function IllustrativeIssue() {
  return (
    <details className="group border border-hairline bg-surface-alt p-6 md:p-7">
      <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 border border-hairline px-4 py-2 text-[13px] font-semibold text-heading transition-colors duration-200 group-open:border-brand-maroon group-open:text-brand-maroon">
        <span>See an illustrative issue</span>
        <span aria-hidden="true" className="text-lg font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">
          +
        </span>
      </summary>

      <div className="mt-5 space-y-4 border-t border-dashed border-hairline pt-5">
        <p className="inline-flex items-center border border-brand-maroon/60 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-brand-maroon uppercase">
          Illustrative example
        </p>
        <p className="text-[15px] leading-[1.7] font-semibold text-heading">{illustrativeIssue.barrier}</p>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">Affected interaction</dt>
            <dd className="mt-1.5 text-[13px] leading-[1.6] text-body">{illustrativeIssue.affectedInteraction}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">Verification</dt>
            <dd className="mt-1.5 text-[13px] leading-[1.6] text-body">{illustrativeIssue.verification}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">Remediation</dt>
            <dd className="mt-1.5 text-[13px] leading-[1.6] text-body">{illustrativeIssue.remediation}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">Re-test</dt>
            <dd className="mt-1.5 text-[13px] leading-[1.6] text-body">{illustrativeIssue.retest}</dd>
          </div>
        </dl>
        <p className="border-t border-dashed border-hairline pt-4 text-xs leading-[1.6] text-muted">
          <span className="font-semibold text-heading">Impact: </span>
          {illustrativeIssue.impact}
        </p>
      </div>
    </details>
  );
}
