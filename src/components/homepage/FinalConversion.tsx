import { LinkButton } from "@/components/ui/Button";
import type { HomepageContent } from "@/lib/content/homepage";

export function FinalConversion({ eyebrow, heading, description, primaryCta, secondaryCta, reassurance }: HomepageContent["finalConversion"]) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <p className="text-eyebrow text-brand-maroon">{eyebrow}</p>
        <h2 id="final-conversion-heading" className="text-h2 mt-4 max-w-[15ch] text-accent-foreground">{heading}</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-accent-foreground/78">{description}</p>
      </div>
      <div className="lg:col-span-4 lg:justify-self-end">
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <LinkButton href={primaryCta.href} variant="primary">{primaryCta.label}</LinkButton>
          <LinkButton href={secondaryCta.href} variant="secondary">{secondaryCta.label}</LinkButton>
        </div>
        <p className="text-evidence mt-6 max-w-sm text-accent-foreground/65">{reassurance}</p>
      </div>
    </div>
  );
}
