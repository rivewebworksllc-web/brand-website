import { Container } from "@/components/layout/Container";
import { ArchitectureNode } from "@/components/homepage/ArchitectureNode";
import type { ArchitectureFlowStep, HomepageContent } from "@/lib/content/homepage";

type PlatformParitySectionProps = {
  content: HomepageContent["platformParity"];
  stage: { index: number; step: ArchitectureFlowStep };
};

/**
 * Full-bleed two-tone split instead of twin bordered cards — the platform
 * "equal weight" message is made structurally true (identical column width,
 * no card competing for attention) rather than just visually implied.
 */
export function PlatformParitySection({ content, stage }: PlatformParitySectionProps) {
  return (
    <section
      id={`stage-${stage.step.id}`}
      aria-labelledby="platform-parity-heading"
      className="border-t border-hairline-faint"
    >
      <Container className="pt-12 pb-8 md:pt-20 md:pb-10">
        <h2 id="platform-parity-heading" className="text-h2 max-w-2xl text-heading">
          {content.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-body md:text-base">
          {content.description}
        </p>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {content.groups.map((group, index) => (
          <div
            key={group.platform}
            className={`px-6 py-10 md:px-12 md:py-14 ${index === 0 ? "bg-surface-alt" : "bg-surface md:border-l md:border-hairline"}`}
          >
            <div className="mx-auto max-w-sm">
              {/* RW-PW05: dropped the text-eyebrow (uppercase/tracked)
                  treatment here — "AWS"/"Microsoft" are already correctly
                  cased brand names, an eyebrow style added nothing but
                  another repeated visual tic. */}
              <p className="text-[13px] font-bold text-brand-maroon">{group.platform}</p>
              <h3 className="text-h3 mt-2 text-heading">{group.heading}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-[1.65] text-body">
                    <span aria-hidden="true" className="mt-0.5 text-brand-maroon">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Container className="py-8 md:py-10">
        {/* RW-PW05: chips instead of a 5-dot-separated inline string — the
            middle-dot rationing guidance flagged this as over-used (one
            dot is fine, five in a single line reads as filler). */}
        <div className="flex flex-wrap items-center gap-3 border-t border-hairline pt-6">
          <span className="text-[13px] font-semibold text-heading">Shared layer</span>
          <ul className="flex flex-wrap gap-2">
            {content.sharedLayer.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-hairline px-2.5 py-1 text-[13px] text-body"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RW-PW06A: attachment point — "Cloud Foundation" stage. */}
        <div className="mt-8 border-t border-hairline-faint pt-4">
          <ArchitectureNode index={stage.index} label={stage.step.label} />
        </div>
      </Container>
    </section>
  );
}
