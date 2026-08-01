import Link from "next/link";

export type Breadcrumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
};

/**
 * Foundation for inner-page breadcrumb trails. Not rendered on the
 * homepage (the root has no trail); reused once P0 routes land.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-navy-950">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
              {!isLast ? (
                <span aria-hidden="true" className="text-slate-200">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
