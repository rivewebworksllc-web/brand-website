import { Section } from "@/components/layout/Section";
import type { HomepageContent } from "@/lib/content/homepage";

type ManifestoProps = {
  content: HomepageContent["manifesto"];
};

/**
 * Deliberately not a card grid — a single asymmetric editorial statement.
 * This is the section most responsible for breaking the "eyebrow / heading
 * / description / card grid" rhythm repeated everywhere else on the page.
 */
export function Manifesto({ content }: ManifestoProps) {
  return (
    <Section aria-labelledby="manifesto-heading" className="border-t border-hairline-faint bg-surface">
      <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <h2
          id="manifesto-heading"
          className="text-statement text-heading text-balance lg:col-span-8"
        >
          {content.lead}
        </h2>
        <p className="text-[16px] leading-[1.7] text-body lg:col-span-4 lg:pt-2">
          {content.body}
        </p>
      </div>
    </Section>
  );
}
