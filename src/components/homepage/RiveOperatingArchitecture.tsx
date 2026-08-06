"use client";

import { useEffect, useRef, useState } from "react";
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
 *
 * RW-PW06A: "the hero should feel like the operating system booting" — the
 * four nodes and their connecting spine build once, in sequence, the first
 * time this enters the viewport (IntersectionObserver, not scroll-jacking).
 * Motion explains build order, it doesn't decorate; it never replays.
 * `js-reveal` is the noscript fallback hook (see layout.tsx) so a visitor
 * without JavaScript still sees the full, static architecture immediately.
 */
export function RiveOperatingArchitecture({ steps }: RiveOperatingArchitectureProps) {
  const ref = useRef<HTMLOListElement>(null);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBooted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBooted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      aria-label="The Rive operating architecture: Digital Experience, Cloud Foundation, Governed AI, Managed Outcomes"
      className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6"
    >
      {steps.map((step, index) => (
        <li key={step.id} className="relative">
          <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
            <span
              aria-hidden="true"
              className={`js-reveal flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent-gold bg-accent-surface text-evidence font-semibold text-accent-foreground transition-all duration-500 ease-out motion-reduce:transition-none lg:h-14 lg:w-14 ${
                booted ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: booted ? `${index * 220}ms` : "0ms" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className={`js-reveal hidden h-px flex-1 origin-left bg-accent-gold transition-transform duration-500 ease-out motion-reduce:transition-none lg:block ${
                  booted ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transitionDelay: booted ? `${index * 220 + 150}ms` : "0ms" }}
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
