import Link from "next/link";
import type { EditorialResource } from "@/lib/content/resources";
import { ResourceMeta } from "./ResourceMeta";

export function ResourceCard({ resource }: { resource: EditorialResource }) {
  const content = (
    <>
      <ResourceMeta resource={resource} />
      <h3 className="mt-5 max-w-[22ch] font-serif text-[26px] leading-[1.12] font-semibold tracking-[-0.01em] text-heading">{resource.title}</h3>
      <p className="mt-4 max-w-[42ch] text-[14px] leading-[1.7] text-body">{resource.excerpt}</p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <span className="text-xs font-medium text-muted">{resource.href ? "Read guide" : "Editorial review"}</span>
        <span aria-hidden="true" className="text-brand-maroon transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
      </div>
    </>
  );

  const classes = "group flex min-h-80 flex-col border-t border-hairline py-7 transition-[border-color,background-color] duration-200 motion-reduce:transition-none";
  return resource.href ? <Link href={resource.href} className={`${classes} hover:border-gold-deep`}>{content}</Link> : <article className={classes}>{content}</article>;
}
