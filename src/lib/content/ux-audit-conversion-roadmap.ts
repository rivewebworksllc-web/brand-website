import { homepageFallbackContent } from "@/lib/content/homepage";
import { trustContent } from "@/lib/content/trust";

/**
 * RW-PAGE-11 / RW-PAGE-11A: UX Audit + Conversion Roadmap content authority.
 *
 * Commercial authority: `UXR-01`, supplied by the RW-PAGE-11A Product
 * Office directive (2026-08-16), reconciled into `docs/governance/
 * CLAIMS_REGISTER.md` (`CLM-008`) via `GOV-021`. RW-PAGE-11's original
 * implementation correctly found no catalog entry for this service in the
 * repository and rendered every field unresolved; RW-PAGE-11A supplied the
 * facts below as external v49 authority "not available inside the
 * repository." As with `CLM-007`/`GOV-020`, this rests on the same sole
 * human Product Office channel already relied on for every other
 * commercial fact in this codebase - there is no external catalog system
 * to independently verify it against. See `GOV-021`/`CLM-008` for the full
 * provenance note.
 *
 * This does NOT add `UXR-01` to `/pricing/`'s package list - that is a
 * separate, not-yet-actioned Pricing-expansion consideration, explicitly
 * out of scope for RW-PAGE-11A.
 */

export const service = {
  code: "UXR-01",
  family: "UXR (UX Research & Experience Design)",
  layer: "1 (Land)",
  priority: "P0-Extended",
} as const;

export const commercialMeta = {
  code: service.code,
  priceDisplay: "$3,500-$14,500",
  priceNote: "This is the service's current starting/current catalog band, not a guaranteed fixed quote. Final price is confirmed for the specific engagement.",
  timelineDisplay: "2-4 weeks",
  timelineNote: "Includes a 14-day Microsoft Clarity data-collection period as part of the timeline, not in addition to it.",
  evidence: "E2",
} as const;

const websiteGrowthPath = homepageFallbackContent.buyerPaths.find((path) => path.title === "Website & Growth")!;

export const buyerOutcome =
  "A prioritised list of UX and conversion changes, each with business rationale, implementation complexity and expected impact, so you know exactly what to fix and in what order.";

export const buyerProblem = {
  eyebrow: "Who this is for",
  heading: "You can feel that something isn't converting. You can't yet point to where.",
  audiences: [
    "Businesses with an existing website that generates traffic but converts poorly.",
    "Companies preparing for a rebuild who want evidence-based prioritisation rather than redesigning from instinct.",
  ],
  // Reused verbatim from the already-approved homepage buyer path as
  // complementary framing, not the sole source of the buyer statement.
  symptoms: websiteGrowthPath.symptoms,
};

export type FrictionStage = {
  id: string;
  order: number;
  stage: string;
  title: string;
  whatHappens: string;
  frictionSignals: string[];
  whatWeExamine: string;
};

export const frictionMap: readonly FrictionStage[] = [
  {
    id: "entry",
    order: 1,
    stage: "Entry",
    title: "The first several seconds",
    whatHappens: "A visitor arrives from a link, an ad or a search result and forms an immediate impression.",
    frictionSignals: ["Unclear what the site is for", "Slow or unstable first paint", "No clear next step visible"],
    whatWeExamine: "Load performance, above-the-fold clarity, first-impression proposition.",
  },
  {
    id: "orientation",
    order: 2,
    stage: "Orientation",
    title: "Finding a way around",
    whatHappens: "The visitor tries to locate the information or section relevant to them.",
    frictionSignals: ["Navigation labels are internal jargon", "Important pages are buried", "Search, if present, returns poor results"],
    whatWeExamine: "Navigation structure, information architecture, findability of key pages.",
  },
  {
    id: "persuasion",
    order: 3,
    stage: "Persuasion",
    title: "Deciding whether to trust it",
    whatHappens: "The visitor evaluates whether the offer is credible and relevant to their actual problem.",
    frictionSignals: ["Vague or generic proposition", "No visible evidence or specificity", "Content written for the business, not the visitor"],
    whatWeExamine: "Messaging clarity, evidence and trust signals, content-to-audience fit.",
  },
  {
    id: "action",
    order: 4,
    stage: "Action",
    title: "Attempting the next step",
    whatHappens: "The visitor tries to act: fill a form, start a conversation, begin a purchase.",
    frictionSignals: ["The call to action is unclear or duplicated", "Forms ask for more than necessary", "The action is buried below other content"],
    whatWeExamine: "Call-to-action clarity and placement, form design, checkout or contact friction.",
  },
  {
    id: "confirmation",
    order: 5,
    stage: "Confirmation",
    title: "Knowing it worked",
    whatHappens: "The visitor needs to know their action was received and what happens next.",
    frictionSignals: ["No confirmation state", "Unclear what happens after submission", "No path back into the site"],
    whatWeExamine: "Confirmation clarity, follow-up expectations, post-action guidance.",
  },
];

