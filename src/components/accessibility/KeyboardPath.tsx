import { keyboardPath } from "@/lib/content/accessibility";

const stateLabel: Record<string, string> = {
  passes: "Passes",
  interrupted: "Interrupted",
  restored: "Restored after remediation",
};

/**
 * RW-PAGE-12R: major visual moment A. Deliberately a different device from
 * `FrictionMap`/`EvidenceRegister`'s vertical stage-card register (per the
 * Design Decision Brief's cross-page differentiation and the directive's
 * explicit "do not copy UXR-01's Friction Map" instruction): a compact
 * connected rail of seven stops, state conveyed by a text label plus a
 * broken/solid connector segment, never color alone. Full text alternative
 * for every stop - the diagram is never the only source of meaning.
 */
export function KeyboardPath() {
  return (
    <ol className="flex flex-wrap items-start gap-x-1 gap-y-8 sm:flex-nowrap">
      {keyboardPath.map((stop, index) => (
        <li key={stop.id} className="flex items-center sm:contents">
          <div className="flex w-24 flex-col items-center text-center sm:w-auto sm:flex-1">
            <span
              aria-hidden="true"
              className={`flex h-8 w-8 shrink-0 items-center justify-center border font-mono text-[11px] ${
                stop.state === "interrupted"
                  ? "border-dashed border-white/40 text-white/60"
                  : "border-brand-gold bg-brand-gold/10 text-brand-gold"
              }`}
            >
              {stop.order}
            </span>
            <p className="mt-2.5 text-[12px] font-semibold text-white">{stop.label}</p>
            <p className="mt-1 font-mono text-[9px] tracking-[0.06em] text-slate-400 uppercase">{stateLabel[stop.state]}</p>
            <p className="mt-1.5 max-w-[8.5rem] text-[11px] leading-[1.5] text-slate-300">{stop.note}</p>
          </div>
          {index < keyboardPath.length - 1 ? (
            <span
              aria-hidden="true"
              className={`h-px min-w-4 flex-1 sm:min-w-0 ${stop.state === "interrupted" ? "border-t border-dashed border-white/30" : "bg-white/20"}`}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
