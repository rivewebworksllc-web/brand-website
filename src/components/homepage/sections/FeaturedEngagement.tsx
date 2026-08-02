import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

type FeaturedEngagementProps = {
  content: HomepageContent["featuredEngagement"];
};

export function FeaturedEngagement({ content }: FeaturedEngagementProps) {
  return (
    <Section aria-labelledby="featured-engagement-heading" className="border-t border-hairline-faint bg-surface">
      <div className="card relative overflow-hidden p-7 md:p-10">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-gold-deep" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
            <h2 id="featured-engagement-heading" className="text-h2 mt-2 text-heading">
              {content.heading}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
              {content.description}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {content.outcomes.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] leading-[1.6] text-body">
                  <span aria-hidden="true" className="mt-0.5 text-brand-maroon">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton href={content.primaryCta.href} variant="primary">
                {content.primaryCta.label}
              </LinkButton>
              <a
                href={content.secondaryCta.href}
                className="text-[15px] font-medium text-brand-maroon underline-offset-4 hover:underline"
              >
                {content.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2" aria-hidden="true">
            <div className="overflow-hidden rounded-lg border border-hairline bg-surface shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-hairline bg-surface-alt px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="ml-2 h-2 w-24 rounded-full bg-hairline" />
              </div>
              <div className="space-y-3 p-4">
                <div className="h-16 rounded-sm bg-gradient-to-br from-navy-950 to-navy-950/80" />
                <div className="h-2.5 w-3/4 rounded-full bg-hairline" />
                <div className="h-2.5 w-1/2 rounded-full bg-hairline" />
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="h-10 rounded-sm bg-surface-alt" />
                  <div className="h-10 rounded-sm bg-surface-alt" />
                  <div className="h-10 rounded-sm bg-surface-alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
