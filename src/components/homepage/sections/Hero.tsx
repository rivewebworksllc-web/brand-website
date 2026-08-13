import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

function ConnectedField({ field }: { field: HomepageContent["hero"]["field"] }) {
  return (
    <div className="relative border-y border-accent-foreground/20 py-3" aria-label="Rive capability relationship">
      <span aria-hidden="true" className="absolute top-0 bottom-0 left-14 w-px bg-accent-foreground/15 sm:left-20" />
      <ol>
        {field.map((item, index) => (
          <li key={item.title} className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-accent-foreground/10 py-6 last:border-b-0 sm:grid-cols-[5rem_1fr]">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-accent-foreground/75">0{index + 1}</span>
            <div>
              <p className="text-[clamp(1.8rem,4vw,3.4rem)] leading-none font-semibold tracking-[-0.045em] text-accent-foreground">{item.title}</p>
              <p className="mt-2 max-w-[18rem] text-[13px] leading-[1.55] text-accent-foreground/68">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Hero({ content }: { content: HomepageContent["hero"] }) {
  return (
    <Section as="section" accent aria-labelledby="hero-heading" className="-mt-20 overflow-hidden border-b border-accent-foreground/10 pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="grid gap-14 xl:grid-cols-12 xl:items-end xl:gap-20">
        <div className="xl:col-span-7">
          <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
          <h1 id="hero-heading" className="text-h1 mt-5 max-w-[13ch] text-balance font-serif font-semibold text-accent-foreground">{content.heading}</h1>
          <p className="text-hero-lead mt-7 max-w-2xl text-accent-foreground/82">{content.summary}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={content.primaryCta.href} variant="primary">{content.primaryCta.label}</LinkButton>
            <LinkButton href={content.secondaryCta.href} variant="secondary">{content.secondaryCta.label}</LinkButton>
          </div>
        </div>
        <div className="xl:col-span-5"><ConnectedField field={content.field} /></div>
      </div>
      <ul aria-label="Rive delivery authority" className="mt-16 grid grid-cols-2 border-t border-accent-foreground/15 md:grid-cols-3 xl:grid-cols-6">
        {content.trustItems.map((item) => <li key={item} className="border-b border-accent-foreground/10 py-4 pr-4 text-[12px] leading-[1.45] font-semibold text-accent-foreground/70 xl:border-b-0 xl:border-r xl:px-4 xl:first:pl-0 xl:last:border-r-0">{item}</li>)}
      </ul>
    </Section>
  );
}
