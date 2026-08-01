import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import { BuyerPathCard } from "@/components/homepage/BuyerPathCard";
import type { BuyerPath } from "@/lib/content/homepage";

type BuyerPathGridProps = {
  paths: BuyerPath[];
};

export function BuyerPathGrid({ paths }: BuyerPathGridProps) {
  return (
    <Section aria-labelledby="buyer-paths-heading" className="border-t border-hairline-faint bg-surface">
      <SectionHeading
        id="buyer-paths-heading"
        eyebrow="Where do you start?"
        heading="Start with the outcome that matters most"
        description="You do not need to know the service name. Choose what needs to become better, safer or easier to operate."
      />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map((path, index) => (
          <BuyerPathCard key={path.title} {...path} offset={index % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