export const frictionMapIntro = {
  eyebrow: "One lens on the work",
  heading: "The Experience Friction Map: five stages, in the order a visitor lives them.",
  // RW-PAGE-11A §13: the friction map must not imply the audit methodology
  // is limited to these five stages. The contractual scope is the seven
  // deliverables below; this is one explanatory lens on it, not a
  // substitute for it.
  qualifier: "This is a way of explaining where friction tends to happen, not the limit of what the audit covers. The full scope is the seven deliverables below.",
};

export const auditTerritoriesIntro = {
  eyebrow: "Where friction is commonly observed",
  heading: "Examples of what the audit may find, not a separate contractual list.",
  // RW-PAGE-11A §14: these are illustrative examples of friction Rive may
  // observe, not a second, competing inclusion list. The contractual scope
  // is the seven deliverables in the "What this produces" section below.
  qualifier: "These are illustrative categories of friction, useful for orientation. The seven deliverables below, not this list, define what is contractually included.",
};

export const auditTerritories: readonly { id: string; title: string; description: string }[] = [
  { id: "navigation", title: "Navigation and findability", description: "Whether the structure matches how a visitor actually thinks, not how the org chart is organized." },
  { id: "content", title: "Content clarity and trust signals", description: "Whether the proposition and evidence are legible on first read, not just present somewhere on the page." },
  { id: "forms", title: "Forms and conversion paths", description: "Where a visitor abandons an action, and why." },
  { id: "performance", title: "Performance and Core Web Vitals", description: "Whether load and interaction speed are themselves a source of friction." },
  { id: "accessibility", title: "Accessibility", description: "Whether the experience actually works with a keyboard, a screen reader and reduced motion, not just in appearance." },
  { id: "mobile", title: "Mobile experience", description: "Whether the experience holds up on the device most visitors actually use first." },
];

export type Deliverable = {
  id: string;
  title: string;
  detail: string[];
};

export const deliverables: readonly Deliverable[] = [
  {
    id: "heatmap",
    title: "Heatmap and session-recording analysis",
    detail: ["Microsoft Clarity, configured, run for 14 days and analysed"],
  },
  {
    id: "ga4",
    title: "GA4 funnel report",
    detail: ["Bounce rate", "Scroll depth", "Form abandonment", "Reported per P0 page where applicable"],
  },
  {
    id: "accessibility",
    title: "WCAG 2.2 AA accessibility audit",
    detail: ["axe", "WAVE", "Manual keyboard test"],
  },
  {
    id: "vitals",
    title: "Core Web Vitals snapshot",
    detail: ["PageSpeed Insights", "Mobile and desktop"],
  },
  {
    id: "flows",
    title: "User-flow audit",
    detail: ["Five buyer paths, traced from landing to call to action"],
  },
  {
    id: "bottlenecks",
    title: "Conversion bottleneck report",
    detail: ["Top five friction points", "Each supported by evidence"],
  },
  {
    id: "roadmap",
    title: "Prioritised roadmap",
    detail: ["Quick wins: 0-2 weeks", "Medium: 2-8 weeks", "Rebuild scope: 8+ weeks"],
  },
];

export const deliverablesIntro = {
  eyebrow: "What this produces",
  heading: "Seven deliverables. A written record, not a verbal readout.",
};

export const exclusions = [
  "Implementation of changes",
  "Copywriting",
  "New design",
  "A/B testing",
  "Paid media analysis",
];

export type RoadmapBand = { id: string; label: string; window: string; detail: string };

