import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

export function IndustryFitSection({ content }: { content: HomepageContent["homepageIndustries"] }) {
  return (
    <Section aria-labelledby="industry-fit-heading" className="border-y border-hairline bg-surface-alt" spacing="generous">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
          <h2 id="industry-fit-heading" className="text-h2 mt-4 max-w-[12ch] text-heading">{content.heading}</h2>
          <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-body">{content.description}</p>
          <div className="mt-8"><LinkButton href={content.cta.href} variant="secondary">{content.cta.label}</LinkButton></div>
        </div>
        <ol className="grid border-t border-hairline sm:grid-cols-2 lg:col-span-7">
          {content.items.map((item, index) => (
            <li key={item.name} className={`border-b border-hairline py-6 sm:px-6 ${index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"} ${index === content.items.length - 1 ? "sm:col-span-2 sm:grid sm:grid-cols-[1fr_1fr] sm:gap-6 sm:border-r-0" : ""}`}>
              <h3 className="text-[15px] font-semibold text-heading">{item.name}</h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-body sm:mt-0">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
