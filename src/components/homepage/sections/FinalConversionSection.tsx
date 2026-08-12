import { Section } from "@/components/layout/Section";
import { FinalConversion } from "@/components/homepage/FinalConversion";
import type { HomepageContent } from "@/lib/content/homepage";
import { isAvailableHref } from "@/lib/public-routes";

type FinalConversionSectionProps = {
  content: HomepageContent["finalConversion"];
};

export function FinalCTASection({ content }: FinalConversionSectionProps) {
  if (!isAvailableHref(content.primaryCta.href) && !isAvailableHref(content.secondaryCta.href)) return null;
  return (
    <Section aria-labelledby="final-conversion-heading" accent spacing="generous">
      <FinalConversion {...content} />
    </Section>
  );
}
