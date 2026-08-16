import type { SampleView as SampleViewData } from "@/lib/content/evidence-pack";

/**
 * RW-PAGE-10: renders a small, explicitly-labeled, generic sample mock of
 * an evidence artifact. Every value here is structural placeholder
 * language, never a real client name, logo, photograph or a number
 * presented as a measured result, per the Design Decision Brief's Claim/
 * simulation safety model (CLM-003/004/005 stay respected: no client
 * logos, no testimonials, no case-study metrics).
 */
export function SampleView({ data }: { data: SampleViewData }) {
  if (data.kind === "columns") {
    return (
      <div className="grid gap-5 sm:grid-cols-2">
        {data.columns.map((column) => (
          <div key={column.heading}>
            <p className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">{column.heading}</p>
            <ul className="mt-3 space-y-2">
              {column.items.map((item) => (
                <li key={item} className="text-[13px] leading-[1.6] text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (data.kind === "checklist") {
    return (
      <ul className="space-y-2.5">
        {data.items.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-[13px] leading-[1.6] text-slate-200">
            <span
              aria-hidden="true"
              className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                item.state === "checked" ? "border-brand-gold bg-brand-gold/15 text-brand-gold" : "border-white/25 text-transparent"
              }`}
            >
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8.5 6.3 12 13 4" />
              </svg>
            </span>
            <span>{item.label}</span>
            <span className="ml-auto font-mono text-[10px] tracking-[0.08em] text-slate-400 uppercase">
              {item.state === "checked" ? "Recorded" : "Not yet due"}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (data.kind === "fields") {
    return (
      <dl className="space-y-3">
        {data.fields.map((field) => (
          <div key={field.label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:items-baseline sm:gap-4">
            <dt className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">{field.label}</dt>
            <dd className="text-[13px] leading-[1.6] text-slate-200">{field.value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {data.groups.map((group) => (
        <div key={group.heading}>
          <p className="font-mono text-[10px] tracking-[0.1em] text-slate-400 uppercase">{group.heading}</p>
          <ul className="mt-3 space-y-2">
            {group.items.map((item) => (
              <li key={item} className="border border-white/15 p-2.5 text-[12px] leading-[1.5] text-slate-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
