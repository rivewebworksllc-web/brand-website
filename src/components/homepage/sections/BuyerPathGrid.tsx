import { Section } from "@/components/layout/Section";
import { BuyerPathAccordion } from "@/components/homepage/BuyerPathAccordion";
import { OutcomeExplorer } from "@/components/homepage/OutcomeExplorer";
import type { BuyerPath, HomepageContent } from "@/lib/content/homepage";

type BuyerPathGridProps = {
  intro: HomepageContent["buyerPathsIntro"];
  paths: BuyerPath[];
};

/**
 * Guided Outcome Explorer (RW-PW04): a two-column selector from `lg` up,
 * the original native-<details> accordion below it. Both render in
 * server-rendered HTML at all times — only CSS (`hidden lg:grid` /
 * `lg:hidden`) decides which one is visible, so no content depends on JS
 * or viewport for search engines or no-JS users.
 */
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
        <OutcomeExplorer paths={paths} />
        <div className="lg:hidden">
          <BuyerPathAccordion paths={paths} />
        </div>
      </div>
    </Section>
  );
}
