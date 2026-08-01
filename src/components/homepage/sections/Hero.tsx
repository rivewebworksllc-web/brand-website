import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

type HeroProps = {
  content: HomepageContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <Section
      as="section"
      dark
      aria-labelledby="hero-heading"
      className="border-b border-white/10 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="flex items-center gap-2 text-eyebrow text-brand-gold">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {content.eyebrow}
          </p>
          <h1 id="hero-heading" className="text-h1 mt-4 max-w-2xl text-white">
            {content.heading}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-white/85 md:text-base">
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

          <p className="text-evidence mt-8 border-t border-white/10 pt-5 text-white/70">
            {content.trustLine}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="relative hidden overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent lg:col-span-2 lg:flex lg:aspect-[4/5] lg:items-center lg:justify-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-brand-gold" />
          <span className="pointer-events-none select-none text-[140px] font-bold leading-none tracking-tighter text-white/[0.06]">
            RW
          </span>
          <div className="absolute inset-x-6 bottom-6 rounded-sm border border-white/10 bg-navy-950/70 px-4 py-3">
            <p className="text-eyebrow text-brand-gold">Rive Webworks</p>
            <p className="text-evidence mt-1 text-white/50">
              Reserved for approved brand imagery
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
