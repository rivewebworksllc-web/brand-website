/**
 * RW-PAGE-13: Brand Identity + Digital Design System (FND-05) content
 * authority.
 *
 * Commercial authority supplied directly by the RW-PAGE-13 Product Office
 * directive: code FND-05, family "FND - Foundations & Discovery", Layer 1
 * ("Land"), price band $4,000-$9,500 (public/pricing-surface treatment
 * "From $4,000" is a separate, not-yet-actioned consideration - see
 * `pricingRelationship` below), timeline 2-6 weeks, Evidence Tier E2, three
 * deliverable groups, five exclusions, attach path
 * OP-01E → FND-05 → BLD-02 (then optionally MGT-03). Not yet reconciled
 * into `docs/governance/CLAIMS_REGISTER.md`; implemented against the
 * directive-supplied facts first, matching RW-PAGE-11's original precedent.
 *
 * This does NOT add FND-05 to `/pricing/`'s package list - that is a
 * separate, not-yet-actioned Pricing-expansion consideration, explicitly
 * deferred by the RW-PAGE-13 directive itself (§26).
 */

export const service = {
  code: "FND-05",
  family: "FND (Foundations & Discovery)",
  layer: "1 (Land)",
} as const;

export const commercialMeta = {
  code: service.code,
  priceDisplay: "$4,000-$9,500",
  priceNote: "This is the service's approved starting/current catalog band, not a guaranteed fixed quote. Final price is confirmed for the specific engagement.",
  timelineDisplay: "2-6 weeks",
  evidence: "E2",
} as const;

export const buyerProblem = {
  eyebrow: "Who this is for",
  heading: "Every page makes its own visual decisions. Nobody can point to the rule.",
  audiences: [
    "Growing businesses whose visual identity looks inconsistent across the website, pages, emails, social and product.",
    "Organizations preparing for a website rebuild who want the design system established before that build starts.",
  ],
  symptoms: [
    "Every page looks slightly different",
    "Button styles drift from page to page",
    "Fonts and spacing shift between sections",
    "Teams keep recreating the same components",
    "Visual decisions live in people's heads, not a shared system",
    "New developers cannot tell what is correct",
  ],
} as const;

export type EntryPath = { id: string; label: string; description: string };

export const entryPaths: readonly EntryPath[] = [
  {
    id: "existing-identity",
    label: "Existing identity, inconsistent execution",
    description: "The brand already exists, a logo, a rough palette, a general feel, but execution has drifted across every digital touchpoint. This engagement normalizes what exists into one reusable system.",
  },
  {
    id: "starting-foundation",
    label: "Starting or refreshing the identity",
    description: "The foundational brand and visual rules do not yet exist in a usable form. This engagement establishes them before product or website implementation begins.",
  },
];

export const entryPathsIntro = {
  eyebrow: "Two ways in",
  heading: "One system-building engagement, two starting points.",
};

export type FragmentExample = { id: string; label: string; detail: string };

/**
 * RW-PAGE-13: real, small, Tailwind-rendered inconsistency examples for the
 * Fragments to System register, each carrying its own text label so the
 * inconsistency is legible without relying on visual comparison alone.
 */
export const fragmentExamples: readonly FragmentExample[] = [
  { id: "button-a", label: "Button, page A", detail: "6px corners, 12px padding" },
  { id: "button-b", label: "Button, page B", detail: "10px corners, 16px padding" },
  { id: "button-c", label: "Button, page C", detail: "2px corners, 10px padding" },
  { id: "spacing-a", label: "Section gap, page A", detail: "37px" },
  { id: "spacing-b", label: "Section gap, page B", detail: "52px" },
  { id: "heading-a", label: "Heading size, page A", detail: "28px" },
  { id: "heading-b", label: "Heading size, page B", detail: "34px" },
];

export type SystemStage = { id: string; label: string; description: string };

export const systemStages: readonly SystemStage[] = [
  { id: "tokens", label: "Tokens", description: "Every raw decision (a color, a spacing value, a size) gets one canonical name." },
  { id: "primitives", label: "Primitives", description: "Tokens combine into the smallest reusable pieces: a border, a type style, a spacing step." },
  { id: "components", label: "Components", description: "Primitives assemble into real interface pieces: buttons, fields, cards, states." },
  { id: "patterns", label: "Patterns", description: "Components combine into repeatable page patterns any future page can start from." },
];

export const fragmentsToSystemIntro = {
  eyebrow: "How fragmentation resolves",
  heading: "The same handful of decisions, made once instead of every time.",
};

