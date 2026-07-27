import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

type FeaturedEngagementProps = {
  content: HomepageContent["featuredEngagement"];
};

export function FeaturedEngagement({ content }: FeaturedEngagementProps) {
  return (
    <Section aria-labelledby="featured-engagement-heading" className="border-t border-slate-100 bg-slate-50">
      <div className="card relative overflow-hidden p-7 md:p-10">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-gold-deep" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
            <h2 id="featured-engagement-heading" className="text-h2 mt-2 text-navy-950">
              {content.title}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-slate-700 md:text-base">
              {content.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {content.includes.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-[1.65] text-slate-700">
                  <span aria-hidden="true" className="mt-0.5 text-brand-maroon">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center gap-3 border-t border-slate-200 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            <p className="text-evidence text-slate-600">
              Investment: pricing pending approval
            </p>
            <LinkButton href={content.cta.href} variant="primary">
              {content.cta.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
