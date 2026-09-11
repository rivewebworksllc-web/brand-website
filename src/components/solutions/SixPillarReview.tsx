import { enginePillars, roadmapBands } from "@/lib/content/cloud-modernization";

/**
 * RW-PAGE-P0-SOLUTIONS-01 signature device for Cloud Modernization: the
 * real six-pillar structure behind the AWS Well-Architected Framework
 * Review (`aws-wafr-review` in `pricing.ts`), made visible as a scan
 * across six pillars that converges into a severity-ranked roadmap
 * sequence. Deliberately not a generic cloud-architecture box-and-arrow
 * diagram (rejected during 21st.dev exploration) and not a data table -
 * plain semantic HTML and CSS, matching the rest of the page family's
 * hand-authored diagram convention (`PlatformStack`, `FrictionMap`).
 * Distinct in form from AI & Data Automation's linear gated pipeline: this
 * is a wide grid that resolves into a sequence, not a top-to-bottom chain.
 */
export function SixPillarReview() {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <ol className="grid grid-cols-1 gap-0 border-t border-white/15 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
        {enginePillars.map((pillar) => (
          <li key={pillar.id} className="border-b border-white/15 py-6 pr-6 sm:border-r sm:pl-0 lg:py-8">
            <p className="font-mono text-xs text-slate-400">{String(pillar.order).padStart(2, "0")}</p>
            <h3 className="mt-2 text-[15px] leading-[1.4] font-semibold text-white">{pillar.name}</h3>
            <p className="mt-2 max-w-[22ch] text-[13px] leading-[1.6] text-slate-400">{pillar.examine}</p>
          </li>
        ))}
      </ol>

      <div className="lg:col-span-5">
        <p className="text-[11px] tracking-[0.08em] text-slate-400 uppercase">Becomes a sequenced roadmap</p>
        <ol className="mt-5 space-y-0 border-t border-white/15">
          {roadmapBands.map((band) => (
            <li key={band.severity} className="flex items-baseline justify-between gap-4 border-b border-white/15 py-4">
              <div>
                <p className="text-[15px] font-semibold text-white">{band.severity}</p>
                <p className="mt-1 max-w-[30ch] text-[12px] leading-[1.55] text-slate-400">{band.description}</p>
              </div>
              <p className="shrink-0 font-mono text-[11px] text-brand-gold">{band.window}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
