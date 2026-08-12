import { Placeholder } from "@/components/media/Placeholder";
import type { EditorialResource } from "@/lib/content/resources";
import { ResourceMeta } from "./ResourceMeta";

export function FeaturedResource({ resource }: { resource: EditorialResource }) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-hairline bg-surface lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.85fr)]">
      {resource.media ? <Placeholder meta={resource.media} className="h-full min-h-72 w-full rounded-none border-0" /> : null}
      <div className="flex flex-col justify-end p-7 md:p-10 lg:p-12">
        <p className="text-eyebrow text-brand-maroon">Featured guide</p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,3.2vw,3.5rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-heading">{resource.title}</h2>
        <p className="mt-5 text-[15px] leading-[1.75] text-body">{resource.excerpt}</p>
        <div className="mt-8 border-t border-hairline pt-4"><ResourceMeta resource={resource} /></div>
        <p className="mt-5 text-sm font-medium text-muted">Publication route pending editorial approval</p>
      </div>
    </article>
  );
}
