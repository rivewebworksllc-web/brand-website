import type { ProcessStep } from "@/lib/content/homepage";

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block"
      />
      {steps.map((step, index) => (
        <li key={step.step} className="card relative p-6">
          <span
            aria-hidden="true"
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-deep bg-navy-950 text-evidence text-white"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-h3 mt-4 text-navy-950">{step.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.65] text-slate-700">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
