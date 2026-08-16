import { LinkButton } from "@/components/ui/Button";
import type { ProjectPackage } from "@/lib/content/pricing";
import {
  AttachIcon,
  EvidenceIcon,
  IncludedIcon,
  SeparateIcon,
  TimelineIcon,
  groupIcon,
} from "@/components/pricing/PricingIcons";

/**
 * RW-PAGE-08C: package-card anatomy strengthened for perceived objecthood
 * after Product Office visual review found the field reading closer to
 * "rows/index entries" than genuine commercial objects. Still distinct from
 * every other card system on the site (not `WorkIncludes`' single-active
 * panel, not Trust's Evidence Spine, not `ManagedServiceCard`'s tier
 * ladder). Changes from RW-PAGE-08B: an oversized serial digit for per-card
 * identity (borrowing Trust boundaries' proven device, re-authored at
 * package scale), a bordered "price plate" instead of bare text, icon-led
 * pill badges for timeline/evidence, a confident bordered disclosure
 * affordance instead of a plain "+", and a subtle hover/focus lift for
 * tactile object feedback. Above-the-fold vs. behind-`<details>` split is
 * unchanged: number, name, code, price, timeline, evidence, purpose stay
 * visible; inclusions/exclusions/tier guidance/attach/add-ons stay
 * server-rendered but disclosed.
 */
