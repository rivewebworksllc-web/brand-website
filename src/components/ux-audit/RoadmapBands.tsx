import { roadmapBands } from "@/lib/content/ux-audit-conversion-roadmap";

/**
 * RW-PAGE-11A: replaces the earlier generic Quick win/Plan/Fill-in/
 * Reconsider quadrant model with the authoritative three-band roadmap
 * (Quick wins 0-2 weeks, Medium 2-8 weeks, Rebuild scope 8+ weeks). Still
 * structural, not a chart, not draggable; every band carries a text label
 * and window, never color alone.
 */
export function RoadmapBands() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {roadmapBands.map((band) => (
        <div key={band.id} className="border border-hairline bg-surface-alt p-6">
          <p className="text-eyebrow text-brand-maroon">{band.label}</p>
          <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-muted uppercase">{band.window}</p>
          <p className="mt-3 text-sm leading-[1.7] text-body">{band.detail}</p>
        </div>
      ))}
    </div>
  );
}
