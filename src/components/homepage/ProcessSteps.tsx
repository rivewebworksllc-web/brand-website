import type { ProcessStep } from "@/lib/content/homepage";

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.step} className="rounded-lg border border-slate-200 bg-white p-6">
          <span className="text-evidence text-brand-maroon">{step.step}</span>
          <h3 className="text-h3 mt-2 text-navy-950">{step.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.65] text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
