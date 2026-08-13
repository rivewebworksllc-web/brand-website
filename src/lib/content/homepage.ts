export type CtaLink = { label: string; href: string };
export type ArchitectureFlowStep = { id: string; label: string; description: string; subItems: [string, string] };
export type GovernedAiFlowStep = { id: string; label: string };
export type ProcessStage = { step: string; title: string; description: string };
export type ResourceCard = { category: string; title: string; summary: string; href: string; metaStatus: "pending" };

export type BuyerPath = {
  title: string;
  problem: string;
  outcome: string;
  startingEngagements: string[];
  cta: CtaLink;
  symptoms: string[];
  whatWeExamine: string;
  expectedOutput: string;
  managedFollowOn: string;
};

export type EvidenceArtifact = { id: string; title: string; description: string; preview: string };
export type PillarOffer = {
  id: "cloud" | "ai" | "web";
  label: string;
  heading: string;
  description: string;
  capabilities: string[];
  cta: CtaLink;
  note?: string;
};

export type HomepageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    summary: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    trustItems: string[];
    field: Array<{ title: string; detail: string }>;
    architectureFlow: ArchitectureFlowStep[];
  };
  evidencePack: { heading: string; description: string; cta: CtaLink; artifacts: EvidenceArtifact[] };
  homepageEvidencePack: { heading: string; description: string; cta: CtaLink; artifacts: EvidenceArtifact[] };
  buyerPathsIntro: { eyebrow: string; heading: string; description: string };
  buyerPaths: BuyerPath[];
  pillars: { eyebrow: string; heading: string; description: string; items: PillarOffer[] };
  process: {
    eyebrow: string;
    heading: string;
    description: string;
    stages: Array<{ step: string; title: string; description: string }>;
    cta: CtaLink;
  };
  industries: {
    heading: string;
    description: string;
    items: Array<{ name: string; description: string; featured?: boolean }>;
  };
  homepageIndustries: {
    eyebrow: string;
    heading: string;
    description: string;
    items: Array<{ name: string; description: string }>;
    cta: CtaLink;
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    description: string;
    items: Array<{ title: string; description: string }>;
    cta: CtaLink;
  };
  resources: {
    eyebrow: string;
    heading: string;
    description: string;
    items: Array<{ category: string; title: string; summary: string; href: string }>;
    cards: ResourceCard[];
    cta: CtaLink;
  };
  finalConversion: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    reassurance: string;
  };
  manifesto: { eyebrow: string; lead: string; body: string };
  featuredEngagement: { eyebrow: string; heading: string; description: string; outcomes: string[]; primaryCta: CtaLink; secondaryCta: CtaLink };
  platformParity: { heading: string; description: string; groups: Array<{ platform: "AWS" | "Microsoft"; heading: string; items: string[] }>; sharedLayer: string[] };
  governedAi: { eyebrow: string; heading: string; description: string; capabilities: Array<{ title: string; description: string }>; flow: GovernedAiFlowStep[]; cta: CtaLink };
  proofFootnote: string;
};

