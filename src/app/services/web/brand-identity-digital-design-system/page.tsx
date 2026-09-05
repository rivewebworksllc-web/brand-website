import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { IncludedIcon, SeparateIcon } from "@/components/pricing/PricingIcons";
import { HandoffIcon } from "@/components/design-system/DesignSystemIcons";
import { FragmentsToSystem } from "@/components/design-system/FragmentsToSystem";
import { ComponentAnatomy } from "@/components/design-system/ComponentAnatomy";
import { ProcessSequence } from "@/components/design-system/ProcessSequence";
import {
  attach,
  brandGuideComparison,
  buyerProblem,
  colorRoles,
  colorSystemIntro,
  commercialMeta,
  componentAnatomyIntro,
  deliverables,
  deliverablesIntro,
  designSystemContent,
  developerHandoff,
  entryPaths,
  entryPathsIntro,
  exclusions,
  fragmentsToSystemIntro,
  processIntro,
  relationships,
  tokenExamples,
  tokenTranslationIntro,
  typeRoles,
  typeSystemIntro,
} from "@/lib/content/brand-identity-digital-design-system";

export const metadata: Metadata = {
  title: "Brand Identity + Digital Design System",
  description:
    "A documented, reusable design system, color tokens, type scale, spacing and components, that your website and developers can consistently work from. Starting from $4,000.",
  alternates: { canonical: "/services/web/brand-identity-digital-design-system/" },
};

