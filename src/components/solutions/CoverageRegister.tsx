import { coverageDomains } from "@/lib/content/managed-services-solution";

/**
 * RW-PAGE-P0-SOLUTIONS-02 signature device for Managed Care & Advisory:
 * one continuous register (not three equal-weight pricing cards, the
 * specific risk flagged during the TasteSkill critique) joining the
 * three real managed-service domains under a single connecting spine,
 * arguing they are one relationship rather than three separate vendors.
 * Deliberately the inverse thesis of Modern Web Platforms' Platform
 * Stack, which argues for separating layers - this argues for coupling
 * three real, already-priced operating tracks under one point of contact.
 */
export function CoverageRegister() {
  return (
    <div className="relative border-t border-white/15">
      <div aria-hidden="true" className="absolute top-0 bottom-0 left-[15px] hidden w-px bg-brand-gold/40 sm:block" />
      {coverageDomains.map((domain) => (
        <div key={domain.id} className="relative grid gap-4 border-b border-white/15 py-8 sm:grid-cols-12 sm:gap-8 sm:pl-10">
          <span
            aria-hidden="true"
            className="absolute top-8 left-0 hidden h-8 w-8 items-center justify-center border border-brand-gold/60 bg-navy-950 sm:flex"
          >
            <span className="h-2 w-2 rounded-full bg-brand-gold" />
          </span>
          <div className="sm:col-span-4">
            <p className="font-mono text-[11px] text-slate-400">{domain.service.code}</p>
            <h3 className="mt-1 text-[20px] leading-[1.2] font-semibold text-white">{domain.label}</h3>
            <p className="mt-1 text-[13px] font-semibold text-slate-200">{domain.service.name}</p>
            <p className="mt-2 max-w-[28ch] text-[13px] leading-[1.6] text-slate-300">{domain.service.summary}</p>
          </div>
          <div className="sm:col-span-5">
            <p className="text-[11px] tracking-[0.08em] text-slate-400 uppercase">Recurring coverage</p>
            <ul className="mt-3 space-y-1.5">
              {domain.service.recurringThemes.slice(0, 4).map((theme) => (
                <li key={theme} className="text-[13px] leading-[1.6] text-slate-300">
                  {theme}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-3">
            <p className="text-[11px] tracking-[0.08em] text-slate-400 uppercase">Starting tier</p>
            <p className="mt-3 font-serif text-[18px] font-semibold text-white">{domain.service.tiers[0]?.price}</p>
            <p className="mt-1 text-[12px] text-slate-400">{domain.service.tiers[0]?.name}</p>
            {domain.service.supportByTier?.[0] ? (
              <p className="mt-3 max-w-[26ch] text-[11px] leading-[1.5] text-slate-400">{domain.service.supportByTier[0].support}</p>
            ) : null}
          </div>
          <div className="sm:col-span-12 sm:pl-10">
            <p className="text-[11px] tracking-[0.08em] text-slate-400 uppercase">Not covered at this tier</p>
            <p className="mt-2 text-[12px] leading-[1.6] text-slate-400">{domain.service.exclusions.join(", ")}</p>
            {domain.service.note ? (
              <p className="mt-2 text-[12px] leading-[1.5] text-brand-gold/90">{domain.service.note}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
