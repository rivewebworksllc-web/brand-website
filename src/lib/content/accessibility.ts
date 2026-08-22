import { trustContent } from "@/lib/content/trust";

/**
 * RW-PAGE-12R: Accessibility Trust page content authority.
 *
 * This is a Trust operating-practice page, not a commercial service page.
 * RW-PAGE-12's Sellability Gate for a standalone "Accessibility AA
 * Remediation" service failed (no code, price, timeline, evidence tier,
 * deliverable list, exclusions or attach path exists anywhere in the
 * repository) and remains unreversed - this file introduces no price, no
 * CTA to buy anything, and no new CLAIMS_REGISTER entry. The accessibility
 * claim boundary is reused verbatim from `trustContent.boundaries.items`
 * (the existing, already-approved Accessibility entry), not re-authored.
 */

const accessibilityBoundary = trustContent.boundaries.items.find((item) => item.title === "Accessibility")!;

export const positioning = {
  eyebrow: "Accessibility",
  heading: "The path should stay open when the mouse disappears, the screen changes, or the interface is interpreted differently.",
  summary:
    "Rive designs and validates against WCAG 2.2 AA-informed practices, using both automated and manual checks as part of delivery quality. This page explains how that practice works, not a service to buy.",
  statement:
    "Rive's accessibility approach is WCAG 2.2 AA-informed. Testing depends on scope and page or application complexity: automated checks, manual keyboard testing, ARIA review and screen-reader testing are used where appropriate, not applied identically to every project.",
};

export type AccessPathStep = {
  id: string;
  label: string;
  barrier: string;
  verified: string;
};

export const accessPath: readonly AccessPathStep[] = [
  { id: "navigation", label: "Navigation", barrier: "A menu item has no visible focus state.", verified: "Every control shows a clear focus state." },
  { id: "content", label: "Content", barrier: "Body text fails contrast against its background.", verified: "Text meets contrast requirements." },
  { id: "form", label: "Form", barrier: "A field's error is shown only as a red border.", verified: "Errors are announced and described in text." },
  { id: "action", label: "Action", barrier: "A button has no accessible name for assistive technology.", verified: "Every control has a meaningful, programmatic name." },
  { id: "confirmation", label: "Confirmation", barrier: "Success is communicated only by a visual change.", verified: "Completion is announced, not just shown." },
];

export const principles = [
  { id: "perceivable", title: "Perceivable", question: "Can important content and states be perceived?", detail: "Text, contrast, structure and status changes need to reach more than one sense." },
  { id: "operable", title: "Operable", question: "Can the interface be navigated and controlled without depending on a mouse?", detail: "Every interactive path needs a working keyboard equivalent, in a sensible order." },
  { id: "understandable", title: "Understandable", question: "Are structure, instructions and errors understandable?", detail: "Labels, instructions and error messages need to make sense on their own." },
  { id: "robust", title: "Robust", question: "Can assistive technologies interpret the interface reliably?", detail: "Markup and state changes need to be interpretable by the tools people actually use." },
];

export const principlesIntro = {
  eyebrow: "How we frame the work",
  heading: "Four established accessibility principles, not a Rive-invented framework.",
  note: "These correspond to the WCAG POUR model, described here in plain language, not as a proprietary Rive category system.",
};

export type KeyboardPathStop = {
  id: string;
  order: number;
  label: string;
  state: "passes" | "interrupted" | "restored";
  note: string;
};

export const keyboardPath: readonly KeyboardPathStop[] = [
  { id: "skip-link", order: 1, label: "Skip link", state: "passes", note: "Reaches main content directly." },
  { id: "primary-nav", order: 2, label: "Primary navigation", state: "passes", note: "Tab order matches visual order." },
  { id: "heading", order: 3, label: "Page heading", state: "passes", note: "Announced as a heading, not styled text." },
  { id: "form-field", order: 4, label: "Form field", state: "interrupted", note: "Focus indicator is not visible here." },
  { id: "error-state", order: 5, label: "Error state", state: "interrupted", note: "Error is not associated with the field programmatically." },
  { id: "submit", order: 6, label: "Submit action", state: "restored", note: "Focus indicator restored after remediation." },
  { id: "confirmation", order: 7, label: "Confirmation", state: "restored", note: "Completion announced after remediation." },
];

export const keyboardPathIntro = {
  eyebrow: "Major visual moment",
  heading: "The Keyboard Path: seven stops, traced without a mouse.",
  description:
    "This is one illustrative path through a typical form journey, not a client's actual site. Two stops are shown interrupted, then shown again after remediation restores them.",
};

