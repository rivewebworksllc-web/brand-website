import { Section } from "@/components/layout/Section";
import { ProcessStepper } from "@/components/homepage/ProcessStepper";
import { ArchitectureNode } from "@/components/homepage/ArchitectureNode";
import type { ArchitectureFlowStep, HomepageContent } from "@/lib/content/homepage";

type ProcessSectionProps = {
  content: HomepageContent["process"];
  stage: { index: number; step: ArchitectureFlowStep };
};

export function ProcessSection({ content, stage }: ProcessSectionProps) {
  return (
    <Section
      id={`stage-${stage.step.id}`}
      aria-labelledby="process-heading"
      className="border-t border-hairline-faint bg-surface"
    >
      <div className="max-w-2xl">
        {/* RW-PW05: eyebrow ("Founder-led delivery") dropped — the
            description below already says "a founder-led approach", making
            the eyebrow purely redundant on top of the page-wide reduction. */}
        <h2 id="process-heading" className="text-h2 text-heading">
          {content.heading}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
          {content.description}
        </p>
      </div>
      <div className="mt-10">
        <ProcessStepper stages={content.stages} />
      </div>

      {/* RW-PW06A: attachment point — "Managed Outcomes" stage. */}
      <div className="mt-10 border-t border-hairline-faint pt-4">
        <ArchitectureNode index={stage.index} label={stage.step.label} />
      </div>
    </Section>
  );
}
