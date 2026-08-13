import type { Metadata } from "next";
import { platformsContent } from "@/lib/content/platforms";
import { connectCta } from "@/lib/nav";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { PlatformArchitecture } from "@/components/solutions/PlatformArchitecture";
import { PlatformDomainVisual } from "@/components/solutions/PlatformDomainVisual";

export const metadata: Metadata = {
  title: "Platforms",
  description: "AWS or Microsoft. Rive runs full-depth practice on both ecosystems.",
  alternates: { canonical: "/platforms/" },
};

export default function PlatformsPage() {
  const { heading, description, groups, sharedLayer } = platformsContent;
  const aws = groups[0];
  const microsoft = groups[1];
  const domains = [
    { id: "aws" as const, label: "AWS", heading: aws.heading, items: aws.items },
    { id: "azure" as const, label: "Microsoft Azure", heading: "Azure architecture and modernization", items: [microsoft.items[0], microsoft.items[2], microsoft.items[4]] },
    { id: "microsoft-365" as const, label: "Microsoft 365", heading: "Microsoft 365 security and operations", items: [microsoft.items[1], microsoft.items[3], microsoft.items[5]] },
  ];

  return (
    <main id="main-content">
      <Section accent spacing="generous" aria-labelledby="platforms-heading" className="-mt-20 border-b border-accent-foreground/10 pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="max-w-2xl lg:col-span-8">
            <p className="text-eyebrow text-brand-maroon">Platforms</p>
            <h1 id="platforms-heading" className="text-h1 mt-5 max-w-2xl text-balance text-accent-foreground">{heading}</h1>
          </div>
          <div className="relative pt-9 lg:col-span-4">
            <div aria-hidden="true" className="absolute top-0 right-0 h-8 w-36 border-t border-r border-accent-foreground/20">
              <span className="absolute top-2 right-1/3 h-11 w-px bg-brand-maroon/60" />
              <span className="absolute top-5 right-0 h-px w-2/3 bg-accent-foreground/20" />
              <span className="absolute top-[17px] right-[calc(66.666%-3px)] h-1.5 w-1.5 border border-brand-maroon" />
            </div>
            <p className="text-hero-lead max-w-lg text-accent-foreground/85">{description}</p>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="architecture-heading" className="bg-surface" spacing="generous">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-brand-maroon">Operating architecture</p>
            <h2 id="architecture-heading" className="text-h2 mt-3 text-heading">Three environments. One accountable operating layer.</h2>
          </div>
          <div className="lg:col-span-8"><PlatformArchitecture /></div>
        </div>
      </Section>

      <Section aria-labelledby="platform-domains-heading" className="border-y border-hairline-faint bg-surface-alt" spacing="generous">
        <div className="flex max-w-3xl flex-col gap-3">
          <p className="text-eyebrow text-brand-maroon">Platform domains</p>
          <h2 id="platform-domains-heading" className="text-h2 text-heading">Depth without a house preference.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <Reveal key={domain.label} className={`${index === 0 ? "" : "border-t border-hairline lg:border-t-0 lg:border-l"}`}>
              <article className="flex min-h-full flex-col px-0 py-8 lg:px-8 lg:py-3">
                <PlatformDomainVisual domain={domain.id} />
                <p className="text-eyebrow text-brand-maroon">0{index + 1} / Domain</p>
                <h3 className="text-h3 mt-4 text-heading">{domain.label}</h3>
                <p className="mt-2 min-h-12 text-[14px] leading-[1.6] text-body">{domain.heading}</p>
                <ul className="mt-7 space-y-0 border-t border-hairline">
                  {domain.items.map((item) => (
                    <li key={item} className="border-b border-hairline-faint py-3 text-[14px] leading-[1.55] text-body">{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="shared-layer-heading" className="bg-surface" spacing="generous">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-brand-maroon">Shared operating layer</p>
            <h2 id="shared-layer-heading" className="text-h2 mt-3 text-heading">Whichever platform you run, this layer does not change.</h2>
          </div>
          <div className="relative lg:col-span-8">
            <div aria-hidden="true" className="absolute top-0 bottom-0 left-4 w-px bg-brand-maroon sm:left-1/2" />
            <ol className="relative grid gap-x-12 sm:grid-cols-2">
              {sharedLayer.map((item, index) => (
                <li key={item} className="relative border-t border-hairline bg-surface py-5 pl-10 sm:px-5">
                  <span aria-hidden="true" className="absolute top-6 left-2.5 h-3 w-3 border border-brand-maroon bg-surface sm:left-auto sm:right-[-30px] odd:sm:right-auto odd:sm:left-[-30px]" />
                  <span className="text-eyebrow text-brand-maroon">0{index + 1}</span>
                  <p className="text-h3 mt-1 text-heading">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section spacing="tight" accent aria-labelledby="platforms-cta-heading">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="platforms-cta-heading" className="text-h3 max-w-xl text-accent-foreground">{platformsContent.heading}</h2>
          <LinkButton href={connectCta.href} variant="primary">{connectCta.label}</LinkButton>
        </div>
      </Section>
    </main>
  );
}
