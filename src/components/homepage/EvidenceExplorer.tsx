"use client";

import { useId, useRef, useState } from "react";
import type { EvidenceArtifact } from "@/lib/content/homepage";

type EvidenceExplorerProps = {
  artifacts: EvidenceArtifact[];
};

/**
 * Every artifact's title and description render unconditionally in the grid
 * below — nothing is hidden without JavaScript. Selecting a card only adds a
 * richer preview line and an active state; it never removes content that was
 * already visible, so the interaction is a progressive enhancement rather
 * than a requirement for reading the Evidence Pack.
 */
export function EvidenceExplorer({ artifacts }: EvidenceExplorerProps) {
  const [activeId, setActiveId] = useState(artifacts[0]?.id);
  const groupId = useId();
  const previewId = `${groupId}-preview`;
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = artifacts.find((artifact) => artifact.id === activeId) ?? artifacts[0];

  function focusButton(index: number) {
    const count = artifacts.length;
    const next = ((index % count) + count) % count;
    buttonRefs.current[next]?.focus();
    setActiveId(artifacts[next].id);
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
      <div className="mx-auto max-w-xl text-center">
        <span
          aria-hidden="true"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-deep bg-navy-950 text-evidence text-white"
        >
          EP
        </span>
        <p className="mt-3 text-[14px] text-muted">
          Select an artifact for a closer look at what it contains.
        </p>
      </div>

      <div
        role="group"
        aria-label="Evidence Pack artifacts"
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {artifacts.map((artifact, index) => {
          const isActive = artifact.id === active?.id;
          return (
            <button
              key={artifact.id}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              type="button"
              aria-pressed={isActive}
              aria-controls={previewId}
              onClick={() => setActiveId(artifact.id)}
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

      <div
        id={previewId}
        aria-live="polite"
        className="card mt-6 border-l-[3px] border-l-gold-deep p-6"
      >
        <p className="text-eyebrow text-brand-maroon">{active?.title}</p>
        <p className="mt-2 text-[15px] leading-[1.65] text-body">{active?.preview}</p>
      </div>
    </div>
  );
}
