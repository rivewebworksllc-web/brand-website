import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { RiveOperatingArchitecture } from "@/components/homepage/RiveOperatingArchitecture";
import type { HomepageContent } from "@/lib/content/homepage";

type HeroProps = {
  content: HomepageContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <Section
      as="section"
      accent
      aria-labelledby="hero-heading"
      className="-mt-20 border-b border-accent-foreground/10 pt-36 pb-16 md:pt-44 md:pb-24"
    >
      <div className="max-w-2xl">
        <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
        <h1 id="hero-heading" className="text-h1 mt-5 text-accent-foreground text-balance">
          {content.heading}
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-accent-foreground/85 md:text-base">
          {content.summary}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={content.primaryCta.href} variant="primary">
            {content.primaryCta.label}
          </LinkButton>
          <LinkButton href={content.secondaryCta.href} variant="secondary">
            {content.secondaryCta.label}
          </LinkButton>
        </div>

        {/* RW-PW05: given a top hairline + tighter vertical rhythm of its own
            (rather than reading as a trailing mono afterthought line) so the
            trust line feels like a considered element, not a generic strip.
            Text is unchanged from the approved copy locked by
            tests/unit/homepage-content.test.ts and tests/e2e/home.spec.ts. */}
        <p className="text-evidence mt-8 border-t border-accent-foreground/10 pt-4 text-accent-foreground/80">
          {content.trustLine}
        </p>
      </div>

      {/* Illustration 1 (RW-PW04): full-width, not squeezed into a side
          column — the brief's own priority for this to become a memorable
          brand asset rather than the previous compact panel. */}
      <div className="mt-14 border-t border-accent-foreground/10 pt-10 md:mt-16 md:pt-12">
        {/* RW-PW05: plain caption, not a second text-eyebrow — the hero
            already carries one eyebrow above; a second uppercase-tracked
            label here was the "eyebrow overuse" pattern flagged by both the
            design-taste-frontend audit and Human Design Review. */}
        <p className="text-[13px] font-medium text-accent-foreground/70" id="hero-architecture-heading">
          The Rive Operating Architecture
        </p>
        <div className="mt-6 rounded-lg border border-accent-foreground/10 bg-accent-foreground/[0.03] p-6 md:p-8">
          <RiveOperatingArchitecture steps={content.architectureFlow} />
        </div>
      </div>
    </Section>
  );
}