export const automatedVsManual = {
  eyebrow: "What each method proves",
  heading: "Automated tools and manual verification prove different things.",
  automated: {
    label: "Automated inspection",
    tools: "axe, WAVE",
    detail: "Useful for detecting many technical patterns and failures reliably and quickly.",
  },
  manual: {
    label: "Manual verification",
    tools: "Keyboard, focus, semantics, screen-reader testing",
    detail: "Necessary for meaningful focus order, actual keyboard usability, semantic clarity, control behavior and error recovery: things automation cannot reliably judge.",
  },
  notAScoreNote:
    "Accessibility is not reducible to a Lighthouse score, an axe issue count or a green badge. Automated output is evidence toward a conclusion, not the conclusion itself.",
};

export const ariaContent = {
  eyebrow: "A note on ARIA",
  heading: "Prefer native HTML semantics first.",
  principle: "ARIA is used where it adds necessary meaning or state information that native HTML cannot express on its own.",
  warning: "Incorrect ARIA can make an interface worse than no ARIA at all. More ARIA is not the same as more accessible.",
};

export const screenReaderContent = {
  eyebrow: "Screen-reader verification",
  heading: "Where scope calls for it, screen-reader testing uses NVDA and Chrome on Windows.",
  description: "The chain that matters: a visual control has an underlying semantic structure, which is what gets announced as meaning or state, not the visual appearance itself.",
  illustrativeLabel: "Illustrative, not a real client transcript",
};

export type IllustrativeIssue = {
  barrier: string;
  affectedInteraction: string;
  verification: string;
  remediation: string;
  retest: string;
  impact: "Blocks completion" | "Significantly interferes" | "Creates friction" | "Minor improvement";
};

export const illustrativeIssue: IllustrativeIssue = {
  barrier: "A form validation error is communicated visually but not programmatically associated with the field.",
  affectedInteraction: "Form completion.",
  verification: "Keyboard and semantic inspection.",
  remediation: "Associate the error text with its field and expose the error state programmatically.",
  retest: "Repeat the affected interaction after correction, keyboard-only and with a screen reader.",
  impact: "Significantly interferes",
};

export type RemediationLoopStep = { id: string; order: number; label: string; detail: string };

export const remediationLoop: readonly RemediationLoopStep[] = [
  { id: "detect", order: 1, label: "Detect", detail: "A barrier is found through automated or manual review." },
  { id: "reproduce", order: 2, label: "Reproduce", detail: "The barrier is confirmed as a real, repeatable interruption." },
  { id: "fix", order: 3, label: "Fix", detail: "The specific barrier is corrected." },
  { id: "retest", order: 4, label: "Re-test", detail: "The same path is verified again, not assumed fixed." },
  { id: "record", order: 5, label: "Record", detail: "The finding and its resolution become part of the evidence record." },
];

export const remediationLoopIntro = {
  eyebrow: "Major visual moment",
  heading: "The Remediation Loop closes. It does not just get scheduled.",
  description:
    "This is the difference from a roadmap: a UX audit prioritises findings into a sequenced plan. Accessibility remediation verifies a specific barrier is actually resolved, then records that verification.",
};

export const evidenceRelationship = {
  eyebrow: "Evidence",
  heading: "Accessibility work produces the same kind of record the Evidence Pack describes.",
  description:
    "Depending on scope, that can include automated audit output, manual keyboard notes, an issue and remediation log, re-test evidence, and screen-reader notes where applicable. This is not a fixed contractual deliverable list: it describes the kind of record accessibility work can produce.",
  privacyNote:
    "Accessibility evidence can include screenshots, interface structure, form fields and technical detail. It is bounded to what is useful for verification, not exposed beyond that.",
  cta: { label: "See the Evidence Pack", href: "/trust/evidence-pack/" },
};

export const relationships = {
  eyebrow: "How this connects",
  heading: "A practice, not a package.",
  items: [
    {
      label: "UX Audit + Conversion Roadmap",
      body: "UXR-01 includes a WCAG 2.2 AA accessibility audit as one of its deliverables. That is a commercial audit and roadmap engagement. This page describes Rive's broader accessibility operating practice, not a service to book on its own.",
      cta: { label: "See the UX Audit", href: "/services/web/ux-audit-conversion-roadmap/" },
    },
    {
      label: "Trust Center",
      body: "Accessibility is one of three operating boundaries Trust names alongside security and privacy.",
      cta: { label: "Back to Trust Center", href: "/trust/" },
    },
  ],
  boundary: accessibilityBoundary,
};

export const accessibilityContent = {
  hero: {
    eyebrow: positioning.eyebrow,
    heading: positioning.heading,
    summary: positioning.summary,
    primary: { label: "See the Trust Center", href: "/trust/" },
    secondary: { label: "See the Keyboard Path", href: "#keyboard-path-heading" },
  },
  final: trustContent.final,
} as const;
