"use client";

import { useState } from "react";

type ProcessFaqItem = {
  question: string;
  answer: string;
};

export function ProcessFAQ({ items }: { items: readonly ProcessFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-y border-hairline">
      {items.map((item, index) => {
        const expanded = openIndex === index;
        const answerId = `process-faq-answer-${index}`;

        return (
          <div key={item.question} className="border-b border-hairline last:border-b-0">
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={answerId}
                onClick={() => setOpenIndex(expanded ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-[16px] font-semibold text-heading transition-colors duration-200 hover:text-brand-maroon focus-visible:text-brand-maroon motion-reduce:transition-none md:text-lg"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl font-normal transition-transform duration-200 motion-reduce:transition-none ${expanded ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={answerId} hidden={!expanded} className="max-w-2xl pb-6 pr-10 text-[15px] leading-[1.75] text-body md:text-base">
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
