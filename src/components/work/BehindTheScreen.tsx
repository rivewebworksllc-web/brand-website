"use client";

import { useRef } from "react";
import { PresentationProgress } from "@/components/ui/PresentationProgress";
import { usePresentationCycle } from "@/hooks/usePresentationCycle";

type Layer = { title: string; detail: string };

export function BehindTheScreen({ layers }: { layers: Layer[] }) {
  const cycle = usePresentationCycle({ itemCount: layers.length });
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  return (
    <div ref={cycle.containerRef} {...cycle.interactionProps} data-presentation-mode={cycle.mode} className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end lg:gap-16">
      <div className="border-x border-white/15" role="tablist" aria-label="System layers">
        {layers.map((layer, index) => {
          const selected = cycle.activeIndex === index;
          return (
            <button
              key={layer.title}
              ref={(element) => { buttonRefs.current[index] = element; }}
              id={`system-layer-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="system-layer-detail"
              tabIndex={selected ? 0 : -1}
              onClick={() => cycle.select(index)}
              onKeyDown={(event) => {
                const delta = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
                if (!delta) return;
                event.preventDefault();
                const next = (index + delta + layers.length) % layers.length;
                cycle.select(next);
                buttonRefs.current[next]?.focus();
              }}
              className={`group relative flex min-h-16 w-full items-center justify-between border-t border-white/15 px-5 py-4 text-left transition-colors duration-300 last:border-b motion-reduce:transition-none md:min-h-20 md:px-7 ${selected ? "bg-white text-navy-950" : "text-white hover:bg-white/8"}`}
            >
              <span className="text-[15px] font-semibold md:text-lg">{layer.title}</span>
              <span className="font-mono text-xs opacity-65">0{index + 1}</span>
              {selected ? <PresentationProgress activeIndex={cycle.activeIndex} interval={cycle.interval} isPaused={cycle.isPaused} mode={cycle.mode} tone="dark" /> : null}
            </button>
          );
        })}
      </div>
      <div id="system-layer-detail" role="tabpanel" aria-labelledby={`system-layer-${cycle.activeIndex}`} className="border-t border-brand-gold pt-6">
        <p className="font-serif text-2xl leading-tight text-white md:text-3xl">{layers[cycle.activeIndex].title}</p>
        <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-slate-200">{layers[cycle.activeIndex].detail}</p>
        <div aria-hidden="true" className="mt-10 h-px w-full bg-white/15"><div className="h-px bg-brand-gold transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${((cycle.activeIndex + 1) / layers.length) * 100}%` }} /></div>
      </div>
    </div>
  );
}
