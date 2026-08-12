"use client";

import { useState } from "react";
import { resourceCategoryLabels, type GuideCategory } from "@/lib/content/resources";
import type { InsightResource } from "@/lib/content/insights";

export function InsightStream({ insights }: { insights: readonly InsightResource[] }) {
  const categories = Array.from(new Set(insights.map((item) => item.category)));
  const [active, setActive] = useState<GuideCategory>(categories[0]);
  const visible = insights.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex gap-6 overflow-x-auto border-b border-hairline" aria-label="Insight topics">
        {categories.map((category) => (
          <button key={category} type="button" aria-pressed={active === category} onClick={() => setActive(category)} className={`relative min-h-11 shrink-0 pb-3 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none ${active === category ? "text-heading" : "text-muted hover:text-heading"}`}>
            {resourceCategoryLabels[category]}
            {active === category ? <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-maroon" /> : null}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">Showing {visible.length} insight {visible.length === 1 ? "perspective" : "perspectives"}</p>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(12rem,0.42fr)_minmax(0,1fr)]">
        <div>
          <p className="font-serif text-3xl font-semibold text-heading">{resourceCategoryLabels[active]}</p>
          <p className="mt-3 max-w-xs text-sm leading-[1.7] text-body">Current analysis under editorial review in this discipline.</p>
        </div>
        <div className="border-t border-hairline">
          {visible.map((item) => (
            <article key={item.id} className="grid gap-3 border-b border-hairline py-7 md:grid-cols-[minmax(0,0.8fr)_minmax(12rem,0.45fr)] md:gap-10">
              <div><h3 className="font-serif text-[26px] leading-[1.12] font-semibold text-heading">{item.title}</h3><p className="mt-3 text-[14px] leading-[1.7] text-body">{item.excerpt}</p></div>
              <p className="text-sm leading-[1.7] text-muted md:pt-1">{item.perspective}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
