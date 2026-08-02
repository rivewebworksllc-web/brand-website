import type { ProcessStage } from "@/lib/content/homepage";

type ProcessTimelineProps = {
  stages: ProcessStage[];
};

export function ProcessTimeline({ stages }: ProcessTimelineProps) {
  return (
    <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
      <span
        aria-hidden="true"
        className="absolute left-[10px] right-[10px] top-[10px] hidden h-px bg-hairline lg:block"
      />
      {stages.map((stage) => (
        <li key={stage.step} className="relative pl-8 lg:pl-0">
          <span
            aria-hidden="true"
            className="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-gold-deep bg-surface lg:relative lg:left-auto lg:top-auto lg:mb-4 lg:block"
          />
          <p className="text-evidence text-muted">{stage.step}</p>
          <h3 className="text-h3 mt-1 text-heading">{stage.title}</h3>
          <p className="mt-1.5 text-[14px] leading-[1.6] text-body">{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}
