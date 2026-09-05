/**
 * RW-PAGE-08B: Pricing content authority.
 *
 * Commercial source: Catalog v8.5.4 / "v49," reconciled into
 * `docs/governance/CLAIMS_REGISTER.md` (`CLM-007`) via `GOV-020`. Every
 * price/timeline/evidence/inclusion/exclusion figure below is taken verbatim
 * from the RW-PAGE-08B Product Office directive - nothing here is invented.
 *
 * Two fields are deliberately left unresolved rather than fabricated, per
 * the directive's own instruction (§17, §26): Package 1's exact starting
 * price, and most of Package 10's field set (timeline, evidence tier,
 * inclusions, exclusions, tier structure, add-ons). `unresolved: true` /
 * `unresolvedFields` mark these so the UI renders them honestly instead of
 * inventing a number to keep the grid symmetrical.
 *
 * RW-PRICING-UXR-01A: adds `UXR-01` ("UX Audit + Conversion Roadmap") as an
 * eleventh package, in a new `strategy` group. Commercial facts (price
 * floor, timeline, evidence tier, deliverables, exclusions, attach paths)
 * are reused verbatim from the already-approved `CLM-008` authority
 * (`GOV-021`, `RW-PAGE-11A`) - not re-invented here - and reconciled for
 * this new placement via `CLM-008`'s `RW-PRICING-UXR-01A` scope note and
 * `GOV-023`. See `src/lib/content/ux-audit-conversion-roadmap.ts` for the
 * full standalone-page content this package summarizes.
 */

export type PackageGroupId = "strategy" | "web" | "ai" | "cloud-data";

export type PackageGroup = {
  id: PackageGroupId;
  label: string;
  description: string;
};

export type PriceBand =
  | { unresolved: false; from: number; display: string }
  | { unresolved: true; display: string; note: string };

export type TierGuidance = {
  name: string;
  price: string;
  detail: string[];
};

export type AddOn = {
  code: string;
  name: string;
  price: string;
};

export type Attach = {
  note?: string;
  options: { code: string; name: string }[];
};

export type ProjectPackage = {
  id: string;
  number: number;
  group: PackageGroupId;
  name: string;
  code: string;
  price: PriceBand;
  purpose: string;
  timeline?: string;
  evidence?: string;
  included?: string[];
  excluded?: string[];
  tierGuidance?: TierGuidance[];
  attach?: Attach;
  addOns?: AddOn[];
  nextStep?: string;
  unresolvedFields?: string[];
  /**
   * RW-PAGE-08C: short, purposeful wording for a package whose unresolved
   * fields would otherwise read as a raw data dump. Presentational only -
   * the underlying `unresolvedFields` list (used by tests and the
   * commercial-integrity audit) is unchanged.
   */
  unresolvedNote?: string;
};

export type ManagedTier = {
  name: string;
  price: string;
  detail?: string[];
};

export type ManagedService = {
  code: string;
  name: string;
  summary: string;
  tiers: ManagedTier[];
  recurringThemes: string[];
  exclusions: string[];
  evidence?: string;
  evidenceByTier?: { tier: string; evidence: string }[];
  supportByTier?: { tier: string; support: string }[];
  note?: string;
};

export const packageGroups: PackageGroup[] = [
  {
    id: "strategy",
    label: "Strategy & Experience",
    description: "Understand the problem before committing to the build.",
  },
  {
    id: "web",
    label: "Web",
    description: "Launch and website foundation work.",
  },
  {
    id: "ai",
    label: "AI",
    description: "Readiness, retrieval, adoption, safety and governance for applied AI.",
  },
  {
    id: "cloud-data",
    label: "Cloud & Data",
    description: "AWS/Azure architecture, security, resilience, analytics and foundation work.",
  },
];

