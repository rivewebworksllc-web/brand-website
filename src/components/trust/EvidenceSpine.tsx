import type { EvidenceArtifact } from "@/lib/content/trust";

export function EvidenceSpine({ artifacts }: { artifacts: readonly EvidenceArtifact[] }) {
  return (
    <div className="relative mt-14 lg:mt-0">
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-brand-gold via-brand-gold/45 to-white/18 sm:left-7 lg:left-14"
      />

      <ol className="relative space-y-6 lg:space-y-10">
        {artifacts.map((artifact, index) => (
            <li key={artifact.id} className="relative pl-10 sm:pl-16 lg:pl-[6.5rem]">
              <span
                aria-hidden="true"
                className="absolute top-12 left-[0.72rem] z-10 h-2.5 w-2.5 rotate-45 border border-brand-gold bg-navy-950 sm:left-[1.43rem] lg:left-[3.18rem]"
              />
              <span
                aria-hidden="true"
                className="absolute top-[3.19rem] left-4 h-px w-7 bg-brand-gold/70 sm:left-7 sm:w-9 lg:left-14 lg:w-12"
              />

              <article className="relative overflow-hidden border border-white/20 bg-[#101a2d] shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-1.5 gap-1">
                  {artifacts.map((item, segmentIndex) => (
                    <span
                      key={item.id}
                      className={`h-full flex-1 ${segmentIndex <= index ? "bg-brand-gold/80" : "bg-white/8"}`}
                    />
                  ))}
                </div>

                <div className="grid gap-7 px-6 py-8 sm:grid-cols-[8.5rem_1fr] sm:gap-9 sm:px-8 sm:py-9 lg:grid-cols-[9.5rem_1fr] lg:px-10 lg:py-10">
                  <div className="flex flex-row items-baseline justify-between gap-5 border-b border-white/14 pb-5 sm:block sm:border-r sm:border-b-0 sm:pr-7 sm:pb-0">
                    <p className="font-mono text-[11px] tracking-[0.12em] text-brand-gold uppercase">
                      Record {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="font-serif text-[clamp(2.7rem,5vw,4.7rem)] leading-none font-semibold text-slate-400 sm:mt-8">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="hidden font-mono text-[10px] tracking-[0.12em] text-slate-400 uppercase sm:mt-5 sm:block">
                      {artifact.stage}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.12em] text-slate-400 uppercase sm:hidden">
                      {artifact.stage}
                    </p>
                    <h3 className="mt-2 font-serif text-[clamp(1.9rem,3.25vw,3.15rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white sm:mt-0">
                      {artifact.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-slate-200 md:text-base">
                      {artifact.description}
                    </p>
                    <p className="mt-7 border-t border-white/14 pt-4 text-sm leading-[1.65] text-slate-300">
                      <span className="font-semibold text-white">Record contains:</span> {artifact.record}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
      </ol>

      <div className="relative mt-12 ml-4 max-w-lg border-l border-brand-gold py-4 pl-9 sm:ml-7 lg:ml-14 lg:pl-12">
        <p className="text-eyebrow text-brand-gold">Handoff boundary</p>
        <p className="mt-3 text-lg leading-[1.55] font-semibold text-white">
          The accumulated record moves with the delivered work at the depth defined in scope.
        </p>
      </div>
    </div>
  );
}
