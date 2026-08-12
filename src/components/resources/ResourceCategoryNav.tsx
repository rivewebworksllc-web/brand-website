"use client";

import { resourceCategories, resourceCategoryLabels, type ResourceCategory } from "@/lib/content/resources";

export function ResourceCategoryNav({ active, onChange }: { active: ResourceCategory; onChange: (category: ResourceCategory) => void }) {
  return (
    <div className="overflow-x-auto border-b border-hairline" aria-label="Guide topics">
      <div role="tablist" aria-label="Filter guides by topic" className="flex min-w-max gap-7">
        {resourceCategories.map((category) => (
          <button key={category} type="button" role="tab" aria-selected={active === category} onClick={() => onChange(category)} className={`relative min-h-11 whitespace-nowrap pb-3 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none ${active === category ? "text-heading" : "text-muted hover:text-heading"}`}>
            {resourceCategoryLabels[category]}
            {active === category ? <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-maroon" /> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
