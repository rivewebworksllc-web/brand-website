import type { EvidenceCategory } from "@/lib/content/homepage";

type EvidencePackGridProps = {
  categories: EvidenceCategory[];
};

export function EvidencePackGrid({ categories }: EvidencePackGridProps) {
  return (
    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <div key={category.title} className="card card-interactive p-6">
          <dt className="flex items-center gap-2 text-evidence text-brand-maroon">
            <span className="text-slate-600">{String(index + 1).padStart(2, "0")}</span>
            {category.title}
          </dt>
          <dd className="mt-2 text-[15px] leading-[1.65] text-slate-700">
            {category.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