export default function BrandIdentityDigitalDesignSystemPage() {
  const { hero, discoveryNote, final } = designSystemContent;

  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="fnd05-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="fnd05-heading" className="text-h1 mt-5 max-w-[18ch] text-balance text-heading">
              {hero.heading}
            </h1>
            <p className="text-hero-lead mt-7 max-w-xl text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>

          {/*
            RW-PAGE-13: reuses UXR-01's hero price-plate anatomy verbatim
            (see this page's Design Decision Brief, Cross-page repetition
            audit) - this repository's established generic device for a
            commercial-fact panel, not either page's signature moment.
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

        <div className="mt-12 max-w-4xl border-t border-dashed border-hairline pt-8">
          <p className="text-eyebrow text-heading">{entryPathsIntro.eyebrow}</p>
          <h3 className="mt-2 max-w-[22ch] text-lg font-semibold text-heading">{entryPathsIntro.heading}</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {entryPaths.map((path) => (
              <div key={path.id}>
                <p className="text-[13px] font-semibold text-brand-maroon">{path.label}</p>
                <p className="mt-2 text-sm leading-[1.7] text-body">{path.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section aria-labelledby="fragments-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <p className="text-eyebrow text-brand-gold">{fragmentsToSystemIntro.eyebrow}</p>
          <h2 id="fragments-heading" className="mt-4 max-w-[22ch] font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            {fragmentsToSystemIntro.heading}
          </h2>
          <div className="mt-12">
            <FragmentsToSystem />
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="token-translation-heading" className="bg-surface">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-brand-maroon">{tokenTranslationIntro.eyebrow}</p>
          <h2 id="token-translation-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {tokenTranslationIntro.heading}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{tokenTranslationIntro.description}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tokenExamples.map((example) => (
            <div key={example.id} className="border border-hairline bg-surface-alt p-6">
              <p className="inline-flex items-center border border-hairline px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                Illustrative
              </p>
              <div className="mt-4 flex flex-col gap-3 text-[13px] text-body">
                <div>
                  <p className="text-[11px] tracking-[0.06em] text-muted uppercase">Raw decision</p>
                  <p className="mt-1 font-semibold text-heading">{example.rawDecision}</p>
                </div>
                <span aria-hidden="true" className="text-muted">&darr;</span>
                <div>
                  <p className="text-[11px] tracking-[0.06em] text-muted uppercase">Token name</p>
                  <p className="mt-1 font-mono text-[13px] text-brand-maroon">{example.tokenName}</p>
                </div>
                <span aria-hidden="true" className="text-muted">&darr;</span>
                <div>
                  <p className="text-[11px] tracking-[0.06em] text-muted uppercase">Used in</p>
                  <p className="mt-1 text-body">{example.usedIn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="type-color-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow text-brand-maroon">{typeSystemIntro.eyebrow}</p>
            <h2 id="type-color-heading" className="text-h2 mt-4 max-w-[18ch] text-heading">
              {typeSystemIntro.heading}
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-body">{typeSystemIntro.description}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {typeRoles.map((role) => (
                <li key={role.id} className="border border-hairline bg-surface p-3">
                  <p className="text-[12px] font-semibold text-heading">{role.label}</p>
                  <p className="mt-1 text-[11px] leading-[1.5] text-muted">{role.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-eyebrow text-brand-maroon">{colorSystemIntro.eyebrow}</p>
            <h3 className="mt-4 max-w-[18ch] text-lg font-semibold text-heading">{colorSystemIntro.heading}</h3>
            <p className="mt-4 text-sm leading-[1.7] text-body">{colorSystemIntro.description}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {colorRoles.map((role) => (
                <li key={role.id} className="border border-hairline bg-surface p-3">
                  <p className="text-[12px] font-semibold text-heading">{role.label}</p>
                  <p className="mt-1 text-[11px] leading-[1.5] text-muted">{role.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="component-anatomy-heading" className="bg-surface">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-brand-maroon">{componentAnatomyIntro.eyebrow}</p>
          <h2 id="component-anatomy-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {componentAnatomyIntro.heading}
          </h2>
        </div>
        <div className="mt-10 max-w-2xl">
          <ComponentAnatomy />
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="brand-guide-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{brandGuideComparison.eyebrow}</p>
          <h2 id="brand-guide-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {brandGuideComparison.heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-2">
          <div>
            <p className="text-[13px] font-semibold text-heading">{brandGuideComparison.brandGuide.label}</p>
            <ul className="mt-3 space-y-2">
              {brandGuideComparison.brandGuide.items.map((item) => (
                <li key={item} className="text-sm leading-[1.7] text-body">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-brand-maroon">{brandGuideComparison.designSystem.label}</p>
            <ul className="mt-3 space-y-2">
              {brandGuideComparison.designSystem.items.map((item) => (
                <li key={item} className="text-sm leading-[1.7] text-body">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 max-w-2xl border-l-2 border-brand-maroon pl-5 text-sm leading-[1.7] text-body">
          {brandGuideComparison.connector}
        </p>
      </Section>

      <Section spacing="generous" aria-labelledby="deliverables-heading" className="bg-surface">
        <p className="text-eyebrow text-brand-maroon">{deliverablesIntro.eyebrow}</p>
        <h2 id="deliverables-heading" className="text-h2 mt-4 max-w-[20ch] text-heading">
          {deliverablesIntro.heading}
        </h2>
        <ol className="mt-10 grid gap-5 border-t border-hairline pt-8 md:grid-cols-3">
          {deliverables.map((item, index) => (
            <li key={item.id} className="border border-hairline bg-surface-alt p-6">
              <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[15px] leading-[1.4] font-semibold text-heading">{item.title}</h3>
              <ul className="mt-3 space-y-2">
                {item.detail.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-[13px] leading-[1.6] text-body">
                    <IncludedIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-maroon" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-10 max-w-2xl border-t border-dashed border-hairline pt-8">
          <p className="text-eyebrow text-muted">Separately scoped</p>
          <ul className="mt-3 space-y-2">
            {exclusions.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-[1.7] text-muted">
                <SeparateIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="process-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{processIntro.eyebrow}</p>
          <h2 id="process-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {processIntro.heading}
          </h2>
        </div>
        <div className="mt-10">
          <ProcessSequence />
        </div>

        <div className="mt-12 max-w-2xl border-t border-dashed border-hairline pt-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-hairline bg-surface text-brand-maroon">
              <HandoffIcon className="h-4.5 w-4.5" />
            </span>
            <p className="text-eyebrow text-heading">{developerHandoff.eyebrow}</p>
          </div>
          <h3 className="mt-3 max-w-[26ch] text-lg font-semibold text-heading">{developerHandoff.heading}</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {developerHandoff.outcomes.map((outcome) => (
              <li key={outcome} className="text-[13px] leading-[1.6] text-body">&bull; {outcome}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-[1.6] text-muted">{developerHandoff.note}</p>
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

      <section aria-labelledby="fnd05-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="fnd05-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
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
