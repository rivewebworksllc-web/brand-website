import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { EvidenceRegister } from "@/components/evidence-pack/EvidenceRegister";
import { evidenceArtifacts, evidencePackContent } from "@/lib/content/evidence-pack";

export const metadata: Metadata = {
  title: "Evidence Pack",
  description:
    "The six records Rive Webworks accumulates during delivery, with sample views, evidence tiers, ownership and process connection for each.",
  alternates: { canonical: "/trust/evidence-pack/" },
};

export default function EvidencePackPage() {
  const { hero, intro, registerIntro, tierIntro, claimNote, routes, final } = evidencePackContent;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rive Webworks Evidence Pack",
    itemListElement: evidenceArtifacts.map((artifact, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: artifact.title,
      description: artifact.description,
    })),
  };

  return (
    <main id="main-content">
      <JsonLd id="evidence-pack-itemlist-jsonld" data={faqJsonLd} />

      <Section
        spacing="generous"
        aria-labelledby="evidence-pack-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="evidence-pack-heading" className="text-h1 mt-5 max-w-[16ch] text-balance text-heading">
              {hero.heading}
            </h1>
          </div>
          <div className="relative self-end border-l border-brand-maroon pl-6 lg:col-span-4 lg:pl-8">
            <p className="text-hero-lead max-w-lg text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="evidence-pack-intro-heading" className="bg-surface-alt">
        <div className="max-w-3xl">
          <h2 id="evidence-pack-intro-heading" className="text-h2 max-w-[24ch] text-heading">
            {intro.heading}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{intro.description}</p>
        </div>
      </Section>

      <section aria-labelledby="register-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <p className="text-eyebrow text-brand-gold">{registerIntro.eyebrow}</p>
          <h2 id="register-heading" className="mt-4 max-w-[20ch] font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            {registerIntro.heading}
          </h2>
          <div className="mt-12">
            <EvidenceRegister />
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="evidence-tier-heading" className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{tierIntro.eyebrow}</p>
            <h2 id="evidence-tier-heading" className="text-h2 mt-4 max-w-[18ch] text-heading">
              {tierIntro.heading}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-[1.75] text-body md:text-base">{tierIntro.description}</p>
            <p className="mt-7 border-l-2 border-brand-maroon pl-5 text-sm leading-[1.7] font-semibold text-heading">
              {tierIntro.note}
            </p>
          </div>
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="claim-note-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{claimNote.eyebrow}</p>
          <h2 id="claim-note-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {claimNote.heading}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{claimNote.description}</p>
          <div className="mt-7">
            <LinkButton href={claimNote.cta.href} variant="text">{claimNote.cta.label}</LinkButton>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="evidence-pack-routes-heading" className="bg-surface">
        <h2 id="evidence-pack-routes-heading" className="text-h2 max-w-[18ch] text-heading">{routes.heading}</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {routes.items.map((item) => (
            <article
              key={item.label}
              className={`${item.primary ? "bg-navy-950 text-white lg:col-span-7" : "border border-hairline bg-surface-alt lg:col-span-5"} p-7 md:p-10`}
            >
              <p className={`text-eyebrow ${item.primary ? "text-brand-gold" : "text-brand-maroon"}`}>{item.label}</p>
              <h3 className={`text-h3 mt-4 max-w-lg ${item.primary ? "text-white" : "text-heading"}`}>{item.heading}</h3>
              <p className={`mt-5 max-w-xl text-sm leading-[1.75] ${item.primary ? "text-slate-200" : "text-body"}`}>{item.body}</p>
              <div className="mt-8">
                <LinkButton href={item.cta.href} variant={item.primary ? "inverse" : "text"}>{item.cta.label}</LinkButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section aria-labelledby="evidence-pack-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="evidence-pack-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
              {final.heading}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-accent-foreground/80">{final.body}</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <LinkButton href={final.primary.href} className="w-full">{final.primary.label}</LinkButton>
            <LinkButton href={final.secondary.href} variant="secondary" className="w-full">{final.secondary.label}</LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
