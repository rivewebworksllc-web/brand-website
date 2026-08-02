import type { ArchitectureFlowStep } from "@/lib/content/homepage";

type ArchitectureFlowProps = {
  steps: ArchitectureFlowStep[];
};

/**
 * Original accessible flow diagram: Digital Experience → Cloud Foundation →
 * Governed AI → Managed Outcomes. Meaning is carried entirely by the visible
 * labels/descriptions (readable before any motion runs); the connector's
 * subtle animated dash is decorative only and stops under
 * prefers-reduced-motion via the global override in globals.css.
 */
export function ArchitectureFlow({ steps }: ArchitectureFlowProps) {
  return (
    <ol className="grid grid-cols-1 gap-0 lg:grid-flow-col lg:auto-cols-fr">
      {steps.map((step, index) => (
        <li key={step.id} className="relative flex gap-4 lg:flex-col lg:gap-3">
          <div className="flex flex-col items-center lg:w-full">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-brand-gold/50 bg-navy-950 text-evidence text-brand-gold"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="flow-connector mt-0 ml-5 h-full w-px lg:ml-0 lg:mt-3 lg:h-px lg:w-full"
              />
            ) : null}
          </div>
          <div className="pb-6 lg:px-2 lg:pb-0 lg:text-center">
            <p className="text-[13px] font-semibold tracking-wide text-white">{step.label}</p>
            <p className="mt-1 text-[13px] leading-[1.5] text-white/70">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
