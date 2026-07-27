import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { EvidencePackGrid } from "@/components/homepage/EvidencePackGrid";
import type { HomepageContent } from "@/lib/content/homepage";

type EvidencePackSectionProps = {
  content: HomepageContent["evidencePack"];
};

export function EvidencePackSection({ content }: EvidencePackSectionProps) {
  return (
    <Section aria-labelledby="evidence-pack-heading" className="bg-white">
      <SectionHeading
        id="evidence-pack-heading"
        eyebrow="Documented, not implied"
        heading={content.heading}
        description={content.description}
      />
      <div className="mt-8">
        <EvidencePackGrid categories={content.categories} />
      </div>
    </Section>
  );
}
