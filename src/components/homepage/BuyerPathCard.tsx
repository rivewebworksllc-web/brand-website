import Link from "next/link";
import type { BuyerPath } from "@/lib/content/homepage";

type BuyerPathCardProps = BuyerPath & {
  /** Alternates card rhythm so the row doesn't read as four identical tiles. */
  offset?: boolean;
};

export function BuyerPathCard({
  title,
  problem,
  outcome,
  startingEngagements,
  cta,
  offset = false,
}: BuyerPathCardProps) {
  return (
    <div className={`card relative flex h-full flex-col overflow-hidden p-6 ${offset ? "lg:mt-6" : ""}`}>
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gold-deep" />
      <h3 className="text-h3 text-heading">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.6] text-body">
        <span className="font-semibold text-heading">If: </span>
        {problem}
      </p>
      <p className="mt-2 text-[14px] leading-[1.6] text-body">
        <span className="font-semibold text-heading">Then: </span>
        {outcome}
      </p>

      <ol
        aria-label="Typical route"
        className="text-evidence mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-muted"
      >
        <li>Need</li>
        <li aria-hidden="true">→</li>
        <li>{startingEngagements[0]}</li>
        {startingEngagements.length > 1 ? (
          <>
            <li aria-hidden="true">→</li>
            <li>{startingEngagements[1]}</li>
          </>
        ) : null}
        <li aria-hidden="true">→</li>
        <li>Managed outcome</li>
      </ol>

      <div className="mt-5 flex-1" />

      <Link
        href={cta.href}
        className="group inline-flex items-center gap-1 text-[15px] font-semibold text-brand-maroon underline-offset-4 hover:underline"
      >
        {cta.label}
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none">
          →
        </span>
      </Link>
    </div>
  );
}
