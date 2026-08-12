"use client";

import { useState } from "react";

type Layer = { title: string; detail: string };

export function BehindTheScreen({ layers }: { layers: Layer[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end lg:gap-16">
      <div className="border-x border-white/15" role="tablist" aria-label="System layers">
        {layers.map((layer, index) => {
          const selected = active === index;
          return (
            <button
              key={layer.title}
              id={`system-layer-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="system-layer-detail"
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={`group flex min-h-16 w-full items-center justify-between border-t border-white/15 px-5 py-4 text-left last:border-b md:min-h-20 md:px-7 ${selected ? "bg-white text-navy-950" : "text-white hover:bg-white/8"}`}
            >
              <span className="text-[15px] font-semibold md:text-lg">{layer.title}</span>
              <span className="font-mono text-xs opacity-65">0{index + 1}</span>
            </button>
          );
        })}
      </div>
      <div id="system-layer-detail" role="tabpanel" aria-labelledby={`system-layer-${active}`} className="border-t border-brand-gold pt-6">
        <p className="font-serif text-2xl leading-tight text-white md:text-3xl">{layers[active].title}</p>
        <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-slate-200">{layers[active].detail}</p>
        <div aria-hidden="true" className="mt-10 h-px w-full bg-white/15"><div className="h-px bg-brand-gold transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${((active + 1) / layers.length) * 100}%` }} /></div>
      </div>
    </div>
  );
}
