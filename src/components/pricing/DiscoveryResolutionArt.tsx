/**
 * RW-PAGE-08C: replaces the generic labeled `Placeholder` box that stood in
 * the dark Paid Discovery chapter under RW-PAGE-08B. Product Office review
 * called that treatment a neutral placeholder that had not "earned" the
 * chapter's dark, prominent position. No image-generation tool is
 * connected this session (verified again this session), so rather than
 * leave a generic labeled box, this is a bespoke authored SVG/CSS artefact
 * in the same spirit as the homepage's `CapabilityVisual.tsx` (custom
 * per-concept compositions built from tokens, not stock imagery) -
 * scattered, unlabeled marks (an unscoped need) converging along thin
 * paths into one bounded, gold-bordered object (a defined engagement).
 * Purely decorative: the surrounding copy already carries the meaning in
 * text, so this is `aria-hidden`.
 */
const scatterPoints = [
  { x: 10, y: 14, r: 5 },
  { x: 6, y: 42, r: 3.5 },
  { x: 18, y: 68, r: 4.5 },
  { x: 4, y: 88, r: 3 },
  { x: 28, y: 26, r: 3 },
];

const target = { x: 82, y: 50 };

export function DiscoveryResolutionArt() {
  return (
    <div aria-hidden="true" className="relative aspect-[4/3] w-full overflow-hidden border border-white/15 bg-navy-950">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {scatterPoints.map((p) => (
          <path
            key={`${p.x}-${p.y}`}
            d={`M ${p.x} ${p.y} Q ${(p.x + target.x) / 2} ${p.y + (target.y - p.y) / 3} ${target.x - 10} ${target.y}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-white/25"
          />
        ))}
        {scatterPoints.map((p) => (
          <circle key={`dot-${p.x}-${p.y}`} cx={p.x} cy={p.y} r={p.r / 10} fill="none" stroke="currentColor" strokeWidth="0.4" className="text-slate-300/70" />
        ))}
        <rect x={target.x - 14} y={target.y - 12} width="24" height="24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-gold" />
        <path d={`M ${target.x - 8} ${target.y} l 3.5 4 l 7 -8`} fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold" />
      </svg>
      <p className="absolute right-6 bottom-6 max-w-[9rem] text-right font-mono text-[10px] tracking-[0.08em] text-slate-400 uppercase">
        Scope defined
      </p>
    </div>
  );
}
