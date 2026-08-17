import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { FrictionMap } from "@/components/ux-audit/FrictionMap";
import { IllustrativeFinding } from "@/components/ux-audit/IllustrativeFinding";
import { RoadmapBands } from "@/components/ux-audit/RoadmapBands";
import {
  attach,
  auditTerritories,
  auditTerritoriesIntro,
  buyerProblem,
  commercialMeta,
  deliverables,
  deliverablesIntro,
  evidenceModel,
  exclusions,
  frictionMapIntro,
  relationships,
  roadmapIntro,
  uxAuditContent,
} from "@/lib/content/ux-audit-conversion-roadmap";

export const metadata: Metadata = {
  title: "UX Audit + Conversion Roadmap",
  description:
    "A structured review of where visitors hesitate, stall or leave on your site, evidenced by territory and severity, and turned into a sequenced roadmap. Starting from $3,500.",
  alternates: { canonical: "/services/web/ux-audit-conversion-roadmap/" },
};

export default function UxAuditConversionRoadmapPage() {
  const { hero, discoveryNote, final } = uxAuditContent;

  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="ux-audit-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="ux-audit-heading" className="text-h1 mt-5 max-w-[18ch] text-balance text-heading">
              {hero.heading}
            </h1>
            <p className="text-hero-lead mt-7 max-w-xl text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>

          {/*
            RW-PAGE-11A §12: commercial facts integrated into the existing
            hero composition, not a bolted-on four-cell metadata strip.
            Reuses Pricing's PackageCard "price plate" visual language
            (border border-hairline bg-surface-alt, "From" eyebrow, serif
            figure) for cross-page consistency now that this service has a
            real published band.
          */}
          <div className="relative self-end border-l border-brand-maroon pl-6 lg:col-span-5 lg:pl-8">
            <p className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">{commercialMeta.code}</p>
            <div className="mt-4 border border-hairline bg-surface-alt px-5 py-4">
              <p className="text-[10px] tracking-[0.08em] text-muted uppercase">Starting band</p>
              <p className="mt-1 font-serif text-[clamp(1.6rem,2.6vw,2.1rem)] leading-none font-semibold tracking-[-0.01em] text-heading">
                {commercialMeta.priceDisplay}
              </p>
              <p className="mt-2 max-w-sm text-[11px] leading-[1.5] text-muted">{commercialMeta.priceNote}</p>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-muted">
              <div className="border border-hairline-faint bg-surface px-3 py-2.5">
                <dt className="uppercase">Timeline</dt>
                <dd className="mt-1 text-[13px] font-semibold text-heading">{commercialMeta.timelineDisplay}</dd>
              </div>
              <div className="border border-hairline-faint bg-surface px-3 py-2.5">
                <dt className="uppercase">Evidence</dt>
                <dd className="mt-1 text-[13px] font-semibold text-heading">{commercialMeta.evidence}</dd>
              </div>
            </dl>
            <p className="mt-3 max-w-sm text-[11px] leading-[1.5] text-muted">{commercialMeta.timelineNote}</p>
          </div>
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="buyer-problem-heading" className="bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{buyerProblem.eyebrow}</p>
          <h2 id="buyer-problem-heading" className="text-h2 mt-4 max-w-[24ch] text-heading">
            {buyerProblem.heading}
          </h2>
          <ul className="mt-6 space-y-2">
            {buyerProblem.audiences.map((audience) => (
              <li key={audience} className="border-l-2 border-brand-maroon pl-4 text-sm leading-[1.7] text-body">
                {audience}
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {buyerProblem.symptoms.map((symptom) => (
              <li key={symptom} className="border border-hairline-faint bg-surface px-4 py-3 text-sm leading-[1.6] text-body">
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section aria-labelledby="friction-map-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <p className="text-eyebrow text-brand-gold">{frictionMapIntro.eyebrow}</p>
          <h2 id="friction-map-heading" className="mt-4 max-w-[24ch] font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            {frictionMapIntro.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[13px] leading-[1.6] text-slate-400">{frictionMapIntro.qualifier}</p>
          <div className="mt-12">
            <FrictionMap />
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="audit-territories-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{auditTerritoriesIntro.eyebrow}</p>
          <h2 id="audit-territories-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {auditTerritoriesIntro.heading}
          </h2>
          <p className="mt-4 text-sm leading-[1.6] text-muted">{auditTerritoriesIntro.qualifier}</p>
        </div>
        <ol className="mt-10 grid gap-0 border-t border-hairline md:grid-cols-2">
          {auditTerritories.map((territory, index) => (
            <li
              key={territory.id}
              className={`border-b border-hairline py-6 md:px-8 md:py-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
            >
              <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg leading-[1.4] font-semibold text-heading">{territory.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-[1.7] text-body">{territory.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section spacing="generous" aria-labelledby="evidence-model-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-eyebrow text-brand-maroon">{evidenceModel.eyebrow}</p>
            <h2 id="evidence-model-heading" className="text-h2 mt-4 max-w-[20ch] text-heading">
              {evidenceModel.heading}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-body md:text-base">{evidenceModel.description}</p>
          </div>
          <div className="lg:col-span-6">
            <IllustrativeFinding />
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="deliverables-heading" className="bg-surface">
        <p className="text-eyebrow text-brand-maroon">{deliverablesIntro.eyebrow}</p>
        <h2 id="deliverables-heading" className="text-h2 mt-4 max-w-[20ch] text-heading">
          {deliverablesIntro.heading}
        </h2>
        <ol className="mt-10 grid gap-5 border-t border-hairline pt-8 md:grid-cols-2">
          {deliverables.map((item, index) => (
            <li key={item.id} className="border border-hairline bg-surface-alt p-6">
              <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[15px] leading-[1.4] font-semibold text-heading">{item.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {item.detail.map((line) => (
                  <li key={line} className="text-[13px] leading-[1.6] text-body">{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-10 max-w-2xl border-t border-dashed border-hairline pt-8">
          <p className="text-eyebrow text-muted">Separately scoped</p>
          <ul className="mt-3 space-y-2">
            {exclusions.map((item) => (
              <li key={item} className="text-sm leading-[1.7] text-muted">{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="roadmap-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{roadmapIntro.eyebrow}</p>
          <h2 id="roadmap-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {roadmapIntro.heading}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{roadmapIntro.description}</p>
        </div>
        <div className="mt-10">
          <RoadmapBands />
        </div>

        <div className="mt-10 max-w-2xl border-t border-dashed border-hairline pt-8">
          <p className="text-eyebrow text-heading">{attach.heading}</p>
          <p className="mt-3 font-mono text-[12px] text-muted">{attach.route}</p>
          <p className="mt-1 text-xs leading-[1.6] text-muted">{attach.routeNote}</p>
          <ul className="mt-4 space-y-2">
            {attach.options.map((option) => (
              <li key={option.code} className="flex items-baseline justify-between gap-3 text-[13px] text-body">
                <span>{option.name} <span className="text-muted">({option.code})</span></span>
                <span className="text-xs text-muted">{option.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="relationships-heading" className="bg-surface">
        <p className="text-eyebrow text-brand-maroon">{relationships.eyebrow}</p>
        <h2 id="relationships-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
          {relationships.heading}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relationships.items.map((item) => (
            <article key={item.label} className="border border-hairline bg-surface-alt p-7">
              <p className="text-eyebrow text-brand-maroon">{item.label}</p>
              <p className="mt-4 text-sm leading-[1.75] text-body">{item.body}</p>
              <div className="mt-6">
                <LinkButton href={item.cta.href} variant="text">{item.cta.label}</LinkButton>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl border-l-2 border-brand-maroon pl-5 text-sm leading-[1.7] text-body">{discoveryNote}</p>
      </Section>

      <section aria-labelledby="ux-audit-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="ux-audit-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
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
