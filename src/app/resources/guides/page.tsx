import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/media/Placeholder";
import { FeaturedResource } from "@/components/resources/FeaturedResource";
import { ResourceGrid } from "@/components/resources/ResourceGrid";
import { LinkButton } from "@/components/ui/Button";
import { guidesContent } from "@/lib/content/guides";

export const metadata: Metadata = {
  title: "Guides",
  description: "Practical guidance across websites, cloud, Microsoft, AI, automation and the systems connecting them.",
  alternates: { canonical: "/resources/guides/" },
};

export default function GuidesPage() {
  const { hero, featured, library, editorialFramework, disciplines, final } = guidesContent;
  return (
    <main id="main-content">
      <Section spacing="generous" aria-labelledby="guides-heading" className="-mt-20 bg-surface pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="guides-heading" className="text-h1 mt-5 max-w-[13ch] text-balance text-heading">{hero.heading}</h1>
            <p className="text-hero-lead mt-6 max-w-lg text-body">{hero.description}</p>
            <a href="#guide-library" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-maroon underline decoration-brand-maroon/30 underline-offset-4">Explore the guides <span aria-hidden="true">↓</span></a>
          </div>
          <Placeholder meta={hero.media} className="w-full" />
        </div>
      </Section>

      <Section spacing="generous" aria-label="Featured guide" className="border-t border-hairline-faint bg-surface-alt">
        <FeaturedResource resource={featured} />
      </Section>

      <Section id="guide-library" spacing="generous" aria-labelledby="library-heading" className="bg-surface">
        <div className="mb-10 max-w-xl">
          <h2 id="library-heading" className="text-h2 text-heading">Explore the library</h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-body">Find practical guidance by the part of the system you are trying to understand.</p>
        </div>
        <ResourceGrid resources={library} />
      </Section>

      <section aria-labelledby="field-heading" className="bg-navy-950 py-20 text-white md:py-32">
        <div className="container-rw grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(24rem,1.18fr)] lg:gap-20">
          <div>
            <p className="text-eyebrow text-brand-gold">{editorialFramework.eyebrow}</p>
            <h2 id="field-heading" className="mt-5 max-w-xl font-serif text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-white">{editorialFramework.heading}</h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-slate-200 md:text-base">{editorialFramework.description}</p>
          </div>
          <ol className="border-y border-white/15">
            {editorialFramework.steps.map((step, index) => (
              <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/15 py-5 last:border-b-0 md:grid-cols-[4rem_1fr] md:py-6">
                <span className="font-mono text-xs text-brand-gold">0{index + 1}</span>
                <span className="text-[16px] font-medium text-white md:text-lg">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="discipline-heading" className="bg-surface-alt">
        <h2 id="discipline-heading" className="text-h2 text-heading">Browse by discipline</h2>
        <nav aria-label="Guide disciplines" className="mt-12 border-y border-hairline">
          {disciplines.map((discipline, index) => (
            <a key={discipline.id} href={`#guide-library`} className="group grid min-h-24 items-center gap-4 border-b border-hairline py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(10rem,0.65fr)_minmax(0,1fr)_auto]">
              <span className="font-mono text-xs text-muted">0{index + 1}</span>
              <span className="font-serif text-2xl font-semibold text-heading">{discipline.title}</span>
              <span className="text-sm leading-[1.65] text-body">{discipline.description}</span>
              <span aria-hidden="true" className="text-brand-maroon transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
            </a>
          ))}
        </nav>
      </Section>

      <section aria-labelledby="guides-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 id="guides-final-heading" className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.75rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-accent-foreground">{final.heading}</h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-accent-foreground/80">{final.description}</p>
          </div>
          <LinkButton href={final.cta.href} className="shrink-0">{final.cta.label}</LinkButton>
        </div>
      </section>
    </main>
  );
}
