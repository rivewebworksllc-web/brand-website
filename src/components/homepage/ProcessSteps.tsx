import type { ProcessStage } from "@/lib/content/homepage";

type ProcessStepsProps = {
  stages: ProcessStage[];
};

export function ProcessSteps({ stages }: ProcessStepsProps) {
  return (
    <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block"
      />
      {stages.map((stage, index) => (
        <li key={stage.step} className="relative">
          <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
            <span
              aria-hidden="true"
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-deep bg-navy-950 text-evidence text-white"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-h3 text-heading lg:mt-0">{stage.title}</h3>
          </div>
          <p className="mt-2 text-[14px] leading-[1.6] text-body lg:mt-3">
            {stage.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
