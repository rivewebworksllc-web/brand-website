import type { ReactElement } from "react";
import type { PlaceholderMeta } from "@/components/media/Placeholder";
import { CATEGORY_LABEL } from "@/components/media/Placeholder";

/**
 * RW-PW08: bespoke line icons + Visual Story Panels for the Capability
 * Explorer (`OutcomeExplorer`). Distinct from `MegaMenuVisual` — different
 * section, different data (buyer paths, not nav categories) — so nothing
 * here is a repeat of that component's compositions, per the standing
 * "don't reuse an interaction twice" guidance. Motion is reserved for the
 * one capability whose identity is "Intelligent" (Secure AI & Automation);
 * the other three stay still, per "motion should communicate navigation,
 * not decoration."
 */

export type CapabilityVisualEntry = {
  Icon: () => ReactElement;
  meta: PlaceholderMeta;
  Visual: () => ReactElement;
};

function WebsiteGrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 8.5h18" />
      <path d="M7 14.5l3-3 2.5 2.5L17 9.5" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17.5a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.66-1.79A4.5 4.5 0 0 1 17.5 17.5H7Z" />
      <path d="M9 20.5v-1M12 20.5v-1M15 20.5v-1" />
    </svg>
  );
}

function SecureAiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="1.6" />
      <circle cx="6" cy="16" r="1.6" />
      <circle cx="18" cy="16" r="1.6" />
      <path d="M12 7.6L6.9 14.7M12 7.6l5.1 7.1M7.6 16h8.8" />
    </svg>
  );
}

function ManagedCareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5l7 2.5v5.2c0 4.4-3 7.4-7 9.3-4-1.9-7-4.9-7-9.3V6l7-2.5Z" />
    </svg>
  );
}

function WebsiteGrowthVisual() {
  return (
    <div className="atmosphere-grid absolute inset-0 bg-surface-alt" aria-hidden="true">
      <div className="absolute inset-6 rounded-md border border-hairline bg-surface">
        <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
          <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
          <span className="h-1.5 w-1.5 rounded-full bg-hairline" />
        </div>
        <svg viewBox="0 0 200 90" className="h-[calc(100%-33px)] w-full" fill="none">
          <path
            d="M12 70 L55 45 L90 58 L140 24 L188 14"
            stroke="var(--color-gold-deep)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[
            [12, 70],
            [55, 45],
            [90, 58],
            [140, 24],
            [188, 14],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="var(--color-brand-maroon)" />
          ))}
        </svg>
      </div>
    </div>
  );
}

