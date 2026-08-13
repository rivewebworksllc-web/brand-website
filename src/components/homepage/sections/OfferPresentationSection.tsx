import { OfferPresentation } from "@/components/homepage/OfferPresentation";
import { Section } from "@/components/layout/Section";
import type { HomepageContent } from "@/lib/content/homepage";

export function OfferPresentationSection({ content }: { content: HomepageContent["pillars"] }) {
  return (
    <Section aria-labelledby="offer-presentation-heading" className="bg-surface-alt" spacing="generous">
      <div className="max-w-3xl">
        <p className="text-eyebrow text-brand-maroon">{content.eyebrow}</p>
        <h2 id="offer-presentation-heading" className="text-h2 mt-4 max-w-[15ch] text-heading">{content.heading}</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-body">{content.description}</p>
      </div>
      <div className="mt-12"><OfferPresentation offers={content.items} /></div>
    </Section>
  );
}
