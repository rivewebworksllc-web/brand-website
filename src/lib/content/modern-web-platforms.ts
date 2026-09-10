import { processContent } from "@/lib/content/process";

/**
 * RW-PAGE-14: Modern Web Platforms (OP-40) content authority.
 *
 * Catalog mapping supplied directly by the RW-PAGE-14 Product Office
 * directive: OP-40 (OPT-15 + FND-02 + BLD-03). A full repository search
 * found no prior CLM/pricing/CLAIMS_REGISTER entry for OP-40 anywhere -
 * per the directive's own §3, no OP-40 price, price band, timeline,
 * evidence tier or exclusion set exists in repository authority, and none
 * is invented here. Unlike UXR-01/FND-05, this page carries no commercial
 * price plate; commercial orientation is stated as "Flagship route, scoped
 * in Paid Discovery" instead. See the Design Decision Brief for the full
 * authority audit.
 */

export const service = {
  code: "OP-40",
  mapping: "OP-40 (OPT-15 + FND-02 + BLD-03)",
} as const;

export const commercialOrientation = {
  code: service.code,
  status: "Flagship route",
  scopeNote: "Scoped in Paid Discovery",
  reason: "Architecture depends on requirements: content operations, integration complexity, application roadmap and existing technical capacity all change what this engagement actually contains.",
} as const;

export const buyerProblem = {
  eyebrow: "Who this is for",
  heading: "The website was chosen before the operating model was.",
  symptoms: [
    "Every new capability requires another plugin",
    "Content structure is trapped inside page templates",
    "Redesigning means rebuilding the content, not just the layout",
    "Integrations get more fragile as more get added",
    "The technology was picked before the operating model was defined",
  ],
} as const;

export type StackLayer = { id: string; label: string; role: string; examples: string[]; consequence: string };

export const platformStackIntro = {
  eyebrow: "The Platform Stack",
  heading: "Separate what changes at different speeds.",
};

export const platformStack: readonly StackLayer[] = [
  {
    id: "experience",
    label: "Experience",
    role: "What the visitor sees and interacts with.",
    examples: ["Next.js", "React"],
    consequence: "A redesign here should not require rebuilding how content is stored.",
  },
  {
    id: "content",
    label: "Content",
    role: "Structured information, separate from page layout.",
    examples: ["Sanity", "structured CMS"],
    consequence: "Editors manage content without touching frontend code.",
  },
  {
    id: "capabilities",
    label: "Capabilities",
    role: "The business logic the site connects to.",
    examples: ["Forms", "search", "CRM", "commerce", "APIs"],
    consequence: "A new integration should not require touching the presentation layer.",
  },
  {
    id: "delivery",
    label: "Delivery",
    role: "How the platform actually reaches a visitor.",
    examples: ["Hosting", "edge", "analytics", "observability"],
    consequence: "Performance and reliability are engineered, not inherited by accident.",
  },
];

export const platformStackNote =
  "This is illustrative architecture, not a promise that every OP-40 engagement contains every technology listed. Each layer having its own job, replaceable without demolishing the others, is the point.";

export const coupledVsComposable = {
  eyebrow: "What composable actually means",
  heading: "Architecture should match the operating need, not a preference.",
  coupled: {
    label: "Coupled",
    description: "Content, templates, plugins, business logic and hosting assumptions behave as one dependency block. Change one, risk all of them.",
  },
  composable: {
    label: "Composable",
    description: "Content, frontend, integrations and hosting connect through defined interfaces instead of one block. Each can change on its own schedule.",
  },
  connector: "WordPress can remain the better choice. The question is which shape actually matches how the business operates, not which technology sounds more modern.",
};

export const nextjsTreatment = {
  heading: "Why Next.js enters the conversation",
  body: "Next.js gives the experience layer a modern React foundation, flexible rendering choices, structured metadata and reusable components. It also keeps integrations open and leaves room for application behavior later. These are architectural options, not performance or ranking guarantees; the requirements still decide the platform.",
} as const;

export type ContentModelField = { id: string; label: string };

export const contentModelFields: readonly ContentModelField[] = [
  { id: "name", label: "Name" },
  { id: "summary", label: "Summary" },
  { id: "buyer-problem", label: "Buyer problem" },
  { id: "deliverables", label: "Deliverables" },
  { id: "evidence-tier", label: "Evidence tier" },
  { id: "related-service", label: "Related service" },
  { id: "seo-fields", label: "SEO fields" },
];

export const contentModelIntro = {
  eyebrow: "One structured object, several surfaces",
  heading: "Content modeled once can feed more than one page.",
};

export const contentModelSurfaces = ["Service page", "Internal search result", "Related-content module"];

export const contentModelNote =
  "This is one illustrative example, not a claim that every client receives this exact schema. The actual content model is scoped to the engagement.";

export const headlessContentTreatment = {
  heading: "Why structured content changes the operating model",
  body: "A headless content layer separates information from page layout. Editors manage structured content rather than frontend code, the same content can serve several surfaces, and content operations can evolve independently from the interface. Sanity is the flagship recommendation when those conditions fit, not a mandatory choice for every engagement.",
} as const;

export type PlatformPath = { id: string; label: string; bestWhen: string[]; mapping: string; routeNote: string };

