import { Section } from "@/components/layout/Section";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import type { HomepageContent } from "@/lib/content/homepage";

type FinalCTASectionProps = {
  content: HomepageContent["finalCta"];
};

export function FinalCTASection({ content }: FinalCTASectionProps) {
  return (
    <Section aria-labelledby="final-cta-heading" dark>
      <div className="sr-only" id="final-cta-heading">
        {content.heading}
      </div>
      <FinalCTA {...content} />
    </Section>
  );
}
