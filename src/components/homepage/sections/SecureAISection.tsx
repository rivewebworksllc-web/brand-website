import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import type { HomepageContent } from "@/lib/content/homepage";

type SecureAISectionProps = {
  content: HomepageContent["secureAi"];
};

export function SecureAISection({ content }: SecureAISectionProps) {
  return (
    <Section aria-labelledby="secure-ai-heading" className="bg-white">
      <SectionHeading
        id="secure-ai-heading"
        eyebrow="Governed by design"
        heading={content.heading}
        description={content.description}
      />
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {content.controls.map((control) => (
          <li key={control} className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-[15px] leading-[1.65] text-slate-600">{control}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
