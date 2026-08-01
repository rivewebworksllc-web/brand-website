import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/homepage/SectionHeading";
import type { HomepageContent } from "@/lib/content/homepage";

type SecureAISectionProps = {
  content: HomepageContent["secureAi"];
};

export function SecureAISection({ content }: SecureAISectionProps) {
  return (
    <Section aria-labelledby="secure-ai-heading" className="border-t border-slate-100 bg-white">
      <SectionHeading
        id="secure-ai-heading"
        eyebrow="Governed by design"
        heading={content.heading}
        description={content.description}
      />
      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {content.controls.map((control, index) => (
          <li key={control} className="card p-6">
            <span className="text-evidence text-brand-maroon">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-[15px] leading-[1.65] text-slate-700">{control}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
