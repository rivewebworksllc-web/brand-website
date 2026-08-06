import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { HomepageContent } from "@/lib/content/homepage";

type FeaturedEngagementProps = {
  content: HomepageContent["featuredEngagement"];
};

/**
 * RW-PW05: the right-column mock browser window (traffic-light dots + fake
 * content bars) was a div-based fake screenshot — flagged by both
 * design-taste-frontend and Human Design Review as the #1 AI-slop tell. It
 * has been replaced with a real-content evidence ledger built from the
 * approved `outcomes` list (no invented data), laid out as a full-width
 * grid below the intro rather than a side card — a distinct layout family
 * from the left-text/right-detail split repeated by GovernedAISection and
 * IndustryFitSection.
 */
export function FeaturedEngagement({ content }: FeaturedEngagementProps) {
  return (
    <Section aria-labelledby="featured-engagement-heading" className="border-t border-hairline-faint bg-surface">
      <div className="card relative overflow-hidden p-7 md:p-10">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-gold-deep" />

        <div className="max-w-2xl">
          <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
          <h2 id="featured-engagement-heading" className="text-h2 mt-2 text-heading">
            {content.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
            {content.description}
          </p>

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

        <Reveal className="mt-10 md:mt-12">
          <p className="text-[13px] font-semibold text-heading">Included in this engagement</p>
          <ol className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.outcomes.map((item, index) => (
              <li key={item} className="border-t border-hairline pt-3">
                <span className="text-evidence text-brand-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-[14px] leading-[1.45] font-medium text-heading">{item}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
