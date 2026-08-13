import type { Metadata } from "next";
import { platformsContent } from "@/lib/content/platforms";
import { connectCta } from "@/lib/nav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Placeholder } from "@/components/media/Placeholder";

export const metadata: Metadata = {
  title: "Platforms",
  description: "AWS or Microsoft. Rive runs full-depth practice on both ecosystems.",
  alternates: { canonical: "/platforms/" },
};

/**
 * RW-PHASE-02, next slice. Interaction identity: "connects" — the whole
 * point of this page is that AWS and Microsoft aren't two separate
 * offerings, they're connected by one shared operational layer. The layout
 * makes that literal: two equal-weight columns, bridged by a single
 * connecting section rather than treated as independent service pages.
 */
export default function PlatformsPage() {
  const { heading, description, groups, sharedLayer } = platformsContent;

  return (
    <main id="main-content">
      <Section
        accent
        spacing="generous"
        aria-labelledby="platforms-heading"
        className="-mt-20 border-b border-accent-foreground/10 pt-36 pb-16 md:pt-44 md:pb-24"
      >
        <div className="max-w-2xl">
          <p className="text-eyebrow text-brand-maroon">Platforms</p>
          <h1 id="platforms-heading" className="text-h1 mt-5 text-balance text-accent-foreground">
            {heading}
          </h1>
          <p className="text-hero-lead mt-6 max-w-xl text-accent-foreground/85">
            {description}
          </p>
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {groups.map((group, index) => (
          <Reveal
            key={group.platform}
            className={`px-6 py-14 md:px-12 md:py-20 ${
              index === 0 ? "bg-surface-alt" : "bg-surface md:border-l md:border-hairline"
            }`}
          >
            <div className="mx-auto max-w-sm">
              <p className="text-[13px] font-bold text-brand-maroon">{group.platform}</p>
              <h2 className="text-h2 mt-2 text-heading">{group.heading}</h2>
              <ul className="mt-6 space-y-3">
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
          </Reveal>
        ))}
      </div>

      <Section aria-labelledby="platforms-shared-heading" className="border-t border-hairline-faint bg-surface">
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Placeholder
              meta={{
                id: "RW-PLATFORMS-SHARED-01",
                category: "architecture-diagram",
                purpose: "Shared operational layer connecting both platforms",
                aspect: "4:3",
                composition: "Two columns converging on one shared layer",
                mood: "Structured, connected",
                replacement: "Original illustration",
                priority: "P1",
                motion: "none",
              }}
            />
          </div>
          <div className="lg:col-span-7">
            <h2 id="platforms-shared-heading" className="text-h2 text-heading">
              Shared layer
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-body md:text-base">
              Whichever platform you run, this layer doesn&apos;t change.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sharedLayer.map((item) => (
                <li key={item} className="rounded-sm border border-hairline px-3 py-1.5 text-[14px] text-body">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight" className="border-t border-hairline-faint bg-surface-alt">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] font-medium text-heading">{platformsContent.heading}</p>
          <LinkButton href={connectCta.href} variant="primary">
            {connectCta.label}
          </LinkButton>
        </Container>
      </Section>
    </main>
  );
}
