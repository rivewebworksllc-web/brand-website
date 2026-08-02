import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { GovernedAIFlow } from "@/components/homepage/GovernedAIFlow";
import type { HomepageContent } from "@/lib/content/homepage";

type GovernedAISectionProps = {
  content: HomepageContent["governedAi"];
};

export function GovernedAISection({ content }: GovernedAISectionProps) {
  return (
    <Section aria-labelledby="governed-ai-heading" className="border-t border-hairline-faint bg-surface">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
          <h2 id="governed-ai-heading" className="text-h2 mt-2 text-heading text-balance">
            {content.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-body md:text-base">
            {content.description}
          </p>
          <div className="mt-6">
            <LinkButton href={content.cta.href} variant="primary">
              {content.cta.label}
            </LinkButton>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-hairline-faint">
            {content.capabilities.map((capability, index) => (
              <li key={capability.title} className="flex gap-4 py-4 first:pt-0">
                <span aria-hidden="true" className="text-evidence w-6 shrink-0 text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-heading">{capability.title}</p>
                  <p className="mt-1 text-[14px] leading-[1.6] text-body">
                    {capability.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <GovernedAIFlow steps={content.flow} />
          </div>
        </div>
      </div>
    </Section>
  );
}
