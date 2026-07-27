import type { EvidenceCategory } from "@/lib/content/homepage";

type EvidencePackGridProps = {
  categories: EvidenceCategory[];
};

export function EvidencePackGrid({ categories }: EvidencePackGridProps) {
  return (
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <div key={category.title} className="rounded-lg border border-slate-200 bg-white p-5">
          <dt className="text-evidence text-brand-maroon">{category.title}</dt>
          <dd className="mt-1 text-[15px] leading-[1.65] text-slate-600">
            {category.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
