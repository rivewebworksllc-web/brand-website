import type { PlaceholderMeta } from "@/components/media/Placeholder";
import { footerNav } from "@/lib/nav";

export type AboutDiscipline = {
  id: string;
  title: string;
  descriptor: string;
  detail: string;
};

const companyLinks = footerNav.find((group) => group.heading === "Company")!.items;

export const aboutContent = {
  hero: {
    eyebrow: "ABOUT",
    heading: "Digital work is rarely just one discipline.",
    description:
      "Rive connects experience, infrastructure, intelligence and operation as one accountable system.",
    media: {
      id: "RW-ABOUT-HERO-01",
      category: "editorial-photography",
      purpose: "Introduce Rive through a human working context",
      aspect: "5:4",
      composition: "A real working environment with people in context, not a staged office portrait",
      mood: "Calm, observant, capable",
      replacement: "Approved Rive workplace or working-session photography",
      priority: "P0",
      motion: "none",
    } satisfies PlaceholderMeta,
  },
  definition: {
    heading: "One team across connected disciplines.",
    description:
      "A digital problem rarely respects organisational boundaries. The experience people use can depend on cloud foundations, identity, business systems, automation and what happens after launch.",
    disciplines: [
      { id: "experience", title: "Experience", descriptor: "Websites and applications", detail: "The visible layer should be considered with the systems, content and operating decisions that keep it useful." },
      { id: "cloud", title: "Cloud", descriptor: "Foundations and architecture", detail: "Infrastructure choices shape performance, resilience, access and the practical limits of what can be delivered." },
      { id: "microsoft", title: "Microsoft", descriptor: "Business systems and identity", detail: "Microsoft environments connect people, access and everyday operational systems; they cannot be treated as a separate afterthought." },
      { id: "ai", title: "AI", descriptor: "Intelligence with boundaries", detail: "Useful AI begins with approved data, an understood task, evaluation and a human decision where consequences matter." },
      { id: "automation", title: "Automation", descriptor: "Connected workflows", detail: "Automation creates value when the underlying process is understood and responsibility remains visible." },
      { id: "operate", title: "Operate", descriptor: "Support after launch", detail: "What ships still needs ownership, evidence and a practical path for support and improvement." },
    ] satisfies AboutDiscipline[],
    media: {
      id: "RW-ABOUT-SYSTEM-01",
      category: "architecture-diagram",
      purpose: "Show connected disciplines as one organisational delivery model",
      aspect: "4:3",
      composition: "Six disciplines converging around one accountable centre",
      mood: "Coherent, precise, quietly technical",
      replacement: "Commissioned connected-disciplines illustration",
      priority: "P1",
      motion: "none",
    } satisfies PlaceholderMeta,
  },
  boundaries: {
    heading: "The boundaries are artificial. The consequences are not.",
    description:
      "A decision in one layer changes what becomes possible elsewhere. Rive works across those seams so responsibility does not disappear between specialists.",
    layers: [
      { title: "Visible experience", detail: "What customers and teams use." },
      { title: "Application and business systems", detail: "Where content, identity and workflows meet." },
      { title: "Cloud and platform", detail: "The foundation carrying access, performance and operation." },
      { title: "Intelligence and automation", detail: "Bounded tools acting inside understood workflows." },
      { title: "Operation and evidence", detail: "What keeps decisions visible after launch." },
    ],
  },
  principles: [
    { title: "One accountable team", detail: "Responsibility stays visible across the connected system rather than stopping at a vendor boundary." },
    { title: "Evidence over assumption", detail: "Important decisions, tests and handoffs should leave a record that can be examined." },
    { title: "Systems over isolated deliverables", detail: "The delivered interface matters, and so do the dependencies that make it reliable and maintainable." },
    { title: "Useful technology over novelty", detail: "A tool earns its place by improving the decision, workflow or operating outcome around it." },
  ],
  responsibility: {
    heading: "Capability without accountability is not enough.",
    description:
      "Responsibility continues through decisions, architecture, accessibility, verification, documentation and handover—not only design, code and launch.",
    items: ["Decisions stay visible", "Boundaries are documented", "Quality is verified", "Handover is usable"],
  },
  human: {
    heading: "Systems are built for people. And by people.",
    description:
      "Rive's work is technical, but the relationship is human: people need to understand the decision, know who owns it and be able to operate what remains.",
    note: "Team profiles are not published yet. This space is reserved for approved working-session imagery rather than invented biographies or placeholder roles.",
    media: {
      id: "RW-ABOUT-HUMAN-01",
      category: "workspace-photography",
      purpose: "Show the human working relationship behind connected delivery",
      aspect: "3:2",
      composition: "An unposed working session with decisions and collaboration visible",
      mood: "Grounded, direct, approachable",
      replacement: "Approved Rive team or working-session photography",
      priority: "P0",
      motion: "none",
    } satisfies PlaceholderMeta,
  },
  relationship: {
    heading: "What working with Rive should make clearer.",
    description:
      "The detailed delivery process changes with the engagement. The relationship should still make responsibility, decisions and the next step easier to see.",
    expectations: [
      { title: "A defined boundary", detail: "The scope and decision owners are written down." },
      { title: "Connected thinking", detail: "Relevant disciplines are considered together, not handed across opaque seams." },
      { title: "Visible evidence", detail: "Testing, decisions and known limitations remain inspectable." },
      { title: "A practical handover", detail: "What shipped, what remains and who owns the next action are clear." },
    ],
  },
  evidence: {
    heading: "The work should leave a record.",
    description:
      "Evidence is not an extra document added at the end. It is how responsibility remains understandable while the work moves from scope to operation.",
    items: ["Scope", "Decisions", "Architecture", "Testing", "Accessibility", "Handover"],
  },
  paths: companyLinks.filter((link) => link.label !== "About" && link.label !== "Work"),
  final: {
    heading: "If the way we think fits the way you want to work, let's talk.",
    cta: { label: "Contact Us", href: "/connect/" },
  },
} as const;