export const projectPackages: ProjectPackage[] = [
  {
    id: "ux-audit-conversion-roadmap",
    number: 11,
    group: "strategy",
    name: "UX Audit + Conversion Roadmap",
    code: "UXR-01",
    price: { unresolved: false, from: 3500, display: "From $3,500" },
    purpose:
      "Find out what is stopping visitors from converting, evidenced by behavior, funnels, accessibility and performance, before spending on a redesign.",
    timeline: "2-4 weeks",
    evidence: "E2",
    included: [
      "Heatmap and session-recording analysis (Microsoft Clarity, 14 days)",
      "GA4 funnel report (bounce rate, scroll depth, form abandonment)",
      "WCAG 2.2 AA accessibility audit (axe, WAVE, manual keyboard test)",
      "Core Web Vitals snapshot (mobile and desktop)",
      "User-flow audit (up to 5 buyer paths)",
      "Conversion bottleneck report (top 5 friction points, evidence-backed)",
      "Prioritized roadmap (quick wins, medium, rebuild scope)",
    ],
    excluded: ["Implementation of changes", "Copywriting", "New design", "A/B testing", "Paid media analysis"],
    attach: {
      note: "Natural next step",
      options: [
        { code: "OPT-01", name: "Quick-win implementation" },
        { code: "BLD-02", name: "Rebuild" },
        { code: "OPT-07", name: "A/B testing" },
      ],
    },
  },
  {
    id: "website-launch-llm-discoverability",
    number: 1,
    group: "web",
    name: "Website Launch + LLM Discoverability",
    code: "Web launch",
    price: {
      unresolved: true,
      // RW-PAGE-08C: reworded from "Starting price pending confirmation" so this
      // reads as a deliberate governance state (scope determines the figure)
      // rather than a broken/missing card, per the visual-refinement directive.
      // The underlying fact is unchanged: no number is published or invented.
      display: "Scope-priced",
      note: "This package's exact starting price is not yet published. It is confirmed once scope is set in Paid Discovery, not invented here.",
    },
    purpose:
      "A modern website launch with modern web architecture, search/LLM discoverability, measurement readiness and evidence-backed delivery.",
    excluded: [
      "Third-party hosting, CMS, email, analytics, chat or font fees",
      "E-commerce build",
      "Custom illustrations or photography",
      "Copywriting beyond light edits to client-supplied copy",
      "Ongoing SEO management",
    ],
    attach: {
      note: "Natural managed attach",
      options: [{ code: "MGT-03", name: "Managed Website Care" }],
    },
    unresolvedFields: ["Exact starting price"],
  },
  {
    id: "ai-readiness-sprint",
    number: 2,
    group: "ai",
    name: "AI Readiness Sprint",
    code: "AI-10",
    price: { unresolved: false, from: 2500, display: "From $2,500" },
    purpose: "Scope and prioritize where applied AI is actually worth building.",
    timeline: "1-2 weeks",
    evidence: "E1/E2",
    included: [
      "Use-case inventory workshop",
      "AI readiness scorecard across data, team, governance and infrastructure",
      "3-5 prioritized use-case candidates",
      "Effort/impact ratings",
      "Vendor/platform recommendation brief",
      "Written readout and next-step recommendations",
    ],
    excluded: [
      "Production AI build",
      "Vendor procurement",
      "Data cleaning or migration",
      "Ongoing AI governance",
    ],
    attach: {
      note: "Natural next step",
      options: [
        { code: "AI-11", name: "Secure RAG + Knowledge Search" },
        { code: "AI-13", name: "Copilot Agent Adoption (Microsoft 365 path)" },
      ],
    },
    addOns: [
      { code: "AI-14", name: "AI Safety Evaluation Pack", price: "+$4,500" },
      { code: "AI-19", name: "AI BOM / Asset Inventory", price: "+$5,500" },
    ],
  },
  {
    id: "secure-rag-knowledge-search",
    number: 3,
    group: "ai",
    name: "Secure RAG + Knowledge Search",
    code: "AI-11 + AI-14",
    price: { unresolved: false, from: 8500, display: "From $8,500" },
    purpose: "Retrieval and knowledge search with access boundaries, guardrails and an evaluation suite.",
    timeline: "4-8 weeks",
    evidence: "E3",
    included: [
      "Source inventory",
      "Access-boundary design",
      "Chunking/indexing strategy",
      "Vector or hybrid search setup",
      "AWS Bedrock Knowledge Base or Azure AI Search, where appropriate",
      "Retrieval evaluation test suite",
      "Prompt-injection guardrail configuration",
      "Citation/source display design",
      "Admin runbook and operator guide",
      "Evidence Pack",
    ],
    tierGuidance: [
      { name: "Lite", price: "$8,500", detail: [] },
      { name: "Standard", price: "$12,500-$18,000", detail: [] },
      { name: "Advanced", price: "$20,000+", detail: [] },
    ],
    excluded: [
      "LLM/API consumption costs",
      "Model fine-tuning",
      "Separate UI/frontend build unless scoped",
      "Ongoing eval monitoring",
    ],
    attach: {
      note: "Default attach",
      options: [{ code: "MGT-16", name: "AI Ops + Eval Retainer" }],
    },
    addOns: [
      { code: "AI-18", name: "AI Red Teaming + Guardrails", price: "+$6,500" },
      { code: "CLD-AI-01", name: "AI-Ready Cloud Foundation (if infrastructure is not ready)", price: "" },
    ],
  },
  {
    id: "m365-copilot-readiness-adoption",
    number: 4,
    group: "ai",
    name: "Microsoft 365 Copilot Readiness + Adoption",
    code: "M365-01 + GOV-15",
    price: { unresolved: false, from: 5500, display: "From $5,500" },
    purpose: "Copilot readiness, governance and adoption across Microsoft 365.",
    timeline: "3-5 weeks",
    evidence: "E2/E3",
    included: [
      "Microsoft 365 Copilot readiness review",
      "Permission/data-boundary review",
      "Governance readiness",
      "Adoption planning",
      "Knowledge/data readiness",
      "Appropriate integration",
      "Written recommendations and evidence",
    ],
    excluded: [
      "Microsoft 365 licensing",
      "Copilot licensing procurement",
      "Broad data migration",
      "SharePoint restructuring beyond agreed cleanup",
      "Ongoing governance monitoring",
    ],
    attach: {
      note: "Default attach",
      options: [
        { code: "MGT-16", name: "AI Ops + Eval Retainer" },
        { code: "GOV-15", name: "Consent + Privacy Ops (by SOW)" },
      ],
    },
    addOns: [
      { code: "PWR-01", name: "Power Platform Governance", price: "+$6,500" },
      { code: "DEV-01", name: "GitHub Copilot DevEx Enablement", price: "+$7,500" },
      { code: "AI-18", name: "AI Red Teaming (for M365 Copilot)", price: "+$6,500" },
    ],
  },
  {
    id: "aws-wafr-review",
    number: 5,
    group: "cloud-data",
    name: "AWS Well-Architected Framework Review",
    code: "OP-18",
    price: { unresolved: false, from: 6500, display: "From $6,500" },
    purpose: "A structured six-pillar review producing a prioritized remediation roadmap.",
    timeline: "2-3 weeks",
    evidence: "E2",
    included: [
      "Six-pillar review: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
      "AWS-standard WAFR report",
      "Prioritized findings (Critical / High / Medium / Low)",
      "Remediation roadmap",
      "Effort/impact matrix",
      "30/60/90-day action plan",
      "Evidence Pack index",
      "Readout session",
    ],
    tierGuidance: [
      { name: "Lite", price: "$6,500", detail: ["1 workload", "Rapid scorecard/backlog", "1 workshop"] },
      { name: "Standard", price: "$9,500", detail: ["1-2 workloads", "Deeper evidence", "2 workshops"] },
      { name: "Advanced", price: "$12,000+", detail: ["Multi-account", "Regulated", "E3 evidence", "Landing-zone context"] },
    ],
    excluded: [
      "AWS consumption costs",
      "Penetration testing",
      "Compliance certification (SOC 2 / HIPAA / PCI)",
      "Implementation of remediation items",
    ],
    attach: {
      note: "Default attach",
      options: [
        { code: "OP-10", name: "Cloud Foundation Sprint" },
        { code: "MGT-21", name: "Monthly Cloud Care" },
      ],
    },
    addOns: [
      { code: "CLD-SEC-02", name: "CSPM Baseline", price: "+$3,500" },
      { code: "CLD-OBS-02", name: "Observability Modernization", price: "+$5,500" },
      { code: "CLD-FIN-04", name: "AI Cost Governance + TokenOps", price: "+$3,500" },
    ],
  },
  {
    id: "ai-ready-cloud-foundation",
    number: 6,
    group: "cloud-data",
    name: "AI-Ready Cloud Foundation",
    code: "CLD-AI-01 + CLD-SEC-02",
    price: { unresolved: false, from: 8500, display: "From $8,500" },
    purpose: "Identity, network, secrets and observability baselines prepared for AI workloads.",
    timeline: "4-8 weeks",
    evidence: "E3",
    included: [
      "Identity/RBAC configuration (AWS IAM/SCP or Azure Entra ID + PIM)",
      "Audit/logging baseline (CloudTrail or Azure Monitor/Sentinel)",
      "Network boundary design (VPC/VNet, private endpoints)",
      "Secrets management (Secrets Manager or Key Vault)",
      "Data-path controls",
      "Observability baseline (CloudWatch or Azure Monitor)",
      "Cost guardrails (Budgets/Cost Explorer/Azure Cost Management)",
      "AI workload-zone preparation",
      "Evidence Pack and access registry",
    ],
    tierGuidance: [
      { name: "Essential", price: "$8,500", detail: [] },
      { name: "Standard", price: "$13,000-$18,000", detail: [] },
      { name: "Advanced", price: "$20,000+", detail: [] },
    ],
    excluded: [
      "Cloud consumption",
      "Full landing-zone build",
      "Application migration",
      "24/7 cloud operations",
    ],
    attach: {
      note: "Default attach",
      options: [{ code: "MGT-21", name: "Monthly Cloud Care" }],
    },
    addOns: [
      { code: "CLD-LZ-02", name: "Landing Zone Lite", price: "+$6,500" },
      { code: "CLD-RES-01", name: "Resilience + DR Validation", price: "+$4,500" },
      { code: "CLD-FIN-04", name: "FinOps + TokenOps", price: "+$3,500" },
      { code: "SEC-10", name: "DevSecOps + Cloud App Security", price: "From $8,500" },
    ],
  },
  {
    id: "cloud-security-resilience-baseline",
    number: 7,
    group: "cloud-data",
    name: "Cloud Security + Resilience Baseline",
    code: "CLD-SEC-02 + CLD-RES-01 + CLD-DR-01",
    price: { unresolved: false, from: 7500, display: "From $7,500" },
    purpose: "A security-posture baseline plus a real backup/restore/DR validation drill.",
    timeline: "3-6 weeks",
    evidence: "E2/E3",
    included: [
      "Cloud security-posture baseline (AWS Security Hub or Azure Defender for Cloud)",
      "GuardDuty or Azure Sentinel",
      "WAF/perimeter-controls review",
      "Backup validation and restore drill",
      "DR runbook",
      "Priority remediation backlog (top 10 findings)",
      "Resilience scorecard",
      "Evidence Pack",
    ],
    excluded: [
      "Cloud consumption",
      "Penetration testing",
      "SOC 2 / ISO 27001 certification",
      "Full SOC operation",
      "24/7 alert monitoring",
    ],
    attach: {
      note: "Default attach",
      options: [
        { code: "MGT-05", name: "Reliability Care Plan" },
        { code: "MGT-14", name: "Security Monitoring + Alert Triage Retainer" },
      ],
    },
    addOns: [
      { code: "SEC-10", name: "DevSecOps + Cloud App Security", price: "+$8,500" },
      { code: "CLD-OBS-02", name: "Observability Modernization", price: "+$5,500" },
      { code: "MGT-06", name: "Backup/DR Managed Service", price: "$499-$4,500/mo" },
    ],
  },
  {
    id: "ai-red-teaming-guardrails-validation",
    number: 8,
    group: "ai",
    name: "AI Red Teaming + Guardrails Validation",
    code: "AI-18 + AI-14",
    price: { unresolved: false, from: 6500, display: "From $6,500" },
    purpose: "Adversarial testing of guardrails, jailbreak resistance and data-leakage boundaries.",
    timeline: "2-4 weeks",
    evidence: "E3",
    included: [
      "20+ prompt-injection attack patterns",
      "Jailbreak testing",
      "Role-play bypass testing",
      "Data-leakage/boundary tests",
      "Refusal-behavior validation",
      "Risky tool-action testing",
      "Guardrail configuration (Amazon Bedrock Guardrails or Azure AI Content Safety, where appropriate)",
      "Regression baseline",
      "Operational kill-switch documentation",
      "Red-team report and remediation recommendations",
      "Evidence Pack",
    ],
    excluded: [
      "LLM API usage/consumption costs",
      "Full penetration test",
      "Ongoing eval monitoring",
      "Model fine-tuning",
    ],
    attach: {
      note: "Default attach",
      options: [{ code: "MGT-16", name: "AI Ops + Eval Retainer" }],
    },
    addOns: [
      { code: "AI-14", name: "AI Safety Evaluation Pack", price: "+$4,500" },
      { code: "AI-17", name: "Responsible AI Governance Framework", price: "+$5,500" },
    ],
  },
  {
    id: "microsoft-fabric-analytics-quickstart",
    number: 9,
    group: "cloud-data",
    name: "Microsoft Fabric / Analytics Quickstart",
    code: "CLD-DATA-03 + CLD-BI-01",
    price: { unresolved: false, from: 9500, display: "From $9,500" },
    purpose: "A working lakehouse/warehouse, semantic models and executive dashboards.",
    timeline: "4-8 weeks",
    evidence: "E3",
    included: [
      "Data-source inventory and connection plan",
      "Fabric workspace setup and governance configuration",
      "Lakehouse or warehouse design",
      "Up to 3 semantic models",
      "Up to 5 Power BI dashboards",
      "Refresh schedule",
      "Data-lineage documentation",
      "Executive dashboard starter",
      "Evidence Pack and runbook",
    ],
    tierGuidance: [
      { name: "Quickstart", price: "$9,500", detail: [] },
      { name: "Standard", price: "$18,000-$35,000", detail: [] },
      { name: "Advanced", price: "$40,000+", detail: [] },
    ],
    excluded: [
      "Microsoft Fabric licensing",
      "Legacy-system data migration",
      "ML-model build",
      "Ongoing pipeline operations",
    ],
    attach: {
      note: "Default attach",
      options: [{ code: "MGT-17", name: "DataOps + Pipeline Reliability Retainer" }],
    },
    addOns: [
      { code: "CLD-DATA-01", name: "Data Platform Architecture", price: "+$6,500" },
      { code: "CLD-AI-02", name: "AI/ML Platform Setup", price: "+$8,500" },
    ],
  },
  {
    id: "cloud-foundation-sprint",
    number: 10,
    group: "cloud-data",
    name: "Cloud Foundation Sprint",
    code: "OP-10 / CLD-FND-01",
    price: { unresolved: false, from: 6500, display: "From $6,500" },
    purpose:
      "A bounded cloud-foundation/remediation implementation engagement. Commonly follows a WAFR review and turns prioritized findings into a healthier operating baseline.",
    unresolvedFields: [
      "Timeline",
      "Evidence tier",
      "Detailed inclusions",
      "Detailed exclusions",
      "Tier structure",
      "Optional add-ons",
    ],
    unresolvedNote:
      "Published scope: starting price and purpose only. Full inclusions, exclusions, timeline and evidence tier are confirmed in Paid Discovery.",
  },
];

