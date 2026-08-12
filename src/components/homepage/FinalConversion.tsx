import { LinkButton } from "@/components/ui/Button";
import type { FinalConversionContent } from "@/lib/content/homepage";
import { isAvailableHref } from "@/lib/public-routes";

export function FinalConversion({
  heading,
  description,
  primaryCta,
  secondaryCta,
  reassurance,
}: FinalConversionContent) {
  const hasPrimary = isAvailableHref(primaryCta.href);
  const hasSecondary = isAvailableHref(secondaryCta.href);
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
      {hasPrimary || hasSecondary ? <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {/* RW-PW07B (Product Office calibration): the one place on the site
            that gets the reference recording's "accent disc behind the
            arrow" treatment — reserved for this single highest-intent CTA,
            not applied to the general Button system, so it stays a
            deliberate signature moment rather than a repeated novelty.
            2026-08-06 fix: the disc was on the button's left edge (`left-0`)
            with the arrow on the right — a stray circle disconnected from
            the arrow it was meant to sit behind, not the intended
            treatment. Moved to `right-0`, behind the arrow. */}
        {hasPrimary ? <span className="group relative inline-flex w-full sm:w-auto">
          <span
            aria-hidden="true"
            className="absolute top-1/2 right-0 z-0 h-11 w-11 translate-x-1/3 -translate-y-1/2 rounded-full bg-surface shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none"
          />
          <LinkButton href={primaryCta.href} variant="primary" className="relative z-10 w-full sm:w-auto">
            {primaryCta.label}
          </LinkButton>
        </span> : null}
        {hasSecondary ? <LinkButton href={secondaryCta.href} variant="inverse" className="w-full sm:w-auto">
          {secondaryCta.label}
        </LinkButton> : null}
      </div> : null}
      <p className="text-evidence mx-auto mt-8 max-w-md text-accent-foreground/70">{reassurance}</p>
    </div>
  );
}
