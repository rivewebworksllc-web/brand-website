import type { ProcessPhase } from "@/lib/content/process";

export function OperatingTrace({ phases }: { phases: readonly ProcessPhase[] }) {
  return (
    <ol aria-label="Rive engagement responsibilities" className="relative">
      <span
        aria-hidden="true"
        className="absolute top-5 bottom-8 left-[15px] w-px bg-hairline md:left-[23px]"
      />
      {phases.map((phase, index) => (
        <li
          key={phase.id}
          id={`process-${phase.id}`}
          className="relative grid scroll-mt-28 grid-cols-[2rem_minmax(0,1fr)] gap-x-5 pb-14 last:pb-0 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-x-8 md:pb-20"
        >
          <span
            aria-hidden="true"
            className="relative z-[1] mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent-azure bg-surface font-mono text-[11px] font-semibold text-accent-azure md:h-12 md:w-12 md:text-xs"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <article className="min-w-0 border-t border-hairline pt-5 md:grid md:grid-cols-12 md:gap-x-8 md:pt-7">
            <div className="md:col-span-5">
              <p className="text-sm font-semibold text-brand-maroon">{phase.intent}</p>
              <h3 className="mt-2 font-serif text-[clamp(1.9rem,3.4vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.015em] text-heading">
                {phase.title}
              </h3>
            </div>

            <div className="mt-5 md:col-span-7 md:mt-0">
              <p className="max-w-xl text-[15px] leading-[1.75] text-body md:text-base">
                {phase.description}
              </p>
              <ul className="mt-6 flex max-w-2xl flex-wrap gap-x-5 gap-y-2" aria-label={`${phase.title} activities`}>
                {phase.activities.map((activity) => (
                  <li key={activity} className="text-sm font-medium text-heading">
                    {activity}
                  </li>
                ))}
              </ul>
              {phase.returnNote ? (
                <p className="mt-7 max-w-xl border-l-2 border-accent-azure pl-4 text-sm leading-[1.7] text-muted">
                  <span className="font-semibold text-accent-azure">Return path:</span>{" "}
                  {phase.returnNote}
                </p>
              ) : null}
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