export const managedServices: ManagedService[] = [
  {
    code: "MGT-03",
    name: "Managed Website Care",
    summary: "Ongoing review, monitoring, backup verification and a small monthly change budget.",
    tiers: [
      { name: "Bronze", price: "$249/mo" },
      { name: "Silver", price: "$599/mo" },
      { name: "Gold", price: "$1,799/mo" },
    ],
    recurringThemes: [
      "Next.js/Sanity/runtime review",
      "Dependency and integration updates",
      "Monitoring",
      "Backup verification",
      "Minor-change budget",
      "Monthly reporting",
    ],
    exclusions: [
      "New page builds",
      "New integrations",
      "Design changes beyond minor edits",
      "Third-party license fees",
    ],
    evidence: "E2",
    supportByTier: [
      { tier: "Bronze", support: "Business-hours support. Monitoring: uptime. Backup verification: quarterly restore drill. Minor changes: 1 hour/mo." },
      { tier: "Silver", support: "Business-hours support. Monitoring: uptime + performance. Backup verification: quarterly restore drill. Minor changes: 2 hours/mo." },
      { tier: "Gold", support: "Business-hours support, upgradeable to MGT-05 for SLA-backed support. Monitoring: uptime + performance + security alerts. Backup verification: monthly restore drill. Minor changes: 4 hours/mo." },
    ],
    note: "No uptime guarantee at any tier without a separate SLA-backed upgrade.",
  },
  {
    code: "MGT-21",
    name: "Monthly Cloud Care",
    summary: "AWS and Azure operations: cost review, security posture, backup verification and a reliability backlog.",
    tiers: [
      { name: "Essential", price: "$1,500/mo" },
      { name: "Assurance", price: "$3,500/mo" },
      { name: "Ops+", price: "$6,500+/mo" },
    ],
    recurringThemes: [
      "Monthly operations report",
      "Cost review",
      "Security posture",
      "Backup verification",
      "Change window",
      "Reliability backlog",
    ],
    exclusions: [
      "Cloud consumption",
      "Vendor support contracts",
      "Uptime guarantees beyond agreed design",
      "Net-new architecture requiring a project SOW",
    ],
    evidenceByTier: [
      { tier: "Essential", evidence: "E2" },
      { tier: "Assurance", evidence: "E2/E3" },
      { tier: "Ops+", evidence: "E3" },
    ],
    supportByTier: [
      { tier: "Essential", support: "T1, business hours" },
      { tier: "Assurance", support: "T2, 4-8 hour response" },
      { tier: "Ops+", support: "T3, 2-4 hour response" },
    ],
  },
  {
    code: "MGT-16",
    name: "AI Ops + Eval Retainer",
    summary: "Bounded ongoing AI operations: evaluation runs, guardrail issues, knowledge refresh and regression checks.",
    tiers: [
      { name: "Lite", price: "$2,500-$4,500/mo" },
      { name: "Standard", price: "$5,000-$8,500/mo" },
      { name: "Advanced", price: "$9,000-$15,000/mo" },
    ],
    recurringThemes: [
      "Evaluation runs",
      "Prompt and knowledge-base changes",
      "Hallucination and refusal checks",
      "Feedback trends",
      "Guardrail issues",
      "Improvement backlog",
      "Knowledge refresh",
      "Operational tuning",
      "Regression checks",
    ],
    exclusions: ["Unlimited AI engineering (scope is bounded per tier, not open-ended)"],
  },
];

