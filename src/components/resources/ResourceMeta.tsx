import { resourceCategoryLabels, type EditorialResource } from "@/lib/content/resources";

export function ResourceMeta({ resource, inverse = false }: { resource: EditorialResource; inverse?: boolean }) {
  return (
    <p className={`font-mono text-[11px] leading-relaxed uppercase tracking-[0.08em] ${inverse ? "text-slate-200" : "text-muted"}`}>
      {resourceCategoryLabels[resource.category]}
      {resource.readingTime ? ` · ${resource.readingTime}` : " · Metadata pending review"}
    </p>
  );
}
