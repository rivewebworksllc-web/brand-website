import type { PresentationMode } from "@/hooks/usePresentationCycle";

type PresentationProgressProps = {
  activeIndex: number;
  interval: number;
  isPaused: boolean;
  mode: PresentationMode;
  tone?: "light" | "dark";
};

export function PresentationProgress({
  activeIndex,
  interval,
  isPaused,
  mode,
  tone = "light",
}: PresentationProgressProps) {
  if (mode === "manual") return null;

  return (
    <span
      aria-hidden="true"
      data-presentation-progress
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden ${tone === "dark" ? "bg-white/15" : "bg-hairline"}`}
    >
      <span
        key={activeIndex}
        className="block h-full origin-left bg-gold-deep dark:bg-brand-gold"
        style={{
          animationName: "presentation-progress",
          animationDuration: `${interval}ms`,
          animationTimingFunction: "linear",
          animationFillMode: "forwards",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      />
    </span>
  );
}
