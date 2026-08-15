export type TrustLink = {
  label: string;
  href: string;
};

export type EvidenceArtifact = {
  id: string;
  stage: string;
  title: string;
  description: string;
  record: string;
};

export const trustContent = {
  hero: {
    eyebrow: "Trust Center",
    heading: "Trust should leave a record.",
    summary:
      "Rive makes delivery easier to inspect by recording scope, technical decisions, validation, release readiness and the information needed after handoff.",
    primary: { label: "Inspect the Evidence Pack", href: "/trust/evidence-pack/" },
    secondary: { label: "See the delivery process", href: "/company/process/" },
  },
  model: {
    heading: "Confidence comes from visible operating discipline.",
    description:
      "The trust model connects what Rive does to the record it creates, the boundary it respects and the person who can inspect the result.",
    items: [
      {
        label: "Practice",
        title: "The work follows defined controls.",
        detail: "Scope, responsibilities and review points are established before release decisions are made.",
      },
      {
        label: "Record",
        title: "Important decisions remain legible.",
        detail: "Architecture, validation and handoff information are documented as part of delivery.",
      },
      {
        label: "Boundary",
        title: "Limits are stated rather than hidden.",
        detail: "The engagement defines what is included, what is separate and what evidence is expected.",
      },
      {
        label: "Ownership",
        title: "The client can inspect what remains.",
        detail: "Handoff is designed to reduce dependence on undocumented decisions or inaccessible operational knowledge.",
      },
    ],
  },
  evidence: {
    eyebrow: "Evidence Pack introduction",
    heading: "Proof accumulates while the work is happening.",
    description:
      "Six records connect the initial decision to the system that is handed over. Their exact depth depends on the engagement scope.",
    artifacts: [
      {
        id: "scope",
        stage: "Decision",
        title: "Scope decisions",
        description: "What was agreed, what changed during delivery and why.",
        record: "Approved boundaries and change decisions",
      },
      {
        id: "architecture",
        stage: "Design",
        title: "Architecture record",
        description: "What was built, how it connects and why technical decisions were made.",
        record: "System relationships and decision rationale",
      },
      {
        id: "qa",
        stage: "Validation",
        title: "QA evidence",
        description: "Dated results from the checks included in the engagement scope.",
        record: "Testing, validation and observed results",
      },
      {
        id: "launch",
        stage: "Release",
        title: "Launch checklist",
        description: "The release-readiness checks associated with the agreed delivery gate.",
        record: "Readiness decisions before release",
      },
      {
        id: "runbook",
        stage: "Operation",
        title: "Operations runbook",
        description: "Instructions for operating and maintaining the delivered system after handoff.",
        record: "Operating guidance and access context",
      },
      {
        id: "backlog",
        stage: "Continuation",
        title: "Improvement backlog",
        description: "Known gaps, future enhancements and recommended next work.",
        record: "Prioritised improvements and open decisions",
      },
    ] satisfies EvidenceArtifact[],
  },
  depth: {
    eyebrow: "Evidence depth",
    heading: "The label is not the proof. The defined records are.",
    description:
      "Rive service specifications may identify an E1, E2 or E3 evidence tier. The engagement scope states which records and checks are included. The tier does not replace that written definition.",
    note: "Evidence expectations belong in scope before work begins, not in a marketing claim after delivery.",
  },
  boundaries: {
    eyebrow: "Operating boundaries",
    heading: "Three trust questions, answered through practice.",
    description:
      "Security, privacy and accessibility are treated as parts of delivery quality. The exact controls remain proportionate to the system and the agreed scope.",
    items: [
      {
        title: "Security",
        question: "How is important access and technical risk handled?",
        practice: "Define access boundaries, keep secrets out of public code and review the deployment concerns included in scope.",
        evidence: "Architecture decisions, access context, validation results and operating guidance where applicable.",
        boundary: "No claim of guaranteed security, certification or continuous monitoring unless separately evidenced and contracted.",
      },
      {
        title: "Privacy",
        question: "What information is needed, and who should have it?",
        practice: "Minimise information collected during early contact and keep private client material outside public content systems.",
        evidence: "Defined handling, access and handoff responsibilities where the engagement requires them.",
        boundary: "The Trust Center explains operating practice. It does not replace contractual or legal privacy terms.",
      },
      {
        title: "Accessibility",
        question: "Can quality be checked by more than appearance?",
        practice: "Review semantic structure, keyboard use, focus, contrast, reflow and reduced-motion behaviour as applicable to the build.",
        evidence: "Automated results and manual observations can be included in the QA evidence defined for the engagement.",
        boundary: "Testing language does not imply formal certification or universal conformance beyond the evidence recorded.",
      },
    ],
  },
  claims: {
    eyebrow: "Claim boundary",
    heading: "What Rive can say is bounded by what Rive can support.",
    supported: {
      label: "Supported",
      statement: "Describe capability, process and evidence only at the depth the current record allows.",
      items: [
        "Current operating practices",
        "Dated delivery records",
        "Approved capability language",
        "Client proof with permission",
      ],
    },
    withheld: {
      label: "Withheld",
      statement: "Leave status, outcomes and credentials unpublished until the appropriate approval and evidence exist.",
      items: [
        "Unearned partner designations",
        "Unapproved certifications",
        "Unsupported performance claims",
        "Private client evidence",
      ],
    },
    note: "Restraint is part of the trust model. A polished badge or diagram does not make an unsupported statement true.",
  },
  handoff: {
    eyebrow: "Ownership and handoff",
    heading: "The record should remain useful after the engagement changes hands.",
    description:
      "The Evidence Pack is designed to make decisions, validation and operating context easier to inspect. The exact artifacts transferred are defined by the engagement scope.",
    points: [
      "Decisions remain connected to their rationale.",
      "Validation remains connected to what was checked.",
      "Operating guidance remains connected to the delivered system.",
      "Future work remains visible without becoming an automatic commitment.",
    ],
  },
  routes: {
    heading: "Inspect the proof system, or see how the work moves.",
    items: [
      {
        label: "Evidence Pack",
        heading: "See what the delivery records are designed to contain.",
        body: "The dedicated Evidence Pack route provides the deeper artifact view when that page is commissioned and available.",
        cta: { label: "Explore Evidence Pack", href: "/trust/evidence-pack/" },
        primary: true,
      },
      {
        label: "Process",
        heading: "See where decisions and validation enter delivery.",
        body: "The Process page explains the engagement movement and the review gates that produce evidence.",
        cta: { label: "See the Process", href: "/company/process/" },
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
