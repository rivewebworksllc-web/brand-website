import { homepageFallbackContent } from "@/lib/content/homepage";
import { managedServices, projectPackages } from "@/lib/content/pricing";

/**
 * RW-PAGE-P0-SOLUTIONS-02 (Website & Growth).
 *
 * Commercial authority: no new fact is invented anywhere in this file.
 * `ux-audit-conversion-roadmap` (`UXR-01`, real published price) and
 * `website-launch-llm-discoverability` (Package 1, honestly `unresolved`
 * per the original `RW-PAGE-08B` directive - never invented here) are the
 * only two `strategy`/`web` project packages that exist. Both are direct
 * object references into `pricing.ts`, matching every prior page's
 * discipline. Buyer problem, symptoms, outcome and process framing come
 * from `homepageFallbackContent.buyerPaths` - the exact object
 * `/solutions/` already renders.
 */

export const buyerPath = homepageFallbackContent.buyerPaths.find(
  (path) => path.title === "Website & Growth",
)!;

const webPillar = homepageFallbackContent.pillars.items.find((item) => item.id === "web")!;

const auditPackage = projectPackages.find((pkg) => pkg.id === "ux-audit-conversion-roadmap")!;
const buildPackage = projectPackages.find((pkg) => pkg.id === "website-launch-llm-discoverability")!;

export const heroPanelEngagements = [auditPackage, buildPackage];

export const managedFollowOn = managedServices.find((service) => service.code === "MGT-03")!;

export const hero = {
  eyebrow: webPillar.label,
  heading: "Know what's actually stopping conversion, before you rebuild anything.",
  summary: buyerPath.outcome,
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "See published pricing", href: "/pricing/" },
};

export const buyerProblem = {
  eyebrow: "Who this is for",
  heading: buyerPath.problem,
  symptoms: buyerPath.symptoms,
};

export const forkIntro = {
  eyebrow: "Diagnose or Build",
  heading: "Two honest starting points, not one forced path.",
  qualifier:
    "Which one fits depends on what you already know. Both lead to the same evidence-backed launch.",
};

export const forkPaths = [
  {
    id: "diagnose",
    label: "Diagnose first",
    role: "For a site that already gets traffic but isn't converting it.",
    pkg: auditPackage,
    items: ["Heatmap and session-recording analysis", "GA4 funnel report", "WCAG 2.2 AA accessibility audit", "Prioritized roadmap by severity"],
  },
  {
    id: "build",
    label: "Build now",
    role: "For a site (or a gap) that already needs replacing.",
    pkg: buildPackage,
    items: ["Modern web architecture", "Search / LLM discoverability", "Measurement readiness", "Evidence-backed delivery"],
  },
] as const;

export const forkConverge = "Evidence-backed launch, whichever door you start from.";

export const catalogIntro = {
  eyebrow: "Real starting engagements",
  heading: "Published packages, not a quote you have to ask for.",
  qualifier: "Every figure below is the same published starting position shown on Pricing.",
};

export const examine = {
  heading: "What Rive examines, and what you get back.",
  whatWeExamine: buyerPath.whatWeExamine,
  expectedOutput: buyerPath.expectedOutput,
};

export const architectureNote = {
  heading: "Once the scope is set, the platform shape is a separate decision.",
  body: "Composable/Next.js, managed WordPress and custom application architecture each fit different operating conditions. That decision has its own dedicated page, not a rushed choice made mid-build.",
  cta: { label: "Explore Modern Web Platforms", href: "/services/web/modern-web-platforms/" },
};

/**
 * RW-PAGE-P0-SOLUTIONS-02 scope reconciliation: a grounded reference to
 * FND-05, the one real, already-implemented brand/design-system offering
 * this repository has. Added because "the proposition is unclear" is
 * already one of this page's own listed symptoms, and a rebuild with no
 * consistent visual system tends to repeat the same problem. Not a
 * fabricated capability; links to the exact existing route.
 */
export const brandNote = {
  heading: "An unclear proposition is often a design-system gap, not a copy gap.",
  body: "When the site looks inconsistent across pages before a rebuild even starts, that is usually a missing design system, not a missing page.",
  cta: { label: "Explore Brand Identity + Digital Design System", href: "/services/web/brand-identity-digital-design-system/" },
};

export const followOnIntro = {
  heading: "After launch, continuing care.",
  body: buyerPath.managedFollowOn,
};

export const processNote = {
  heading: "Where this sits in delivery.",
  body: "Website scope and build decisions happen at the same Build stage in Rive's delivery process, after Architect has already set the platform shape.",
  cta: { label: "See Delivery Process", href: "/company/process/" },
};

export const relationships = {
  eyebrow: "Related",
  heading: "How this connects to the rest of Rive.",
  items: [
    {
      label: "Evidence Pack",
      body: "Every engagement, including a website audit or build, leaves a documented record: decisions, findings and what changed.",
      cta: { label: "Explore the Evidence Pack", href: "/trust/evidence-pack/" },
    },
    {
      label: "Managed Care & Advisory",
      body: "Once live, ongoing operation, improvement and specialist attention keep the launch from quietly decaying.",
      cta: { label: "Explore Managed Care & Advisory", href: "/solutions/managed-services/" },
    },
    {
      label: "Full published pricing",
      body: "See every current package, tier and managed-care option in one place.",
      cta: { label: "See published pricing", href: "/pricing/" },
    },
  ],
};

export const final = {
  heading: "Start with the traffic you already have.",
  body: "If the shape of the work is already clear, book Paid Discovery directly. If you are still deciding where to begin, the guided route can help.",
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "Find Your Solution", href: "/start/" },
};
