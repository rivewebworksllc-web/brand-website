"use client";

import { useState } from "react";
import { Placeholder } from "@/components/media/Placeholder";
import type { WorkInclude } from "@/lib/content/work";

export function WorkIncludes({ items }: { items: WorkInclude[] }) {
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
      <div role="tablist" aria-label="What the work can include" className="divide-y divide-hairline border-y border-hairline">
        {items.map((item, index) => {
          const selected = item.id === active.id;
          return (
            <button
              key={item.id}
              id={`work-include-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="work-include-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onFocus={() => setActiveId(item.id)}
              onKeyDown={(event) => {
                const current = items.findIndex((candidate) => candidate.id === item.id);
                const delta = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
                if (!delta) return;
                event.preventDefault();
                const next = items[(current + delta + items.length) % items.length];
                setActiveId(next.id);
                document.getElementById(`work-include-tab-${next.id}`)?.focus();
              }}
              className={`group grid min-h-20 w-full grid-cols-[2rem_1fr_auto] items-center gap-3 py-4 text-left transition-colors motion-reduce:transition-none ${selected ? "text-heading" : "text-muted hover:text-heading"}`}
            >
              <span className="font-mono text-xs" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span><span className="block text-[17px] font-semibold">{item.title}</span><span className="mt-0.5 block text-sm font-normal text-muted">{item.descriptor}</span></span>
              <span aria-hidden="true" className={`transition-transform motion-reduce:transition-none ${selected ? "translate-x-0 text-brand-maroon" : "-translate-x-1"}`}>→</span>
            </button>
          );
        })}
      </div>
      <div id="work-include-panel" role="tabpanel" aria-labelledby={`work-include-tab-${active.id}`} className="min-w-0">
        <Placeholder key={active.id} meta={active.visual} className="w-full" />
        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-body md:text-base">{active.detail}</p>
      </div>
    </div>
  );
}
