import { Section } from "@/components/layout/Section";
import { EvidenceExplorer } from "@/components/homepage/EvidenceExplorer";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

type EvidencePackSectionProps = {
  content: HomepageContent["evidencePack"];
};

export function EvidencePackSection({ content }: EvidencePackSectionProps) {
  return (
    <Section aria-labelledby="evidence-pack-heading" className="border-t border-hairline-faint bg-surface-alt">
      <div className="max-w-2xl">
        <p className="text-eyebrow text-brand-maroon">Documented, not implied</p>
        <h2 id="evidence-pack-heading" className="text-h2 mt-2 text-heading">
          {content.heading}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
          {content.description}
        </p>
      </div>
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
