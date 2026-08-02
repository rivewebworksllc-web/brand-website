import { Section } from "@/components/layout/Section";
import { ProcessTimeline } from "@/components/homepage/ProcessTimeline";
import type { HomepageContent } from "@/lib/content/homepage";

type ProcessSectionProps = {
  content: HomepageContent["process"];
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <Section aria-labelledby="process-heading" className="border-t border-hairline-faint bg-surface">
      <div className="max-w-2xl">
        <p className="text-eyebrow text-brand-maroon">Founder-led delivery</p>
        <h2 id="process-heading" className="text-h2 mt-2 text-heading">
          {content.heading}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
          {content.description}
        </p>
      </div>
      <div className="mt-10">
        <ProcessTimeline stages={content.stages} />
      </div>
    </Section>
  );
}
