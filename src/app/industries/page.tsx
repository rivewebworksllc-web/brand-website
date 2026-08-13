import type { Metadata } from "next";
import Image from "next/image";
import { industriesContent } from "@/lib/content/industries";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { startCta } from "@/lib/nav";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description: "Built where mistakes are expensive — the sectors Rive works in and why.",
  alternates: { canonical: "/industries/" },
};

const sectorIds = [
  "healthcare",
  "professional-services",
  "saas-technology",
  "local-businesses",
  "nonprofits",
] as const;

export default function IndustriesPage() {
  const { heading, description, items } = industriesContent;
  const [healthcare, professional, saas, local, nonprofit] = items;

  return (
    <main id="main-content">
      <Section spacing="generous" aria-labelledby="industries-heading" className="bg-surface pb-8 md:pb-12">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">Industries</p>
          <h1 id="industries-heading" className="text-h1 mt-5 max-w-2xl text-balance text-heading">
            {heading}
          </h1>
          <p className="text-hero-lead mt-6 max-w-xl text-body">{description}</p>
        </div>
        <figure className="relative mt-10 aspect-[4/3] overflow-hidden border border-hairline bg-surface-alt sm:aspect-[16/7] md:mt-14">
          <Image
            src="/media/industries/organisational-context.webp"
            alt="A connected professional environment bringing clinical, technical, and community work into one setting."
            fill
            priority
            sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1280px) calc(100vw - 96px), 1180px"
            className="object-cover object-center"
          />
        </figure>
      </Section>

      <Section spacing="tight" aria-labelledby="sector-index-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="grid gap-5 md:grid-cols-[minmax(0,0.75fr)_minmax(0,2.25fr)] md:items-start">
          <div>
            <p className="text-eyebrow text-brand-maroon">Field index</p>
            <h2 id="sector-index-heading" className="text-h3 mt-2 text-heading">Find your context</h2>
          </div>
          <nav aria-label="Industry sections">
            <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <li key={item.name} className="border-t border-hairline py-3">
                  <a
                    href={`#industry-${sectorIds[index]}`}
                    className="flex min-h-11 items-center gap-3 text-[14px] leading-[1.4] text-heading transition-colors hover:text-brand-maroon focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon motion-reduce:transition-none"
                  >
                    <span aria-hidden="true" className="text-[12px] text-brand-maroon">0{index + 1}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Section>

      <section
        id="industry-healthcare"
        aria-labelledby="healthcare-heading"
        className="relative isolate scroll-mt-24 overflow-hidden bg-navy-950 py-14 md:min-h-[620px] md:py-24"
      >
        <Image
          src="/media/industries/healthcare-context.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[72%_center] md:object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-transparent md:via-navy-950/25" />
        <div className="container-rw flex min-h-[430px] items-end md:items-center">
          <Reveal className="max-w-xl border-l-2 border-brand-gold bg-navy-950/88 p-6 backdrop-blur-[2px] md:p-9">
            <p className="text-eyebrow text-brand-gold">Featured context</p>
            <h2 id="healthcare-heading" className="text-h2 mt-3 text-white">{healthcare.name}</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/85 md:text-base">{healthcare.description}</p>
          </Reveal>
        </div>
      </section>

      <Section aria-labelledby="commercial-context-heading" className="scroll-mt-24 bg-surface" spacing="generous">
        <div className="border-b border-hairline-faint pb-9 md:pb-12">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brand-maroon">Commercial context</p>
            <h2 id="commercial-context-heading" className="text-h2 mt-3 text-heading">Credibility and scale have different failure points.</h2>
          </div>
        </div>
        <div className="mt-8 space-y-12 md:mt-12 md:space-y-16 lg:space-y-10">
          {[professional, saas].map((industry, index) => (
            <Reveal key={industry.name}>
              <article
                id={`industry-${sectorIds[index + 1]}`}
                className={`scroll-mt-24 grid items-end gap-5 border-b border-hairline-faint pb-9 md:grid-cols-12 md:gap-8 md:pb-11 ${index === 1 ? "md:ml-[8.333%]" : ""}`}
              >
                <p
                  aria-hidden="true"
                  className={`font-serif text-[clamp(2.65rem,7vw,6.5rem)] leading-[0.82] tracking-[-0.055em] text-gold-deep md:col-span-7 ${index === 1 ? "md:order-2 md:text-right" : ""}`}
                >
                  {index === 0 ? "CREDIBILITY" : "SCALE"}
                </p>
                <div className={`border-l border-brand-maroon pl-5 md:col-span-5 md:pl-7 ${index === 1 ? "md:order-1" : ""}`}>
                  <span className="text-eyebrow text-brand-maroon">0{index + 2}</span>
                  <h3 className="text-h3 mt-4 max-w-xs text-heading">{industry.name}</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-[1.7] text-body">{industry.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="community-context-heading" className="border-t border-hairline-faint bg-surface-alt" spacing="generous">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <figure className="relative aspect-[5/4] overflow-hidden border border-hairline bg-surface lg:col-span-7">
            <Image
              src="/media/industries/community-context.webp"
              alt="People working together in a grounded community and local-service setting."
              fill
              sizes="(max-width: 1024px) calc(100vw - 48px), 58vw"
              className="object-cover object-center"
            />
          </figure>
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-brand-maroon">Community context</p>
            <h2 id="community-context-heading" className="text-h2 mt-3 text-heading">Reach matters when resources cannot be wasted.</h2>
            <div className="mt-9 space-y-9">
              {[local, nonprofit].map((industry, index) => (
                <article key={industry.name} id={`industry-${sectorIds[index + 3]}`} className="scroll-mt-24 border-t border-hairline pt-5">
                  <div className="flex gap-4">
                    <span aria-hidden="true" className="text-eyebrow text-brand-maroon">0{index + 4}</span>
                    <div>
                      <h3 className="text-h3 text-heading">{industry.name}</h3>
                      <p className="mt-2 text-[15px] leading-[1.7] text-body">{industry.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="generous" accent aria-labelledby="industries-cta-heading" className="border-y border-accent-foreground/10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(14rem,0.35fr)] lg:items-center lg:gap-16">
          <div>
            <h2 id="industries-cta-heading" className="max-w-3xl font-serif text-[clamp(2rem,4.2vw,4rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-accent-foreground">
              {homepageFallbackContent.buyerPathsIntro.heading}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-accent-foreground/80 md:text-base">{homepageFallbackContent.buyerPathsIntro.description}</p>
          </div>
          <div className="lg:justify-self-end">
            <LinkButton href={startCta.href} variant="primary" className="w-full sm:w-auto lg:shrink-0">{startCta.label}</LinkButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
