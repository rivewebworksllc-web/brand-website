import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureNode } from "@/components/homepage/ArchitectureNode";
import type { ArchitectureFlowStep, HomepageContent } from "@/lib/content/homepage";

type ManifestoProps = {
  content: HomepageContent["manifesto"];
  stage: { index: number; step: ArchitectureFlowStep };
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
export function Manifesto({ content, stage }: ManifestoProps) {
  return (
    <Section
      id={`stage-${stage.step.id}`}
      aria-labelledby="manifesto-heading"
      spacing="generous"
      className="relative overflow-hidden border-t border-hairline-faint bg-surface"
    >
      <div className="atmosphere-grid" aria-hidden="true" />
      {/* RW-PW05: the eyebrow ("How we think about this") is intentionally
          not rendered — this section's own original intent (see comment
          above) was to break the eyebrow/heading/description rhythm that
          repeats elsewhere on the page; adding an eyebrow back undercut
          that. content.eyebrow is kept in the data shape, unused here. */}
      <div className="relative">
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <h2
            id="manifesto-heading"
            className="text-statement text-heading text-balance lg:col-span-8"
          >
            {content.lead}
          </h2>
          <p className="text-[16px] leading-[1.7] text-body lg:col-span-4 lg:pt-2">
            {content.body}
          </p>
        </Reveal>

        {/* RW-PW06A: attachment point — this section is where the "Digital
            Experience" stage of the architecture begins on the page. */}
        <div className="mt-10 border-t border-hairline-faint pt-4">
          <ArchitectureNode index={stage.index} label={stage.step.label} />
        </div>
      </div>
    </Section>
  );
}