export type TokenExample = {
  id: string;
  rawDecision: string;
  tokenName: string;
  usedIn: string;
};

/**
 * RW-PAGE-13 §13: illustrative token names only, explicitly labeled as such
 * in the component. No proprietary taxonomy is asserted as this specific
 * client's actual naming convention.
 */
export const tokenExamples: readonly TokenExample[] = [
  { id: "color", rawDecision: "The brand's primary color", tokenName: "color.brand.primary", usedIn: "Buttons, links, focus rings, active states" },
  { id: "spacing", rawDecision: "A comfortable base spacing unit", tokenName: "space.4 (4px grid)", usedIn: "Margins, padding, layout rhythm across every page" },
];

export const tokenTranslationIntro = {
  eyebrow: "Why a token, not a static style guide",
  heading: "A style guide describes a decision. A token makes it reusable.",
  description: "A PDF can say \"use this blue.\" A token means every button, link and focus state actually reads from the same named value, so changing it once changes it everywhere it is used, instead of requiring someone to remember and update every page by hand.",
};

export type TokenRole = { id: string; label: string; description: string };

export const colorRoles: readonly TokenRole[] = [
  { id: "brand", label: "Brand", description: "The identity's signature color, used with intent, not everywhere." },
  { id: "surface", label: "Surface", description: "Backgrounds: page, card, elevated panel." },
  { id: "text", label: "Text", description: "Heading, body and muted text, each with documented contrast." },
  { id: "border", label: "Border", description: "Hairlines, dividers, focus outlines." },
  { id: "state", label: "State", description: "Hover, active, disabled, selected." },
  { id: "feedback", label: "Feedback", description: "Success, error, warning, informational." },
];

export const colorSystemIntro = {
  eyebrow: "Palette versus system",
  heading: "A palette is swatches. A system assigns each color a job.",
  description: "Six colors on a page are a palette. The same six colors, each assigned a documented role, with contrast ratios checked against the surfaces they appear on, are a system a developer can implement without guessing.",
};

export type TypeRole = { id: string; label: string; description: string };

export const typeRoles: readonly TypeRole[] = [
  { id: "display", label: "Display", description: "Rare, high-impact moments: hero headlines only." },
  { id: "h1", label: "H1", description: "One per page, the page's own title." },
  { id: "h2", label: "H2", description: "Section headings, the page's main structure." },
  { id: "h3", label: "H3", description: "Sub-sections and card titles." },
  { id: "body", label: "Body", description: "Paragraph text, sized for sustained reading." },
  { id: "caption", label: "Caption", description: "Labels, metadata, fine print." },
];

export const typeSystemIntro = {
  eyebrow: "A hierarchy, not a font showcase",
  heading: "Consistent hierarchy is what makes a page scannable.",
  description: "The type scale is not a font demo. It is a fixed set of roles so every page uses the same H2 instead of a slightly different heading size invented for that page.",
};

export type AnatomyDetail = { id: string; label: string; description: string };

export const componentAnatomy: readonly AnatomyDetail[] = [
  { id: "typography", label: "Typography", description: "Which type role the label uses, and why." },
  { id: "spacing", label: "Spacing", description: "Internal padding, drawn from the spacing scale, not a one-off value." },
  { id: "radius", label: "Radius", description: "One corner-radius decision, applied consistently across every button." },
  { id: "token", label: "Color token", description: "Which token drives the fill, text and border, not a hardcoded hex value." },
  { id: "state", label: "State", description: "Hover, active and disabled, each defined once." },
  { id: "focus", label: "Focus behavior", description: "A visible, consistent focus ring, not a browser default that varies by component." },
];

export const componentAnatomyIntro = {
  eyebrow: "One button, fully specified",
  heading: "The system is a set of reusable decisions, not a collection of screenshots.",
  variants: ["Primary", "Secondary", "Ghost", "Danger"],
};

export const brandGuideComparison = {
  eyebrow: "Brand guide versus design system",
  heading: "Related, not competing. This engagement connects them.",
  brandGuide: {
    label: "Brand guide",
    items: ["Identity", "Visual principles", "Logo and brand usage"],
  },
  designSystem: {
    label: "Digital design system",
    items: ["Reusable tokens", "Components", "States", "Implementation rules"],
  },
  connector: "FND-05 translates identity into a system a developer can actually build from.",
};

export type Deliverable = { id: string; title: string; detail: string[] };

