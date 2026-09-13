import { forkConverge, forkPaths } from "@/lib/content/web-growth";

/**
 * RW-PAGE-P0-SOLUTIONS-02 signature device for Website & Growth: two
 * honest, genuinely different real entry points (diagnose an existing
 * site vs. build a new one), each carrying its own real price/timeline
 * from `pricing.ts`, converging into one outcome statement. Deliberately
 * not a before/after transformation slider or a red/green winner
 * comparison (both explicitly rejected per the TasteSkill critique) -
 * two equal-weight bordered columns with a plain connecting statement,
 * matching Coupled-vs-Composable's already-established "neutral, not a
 * winner table" discipline from Modern Web Platforms, but resolving to a
 * convergence point instead of staying permanently split.
 */
export function DiagnoseOrBuildFork() {
  return (
    <div>
      <div className="grid gap-0 border-t border-white/15 sm:grid-cols-2">
        {forkPaths.map((path, index) => (
          <div
            key={path.id}
            className={`py-8 pr-0 sm:pr-8 ${index === 0 ? "border-b border-white/15 sm:border-r sm:border-b-0" : "sm:pl-8"}`}
          >
            <p className="text-[11px] tracking-[0.08em] text-brand-gold uppercase">{path.label}</p>
            <p className="mt-3 max-w-[32ch] text-[14px] leading-[1.6] text-slate-300">{path.role}</p>
            <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-white/15 pt-4">
              <p className="font-mono text-[11px] text-slate-400">{path.pkg.code}</p>
              <p className="font-serif text-[16px] font-semibold text-white">{path.pkg.price.display}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {path.items.map((item) => (
                <li key={item} className="border-l-2 border-brand-gold/50 pl-4 text-[13px] leading-[1.6] text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 border-t border-white/15 pt-6 text-center text-[14px] leading-[1.6] text-slate-300">{forkConverge}</p>
    </div>
  );
}
