import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

export function SelectedCapabilitiesSection({ content }: { content: HomepageContent["capabilities"] }) {
  return (
    <Section aria-labelledby="selected-capabilities-heading" className="bg-surface" spacing="generous">
      <div className="max-w-3xl">
        <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
        <h2 id="selected-capabilities-heading" className="text-h2 mt-4 max-w-[14ch] text-heading">{content.heading}</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-body">{content.description}</p>
      </div>
      <ol className="mt-12 grid border-t border-hairline md:grid-cols-2">
        {content.items.map((item, index) => (
          <li key={item.title} className={`grid grid-cols-[2.5rem_1fr] gap-4 border-b border-hairline py-6 md:px-7 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
            <span className="text-evidence text-brand-maroon">0{index + 1}</span>
            <div><h3 className="text-[15px] font-semibold text-heading">{item.title}</h3><p className="mt-2 max-w-md text-[13px] leading-[1.65] text-body">{item.description}</p></div>
          </li>
        ))}
      </ol>
      <div className="mt-8"><LinkButton href={content.cta.href} variant="text">{content.cta.label}</LinkButton></div>
    </Section>
  );
}
