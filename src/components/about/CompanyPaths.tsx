import Link from "next/link";

type CompanyPath = { label: string; href: string };

const descriptions: Record<string, string> = {
  Process: "How delivery moves from understanding the problem to operation.",
  "Partners and Readiness": "How platforms and implementation readiness fit the work.",
  Careers: "Future opportunities to work with Rive.",
  Contact: "Bring a live question or system decision into context.",
};

export function CompanyPaths({ paths }: { paths: readonly CompanyPath[] }) {
  return (
    <nav aria-label="More about Rive" className="mt-10 border-y border-hairline">
      {paths.map((path, index) => (
        <Link key={path.href} href={path.href} className="group grid min-h-24 items-center gap-3 border-b border-hairline py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(11rem,0.65fr)_minmax(0,1fr)_auto]">
          <span aria-hidden="true" className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-serif text-2xl font-semibold text-heading">{path.label}</span>
          <span className="max-w-xl text-sm leading-[1.65] text-body">{descriptions[path.label]}</span>
          <span aria-hidden="true" className="text-brand-maroon transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
        </Link>
      ))}
    </nav>
  );
}