export function PackageCard({ pkg }: { pkg: ProjectPackage }) {
  const GroupIcon = groupIcon[pkg.group];

  return (
    <article className="group/card relative flex flex-col border border-hairline bg-surface p-6 transition-[border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:border-brand-maroon/60 hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] md:p-7">
      <span aria-hidden="true" className="absolute top-0 left-0 h-full w-1 bg-brand-maroon" />

      <div className="flex items-start justify-between gap-4">
        {/* text-muted (not a reduced-opacity text-heading): axe flagged text-heading/25 at 2.2:1 against navy-950 in dark mode, below the 3:1 large-text minimum. text-muted is an already-audited token. */}
        <p className="font-serif text-[clamp(2.1rem,4vw,3.1rem)] leading-none font-semibold tracking-[-0.02em] text-muted">
          {String(pkg.number).padStart(2, "0")}
        </p>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-hairline bg-surface-alt text-brand-maroon"
        >
          <GroupIcon className="h-5 w-5" />
        </span>
      </div>

      <p className="mt-4 font-mono text-[11px] tracking-[0.1em] text-muted uppercase">{pkg.code}</p>
      <h3 className="text-h3 mt-1.5 max-w-sm text-heading">{pkg.name}</h3>
      <p className="mt-3 text-sm leading-[1.65] text-body">{pkg.purpose}</p>

      <div className="mt-6 flex flex-wrap items-stretch gap-3">
        {pkg.price.unresolved ? (
          <div className="border border-dashed border-hairline bg-surface-alt px-4 py-2.5">
            <p className="font-serif text-lg leading-none font-semibold text-heading">{pkg.price.display}</p>
            <p className="mt-1 max-w-[16rem] text-[11px] leading-[1.5] text-muted">{pkg.price.note}</p>
          </div>
        ) : (
          <div className="border border-hairline bg-surface-alt px-4 py-2.5">
            <p className="text-[10px] tracking-[0.08em] text-muted uppercase">From</p>
            <p className="font-serif text-[clamp(1.5rem,2.2vw,1.9rem)] leading-none font-semibold tracking-[-0.01em] text-heading">
              {pkg.price.display.replace(/^From /, "")}
            </p>
          </div>
        )}
        <dl className="flex flex-1 flex-wrap items-center gap-2 text-[11px] text-muted">
          {pkg.timeline ? (
            <div className="flex items-center gap-1.5 border border-hairline-faint bg-surface px-2.5 py-1.5">
              <TimelineIcon className="h-3.5 w-3.5 text-brand-maroon" />
              <dt className="sr-only">Timeline</dt>
              <dd>{pkg.timeline}</dd>
            </div>
          ) : null}
          {pkg.evidence ? (
            <div className="flex items-center gap-1.5 border border-hairline-faint bg-surface px-2.5 py-1.5">
              <EvidenceIcon className="h-3.5 w-3.5 text-brand-maroon" />
              <dt className="sr-only">Evidence tier</dt>
              <dd>Evidence {pkg.evidence}</dd>
            </div>
          ) : null}
        </dl>
      </div>

      {pkg.included || pkg.excluded || pkg.tierGuidance || pkg.attach || pkg.addOns || pkg.unresolvedFields ? (
        <details className="group mt-6 border-t border-hairline pt-5">
          <summary className="flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-3 border border-hairline px-4 py-2.5 text-[13px] font-semibold text-heading transition-colors duration-200 group-open:border-brand-maroon group-open:text-brand-maroon">
            <span>See scope and next step</span>
            <span aria-hidden="true" className="text-lg font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
          </summary>

          <div className="mt-4 space-y-5">
            {pkg.included || pkg.excluded ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {pkg.included ? (
                  <div>
                    <p className="text-eyebrow text-heading">Included</p>
                    <ul className="mt-3 space-y-2">
                      {pkg.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.6] text-body">
                          <IncludedIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-maroon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {pkg.excluded ? (
                  <div>
                    <p className="text-eyebrow text-muted">Separately scoped</p>
                    <ul className="mt-3 space-y-2">
                      {pkg.excluded.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.6] text-muted">
                          <SeparateIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}

            {pkg.tierGuidance ? (
              <div className="border-t border-dashed border-hairline pt-4">
                <p className="text-eyebrow text-heading">Tier guidance</p>
                <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                  {pkg.tierGuidance.map((tier) => (
                    <li key={tier.name} className="min-w-0 border border-hairline p-3">
                      <p className="text-[13px] font-semibold text-heading">{tier.name}</p>
                      {/* min-w-0 + break-words: grid-blowout fix (long unbreakable price bands like "$12,500-$18,000"). */}
                      <p className="mt-1 break-words text-[13px] text-brand-maroon">{tier.price}</p>
                      {tier.detail.length ? (
                        <ul className="mt-2 space-y-1">
                          {tier.detail.map((d) => (
                            <li key={d} className="text-xs leading-[1.5] text-muted">{d}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {pkg.attach ? (
              <div className="flex items-start gap-2 border-t border-dashed border-hairline pt-4 text-[13px] leading-[1.6] text-body">
                <AttachIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-maroon" />
                <p>
                  {pkg.attach.note ? <span className="font-semibold text-heading">{pkg.attach.note}: </span> : null}
                  {pkg.attach.options.map((o) => `${o.name} (${o.code})`).join(" or ")}
                </p>
              </div>
            ) : null}

            {pkg.addOns && pkg.addOns.length ? (
              <div className="border-t border-dashed border-hairline pt-4">
                <p className="text-eyebrow text-heading">Optional add-ons</p>
                <ul className="mt-3 space-y-1.5">
                  {pkg.addOns.map((addOn) => (
                    <li key={addOn.code} className="flex items-baseline justify-between gap-3 text-[13px] text-body">
                      <span>{addOn.name} <span className="text-muted">({addOn.code})</span></span>
                      {addOn.price ? <span className="font-mono text-xs text-muted">{addOn.price}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {pkg.unresolvedFields && pkg.unresolvedFields.length ? (
              <p className="border-t border-dashed border-hairline pt-4 text-xs leading-[1.6] text-muted">
                {pkg.unresolvedNote ?? `Not yet published for this package: ${pkg.unresolvedFields.join(", ")}. Confirmed in Paid Discovery.`}
              </p>
            ) : null}
          </div>
        </details>
      ) : null}

      {/*
        No analytics library exists anywhere in this repository (verified by
        search before implementation). Rather than fabricate a tracking
        integration or invent a new event name, the `book_discovery` event
        name required by the directive is preserved as data attributes a
        future analytics binding can read, without adding a dependency.
      */}
      <div className="mt-6" data-analytics-event="book_discovery" data-service-code={pkg.code}>
        <LinkButton href="/connect/" variant="text">
          Book Paid Discovery
        </LinkButton>
      </div>
    </article>
  );
}