export const managedServiceTermNote =
  "Term length, minimum commitment and cancellation notice are defined by the applicable signed SOW or Care Plan.";

export const paidDiscovery = {
  price: "$249",
  priceDetail: "$249 fixed",
  duration: "60 minutes",
  purpose: [
    "Clarify scope",
    "Surface dependencies",
    "Identify deliverables",
    "Establish the actual next commercial step",
    "Reduce ambiguity before execution",
  ],
  creditNote:
    "The fee is not automatically credited toward later work. Credit applies only where specifically stated in the proposal or SOW.",
  cta: { label: "Book Paid Discovery", analyticsEvent: "book_discovery" },
};

export const pricingDisclaimer =
  "All prices are starting bands. Final scope and pricing confirmed in Paid Discovery. Cloud consumption, licensing, and third-party fees are not included unless stated.";

export type PricingFaqItem = {
  id: string;
  question: string;
  answer: string;
  list?: string[];
};

export const pricingFaq: PricingFaqItem[] = [
  {
    id: "fixed-prices",
    question: "Are these fixed prices?",
    answer:
      "No. They are starting bands. Final scope and pricing are confirmed after Paid Discovery.",
  },
  {
    id: "discovery-cost",
    question: "What does Paid Discovery cost?",
    answer:
      "$249 fixed for a 60-minute session. The fee is not automatically credited toward future work; any credit exists only where explicitly stated in a proposal or SOW.",
  },
  {
    id: "whats-included",
    question: "What is included in the displayed price?",
    answer:
      "Only the defined package scope. Cloud consumption, licensing, third-party fees and anything explicitly excluded remain separate unless stated otherwise.",
  },
  {
    id: "what-increases-price",
    question: "What can increase the final price?",
    answer: "Typical scope drivers include:",
    list: [
      "Integrations",
      "Number of environments, accounts or subscriptions",
      "Compliance or retention complexity",
      "Custom logic",
      "Scale",
      "Accelerated timelines",
      "Regulated or sensitive data",
      "Additional regions",
      "Undocumented dependencies",
    ],
  },
  {
    id: "managed-terms",
    question: "Are managed services month-to-month?",
    answer: managedServiceTermNote,
  },
  {
    id: "start-smaller",
    question: "Can I start with a smaller engagement and expand later?",
    answer:
      "Yes. Rive uses a Land, Expand, Retain progression where appropriate. Expansion depends on the actual problem, evidence and priorities, not a fixed upsell path.",
  },
  {
    id: "third-party-fees",
    question: "Are cloud, software or third-party fees included?",
    answer:
      "No, unless specifically stated. Cloud consumption, software licensing and third-party costs remain separate by default.",
  },
];

