import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

export function ResourcesSection({ content }: { content: HomepageContent["resources"] }) {
  const [featured, ...rest] = content.items;
  return (
    <Section aria-labelledby="resources-heading" className="border-t border-hairline bg-surface-alt" spacing="generous">
      <div className="max-w-3xl">
        <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
        <h2 id="resources-heading" className="text-h2 mt-4 max-w-[16ch] text-heading">{content.heading}</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-body">{content.description}</p>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {featured ? <Link href={featured.href} className="group border-t-2 border-heading pt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon lg:col-span-7"><p className="text-[11px] font-semibold tracking-[0.12em] text-brand-maroon uppercase">{featured.category}</p><h3 className="text-h2 mt-5 max-w-[13ch] text-heading">{featured.title}</h3><p className="mt-5 max-w-lg text-[14px] leading-[1.7] text-body">{featured.summary}</p><span className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-maroon">Read guide <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span></span></Link> : null}
        <div className="border-t border-hairline lg:col-span-5">
          {rest.map((item) => <Link key={item.href} href={item.href} className="group block border-b border-hairline py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"><p className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{item.category}</p><h3 className="mt-3 text-[17px] leading-[1.35] font-semibold text-heading">{item.title}</h3><p className="mt-3 text-[13px] leading-[1.65] text-body">{item.summary}</p></Link>)}
        </div>
      </div>
      <div className="mt-10"><LinkButton href={content.cta.href} variant="text">{content.cta.label}</LinkButton></div>
    </Section>
  );
}
