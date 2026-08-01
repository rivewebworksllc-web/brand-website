import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { IndustryFeature } from "@/components/homepage/IndustryFeature";
import type { HomepageContent } from "@/lib/content/homepage";

type IndustryFitSectionProps = {
  content: HomepageContent["industries"];
};

export function IndustryFitSection({ content }: IndustryFitSectionProps) {
  return (
    <Section aria-labelledby="industry-fit-heading" className="border-t border-hairline-faint bg-surface-alt">
      <SectionHeading id="industry-fit-heading" eyebrow="Who we serve" heading={content.heading} />
      <div className="mt-8">
        <IndustryFeature items={content.items} />
      </div>
    </Section>
  );
}