export const platformDecisionIntro = {
  eyebrow: "Platform decision",
  heading: "Three shapes. The right one depends on how the business operates.",
};

export const platformPaths: readonly PlatformPath[] = [
  {
    id: "composable",
    label: "Composable Web / Next.js + Sanity",
    bestWhen: [
      "A premium experience and strong SEO/discoverability matter",
      "Extensibility and future integrations are likely",
      "A portal or application may grow out of the marketing site",
    ],
    mapping: "OP-40 (OPT-15 + FND-02 + BLD-03)",
    routeNote: "Rive's flagship modern-web route when premium experience, structured content and future extensibility need to work together.",
  },
  {
    id: "wordpress",
    label: "Managed WordPress build or migration",
    bestWhen: [
      "Editorial familiarity matters strongly to the team",
      "A mature plugin ecosystem adds real value",
      "Content-heavy workflows favor familiar tooling over custom flexibility",
    ],
    mapping: "BLD-02/03 + ACC-03/OP-10B",
    routeNote: "Rive supports WordPress when it is the better operating choice. Familiar editing and ecosystem speed can matter more than custom-application flexibility.",
  },
  {
    id: "custom-application",
    label: "Composable / Next.js application or Laravel engineering",
    bestWhen: [
      "The project is a custom workflow or business application",
      "Authenticated, application-level behavior is required",
      "Domain-specific logic and integrations drive the build",
    ],
    mapping: "OP-40 / DEV-03",
    routeNote: "When the real problem is an application or workflow, Paid Discovery defines the security, integration and application boundary before Next.js or Laravel is selected.",
  },
];

export const multilingualNote = {
  label: "Multilingual and localization",
  body: "International SEO, language routing and translated experiences are custom scope attached to whichever platform is chosen. This is not yet a standalone catalog code; it requires Discovery to define.",
};

export const seoIntro = {
  eyebrow: "SEO and discoverability",
  heading: "Structural, not bolted on afterward.",
  principles: [
    "Semantic HTML and logical heading hierarchy",
    "Metadata and structured data",
    "Robots and sitemap handling",
    "Content structure built for reuse, not just display",
    "Image optimization and internal linking",
    "Crawlability considered from the architecture, not patched in later",
  ],
};

export const performanceIntro = {
  eyebrow: "Performance",
  heading: "An architectural discipline, not a score to chase.",
  principles: [
    "Rendering strategy chosen per page, not applied uniformly",
    "Asset and image discipline",
    "A JavaScript budget, not unlimited client-side code",
    "Caching and delivery decided deliberately",
    "Third-party script discipline",
  ],
};

export const accessibilityNote = {
  eyebrow: "Accessibility",
  heading: "Part of engineering quality, not a separate checkbox.",
  body: "Rive's web builds are WCAG 2.2 AA-informed, using automated and manual checks as part of delivery quality.",
  cta: { label: "See the accessibility practice", href: "/trust/accessibility/" },
};

export const processIntro = {
  eyebrow: "How the platform gets built",
  heading: "The same delivery discipline, applied to platform architecture.",
  architectAnnotation: "Platform choice and the content model are decided here, before implementation starts.",
  cta: { label: "See the full delivery process", href: "/company/process/" },
};

// Reused directly from the canonical company-wide delivery process, not
// re-authored, per the directive's own instruction (§25) to prefer more
// authoritative repository governance over inventing a page-specific
// sequence. A unit test asserts direct reference equality.
export const processPhases = processContent.model.phases;

export const evidencePackRelationship = {
  label: "Evidence Pack",
  body: "A modern web platform build produces real implementation evidence: architecture decisions, QA results, accessibility checks and delivery artifacts, the same kind of record the Evidence Pack describes in general.",
  cta: { label: "See the Evidence Pack", href: "/trust/evidence-pack/" },
};

export const fnd05Relationship = {
  label: "Brand identity and design system",
  body: "FND-05 establishes the reusable identity and interface rules. Modern Web Platforms is where the appropriate digital architecture implements them, not a requirement for every engagement.",
  cta: { label: "See the design system service", href: "/services/web/brand-identity-digital-design-system/" },
};

export const uxr01Relationship = {
  label: "UX Audit + Conversion Roadmap",
  body: "When there is an existing site, UXR-01 can provide evidence about where visitors actually struggle before committing to a new platform, not a required prerequisite.",
  cta: { label: "See the UX audit", href: "/services/web/ux-audit-conversion-roadmap/" },
};

export const relationships = {
  eyebrow: "How this connects",
  heading: "A platform decision informed by evidence, not isolated from it.",
  items: [evidencePackRelationship, fnd05Relationship, uxr01Relationship],
};

export const modernWebPlatformsContent = {
  hero: {
    eyebrow: "Modern Web Platforms",
    heading: "Build the website you need now without trapping the business there.",
    summary:
      "A modern platform for performance, content operations, SEO and the growth that comes after launch, or WordPress, when that is the better fit.",
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "Find Your Solution", href: "/start/" },
  },
  final: {
    heading: "Not sure which platform shape fits yet?",
    body: "That is what Paid Discovery is for. If the direction is already clear, start the conversation directly.",
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "Find Your Solution", href: "/start/" },
  },
} as const;
