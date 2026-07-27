import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { ProcessSteps } from "@/components/homepage/ProcessSteps";
import type { HomepageContent } from "@/lib/content/homepage";

type ProcessSectionProps = {
  content: HomepageContent["process"];
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <Section aria-labelledby="process-heading" className="bg-white">
      <SectionHeading
        id="process-heading"
        eyebrow="Founder-led delivery"
        heading={content.heading}
        description={content.description}
      />
      <div className="mt-8">
        <ProcessSteps steps={content.steps} />
      </div>
    </Section>
  );
}
