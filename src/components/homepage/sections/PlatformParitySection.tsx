import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { PlatformParity } from "@/components/homepage/PlatformParity";
import type { HomepageContent } from "@/lib/content/homepage";

type PlatformParitySectionProps = {
  content: HomepageContent["platformParity"];
};

export function PlatformParitySection({ content }: PlatformParitySectionProps) {
  return (
    <Section aria-labelledby="platform-parity-heading" className="border-t border-hairline-faint bg-surface-alt">
      <SectionHeading
        id="platform-parity-heading"
        eyebrow="Platform alignment"
        heading={content.heading}
        description={content.description}
      />
      <div className="mt-8">
        <PlatformParity groups={content.groups} sharedLayer={content.sharedLayer} />
      </div>
    </Section>
  );
}
