import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { GovernedAIFlow } from "@/components/homepage/GovernedAIFlow";
import type { HomepageContent } from "@/lib/content/homepage";

type SecureAISectionProps = {
  content: HomepageContent["governedAi"];
};

export function SecureAISection({ content }: SecureAISectionProps) {
  return (
    <Section aria-labelledby="secure-ai-heading" className="border-t border-hairline-faint bg-surface">
      <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
      <h2 id="secure-ai-heading" className="text-h2 mt-2 max-w-2xl text-heading">
        {content.heading}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-body md:text-base">
        {content.description}
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {content.capabilities.map((capability, index) => (
          <li key={capability.title} className="card p-6">
            <span className="text-evidence text-brand-maroon">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-h3 mt-2 text-heading">{capability.title}</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-body">
              {capability.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <GovernedAIFlow steps={content.flow} />
      </div>

      <div className="mt-8">
        <LinkButton href={content.cta.href} variant="primary">
          {content.cta.label}
        </LinkButton>
      </div>
    </Section>
  );
}
