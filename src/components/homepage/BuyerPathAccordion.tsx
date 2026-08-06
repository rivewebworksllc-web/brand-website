import Link from "next/link";
import type { BuyerPath } from "@/lib/content/homepage";
import { CAPABILITY_VISUALS, CapabilityVisual } from "@/components/homepage/CapabilityVisual";

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
      {paths.map((path, index) => {
        const Icon = CAPABILITY_VISUALS[path.title]?.Icon;
        return (
        <details key={path.title} open={index === 0} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="flex items-center gap-4">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-heading">
                {Icon ? <span className="h-5 w-5">{<Icon />}</span> : String(index + 1).padStart(2, "0")}
              </span>
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
              <CapabilityVisual title={path.title} className="mb-5 w-full sm:max-w-sm" />
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

              <p className="mt-4 text-eyebrow text-accent-azure">Recognizable symptoms</p>
              <ul className="mt-2 space-y-1.5">
                {path.symptoms.map((symptom) => (
                  <li key={symptom} className="flex gap-2 text-[14px] leading-[1.6] text-body">
                    <span aria-hidden="true" className="mt-0.5 text-accent-azure">
                      ·
                    </span>
                    {symptom}
                  </li>
                ))}
              </ul>

              <dl className="mt-4 space-y-2 text-[14px] leading-[1.6]">
                <div>
                  <dt className="font-semibold text-heading">What Rive examines first</dt>
                  <dd className="text-body">{path.whatWeExamine}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-heading">Expected output</dt>
                  <dd className="text-body">{path.expectedOutput}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-heading">Managed follow-on</dt>
                  <dd className="text-body">{path.managedFollowOn}</dd>
                </div>
              </dl>
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
        );
      })}
    </div>
  );
}
