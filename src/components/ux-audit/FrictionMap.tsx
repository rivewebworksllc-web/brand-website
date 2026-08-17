import { frictionMap } from "@/lib/content/ux-audit-conversion-roadmap";
import { frictionStageIcon } from "@/components/ux-audit/FrictionMapIcons";

/**
 * RW-PAGE-11: the page's signature section. Every fact (stage name, what
 * happens, friction signals, what gets examined) is server-rendered text,
 * not encoded in an image, a color-only heatmap or a chart - satisfying the
 * directive's explicit "do not encode the friction map solely visually"
 * instruction on its own, independent of the accompanying connector-line
 * visual. Register anatomy shares the dark-chapter/connector family
 * established by `EvidenceRegister`/`EvidenceSpine`/`PhilosophyFlow`, with
 * its own content shape (stage/what-happens/signals/examine, not
 * stage/record/sample).
 */
export function FrictionMap() {
  return (
    <ol className="relative space-y-10 border-t border-white/15 pt-10 lg:space-y-14">
      {frictionMap.map((entry, index) => {
        const Icon = frictionStageIcon[entry.id];
        if (!Icon) return null;

        return (
          <li key={entry.id} className="relative">
            {index > 0 ? (
              <span aria-hidden="true" className="absolute -top-10 left-7 hidden h-10 w-px bg-white/15 lg:block" />
            ) : null}
            <div className="flex items-start gap-5">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/20 bg-[#101a2d] text-brand-gold"
              >
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="font-mono text-[11px] tracking-[0.12em] text-brand-gold uppercase">
                    Stage {String(entry.order).padStart(2, "0")}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">{entry.stage}</p>
                </div>
                <h3 className="mt-2 font-serif text-[clamp(1.5rem,2.5vw,2.1rem)] leading-tight font-semibold text-white">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-xl text-[14px] leading-[1.7] text-slate-200">{entry.whatHappens}</p>

                <div className="mt-5 grid gap-6 border-t border-white/15 pt-5 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">Friction signals</p>
                    <ul className="mt-3 space-y-1.5">
                      {entry.frictionSignals.map((signal) => (
                        <li key={signal} className="text-[13px] leading-[1.6] text-slate-200">
                          {signal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">What the audit examines</p>
                    <p className="mt-3 text-[13px] leading-[1.6] text-slate-200">{entry.whatWeExamine}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
