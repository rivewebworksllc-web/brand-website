import type { Industry } from "@/lib/content/homepage";

type IndustryFeatureProps = {
  items: Industry[];
};

export function IndustryFeature({ items }: IndustryFeatureProps) {
  const featured = items.find((item) => item.featured) ?? items[0];
  const rest = items.filter((item) => item !== featured);

  return (
    <div>
      <div className="card relative overflow-hidden p-7 md:p-9">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-navy-950" />
        <p className="text-eyebrow text-brand-maroon">Featured sector</p>
        <h3 className="text-h3 mt-2 text-heading">{featured.name}</h3>
        <p className="mt-2 max-w-2xl text-[15px] leading-[1.65] text-body">
          {featured.description}
        </p>
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((industry) => (
          <li key={industry.name} className="card h-full p-6">
            <span
              aria-hidden="true"
              className="mb-3 block h-1.5 w-6 rounded-full bg-brand-maroon/70"
            />
            <h3 className="text-h3 text-heading">{industry.name}</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-body">{industry.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
