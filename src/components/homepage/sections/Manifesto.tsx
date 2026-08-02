import { Section } from "@/components/layout/Section";
import type { HomepageContent } from "@/lib/content/homepage";

type ManifestoProps = {
  content: HomepageContent["manifesto"];
};

/**
 * Deliberately not a card grid — a single asymmetric editorial statement.
 * This is the section most responsible for breaking the "eyebrow / heading
 * / description / card grid" rhythm repeated everywhere else on the page.
 * RW-PW04: faint architectural grid atmosphere behind the statement — the
 * atmosphere div is position:absolute (paints in DOM order among
 * positioned siblings), so the content wrapper below it must also be
 * `relative` for content to paint on top rather than underneath.
 */
export function Manifesto({ content }: ManifestoProps) {
  return (
    <Section
      aria-labelledby="manifesto-heading"
      className="relative overflow-hidden border-t border-hairline-faint bg-surface"
    >
      <div className="atmosphere-grid" aria-hidden="true" />
      <div className="relative">
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
      </div>
    </Section>
  );
}
