import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/media/Placeholder";
import { LinkButton } from "@/components/ui/Button";
import { BehindTheScreen } from "@/components/work/BehindTheScreen";
import { EngagementRelationship } from "@/components/work/EngagementRelationship";
import { WorkFAQ } from "@/components/work/WorkFAQ";
import { WorkIncludes } from "@/components/work/WorkIncludes";
import { workContent } from "@/lib/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "See how Rive connects digital experience, cloud, intelligence, delivery and evidence as one accountable system.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  const { hero, includes, system, selected, artefacts, relationship, faq, final } = workContent;

  return (
    <main id="main-content">
      <Section spacing="generous" aria-labelledby="work-hero-heading" className="-mt-20 bg-surface pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="work-hero-heading" className="text-h1 mt-5 max-w-[12ch] text-balance text-heading">{hero.heading}</h1>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.7] text-body md:text-base">{hero.summary}</p>
            <div className="mt-8"><LinkButton href={hero.cta.href}>{hero.cta.label}</LinkButton></div>
          </div>
          <Placeholder meta={{ ...hero.visual, motion: "none" }} className="w-full" />
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="work-includes-heading" className="border-t border-hairline-faint bg-surface-alt">
        <h2 id="work-includes-heading" className="text-h2 max-w-lg text-heading">What the work can include</h2>
        <p className="mt-4 mb-12 max-w-xl text-[15px] leading-[1.7] text-body md:text-base">Responsibility follows the problem. An engagement can connect several layers without turning them into separate vendor handoffs.</p>
        <WorkIncludes items={includes} />
      </Section>

      <section aria-labelledby="behind-screen-heading" className="bg-navy-950 py-20 text-white md:py-32">
        <div className="container-rw">
          <p className="text-eyebrow text-brand-gold">Behind the screen</p>
          <h2 id="behind-screen-heading" className="mt-5 max-w-2xl font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.03] font-semibold tracking-[-0.02em] text-white">{system.heading}</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-slate-200 md:text-base">{system.description}</p>
          <BehindTheScreen layers={system.layers} />
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="selected-work-heading" className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><Placeholder meta={{ ...selected.visual, motion: "none" }} className="w-full" /></div>
          <div className="lg:col-span-4 lg:pb-3">
            <h2 id="selected-work-heading" className="text-h2 text-heading">{selected.heading}</h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-body md:text-base">{selected.description}</p>
            <p className="mt-7 border-t border-hairline pt-4 font-mono text-xs leading-relaxed text-muted">PUBLICATION STATE / EVIDENCE REVIEW</p>
          </div>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="artefacts-heading" className="border-t border-hairline-faint bg-surface-alt">
        <h2 id="artefacts-heading" className="text-h2 max-w-2xl text-heading">{artefacts.heading}</h2>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-body md:text-base">{artefacts.description}</p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
          {artefacts.items.map((item, index) => (
            <div key={item.meta.id} className={index === 0 ? "md:col-span-5 md:row-span-2" : index === 1 ? "md:col-span-4" : index === 2 ? "md:col-span-3" : index === 3 ? "md:col-span-3" : "md:col-span-4"}>
              <figure className="group relative h-full overflow-hidden rounded-lg border border-hairline bg-surface">
                <Placeholder meta={{ ...item.meta, motion: "none" }} className="h-full min-h-56 w-full rounded-none border-0" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-surface/95 px-4 py-3 text-sm font-semibold text-heading backdrop-blur-sm">{item.title}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="relationship-heading" className="bg-surface-alt">
        <div className="max-w-2xl">
          <h2 id="relationship-heading" className="text-h2 text-heading">{relationship.heading}</h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-body md:text-base">{relationship.description}</p>
        </div>
        <EngagementRelationship stages={relationship.stages} />
      </Section>

      <Section spacing="generous" aria-labelledby="work-faq-heading" className="border-t border-hairline-faint bg-surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div><h2 id="work-faq-heading" className="text-h2 text-heading">Frequently asked questions</h2><p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-body">A practical starting point for understanding how an engagement can take shape.</p></div>
          <WorkFAQ items={faq} />
        </div>
      </Section>

      <section aria-labelledby="work-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 id="work-final-heading" className="max-w-3xl font-serif text-[clamp(2rem,4.2vw,4rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-accent-foreground">{final.heading}</h2>
          <LinkButton href={final.cta.href} variant="primary" className="shrink-0">{final.cta.label}</LinkButton>
        </div>
      </section>
    </main>
  );
}
