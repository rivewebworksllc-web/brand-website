import type { GovernedAiFlowStep } from "@/lib/content/homepage";

type GovernedAIFlowProps = {
  steps: GovernedAiFlowStep[];
};

export function GovernedAIFlow({ steps }: GovernedAIFlowProps) {
  return (
    <ol
      aria-label="Governed AI flow"
      className="flex flex-col gap-0 rounded-lg border border-hairline bg-surface p-5 sm:flex-row sm:items-center sm:gap-2 sm:p-6"
    >
      {steps.map((step, index) => (
        <li key={step.id} className="flex items-center gap-3 sm:flex-1 sm:flex-col sm:gap-2 sm:text-center">
          <div className="flex w-full items-center gap-3 sm:flex-col sm:gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-gold-deep text-evidence text-heading">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-[13px] font-semibold text-heading sm:mt-1">{step.label}</p>
          </div>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="ml-[1.125rem] h-6 w-px bg-accent-azure-strong sm:ml-0 sm:mt-[1.125rem] sm:h-px sm:w-full sm:flex-1"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
