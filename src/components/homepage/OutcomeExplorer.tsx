"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { isAvailableHref } from "@/lib/public-routes";
import type { BuyerPath } from "@/lib/content/homepage";
import { CAPABILITY_VISUALS, CapabilityVisual } from "@/components/homepage/CapabilityVisual";
import { PresentationProgress } from "@/components/ui/PresentationProgress";
import { usePresentationCycle } from "@/hooks/usePresentationCycle";

type OutcomeExplorerProps = {
  paths: BuyerPath[];
};

const ROW_HEIGHT = 88;

/**
 * Guided Capability Explorer (RW-PW08). Desktop-only two-column layout from
 * `lg` up — `BuyerPathAccordion` renders below `lg`, both exist in
 * server-rendered HTML at all times (CSS breakpoint only), so no essential
 * content depends on JavaScript or viewport.
 *
 * RW-PW08 redesign: the navigator gets a per-capability line icon and a
 * sliding "beam" indicator instead of a plain filled circle; the panel is
 * broken into an editorial headline, a Visual Story Panel (this section's
 * hero), and a progressive-disclosure zone — symptoms and the deeper
 * examine/output/follow-on detail are collapsed by default so the section
 * reads as a demonstration first, documentation second. The old floating
 * numbered badge is now an inline "editorial stamp" beside the headline
 * rather than an isolated circle with empty space around it.
 *
 * 2026-08-05: sticky positioning moved from the right detail panel to the
 * left tab list per Product Office direction — the navigator (short, fixed
 * height) now stays in view while the longer, variable-height detail panel
 * scrolls past it, rather than the other way around.
 */
export function OutcomeExplorer({ paths }: OutcomeExplorerProps) {
  const cycle = usePresentationCycle({ itemCount: paths.length, interval: 7000 });
  const [detailOpen, setDetailOpen] = useState(false);
  const panelId = useId();
  const detailId = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = paths[cycle.activeIndex]!;
  const visual = CAPABILITY_VISUALS[active.title];

  useEffect(() => {
    setDetailOpen(false);
  }, [cycle.activeIndex]);

  function focusIndex(index: number) {
    const count = paths.length;
    const next = ((index % count) + count) % count;
    buttonRefs.current[next]?.focus();
    cycle.select(next);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      focusIndex(index + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      focusIndex(index - 1);
    }
  }

  return (
    <div ref={cycle.containerRef} {...cycle.interactionProps} data-presentation-mode={cycle.mode} className="hidden lg:grid lg:grid-cols-12 lg:gap-10">
      <div
        role="tablist"
        aria-label="Buyer outcomes"
        aria-orientation="vertical"
        className="relative col-span-4 pl-6 lg:sticky lg:top-28 lg:self-start"
      >
        <span aria-hidden="true" className="absolute top-0 left-0 h-full w-px bg-hairline" />
        <span
          aria-hidden="true"
          className="absolute left-0 w-px bg-gold-deep transition-[top] duration-300 ease-out motion-reduce:transition-none"
          style={{ top: `${cycle.activeIndex * ROW_HEIGHT}px`, height: `${ROW_HEIGHT}px` }}
        />
        {paths.map((path, index) => {
          const isActive = index === cycle.activeIndex;
          const Icon = CAPABILITY_VISUALS[path.title]?.Icon;
          return (
            <button
              key={path.title}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${panelId}-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`${panelId}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => cycle.select(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              style={{ minHeight: `${ROW_HEIGHT}px` }}
              className={`relative flex w-full items-center gap-4 py-5 text-left transition-colors duration-300 motion-reduce:transition-none ${
                isActive ? "text-heading" : "text-muted hover:text-heading"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 motion-reduce:transition-none ${
                  isActive ? "border-gold-deep bg-surface-alt text-heading" : "border-hairline text-muted"
                }`}
              >
                {Icon ? <span className="h-5 w-5">{<Icon />}</span> : null}
              </span>
              <span className={`text-h3 transition-[font-weight] ${isActive ? "font-semibold" : ""}`}>
                {path.title}
              </span>
              {isActive ? <PresentationProgress activeIndex={cycle.activeIndex} interval={cycle.interval} isPaused={cycle.isPaused} mode={cycle.mode} /> : null}
            </button>
          );
        })}
      </div>

      <div
        id={`${panelId}-panel`}
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${cycle.activeIndex}`}
        className="col-span-8"
      >
        <div key={cycle.activeIndex} className="motion-safe:animate-[megamenu-in_300ms_ease-out]">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent-gold text-h3 text-heading"
            >
              {String(cycle.activeIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-eyebrow text-accent-azure">If this is you</p>
              <p className="mt-1.5 text-[17px] leading-[1.55] font-medium text-heading">{active.problem}</p>
            </div>
          </div>

          {visual ? <CapabilityVisual title={active.title} className="mt-6 w-full" /> : null}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-hairline-faint pt-6">
            <p className="text-[15px] font-medium text-heading">{active.outcome}</p>
            {isAvailableHref(active.cta.href) ? <Link
              href={active.cta.href}
              className="inline-flex shrink-0 items-center gap-1 text-[15px] font-semibold text-brand-maroon underline-offset-4 hover:underline"
            >
              {active.cta.label}
              <span aria-hidden="true">→</span>
            </Link> : null}
          </div>

          <button
            type="button"
            aria-expanded={detailOpen}
            aria-controls={detailId}
            onClick={() => {
              cycle.select(cycle.activeIndex);
              setDetailOpen((value) => !value);
            }}
            className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-heading"
          >
            {detailOpen ? "Hide how we work" : "See how we work"}
            <span
              aria-hidden="true"
              className={`inline-block transition-transform duration-200 motion-reduce:transition-none ${
                detailOpen ? "-rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          {detailOpen ? (
            <div id={detailId} className="mt-5 motion-safe:animate-[megamenu-in_200ms_ease-out]">
              <p className="text-eyebrow text-brand-maroon">Recognizable symptoms</p>
              <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {active.symptoms.map((symptom, index) => (
                  <li
                    key={symptom}
                    style={{ animationDelay: `${index * 60}ms` }}
                    className="card p-4 motion-safe:animate-[megamenu-in_200ms_ease-out]"
                  >
                    <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full border border-accent-azure/40 text-[11px] text-accent-azure">
                      !
                    </span>
                    <p className="mt-2 text-[13px] leading-[1.5] text-body">{symptom}</p>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-hairline-faint pt-6 sm:grid-cols-3">
                <div>
                  <dt className="text-eyebrow text-muted">Rive examines</dt>
                  <dd className="mt-1 text-[14px] leading-[1.5] text-body">{active.whatWeExamine}</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted">Expected output</dt>
                  <dd className="mt-1 text-[14px] leading-[1.5] text-body">{active.expectedOutput}</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-muted">Managed follow-on</dt>
                  <dd className="mt-1 text-[14px] leading-[1.5] text-body">{active.managedFollowOn}</dd>
                </div>
              </dl>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
