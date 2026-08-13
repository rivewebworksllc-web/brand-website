import Link from "next/link";
import { Section } from "@/components/layout/Section";
import type { BuyerPath, HomepageContent } from "@/lib/content/homepage";

export function BuyerPathGrid({ intro, paths }: { intro: HomepageContent["buyerPathsIntro"]; paths: BuyerPath[] }) {
  return (
    <Section aria-labelledby="buyer-paths-heading" className="bg-surface" spacing="generous">
      <div className="max-w-3xl">
        <p className="text-eyebrow text-brand-maroon">{intro.eyebrow}</p>
        <h2 id="buyer-paths-heading" className="text-h2 mt-4 max-w-[14ch] text-heading">{intro.heading}</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-body">{intro.description}</p>
      </div>
      <ol className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
        {paths.map((path, index) => (
          <li key={path.title} className="bg-surface-alt">
            <Link href={path.cta.href} className="group flex min-h-[22rem] h-full flex-col p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-maroon md:p-8">
              <span className="text-evidence text-brand-maroon">0{index + 1}</span>
              <h3 className="text-h3 mt-5 max-w-[12ch] text-heading">{path.title}</h3>
              <p className="mt-5 text-[14px] leading-[1.65] text-body">{path.problem}</p>
              <div className="mt-auto pt-8">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">Likely first move</p>
                <p className="mt-2 text-[13px] leading-[1.5] font-semibold text-heading">{path.startingEngagements.join(" / ")}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-maroon">{path.cta.label}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span></span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
