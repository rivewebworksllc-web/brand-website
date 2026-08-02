import { Section } from "@/components/layout/Section";
import { BuyerPathAccordion } from "@/components/homepage/BuyerPathAccordion";
import type { BuyerPath, HomepageContent } from "@/lib/content/homepage";

type BuyerPathGridProps = {
  intro: HomepageContent["buyerPathsIntro"];
  paths: BuyerPath[];
};

export function BuyerPathGrid({ intro, paths }: BuyerPathGridProps) {
  return (
    <Section aria-labelledby="buyer-paths-heading" className="border-t border-hairline-faint bg-surface-alt">
      <div className="max-w-2xl">
        <h2 id="buyer-paths-heading" className="text-h2 text-heading">
          {intro.heading}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
          {intro.description}
        </p>
      </div>
      <div className="mt-10">
        <BuyerPathAccordion paths={paths} />
      </div>
    </Section>
  );
}
