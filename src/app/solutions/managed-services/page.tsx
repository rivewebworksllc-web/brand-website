import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { CoverageRegister } from "@/components/solutions/CoverageRegister";
import {
  assessment,
  buyerProblem,
  coverageDomains,
  coverageIntro,
  examine,
  final,
  hero,
  processNote,
  relationships,
} from "@/lib/content/managed-services-solution";

export const metadata: Metadata = {
  title: "Managed Care & Advisory",
  description:
    "One accountable relationship covering website, cloud and AI operations, instead of three separate vendors. Starting from $249/mo.",
  alternates: { canonical: "/solutions/managed-services/" },
};

export default function ManagedServicesPage() {
  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="managed-services-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="managed-services-heading" className="text-h1 mt-5 max-w-[20ch] text-balance text-heading">
              {hero.heading}
            </h1>
            <p className="text-hero-lead mt-7 max-w-xl text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>

          <div className="relative self-end border-l border-brand-maroon pl-6 lg:col-span-5 lg:pl-8">
            <p className="text-[10px] tracking-[0.08em] text-muted uppercase">Real coverage, real starting tiers</p>
            <ul className="mt-4 space-y-3">
              {coverageDomains.map((domain) => (
                <li key={domain.id} className="flex items-baseline justify-between gap-3 border border-hairline bg-surface-alt px-5 py-3">
                  <div>
                    <p className="font-mono text-[11px] text-muted">{domain.service.code}</p>
                    <p className="mt-0.5 text-[13px] font-semibold text-heading">{domain.label}</p>
                  </div>
                  <p className="font-serif text-[15px] font-semibold text-heading">{domain.service.tiers[0]?.price}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 max-w-sm text-[11px] leading-[1.5] text-muted">
              Published starting tiers. Final scope confirmed in Paid Discovery.
            </p>
          </div>
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="managed-buyer-problem-heading" className="bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{buyerProblem.eyebrow}</p>
          <h2 id="managed-buyer-problem-heading" className="text-h2 mt-4 max-w-[26ch] text-heading">
            {buyerProblem.heading}
          </h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {buyerProblem.symptoms.map((symptom) => (
              <li key={symptom} className="border border-hairline-faint bg-surface px-4 py-3 text-sm leading-[1.6] text-body">
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section aria-labelledby="coverage-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <p className="text-eyebrow text-brand-gold">{coverageIntro.eyebrow}</p>
          <h2 id="coverage-heading" className="mt-4 max-w-[28ch] font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            {coverageIntro.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[13px] leading-[1.6] text-slate-400">{coverageIntro.qualifier}</p>
          <div className="mt-12">
            <CoverageRegister />
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="managed-assessment-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-2xl">
          <h2 id="managed-assessment-heading" className="text-h2 max-w-[20ch] text-heading">
            {assessment.heading}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body">{assessment.body}</p>
          <p className="mt-4 text-[15px] leading-[1.75] text-body">{assessment.distinction}</p>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="managed-examine-heading" className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="managed-examine-heading" className="text-h2 max-w-[20ch] text-heading">
              {examine.heading}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] tracking-[0.08em] text-muted uppercase">What we examine</p>
              <p className="mt-3 text-[15px] leading-[1.7] text-body">{examine.whatWeExamine}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.08em] text-muted uppercase">What you get back</p>
              <p className="mt-3 text-[15px] leading-[1.7] text-body">{examine.expectedOutput}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="tight" aria-labelledby="managed-process-heading" className="border-t border-hairline-faint bg-surface-alt">
        <div className="max-w-2xl border-l-2 border-brand-maroon pl-6">
          <h2 id="managed-process-heading" className="text-h3 text-heading">
            {processNote.heading}
          </h2>
          <p className="mt-3 text-[14px] leading-[1.7] text-body">{processNote.body}</p>
          <div className="mt-4">
            <LinkButton href={processNote.cta.href} variant="text">{processNote.cta.label}</LinkButton>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="managed-relationships-heading" className="bg-surface">
        <p className="text-eyebrow text-brand-maroon">{relationships.eyebrow}</p>
        <h2 id="managed-relationships-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
          {relationships.heading}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relationships.items.map((item) => (
            <article key={item.label} className="min-w-0 border border-hairline bg-surface-alt p-7">
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

      <section aria-labelledby="managed-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="managed-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
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
