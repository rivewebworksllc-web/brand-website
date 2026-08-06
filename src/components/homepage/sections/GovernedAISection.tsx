import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GovernedAIFlow } from "@/components/homepage/GovernedAIFlow";
import { ArchitectureNode } from "@/components/homepage/ArchitectureNode";
import type { ArchitectureFlowStep, HomepageContent } from "@/lib/content/homepage";

type GovernedAISectionProps = {
  content: HomepageContent["governedAi"];
  stage: { index: number; step: ArchitectureFlowStep };
};

/**
 * `gold-deep` and `accent-azure-strong` have no dark-theme override (see
 * globals.css's own comment: full-strength gold is reserved for dark-surface
 * TEXT, `gold-deep` for light-surface borders/accents only) — so only the
 * border and the non-text accent bar are tone-cycled; the badge number
 * itself stays `text-heading`, which is contrast-safe in both themes.
 */
const CAPABILITY_TONES = [
  { border: "border-gold-deep/40", bar: "bg-gold-deep" },
  { border: "border-brand-maroon/40", bar: "bg-brand-maroon" },
  { border: "border-accent-azure-strong/40", bar: "bg-accent-azure-strong" },
];

export function GovernedAISection({ content, stage }: GovernedAISectionProps) {
  return (
    <Section
      id={`stage-${stage.step.id}`}
      aria-labelledby="governed-ai-heading"
      spacing="generous"
      className="relative overflow-hidden border-t border-hairline-faint bg-surface"
    >
      <div className="atmosphere-radial" aria-hidden="true" />
      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
          <h2 id="governed-ai-heading" className="text-h2 mt-2 text-heading text-balance">
            {content.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
            {content.description}
          </p>
          <div className="mt-6">
            <LinkButton href={content.cta.href} variant="primary">
              {content.cta.label}
            </LinkButton>
          </div>
        </div>

        <div className="lg:col-span-7">
          {/* RW-PW07B (Product Office calibration): icon feature cards with a
              tone-cycled bottom accent bar — the same colour rhythm as the
              mega-menu's tile icons, applied here as this section's own
              distinct interaction rather than a repeat of the mega-menu's. */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {content.capabilities.map((capability, index) => {
              const tone = CAPABILITY_TONES[index % CAPABILITY_TONES.length]!;
              return (
                <li key={capability.title} className="card card-interactive relative overflow-hidden p-5">
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-evidence font-bold text-heading ${tone.border}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[15px] font-semibold text-heading">{capability.title}</p>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-body">
                    {capability.description}
                  </p>
                  <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-[3px] ${tone.bar}`} />
                </li>
              );
            })}
          </ul>

          <Reveal className="mt-8">
            <GovernedAIFlow steps={content.flow} />
          </Reveal>

          {/* RW-PW06A: attachment point — "Governed AI" stage. */}
          <div className="mt-8 border-t border-hairline-faint pt-4">
            <ArchitectureNode index={stage.index} label={stage.step.label} />
          </div>
        </div>
      </div>
    </Section>
  );
}