export const deliverables: readonly Deliverable[] = [
  {
    id: "figma-design-system",
    title: "Figma design-system file",
    detail: [
      "Color token library, with documented WCAG contrast ratios",
      "Type scale: display, heading, body and caption hierarchy",
      "Spacing scale, based on a 4px grid",
      "Button system: primary, secondary, ghost, danger",
      "Form component set: input, select, textarea, checkbox, radio, error state",
      "Card components: service card, resource card, featured-engagement card",
    ],
  },
  {
    id: "react-export",
    title: "React component-library export",
    detail: ["Global styles and system translation for developer handoff"],
  },
  {
    id: "style-guide",
    title: "Style guide PDF",
    detail: ["Approximately 2-4 pages", "Color usage", "Typography", "Spacing", "Component rules"],
  },
];

export const deliverablesIntro = {
  eyebrow: "What this produces",
  heading: "Three deliverables. A usable system, not a slide deck.",
};

export const exclusions = [
  "Content strategy",
  "Copywriting",
  "Page-design mockups beyond component examples",
  "Website build",
  "CMS implementation",
];

export type ProcessStep = { id: string; label: string; description: string };

export const processSteps: readonly ProcessStep[] = [
  { id: "inventory", label: "Inventory", description: "Catalog every visual decision already in use, across every touchpoint." },
  { id: "normalize", label: "Normalize", description: "Reconcile inconsistencies into one intended version of each decision." },
  { id: "tokenize", label: "Tokenize", description: "Turn each normalized decision into a named, reusable token." },
  { id: "componentize", label: "Componentize", description: "Assemble tokens into real components: buttons, fields, cards, states." },
  { id: "document", label: "Document", description: "Write the rules down: usage, contrast, spacing, do and don't." },
  { id: "handoff", label: "Handoff", description: "Deliver the Figma file, the React export and the style guide together." },
];

export const processIntro = {
  eyebrow: "How the system gets built",
  heading: "Six steps, in the order a system actually forms.",
};

export const developerHandoff = {
  eyebrow: "Built for implementation, not just presentation",
  heading: "Developers know which value to use, because there is only one.",
  outcomes: [
    "Developers know which values to use",
    "States are specified, not improvised",
    "Repeated components become reusable, not rebuilt",
    "Future pages start from a common language",
    "Teams stop recreating basic decisions",
  ],
  note: "The React export represents the reusable system agreed in scope. Website or page implementation using it remains a separate, excluded engagement.",
};

export const evidencePackRelationship = {
  label: "Evidence Pack",
  body: "This engagement's Evidence Tier E2 record includes the Figma design-system file, the React component-library export and the style guide PDF, the same kind of usable, inspectable record the Evidence Pack describes in general.",
  cta: { label: "See the Evidence Pack", href: "/trust/evidence-pack/" },
};

export const pricingRelationship = {
  label: "Pricing",
  body: "This engagement is priced from $4,000 to $9,500. It is not yet listed among the packages published on the main Pricing page; see what is currently published there for related engagements.",
  cta: { label: "See published pricing", href: "/pricing/" },
};

export const nextStepRelationship = {
  label: "Next step",
  body: "The default path is to build with the approved system in a website build, then maintain it as the site evolves. Neither follow-on is mandatory.",
  cta: { label: "See how the work moves", href: "/company/process/" },
};

export const relationships = {
  eyebrow: "How this connects",
  heading: "A system that carries into the build, evidenced the same way delivery evidence is.",
  items: [evidencePackRelationship, pricingRelationship, nextStepRelationship],
};

export type AttachOption = { code: string; name: string; note: string };

export const attach = {
  eyebrow: "The natural next step",
  heading: "The system points to one of two next steps.",
  route: "OP-01E → FND-05 → BLD-02",
  routeNote: "MGT-03 is the ongoing path once a build using the system is live.",
  options: [
    { code: "BLD-02", name: "Build with it", note: "Move into a website build using the approved system." },
    { code: "MGT-03", name: "Maintain it", note: "Keep system and implementation aligned as the site changes." },
  ] satisfies AttachOption[],
};

export const designSystemContent = {
  hero: {
    eyebrow: "Brand Identity + Digital Design System",
    heading: "Stop redesigning the same decisions on every page.",
    summary:
      "A documented, reusable design system, tokens, components and rules, that your website, product and future developers can consistently work from.",
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "See published pricing", href: "/pricing/" },
  },
  discoveryNote:
    "The starting band above is published. Paid Discovery is used to confirm the exact scope and price within that band for your specific system, not to establish whether the service has a price at all.",
  final: {
    heading: "Give every future page the same visual language.",
    body: "If the inconsistency is already clear, book Paid Discovery directly. If you are still deciding where to begin, the guided route can help.",
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "Find Your Solution", href: "/start/" },
  },
} as const;
