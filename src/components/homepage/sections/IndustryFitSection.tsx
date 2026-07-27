import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { ServiceCard } from "@/components/homepage/ServiceCard";
import type { HomepageContent } from "@/lib/content/homepage";

type IndustryFitSectionProps = {
  content: HomepageContent["industries"];
};

export function IndustryFitSection({ content }: IndustryFitSectionProps) {
  return (
    <Section aria-labelledby="industry-fit-heading" className="border-t border-slate-100 bg-slate-50">
      <SectionHeading id="industry-fit-heading" eyebrow="Who we serve" heading={content.heading} />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((industry) => (
          <ServiceCard
            key={industry.name}
            title={industry.name}
            description={industry.description}
          />
        ))}
      </div>
    </Section>
  );
}
