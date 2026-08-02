import type { ArchitectureFlowStep } from "@/lib/content/homepage";

type RiveOperatingArchitectureProps = {
  steps: ArchitectureFlowStep[];
};

/**
 * Illustration 1 (RW-PW04): the Rive Operating Architecture. Two-tier
 * system — a gold "spine" of the four primary stages (the same meaning as
 * the old compact ArchitectureFlow), with each stage additionally branching
 * into its two supporting systems as azure pathways. Gold = key nodes,
 * azure = secondary/supporting pathways, per the brief's colour hierarchy.
 * Built from HTML/CSS + Tailwind (not raw SVG), matching the existing
 * ArchitectureFlow/GovernedAIFlow pattern in this codebase: every label is
 * real text (readable before any motion, works with prefers-reduced-motion,
 * needs no separate text alternative since nothing is image-only).
 */
export function RiveOperatingArchitecture({ steps }: RiveOperatingArchitectureProps) {
  return (
    <ol
      aria-label="The Rive operating architecture: Digital Experience, Cloud Foundation, Governed AI, Managed Outcomes"
      className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6"
    >
      {steps.map((step, index) => (
        <li key={step.id} className="relative">
          <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent-gold bg-accent-surface text-evidence font-semibold text-accent-foreground lg:h-14 lg:w-14"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 bg-accent-gold lg:block"
              />
            ) : null}
          </div>

          <div className="mt-3 lg:mt-4">
            <p className="text-[15px] font-semibold text-accent-foreground lg:text-base">
              {step.label}
            </p>
            <p className="mt-1 text-[13px] leading-[1.5] text-accent-foreground/70">
              {step.description}
            </p>
          </div>

          <ul aria-label={`${step.label} — supporting systems`} className="mt-4 space-y-2 pl-1">
            {step.subItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-px w-3 shrink-0 bg-accent-azure-strong"
                />
                <span className="text-[12px] leading-snug text-accent-foreground/75">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
