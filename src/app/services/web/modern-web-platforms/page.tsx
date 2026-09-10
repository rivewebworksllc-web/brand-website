import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { LayerStackIcon, DecisionBranchIcon } from "@/components/modern-web-platforms/ModernWebPlatformsIcons";
import { PlatformStack } from "@/components/modern-web-platforms/PlatformStack";
import { ContentModelSpecimen } from "@/components/modern-web-platforms/ContentModelSpecimen";
import {
  accessibilityNote,
  buyerProblem,
  commercialOrientation,
  contentModelIntro,
  coupledVsComposable,
  headlessContentTreatment,
  modernWebPlatformsContent,
  multilingualNote,
  nextjsTreatment,
  performanceIntro,
  platformDecisionIntro,
  platformPaths,
  platformStackIntro,
  processIntro,
  processPhases,
  relationships,
  seoIntro,
} from "@/lib/content/modern-web-platforms";

export const metadata: Metadata = {
  title: "Modern Web Platforms",
  description:
    "Composable Web and Next.js platforms for performance, content operations and extensibility, or WordPress, when that is the better fit. Architecture chosen for the work, not the trend.",
  alternates: { canonical: "/services/web/modern-web-platforms/" },
};

export default function ModernWebPlatformsPage() {
  const { hero, final } = modernWebPlatformsContent;
  const architectPhase = processPhases.find((phase) => phase.id === "architect");

  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="op40-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="op40-heading" className="text-h1 mt-5 max-w-[18ch] text-balance text-heading max-sm:!text-[2.25rem]">
              {hero.heading}
            </h1>
            <p className="text-hero-lead mt-7 max-w-xl text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>

          {/*
            RW-PAGE-14: deliberately NOT a price-plate panel. No trustworthy
            OP-40 commercial authority exists (see Design Decision Brief).
            The same bordered-panel visual weight as UXR-01/FND-05's hero
            metadata panel carries a commercial-orientation statement
            instead of a fabricated number.
          */}
          <div className="relative self-end border-l border-brand-maroon pl-6 lg:col-span-5 lg:pl-8">
            <p className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">{commercialOrientation.code}</p>
            <div className="mt-4 border border-hairline bg-surface-alt px-5 py-4">
              <p className="text-[10px] tracking-[0.08em] text-muted uppercase">Commercial status</p>
              <p className="mt-1 font-serif text-[clamp(1.4rem,2.2vw,1.8rem)] leading-tight font-semibold tracking-[-0.01em] text-heading">
                {commercialOrientation.status}
              </p>
              <p className="mt-1 text-[13px] font-semibold text-brand-maroon">{commercialOrientation.scopeNote}</p>
            </div>
            <p className="mt-3 max-w-sm text-[11px] leading-[1.5] text-muted">{commercialOrientation.reason}</p>
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
            {buyerProblem.symptoms.map((symptom) => (
              <li key={symptom} className="border-l-2 border-brand-maroon pl-4 text-sm leading-[1.7] text-body">
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section aria-labelledby="platform-stack-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <div className="flex items-center gap-3">
            <LayerStackIcon className="h-6 w-6 text-brand-gold" />
            <p className="text-eyebrow text-brand-gold">{platformStackIntro.eyebrow}</p>
          </div>
          <h2 id="platform-stack-heading" className="mt-4 max-w-[22ch] font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            {platformStackIntro.heading}
          </h2>
          <div className="mt-12">
            <PlatformStack />
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="coupled-composable-heading" className="bg-surface">
        <div className="max-w-2xl">
          <h2 id="coupled-composable-heading" className="text-h2 max-w-[24ch] text-heading">
            {coupledVsComposable.heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-2">
          <div>
            <p className="text-[13px] font-semibold text-heading">{coupledVsComposable.coupled.label}</p>
            <p className="mt-3 text-sm leading-[1.7] text-body">{coupledVsComposable.coupled.description}</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-brand-maroon">{coupledVsComposable.composable.label}</p>
            <p className="mt-3 text-sm leading-[1.7] text-body">{coupledVsComposable.composable.description}</p>
          </div>
        </div>
        <p className="mt-8 max-w-2xl border-l-2 border-brand-maroon pl-5 text-sm leading-[1.7] text-body">
          {coupledVsComposable.connector}
        </p>
        <div className="mt-10 max-w-3xl border-t border-dashed border-hairline pt-8">
          <h3 className="text-lg font-semibold text-heading">{nextjsTreatment.heading}</h3>
          <p className="mt-3 text-sm leading-[1.75] text-body">{nextjsTreatment.body}</p>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="content-model-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-brand-maroon">{contentModelIntro.eyebrow}</p>
          <h2 id="content-model-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {contentModelIntro.heading}
          </h2>
          <h3 className="mt-8 text-lg font-semibold text-heading">{headlessContentTreatment.heading}</h3>
          <p className="mt-3 text-sm leading-[1.75] text-body">{headlessContentTreatment.body}</p>
        </div>
        <div className="mt-10 max-w-2xl">
          <ContentModelSpecimen />
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="platform-decision-heading" className="bg-surface">
        <div className="flex items-center gap-3">
          <DecisionBranchIcon className="h-6 w-6 text-brand-maroon" />
          <p className="text-eyebrow text-brand-maroon">{platformDecisionIntro.eyebrow}</p>
        </div>
        <h2 id="platform-decision-heading" className="text-h2 mt-4 max-w-[24ch] text-heading">
          {platformDecisionIntro.heading}
        </h2>
        <div className="mt-10 grid gap-5 border-t border-hairline pt-8 md:grid-cols-3">
          {platformPaths.map((path) => (
            <div key={path.id} className="min-w-0 border border-hairline bg-surface-alt p-6">
              <h3 className="text-[15px] leading-[1.4] font-semibold text-heading">{path.label}</h3>
              <p className="mt-3 text-eyebrow text-muted">Best when</p>
              <ul className="mt-2 space-y-1.5">
                {path.bestWhen.map((item) => (
                  <li key={item} className="text-[13px] leading-[1.6] text-body">{item}</li>
                ))}
              </ul>
              <p className="mt-4 border-t border-dashed border-hairline pt-3 font-mono text-[11px] break-words text-muted">
                {path.mapping}
              </p>
              <p className="mt-3 text-[12px] leading-[1.6] text-muted">{path.routeNote}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-2xl border-t border-dashed border-hairline pt-8">
          <p className="text-[13px] font-semibold text-heading">{multilingualNote.label}</p>
          <p className="mt-2 text-sm leading-[1.7] text-muted">{multilingualNote.body}</p>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="engineering-quality-heading" className="border-y border-hairline-faint bg-surface-alt">
        <h2 id="engineering-quality-heading" className="sr-only">Engineering quality</h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow text-brand-maroon">{seoIntro.eyebrow}</p>
            <h3 className="mt-4 max-w-[18ch] text-lg font-semibold text-heading">{seoIntro.heading}</h3>
            <ul className="mt-5 space-y-2">
              {seoIntro.principles.map((principle) => (
                <li key={principle} className="border-l-2 border-hairline pl-4 text-[13px] leading-[1.6] text-body">{principle}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-eyebrow text-brand-maroon">{performanceIntro.eyebrow}</p>
            <h3 className="mt-4 max-w-[18ch] text-lg font-semibold text-heading">{performanceIntro.heading}</h3>
            <ul className="mt-5 space-y-2">
              {performanceIntro.principles.map((principle) => (
                <li key={principle} className="border-l-2 border-hairline pl-4 text-[13px] leading-[1.6] text-body">{principle}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 max-w-2xl border-t border-dashed border-hairline pt-8">
          <p className="text-eyebrow text-heading">{accessibilityNote.eyebrow}</p>
          <h3 className="mt-2 max-w-[24ch] text-lg font-semibold text-heading">{accessibilityNote.heading}</h3>
          <p className="mt-3 text-sm leading-[1.7] text-body">{accessibilityNote.body}</p>
          <div className="mt-4">
            <LinkButton href={accessibilityNote.cta.href} variant="text">{accessibilityNote.cta.label}</LinkButton>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="process-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{processIntro.eyebrow}</p>
          <h2 id="process-heading" className="text-h2 mt-4 max-w-[24ch] text-heading">
            {processIntro.heading}
          </h2>
        </div>
        <ol className="mt-10 grid gap-0 border-t border-hairline md:grid-cols-4">
          {processPhases.map((phase, index) => (
            <li
              key={phase.id}
              className={`border-b border-hairline py-5 md:px-6 md:py-6 ${index % 4 !== 3 ? "md:border-r" : ""}`}
            >
              <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[14px] leading-[1.4] font-semibold text-heading">{phase.title}</h3>
              <p className="mt-1.5 text-[12px] leading-[1.5] text-muted">{phase.intent}</p>
              {phase.id === architectPhase?.id ? (
                <p className="mt-2 border-l-2 border-brand-maroon pl-2 text-[11px] leading-[1.5] text-brand-maroon">
                  {processIntro.architectAnnotation}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <LinkButton href={processIntro.cta.href} variant="text">{processIntro.cta.label}</LinkButton>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="relationships-heading" className="border-t border-hairline-faint bg-surface-alt">
        <p className="text-eyebrow text-brand-maroon">{relationships.eyebrow}</p>
        <h2 id="relationships-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
          {relationships.heading}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relationships.items.map((item) => (
            <article key={item.label} className="min-w-0 border border-hairline bg-surface p-7">
              <p className="text-eyebrow text-brand-maroon">{item.label}</p>
              <p className="mt-4 text-sm leading-[1.75] text-body">{item.body}</p>
              <div className="mt-6">
                <LinkButton href={item.cta.href} variant="text" className="max-w-full whitespace-normal text-left">
                  {item.cta.label}
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section aria-labelledby="op40-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="op40-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
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
