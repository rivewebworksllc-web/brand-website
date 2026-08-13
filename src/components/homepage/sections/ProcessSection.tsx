import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

export function ProcessSection({ content }: { content: HomepageContent["process"] }) {
  return (
    <Section aria-labelledby="process-heading" className="bg-surface" spacing="generous">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
          <h2 id="process-heading" className="text-h2 mt-4 max-w-[13ch] text-heading">{content.heading}</h2>
          <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-body">{content.description}</p>
          <div className="mt-8"><LinkButton href={content.cta.href} variant="secondary">{content.cta.label}</LinkButton></div>
        </div>
        <ol className="border-t border-hairline lg:col-span-7">
          {content.stages.map((stage) => (
            <li key={stage.step} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-hairline py-7 sm:grid-cols-[3rem_9rem_1fr] sm:items-baseline">
              <span className="text-evidence text-brand-maroon">{stage.step}</span>
              <h3 className="text-h3 text-heading">{stage.title}</h3>
              <p className="col-start-2 text-[14px] leading-[1.7] text-body sm:col-start-auto">{stage.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
