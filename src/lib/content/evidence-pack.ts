import { trustContent, type EvidenceArtifact } from "@/lib/content/trust";

/**
 * RW-PAGE-10: Evidence Pack authored page content.
 *
 * No new commercial or claims fact is introduced here. The six artifacts
 * (`id`/`stage`/`title`/`description`/`record`) are imported directly from
 * `trustContent.evidence.artifacts` (`src/lib/content/trust.ts`), the
 * single source of truth already approved and shipped on the Trust Center.
 * This file only adds presentational depth this route is specifically
 * commissioned to provide: a labeled, generic sample view per artifact, a
 * tier note, a privacy/ownership line and a Process-stage connection - none
 * of which state a new fact the Trust Center does not already establish in
 * spirit (`trustContent.depth`, `trustContent.handoff`, `/company/process/`
 * stage names).
 */

export type SampleView =
  | { kind: "columns"; columns: { heading: string; items: string[] }[] }
  | { kind: "checklist"; items: { label: string; state: "checked" | "pending" }[] }
  | { kind: "fields"; fields: { label: string; value: string }[] }
  | { kind: "priority"; groups: { heading: string; items: string[] }[] };

export type EvidenceArtifactDetail = {
  id: string;
  tierNote: string;
  privacy: string;
  processStage: string;
  sample: SampleView;
};

export const evidenceArtifacts: readonly EvidenceArtifact[] = trustContent.evidence.artifacts;

export const evidenceArtifactDetails: readonly EvidenceArtifactDetail[] = [
  {
    id: "scope",
    tierNote: "Typically included from Evidence Tier E1, the baseline tier.",
    privacy: "Shared with the named client contact from the start of the engagement.",
    processStage: "Understand and Define",
    sample: {
      kind: "columns",
      columns: [
        { heading: "Included in this decision", items: ["The agreed boundary of the engagement", "Named owners for each decision", "The process for changing scope mid-engagement"] },
        { heading: "Left for a separate decision", items: ["Third-party licensing costs", "Work identified for a later phase"] },
      ],
    },
  },
  {
    id: "architecture",
    tierNote: "Typically included from Evidence Tier E2.",
    privacy: "Shared once the design is agreed, before build begins.",
    processStage: "Architect",
    sample: {
      kind: "fields",
      fields: [
        { label: "Component", value: "The primary system boundary under review" },
        { label: "Connects to", value: "Adjacent systems and integration points" },
        { label: "Decision rationale", value: "Why this structure was chosen over the alternatives considered" },
      ],
    },
  },
  {
    id: "qa",
    tierNote: "Typically included from Evidence Tier E2.",
    privacy: "Shared as checks complete, not held back until the end.",
    processStage: "Verify",
    sample: {
      kind: "checklist",
      items: [
        { label: "Functional checks recorded", state: "checked" },
        { label: "Accessibility checks recorded", state: "checked" },
        { label: "Performance checks recorded", state: "pending" },
      ],
    },
  },
  {
    id: "launch",
    tierNote: "Typically included from Evidence Tier E2.",
    privacy: "Shared at the agreed release gate.",
    processStage: "Launch and handover",
    sample: {
      kind: "checklist",
      items: [
        { label: "Release conditions confirmed", state: "checked" },
        { label: "Rollback path defined", state: "checked" },
        { label: "Post-launch monitoring assigned", state: "pending" },
      ],
    },
  },
  {
    id: "runbook",
    tierNote: "Typically included from Evidence Tier E2, deeper at E3.",
    privacy: "Handed to the client's operating contact at handoff.",
    processStage: "Launch and handover, and Operate and improve",
    sample: {
      kind: "fields",
      fields: [
        { label: "Owner", value: "The named point of contact after handoff" },
        { label: "Access", value: "What the client can reach directly" },
        { label: "Escalation", value: "What requires Rive's involvement" },
      ],
    },
  },
  {
    id: "backlog",
    tierNote: "Typically included from Evidence Tier E1.",
    privacy: "Remains visible to the client. Does not become an automatic commitment.",
    processStage: "Operate and improve",
    sample: {
      kind: "priority",
      groups: [
        { heading: "Now", items: ["The highest-priority open item"] },
        { heading: "Next", items: ["Scoped, not yet started"] },
        { heading: "Later", items: ["Identified, not yet prioritized"] },
      ],
    },
  },
];

export const evidencePackContent = {
  hero: {
    eyebrow: "Evidence Pack",
    heading: "Six records. What each one contains, and what it looks like.",
    summary:
      "The Trust Center explains why Rive documents delivery. This page shows what that documentation actually is: six records, connected to the process that produces them, sample-illustrated so the promise is inspectable rather than abstract.",
    primary: { label: "See the Trust Center", href: "/trust/" },
    secondary: { label: "See the six records", href: "#register-heading" },
  },
  intro: {
    heading: "A record for each stage of the work, not a single certificate at the end.",
    description:
      "Each artifact below is the same six records introduced on the Trust Center, shown here with a labeled sample view, the evidence tier it commonly appears at, who can see it and when, and the process stage it connects to. The exact depth of each record is always set by the engagement scope, not by this page.",
  },
  registerIntro: {
    eyebrow: "The register",
    heading: "Six records, in the order they accumulate.",
  },
  tierIntro: {
    eyebrow: trustContent.depth.eyebrow,
    heading: trustContent.depth.heading,
    description: trustContent.depth.description,
    note: trustContent.depth.note,
  },
  claimNote: {
    eyebrow: trustContent.claims.eyebrow,
    heading: "What this page can say is bounded by what Rive can support.",
    description:
      "The full supported and withheld claim boundary lives on the Trust Center. Nothing on this page implies a certification, a guarantee, or real client evidence: every sample view here is a generic, illustrative mock, not a screenshot of delivered work.",
    cta: { label: "See the claim boundary", href: "/trust/#claim-boundary-heading" },
  },
  routes: {
    heading: "See how the work moves, or start with the problem in front of you.",
    items: [
      {
        label: "Process",
        heading: "See where each record is produced.",
        body: "The Process page explains the engagement movement, Understand through Operate and improve, that each record above connects to.",
        cta: { label: "See the Process", href: "/company/process/" },
        primary: true,
      },
      {
        label: "Trust Center",
        heading: "See the wider trust model.",
        body: "Practice, record, boundary and ownership, the model this page's six records sit inside.",
        cta: { label: "Back to Trust Center", href: "/trust/" },
        primary: false,
      },
    ],
  },
  final: {
    heading: "Start with the problem. Keep the proof connected to the work.",
    body: "If you are deciding where to begin, use the guided route. If the scope is already clear, start a direct conversation.",
    primary: { label: "Find Your Solution", href: "/start/" },
    secondary: { label: "Connect with Rive", href: "/connect/" },
  },
} as const;
