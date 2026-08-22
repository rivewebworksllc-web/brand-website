import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { AccessPath } from "@/components/accessibility/AccessPath";
import { KeyboardPath } from "@/components/accessibility/KeyboardPath";
import { RemediationLoop } from "@/components/accessibility/RemediationLoop";
import { IllustrativeIssue } from "@/components/accessibility/IllustrativeIssue";
import {
  accessibilityContent,
  ariaContent,
  automatedVsManual,
  evidenceRelationship,
  keyboardPathIntro,
  positioning,
  principles,
  principlesIntro,
  relationships,
  remediationLoopIntro,
  screenReaderContent,
} from "@/lib/content/accessibility";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "How Rive Webworks approaches accessibility: WCAG 2.2 AA-informed practice, automated and manual verification, and how remediation is checked again and recorded.",
  alternates: { canonical: "/trust/accessibility/" },
};

export default function AccessibilityPage() {
  const { hero, final } = accessibilityContent;

  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="accessibility-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="accessibility-heading" className="text-h1 mt-5 max-w-[22ch] text-balance text-heading">
              {hero.heading}
            </h1>
            <p className="text-hero-lead mt-7 max-w-2xl text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-hairline pt-12">
          <AccessPath />
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="positioning-heading" className="bg-surface-alt">
        <div className="max-w-3xl">
          <h2 id="positioning-heading" className="text-h2 max-w-[22ch] text-heading">
            WCAG 2.2 AA-informed, not a certification claim.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{positioning.statement}</p>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="principles-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{principlesIntro.eyebrow}</p>
          <h2 id="principles-heading" className="text-h2 mt-4 max-w-[24ch] text-heading">
            {principlesIntro.heading}
          </h2>
          <p className="mt-4 text-sm leading-[1.6] text-muted">{principlesIntro.note}</p>
        </div>
        <dl className="mt-10 grid gap-0 border-t border-hairline md:grid-cols-2">
          {principles.map((item, index) => (
            <div
              key={item.id}
              className={`border-b border-hairline py-6 md:px-8 md:py-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
            >
              <dt className="text-lg leading-[1.4] font-semibold text-heading">{item.title}</dt>
              <dd className="mt-2 text-sm leading-[1.7] text-body">
                <span className="font-semibold text-heading">{item.question}</span> {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <section aria-labelledby="keyboard-path-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <p className="text-eyebrow text-brand-gold">{keyboardPathIntro.eyebrow}</p>
          <h2 id="keyboard-path-heading" className="mt-4 max-w-[26ch] font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
            {keyboardPathIntro.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[13px] leading-[1.6] text-slate-400">{keyboardPathIntro.description}</p>
          <div className="mt-14">
            <KeyboardPath />
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="verification-heading" className="bg-surface">
        <p className="text-eyebrow text-brand-maroon">{automatedVsManual.eyebrow}</p>
        <h2 id="verification-heading" className="text-h2 mt-4 max-w-[24ch] text-heading">
          {automatedVsManual.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border border-hairline bg-surface-alt p-7">
            <p className="text-eyebrow text-heading">{automatedVsManual.automated.label}</p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">{automatedVsManual.automated.tools}</p>
            <p className="mt-4 text-sm leading-[1.7] text-body">{automatedVsManual.automated.detail}</p>
          </div>
          <div className="border border-hairline bg-surface-alt p-7">
            <p className="text-eyebrow text-heading">{automatedVsManual.manual.label}</p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">{automatedVsManual.manual.tools}</p>
            <p className="mt-4 text-sm leading-[1.7] text-body">{automatedVsManual.manual.detail}</p>
          </div>
        </div>
        <p className="mt-8 max-w-2xl border-l-2 border-brand-maroon pl-5 text-sm leading-[1.7] font-semibold text-heading">
          {automatedVsManual.notAScoreNote}
        </p>
      </Section>

      <Section spacing="default" aria-labelledby="aria-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-brand-maroon">{ariaContent.eyebrow}</p>
          <h2 id="aria-heading" className="text-h2 mt-4 max-w-[18ch] text-heading">
            {ariaContent.heading}
          </h2>
          <p className="mt-5 text-sm leading-[1.75] text-body">{ariaContent.principle}</p>
          <p className="mt-3 text-sm leading-[1.75] font-semibold text-heading">{ariaContent.warning}</p>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="screen-reader-heading" className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-eyebrow text-brand-maroon">{screenReaderContent.eyebrow}</p>
            <h2 id="screen-reader-heading" className="text-h2 mt-4 max-w-[20ch] text-heading">
              {screenReaderContent.heading}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-body md:text-base">{screenReaderContent.description}</p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">{screenReaderContent.illustrativeLabel}</p>
          </div>
          <div className="lg:col-span-6">
            <IllustrativeIssue />
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="remediation-loop-heading" className="border-y border-hairline-faint bg-surface-alt">
        <p className="text-eyebrow text-brand-maroon">{remediationLoopIntro.eyebrow}</p>
        <h2 id="remediation-loop-heading" className="text-h2 mt-4 max-w-[24ch] text-heading">
          {remediationLoopIntro.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-body">{remediationLoopIntro.description}</p>
        <div className="mt-12">
          <RemediationLoop />
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="evidence-relationship-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{evidenceRelationship.eyebrow}</p>
          <h2 id="evidence-relationship-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">
            {evidenceRelationship.heading}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{evidenceRelationship.description}</p>
          <p className="mt-5 text-sm leading-[1.7] text-muted">{evidenceRelationship.privacyNote}</p>
          <div className="mt-7">
            <LinkButton href={evidenceRelationship.cta.href} variant="text">{evidenceRelationship.cta.label}</LinkButton>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="relationships-heading" className="border-t border-hairline-faint bg-surface-alt">
        <p className="text-eyebrow text-brand-maroon">{relationships.eyebrow}</p>
        <h2 id="relationships-heading" className="text-h2 mt-4 max-w-[18ch] text-heading">
          {relationships.heading}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
        <div className="mt-8 max-w-2xl border-l-2 border-brand-maroon pl-5">
          <p className="text-sm leading-[1.7] text-body">{relationships.boundary.boundary}</p>
        </div>
      </Section>

      <section aria-labelledby="accessibility-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="accessibility-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
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
