import Link from "next/link";
import type { ResourceCard as ResourceCardContent } from "@/lib/content/homepage";

export function ResourceCard({ category, title, summary, href, metaStatus }: ResourceCardContent) {
  return (
    <Link href={href} className="card card-interactive group flex h-full flex-col p-6">
      <p className="text-eyebrow text-brand-maroon">{category}</p>
      <h3 className="text-h3 mt-2 text-heading">{title}</h3>
      <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-body">{summary}</p>
      <div className="mt-4 flex items-center justify-between border-t border-hairline-faint pt-3">
        <span className="text-evidence text-muted">
          {metaStatus === "pending" ? "Author & reading time: pending review" : null}
        </span>
        <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-brand-maroon underline-offset-4 group-hover:underline">
          Read
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
