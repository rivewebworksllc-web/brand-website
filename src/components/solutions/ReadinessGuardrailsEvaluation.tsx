import { pipelineGates } from "@/lib/content/ai-data-automation";

/**
 * RW-PAGE-P0-SOLUTIONS-01 signature device for AI & Data Automation: a
 * three-gate pipeline (Readiness, Guardrails, Evaluation) built from real
 * deliverable items already published in `pricing.ts` (`ai-readiness-
 * sprint`, `secure-rag-knowledge-search`, `ai-red-teaming-guardrails-
 * validation`). Deliberately a linear, top-to-bottom gated chain rather
 * than a decorative "AI agent pipeline" animation (rejected during
 * 21st.dev exploration) - each gate is a real checkpoint a use case must
 * clear, not a flowing diagram. Distinct in form from Cloud Modernization's
 * wide six-pillar grid: this is a vertical sequence with a connecting
 * rule, not a scanning grid.
 */
export function ReadinessGuardrailsEvaluation() {
  return (
    <ol className="relative space-y-0">
      <div aria-hidden="true" className="absolute top-3 bottom-3 left-[15px] hidden w-px bg-white/15 sm:block" />
      {pipelineGates.map((gate) => (
        <li key={gate.id} className="relative grid gap-4 border-t border-white/15 py-8 sm:grid-cols-12 sm:gap-8 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute top-8 left-0 hidden h-8 w-8 items-center justify-center border border-brand-gold/60 bg-navy-950 font-mono text-xs text-brand-gold sm:flex"
          >
            {gate.order}
          </span>
          <div className="sm:col-span-4">
            <p className="font-mono text-xs text-slate-400 sm:hidden">{String(gate.order).padStart(2, "0")}</p>
            <h3 className="mt-1 text-[20px] leading-[1.2] font-semibold text-white sm:mt-0">{gate.name}</h3>
            <p className="mt-2 max-w-[26ch] text-[13px] leading-[1.6] text-slate-400">{gate.role}</p>
          </div>
          <ul className="space-y-2 sm:col-span-8">
            {gate.items.map((item) => (
              <li key={item} className="border-l-2 border-brand-gold/50 pl-4 text-[13px] leading-[1.6] text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
