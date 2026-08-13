import type { Metadata } from "next";
import { solutionsContent } from "@/lib/content/solutions";
import { Section } from "@/components/layout/Section";
import { OutcomeExplorer } from "@/components/homepage/OutcomeExplorer";
import { BuyerPathAccordion } from "@/components/homepage/BuyerPathAccordion";
import { Placeholder } from "@/components/media/Placeholder";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "You don't need to know the service name. Pick the outcome, and Rive will tell you where to start.",
  alternates: { canonical: "/solutions/" },
};

/**
 * RW-PHASE-02, first slice. Interaction identity: "guides" — the page's
 * entire job is helping an undecided visitor find the right starting
 * engagement, so it leads with the same Guided Outcome Explorer already
 * built and tested for the homepage (OutcomeExplorer desktop /
 * BuyerPathAccordion mobile), rather than a static list of services.
 */
export default function SolutionsPage() {
  const { intro, paths, featured } = solutionsContent;

  return (
    <main id="main-content">
      <Section
        accent
        spacing="generous"
        aria-labelledby="solutions-hero-heading"
        className="-mt-20 border-b border-accent-foreground/10 pt-36 pb-16 md:pt-44 md:pb-24"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">Solutions</p>
            <h1
              id="solutions-hero-heading"
              className="text-h1 mt-5 text-balance text-accent-foreground"
            >
              {intro.heading}
            </h1>
            <p className="text-hero-lead mt-6 max-w-xl text-accent-foreground/85">
              {intro.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <Placeholder
              meta={{
                id: "RW-SOLUTIONS-HERO-01",
                category: "architecture-diagram",
                purpose: "Four buyer paths converging on one accountable engagement",
                aspect: "4:3",
                composition: "Four entry points, one connected system",
                mood: "Confident, structured",
                replacement: "Original illustration",
                priority: "P0",
                motion: "reveal",
              }}
            />
          </div>
        </div>
      </Section>

      <Section aria-labelledby="solutions-guide-heading">
        <h2 id="solutions-guide-heading" className="sr-only">
          Guided outcome explorer
        </h2>
        <div className="hidden lg:block">
          <OutcomeExplorer paths={paths} />
        </div>
        <div className="lg:hidden">
          <BuyerPathAccordion paths={paths} />
        </div>
      </Section>

      <Section spacing="tight" className="border-t border-hairline-faint bg-surface-alt">
        <div className="card grid grid-cols-1 gap-8 p-7 md:grid-cols-5 md:p-10">
          <div className="md:col-span-3">
            <p className="text-eyebrow text-brand-maroon">{featured.eyebrow}</p>
            <h2 className="text-h2 mt-2 text-heading">{featured.heading}</h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
              {featured.description}
            </p>
            <div className="mt-6">
              <LinkButton href={featured.primaryCta.href} variant="primary">
                {featured.primaryCta.label}
              </LinkButton>
            </div>
          </div>
          <div className="md:col-span-2">
            <Placeholder
              meta={{
                id: "RW-SOLUTIONS-FEATURED-01",
                category: "product-mockup",
                purpose: "Website rebuild preview",
                aspect: "4:3",
                composition: "Rebuilt site, framed as a real product shot",
                mood: "Clean, technical",
                replacement: "Real screenshot or rendered mockup",
                priority: "P1",
                motion: "none",
              }}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
