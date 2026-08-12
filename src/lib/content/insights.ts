import type { PlaceholderMeta } from "@/components/media/Placeholder";
import type { EditorialResource, GuideCategory } from "@/lib/content/resources";
import { contactCta } from "@/lib/nav";

export type InsightResource = EditorialResource & {
  type: "insight";
  perspective: string;
};

const insight = (value: Omit<InsightResource, "status" | "type">): InsightResource => ({
  ...value,
  type: "insight",
  status: "editorial-review",
});

export const insightsContent = {
  masthead: {
    eyebrow: "Insights",
    heading: "Perspective on the systems shaping digital work.",
    description: "Analysis across web, cloud, AI, automation and the decisions connecting them.",
    themes: ["Web", "Cloud", "Microsoft", "AI", "Automation", "Security & Governance"],
  },
  lead: insight({
    id: "systems-projects",
    category: "web",
    featured: true,
    title: "Why website decisions increasingly become systems decisions",
    excerpt: "A website can expose deeper questions about ownership, infrastructure, content, identity and the way change reaches production.",
    perspective: "The visible problem may begin at the interface. The consequential decision often sits behind it.",
    media: {
      id: "RW-INSIGHTS-LEAD-01",
      category: "editorial-photography",
      purpose: "Lead insight about the relationship between visible interfaces and operating systems",
      aspect: "16:10",
      composition: "A broad editorial field moving from one visible surface into several connected system layers",
      mood: "Observant, composed, consequential",
      replacement: "Commissioned lead-insight editorial illustration",
      priority: "P0",
      motion: "none",
    } satisfies PlaceholderMeta,
  }),
  latest: [
    insight({ id: "governed-ai-change", category: "ai", title: "What governed AI changes inside an organisation", excerpt: "The important shift is not access to a model. It is how decisions, review and accountability are designed around its use.", perspective: "Governance becomes part of system design rather than a policy added later." }),
    insight({ id: "cloud-operating-reality", category: "cloud", title: "Cloud choices should follow operating reality", excerpt: "Platform decisions become more useful when they begin with workload, ownership and support constraints.", perspective: "Architecture has to account for the organisation that will operate it." }),
    insight({ id: "automation-fragility", category: "automation", title: "Where automation creates leverage and fragility", excerpt: "Removing repetitive work can also hide assumptions, exceptions and dependencies that still need an owner.", perspective: "The strongest automation keeps boundaries and failure states visible." }),
    insight({ id: "microsoft-boundaries", category: "microsoft", title: "Microsoft integration is an operating question", excerpt: "Identity, access and business workflows often matter more than selecting one isolated product.", perspective: "The value sits in the relationship between tools and the work around them." }),
    insight({ id: "evidence-readiness", category: "security-governance", title: "Evidence changes the quality of a launch decision", excerpt: "Verification records make readiness easier to examine, challenge and hand over responsibly.", perspective: "Confidence improves when important decisions leave a usable record." }),
  ] satisfies InsightResource[],
  lens: {
    heading: "A change is useful when its consequence becomes clear.",
    description: "Rive examines change through the decision it affects, not the attention it receives.",
    stages: [
      { title: "Signal", question: "What changed?", detail: "Identify the material change without treating every announcement as equally important." },
      { title: "Context", question: "Where does it matter?", detail: "Place the change inside the systems, people and constraints that give it consequence." },
      { title: "Trade-off", question: "What becomes easier or harder?", detail: "Examine the benefit alongside the new dependency, responsibility or failure mode." },
      { title: "Implication", question: "What decision should be reconsidered?", detail: "Translate analysis into the choice, boundary or operating assumption that may need to move." },
      { title: "Action", question: "What is worth doing next?", detail: "Choose the smallest responsible next step that can produce useful evidence." },
    ],
  },
  signal: {
    heading: "Not every announcement changes the system.",
    description: "The useful question is not only what is new. It is whether the change alters a boundary, responsibility or decision.",
    media: {
      id: "RW-INSIGHTS-ANALYSIS-01",
      category: "architecture-diagram",
      purpose: "Conceptual comparison between surface novelty and decision relevance",
      aspect: "4:3",
      composition: "Many light inputs narrowing into a small number of consequential system changes",
      mood: "Discerning, quiet, analytical",
      replacement: "Commissioned signal-versus-noise editorial diagram",
      priority: "P1",
      motion: "none",
    } satisfies PlaceholderMeta,
    comparisons: [
      { surface: "A new capability appears", consequence: "A system boundary changes" },
      { surface: "A tool becomes easier to access", consequence: "Accountability moves" },
      { surface: "A workflow becomes faster", consequence: "A new dependency appears" },
    ],
  },
  archive: {
    heading: "Browse all insights",
    description: "A deliberately limited collection while editorial analysis remains under review.",
  },
  final: {
    heading: "Thinking through a decision inside your own system?",
    description: "When the question moves from theory to implementation, Rive can examine it in context.",
    cta: contactCta,
  },
} as const satisfies {
  masthead: { eyebrow: string; heading: string; description: string; themes: readonly string[] };
  lead: InsightResource;
  latest: readonly InsightResource[];
  lens: { heading: string; description: string; stages: readonly { title: string; question: string; detail: string }[] };
  signal: { heading: string; description: string; media: PlaceholderMeta; comparisons: readonly { surface: string; consequence: string }[] };
  archive: { heading: string; description: string };
  final: { heading: string; description: string; cta: { label: string; href: string } };
};

export const insightCategories = Array.from(new Set(insightsContent.latest.map((item) => item.category))) as GuideCategory[];
