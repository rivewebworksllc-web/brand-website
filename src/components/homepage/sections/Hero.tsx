import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

type HeroProps = {
  content: HomepageContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <Section as="section" dark aria-labelledby="hero-heading" className="pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <p className="text-eyebrow text-brand-gold">{content.eyebrow}</p>
          <h1 id="hero-heading" className="text-h1 mt-3 text-white">
            {content.heading}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-white/80 md:text-base">
            {content.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </LinkButton>
            <LinkButton href={content.secondaryCta.href} variant="outline">
              {content.secondaryCta.label}
            </LinkButton>
          </div>

          <p className="text-evidence mt-6 text-white/60">{content.trustLine}</p>
        </div>

        <div
          aria-hidden="true"
          className="hidden rounded-lg border border-white/15 bg-white/[0.03] p-8 lg:col-span-2 lg:flex lg:aspect-[4/5] lg:flex-col lg:items-center lg:justify-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <span className="text-evidence text-white/40">Brand imagery — pending asset</span>
        </div>
      </div>
    </Section>
  );
}
