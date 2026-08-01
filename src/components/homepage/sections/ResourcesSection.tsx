import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { ResourceCard } from "@/components/homepage/ResourceCard";
import type { HomepageContent } from "@/lib/content/homepage";

type ResourcesSectionProps = {
  content: HomepageContent["resources"];
};

export function ResourcesSection({ content }: ResourcesSectionProps) {
  return (
    <Section aria-labelledby="resources-heading" className="border-t border-hairline-faint bg-surface">
      <SectionHeading id="resources-heading" eyebrow="Learn before you commit" heading={content.heading} />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.cards.map((card) => (
          <ResourceCard key={card.href} {...card} />
        ))}
      </div>
    </Section>
  );
}
