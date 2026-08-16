import { evidenceArtifactDetails, evidenceArtifacts } from "@/lib/content/evidence-pack";
import { artifactIcon } from "@/components/evidence-pack/EvidencePackIcons";
import { SampleView } from "@/components/evidence-pack/SampleView";

/**
 * RW-PAGE-10: the page's signature section. A single continuous register
 * (not six equal feature cards, rejected per the Design Decision Brief's
 * Card/Object Opportunity Audit), sharing the dark-chapter/connector-line
 * family already established by Trust's `EvidenceSpine` and Pricing's
 * `PhilosophyFlow`, but with its own anatomy: each entry discloses a
 * labeled sample view, an evidence-tier note, a privacy/ownership line and
 * a Process-stage connection that `EvidenceSpine` has no slot for. Native
 * `<details>` throughout, zero client JS.
 */
export function EvidenceRegister() {
  return (
    <ol className="relative space-y-10 border-t border-white/15 pt-10 lg:space-y-14">
      {evidenceArtifacts.map((artifact, index) => {
        const detail = evidenceArtifactDetails.find((item) => item.id === artifact.id);
        const Icon = artifactIcon[artifact.id];
        if (!detail || !Icon) return null;

        return (
          <li key={artifact.id} className="relative">
            {index > 0 ? (
              <span aria-hidden="true" className="absolute -top-10 left-7 hidden h-10 w-px bg-white/15 lg:block" />
            ) : null}
            <div className="flex items-start gap-5">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/20 bg-[#101a2d] text-brand-gold"
              >
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="font-mono text-[11px] tracking-[0.12em] text-brand-gold uppercase">
                    Record {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">{artifact.stage}</p>
                </div>
                <h3 className="mt-2 font-serif text-[clamp(1.5rem,2.5vw,2.1rem)] leading-tight font-semibold text-white">
                  {artifact.title}
                </h3>
                <p className="mt-3 max-w-xl text-[14px] leading-[1.7] text-slate-200">{artifact.description}</p>
                <p className="mt-3 max-w-xl text-[13px] leading-[1.6] text-slate-300">
                  <span className="font-semibold text-white">Record contains: </span>
                  {artifact.record}
                </p>

                <details className="group mt-5 border-t border-white/15 pt-4">
                  <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 border border-white/25 px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-200 group-open:border-brand-gold group-open:text-brand-gold">
                    <span>See sample view</span>
                    <span
                      aria-hidden="true"
                      className="text-lg font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>

                  <div className="mt-5 space-y-5 border border-dashed border-white/20 bg-white/[0.03] p-5">
                    <p className="inline-flex items-center border border-brand-gold/60 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-brand-gold uppercase">
                      Sample, illustrative only
                    </p>
                    <SampleView data={detail.sample} />
                    <dl className="grid gap-4 border-t border-dashed border-white/15 pt-4 text-xs leading-[1.6] text-slate-300 sm:grid-cols-3">
                      <div>
                        <dt className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">Evidence tier</dt>
                        <dd className="mt-1.5">{detail.tierNote}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">Who sees it</dt>
                        <dd className="mt-1.5">{detail.privacy}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">Process connection</dt>
                        <dd className="mt-1.5">{detail.processStage}</dd>
                      </div>
                    </dl>
                  </div>
                </details>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
