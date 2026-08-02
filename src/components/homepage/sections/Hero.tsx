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
        <p className="flex items-center gap-2 text-eyebrow text-brand-maroon">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-maroon" />
          {content.eyebrow}
        </p>
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
          <LinkButton href={content.secondaryCta.href} variant="outline">
            {content.secondaryCta.label}
          </LinkButton>
        </div>

        <p className="text-evidence mt-8 text-accent-foreground/70">{content.trustLine}</p>
      </div>

      {/* Illustration 1 (RW-PW04): full-width, not squeezed into a side
          column — the brief's own priority for this to become a memorable
          brand asset rather than the previous compact panel. */}
      <div className="mt-14 border-t border-accent-foreground/10 pt-10 md:mt-16 md:pt-12">
        <p className="text-eyebrow text-accent-foreground/70" id="hero-architecture-heading">
          The Rive Operating Architecture
        </p>
        <div className="mt-6 rounded-lg border border-accent-foreground/10 bg-accent-foreground/[0.03] p-6 md:p-8">
          <RiveOperatingArchitecture steps={content.architectureFlow} />
        </div>
      </div>
    </Section>
  );
}
