import { LinkButton } from "@/components/ui/Button";

type FinalCTAProps = {
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function FinalCTA({ heading, description, primaryCta, secondaryCta }: FinalCTAProps) {
  return (
    <div className="text-center">
      <span
        aria-hidden="true"
        className="mx-auto block h-1 w-12 rounded-full bg-brand-gold"
      />
      <h2 className="text-h2 mt-6 text-white">{heading}</h2>
      <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-white/80 md:text-base">
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
    </div>
  );
}
