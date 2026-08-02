import Link from "next/link";
import type { BuyerPath } from "@/lib/content/homepage";

type BuyerPathAccordionProps = {
  paths: BuyerPath[];
};

/**
 * Native <details>/<summary> disclosure list instead of a 4-up card grid —
 * works with zero JavaScript, has built-in keyboard support, and reads as a
 * deliberate editorial list rather than the default "four identical tiles"
 * pattern. The first row is open by default so the fold isn't empty.
 */
export function BuyerPathAccordion({ paths }: BuyerPathAccordionProps) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {paths.map((path, index) => (
        <details key={path.title} open={index === 0} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="flex items-center gap-4">
              <span className="text-evidence text-muted">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-h3 text-heading">{path.title}</span>
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl text-muted transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>

          <div className="mt-5 grid grid-cols-1 gap-6 pl-0 sm:pl-11 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-[15px] leading-[1.6] text-body">
                <span className="font-semibold text-heading">If: </span>
                {path.problem}
              </p>
              <p className="mt-2 text-[15px] leading-[1.6] text-body">
                <span className="font-semibold text-heading">Then: </span>
                {path.outcome}
              </p>
              <ol
                aria-label="Typical route"
                className="text-evidence mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-muted"
              >
                <li>Need</li>
                <li aria-hidden="true">→</li>
                <li>{path.startingEngagements[0]}</li>
                {path.startingEngagements.length > 1 ? (
                  <>
                    <li aria-hidden="true">→</li>
                    <li>{path.startingEngagements[1]}</li>
                  </>
                ) : null}
                <li aria-hidden="true">→</li>
                <li>Managed outcome</li>
              </ol>
            </div>

            <div className="flex items-start lg:justify-end">
              <Link
                href={path.cta.href}
                className="group/link inline-flex items-center gap-1 text-[15px] font-semibold text-brand-maroon underline-offset-4 hover:underline"
              >
                {path.cta.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
