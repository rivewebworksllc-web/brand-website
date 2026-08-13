import type { Metadata } from "next";
import { ConnectedDisciplines } from "@/components/about/ConnectedDisciplines";
import { CompanyPaths } from "@/components/about/CompanyPaths";
import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/media/Placeholder";
import { LinkButton } from "@/components/ui/Button";
import { aboutContent } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About",
  description: "How Rive connects experience, infrastructure, intelligence, automation and operation as one accountable organisation.",
  alternates: { canonical: "/company/about/" },
};

export default function AboutPage() {
  const { hero, definition, boundaries, principles, responsibility, human, relationship, evidence, paths, final } = aboutContent;

  return (
    <main id="main-content">
      <Section spacing="generous" aria-labelledby="about-heading" className="-mt-20 border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="about-heading" className="text-h1 mt-5 max-w-[13ch] text-heading">{hero.heading}</h1>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-hero-lead max-w-md text-body">{hero.description}</p>
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-12 md:items-end">
          <p className="max-w-xs border-t border-hairline pt-4 text-sm leading-[1.7] text-muted md:col-span-3">One organisation connecting the visible experience to what keeps it useful.</p>
          <div className="md:col-span-8 md:col-start-5"><Placeholder meta={hero.media} className="w-full" /></div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="definition-heading" className="bg-surface-alt">
        <h2 id="definition-heading" className="text-h2 max-w-2xl text-heading">{definition.heading}</h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-body md:text-base">{definition.description}</p>
        <ConnectedDisciplines disciplines={definition.disciplines} media={definition.media} />
      </Section>

      <Section spacing="generous" aria-labelledby="boundaries-heading" className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="boundaries-heading" className="max-w-[15ch] font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.04] font-semibold text-heading">{boundaries.heading}</h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-body">{boundaries.description}</p>
          </div>
          <ol className="border-y border-hairline lg:col-span-6 lg:col-start-7">
            {boundaries.layers.map((layer, index) => (
              <li key={layer.title} className="grid gap-2 border-b border-hairline py-5 last:border-b-0 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-baseline">
                <span className="font-mono text-xs text-brand-maroon">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-[16px] font-semibold text-heading">{layer.title}</h3>
                <p className="text-sm leading-[1.65] text-body">{layer.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="principles-heading" className="border-t border-hairline-faint bg-surface-alt">
        <h2 id="principles-heading" className="text-h2 text-heading">Principles that shape the work.</h2>
        <ol className="mt-12 grid border-t border-hairline md:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.title} className={`border-b border-hairline py-8 md:p-9 ${index % 2 === 0 ? "md:border-r" : ""}`}>
              <span className="font-mono text-xs text-brand-maroon">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-heading md:text-3xl">{principle.title}</h3>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-body">{principle.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section aria-labelledby="responsibility-heading" className="border-y border-brand-gold/20 bg-[#07101f] py-20 text-white md:py-32">
        <div className="container-rw grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-end lg:gap-20">
          <div>
            <p className="text-eyebrow text-brand-gold">How we think</p>
            <h2 id="responsibility-heading" className="mt-5 max-w-[14ch] font-serif text-[clamp(2.4rem,5vw,4.7rem)] leading-[1.02] font-semibold text-white">{responsibility.heading}</h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-slate-200 md:text-base">{responsibility.description}</p>
          </div>
          <ul className="border-y border-white/15">
            {responsibility.items.map((item, index) => <li key={item} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-white/15 py-5 last:border-b-0"><span className="font-mono text-xs text-brand-gold">0{index + 1}</span><span className="text-[16px] font-medium text-white">{item}</span></li>)}
          </ul>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="human-heading" className="bg-surface-alt">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7"><Placeholder meta={human.media} className="w-full" /></div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 id="human-heading" className="max-w-[13ch] font-serif text-[clamp(2.25rem,4vw,3.8rem)] leading-[1.05] font-semibold text-heading">{human.heading}</h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-body">{human.description}</p>
            <p className="mt-7 border-t border-hairline pt-5 text-sm leading-[1.7] text-muted">{human.note}</p>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="relationship-heading" className="bg-surface">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="relationship-heading" className="text-h2 max-w-lg text-heading">{relationship.heading}</h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-body">{relationship.description}</p>
          </div>
          <ol className="border-t border-hairline lg:col-span-6 lg:col-start-7">
            {relationship.expectations.map((item, index) => <li key={item.title} className="grid gap-3 border-b border-hairline py-6 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-xs text-brand-maroon">0{index + 1}</span><div><h3 className="text-lg font-semibold text-heading">{item.title}</h3><p className="mt-2 text-sm leading-[1.7] text-body">{item.detail}</p></div></li>)}
          </ol>
        </div>
        <div className="mt-20 border-t border-hairline pt-10 md:grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5"><h2 className="text-h2 text-heading">{evidence.heading}</h2><p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-body">{evidence.description}</p></div>
          <ul className="mt-8 grid grid-cols-2 border-y border-hairline md:col-span-6 md:col-start-7 md:mt-0 md:grid-cols-3">
            {evidence.items.map((item, index) => <li key={item} className="min-h-24 border-r border-b border-hairline p-4 last:border-r-0"><span className="font-mono text-xs text-muted">0{index + 1}</span><p className="mt-3 text-sm font-semibold text-heading">{item}</p></li>)}
          </ul>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="company-paths-heading" className="border-t border-hairline-faint bg-surface-alt">
        <h2 id="company-paths-heading" className="text-h2 text-heading">Continue through Company.</h2>
        <CompanyPaths paths={paths} />
      </Section>

      <section aria-labelledby="about-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 id="about-final-heading" className="max-w-3xl font-serif text-[clamp(2rem,4.2vw,4rem)] leading-[1.06] font-semibold text-accent-foreground">{final.heading}</h2>
          <LinkButton href={final.cta.href} className="shrink-0">{final.cta.label}</LinkButton>
        </div>
      </section>
    </main>
  );
}
