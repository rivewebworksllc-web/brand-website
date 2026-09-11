import { homepageFallbackContent } from "@/lib/content/homepage";
import { managedServices, projectPackages } from "@/lib/content/pricing";

/**
 * RW-PAGE-P0-SOLUTIONS-01 (Cloud Modernization).
 *
 * Commercial authority: no new fact is invented anywhere in this file.
 * Every price, timeline, evidence tier and package code is a direct object
 * reference into the already-approved `src/lib/content/pricing.ts` catalog
 * (`CLM-007`/`GOV-020`), the same discipline Evidence Pack and Solutions
 * already use for their own reused content ("a unit test asserting a
 * direct object reference rather than a re-authored copy"). The buyer
 * problem, symptoms, outcome and process framing are the same discipline
 * applied to `homepageFallbackContent.buyerPaths` - the exact object
 * `/solutions/` itself already renders via `solutions.ts`, so this page and
 * `/solutions/` and the homepage can never silently drift apart.
 *
 * No AWS or Microsoft partner/certification claim is made anywhere on this
 * page: `CLM-001`/`CLM-002`/`CLM-006` are `BLOCKED` in
 * `docs/governance/CLAIMS_REGISTER.md` ("Not supplied"). "AWS and Microsoft
 * Cloud" is described only as a practice area, exactly matching the
 * homepage's own already-approved wording, never as a status claim.
 */

export const buyerPath = homepageFallbackContent.buyerPaths.find(
  (path) => path.title === "AWS & Microsoft Cloud",
)!;

const cloudPillar = homepageFallbackContent.pillars.items.find((item) => item.id === "cloud")!;

function pkg(id: string) {
  const found = projectPackages.find((candidate) => candidate.id === id);
  if (!found) throw new Error(`Cloud Modernization content: missing pricing package "${id}"`);
  return found;
}

/**
 * The five real, already-published Cloud & Data packages that are genuine
 * entry points for this buyer path. Microsoft Fabric / Analytics
 * Quickstart is included deliberately (it shares the `cloud-data` group
 * and a modernized data platform is a real consequence of a cloud
 * foundation), not filtered out to keep the grid a round number.
 */
export const startingEngagements = [
  pkg("aws-wafr-review"),
  pkg("cloud-foundation-sprint"),
  pkg("ai-ready-cloud-foundation"),
  pkg("cloud-security-resilience-baseline"),
  pkg("microsoft-fabric-analytics-quickstart"),
];

export const heroPanelEngagements = [pkg("aws-wafr-review"), pkg("cloud-foundation-sprint")];

export const managedFollowOn = managedServices.find((service) => service.code === "MGT-21")!;

export const hero = {
  eyebrow: "Cloud Architecture & Modernization",
  heading: "A defensible cloud plan starts with a structured review, not a guess.",
  summary: buyerPath.outcome,
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "See published pricing", href: "/pricing/" },
};

export const buyerProblem = {
  eyebrow: "Who this is for",
  heading: buyerPath.problem,
  symptoms: buyerPath.symptoms,
};

export const sixPillarIntro = {
  eyebrow: "The Six-Pillar Review",
  heading: "Six pillars, examined in order, become one sequenced plan.",
  qualifier:
    "The same structure behind the AWS Well-Architected Framework, applied to your actual estate: findings ranked by severity, not delivered as an unordered list.",
};

export const enginePillars = [
  { id: "operational-excellence", order: 1, name: "Operational Excellence", examine: "How changes are made, monitored and rolled back." },
  { id: "security", order: 2, name: "Security", examine: "Identity, access boundaries, data protection and detection." },
  { id: "reliability", order: 3, name: "Reliability", examine: "Recovery objectives, failure isolation and tested resilience." },
  { id: "performance-efficiency", order: 4, name: "Performance Efficiency", examine: "Resource selection matched to actual workload demand." },
  { id: "cost-optimization", order: 5, name: "Cost Optimization", examine: "Spend visibility, waste and commitment strategy." },
  { id: "sustainability", order: 6, name: "Sustainability", examine: "Resource and energy efficiency of the running estate." },
] as const;

export const roadmapBands = [
  { severity: "Critical", window: "0-30 days", description: "Findings that carry immediate operational or security exposure." },
  { severity: "High", window: "30-60 days", description: "Material risk or cost impact without an active incident." },
  { severity: "Medium", window: "60-90 days", description: "Improvements worth sequencing once the first two bands are clear." },
  { severity: "Low", window: "Backlog", description: "Recorded and prioritized, not forgotten." },
] as const;

export const catalogIntro = {
  eyebrow: "Real starting engagements",
  heading: "Published packages, not a quote you have to ask for.",
  qualifier: "Every figure below is the same published starting band shown on Pricing.",
};

export const examine = {
  heading: "What Rive examines, and what you get back.",
  whatWeExamine: buyerPath.whatWeExamine,
  expectedOutput: buyerPath.expectedOutput,
};

export const neutrality = {
  heading: "AWS and Microsoft receive equal attention.",
  body: `${cloudPillar.description} ${cloudPillar.note ?? ""}`.trim(),
};

export const followOnIntro = {
  heading: "After the plan, continuing operation.",
  body: buyerPath.managedFollowOn,
};

export const processNote = {
  heading: "Where this sits in delivery.",
  body: "Architecture and platform decisions happen at the same Architect stage in Rive's delivery process, ahead of build, so a cloud foundation is sequenced rather than retrofitted.",
  cta: { label: "See Delivery Process", href: "/company/process/" },
};

export const relationships = {
  eyebrow: "Related",
  heading: "How this connects to the rest of Rive.",
  items: [
    {
      label: "Evidence Pack",
      body: "Every engagement, including a cloud review, leaves a documented record: decisions, findings and what changed.",
      cta: { label: "Explore the Evidence Pack", href: "/trust/evidence-pack/" },
    },
    {
      label: "AI & Data Automation",
      body: "A prepared cloud foundation is what makes governed AI and automation workloads safe to run.",
      cta: { label: "Explore AI & Data Automation", href: "/solutions/ai-data-automation/" },
    },
    {
      label: "Full published pricing",
      body: "See every current package, tier and managed-care option in one place.",
      cta: { label: "See published pricing", href: "/pricing/" },
    },
  ],
};

export const final = {
  heading: "Start with the review, not the migration.",
  body: "If the shape of the work is already clear, book Paid Discovery directly. If you are still deciding where to begin, the guided route can help.",
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "Find Your Solution", href: "/start/" },
};
