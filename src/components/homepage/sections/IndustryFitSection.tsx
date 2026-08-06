import { Section } from "@/components/layout/Section";
import type { HomepageContent } from "@/lib/content/homepage";

type IndustryFitSectionProps = {
  content: HomepageContent["industries"];
};

/**
 * One dominant feature (Healthcare) plus a compact inline list for the
 * rest — not five more identical cards after the accordion, the split
 * panel and the diagram have already established the page's rhythm.
 */
export function IndustryFitSection({ content }: IndustryFitSectionProps) {
  const featured = content.items.find((item) => item.featured) ?? content.items[0];
  const rest = content.items.filter((item) => item !== featured);

  return (
    <Section aria-labelledby="industry-fit-heading" className="border-t border-hairline-faint bg-surface-alt">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          {/* RW-PW05: eyebrow ("Who we serve") dropped — page-wide eyebrow
              reduction; the heading already states this directly. */}
          <h2 id="industry-fit-heading" className="text-h2 text-heading text-balance">
            {content.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
            {content.description}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="card border-l-[3px] border-l-navy-950 p-6">
            {/* RW-PW05: "Featured" as an inline badge next to the name
                rather than a floating eyebrow line above it — the border-l
                accent already marks this card as distinct. */}
            <h3 className="text-h3 flex flex-wrap items-center gap-2.5 text-heading">
              {featured.name}
              <span className="rounded-sm bg-heading/10 px-2 py-0.5 text-[11px] font-semibold text-heading">
                Featured
              </span>
            </h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-body">{featured.description}</p>
          </div>

          <ul className="mt-6 divide-y divide-hairline-faint border-y border-hairline-faint">
            {rest.map((industry) => (
              <li key={industry.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="text-[15px] font-semibold text-heading sm:w-64 sm:shrink-0">
                  {industry.name}
                </span>
                <span className="text-[14px] leading-[1.6] text-body">{industry.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
