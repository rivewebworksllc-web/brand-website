import { fragmentExamples, systemStages } from "@/lib/content/brand-identity-digital-design-system";
import { TokenIcon } from "@/components/design-system/DesignSystemIcons";

/**
 * RW-PAGE-13: the page's signature section (Memorable Moment A). Every fact
 * (each inconsistency, each resolved stage) is server-rendered text, not
 * encoded in an image or a chart, matching this repository's standing
 * accessibility discipline for signature diagrams (`FrictionMap`,
 * `PhilosophyFlow`). Anatomy is distinct from `FrictionMap`'s sequential
 * stage register: this is a before/after resolution, not a stage-by-stage
 * journey.
 */
export function FragmentsToSystem() {
  return (
    <div className="space-y-12">
      <div>
        <p className="font-mono text-[10px] tracking-[0.14em] text-slate-400 uppercase">Before: fragmented</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {fragmentExamples.map((fragment) => (
            <li key={fragment.id} className="border border-white/15 bg-[#101a2d] px-4 py-3">
              <p className="text-[12px] font-semibold text-white">{fragment.label}</p>
              <p className="mt-1 font-mono text-[11px] text-slate-400">{fragment.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" className="flex items-center gap-4 text-brand-gold">
        <span className="h-px flex-1 bg-white/15" />
        <span className="font-mono text-[11px] tracking-[0.12em] uppercase">Resolves into</span>
        <span className="h-px flex-1 bg-white/15" />
      </div>

      <div>
        <p className="font-mono text-[10px] tracking-[0.14em] text-slate-400 uppercase">After: one system</p>
        <ol className="mt-6 flex flex-wrap items-start gap-x-2 gap-y-8 sm:flex-nowrap">
          {systemStages.map((stage, index) => (
            <li key={stage.id} className="flex items-start gap-2 sm:contents">
              <div className="flex max-w-[11rem] flex-col items-center gap-2.5 text-center">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/20 bg-[#101a2d] text-brand-gold"
                >
                  <TokenIcon className="h-5 w-5" />
                </span>
                <p className="text-[12px] font-semibold tracking-[0.02em] text-white uppercase">{stage.label}</p>
                <p className="text-[11px] leading-[1.5] text-slate-300">{stage.description}</p>
              </div>
              {index < systemStages.length - 1 ? (
                <span aria-hidden="true" className="mt-6 hidden h-px min-w-6 flex-1 bg-white/15 sm:block" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
