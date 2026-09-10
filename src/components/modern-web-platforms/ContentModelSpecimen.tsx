import { contentModelFields, contentModelNote, contentModelSurfaces } from "@/lib/content/modern-web-platforms";
import { IncludedIcon } from "@/components/pricing/PricingIcons";

/**
 * RW-PAGE-14: reuses `ComponentAnatomy.tsx`'s native-`<details>` specimen
 * technique (same accessible disclosure pattern already established for
 * FND-05, itself reused from UXR-01's `IllustrativeFinding.tsx`). Content
 * shape is distinct: this is one structured content object shown feeding
 * three separate surfaces, not a component's defining decisions.
 */
export function ContentModelSpecimen() {
  return (
    <details className="group border border-hairline bg-surface-alt p-6 md:p-7">
      <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 border border-hairline px-4 py-2 text-[13px] font-semibold text-heading transition-colors duration-200 group-open:border-brand-maroon group-open:text-brand-maroon">
        <span>See the content model example</span>
        <span aria-hidden="true" className="text-lg font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">
          +
        </span>
      </summary>

      <div className="mt-5 space-y-5 border-t border-dashed border-hairline pt-5">
        <div>
          <p className="inline-flex items-center border border-hairline px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
            Illustrative
          </p>
          <p className="mt-3 font-mono text-[12px] tracking-[0.04em] text-muted uppercase">Service</p>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {contentModelFields.map((field) => (
              <li key={field.id} className="border-l-2 border-hairline pl-3 text-[13px] leading-[1.6] text-body">
                {field.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-dashed border-hairline pt-4">
          <p className="text-eyebrow text-heading">Feeds</p>
          <ul className="mt-3 space-y-2">
            {contentModelSurfaces.map((surface) => (
              <li key={surface} className="flex items-start gap-2 text-[13px] leading-[1.6] text-body">
                <IncludedIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-maroon" />
                <span>{surface}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-dashed border-hairline pt-4 text-xs leading-[1.6] text-muted">{contentModelNote}</p>
      </div>
    </details>
  );
}
