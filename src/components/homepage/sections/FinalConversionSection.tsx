import { Section } from "@/components/layout/Section";
import { FinalConversion } from "@/components/homepage/FinalConversion";
import type { HomepageContent } from "@/lib/content/homepage";

type FinalConversionSectionProps = {
  content: HomepageContent["finalConversion"];
};

export function FinalCTASection({ content }: FinalConversionSectionProps) {
  return (
    <Section aria-labelledby="final-conversion-heading" dark>
      <FinalConversion {...content} />
    </Section>
  );
}
