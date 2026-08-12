"use client";

import { Placeholder } from "@/components/media/Placeholder";
import { PresentationProgress } from "@/components/ui/PresentationProgress";
import { usePresentationCycle } from "@/hooks/usePresentationCycle";
import type { AboutDiscipline } from "@/lib/content/about";
import type { PlaceholderMeta } from "@/components/media/Placeholder";

export function ConnectedDisciplines({ disciplines, media }: { disciplines: readonly AboutDiscipline[]; media: PlaceholderMeta }) {
  const cycle = usePresentationCycle({ itemCount: disciplines.length, interval: 7000 });
  const active = disciplines[cycle.activeIndex];

  function selectFromKey(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + disciplines.length) % disciplines.length;
    cycle.select(next);
    document.getElementById(`about-discipline-${disciplines[next].id}`)?.focus();
  }

  return (
    <div ref={cycle.containerRef} {...cycle.interactionProps} data-presentation-mode={cycle.mode} className="mt-12 grid gap-10 lg:grid-cols-[minmax(17rem,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
      <div role="tablist" aria-label="Connected Rive disciplines" className="border-y border-hairline">
        {disciplines.map((discipline, index) => {
          const selected = cycle.activeIndex === index;
          return (
            <button
              key={discipline.id}
              id={`about-discipline-${discipline.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="about-discipline-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => cycle.select(index)}
              onKeyDown={(event) => selectFromKey(event, index)}
              className={`group relative grid min-h-20 w-full grid-cols-[2.25rem_1fr_auto] items-center gap-3 border-b border-hairline py-4 text-left transition-colors duration-300 last:border-b-0 motion-reduce:transition-none ${selected ? "text-heading" : "text-muted hover:text-heading"}`}
            >
              <span aria-hidden="true" className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
              <span><span className="block text-[17px] font-semibold">{discipline.title}</span><span className="mt-0.5 block text-sm font-normal text-muted">{discipline.descriptor}</span></span>
              <span aria-hidden="true" className={`transition-transform duration-300 motion-reduce:transition-none ${selected ? "translate-x-0 text-brand-maroon" : "-translate-x-1"}`}>→</span>
              {selected ? <PresentationProgress activeIndex={cycle.activeIndex} interval={cycle.interval} isPaused={cycle.isPaused} mode={cycle.mode} /> : null}
            </button>
          );
        })}
      </div>
      <div id="about-discipline-panel" role="tabpanel" aria-labelledby={`about-discipline-${active.id}`} className="min-w-0 self-center">
        <Placeholder meta={media} className="w-full" />
        <div key={active.id} className="mt-6 border-l border-brand-maroon/50 pl-5 motion-safe:animate-[megamenu-in_300ms_ease-out]">
          <p className="font-serif text-[clamp(1.8rem,3vw,2.75rem)] leading-[1.08] font-semibold text-heading">{active.title}</p>
          <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-body md:text-base">{active.detail}</p>
        </div>
      </div>
    </div>
  );
}
