"use client";

import { useId, useRef, useState } from "react";
import type { EvidenceArtifact } from "@/lib/content/homepage";

type EvidenceExplorerProps = {
  artifacts: EvidenceArtifact[];
};

/**
 * Every artifact's title and description render unconditionally in the grid
 * below — nothing is hidden without JavaScript. Selecting a card only adds a
 * richer preview (document visual + longer text) and an active state; it
 * never removes content that was already visible, so the interaction is a
 * progressive enhancement rather than a requirement for reading the
 * Evidence Pack. RW-PW04: adds explicit Previous/Next controls alongside
 * the existing direct-selection grid and keyboard (arrow key) navigation.
 */
export function EvidenceExplorer({ artifacts }: EvidenceExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const groupId = useId();
  const previewId = `${groupId}-preview`;
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = artifacts[activeIndex];

  function goTo(index: number) {
    const count = artifacts.length;
    const next = ((index % count) + count) % count;
    setActiveIndex(next);
    return next;
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

  return (
    <div>
      <div
        role="group"
        aria-label="Evidence Pack artifacts"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {artifacts.map((artifact, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={artifact.id}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              type="button"
              aria-pressed={isActive}
              aria-controls={previewId}
              onClick={() => goTo(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`card h-full p-5 text-left transition-colors duration-200 motion-reduce:transition-none ${
                isActive ? "border-gold-deep bg-surface shadow-sm" : "hover:border-gold-deep"
              }`}
            >
              <span className="text-evidence text-brand-maroon">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h3 mt-2 text-heading">{artifact.title}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-body">
                {artifact.description}
              </p>
            </button>
          );
        })}
      </div>

      <div id={previewId} aria-live="polite" className="card mt-6 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-5">
          <div className="border-b border-hairline p-6 sm:col-span-3 sm:border-b-0 sm:border-r">
            <p className="text-evidence text-muted">
              Artifact {String(activeIndex + 1).padStart(2, "0")} of {String(artifacts.length).padStart(2, "0")}
            </p>
            <p className="mt-2 text-eyebrow text-brand-maroon">{active.title}</p>
            <p className="mt-2 text-[15px] leading-[1.65] text-body">{active.preview}</p>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => focusButton(activeIndex - 1)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-hairline text-heading transition-colors duration-200 hover:border-gold-deep motion-reduce:transition-none"
                aria-label="Previous artifact"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => focusButton(activeIndex + 1)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-hairline text-heading transition-colors duration-200 hover:border-gold-deep motion-reduce:transition-none"
                aria-label="Next artifact"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* RW-PW05: was a fake-document mock (dots + bars simulating text
              lines) — the same fake-screenshot pattern flagged elsewhere.
              Replaced with a real record stamp built from the artifact's own
              position and id, no invented content. */}
          <div
            aria-hidden="true"
            className="flex items-center justify-center border-t border-hairline bg-surface-alt p-6 sm:col-span-2 sm:border-t-0"
          >
            <div className="text-center">
              <p className="text-h1 text-heading" style={{ fontSize: "3.25rem" }}>
                {String(activeIndex + 1).padStart(2, "0")}
              </p>
              <p className="text-evidence mt-2 text-muted">{active.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
