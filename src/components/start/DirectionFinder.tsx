"use client";

import { useId, useMemo, useState } from "react";
import { LinkButton } from "@/components/ui/Button";
import {
  getStartIntent,
  getStartRecommendation,
  startContent,
  startIntents,
  type StartIntentId,
} from "@/lib/content/start";

export function DirectionFinder() {
  const baseId = useId();
  const [intentId, setIntentId] = useState<StartIntentId | null>(null);
  const [refinementId, setRefinementId] = useState<string | null>(null);
  const intent = intentId ? getStartIntent(intentId) : undefined;
  const recommendation = useMemo(
    () => (intentId ? getStartRecommendation(intentId, refinementId ?? undefined) : null),
    [intentId, refinementId],
  );

  function chooseIntent(nextIntent: StartIntentId) {
    setIntentId(nextIntent);
    setRefinementId(null);
  }

  function reset() {
    setIntentId(null);
    setRefinementId(null);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16 xl:gap-24">
      <div>
        <fieldset>
          <legend className="font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.06] font-semibold tracking-[-0.018em] text-heading">
            {startContent.finder.heading}
          </legend>
          <p id={`${baseId}-intent-help`} className="mt-4 max-w-xl text-[15px] leading-[1.7] text-body">
            {startContent.finder.description}
          </p>
          <div className="mt-9 border-t border-hairline" aria-describedby={`${baseId}-intent-help`}>
            {startIntents.map((option) => {
              const checked = intentId === option.id;
              return (
                <label
                  key={option.id}
                  className="group grid min-h-20 cursor-pointer grid-cols-[1.5rem_minmax(0,1fr)] gap-4 border-b border-hairline py-5 transition-colors duration-200 hover:bg-accent-azure-soft focus-within:bg-accent-azure-soft motion-reduce:transition-none sm:grid-cols-[2rem_minmax(11rem,0.72fr)_minmax(0,1fr)] sm:items-start sm:gap-5"
                >
                  <input
                    type="radio"
                    name="start-intent"
                    value={option.id}
                    checked={checked}
                    onChange={() => chooseIntent(option.id)}
                    className="mt-1 h-5 w-5 accent-[var(--color-accent-azure)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring-color)]"
                  />
                  <span className={`text-[17px] leading-snug font-semibold ${checked ? "text-accent-azure" : "text-heading"}`}>
                    {option.label}
                  </span>
                  <span className="col-start-2 text-sm leading-[1.65] text-body sm:col-start-3">
                    {option.description}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {intent && intent.refinements.length > 0 ? (
          <fieldset className="mt-10 border-l-2 border-accent-azure pl-5 sm:ml-8 sm:pl-8">
            <legend className="text-lg font-semibold text-heading">{intent.prompt ?? startContent.finder.refinementHeading}</legend>
            <div className="mt-5 grid gap-3">
              {intent.refinements.map((option) => {
                const checked = refinementId === option.id;
                return (
                  <label
                    key={option.id}
                    className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-[15px] font-medium transition-colors duration-200 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--focus-ring-color)] motion-reduce:transition-none ${checked ? "border-accent-azure bg-accent-azure-soft text-heading" : "border-hairline bg-surface text-body hover:border-accent-azure"}`}
                  >
                    <input
                      type="radio"
                      name="start-refinement"
                      value={option.id}
                      checked={checked}
                      onChange={() => setRefinementId(option.id)}
                      className="h-5 w-5 shrink-0 accent-[var(--color-accent-azure)]"
                    />
                    <span>{option.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}
      </div>

      <aside className="self-start border-t-2 border-brand-maroon pt-7 lg:sticky lg:top-28" aria-labelledby={`${baseId}-direction-heading`}>
        <p className="text-eyebrow text-brand-maroon">{startContent.finder.resultLabel}</p>
        <div aria-live="polite" aria-atomic="true" className="mt-5 min-h-72">
          {recommendation ? (
            <div>
              <p className="text-sm font-semibold text-accent-azure">{recommendation.direction}</p>
              <h2 id={`${baseId}-direction-heading`} className="mt-3 font-serif text-[clamp(2rem,3.2vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.015em] text-heading">
                {recommendation.title}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-body">{recommendation.rationale}</p>
              <p className="mt-6 border-l border-hairline pl-4 text-sm leading-[1.7] text-muted">{recommendation.conversationPrompt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LinkButton href={startContent.finder.cta.href}>{startContent.finder.cta.label}</LinkButton>
                <button type="button" onClick={reset} className="min-h-11 rounded-sm px-2 text-sm font-semibold text-muted underline decoration-hairline underline-offset-4 hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]">
                  {startContent.finder.resetLabel}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 id={`${baseId}-direction-heading`} className="max-w-[14ch] font-serif text-[clamp(2rem,3.2vw,3.25rem)] leading-[1.08] font-semibold text-heading">
                {startContent.finder.emptyHeading}
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-body">{startContent.finder.emptyBody}</p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
