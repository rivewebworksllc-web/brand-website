import { managedServiceTermNote, managedServices, type ManagedService } from "@/lib/content/pricing";
import { EvidenceIcon, IncludedIcon, SeparateIcon, managedServiceIcon, ContinuityIcon } from "@/components/pricing/PricingIcons";

/**
 * RW-PAGE-08D: Managed Services card, redesigned for information hierarchy
 * after Product Office review found the RW-PAGE-08B/C version technically
 * complete but too dense: tier prices, recurring scope, exclusions, evidence,
 * support windows and operational notes were all visible at once, reading as
 * an internal pricing matrix rather than a commercial object. The fix is
 * NOT a card-format change (cards remain appropriate, per the directive) -
 * it is a default-state/detail-state split:
 *
 * Default state answers "what is this, who is it for, what does it cost,
 * what do I get" (identity -> tier/price object -> key recurring scope).
 * Everything comparison-grade (full tier-by-tier support/evidence, scope
 * boundaries, operational notes) moves behind one native `<details>`
 * ("Compare service levels"), matching the disclosure language already
 * established by `PackageCard`. This keeps the register split from
 * RW-PAGE-08B intact (tier ladder instead of a single price, recurring
 * themes instead of included/excluded) while addressing the density
 * complaint directly.
 */

const RECURRING_VISIBLE_LIMIT = 6;

/**
 * The three services' `supportByTier` strings are already internally
 * structured ("Business-hours support. Monitoring: uptime. ..."). Splitting
 * on ". " turns that existing punctuation into list items without
 * rewriting or inventing any fact - a presentational transform of text
 * that is already in the commercial-authority source.
 */
function splitClauses(text: string): string[] {
  return text
    .split(". ")
    .map((clause) => clause.replace(/\.$/, "").trim())
    .filter(Boolean);
}

function tierLines(service: ManagedService, tierName: string): string[] {
  const lines: string[] = [];
  const evidence = service.evidenceByTier?.find((e) => e.tier === tierName)?.evidence;
  if (evidence) lines.push(`Evidence ${evidence}`);
  const support = service.supportByTier?.find((s) => s.tier === tierName)?.support;
  if (support) lines.push(...splitClauses(support));
  return lines;
}

function ManagedServiceCard({ service }: { service: ManagedService }) {
  const Icon = managedServiceIcon[service.code] ?? ContinuityIcon;
  const visibleThemes = service.recurringThemes.slice(0, RECURRING_VISIBLE_LIMIT);
  const hiddenThemes = service.recurringThemes.slice(RECURRING_VISIBLE_LIMIT);
  // Single evidence value applies identically across every tier (MGT-03 only):
  // shown once in the comparison state rather than repeated per tier column.
  const singleEvidence = !service.evidenceByTier && service.evidence ? service.evidence : undefined;
  const hasTierDetail = Boolean(service.supportByTier || service.evidenceByTier);

  return (
    <article className="group/card relative flex min-w-0 flex-col border border-hairline-faint bg-surface-alt p-7 transition-[border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:border-brand-maroon/50 hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] md:p-8">
      {/* Layer A: service identity */}
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center border border-hairline bg-surface text-brand-maroon md:h-16 md:w-16"
        >
          <Icon className="h-7 w-7 md:h-8 md:w-8" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">{service.code}</p>
          <h3 className="text-h3 mt-1 text-heading">{service.name}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-[1.6] text-body">{service.summary}</p>

      {/*
        Layer B: pricing/tier object. One bordered control with internal
        dividers, not three separate floating pricing cards - the directive
        explicitly names "three nested pricing cards inside every service"
        as a pattern to avoid.
      */}
      <div className="mt-6 grid grid-cols-3 divide-x divide-hairline border border-hairline bg-surface">
        {service.tiers.map((tier) => (
          <div key={tier.name} className="min-w-0 px-2.5 py-3.5 text-center sm:px-4">
            <p className="text-[10px] font-semibold tracking-[0.1em] text-muted uppercase">{tier.name}</p>
            {/* min-w-0 + break-words: grid-blowout fix for long price bands (e.g. "$9,000-$15,000/mo"). */}
            <p className="mt-1.5 break-words font-serif text-[clamp(1rem,2vw,1.3rem)] leading-none font-semibold text-brand-maroon">
              {tier.price}
            </p>
          </div>
        ))}
      </div>

      {/* Layer C: key recurring scope, decision-relevant subset only */}
      <div className="mt-6">
        <p className="text-eyebrow text-heading">Recurring scope</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {visibleThemes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.6] text-body">
              <IncludedIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-maroon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/*
        Layer D: detail interaction. Native `<details>`, matching
        `PackageCard`'s "See scope and next step" affordance, so the two
        commercial chapters share one disclosure language.
      */}
      <details className="group mt-6 border-t border-hairline pt-5">
        <summary className="flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-3 border border-hairline px-4 py-2.5 text-[13px] font-semibold text-heading transition-colors duration-200 group-open:border-brand-maroon group-open:text-brand-maroon">
          <span>Compare service levels</span>
          <span aria-hidden="true" className="text-lg font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">
            +
          </span>
        </summary>

        <div className="mt-4 space-y-5">
          {hiddenThemes.length ? (
            <div>
              <p className="text-eyebrow text-heading">Also included</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {hiddenThemes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.6] text-body">
                    <IncludedIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-maroon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {hasTierDetail ? (
            <div className={hiddenThemes.length ? "border-t border-dashed border-hairline pt-4" : ""}>
              <p className="text-eyebrow text-heading">Tier-by-tier</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {service.tiers.map((tier) => {
                  const lines = tierLines(service, tier.name);
                  if (!lines.length) return null;
                  return (
                    <div key={tier.name} className="min-w-0 border border-hairline p-3">
                      <p className="text-[13px] font-semibold text-heading">{tier.name}</p>
                      <ul className="mt-2 space-y-1">
                        {lines.map((line) => (
                          <li key={line} className="text-xs leading-[1.5] text-muted">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              {singleEvidence ? (
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                  <EvidenceIcon className="h-3 w-3" /> Evidence {singleEvidence} (all tiers)
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="border-t border-dashed border-hairline pt-4">
            <p className="text-eyebrow text-muted">Scope boundaries</p>
            <ul className="mt-3 space-y-2">
              {service.exclusions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.6] text-muted">
                  <SeparateIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.note ? (
            <p className="border-t border-dashed border-hairline pt-4 text-xs leading-[1.6] text-muted">{service.note}</p>
          ) : null}
        </div>
      </details>
    </article>
  );
}

export function ManagedServices() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3">
        {managedServices.map((service) => (
          <ManagedServiceCard key={service.code} service={service} />
        ))}
      </div>
      <p className="mt-8 max-w-2xl border-l-2 border-brand-maroon pl-5 text-sm leading-[1.7] text-body">
        {managedServiceTermNote}
      </p>
    </div>
  );
}
