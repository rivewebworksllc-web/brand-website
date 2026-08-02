import { LinkButton } from "@/components/ui/Button";
import type { FinalConversionContent } from "@/lib/content/homepage";

export function FinalConversion({
  heading,
  description,
  primaryCta,
  secondaryCta,
  reassurance,
}: FinalConversionContent) {
  return (
    <div
      className="rounded-lg p-10 text-center md:p-16"
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent-surface) 0%, var(--color-accent-surface) 60%, var(--color-gold-deep) 150%)",
      }}
    >
      <span aria-hidden="true" className="mx-auto block h-1 w-12 rounded-full bg-brand-maroon" />
      <h2 id="final-conversion-heading" className="text-h2 mt-6 text-accent-foreground">
        {heading}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-accent-foreground/80 md:text-base">
        {description}
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <LinkButton href={primaryCta.href} variant="primary" className="w-full sm:w-auto">
          {primaryCta.label}
        </LinkButton>
        <LinkButton href={secondaryCta.href} variant="outline" className="w-full sm:w-auto">
          {secondaryCta.label}
        </LinkButton>
      </div>
      <p className="text-evidence mx-auto mt-8 max-w-md text-accent-foreground/70">{reassurance}</p>
    </div>
  );
}
