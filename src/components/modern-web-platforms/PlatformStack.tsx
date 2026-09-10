import { platformStack, platformStackNote } from "@/lib/content/modern-web-platforms";

/**
 * RW-PAGE-14: the page's signature section (Memorable Moment A). Every fact
 * (layer role, illustrative examples, buyer consequence) is server-rendered
 * text, not encoded in an image or a generic cloud-architecture diagram,
 * matching this repository's standing accessibility discipline for
 * signature diagrams (`FrictionMap`, `FragmentsToSystem`). Anatomy is
 * distinct from both: this is four stacked, separable layers, not a
 * sequential journey and not a before/after resolution.
 */
export function PlatformStack() {
  return (
    <div>
      <ol className="relative space-y-8 border-t border-white/15 pt-8 lg:space-y-10">
        {platformStack.map((layer, index) => (
          <li key={layer.id} className="relative">
            {index > 0 ? (
              <span aria-hidden="true" className="absolute -top-8 left-7 hidden h-8 w-px bg-white/15 lg:block" />
            ) : null}
            <div className="flex items-start gap-5">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/20 bg-[#101a2d] font-mono text-sm text-brand-gold"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight font-semibold text-white">
                  {layer.label}
                </h3>
                <p className="mt-2 max-w-xl text-[14px] leading-[1.7] text-slate-200">{layer.role}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">Illustrative:</span>
                  {layer.examples.map((example) => (
                    <span key={example} className="border border-dashed border-white/20 px-2.5 py-1 text-[11px] text-slate-300">
                      {example}
                    </span>
                  ))}
                </div>

                <p className="mt-3 max-w-xl border-l-2 border-brand-gold pl-4 text-[13px] leading-[1.6] text-slate-300">
                  {layer.consequence}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-2xl text-[12px] leading-[1.6] text-slate-400">{platformStackNote}</p>
    </div>
  );
}
