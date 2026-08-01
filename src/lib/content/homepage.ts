export type CtaLink = { label: string; href: string };

export type ArchitectureFlowStep = {
  id: string;
  label: string;
  description: string;
};

export type HeroContent = {
  eyebrow: string;
  heading: string;
  summary: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustLine: string;
  /** Digital Experience → Cloud Foundation → Governed AI → Managed Outcomes. */
  architectureFlow: ArchitectureFlowStep[];
};

export type BuyerPath = {
  title: string;
  problem: string;
  outcome: string;
  startingEngagements: string[];
  cta: CtaLink;
};

export type AuthorityPrinciple = {
  title: string;
  description: string;
};

export type EvidenceArtifact = {
  id: string;
  title: string;
  description: string;
  /** Short line shown in the Authority Band's static preview and reused as the Evidence Explorer's default focus copy. */
  preview: string;
};

export type FeaturedEngagementContent = {
  eyebrow: string;
  heading: string;
  description: string;
  outcomes: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type PlatformGroup = {
  platform: "AWS" | "Microsoft";
  heading: string;
  items: string[];
};

export type EvidencePackContent = {
  heading: string;
  description: string;
  cta: CtaLink;
  artifacts: EvidenceArtifact[];
};

export type GovernedAiCapability = {
  title: string;
  description: string;
};

export type GovernedAiFlowStep = {
  id: string;
  label: string;
};

export type Industry = {
  name: string;
  description: string;
  featured?: boolean;
};

export type ProcessStage = {
  step: string;
  title: string;
  description: string;
};

export type ProofItem = {
  label: string;
  description: string;
};

/** Author/date/reading-time are not yet approved — render an honest "pending" state, never invented values. */
export type ResourceCard = {
  category: string;
  title: string;
  summary: string;
  href: string;
  metaStatus: "pending";
};

export type FinalConversionContent = {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  reassurance: string;
};

export type HomepageContent = {
  hero: HeroContent;
  buyerPaths: BuyerPath[];
  authorityBand: {
    heading: string;
    principles: AuthorityPrinciple[];
    evidencePreview: EvidenceArtifact[];
  };
  featuredEngagement: FeaturedEngagementContent;
  platformParity: {
    heading: string;
    description: string;
    groups: PlatformGroup[];
    sharedLayer: string[];
  };
  evidencePack: EvidencePackContent;
  governedAi: {
    eyebrow: string;
    heading: string;
    description: string;
    capabilities: GovernedAiCapability[];
    flow: GovernedAiFlowStep[];
    cta: CtaLink;
  };
  industries: {
    heading: string;
    items: Industry[];
  };
  process: {
    heading: string;
    description: string;
    stages: ProcessStage[];
  };
  proof: {
    heading: string;
    description: string;
    items: ProofItem[];
  };
  resources: {
    heading: string;
    cards: ResourceCard[];
  };
  finalConversion: FinalConversionContent;
};

/**
 * Typed local fallback for the homepage. Sanity's `production` dataset has
 * no homepage schema yet (Week 2 scope) — this is the single source of
 * truth for now. `getHomepageContent()` is the seam Week 2 replaces with a
 * Sanity fetch; no component below should be redesigned to make that swap.
 *
 * RW-PW02-001: several modules (authority-band principle copy, governed-AI
 * capability descriptions, industry descriptions beyond the original five,
 * proof-item descriptions) reference "the approved explanatory copy in the
 * brief" that was not included in the pasted work package. That prose was
 * authored here to be restrained and claims-safe, consistent with existing
 * approved language patterns — it has not been separately approved and is
 * flagged for Product Office copy review, same as any new visible text.
 */
export const homepageFallbackContent: HomepageContent = {
  hero: {
    eyebrow: "RIVE WEBWORKS · WEB, CLOUD & AI",
    heading: "Web, Cloud & AI Solutions Built for Growth, Security and Scale",
    summary:
      "Rive Webworks helps growing and regulated organizations create high-converting websites, modernize AWS and Microsoft cloud environments, and deploy governed AI solutions—with clear scope, documented evidence and ongoing support.",
    primaryCta: { label: "Find Your Solution", href: "/start/" },
    secondaryCta: { label: "Book a Discovery Call", href: "/connect/" },
    trustLine:
      "AWS-aligned · Microsoft cloud-aligned · Security-first · Evidence Pack™ delivery",
    architectureFlow: [
      {
        id: "experience",
        label: "Digital Experience",
        description: "Websites and applications your buyers actually use.",
      },
      {
        id: "cloud",
        label: "Cloud Foundation",
        description: "AWS and Microsoft foundations sized to what you run.",
      },
      {
        id: "governed-ai",
        label: "Governed AI",
        description: "Automation and AI with scope, review and evidence.",
      },
      {
        id: "outcomes",
        label: "Managed Outcomes",
        description: "Operated, monitored and supported after launch.",
      },
    ],
  },

  buyerPaths: [
    {
      title: "Website & Growth",
      problem: "A weak, slow or low-converting website with an unclear proposition.",
      outcome: "A high-converting site with a clear proposition and measurable funnel.",
      startingEngagements: [
        "Discovery & Roadmap Engagement",
        "Website Rebuild",
      ],
      cta: { label: "Explore Website & Growth", href: "/solutions/web-growth/" },
    },
    {
      title: "AWS & Microsoft Cloud",
      problem:
        "Architecture, migration, security, cost control, M365 or cloud readiness gaps.",
      outcome: "A documented cloud foundation matched to the platform you already run.",
      startingEngagements: ["Architecture Review", "Migration Readiness Assessment"],
      cta: { label: "Explore Cloud Modernization", href: "/solutions/cloud-modernization/" },
    },
    {
      title: "Secure AI & Automation",
      problem: "Useful, governed and integrated AI or automation.",
      outcome: "AI and automation with human oversight built into every consequential step.",
      startingEngagements: ["AI Readiness Sprint", "Secure RAG Pilot"],
      cta: { label: "Explore Secure AI & Automation", href: "/solutions/ai-data-automation/" },
    },
    {
      title: "Managed Care & Advisory",
      problem: "Ongoing specialist help without hiring a complete internal team.",
      outcome: "A documented, accountable operating partner for what you've already built.",
      startingEngagements: ["Managed Care Assessment"],
      cta: { label: "Explore Managed Care & Advisory", href: "/solutions/managed-services/" },
    },
  ],

  authorityBand: {
    heading: "Why organizations choose Rive",
    principles: [
      {
        title: "Clarity before implementation",
        description:
          "Every engagement starts with a written scope and a plain-language explanation of what will change and why.",
      },
      {
        title: "Architecture before tooling",
        description:
          "Decisions are made about structure and constraints first — the tools and platforms follow, not the other way round.",
      },
      {
        title: "Evidence at every stage",
        description:
          "Scope, decisions, tests and handoff are documented as the work happens, not reconstructed afterward.",
      },
      {
        title: "Support beyond launch",
        description:
          "Delivery includes a runbook and an ongoing relationship — not a handoff into silence.",
      },
    ],
    evidencePreview: [
      { id: "scope", title: "Scope and decision record", description: "The written, agreed boundary of the work.", preview: "Approved scope" },
      { id: "architecture", title: "Architecture record", description: "How the solution is structured and why.", preview: "Architecture record" },
      { id: "security", title: "Security and governance controls", description: "What controls were applied and how they're enforced.", preview: "Security controls" },
      { id: "quality", title: "Quality evidence", description: "What was tested and the results observed.", preview: "QA evidence" },
      { id: "launch", title: "Launch and handoff record", description: "What shipped, when, and under what conditions.", preview: "Launch checklist" },
      { id: "roadmap", title: "Improvement roadmap", description: "What's next, ranked and ready to scope.", preview: "Operations guide" },
    ],
  },

  featuredEngagement: {
    eyebrow: "FEATURED ENGAGEMENT",
    heading: "Rebuild the customer experience—and strengthen everything behind it",
    description:
      "A full website rebuild that pairs a clearer proposition and conversion path with the frontend architecture, content control and evidence to support it going forward.",
    outcomes: [
      "Clearer positioning and conversion paths",
      "Responsive design system",
      "Modern frontend architecture",
      "CMS-controlled content",
      "Technical SEO and structured data",
      "Accessibility and performance validation",
      "Analytics-ready conversion tracking",
      "Evidence Pack™ handoff",
    ],
    primaryCta: { label: "Explore Website Rebuild", href: "/work/website-rebuild/" },
    secondaryCta: { label: "See what the Evidence Pack contains", href: "#evidence-pack-heading" },
  },

  platformParity: {
    heading: "One cloud strategy. Equal AWS and Microsoft depth.",
    description:
      "Rive works across both major enterprise cloud ecosystems, matching the platform to the environment you already run — neither is treated as the default.",
    groups: [
      {
        platform: "AWS",
        heading: "Cloud foundations and landing zones",
        items: [
          "Cloud foundations and landing zones",
          "Architecture reviews",
          "Security and resilience",
          "Migration readiness",
          "Cost governance and FinOps",
          "Managed cloud operations",
        ],
      },
      {
        platform: "Microsoft",
        heading: "Azure architecture and modernization",
        items: [
          "Azure architecture and modernization",
          "Microsoft 365 security",
          "Identity and access readiness",
          "Copilot readiness",
          "Governance and compliance controls",
          "Managed Microsoft operations",
        ],
      },
    ],
    sharedLayer: ["Identity", "Security", "Observability", "Cost", "Evidence", "Operations"],
  },

  evidencePack: {
    heading: "Know what was decided, built, tested and handed over",
    description:
      "Every engagement produces documented evidence — not just a delivered artifact, but a record of how it was scoped, built, verified, and handed off.",
    cta: { label: "Explore the Evidence Pack™", href: "/trust/evidence-pack/" },
    artifacts: [
      { id: "scope", title: "Scope and decision record", description: "The written, agreed boundary of the work.", preview: "Approved scope, sign-off dates and named decision owners." },
      { id: "architecture", title: "Architecture record", description: "How the solution is structured and why.", preview: "System diagram, key decisions and rejected alternatives." },
      { id: "security", title: "Security and governance controls", description: "The controls applied and how they're enforced.", preview: "Access model, data boundaries and review checkpoints." },
      { id: "quality", title: "Quality evidence", description: "What was tested and the results observed.", preview: "Test coverage, accessibility scan results, known limitations." },
      { id: "launch", title: "Launch and handoff record", description: "What shipped, when, and under what conditions.", preview: "Release notes, rollback plan and go-live checklist." },
      { id: "roadmap", title: "Improvement roadmap", description: "What's next, ranked and ready to scope.", preview: "Prioritized backlog with rough sizing." },
    ],
  },

  governedAi: {
    eyebrow: "SECURE AI & AUTOMATION",
    heading: "AI that is useful, secure and accountable",
    description:
      "AI and automation that is useful, governed, and integrated into how your organization already works — not a novelty layer bolted onto existing systems.",
    capabilities: [
      { title: "AI Readiness", description: "Assess data, workflows and governance before any model touches production." },
      { title: "Secure RAG", description: "Retrieval scoped to approved sources, with access boundaries enforced at query time." },
      { title: "Managed Agents", description: "Agents constrained to defined tools and actions, with human sign-off on consequential steps." },
      { title: "Workflow Automation", description: "Automation applied to well-understood, already-documented processes first." },
    ],
    flow: [
      { id: "data", label: "Approved Data" },
      { id: "retrieval", label: "Retrieval and Tools" },
      { id: "system", label: "AI System" },
      { id: "evaluation", label: "Evaluation" },
      { id: "oversight", label: "Human Oversight" },
    ],
    cta: { label: "Plan an AI Readiness Sprint", href: "/start/" },
  },

  industries: {
    heading: "Built for organizations where clarity and reliability matter",
    items: [
      {
        name: "Healthcare",
        description:
          "Regulated data handling, dependable uptime, and documentation that holds up to scrutiny.",
        featured: true,
      },
      {
        name: "Professional Services",
        description: "Credibility-led sites and back-office modernization.",
      },
      {
        name: "SaaS and Technology Companies",
        description: "Conversion-focused sites and scalable cloud foundations.",
      },
      {
        name: "Local and Multi-Location Businesses",
        description: "Fast, findable sites that convert local demand across every location.",
      },
      {
        name: "Nonprofits and Mission-Led Organizations",
        description: "Lean, dependable delivery within constrained budgets.",
      },
    ],
  },

  process: {
    heading: "From first decision to managed outcome",
    description:
      "A founder-led delivery approach with a documented method at every stage — not an opaque handoff to an anonymous production queue.",
    stages: [
      { step: "01", title: "Discover", description: "Assess current state against your stated goals." },
      { step: "02", title: "Architect", description: "Decide structure and constraints before any tool is chosen." },
      { step: "03", title: "Build", description: "Deliver against the documented scope, in the open." },
      { step: "04", title: "Prove", description: "Test, validate and record the evidence as the work happens." },
      { step: "05", title: "Support", description: "Operate, monitor and support what shipped." },
    ],
  },

  proof: {
    heading: "Work and proof",
    description:
      "Until client-approved case studies are published, every example below is labeled for exactly what it is.",
    items: [
      { label: "Delivery methodology", description: "How an engagement like this is scoped, built and verified." },
      { label: "Sample artifact", description: "A representative deliverable, not a client-specific output." },
      { label: "Architecture example", description: "A structural pattern used in engagements of this shape." },
      { label: "Demonstration engagement", description: "An illustrative walkthrough, not a completed client project." },
      { label: "Before-and-after design study", description: "A design exercise showing the kind of change this engagement produces." },
    ],
  },

  resources: {
    heading: "Make a better technology decision",
    cards: [
      {
        category: "Guide",
        title: "How to know when your website needs a rebuild",
        summary: "The signals that separate a refresh from a full rebuild — and how to tell which one you actually need.",
        href: "/resources/how-to-know-when-your-website-needs-a-rebuild/",
        metaStatus: "pending",
      },
      {
        category: "Guide",
        title: "AWS or Azure: choosing the right foundation",
        summary: "A framework for matching cloud platform to what your organization already runs and where it's headed.",
        href: "/resources/aws-or-azure-choosing-the-right-foundation/",
        metaStatus: "pending",
      },
      {
        category: "Insight",
        title: "What governed AI looks like in practice",
        summary: "Concrete controls — not slogans — for deploying AI with scoped data access and human oversight.",
        href: "/resources/what-governed-ai-looks-like-in-practice/",
        metaStatus: "pending",
      },
    ],
  },

  finalConversion: {
    heading: "Not sure where to start?",
    description:
      "Answer three short questions and Rive will recommend the most appropriate starting engagement, why it fits and what should happen next.",
    primaryCta: { label: "Find Your Solution", href: "/start/" },
    secondaryCta: { label: "Book a Discovery Call", href: "/connect/" },
    reassurance:
      "Clear response expectations · No obligation · Do not submit confidential data or protected health information",
  },
};

export async function getHomepageContent(): Promise<HomepageContent> {
  return homepageFallbackContent;
}
