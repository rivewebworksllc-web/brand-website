import Link from "next/link";
import type { ProjectPackage } from "@/lib/content/pricing";

/**
 * RW-PAGE-P0-SOLUTIONS-01: a shared, generic presentational card for
 * listing real, already-published `pricing.ts` packages as claim-safe
 * entry points on a solution hub. Reused by both Cloud Modernization and
 * AI & Data Automation (established generic chrome, per the same
 * discipline UXR-01/FND-05 already documented for their own shared
 * relationships-row device) - not a signature moment, and every prop is
 * pulled straight from the catalog, never re-authored per page.
 */
export function EngagementCard({ pkg }: { pkg: ProjectPackage }) {
  return (
    <li className="border border-hairline bg-surface-alt p-6">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">{pkg.code}</p>
        <p className="font-serif text-[15px] font-semibold text-heading">{pkg.price.display}</p>
      </div>
      <h3 className="mt-2 text-[15px] leading-[1.4] font-semibold text-heading">{pkg.name}</h3>
      <p className="mt-2 text-[13px] leading-[1.6] text-body">{pkg.purpose}</p>
      {pkg.timeline && pkg.evidence ? (
        <dl className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-muted">
          <div>
            <dt className="uppercase">Timeline</dt>
            <dd className="mt-0.5 text-[12px] font-semibold text-heading">{pkg.timeline}</dd>
          </div>
          <div>
            <dt className="uppercase">Evidence</dt>
            <dd className="mt-0.5 text-[12px] font-semibold text-heading">{pkg.evidence}</dd>
          </div>
        </dl>
      ) : (
        <p className="mt-4 text-[11px] leading-[1.5] text-muted">
          {pkg.unresolvedNote ?? "Timeline and evidence tier confirmed in Paid Discovery."}
        </p>
      )}
      <div className="mt-5">
        <Link
          href="/pricing/"
          className="text-[13px] font-medium text-brand-maroon underline decoration-hairline underline-offset-4 hover:decoration-brand-maroon"
        >
          See full scope on Pricing
        </Link>
      </div>
    </li>
  );
}
