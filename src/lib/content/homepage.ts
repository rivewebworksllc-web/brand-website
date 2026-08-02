export type CtaLink = { label: string; href: string };

export type ArchitectureFlowStep = {
  id: string;
  label: string;
  description: string;
  /** Two supporting systems at this layer, e.g. "AWS and Microsoft foundation" for Cloud Foundation. */
  subItems: [string, string];
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

export type ManifestoContent = {
  eyebrow: string;
  lead: string;
  body: string;
};

export type BuyerPath = {
  title: string;
  problem: string;
  outcome: string;
  startingEngagements: string[];
  cta: CtaLink;
  /** Self-authored supporting detail for the Guided Outcome Explorer (RW-PW04) — not separately copy-approved. */
  symptoms: string[];
  whatWeExamine: string;
  expectedOutput: string;
  managedFollowOn: string;
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

export type EvidenceArtifact = {
  id: string;
  title: string;
  description: string;
  preview: string;
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
  manifesto: ManifestoContent;
  buyerPaths: BuyerPath[];
  buyerPathsIntro: { heading: string; description: string };
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
    description: string;
    items: Industry[];
  };
  process: {
    heading: string;
    description: string;
    stages: ProcessStage[];
  };
  proofFootnote: string;
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
 * RW-PW02 sprint 2: full rebuild after Silvester rejected sprint 1 as
 * reading like a generic AI-templated SaaS site. Copy here is deliberately
 * more direct/specific and less brochure-formulaic than sprint 1's; it
 * covers the same real, factual capabilities (web/cloud/AI, AWS+Microsoft
 * parity, Evidence Pack™, founder-led delivery) — no new unapproved claims,
 * pricing, credentials or proof were introduced. This voice/structure has
 * not been separately copy-approved and should be treated as a proposal
 * for Silvester's visual/content review, same as sprint 1's was.
 */
export const homepageFallbackContent: HomepageContent = {
  hero: {
    eyebrow: "RIVE WEBWORKS",
    heading: "One accountable team — not three vendors pointing at each other.",
    summary:
      "Rive builds the website, modernizes the AWS or Microsoft cloud behind it, and ships governed AI on top. One written scope and documented evidence at every stage, from a team that stays after launch.",
    primaryCta: { label: "Find Your Solution", href: "/start/" },
    secondaryCta: { label: "Book a Discovery Call", href: "/connect/" },
    trustLine:
      "AWS-aligned · Microsoft cloud-aligned · Security-first · Evidence Pack™ on every engagement",
    architectureFlow: [
      {
        id: "experience",
        label: "Digital Experience",
        description: "Websites and applications your buyers actually use.",
        subItems: ["Website and application layer", "Content and customer journey"],
      },
      {
        id: "cloud",
        label: "Cloud Foundation",
        description: "AWS and Microsoft foundations sized to what you run.",
        subItems: ["AWS and Microsoft foundation", "Identity and security"],
      },
      {
        id: "governed-ai",
        label: "Governed AI",
        description: "Automation and AI with scope, review and evidence.",
        subItems: ["Data and observability", "Governed retrieval and automation"],
      },
      {
        id: "outcomes",
        label: "Managed Outcomes",
        description: "Operated, monitored and supported after launch.",
        subItems: ["Evaluation and human oversight", "Monitoring and managed operations"],
      },
    ],
  },

  manifesto: {
    eyebrow: "How we think about this",
    lead: "A website, its cloud, and the AI layered on top are one system.",
    body: "Most vendors specialize in a layer and hand you off at the seam — a design shop for the site, a reseller for the cloud, a bolt-on for AI. Rive scopes, builds and operates all three as a single accountable engagement, with a written record of what was decided and why, not a folder of disconnected invoices.",
  },

  buyerPathsIntro: {
    heading: "Tell us what's broken. We'll tell you where to start.",
    description: "You don't need to know the service name — pick the outcome.",
  },
  buyerPaths: [
    {
      title: "Website & Growth",
      problem: "A weak, slow or low-converting website with an unclear proposition.",
      outcome: "A high-converting site with a clear proposition and measurable funnel.",
      startingEngagements: ["Discovery & Roadmap Engagement", "Website Rebuild"],
      cta: { label: "Explore Website & Growth", href: "/solutions/web-growth/" },
      symptoms: [
        "Traffic arrives but rarely converts",
        "The site is slow, dated, or hard to update",
        "Visitors can't tell what you actually do",
      ],
      whatWeExamine: "Current funnel performance, information architecture, and technical/CMS constraints.",
      expectedOutput: "A scoped roadmap or a full rebuild, with a clear conversion path and CMS-controlled content.",
      managedFollowOn: "Ongoing performance, accessibility and content support after launch.",
    },
    {
      title: "AWS & Microsoft Cloud",
      problem: "Architecture, migration, security, cost control, M365 or cloud readiness gaps.",
      outcome: "A documented cloud foundation matched to the platform you already run.",
      startingEngagements: ["Architecture Review", "Migration Readiness Assessment"],
      cta: { label: "Explore Cloud Modernization", href: "/solutions/cloud-modernization/" },
      symptoms: [
        "Cloud costs are unpredictable or climbing",
        "Migration or modernization keeps getting delayed",
        "Security or compliance posture is unclear",
      ],
      whatWeExamine: "Current architecture, cost drivers, identity and security posture, and platform fit.",
      expectedOutput: "A documented architecture review or migration readiness assessment with sequencing.",
      managedFollowOn: "Managed cloud operations, cost governance and ongoing security review.",
    },
    {
      title: "Secure AI & Automation",
      problem: "Useful, governed and integrated AI or automation.",
      outcome: "AI and automation with human oversight built into every consequential step.",
      startingEngagements: ["AI Readiness Sprint", "Secure RAG Pilot"],
      cta: { label: "Explore Secure AI & Automation", href: "/solutions/ai-data-automation/" },
      symptoms: [
        "AI pilots stall before reaching production",
        "No clear boundary on what data a model can access",
        "Automation exists but nobody reviews its output",
      ],
      whatWeExamine: "Data readiness, workflow candidates, and the governance controls already in place.",
      expectedOutput: "A scoped AI Readiness Sprint or Secure RAG pilot with named human sign-off points.",
      managedFollowOn: "Managed agents and automation with ongoing evaluation and oversight.",
    },
    {
      title: "Managed Care & Advisory",
      problem: "Ongoing specialist help without hiring a complete internal team.",
      outcome: "A documented, accountable operating partner for what you've already built.",
      startingEngagements: ["Managed Care Assessment"],
      cta: { label: "Explore Managed Care & Advisory", href: "/solutions/managed-services/" },
      symptoms: [
        "What you have works, but nobody owns it",
        "Small requests take too long to get attention",
        "You need specialist coverage without a full hire",
      ],
      whatWeExamine: "What's currently deployed, who supports it today, and where the gaps are.",
      expectedOutput: "A Managed Care Assessment defining scope, response expectations and coverage.",
      managedFollowOn: "An ongoing accountable operating relationship with documented response times.",
    },
  ],

  featuredEngagement: {
    eyebrow: "THE MOST COMMON STARTING POINT",
    heading: "Rebuild the site. Fix what's actually behind it.",
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
    heading: "AWS or Microsoft. We don't have a favorite.",
    description:
      "Most shops lean one way and treat the other as an afterthought. Rive runs full-depth practice on both ecosystems — matched to what you already run, not to a house preference.",
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
    heading: "AI that has to justify itself.",
    description:
      "We don't ship an AI feature because it's expected. Every deployment traces from approved data through evaluation to a named human who signs off on what matters.",
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
    heading: "Built where mistakes are expensive.",
    description:
      "Regulated data, thin margins, or a brand that can't absorb a bad launch — these are the constraints we design around.",
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
    heading: "How an engagement actually runs.",
    description:
      "A founder-led approach with a documented method at every stage — not a handoff to an anonymous production queue.",
    stages: [
      { step: "01", title: "Discover", description: "Assess current state against your stated goals." },
      { step: "02", title: "Architect", description: "Decide structure and constraints before any tool is chosen." },
      { step: "03", title: "Build", description: "Deliver against the documented scope, in the open." },
      { step: "04", title: "Prove", description: "Test, validate and record the evidence as the work happens." },
      { step: "05", title: "Support", description: "Operate, monitor and support what shipped." },
    ],
  },

  proofFootnote:
    "We don't have client case studies published yet. Until we do, anything shown here is labeled for exactly what it is — a methodology walkthrough or a sample artifact, never dressed up as a completed client result.",

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
