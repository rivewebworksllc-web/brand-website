import type { Metadata } from "next";
import { industriesContent } from "@/lib/content/industries";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { startCta } from "@/lib/nav";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Placeholder } from "@/components/media/Placeholder";

export const metadata: Metadata = {
  title: "Industries",
  description: "Built where mistakes are expensive — the sectors Rive works in and why.",
  alternates: { canonical: "/industries/" },
};

/**
 * RW-PHASE-02, next slice. Interaction identity: "demonstrates" — rather
 * than a new interactive widget, this page demonstrates fit by giving each
 * of the five real sectors (already written for the homepage's condensed
 * card + list) its own full-width moment with sector-specific placeholder
 * imagery, instead of compressing them into one card and four list rows.
 */
export default function IndustriesPage() {
  const { heading, description, items } = industriesContent;
  const featured = items.find((item) => item.featured) ?? items[0];
  const rest = items.filter((item) => item !== featured);

  return (
    <main id="main-content">
      <Section spacing="generous" aria-labelledby="industries-heading" className="bg-surface">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-brand-maroon">Industries</p>
          <h1 id="industries-heading" className="text-h1 mt-5 text-balance text-heading">
            {heading}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-body md:text-base">
            {description}
          </p>
        </div>
      </Section>

      <Section spacing="tight" className="border-t border-hairline-faint bg-surface-alt">
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">Featured sector</p>
            <h2 className="text-h2 mt-2 text-heading">{featured.name}</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-body md:text-base">
              {featured.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <Placeholder
              meta={{
                id: "RW-INDUSTRIES-FEATURED-01",
                category: "editorial-photography",
                purpose: `${featured.name} — sector context`,
                aspect: "4:3",
                composition: "Real working environment, not a generic stock scene",
                mood: "Credible, regulated, precise",
                replacement: "Original photography",
                priority: "P1",
                motion: "none",
              }}
            />
          </div>
        </Reveal>
      </Section>

      <Section aria-labelledby="industries-rest-heading" className="border-t border-hairline-faint bg-surface">
        <h2 id="industries-rest-heading" className="sr-only">
          Other sectors
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {rest.map((industry, index) => (
            <div key={industry.name} className="border-t border-hairline-faint pt-6">
              <Placeholder
                meta={{
                  id: `RW-INDUSTRIES-${index + 1}`,
                  category: "feature-illustration",
                  purpose: `${industry.name} — sector mark`,
                  aspect: "16:10",
                  composition: "Abstract, sector-adjacent, not literal stock imagery",
                  mood: "Precise, restrained",
                  replacement: "Original illustration",
                  priority: "P2",
                  motion: "none",
                }}
              />
              <h3 className="text-h3 mt-4 text-heading">{industry.name}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-body">{industry.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="tight" accent aria-labelledby="industries-cta-heading">
        <div className="max-w-2xl">
          <h2 id="industries-cta-heading" className="text-h2 text-accent-foreground">
            {homepageFallbackContent.buyerPathsIntro.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-accent-foreground/85 md:text-base">
            {homepageFallbackContent.buyerPathsIntro.description}
          </p>
          <div className="mt-6">
            <LinkButton href={startCta.href} variant="primary">
              {startCta.label}
            </LinkButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
