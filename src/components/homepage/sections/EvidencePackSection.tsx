import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { EvidenceExplorer } from "@/components/homepage/EvidenceExplorer";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

type EvidencePackSectionProps = {
  content: HomepageContent["evidencePack"];
};

export function EvidencePackSection({ content }: EvidencePackSectionProps) {
  return (
    <Section aria-labelledby="evidence-pack-heading" className="border-t border-hairline-faint bg-surface">
      <SectionHeading
        id="evidence-pack-heading"
        eyebrow="Documented, not implied"
        heading={content.heading}
        description={content.description}
      />
      <div className="mt-8">
        <EvidenceExplorer artifacts={content.artifacts} />
      </div>
      <div className="mt-8">
        <LinkButton href={content.cta.href} variant="outline">
          {content.cta.label}
        </LinkButton>
      </div>
    </Section>
  );
}
