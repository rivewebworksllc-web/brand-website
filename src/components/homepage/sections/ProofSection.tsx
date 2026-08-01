import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { ProofPlaceholder } from "@/components/homepage/ProofPlaceholder";
import type { HomepageContent } from "@/lib/content/homepage";

type ProofSectionProps = {
  content: HomepageContent["proof"];
};

export function ProofSection({ content }: ProofSectionProps) {
  return (
    <Section aria-labelledby="proof-heading" className="border-t border-hairline-faint bg-surface-alt">
      <SectionHeading
        id="proof-heading"
        eyebrow="Honest by default"
        heading={content.heading}
        description={content.description}
      />
      <div className="mt-8">
        <ProofPlaceholder items={content.items} />
      </div>
    </Section>
  );
}
