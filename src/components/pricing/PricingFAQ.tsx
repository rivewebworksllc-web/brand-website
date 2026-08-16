import { pricingFaq } from "@/lib/content/pricing";

/**
 * RW-PAGE-08B: unlike `WorkFAQ` (client component, `useState`-driven), this
 * uses native `<details>`/`<summary>` so all seven answers exist in the
 * initial server-rendered HTML with zero JS dependency and native keyboard
 * support - the strongest form of "essential content must be server
 * rendered" the directive asks for. First item opens by default via the
 * `open` attribute, matching `WorkFAQ`'s "first item visible" precedent.
 */
export function PricingFAQ() {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {pricingFaq.map((item, index) => (
        <details key={item.id} id={item.id} className="group py-1" open={index === 0}>
          <summary className="flex min-h-14 w-full cursor-pointer list-none items-center justify-between gap-5 py-4 text-left text-[16px] font-semibold text-heading md:text-lg">
            <span>{item.question}</span>
            <span aria-hidden="true" className="shrink-0 text-xl font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
          </summary>
          <div className="pb-6 pr-10 text-[15px] leading-[1.7] text-body md:text-base">
            <p>{item.answer}</p>
            {item.list ? (
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {item.list.map((entry) => (
                  <li key={entry} className="text-[14px] leading-[1.6] text-body">
                    &bull; {entry}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