export const pricingContent = {
  hero: {
    eyebrow: "Pricing",
    heading: "Price becomes clear when scope becomes visible.",
    summary:
      "Rive publishes starting bands, not a sales-call mystery. Every package states what it is for, what it includes, what it excludes and what happens next, so you can self-qualify before you ever talk to us.",
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "See how the work moves", href: "/company/process/" },
  },
  philosophy: {
    eyebrow: "How this page works",
    heading: "“From $X” is a starting band, not a quote.",
    description:
      "Every project package below lists a realistic starting price, an approximate timeline, an evidence tier where applicable, and what is and is not included. Final scope and price are confirmed in a Paid Discovery session, because integrations, compliance requirements, scale and undocumented dependencies all change what an engagement actually costs.",
  },
  packagesIntro: {
    eyebrow: "Project engagements",
    heading: "Eleven bounded starting points, grouped by the problem they solve.",
    description:
      "Each package is a real, scoped engagement, not a placeholder tier. Open a package for its full inclusions, exclusions and natural next step.",
  },
  managedIntro: {
    eyebrow: "Managed services",
    heading: "Projects change something. Managed services keep something healthy.",
    description:
      "Once a project delivers, these Care Plans and retainers keep the result monitored, maintained and evidenced over time. Term length, minimum commitment and cancellation notice are always defined by the applicable signed SOW or Care Plan, not a universal rule.",
  },
  discoveryIntro: {
    eyebrow: "Paid Discovery",
    heading: "The hinge between an unclear need and a priced next step.",
    description:
      "A 60-minute, $249 session that turns an ambiguous requirement into scope, dependencies, deliverables and the actual next commercial step.",
  },
  faqIntro: {
    eyebrow: "Pricing FAQ",
    heading: "The questions this page raises, answered directly.",
  },
  final: {
    heading: "Ready to find the right starting point?",
    body:
      "If you already know the engagement, book Paid Discovery directly. If you are still deciding where to begin, the guided route can help.",
    primary: { label: "Book Paid Discovery", href: "/connect/" },
    secondary: { label: "Find Your Solution", href: "/start/" },
  },
} as const;
