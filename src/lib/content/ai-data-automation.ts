import { homepageFallbackContent } from "@/lib/content/homepage";
import { managedServices, projectPackages } from "@/lib/content/pricing";

/**
 * RW-PAGE-P0-SOLUTIONS-01 (AI & Data Automation).
 *
 * Commercial authority: no new fact is invented anywhere in this file.
 * Every price, timeline, evidence tier and package code is a direct object
 * reference into the already-approved `src/lib/content/pricing.ts` catalog
 * (`CLM-007`/`GOV-020`), matching Evidence Pack's and `cloud-modernization`'s
 * own discipline. The buyer problem, symptoms, outcome and process framing
 * come from `homepageFallbackContent.buyerPaths` - the exact object
 * `/solutions/` already renders - so this page can never silently drift
 * apart from the homepage or `/solutions/`.
 *
 * No AI certification, partner status or case-study metric is claimed
 * anywhere on this page: `CLM-001`/`CLM-002`/`CLM-006` are `BLOCKED` in
 * `docs/governance/CLAIMS_REGISTER.md` ("Not supplied"). Every governance
 * claim below is a description of practice (what Rive designs in), not a
 * credential.
 */

export const buyerPath = homepageFallbackContent.buyerPaths.find(
  (path) => path.title === "Secure AI & Automation",
)!;

const aiPillar = homepageFallbackContent.pillars.items.find((item) => item.id === "ai")!;

function pkg(id: string) {
  const found = projectPackages.find((candidate) => candidate.id === id);
  if (!found) throw new Error(`AI & Data Automation content: missing pricing package "${id}"`);
  return found;
}

export const startingEngagements = [
  pkg("ai-readiness-sprint"),
  pkg("secure-rag-knowledge-search"),
  pkg("m365-copilot-readiness-adoption"),
  pkg("ai-red-teaming-guardrails-validation"),
];

export const heroPanelEngagements = [pkg("ai-readiness-sprint"), pkg("secure-rag-knowledge-search")];

export const managedFollowOn = managedServices.find((service) => service.code === "MGT-16")!;

export const hero = {
  eyebrow: "AI & Intelligent Automation",
  heading: "Evaluation and human oversight are designed in, not bolted on after.",
  summary: buyerPath.outcome,
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "See published pricing", href: "/pricing/" },
};

export const buyerProblem = {
  eyebrow: "Who this is for",
  heading: buyerPath.problem,
  symptoms: buyerPath.symptoms,
};

export const pipelineIntro = {
  eyebrow: "Readiness, Guardrails, Evaluation",
  heading: "A use case earns production through three gates, not one launch decision.",
  qualifier:
    "Each gate has its own real deliverable. A candidate does not reach production until it has passed the one before it.",
};

export const pipelineGates = [
  {
    id: "readiness",
    order: 1,
    name: "Readiness",
    role: "Decide if the use case is worth building at all.",
    items: ["Use-case inventory workshop", "Readiness scorecard across data, team, governance and infrastructure", "3-5 prioritized candidates with effort/impact ratings"],
  },
  {
    id: "guardrails",
    order: 2,
    name: "Guardrails",
    role: "Bound what the system can access and do before it runs unsupervised.",
    items: ["Access-boundary design", "Prompt-injection guardrail configuration", "Adversarial red-team testing against jailbreak and data-leakage paths"],
  },
  {
    id: "evaluation",
    order: 3,
    name: "Evaluation",
    role: "Prove it keeps working, on a schedule, not just at launch.",
    items: ["Retrieval or output evaluation test suite", "Regression baseline", "Ongoing evaluation runs and knowledge refresh"],
  },
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

export const governance = {
  heading: "Designed around approved data and consequential decisions.",
  body: aiPillar.description,
};

export const followOnIntro = {
  heading: "After the pilot, continuing operation.",
  body: buyerPath.managedFollowOn,
};

export const processNote = {
  heading: "Where this sits in delivery.",
  body: "Use-case and data-boundary decisions happen at the same Architect stage in Rive's delivery process, ahead of build, so evaluation is scoped in from the start rather than added once something breaks.",
  cta: { label: "See Delivery Process", href: "/company/process/" },
};

export const relationships = {
  eyebrow: "Related",
  heading: "How this connects to the rest of Rive.",
  items: [
    {
      label: "Evidence Pack",
      body: "Every engagement, including an AI pilot, leaves a documented record: decisions, boundaries and what was tested.",
      cta: { label: "Explore the Evidence Pack", href: "/trust/evidence-pack/" },
    },
    {
      label: "Cloud Modernization",
      body: "A prepared cloud foundation is what makes a governed AI or automation workload safe to run.",
      cta: { label: "Explore Cloud Modernization", href: "/solutions/cloud-modernization/" },
    },
    {
      label: "Full published pricing",
      body: "See every current package, tier and managed-care option in one place.",
      cta: { label: "See published pricing", href: "/pricing/" },
    },
  ],
};

export const final = {
  heading: "Start with the use case, not the model.",
  body: "If the shape of the work is already clear, book Paid Discovery directly. If you are still deciding where to begin, the guided route can help.",
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "Find Your Solution", href: "/start/" },
};
