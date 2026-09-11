import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { EngagementCard } from "@/components/solutions/EngagementCard";
import { ReadinessGuardrailsEvaluation } from "@/components/solutions/ReadinessGuardrailsEvaluation";
import {
  buyerProblem,
  catalogIntro,
  examine,
  final,
  followOnIntro,
  governance,
  hero,
  heroPanelEngagements,
  managedFollowOn,
  pipelineIntro,
  processNote,
  relationships,
  startingEngagements,
} from "@/lib/content/ai-data-automation";

export const metadata: Metadata = {
  title: "AI & Data Automation",
  description:
    "A governed path from AI readiness to a production pilot: scoped candidates, access boundaries, guardrails and an evaluation suite before anything ships. Starting from $2,500.",
  alternates: { canonical: "/solutions/ai-data-automation/" },
};

export default function AiDataAutomationPage() {
  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="ai-data-automation-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="ai-data-automation-heading" className="text-h1 mt-5 max-w-[20ch] text-balance text-heading">
              {hero.heading}
            </h1>
            <p className="text-hero-lead mt-7 max-w-xl text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>

          <div className="relative self-end border-l border-brand-maroon pl-6 lg:col-span-5 lg:pl-8">
            <p className="text-[10px] tracking-[0.08em] text-muted uppercase">Real starting engagements</p>
            <ul className="mt-4 space-y-4">
              {heroPanelEngagements.map((pkg) => (
                <li key={pkg.id} className="border border-hairline bg-surface-alt px-5 py-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-mono text-[11px] text-muted">{pkg.code}</p>
                    <p className="font-serif text-[18px] leading-none font-semibold text-heading">{pkg.price.display}</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.5] font-semibold text-heading">{pkg.name}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 max-w-sm text-[11px] leading-[1.5] text-muted">
              Published starting bands. Final scope confirmed in Paid Discovery.
            </p>
          </div>
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="ai-buyer-problem-heading" className="bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{buyerProblem.eyebrow}</p>
          <h2 id="ai-buyer-problem-heading" className="text-h2 mt-4 max-w-[26ch] text-heading">
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

      <section aria-labelledby="pipeline-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <p className="text-eyebrow text-brand-gold">{pipelineIntro.eyebrow}</p>
          <h2 id="pipeline-heading" className="mt-4 max-w-[26ch] font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            {pipelineIntro.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[13px] leading-[1.6] text-slate-400">{pipelineIntro.qualifier}</p>
          <div className="mt-12">
            <ReadinessGuardrailsEvaluation />
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="ai-catalog-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{catalogIntro.eyebrow}</p>
          <h2 id="ai-catalog-heading" className="text-h2 mt-4 max-w-[24ch] text-heading">
            {catalogIntro.heading}
          </h2>
          <p className="mt-4 text-sm leading-[1.6] text-muted">{catalogIntro.qualifier}</p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {startingEngagements.map((pkg) => (
            <EngagementCard key={pkg.id} pkg={pkg} />
          ))}
        </ul>
      </Section>

      <Section spacing="generous" aria-labelledby="ai-examine-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="ai-examine-heading" className="text-h2 max-w-[20ch] text-heading">
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

      <Section spacing="default" aria-labelledby="ai-governance-heading" className="bg-surface">
        <div className="max-w-2xl">
          <h2 id="ai-governance-heading" className="text-h3 text-heading">
            {governance.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-body">{governance.body}</p>
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="ai-followon-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="ai-followon-heading" className="text-h3 max-w-[20ch] text-heading">
              {followOnIntro.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-body">{followOnIntro.body}</p>
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] text-muted">{managedFollowOn.code}</p>
            <p className="mt-2 text-[15px] font-semibold text-heading">{managedFollowOn.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-[1.65] text-body">{managedFollowOn.summary}</p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {managedFollowOn.tiers.map((tier) => (
                <li key={tier.name} className="border border-hairline bg-surface px-4 py-3">
                  <p className="text-[11px] text-muted uppercase">{tier.name}</p>
                  <p className="mt-1 text-[14px] font-semibold text-heading">{tier.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section spacing="tight" aria-labelledby="ai-process-heading" className="bg-surface">
        <div className="max-w-2xl border-l-2 border-brand-maroon pl-6">
          <h2 id="ai-process-heading" className="text-h3 text-heading">
            {processNote.heading}
          </h2>
          <p className="mt-3 text-[14px] leading-[1.7] text-body">{processNote.body}</p>
          <div className="mt-4">
            <LinkButton href={processNote.cta.href} variant="text">{processNote.cta.label}</LinkButton>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="ai-relationships-heading" className="border-t border-hairline-faint bg-surface-alt">
        <p className="text-eyebrow text-brand-maroon">{relationships.eyebrow}</p>
        <h2 id="ai-relationships-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
          {relationships.heading}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relationships.items.map((item) => (
            <article key={item.label} className="border border-hairline bg-surface p-7">
              <p className="text-eyebrow text-brand-maroon">{item.label}</p>
              <p className="mt-4 text-sm leading-[1.75] text-body">{item.body}</p>
              <div className="mt-6">
                <LinkButton href={item.cta.href} variant="text">{item.cta.label}</LinkButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section aria-labelledby="ai-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="ai-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
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
