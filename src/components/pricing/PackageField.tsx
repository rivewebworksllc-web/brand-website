import { packageGroups, projectPackages } from "@/lib/content/pricing";
import { groupIcon } from "@/components/pricing/PricingIcons";
import { PackageCard } from "@/components/pricing/PackageCard";

/**
 * RW-PAGE-08C: family-chapter headers strengthened after Product Office
 * review found the Web/AI/Cloud & Data groupings visually too weak to scan
 * before reading individual package copy. Each family now gets a bordered
 * icon badge (matching the badge introduced on `PackageCard` itself, so the
 * two read as one system), a large serial marker and a short rule beneath
 * the heading - scannable at a glance, still one continuous field rather
 * than three unrelated sections. Grouping itself (Web / AI / Cloud & Data)
 * is unchanged from RW-PAGE-08B: Cloud and Data packages share `CLD-`
 * catalog codes throughout the v49 authority, so splitting them into a
 * fourth top-level family would imply a taxonomy the commercial authority
 * does not actually draw - see the RW-PAGE-08C report for the full
 * reasoning. The stronger heading treatment satisfies the "four buyer
 * families" legibility ask without inventing a fourth group.
 */
export function PackageField() {
  return (
    <div className="space-y-16">
      {packageGroups.map((group, index) => {
        const items = projectPackages.filter((p) => p.group === group.id);
        const Icon = groupIcon[group.id];
        return (
          <div key={group.id}>
            <div className="flex items-end gap-5 border-b-2 border-heading pb-5">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center border border-hairline bg-surface-alt text-brand-maroon"
              >
                <Icon className="h-6 w-6" />
              </span>
              <div className="flex items-baseline gap-3">
                <span aria-hidden="true" className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h3 text-heading">{group.label}</h3>
                  <p className="mt-1 text-sm text-muted">{group.description}</p>
                </div>
              </div>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {items.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
