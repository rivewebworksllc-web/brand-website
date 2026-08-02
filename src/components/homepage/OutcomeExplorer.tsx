"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import type { BuyerPath } from "@/lib/content/homepage";

type OutcomeExplorerProps = {
  paths: BuyerPath[];
};

/**
 * Desktop-only two-column Guided Outcome Explorer (RW-PW04). Below `lg` the
 * BuyerPathAccordion renders instead — both exist in server-rendered HTML at
 * all times (toggled purely by CSS breakpoint), so no essential content
 * depends on JavaScript or viewport. Illustration 2 ("Outcome Transformation")
 * was explicitly deferred this sprint; the panel currently carries a simple
 * numbered accent rather than the full theme-aware illustration system.
 */
export function OutcomeExplorer({ paths }: OutcomeExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = paths[activeIndex];

  function focusIndex(index: number) {
    const count = paths.length;
    const next = ((index % count) + count) % count;
    buttonRefs.current[next]?.focus();
    setActiveIndex(next);
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
    <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        role="tablist"
        aria-label="Buyer outcomes"
        aria-orientation="vertical"
        className="col-span-4 divide-y divide-hairline border-y border-hairline"
      >
        {paths.map((path, index) => {
          const isActive = index === activeIndex;
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
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`flex w-full items-center gap-4 py-5 text-left transition-colors duration-200 motion-reduce:transition-none ${
                isActive ? "text-heading" : "text-muted hover:text-heading"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-evidence transition-colors duration-200 motion-reduce:transition-none ${
                  isActive ? "border-azure-600 bg-azure-600 text-white" : "border-hairline"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-h3">{path.title}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`${panelId}-panel`}
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${activeIndex}`}
        className="col-span-8"
      >
        <div className="card p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-eyebrow text-accent-azure">If this is you</p>
              <p className="mt-2 text-[16px] leading-[1.65] text-body">{active.problem}</p>
            </div>
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent-gold text-h3 text-heading"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-6">
            <p className="text-eyebrow text-brand-maroon">Recognizable symptoms</p>
            <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {active.symptoms.map((symptom) => (
                <li key={symptom} className="flex gap-2 text-[14px] leading-[1.6] text-body">
                  <span aria-hidden="true" className="mt-0.5 text-accent-azure">
                    ·
                  </span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

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

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-hairline-faint pt-6">
            <p className="text-[15px] font-medium text-heading">{active.outcome}</p>
            <Link
              href={active.cta.href}
              className="inline-flex shrink-0 items-center gap-1 text-[15px] font-semibold text-brand-maroon underline-offset-4 hover:underline"
            >
              {active.cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
