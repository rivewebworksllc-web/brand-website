import { evidenceModel, illustrativeFinding } from "@/lib/content/ux-audit-conversion-roadmap";

const severityTone: Record<string, string> = {
  High: "border-brand-maroon/60 text-brand-maroon",
  Medium: "border-hairline text-heading",
  Low: "border-hairline-faint text-muted",
};

/**
 * RW-PAGE-11A: extends the illustrative finding with the evidence source ->
 * friction point -> roadmap band chain (directive §16), strengthening the
 * connection to the actual UXR-01 methodology. Still permanently labeled
 * "Sample, illustrative only," still no fabricated metric, still severity
 * conveyed by a text label, not color alone.
 */
export function IllustrativeFinding() {
  return (
    <details className="group border border-hairline bg-surface-alt p-6 md:p-7">
      <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 border border-hairline px-4 py-2 text-[13px] font-semibold text-heading transition-colors duration-200 group-open:border-brand-maroon group-open:text-brand-maroon">
        <span>See a sample finding</span>
        <span aria-hidden="true" className="text-lg font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">
          +
        </span>
      </summary>

      <div className="mt-5 space-y-4 border-t border-dashed border-hairline pt-5">
        <p className="inline-flex items-center border border-brand-maroon/60 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-brand-maroon uppercase">
          Sample, illustrative only
        </p>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted">
          <span className="border border-hairline-faint px-2 py-1">{illustrativeFinding.territory}</span>
          <span className="border border-hairline-faint px-2 py-1">{illustrativeFinding.stage} stage</span>
          <span className={`border px-2 py-1 font-semibold ${severityTone[illustrativeFinding.severity]}`}>
            Severity: {illustrativeFinding.severity}
          </span>
        </div>

        {/* Evidence source -> finding -> roadmap band chain (RW-PAGE-11A §16) */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-muted">
          <span className="border border-dashed border-hairline px-2.5 py-1.5">{illustrativeFinding.evidenceSource}</span>
          <span aria-hidden="true" className="text-muted">&rarr;</span>
          <span className="border border-dashed border-hairline px-2.5 py-1.5">Finding</span>
          <span aria-hidden="true" className="text-muted">&rarr;</span>
          <span className="border border-brand-maroon/60 px-2.5 py-1.5 text-brand-maroon">{illustrativeFinding.roadmapBand}</span>
        </div>

        <p className="text-[15px] leading-[1.7] font-semibold text-heading">{illustrativeFinding.finding}</p>
        <p className="text-sm leading-[1.7] text-body">{illustrativeFinding.whyItMatters}</p>
        <p className="border-t border-dashed border-hairline pt-4 text-xs leading-[1.6] text-muted">{evidenceModel.tierNote}</p>
      </div>
    </details>
  );
}
