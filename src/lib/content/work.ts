import type { PlaceholderMeta } from "@/components/media/Placeholder";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { contactCta, footerNav } from "@/lib/nav";

export type WorkInclude = {
  id: string;
  title: string;
  descriptor: string;
  detail: string;
  visual: PlaceholderMeta;
};

const serviceLinks = footerNav.find((group) => group.heading === "Services")!.items;

export const workContent = {
  hero: {
    eyebrow: "Work",
    heading: "The work is the system, not just the screen.",
    summary:
      "Rive connects the experience people use with the cloud, intelligence and operational delivery behind it.",
    cta: contactCta,
    visual: {
      id: "RW-WORK-HERO-01",
      category: "workspace-photography",
      purpose: "A connected digital product taking shape in a real working environment",
      aspect: "5:4",
      composition: "Wide working surface with interface detail and architectural context",
      mood: "Focused, assured, editorial",
      replacement: "Original project, workspace or device composition",
      priority: "P0",
      motion: "reveal",
    } satisfies PlaceholderMeta,
  },
  includes: [
    {
      id: "experience",
      title: "Digital experience",
      descriptor: "Websites and applications",
      detail: homepageFallbackContent.hero.architectureFlow[0].description,
      visual: { id: "RW-WORK-INCLUDE-01", category: "product-mockup", purpose: "Digital experience and customer journey", aspect: "4:3", composition: "One substantial interface framed in context", mood: "Clear, useful, considered", replacement: "Approved product or website imagery", priority: "P2", motion: "none" },
    },
    {
      id: "cloud",
      title: "Cloud foundation",
      descriptor: "AWS and Microsoft",
      detail: homepageFallbackContent.hero.architectureFlow[1].description,
      visual: { id: "RW-WORK-INCLUDE-02", category: "architecture-diagram", purpose: "Cloud architecture and platform foundation", aspect: "4:3", composition: "Connected platform layers with a clear operating boundary", mood: "Precise, calm, architectural", replacement: "Approved architecture illustration", priority: "P2", motion: "none" },
    },
    {
      id: "microsoft",
      title: "Microsoft",
      descriptor: "Azure, identity and Microsoft 365",
      detail: "Microsoft systems considered as part of the operating environment, not as an isolated add-on.",
      visual: { id: "RW-WORK-INCLUDE-03", category: "device-render", purpose: "Microsoft platform delivery context", aspect: "4:3", composition: "Platform controls and connected application surface", mood: "Ordered, enterprise-ready", replacement: "Approved Microsoft environment imagery", priority: "P2", motion: "none" },
    },
    {
      id: "ai",
      title: "AI",
      descriptor: "Governed intelligence",
      detail: homepageFallbackContent.hero.architectureFlow[2].description,
      visual: { id: "RW-WORK-INCLUDE-04", category: "feature-illustration", purpose: "Governed AI with human review", aspect: "4:3", composition: "A bounded intelligence layer with visible review points", mood: "Controlled, intelligible", replacement: "Approved governed-AI illustration", priority: "P2", motion: "none" },
    },
    {
      id: "automation",
      title: "Automation",
      descriptor: "Connected workflows",
      detail: "Automation applied to understood workflows, with the boundaries and review points made explicit.",
      visual: { id: "RW-WORK-INCLUDE-05", category: "architecture-diagram", purpose: "Connected automation workflow", aspect: "4:3", composition: "A clear sequence with visible checkpoints", mood: "Methodical, efficient", replacement: "Approved workflow illustration", priority: "P2", motion: "none" },
    },
    {
      id: "operation",
      title: "Managed services",
      descriptor: "Operation after launch",
      detail: homepageFallbackContent.hero.architectureFlow[3].description,
      visual: { id: "RW-WORK-INCLUDE-06", category: "editorial-photography", purpose: "Ongoing operational stewardship", aspect: "4:3", composition: "A working review environment with visible continuity", mood: "Steady, accountable", replacement: "Original managed-service photography", priority: "P2", motion: "none" },
    },
  ] satisfies WorkInclude[],
  system: {
    heading: "What you see is only one layer.",
    description:
      "The visible experience may sit above architecture, cloud, identity, security, automation, deployment and documented operational decisions.",
    visual: { id: "RW-WORK-SYSTEM-01", category: "architecture-diagram", purpose: "The connected system beneath the visible experience", aspect: "16:9", composition: "Five horizontal layers moving from experience to governance", mood: "Immersive, rigorous, legible", replacement: "Commissioned system architecture illustration", priority: "P1", motion: "none" } satisfies PlaceholderMeta,
    layers: [
      { title: "Experience", detail: "The website or application people use." },
      { title: "Application", detail: "Content, integrations and product logic working together." },
      { title: "Intelligence and automation", detail: "Governed workflows with defined review points." },
      { title: "Cloud and infrastructure", detail: "The platform, identity and deployment foundation." },
      { title: "Governance, security and evidence", detail: "The decisions, controls and verification that make the system accountable." },
    ],
  },
  selected: {
    heading: "Selected work, prepared properly.",
    description:
      "Selected project stories are being prepared for publication. Until the underlying work and evidence are approved for public use, Rive will not turn private delivery into invented portfolio theatre.",
    visual: { id: "RW-WORK-SELECTED-01", category: "editorial-photography", purpose: "Future selected-work feature with project-scale visual weight", aspect: "16:10", composition: "A wide project image with room for future case-study context", mood: "Substantial, quiet, credible", replacement: "Approved project screenshot, photography or device composition", priority: "P0", motion: "reveal" } satisfies PlaceholderMeta,
  },
  artefacts: {
    heading: homepageFallbackContent.evidencePack.heading,
    description: homepageFallbackContent.evidencePack.description,
    items: [
      { title: "Architecture", meta: { id: "RW-WORK-ARTEFACT-ARCH-01", category: "architecture-diagram", purpose: "Architecture record and decision trail", aspect: "4:5", composition: "Tall system map with visible decision points", mood: "Precise, documentary", replacement: "Redacted approved architecture record", priority: "P1", motion: "reveal" } },
      { title: "Interface", meta: { id: "RW-WORK-ARTEFACT-UI-01", category: "product-mockup", purpose: "Interface and responsive design evidence", aspect: "4:3", composition: "Interface surface at a useful evaluation scale", mood: "Refined, functional", replacement: "Approved interface captures", priority: "P1", motion: "reveal" } },
      { title: "Quality evidence", meta: { id: "RW-WORK-ARTEFACT-EVIDENCE-01", category: "feature-illustration", purpose: "Testing and verification evidence", aspect: "4:3", composition: "Compact evidence record with clear status hierarchy", mood: "Measured, trustworthy", replacement: "Approved QA and accessibility evidence", priority: "P1", motion: "reveal" } },
      { title: "Automation", meta: { id: "RW-WORK-ARTEFACT-AUTO-01", category: "architecture-diagram", purpose: "Workflow automation record", aspect: "3:2", composition: "Wide workflow with human checkpoints", mood: "Ordered, transparent", replacement: "Approved automation workflow", priority: "P1", motion: "reveal" } },
      { title: "Handover", meta: { id: "RW-WORK-ARTEFACT-HANDOVER-01", category: "editorial-photography", purpose: "Launch and handover record", aspect: "2:1", composition: "Wide editorial document and working-session composition", mood: "Complete, calm", replacement: "Approved handover documentation imagery", priority: "P1", motion: "reveal" } },
    ] as { title: string; meta: PlaceholderMeta }[],
  },
  relationship: {
    heading: "One accountable team.",
    description: "A connected engagement moves from a clear boundary to a built system, verified evidence and an explicit operating relationship where included.",
    stages: homepageFallbackContent.process.stages.filter((stage) => ["Discover", "Build", "Prove", "Support"].includes(stage.title)).map((stage, index) => ({ ...stage, title: ["Scope", "Build", "Verify", "Operate"][index] })),
  },
  faq: [
    { question: "What kinds of projects does Rive take on?", answer: "Rive works across digital experience, cloud, Microsoft, AI, automation and managed services. The starting point depends on the problem and the systems already in place." },
    { question: "Can Rive work with an existing website or cloud environment?", answer: "Yes. An engagement can begin with the system you already run, assess its constraints and define what should be retained, modernised or replaced." },
    { question: "Do you only build new systems?", answer: "No. Work may involve a new build, a focused modernisation, an architecture review or an ongoing operating need." },
    { question: "Can Rive handle both the website and the cloud behind it?", answer: "Where the engagement requires both, Rive can consider the visible experience and its cloud foundation as one connected scope." },
    { question: "Can you work with our existing internal team?", answer: "Yes. Responsibility, decision owners and handoff points are made explicit so the work can connect cleanly with an internal team." },
    { question: "What happens after launch?", answer: "The handover records what shipped and what remains. Ongoing operation or support is defined separately where it forms part of the engagement." },
    { question: "How does an engagement begin?", answer: "It begins by clarifying the problem, current state and intended outcome before defining the boundary of the work." },
  ],
  final: {
    heading: "Have something that needs building, modernising or connecting?",
    cta: contactCta,
  },
  serviceLinks,
};
