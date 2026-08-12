import type { Metadata } from "next";
import { AnalysisLens } from "@/components/insights/AnalysisLens";
import { InsightStream } from "@/components/insights/InsightStream";
import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/media/Placeholder";
import { ResourceMeta } from "@/components/resources/ResourceMeta";
import { LinkButton } from "@/components/ui/Button";
import { insightsContent } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Rive perspectives on web, cloud, Microsoft, AI, automation and the decisions connecting them.",
  alternates: { canonical: "/resources/insights/" },
};

export default function InsightsPage() {
  const { masthead, lead, latest, lens, signal, archive, final } = insightsContent;
  return (
    <main id="main-content">
      <Section spacing="generous" aria-labelledby="insights-heading" className="-mt-20 border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-eyebrow text-brand-maroon">{masthead.eyebrow}</p>
            <h1 id="insights-heading" className="mt-5 max-w-[14ch] font-serif text-[clamp(2.75rem,6.2vw,5.75rem)] leading-[0.98] font-semibold tracking-[-0.025em] text-heading">{masthead.heading}</h1>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.75] text-body md:text-base">{masthead.description}</p>
          </div>
          <nav aria-label="Current insight themes" className="border-t border-hairline pt-5 lg:col-span-3 lg:col-start-10">
            <p className="mb-4 text-sm font-semibold text-heading">Current themes</p>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted lg:grid-cols-1">
              {masthead.themes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
          </nav>
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="lead-insight-heading" className="bg-surface-alt">
        <article className="grid overflow-hidden rounded-lg border border-hairline bg-surface lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.75fr)]">
          <Placeholder meta={lead.media!} className="h-full min-h-80 w-full rounded-none border-0" />
          <div className="flex flex-col justify-end p-7 md:p-10 lg:p-12">
            <ResourceMeta resource={lead} />
            <h2 id="lead-insight-heading" className="mt-5 font-serif text-[clamp(2rem,3.7vw,3.75rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-heading">{lead.title}</h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-body">{lead.excerpt}</p>
            <p className="mt-7 border-t border-hairline pt-5 text-sm leading-[1.7] text-muted">{lead.perspective}</p>
            <p className="mt-5 text-xs font-medium text-muted">Publication route pending editorial approval</p>
          </div>
        </article>
      </Section>

      <Section spacing="generous" aria-labelledby="latest-thinking-heading" className="bg-surface">
        <h2 id="latest-thinking-heading" className="text-h2 text-heading">Latest thinking</h2>
        <div className="mt-12 grid gap-x-10 gap-y-0 lg:grid-cols-12">
          {latest.slice(0, 4).map((item, index) => (
            <article key={item.id} className={`${index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"} border-t border-hairline py-8`}>
              <ResourceMeta resource={item} />
              <h3 className={`${index === 0 ? "max-w-[18ch] text-[clamp(2rem,4vw,3.5rem)]" : "max-w-[22ch] text-[26px]"} mt-5 font-serif leading-[1.08] font-semibold text-heading`}>{item.title}</h3>
              <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-body">{item.excerpt}</p>
              <p className="mt-6 max-w-lg text-sm leading-[1.7] text-muted">{item.perspective}</p>
            </article>
          ))}
        </div>
      </Section>

      <section aria-labelledby="analysis-lens-heading" className="border-y border-brand-gold/20 bg-[#07101f] py-20 text-white md:py-32">
        <div className="container-rw">
          <h2 id="analysis-lens-heading" className="max-w-3xl font-serif text-[clamp(2.3rem,5vw,4.6rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-white">{lens.heading}</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-slate-200 md:text-base">{lens.description}</p>
          <AnalysisLens stages={lens.stages} />
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="topic-stream-heading" className="bg-surface-alt">
        <h2 id="topic-stream-heading" className="text-h2 text-heading">Browse by perspective</h2>
        <p className="mt-4 mb-10 max-w-xl text-[15px] leading-[1.7] text-body">Follow the questions Rive is examining across connected systems.</p>
        <InsightStream insights={latest} />
      </Section>

      <Section spacing="generous" aria-labelledby="signal-heading" className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5"><h2 id="signal-heading" className="max-w-[16ch] font-serif text-[clamp(2.25rem,4.4vw,4rem)] leading-[1.04] font-semibold text-heading">{signal.heading}</h2><p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-body">{signal.description}</p></div>
          <div className="lg:col-span-6 lg:col-start-7"><Placeholder meta={signal.media} className="w-full" /></div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {signal.comparisons.map((item) => <div key={item.surface} className="border-t border-hairline pt-5"><p className="text-sm text-muted">{item.surface}</p><p className="mt-4 font-serif text-2xl font-semibold leading-tight text-heading">{item.consequence}</p></div>)}
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="archive-heading" className="border-t border-hairline-faint bg-surface-alt">
        <div className="max-w-2xl"><h2 id="archive-heading" className="text-h2 text-heading">{archive.heading}</h2><p className="mt-4 text-[15px] leading-[1.7] text-body">{archive.description}</p></div>
        <div className="mt-10 border-t border-hairline">
          {latest.map((item) => <article key={`archive-${item.id}`} className="grid gap-3 border-b border-hairline py-6 md:grid-cols-[10rem_minmax(0,1fr)_12rem]"><p className="text-sm text-muted">{item.category.replace("-", " & ")}</p><h3 className="font-serif text-xl font-semibold text-heading">{item.title}</h3><p className="text-sm text-muted md:text-right">Editorial review</p></article>)}
        </div>
      </Section>

      <section aria-labelledby="insights-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div><h2 id="insights-final-heading" className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.75rem)] leading-[1.06] font-semibold text-accent-foreground">{final.heading}</h2><p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-accent-foreground/80">{final.description}</p></div>
          <LinkButton href={final.cta.href} className="shrink-0">{final.cta.label}</LinkButton>
        </div>
      </section>
    </main>
  );
}
