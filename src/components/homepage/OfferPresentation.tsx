"use client";

import { useId, useRef } from "react";
import { LinkButton } from "@/components/ui/Button";
import { PresentationProgress } from "@/components/ui/PresentationProgress";
import { usePresentationCycle } from "@/hooks/usePresentationCycle";
import type { PillarOffer } from "@/lib/content/homepage";

export function OfferPresentation({ offers }: { offers: PillarOffer[] }) {
  const cycle = usePresentationCycle({ itemCount: offers.length, interval: 7000 });
  const id = useId();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = offers[cycle.activeIndex]!;

  function selectAndFocus(index: number) {
    const next = ((index % offers.length) + offers.length) % offers.length;
    cycle.select(next);
    refs.current[next]?.focus();
  }

  return (
    <div ref={cycle.containerRef} {...cycle.interactionProps} data-presentation-mode={cycle.mode}>
      <div role="tablist" aria-label="Cloud, AI and Web services" className="grid border-y border-hairline md:grid-cols-3">
        {offers.map((offer, index) => {
          const selected = index === cycle.activeIndex;
          return (
            <button
              key={offer.id}
              ref={(node) => { refs.current[index] = node; }}
              id={`${id}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => cycle.select(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") { event.preventDefault(); selectAndFocus(index + 1); }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") { event.preventDefault(); selectAndFocus(index - 1); }
                if (event.key === "Home") { event.preventDefault(); selectAndFocus(0); }
                if (event.key === "End") { event.preventDefault(); selectAndFocus(offers.length - 1); }
              }}
              className={`relative min-h-20 border-b border-hairline px-5 py-5 text-left transition-colors focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-maroon motion-reduce:transition-none md:border-r md:border-b-0 md:last:border-r-0 ${selected ? "bg-heading text-surface" : "bg-surface text-muted hover:bg-surface-alt hover:text-heading"}`}
            >
              <span className="block text-[11px] font-semibold tracking-[0.12em] uppercase">0{index + 1}</span>
              <span className="mt-2 block text-[14px] font-semibold">{offer.label}</span>
              {selected ? <PresentationProgress activeIndex={cycle.activeIndex} interval={cycle.interval} isPaused={cycle.isPaused} mode={cycle.mode} tone="dark" /> : null}
            </button>
          );
        })}
      </div>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${cycle.activeIndex}`} className="grid min-h-[29rem] border-b border-hairline bg-surface lg:grid-cols-12">
        <div key={`copy-${active.id}`} className="px-6 py-10 motion-safe:animate-[megamenu-in_250ms_ease-out] md:px-10 md:py-14 lg:col-span-7 lg:px-14 lg:py-16">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-brand-maroon uppercase">{active.label}</p>
          <h3 className="text-h2 mt-5 max-w-[13ch] text-heading">{active.heading}</h3>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-body">{active.description}</p>
          {active.note ? <p className="mt-5 max-w-lg text-[13px] leading-[1.65] text-muted">{active.note}</p> : null}
          <div className="mt-9"><LinkButton href={active.cta.href} variant="secondary">{active.cta.label}</LinkButton></div>
        </div>
        <div key={`details-${active.id}`} className="border-t border-hairline bg-surface-alt px-6 py-10 motion-safe:animate-[megamenu-in_250ms_ease-out] md:px-10 lg:col-span-5 lg:border-t-0 lg:border-l lg:px-12 lg:py-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">Working field</p>
          <ul className="mt-7 border-t border-hairline">
            {active.capabilities.map((item, index) => <li key={item} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-hairline py-5"><span className="text-evidence text-brand-maroon">0{index + 1}</span><span className="text-[14px] leading-[1.6] font-semibold text-heading">{item}</span></li>)}
          </ul>
        </div>
      </div>

      <ul className="sr-only">
        {offers.map((offer) => <li key={offer.id}>{offer.label}: {offer.heading}. {offer.description}. {offer.capabilities.join(". ")}.</li>)}
      </ul>
    </div>
  );
}