export const homepageFallbackContent: HomepageContent = {
  hero: {
    eyebrow: "RIVE WEBWORKS",
    heading: "Cloud, AI & Web Design Built on Evidence, Not Promises",
    summary:
      "Rive Webworks is founder-led. Work directly with the architect responsible for designing, building and standing behind your AWS or Microsoft cloud foundation, governed AI system or modern web platform, with a documented Evidence Pack™ supporting each engagement.",
    primaryCta: { label: "Find Your Solution", href: "/start/" },
    secondaryCta: { label: "Explore Services", href: "/services/" },
    trustItems: [
      "Founder-led delivery",
      "AWS & Microsoft Cloud",
      "Governed AI",
      "Modern Web & Next.js",
      "Evidence-led delivery",
      "GCP / Oracle on request",
    ],
    field: [
      { title: "Cloud", detail: "AWS and Microsoft foundations" },
      { title: "AI", detail: "Governed intelligence and automation" },
      { title: "Web", detail: "Modern digital experience" },
    ],
    architectureFlow: [
      { id: "experience", label: "Digital Experience", description: "Websites and applications your buyers actually use.", subItems: ["Website and application layer", "Content and customer journey"] },
      { id: "cloud", label: "Cloud Foundation", description: "AWS and Microsoft foundations sized to what you run.", subItems: ["AWS and Microsoft foundation", "Identity and security"] },
      { id: "governed-ai", label: "Governed AI", description: "Automation and AI with scope, review and evidence.", subItems: ["Data and observability", "Governed retrieval and automation"] },
      { id: "outcomes", label: "Managed Outcomes", description: "Operated, monitored and supported after launch.", subItems: ["Evaluation and human oversight", "Monitoring and managed operations"] },
    ],
  },
  evidencePack: {
    heading: "Know what was decided, built, tested and handed over",
    description: "Every engagement produces documented evidence: a record of how it was scoped, built, verified and handed off.",
    cta: { label: "Explore the Evidence Pack™", href: "/trust/evidence-pack/" },
    artifacts: [
      { id: "scope", title: "Scope and decision record", description: "The written, agreed boundary of the work.", preview: "Scope, decisions and approvals." },
      { id: "architecture", title: "Architecture record", description: "How the solution is structured and why.", preview: "Structure, constraints and trade-offs." },
      { id: "security", title: "Security and governance controls", description: "The controls applied and how they are enforced.", preview: "Access, data boundaries and review." },
      { id: "quality", title: "Quality evidence", description: "What was tested and the results observed.", preview: "Accessibility, performance and functional checks." },
      { id: "launch", title: "Launch and handoff record", description: "What shipped, when and under which conditions.", preview: "Release, validation and rollback readiness." },
      { id: "roadmap", title: "Improvement roadmap", description: "What is next, ranked and ready to scope.", preview: "Priorities, dependencies and next moves." },
    ],
  },
  homepageEvidencePack: {
    heading: "Evidence is part of the deliverable.",
    description:
      "Each engagement leaves a usable record of what was agreed, how it was designed, what was tested, what launched and what should happen next.",
    cta: { label: "See Evidence Pack", href: "/trust/evidence-pack/" },
    artifacts: [
      { id: "scope", title: "Scope record", description: "The agreed boundary, decisions and owners.", preview: "Scope, decisions and approvals." },
      { id: "architecture", title: "Architecture", description: "The solution structure and the reasons behind it.", preview: "Structure, constraints and trade-offs." },
      { id: "qa", title: "QA evidence", description: "The checks performed and the results observed.", preview: "Accessibility, performance and functional checks." },
      { id: "launch", title: "Launch checklist", description: "What shipped, when and under which conditions.", preview: "Release, validation and rollback readiness." },
      { id: "runbook", title: "Runbook", description: "The practical operating and handoff record.", preview: "Ownership, operation and support notes." },
      { id: "backlog", title: "Improvement backlog", description: "The next opportunities, ordered for decision.", preview: "Priorities, dependencies and next moves." },
    ],
  },
  buyerPathsIntro: {
    eyebrow: "CHOOSE AN ENTRY POINT",
    heading: "Start with the problem you can see.",
    description: "You do not need to diagnose the whole system. Choose the pressure you recognise and see where Rive would begin.",
  },
  buyerPaths: [
    {
      title: "AWS & Microsoft Cloud", problem: "Architecture, migration, security, resilience or cloud cost needs a defensible plan.", outcome: "A documented cloud foundation matched to your operating reality.", startingEngagements: ["Architecture Review", "Migration Readiness Assessment"], cta: { label: "Explore Cloud Modernization", href: "/solutions/cloud-modernization/" }, symptoms: ["Costs are unpredictable", "Modernization keeps slipping", "Security posture is unclear"], whatWeExamine: "Architecture, cost drivers, identity, security posture and platform fit.", expectedOutput: "A sequenced architecture or readiness plan.", managedFollowOn: "Cloud operations, cost governance and continuing security review.",
    },
    {
      title: "Secure AI & Automation", problem: "AI needs a useful job, controlled data access and human oversight before production.", outcome: "A governed AI path with evaluation and responsibility designed in.", startingEngagements: ["AI Readiness Sprint", "Secure RAG Pilot"], cta: { label: "Explore Secure AI & Automation", href: "/solutions/ai-data-automation/" }, symptoms: ["Pilots stall", "Data boundaries are unclear", "Outputs lack review"], whatWeExamine: "Data readiness, workflow candidates, risks and controls.", expectedOutput: "A scoped readiness plan or pilot.", managedFollowOn: "Agent and automation operations with continuing evaluation.",
    },
    {
      title: "Website & Growth", problem: "The website is slow, unclear, difficult to manage or failing to convert attention into action.", outcome: "A modern platform with a clearer proposition and evidence-backed launch.", startingEngagements: ["Discovery & Roadmap", "Modern Web Build"], cta: { label: "Explore Website & Growth", href: "/solutions/web-growth/" }, symptoms: ["Traffic rarely converts", "The site is hard to change", "The proposition is unclear"], whatWeExamine: "Customer journey, content model, measurement and constraints.", expectedOutput: "A roadmap or build scope.", managedFollowOn: "Performance, accessibility and conversion improvement.",
    },
    {
      title: "Managed Care & Advisory", problem: "What has been built needs accountable operation, improvement and specialist attention.", outcome: "A clear operating relationship without assembling a complete internal team.", startingEngagements: ["Managed Care Assessment"], cta: { label: "Explore Managed Care & Advisory", href: "/solutions/managed-services/" }, symptoms: ["Ownership is unclear", "Small issues linger", "Specialist coverage is missing"], whatWeExamine: "The deployed estate, ownership and support gaps.", expectedOutput: "A defined operating scope.", managedFollowOn: "Continuing, documented operational ownership.",
    },
  ],
  pillars: {
    eyebrow: "CLOUD, AI, WEB",
    heading: "Three lead capabilities. One accountable relationship.",
    description: "Cloud leads, governed AI follows, and modern web completes the public experience. Choose a subject to see where Rive starts.",
    items: [
      { id: "cloud", label: "Cloud Architecture & Modernization", heading: "A cloud foundation you can explain and operate.", description: "AWS and Microsoft receive equal attention, selected around your estate rather than a house preference.", capabilities: ["AWS and Microsoft foundations", "Architecture and migration reviews", "Security and resilience", "FinOps and cost governance"], cta: { label: "Assess My Cloud", href: "/start/" }, note: "GCP and Oracle remain available where the wider environment requires them." },
      { id: "ai", label: "AI & Intelligent Automation", heading: "Intelligence with boundaries, evaluation and ownership.", description: "Readiness, secure retrieval, agents and automation are designed around approved data and consequential human decisions.", capabilities: ["AI readiness and secure RAG", "Agentic workflows and Copilot Studio", "Evaluation and governance", "AI operations and custom engineering"], cta: { label: "Plan My AI Solution", href: "/start/" } },
      { id: "web", label: "Web Design & Digital Experience", heading: "A modern platform chosen for the work, not the trend.", description: "Composable and Next.js delivery provide a modern path. WordPress remains supported when it is the better operational fit.", capabilities: ["Composable Web and Next.js", "Experience and content architecture", "Performance and accessibility", "Operational continuity and measurement"], cta: { label: "Explore Modern Web Platforms", href: "/services/web-design-development/" } },
    ],
  },
  process: {
    eyebrow: "HOW RIVE WORKS", heading: "Continuity from first engagement to lasting ownership.", description: "The same founder-led team carries context from discovery through launch and into managed continuity. There is no account-manager handoff between the idea and the system.", stages: [
      { step: "01", title: "Land", description: "Start with the visible pressure and define a useful first engagement." },
      { step: "02", title: "Expand", description: "Connect the adjacent architecture, experience or operating work that makes the first result durable." },
      { step: "03", title: "Retain", description: "Continue accountable operation, governance and improvement where continuity matters." },
    ], cta: { label: "See Delivery Process", href: "/company/process/" },
  },
  industries: {
    heading: "Built where mistakes are expensive.",
    description: "Regulated data, thin margins, or a brand that cannot absorb a bad launch: these are the constraints we design around.",
    items: [
      { name: "Healthcare", description: "Regulated data handling, dependable uptime, and documentation that holds up to scrutiny.", featured: true },
      { name: "Professional Services", description: "Credibility-led sites and back-office modernization." },
      { name: "SaaS and Technology Companies", description: "Conversion-focused sites and scalable cloud foundations." },
      { name: "Local and Multi-Location Businesses", description: "Fast, findable sites that convert local demand across every location." },
      { name: "Nonprofits and Mission-Led Organizations", description: "Lean, dependable delivery within constrained budgets." },
    ],
  },
  homepageIndustries: {
    eyebrow: "OPERATING CONDITIONS", heading: "Technology decisions land in real organisations.", description: "Regulation, credibility, growth pressure, local demand and constrained resources change what good delivery looks like.", items: [
      { name: "Healthcare", description: "Consequence, regulated data and dependable operation." },
      { name: "B2B SaaS / IT Services", description: "Scale, conversion and technical confidence." },
      { name: "Professional Services", description: "Credibility, trust and operational maturity." },
      { name: "Local Services", description: "Findability, practical conversion and local context." },
      { name: "Nonprofit", description: "Human impact and dependable delivery within constraints." },
    ], cta: { label: "Choose My Industry", href: "/industries/" },
  },
  capabilities: {
    eyebrow: "SELECTED CAPABILITIES", heading: "The wider system stays within reach.", description: "Specialist work is surfaced selectively, without turning the homepage into the catalog.", items: [
      { title: "Agentic workflows", description: "Constrained tools, actions and human approval paths." },
      { title: "Microsoft Copilot Studio agents", description: "Microsoft-aligned agent experiences with governed scope." },
      { title: "Lakehouse / BI modernization", description: "Data foundations and decision surfaces designed together." },
      { title: "Identity & security", description: "Access, boundary and control thinking across the system." },
      { title: "Observability & cost", description: "Signals and financial discipline that continue after launch." },
      { title: "Managed operations", description: "Accountable continuity for the systems Rive helps shape." },
    ], cta: { label: "View All Capabilities", href: "/services/" },
  },
  resources: {
    eyebrow: "DECISION RESOURCES", heading: "Make the next technology decision with more context.", description: "Guides and analysis for the questions that usually appear before a useful scope does.", items: [
      { category: "Guide", title: "How to know when your website needs a rebuild", summary: "Separate a visual refresh from a structural rebuild.", href: "/resources/how-to-know-when-your-website-needs-a-rebuild/" },
      { category: "Comparison", title: "AWS or Azure: choosing the right foundation", summary: "Match the platform to the organisation and operating model.", href: "/resources/aws-or-azure-choosing-the-right-foundation/" },
      { category: "Architecture", title: "What governed AI looks like in practice", summary: "Turn governance from a slogan into system boundaries and review.", href: "/resources/what-governed-ai-looks-like-in-practice/" },
    ],
    cards: [
      { category: "Guide", title: "How to know when your website needs a rebuild", summary: "Separate a visual refresh from a structural rebuild.", href: "/resources/how-to-know-when-your-website-needs-a-rebuild/", metaStatus: "pending" },
      { category: "Comparison", title: "AWS or Azure: choosing the right foundation", summary: "Match the platform to the organisation and operating model.", href: "/resources/aws-or-azure-choosing-the-right-foundation/", metaStatus: "pending" },
      { category: "Architecture", title: "What governed AI looks like in practice", summary: "Turn governance from a slogan into system boundaries and review.", href: "/resources/what-governed-ai-looks-like-in-practice/", metaStatus: "pending" },
    ],
    cta: { label: "Explore Resources", href: "/resources/guides/" },
  },
  finalConversion: {
    eyebrow: "CHOOSE THE NEXT MOVE", heading: "Start with direction, or start the conversation.", description: "If the right service is unclear, find the starting point. If the problem is already defined, open a direct conversation.", primaryCta: { label: "Find Your Solution", href: "/start/" }, secondaryCta: { label: "Start a Conversation", href: "/connect/" }, reassurance: "No obligation. Do not submit confidential data or protected health information.",
  },
  manifesto: {
    eyebrow: "How we think about this",
    lead: "A website, its cloud, and the AI layered on top are one system.",
    body: "Most vendors specialize in a layer and hand you off at the seam: a design shop for the site, a reseller for the cloud, a bolt-on for AI. Rive scopes, builds and operates all three as a single accountable engagement, with a written record of what was decided and why, not a folder of disconnected invoices.",
  },
  featuredEngagement: {
    eyebrow: "THE MOST COMMON STARTING POINT",
    heading: "Rebuild the site. Fix what's actually behind it.",
    description: "A full website rebuild that pairs a clearer proposition and conversion path with the frontend architecture, content control and evidence to support it going forward.",
    outcomes: ["Clearer positioning and conversion paths", "Responsive design system", "Modern frontend architecture", "CMS-controlled content", "Technical SEO and structured data", "Accessibility and performance validation", "Analytics-ready conversion tracking", "Evidence Pack™ handoff"],
    primaryCta: { label: "Explore Website Rebuild", href: "/work/website-rebuild/" },
    secondaryCta: { label: "See what the Evidence Pack contains", href: "#evidence-pack-heading" },
  },
  platformParity: {
    heading: "AWS or Microsoft. We don't have a favorite.",
    description: "Rive works across both ecosystems, matched to what you already run rather than a house preference.",
    groups: [
      { platform: "AWS", heading: "Cloud foundations and landing zones", items: ["Cloud foundations and landing zones", "Architecture reviews", "Security and resilience", "Migration readiness", "Cost governance and FinOps", "Managed cloud operations"] },
      { platform: "Microsoft", heading: "Azure architecture and modernization", items: ["Azure architecture and modernization", "Microsoft 365 security", "Identity and access readiness", "Copilot readiness", "Governance and compliance controls", "Managed Microsoft operations"] },
    ],
    sharedLayer: ["Identity", "Security", "Observability", "Cost", "Evidence", "Operations"],
  },
  governedAi: {
    eyebrow: "SECURE AI & AUTOMATION", heading: "AI that has to justify itself.", description: "Every deployment traces from approved data through evaluation to a named human who signs off on what matters.",
    capabilities: [
      { title: "AI Readiness", description: "Assess data, workflows and governance before production." },
      { title: "Secure RAG", description: "Retrieval scoped to approved sources." },
      { title: "Managed Agents", description: "Agents constrained to defined tools and actions." },
      { title: "Workflow Automation", description: "Automation applied to understood processes." },
    ],
    flow: [{ id: "data", label: "Approved Data" }, { id: "retrieval", label: "Retrieval and Tools" }, { id: "system", label: "AI System" }, { id: "evaluation", label: "Evaluation" }, { id: "oversight", label: "Human Oversight" }],
    cta: { label: "Plan an AI Readiness Sprint", href: "/start/" },
  },
  proofFootnote: "We don't have client case studies published yet. Anything shown here is labeled for exactly what it is: a methodology walkthrough or sample artifact, never a completed client result.",
};

export async function getHomepageContent(): Promise<HomepageContent> {
  return homepageFallbackContent;
}
