import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { ClaimBoundary } from "@/components/trust/ClaimBoundary";
import { EvidenceSpine } from "@/components/trust/EvidenceSpine";
import { trustContent } from "@/lib/content/trust";

export const metadata: Metadata = {
  title: "Trust Center",
  description:
    "See how Rive Webworks connects scope, architecture, validation, handoff and claim control to delivery evidence.",
  alternates: { canonical: "/trust/" },
};

export default function TrustPage() {
  const { hero, model, evidence, depth, boundaries, claims, handoff, routes, final } = trustContent;

  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="trust-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="trust-heading" className="text-h1 mt-5 max-w-[12ch] text-balance text-heading">
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
          <div aria-hidden="true" className="absolute -right-24 -bottom-28 hidden h-52 w-52 border border-hairline-faint lg:block">
            <span className="absolute top-1/3 right-0 left-0 h-px bg-hairline-faint" />
            <span className="absolute top-0 bottom-0 left-1/3 w-px bg-brand-maroon/50" />
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="trust-model-heading" className="bg-surface-alt">
        <div className="max-w-4xl">
          <h2 id="trust-model-heading" className="text-h2 max-w-[16ch] text-heading">{model.heading}</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-body md:text-base">{model.description}</p>
        </div>
        <ol className="mt-14 grid gap-0 border-t border-hairline md:grid-cols-12">
          {model.items.map((item, index) => (
            <li
              key={item.label}
              className={`border-b border-hairline py-8 md:col-span-6 md:px-8 md:py-10 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
            >
              <p className="text-eyebrow text-brand-maroon">{item.label}</p>
              <h3 className="text-h3 mt-4 max-w-md text-heading">{item.title}</h3>
              <p className="mt-4 max-w-lg text-sm leading-[1.75] text-body">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section aria-label="Technical review in context" className="relative isolate overflow-hidden bg-navy-950">
        <div className="relative h-[22rem] sm:h-[30rem] lg:h-[38rem]">
          <Image
            src="/media/trust/technical-review.webp"
            alt="Two people reviewing abstract technical drawings at a worktable"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/20 to-transparent" />
          <div className="container-rw relative flex h-full items-end pb-9 md:pb-12">
            <p className="max-w-md border-l border-brand-gold pl-5 text-sm leading-[1.65] text-white md:text-base">
              Consequential work begins with human judgement. Discipline makes that judgement inspectable.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="evidence-spine-heading" className="overflow-x-clip bg-navy-950 py-20 text-white md:py-32">
        <div className="container-rw">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <p className="text-eyebrow text-brand-gold">{evidence.eyebrow}</p>
              <h2 id="evidence-spine-heading" className="mt-5 max-w-[10ch] font-serif text-[clamp(2.7rem,5.5vw,5.5rem)] leading-[1] font-semibold tracking-[-0.03em] text-white">
                {evidence.heading}
              </h2>
              <p className="mt-7 max-w-md text-[15px] leading-[1.75] text-slate-200 md:text-base">{evidence.description}</p>
            </div>
            <div className="lg:col-span-8">
              <EvidenceSpine artifacts={evidence.artifacts} />
            </div>
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="evidence-depth-heading" className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{depth.eyebrow}</p>
            <h2 id="evidence-depth-heading" className="text-h2 mt-4 max-w-[16ch] text-heading">{depth.heading}</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-[1.75] text-body md:text-base">{depth.description}</p>
            <p className="mt-7 border-l-2 border-brand-maroon pl-5 text-sm leading-[1.7] font-semibold text-heading">{depth.note}</p>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="boundaries-heading" className="border-y border-hairline-faint bg-surface-alt">
        <div className="max-w-4xl">
          <p className="text-eyebrow text-brand-maroon">{boundaries.eyebrow}</p>
          <h2 id="boundaries-heading" className="text-h2 mt-4 max-w-[17ch] text-heading">{boundaries.heading}</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-body md:text-base">{boundaries.description}</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:items-start">
          {boundaries.items.map((item, index) => (
            <article
              key={item.title}
              className={`relative overflow-hidden border border-hairline bg-surface p-7 md:p-9 lg:col-span-4 ${index === 1 ? "lg:mt-12" : ""}`}
            >
              <span aria-hidden="true" className="absolute top-0 left-0 h-1 w-16 bg-brand-maroon" />
              <div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">0{index + 1} / operating practice</p>
                <p className="mt-5 font-serif text-[clamp(2.35rem,4vw,3.9rem)] leading-none font-semibold tracking-[-0.025em] text-heading">{item.title}</p>
                <h3 className="mt-5 max-w-sm text-lg leading-[1.45] font-semibold text-heading">{item.question}</h3>
              </div>
              <dl className="mt-8 space-y-7 border-t border-hairline pt-7">
                <div className="grid gap-2 sm:grid-cols-[5.5rem_1fr] lg:block">
                  <dt className="text-eyebrow text-brand-maroon">Practice</dt>
                  <dd className="text-sm leading-[1.7] text-body lg:mt-3">{item.practice}</dd>
                </div>
                <div className="grid gap-2 sm:grid-cols-[5.5rem_1fr] lg:block">
                  <dt className="text-eyebrow text-brand-maroon">Trace</dt>
                  <dd className="text-sm leading-[1.7] text-body lg:mt-3">{item.evidence}</dd>
                </div>
                <div className="grid gap-2 border-t border-dashed border-hairline pt-6 sm:grid-cols-[5.5rem_1fr] lg:block">
                  <dt className="text-eyebrow text-muted">Boundary</dt>
                  <dd className="text-sm leading-[1.7] text-muted lg:mt-3">{item.boundary}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="claim-boundary-heading" className="bg-surface">
        <p className="text-eyebrow text-brand-maroon">{claims.eyebrow}</p>
        <h2 id="claim-boundary-heading" className="text-h2 mt-4 max-w-[18ch] text-heading">{claims.heading}</h2>
        <ClaimBoundary supported={claims.supported} withheld={claims.withheld} />
        <p className="mt-8 max-w-2xl text-sm leading-[1.75] text-body">{claims.note}</p>
      </Section>

      <Section spacing="generous" aria-labelledby="handoff-heading" className="bg-surface-alt">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-brand-maroon">{handoff.eyebrow}</p>
            <h2 id="handoff-heading" className="text-h2 mt-4 max-w-[15ch] text-heading">{handoff.heading}</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-body md:text-base">{handoff.description}</p>
          </div>
          <div className="lg:col-span-7">
            <figure className="relative overflow-hidden bg-navy-950">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/media/trust/knowledge-handoff.webp"
                  alt="Two people jointly inspecting and annotating abstract technical documents"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="grid gap-5 border-t border-white/15 bg-navy-950 px-6 py-6 sm:grid-cols-2 sm:px-8">
                {handoff.points.map((point, index) => (
                  <p key={point} className="text-sm leading-[1.6] text-slate-200">
                    <span className="mr-3 font-mono text-[10px] text-brand-gold">{String(index + 1).padStart(2, "0")}</span>
                    {point}
                  </p>
                ))}
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="trust-routes-heading" className="border-t border-hairline-faint bg-surface">
        <h2 id="trust-routes-heading" className="text-h2 max-w-[17ch] text-heading">{routes.heading}</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {routes.items.map((item) => (
            <article key={item.label} className={`${item.primary ? "bg-navy-950 text-white lg:col-span-7" : "border border-hairline bg-surface-alt lg:col-span-5"} p-7 md:p-10`}>
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

      <section aria-labelledby="trust-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="trust-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">{final.heading}</h2>
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
