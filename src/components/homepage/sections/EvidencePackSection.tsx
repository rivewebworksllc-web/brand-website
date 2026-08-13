import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

export function EvidencePackSection({ content }: { content: HomepageContent["homepageEvidencePack"] }) {
  return (
    <section id="evidence-pack" aria-labelledby="evidence-pack-heading" className="bg-navy-950 text-white">
      <Section spacing="generous">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-brand-gold">DOCUMENTED DELIVERY</p>
            <h2 id="evidence-pack-heading" className="text-h2 mt-4 max-w-[10ch] text-white">{content.heading}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-white/72">{content.description}</p>
            <div className="mt-8"><LinkButton href={content.cta.href} variant="inverse">{content.cta.label}</LinkButton></div>
          </div>
          <ol className="border-t border-white/20 lg:col-span-8">
            {content.artifacts.map((artifact, index) => (
              <li key={artifact.id} className="grid gap-3 border-b border-white/15 py-5 sm:grid-cols-[3rem_12rem_1fr] sm:items-baseline sm:gap-5">
                <span className="text-evidence text-brand-gold">0{index + 1}</span>
                <h3 className="text-[15px] font-semibold text-white">{artifact.title}</h3>
                <p className="text-[13px] leading-[1.65] text-white/62">{artifact.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </section>
  );
}
