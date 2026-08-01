import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { SolutionLaneCard } from "@/components/homepage/SolutionLaneCard";
import type { SolutionLane } from "@/lib/content/homepage";

type BuyerLanesProps = {
  lanes: SolutionLane[];
};

export function BuyerLanes({ lanes }: BuyerLanesProps) {
  return (
    <Section aria-labelledby="buyer-lanes-heading" className="border-t border-slate-100 bg-white">
      <SectionHeading
        id="buyer-lanes-heading"
        eyebrow="Where do you start?"
        heading="Four ways in, one clear next step"
      />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {lanes.map((lane) => (
          <SolutionLaneCard key={lane.href} {...lane} />
        ))}
      </div>
    </Section>
  );
}
