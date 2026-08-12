"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export function WorkFAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question}>
            <h3>
              <button type="button" aria-expanded={expanded} aria-controls={`work-faq-answer-${index}`} onClick={() => setOpen(expanded ? null : index)} className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left text-[16px] font-semibold text-heading md:text-lg">
                <span>{item.question}</span>
                <span aria-hidden="true" className={`shrink-0 text-xl font-normal transition-transform motion-reduce:transition-none ${expanded ? "rotate-45" : ""}`}>+</span>
              </button>
            </h3>
            <div id={`work-faq-answer-${index}`} hidden={!expanded} className="pb-6 pr-10 text-[15px] leading-[1.7] text-body md:text-base">{item.answer}</div>
          </div>
        );
      })}
    </div>
  );
}
