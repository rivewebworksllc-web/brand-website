"use client";

import { useEffect, useState } from "react";
import type { ArchitectureFlowStep } from "@/lib/content/homepage";

type ArchitectureSpineProps = {
  steps: ArchitectureFlowStep[];
};

/**
 * RW-PW06A: the persistent architectural spine — a fixed rail connecting the
 * hero's Rive Operating Architecture to the four sections that correspond to
 * one of its stages (each carries `id="stage-<id>"`, see the section files).
 * A node "activates" (ratchet, never reverts) once its section crosses the
 * vertical middle of the viewport, tracked via IntersectionObserver — no
 * scroll listener, no continuous position math. The fill line's height
 * simply reflects how many stages have been reached so far.
 *
 * Decorative support only (`aria-hidden`): content remains fully readable
 * and navigable with this hidden entirely. Hidden below `md` (mobile gets no
 * spine — the content itself carries the connection), line+dots only at
 * `md`-`lg` (tablet), hover labels added at `lg+` (desktop).
 */
export function ArchitectureSpine({ steps }: ArchitectureSpineProps) {
  const [reached, setReached] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    steps.forEach((step) => {
      const el = document.getElementById(`stage-${step.id}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setReached((prev) => (prev[step.id] ? prev : { ...prev, [step.id]: true }));
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [steps]);

  const reachedCount = steps.filter((step) => reached[step.id]).length;
  const fillScale = steps.length > 0 ? reachedCount / steps.length : 0;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 left-4 z-30 hidden -translate-y-1/2 md:block md:left-6"
    >
      <div className="relative flex h-56 flex-col justify-between lg:h-72">
        <div className="absolute inset-x-0 top-0 mx-auto h-full w-px bg-hairline" />
        <div
          className="absolute inset-x-0 top-0 mx-auto w-px origin-top bg-gold-deep transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ height: "100%", transform: `scaleY(${fillScale})` }}
        />

        {steps.map((step) => {
          const isReached = Boolean(reached[step.id]);
          return (
            <div key={step.id} className="group relative z-10 flex justify-center">
              <span
                className={`h-2.5 w-2.5 rounded-full border-2 transition-colors duration-500 motion-reduce:transition-none ${
                  isReached ? "border-gold-deep bg-gold-deep" : "border-hairline bg-surface"
                }`}
              />
              <span className="pointer-events-none absolute top-1/2 left-5 hidden -translate-y-1/2 rounded-sm border border-hairline bg-surface px-2 py-1 text-[11px] font-medium whitespace-nowrap text-heading opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 lg:block">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