export const roadmapBands: readonly RoadmapBand[] = [
  { id: "quick-wins", label: "Quick wins", window: "0-2 weeks", detail: "Small, high-confidence changes sequenced first." },
  { id: "medium", label: "Medium", window: "2-8 weeks", detail: "Larger changes scoped as their own piece of work, often a natural fit for A/B testing before committing fully." },
  { id: "rebuild-scope", label: "Rebuild scope", window: "8+ weeks", detail: "Findings that point toward a fuller rebuild rather than incremental change." },
];

export const roadmapIntro = {
  eyebrow: "How findings become a roadmap",
  heading: "Every finding is placed into one of three bands, not a flat priority list.",
  description:
    "The bands reflect how much change is realistically required, not just how severe a finding is, so the roadmap sequences real trade-offs.",
};

export const evidenceModel = {
  eyebrow: "How findings are evidenced",
  heading: "Every finding is tied to a real evidence source, a friction point and a roadmap band.",
  description:
    "Findings are not opinions offered without support. Evidence comes from Microsoft Clarity heatmaps and session recordings, the GA4 funnel report, accessibility testing (axe, WAVE, manual keyboard test), the Core Web Vitals snapshot, and the user-flow review across five buyer paths. Not every source produces a finding on every audit: what is reported is what the evidence actually shows, not a manufactured problem for each category.",
  tierNote: trustContent.depth.note,
};

export type SampleFinding = {
  territory: string;
  stage: string;
  severity: "High" | "Medium" | "Low";
  evidenceSource: string;
  finding: string;
  roadmapBand: string;
  whyItMatters: string;
};

export const illustrativeFinding: SampleFinding = {
  territory: "Forms and conversion paths",
  stage: "Action",
  severity: "Medium",
  evidenceSource: "Clarity session recordings",
  finding: "The primary call to action competes visually with two other links of similar weight in the same view.",
  roadmapBand: "Quick wins",
  whyItMatters: "When several actions look equally important, visitors default to the easiest one to ignore: none of them.",
};

export const evidencePackRelationship = {
  label: "Evidence Pack",
  body: "This audit's Evidence Tier E2 record includes Clarity screenshots, the GA4 export, the conversion bottleneck report and the prioritised roadmap, the same kind of record the Evidence Pack describes in general.",
  cta: { label: "See the Evidence Pack", href: "/trust/evidence-pack/" },
};

export const workRelationship = {
  label: "Work",
  body: "Work shows real outcomes where they exist and are approved for publication. This audit is the diagnostic step before that kind of outcome, not a claim of one.",
  cta: { label: "See selected work", href: "/work/" },
};

export const pricingRelationship = {
  label: "Pricing",
  body: "This engagement is priced from $3,500 to $14,500. It is not yet listed among the packages published on the main Pricing page; see what is currently published there for related engagements.",
  cta: { label: "See published pricing", href: "/pricing/" },
};

export const relationships = {
  eyebrow: "How this connects",
  heading: "A diagnostic input, evidenced the same way delivery evidence is.",
  items: [evidencePackRelationship, workRelationship, pricingRelationship],
};

export type AttachOption = { code: string; name: string; note: string };

export const attach = {
  eyebrow: "The natural next step",
  heading: "The roadmap points to one of three next steps.",
  route: "OP-01E → UXR-01 → OPT-01 or BLD-02",
  routeNote: "OPT-07 is the authorised path for testing medium-term opportunities before committing to them.",
  options: [
    { code: "OPT-01", name: "Quick-win implementation", note: "For the 0-2 week band." },
    { code: "BLD-02", name: "Rebuild", note: "When the roadmap indicates a full rebuild is the right call." },
    { code: "OPT-07", name: "A/B testing", note: "For validating medium-term opportunities before full commitment." },
  ] satisfies AttachOption[],
};

export const uxAuditContent = {
  hero: {
    eyebrow: "UX Audit + Conversion Roadmap",
    heading: "Find out where the experience loses people, in the order they actually experience it.",
    summary: buyerOutcome,
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "See published pricing", href: "/pricing/" },
  },
  discoveryNote:
    "The starting band above is published. Paid Discovery is used to confirm the exact scope and price within that band for your specific site, not to establish whether the service has a price at all.",
  final: {
    heading: "Start with the friction you can already feel.",
    body: "If the shape of the problem is already clear, book Paid Discovery directly. If you are still deciding where to begin, the guided route can help.",
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "Find Your Solution", href: "/start/" },
  },
} as const;
