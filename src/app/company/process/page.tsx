import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { OperatingTrace } from "@/components/process/OperatingTrace";
import { ProcessFAQ } from "@/components/process/ProcessFAQ";
import { LinkButton } from "@/components/ui/Button";
import { processContent } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See how Rive Webworks moves from understanding and decisions through architecture, delivery, verification, handover and continued improvement.",
  alternates: { canonical: "/company/process/" },
};

export default function ProcessPage() {
  const { hero, model, evidence, collaboration, disciplines, faq, final } = processContent;

  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="process-heading"
        className="-mt-20 border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-y-16">
          <div className="lg:col-span-10">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1
              id="process-heading"
              className="text-h1 mt-5 max-w-[15ch] text-balance text-heading"
            >
              {hero.heading}
            </h1>
          </div>
          <div className="lg:col-span-5 lg:col-start-7">
            <p className="max-w-xl text-[17px] leading-[1.7] text-body md:text-lg">
              {hero.summary}
            </p>
            <div className="mt-8">
              <LinkButton href={hero.cta.href}>{hero.cta.label}</LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="operating-model"
        spacing="generous"
        aria-labelledby="operating-model-heading"
        className="bg-surface-alt"
      >
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
            <h2
              id="operating-model-heading"
              className="font-serif text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.018em] text-heading"
            >
              {model.heading}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-body md:text-base">
              {model.description}
            </p>
            <div className="mt-9 flex items-center gap-4 text-sm font-semibold text-accent-azure" aria-hidden="true">
              <span className="h-px w-12 bg-accent-azure" />
              Direction with return paths
            </div>
          </div>
          <div className="lg:col-span-8">
            <OperatingTrace phases={model.phases} />
          </div>
        </div>
      </Section>

      <Section
        spacing="generous"
        aria-labelledby="evidence-heading"
        className="border-y border-hairline-faint bg-surface"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              id="evidence-heading"
              className="max-w-[14ch] font-serif text-[clamp(2.4rem,5vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-heading"
            >
              {evidence.heading}
            </h2>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.75] text-body md:text-base">
              {evidence.description}
            </p>
          </div>
          <ol className="grid grid-cols-2 gap-x-7 gap-y-9 border-t border-hairline pt-7 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-2">
            {evidence.items.map((item, index) => (
              <li key={item.title} className={index === evidence.items.length - 1 ? "col-span-2 sm:col-span-1 lg:col-span-2" : ""}>
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-[1.7] text-body">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="collaboration-heading" className="bg-surface-alt">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="collaboration-heading" className="text-h2 max-w-lg text-heading">
              {collaboration.heading}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-body md:text-base">
              {collaboration.description}
            </p>
          </div>
          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {collaboration.moments.map((moment, index) => (
              <li key={moment.title} className="border-l border-hairline pl-5">
                <span className="font-mono text-xs text-brand-maroon">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold text-heading">{moment.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-body">{moment.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        spacing="generous"
        aria-labelledby="disciplines-heading"
        className="border-t border-hairline-faint bg-surface"
      >
        <div className="max-w-2xl">
          <h2 id="disciplines-heading" className="text-h2 text-heading">
            {disciplines.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-body md:text-base">
            {disciplines.description}
          </p>
        </div>
        <div className="mt-12 border-t border-hairline">
          {disciplines.items.map((item) => (
            <article
              key={item.title}
              className="grid gap-3 border-b border-hairline py-7 md:grid-cols-12 md:gap-8 md:py-9"
            >
              <h3 className="text-lg font-semibold text-heading md:col-span-3">{item.title}</h3>
              <p className="text-sm font-semibold leading-[1.65] text-brand-maroon md:col-span-3">{item.focus}</p>
              <p className="text-[15px] leading-[1.7] text-body md:col-span-6">{item.work}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="process-faq-heading" className="bg-surface-alt">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <h2 id="process-faq-heading" className="text-h2 text-heading">
              Questions about the process
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-body">
              The method is consistent. The plan is shaped around the work in front of us.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ProcessFAQ items={faq} />
          </div>
        </div>
      </Section>

      <section
        aria-labelledby="process-final-heading"
        className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24"
      >
        <div className="container-rw flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2
            id="process-final-heading"
            className="max-w-3xl font-serif text-[clamp(2rem,4.2vw,4rem)] leading-[1.06] font-semibold text-accent-foreground"
          >
            {final.heading}
          </h2>
          <LinkButton href={final.cta.href} className="shrink-0">
            {final.cta.label}
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
