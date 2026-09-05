import { componentAnatomy, componentAnatomyIntro } from "@/lib/content/brand-identity-digital-design-system";

/**
 * RW-PAGE-13: the page's second signature section (Memorable Moment B),
 * reusing `IllustrativeFinding.tsx`'s native-`<details>` specimen technique
 * (same accessible disclosure pattern already established for UXR-01)
 * rather than inventing a new interaction primitive. Content shape is
 * distinct: this is one component exploded into the decisions that define
 * it, not an evidence-severity finding.
 */
export function ComponentAnatomy() {
  return (
    <details className="group border border-hairline bg-surface-alt p-6 md:p-7">
      <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 border border-hairline px-4 py-2 text-[13px] font-semibold text-heading transition-colors duration-200 group-open:border-brand-maroon group-open:text-brand-maroon">
        <span>See the button&apos;s anatomy</span>
        <span aria-hidden="true" className="text-lg font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">
          +
        </span>
      </summary>

      <div className="mt-5 space-y-5 border-t border-dashed border-hairline pt-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {componentAnatomy.map((item) => (
            <div key={item.id}>
              <p className="text-eyebrow text-heading">{item.label}</p>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-body">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed border-hairline pt-4">
          <p className="text-eyebrow text-muted">Reused across every variant</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {componentAnatomyIntro.variants.map((variant) => (
              <span key={variant} className="border border-hairline-faint px-3 py-1.5 text-[12px] font-semibold text-heading">
                {variant}
              </span>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}
