"use client";

import { useId, useRef, useState } from "react";
import { Placeholder, type PlaceholderCategory } from "@/components/media/Placeholder";
import type { ProcessStage } from "@/lib/content/homepage";

type ProcessStepperProps = {
  stages: ProcessStage[];
};

/**
 * Per-stage illustration category — varied (not one flat repeated icon) the
 * same way the reference recording gave each stage its own distinct visual,
 * while staying inside the already-approved `Placeholder` category set (no
 * new asset system for one section). Falls back to `feature-illustration`
 * for any stage title this map doesn't recognise, so new/renamed stages
 * degrade safely instead of throwing.
 */
const STAGE_CATEGORY: Record<string, PlaceholderCategory> = {
  Discover: "architecture-diagram",
  Architect: "architecture-diagram",
  Build: "product-mockup",
  Prove: "feature-illustration",
  Support: "device-render",
};

/**
 * RW-PW07B (Product Office calibration), re-sequenced per the reference
 * recording supplied 2026-08-05 (a "delivery model" stepper): the panel
 * leads with a two-column split (text left, illustration placeholder
 * right — matching the reference's own layout, corrected 2026-08-05 after
 * the first pass shipped text-only), the stage nav (line + labelled stops)
 * sits below it, and dedicated prev/next controls sit below that, clamped
 * at both ends instead of wrapping — matching the reference's
 * disabled-at-the-boundary behaviour. Clicking any stop still jumps
 * straight to it. This section's own distinct interaction, not a repeat of
 * `OutcomeExplorer`'s list-driven panel or `EvidenceExplorer`'s card grid;
 * prev/next buttons reuse the exact min-h-11 bordered-icon-button pattern
 * `EvidenceExplorer` already established, for visual consistency rather
 * than a new one-off. The illustration reuses the RW-PHASE-02 `Placeholder`
 * system (labelled "pending", CSS/SVG-only) rather than inventing a new
 * one-off asset convention for this section alone.
 *
 * 2026-08-06 (design-taste-frontend audit): the panel label was rendering
 * "Stage 01 — Discover" — a generic numbered-stage label plus a literal
 * em-dash, both hard-banned. Dropped to just `{active.title}`, matching
 * `EvidenceExplorer`'s own already-correct `{active.title}`-only eyebrow —
 * the sibling pattern this component already claimed to reuse. Position
 * context (which stage, of how many) stays available via the numbered tab
 * buttons below and this panel's `aria-labelledby` link to the active tab.
 */
export function ProcessStepper({ stages }: ProcessStepperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = stages[activeIndex]!;
  const count = stages.length;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === count - 1;

  function goTo(index: number) {
    const clamped = Math.min(Math.max(index, 0), count - 1);
    setActiveIndex(clamped);
    return clamped;
  }

  function focusButton(index: number) {
    const next = goTo(index);
    buttonRefs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusButton(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusButton(index - 1);
    }
  }

  const fillPercent = count > 1 ? (activeIndex / (count - 1)) * 100 : 0;

  return (
    <div>
      <div
        id={`${panelId}-panel`}
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${activeIndex}`}
        className="card grid grid-cols-1 gap-6 p-6 sm:grid-cols-[2fr_3fr] sm:items-center sm:gap-8 md:p-8"
      >
        <div>
          <p className="text-eyebrow text-brand-maroon">{active.title}</p>
          <p className="mt-2 max-w-xl text-[15px] leading-[1.65] text-body">{active.description}</p>
        </div>
        <Placeholder
          meta={{
            id: `RW-PROCESS-${active.step}`,
            category: STAGE_CATEGORY[active.title] ?? "feature-illustration",
            purpose: `${active.title} stage illustration`,
            aspect: "4:3",
            composition: active.title,
            mood: "Structured, confident",
            replacement: "Original illustration",
            priority: "P1",
            motion: "none",
          }}
        />
      </div>

      <div
        role="tablist"
        aria-label="Engagement stages"
        className="relative mt-8 grid grid-cols-5 gap-2"
      >
        <span aria-hidden="true" className="absolute top-[15px] right-[10%] left-[10%] h-px bg-hairline" />
        <span
          aria-hidden="true"
          className="absolute top-[15px] left-[10%] h-px bg-gold-deep transition-[width] duration-300 ease-out motion-reduce:transition-none"
          style={{ width: `${fillPercent * 0.8}%` }}
        />
        {stages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={stage.step}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${panelId}-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`${panelId}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => goTo(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className="relative flex flex-col items-center gap-2 text-center"
            >
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-surface text-evidence transition-colors duration-200 motion-reduce:transition-none ${
                  isActive ? "border-gold-deep text-heading" : "border-hairline text-muted"
                }`}
              >
                {stage.step}
              </span>
              <span
                className={`text-[13px] font-medium transition-colors duration-200 motion-reduce:transition-none ${
                  isActive ? "text-heading" : "text-muted"
                }`}
              >
                {stage.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => focusButton(activeIndex - 1)}
          disabled={isFirst}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-hairline text-heading transition-colors duration-200 hover:border-gold-deep motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-hairline"
          aria-label="Previous stage"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => focusButton(activeIndex + 1)}
          disabled={isLast}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-hairline text-heading transition-colors duration-200 hover:border-gold-deep motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-hairline"
          aria-label="Next stage"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
