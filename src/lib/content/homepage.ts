export type SolutionLane = {
  title: string;
  buyerNeed: string;
  href: string;
};

export type EvidenceCategory = {
  title: string;
  description: string;
};

export type PlatformGroup = {
  platform: "AWS" | "Microsoft";
  heading: string;
  items: string[];
};

export type Industry = {
  name: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type HomepageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    summary: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    trustLine: string;
  };
  buyerLanes: SolutionLane[];
  featuredEngagement: {
    eyebrow: string;
    title: string;
    description: string;
    /** Pricing is not yet approved — render as "pending", never invent a number. */
    priceStatus: "pending";
    includes: string[];
    cta: { label: string; href: string };
  };
  evidencePack: {
    heading: string;
    description: string;
    categories: EvidenceCategory[];
  };
  platformParity: {
    heading: string;
    description: string;
    groups: PlatformGroup[];
  };
  secureAi: {
    heading: string;
    description: string;
    controls: string[];
  };
  industries: {
    heading: string;
    items: Industry[];
  };
  process: {
    heading: string;
    description: string;
    steps: ProcessStep[];
  };
  finalCta: {
    heading: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
};

/**
 * Typed local fallback for the homepage. Sanity's `production` dataset has
 * no homepage schema yet (Week 2 scope) — this is the single source of
 * truth for now. `getHomepageContent()` is the seam Week 2 replaces with a
 * Sanity fetch; no component below should be redesigned to make that swap.
 */
export const homepageFallbackContent: HomepageContent = {
  hero: {
    eyebrow: "RIVE WEBWORKS · WEB, CLOUD & AI",
    heading: "Web, Cloud & AI Solutions Built for Growth, Security and Scale",
    summary:
      "Rive Webworks helps growing and regulated organizations create high-converting websites, modernize AWS and Microsoft cloud environments, and deploy governed AI solutions — with clear scope, documented evidence, and ongoing support.",
    primaryCta: { label: "Find Your Solution", href: "/start/" },
    secondaryCta: { label: "Book a Discovery Call", href: "/connect/" },
    trustLine:
      "AWS-aligned · Microsoft cloud-aligned · Security-first · Evidence Pack™ delivery",
  },
  buyerLanes: [
    {
      title: "Website & Growth",
      buyerNeed:
        "A weak, slow or low-converting website with an unclear proposition.",
      href: "/solutions/web-growth/",
    },
    {
      title: "AWS & Microsoft Cloud",
      buyerNeed:
        "Architecture, migration, security, cost control, M365 or cloud readiness.",
      href: "/solutions/cloud-modernization/",
    },
    {
      title: "Secure AI & Automation",
      buyerNeed: "Useful, governed and integrated AI or automation.",
      href: "/solutions/ai-data-automation/",
    },
    {
      title: "Managed Care & Advisory",
      buyerNeed: "Ongoing specialist help without hiring a complete internal team.",
      href: "/solutions/managed-services/",
    },
  ],
  featuredEngagement: {
    eyebrow: "A CLAIM-SAFE STARTING POINT",
    title: "Discovery & Roadmap Engagement",
    description:
      "A scoped starting engagement to assess your current website, cloud, or AI posture and produce a documented roadmap before any build work begins.",
    priceStatus: "pending",
    includes: [
      "Current-state assessment against your stated goals",
      "A written, scoped roadmap with sequencing and dependencies",
      "A first Evidence Pack™ covering scope and findings",
    ],
    cta: { label: "Find Your Solution", href: "/start/" },
  },
  evidencePack: {
    heading: "Evidence Pack™",
    description:
      "Every engagement produces documented evidence — not just a delivered artifact, but a record of how it was scoped, built, verified, and handed off.",
    categories: [
      { title: "Scope", description: "The written, agreed boundary of the work." },
      { title: "Architecture", description: "How the solution is structured and why." },
      { title: "QA", description: "What was tested and the results observed." },
      { title: "Launch", description: "What shipped, when, and under what conditions." },
      { title: "Runbook", description: "How to operate and maintain what was delivered." },
      {
        title: "Improvement backlog",
        description: "What's next, ranked and ready to scope.",
      },
    ],
  },
  platformParity: {
    heading: "AWS and Microsoft, given equal weight",
    description:
      "Rive works across both major enterprise cloud ecosystems, matching the platform to the environment you already run.",
    groups: [
      {
        platform: "AWS",
        heading: "AWS-aligned architecture and services",
        items: [
          "Cloud architecture and migration",
          "Security and cost-control review",
          "Managed operations",
        ],
      },
      {
        platform: "Microsoft",
        heading: "Microsoft cloud-aligned services",
        items: [
          "Azure architecture and modernization",
          "Microsoft 365 governance and readiness",
          "Identity and access hardening",
        ],
      },
    ],
  },
  secureAi: {
    heading: "Secure AI and automation",
    description:
      "AI and automation that is useful, governed, and integrated into how your organization already works — not a novelty layer bolted onto existing systems.",
    controls: [
      "Scoped data access with clear boundaries",
      "Human review built into consequential decisions",
      "Documented handling of what data a system can and cannot touch",
    ],
  },
  industries: {
    heading: "Built for your sector's constraints",
    items: [
      {
        name: "Healthcare",
        description: "Regulated data handling and dependable uptime.",
      },
      {
        name: "Professional Services",
        description: "Credibility-led sites and back-office modernization.",
      },
      {
        name: "SaaS",
        description: "Conversion-focused sites and scalable cloud foundations.",
      },
      {
        name: "Local Services",
        description: "Fast, findable sites that convert local demand.",
      },
      {
        name: "Nonprofit",
        description: "Lean, dependable delivery within constrained budgets.",
      },
    ],
  },
  process: {
    heading: "A concise, documented process",
    description:
      "A founder-led delivery approach with a documented method at every stage — not an opaque handoff to an anonymous production queue.",
    steps: [
      {
        step: "01",
        title: "Discover",
        description: "Assess current state against your stated goals.",
      },
      {
        step: "02",
        title: "Scope",
        description: "Agree a written roadmap with clear sequencing.",
      },
      {
        step: "03",
        title: "Build",
        description: "Deliver against the documented scope, in the open.",
      },
      {
        step: "04",
        title: "Verify & Handoff",
        description: "QA, launch, and a complete Evidence Pack™.",
      },
    ],
  },
  finalCta: {
    heading: "Find the right starting point",
    description:
      "Tell us where you're starting from, or talk it through directly — either way, the next step is a clear one.",
    primaryCta: { label: "Find Your Solution", href: "/start/" },
    secondaryCta: { label: "Book a Discovery Call", href: "/connect/" },
  },
};

export async function getHomepageContent(): Promise<HomepageContent> {
  return homepageFallbackContent;
}
