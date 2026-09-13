import { homepageFallbackContent } from "@/lib/content/homepage";
import { managedServices } from "@/lib/content/pricing";

/**
 * RW-PAGE-P0-SOLUTIONS-02 (Managed Care & Advisory).
 *
 * Commercial authority: all three real, already-published managed
 * services (`MGT-03` Managed Website Care, `MGT-21` Monthly Cloud Care,
 * `MGT-16` AI Ops + Eval Retainer) are direct object references into
 * `pricing.ts`, matching every prior page's discipline. The homepage's
 * own "Managed Care Assessment" starting-engagement label has no catalog
 * price, timeline or evidence tier anywhere in this repository - a full
 * grep confirms zero commercial-fact hits for that literal name - so it
 * is rendered honestly as an unresolved entry point (confirmed in Paid
 * Discovery), never invented. This is the same discipline UXR-01's
 * original build and Modern Web Platforms' `OP-40` both already
 * established for this repository.
 *
 * Deliberately named `managed-services-solution.ts`, not
 * `managed-services.ts`, so it is never confused with the identically
 * named `ManagedService` type or `managedServices` array already exported
 * from `pricing.ts`.
 */

export const buyerPath = homepageFallbackContent.buyerPaths.find(
  (path) => path.title === "Managed Care & Advisory",
)!;

function service(code: string) {
  const found = managedServices.find((candidate) => candidate.code === code);
  if (!found) throw new Error(`Managed Care & Advisory content: missing managed service "${code}"`);
  return found;
}

export const coverageDomains = [
  { id: "website", label: "Website", service: service("MGT-03") },
  { id: "cloud", label: "Cloud", service: service("MGT-21") },
  { id: "ai", label: "AI & Automation", service: service("MGT-16") },
] as const;

export const hero = {
  eyebrow: buyerPath.title,
  heading: "One accountable relationship, covering what you've already built.",
  summary: buyerPath.outcome,
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "See published pricing", href: "/pricing/" },
};

export const buyerProblem = {
  eyebrow: "Who this is for",
  heading: buyerPath.problem,
  symptoms: buyerPath.symptoms,
};

export const coverageIntro = {
  eyebrow: "One relationship, three domains",
  heading: "Not three vendors. One accountable operator across what you run.",
  qualifier:
    "Website, cloud and AI operate on the same reporting rhythm and the same point of contact, not three separate retainers that never talk to each other.",
};

export const assessment = {
  heading: "How coverage starts.",
  body: "A Managed Care Assessment reviews the deployed estate, ownership and support gaps before anything is priced. It has no fixed catalog price; scope and cost are confirmed in Paid Discovery, the same honest-gap treatment already established for every other unresolved field in this catalog.",
  distinction:
    "The assessment itself is advisory: a one-time review, not a standing commitment. The tiers below are the recurring operating relationship it can lead into, each with its own real scope, support level and exclusions.",
};

export const examine = {
  heading: "What Rive examines, and what you get back.",
  whatWeExamine: buyerPath.whatWeExamine,
  expectedOutput: buyerPath.expectedOutput,
};

export const processNote = {
  heading: "Where this sits in delivery.",
  body: "Continuing operation is the Operate & improve stage in Rive's delivery process, the same stage every prior engagement eventually reaches, not a separate track bolted on afterward.",
  cta: { label: "See Delivery Process", href: "/company/process/" },
};

export const relationships = {
  eyebrow: "Related",
  heading: "How this connects to the rest of Rive.",
  items: [
    {
      label: "Evidence Pack",
      body: "Every managed period leaves a documented record: what was reviewed, what changed and what remains open.",
      cta: { label: "Explore the Evidence Pack", href: "/trust/evidence-pack/" },
    },
    {
      label: "Website & Growth",
      body: "Managed care is what keeps a launch from quietly decaying after it ships.",
      cta: { label: "Explore Website & Growth", href: "/solutions/web-growth/" },
    },
    {
      label: "Full published pricing",
      body: "See every current package, tier and managed-care option in one place.",
      cta: { label: "See published pricing", href: "/pricing/" },
    },
  ],
};

export const final = {
  heading: "Start with what's already running.",
  body: "If the shape of the work is already clear, book Paid Discovery directly. If you are still deciding where to begin, the guided route can help.",
  primary: { label: "Book Paid Discovery", href: "/connect/" },
  secondary: { label: "Find Your Solution", href: "/start/" },
};
