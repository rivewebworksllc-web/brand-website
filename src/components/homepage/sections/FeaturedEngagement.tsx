import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

type FeaturedEngagementProps = {
  content: HomepageContent["featuredEngagement"];
};

export function FeaturedEngagement({ content }: FeaturedEngagementProps) {
  return (
    <Section aria-labelledby="featured-engagement-heading" className="bg-slate-50">
      <div className="grid grid-cols-1 gap-8 rounded-lg border border-slate-200 bg-white p-6 md:grid-cols-3 md:p-10">
        <div className="md:col-span-2">
          <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
          <h2 id="featured-engagement-heading" className="text-h2 mt-2 text-navy-950">
            {content.title}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-slate-600 md:text-base">
            {content.description}
          </p>
          <ul className="mt-5 space-y-2">
            {content.includes.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] leading-[1.65] text-slate-600">
                <span aria-hidden="true" className="text-brand-maroon">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 border-t border-slate-200 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
          <p className="text-evidence text-slate-500">
            Investment: pricing pending approval
          </p>
          <LinkButton href={content.cta.href} variant="primary">
            {content.cta.label}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