function CloudTopologyVisual() {
  const nodes = [
    { x: 60, y: 150 },
    { x: 150, y: 150 },
    { x: 240, y: 150 },
  ];
  return (
    <div className="absolute inset-0 bg-surface-alt" aria-hidden="true">
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full" fill="none">
        <path
          d="M110 80a34 34 0 0 1 62-19 42 42 0 0 1 40 41.5 36 36 0 0 1-9 71.5H119a38 38 0 0 1-9-93.5Z"
          stroke="var(--color-accent-azure-strong)"
          strokeWidth="1.75"
        />
        {nodes.map((node, index) => (
          <g key={index}>
            <line x1={150} y1={128} x2={node.x} y2={node.y} stroke="var(--color-hairline)" strokeWidth="1.25" strokeDasharray="3 4" />
            <rect x={node.x - 12} y={node.y - 9} width="24" height="18" rx="3" fill="var(--color-surface)" stroke="var(--color-gold-deep)" strokeWidth="1.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function SecureAiVisual() {
  const nodes = [
    { x: 150, y: 40, big: true },
    { x: 60, y: 100 },
    { x: 240, y: 100 },
    { x: 90, y: 170 },
    { x: 210, y: 170 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [1, 2],
  ];
  return (
    <div className="absolute inset-0 bg-surface-alt" aria-hidden="true">
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full" fill="none">
        {edges.map(([a, b], index) => (
          <line
            key={index}
            x1={nodes[a]!.x}
            y1={nodes[a]!.y}
            x2={nodes[b]!.x}
            y2={nodes[b]!.y}
            stroke="var(--color-accent-azure-strong)"
            strokeWidth="1.25"
            className="motion-safe:animate-[connector-pulse_2.6s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 0.3}s` }}
          />
        ))}
        {nodes.map((node, index) => (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={node.big ? 9 : 6}
            fill={node.big ? "var(--color-gold-deep)" : "var(--color-surface)"}
            stroke={node.big ? "var(--color-surface)" : "var(--color-brand-maroon)"}
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}

function ManagedCareVisual() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background: "radial-gradient(circle at 35% 40%, var(--color-accent-azure-soft), var(--color-surface-alt) 72%)",
      }}
    >
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full" fill="none">
        <circle cx="128" cy="100" r="44" fill="var(--color-gold-deep)" opacity="0.16" />
        <circle cx="182" cy="100" r="44" fill="var(--color-brand-maroon)" opacity="0.14" />
        <line x1="150" y1="100" x2="160" y2="100" stroke="var(--color-brand-maroon)" strokeWidth="1.5" strokeDasharray="2 4" />
      </svg>
    </div>
  );
}

export const CAPABILITY_VISUALS: Record<string, CapabilityVisualEntry> = {
  "Website & Growth": {
    Icon: WebsiteGrowthIcon,
    Visual: WebsiteGrowthVisual,
    meta: {
      id: "RW-CAP-001",
      category: "architecture-diagram",
      purpose: "A conversion path visualised, not just described",
      aspect: "16:10",
      composition: "A browser frame with an ascending conversion line",
      mood: "Architectural, upward, precise",
      replacement: "Commissioned Rive illustration",
      priority: "P0",
      motion: "none",
    },
  },
  "AWS & Microsoft Cloud": {
    Icon: CloudIcon,
    Visual: CloudTopologyVisual,
    meta: {
      id: "RW-CAP-002",
      category: "architecture-diagram",
      purpose: "A cloud foundation, not a stock cloud icon",
      aspect: "16:10",
      composition: "A cloud outline resolving into three connected foundations",
      mood: "Infrastructural, grounded",
      replacement: "Commissioned Rive illustration",
      priority: "P0",
      motion: "none",
    },
  },
  "Secure AI & Automation": {
    Icon: SecureAiIcon,
    Visual: SecureAiVisual,
    meta: {
      id: "RW-CAP-003",
      category: "feature-illustration",
      purpose: "Governed intelligence, shown as a constrained network",
      aspect: "16:10",
      composition: "A bounded node network with one accountable centre",
      mood: "Intelligent, alive, still governed",
      replacement: "Commissioned Rive illustration",
      priority: "P0",
      motion: "ambient-drift",
    },
  },
  "Managed Care & Advisory": {
    Icon: ManagedCareIcon,
    Visual: ManagedCareVisual,
    meta: {
      id: "RW-CAP-004",
      category: "workspace-photography",
      purpose: "An ongoing relationship, not a headshot grid",
      aspect: "16:10",
      composition: "Two overlapping fields in warm, human tones",
      mood: "Human, warm, steady",
      replacement: "Real team/workspace photography",
      priority: "P1",
      motion: "none",
    },
  },
};

type CapabilityVisualProps = {
  title: string;
  className?: string;
};

export function CapabilityVisual({ title, className = "" }: CapabilityVisualProps) {
  const entry = CAPABILITY_VISUALS[title];
  if (!entry) return null;
  const { Visual, meta } = entry;

  return (
    <div
      role="img"
      aria-label={`${meta.purpose} — placeholder, ${meta.mood.toLowerCase()}`}
      className={`relative overflow-hidden rounded-lg border border-hairline ${className}`.trim()}
      style={{ aspectRatio: meta.aspect.replace(":", " / ") }}
    >
      <Visual />
      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-sm border border-hairline bg-surface/90 px-2 py-0.5 text-[11px] font-medium text-muted backdrop-blur-sm">
        <span>{CATEGORY_LABEL[meta.category]} · pending</span>
        <span className="text-hairline" aria-hidden="true">
          ·
        </span>
        <span>{meta.id}</span>
      </div>
    </div>
  );
}
