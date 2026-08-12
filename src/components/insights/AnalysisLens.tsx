"use client";

import { useState } from "react";

type Stage = { title: string; question: string; detail: string };

export function AnalysisLens({ stages }: { stages: readonly Stage[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(20rem,1.2fr)] lg:gap-20">
      <div className="border-t border-white/20">
        {stages.map((stage, index) => (
          <button
            key={stage.title}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className={`group grid min-h-20 w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-white/15 text-left transition-colors duration-200 motion-reduce:transition-none ${active === index ? "text-white" : "text-slate-300 hover:text-white"}`}
          >
            <span className="font-mono text-xs text-brand-gold">0{index + 1}</span>
            <span className="text-lg font-semibold">{stage.title}</span>
            <span aria-hidden="true" className={`transition-transform duration-200 motion-reduce:transition-none ${active === index ? "translate-x-1 text-brand-gold" : "text-slate-400"}`}>→</span>
          </button>
        ))}
      </div>
      <div className="self-center border-l border-brand-gold/50 pl-7 md:pl-10" aria-live="polite">
        <p className="font-serif text-[clamp(2rem,4vw,3.75rem)] leading-[1.06] font-semibold text-white">{stages[active].question}</p>
        <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-slate-200 md:text-base">{stages[active].detail}</p>
      </div>
    </div>
  );
}
