import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { ArchitectureFlow } from "@/components/homepage/ArchitectureFlow";
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
      className="-mt-20 border-b border-accent-foreground/10 pt-36 pb-14 md:pt-44 md:pb-20"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="flex items-center gap-2 text-eyebrow text-brand-maroon">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-maroon" />
            {content.eyebrow}
          </p>
          <h1 id="hero-heading" className="text-h1 mt-5 max-w-2xl text-accent-foreground text-balance">
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

          <p className="text-evidence mt-8 border-t border-accent-foreground/10 pt-5 text-accent-foreground/70">
            {content.trustLine}
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-eyebrow text-accent-foreground/70" id="hero-architecture-heading">
            How the work fits together
          </p>
          <div className="mt-4 rounded-lg border border-accent-foreground/10 bg-accent-foreground/[0.03] p-5">
            <ArchitectureFlow steps={content.architectureFlow} />
          </div>
        </div>
      </div>
    </Section>
  );
}
