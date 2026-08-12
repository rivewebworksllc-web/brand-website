import type { PlaceholderMeta } from "@/components/media/Placeholder";
import type { EditorialResource, GuideCategory } from "@/lib/content/resources";
import { contactCta } from "@/lib/nav";

const guide = (value: Omit<EditorialResource, "status">): EditorialResource => ({ ...value, status: "editorial-review" });

export const guidesContent = {
  hero: {
    eyebrow: "Guides",
    heading: "Practical thinking for systems that have to work in the real world.",
    description: "Guidance across websites, cloud, Microsoft, AI, automation and the systems connecting them.",
    media: { id: "RW-GUIDES-HERO-01", category: "architecture-diagram", purpose: "Rive disciplines feeding one connected knowledge system", aspect: "5:4", composition: "A restrained editorial system map with multiple inputs and one clear operating frame", mood: "Intelligent, quiet, connected", replacement: "Commissioned knowledge-system illustration", priority: "P0", motion: "none" } satisfies PlaceholderMeta,
  },
  featured: guide({
    id: "website-rebuild-decision",
    category: "web",
    featured: true,
    title: "How to know when your website needs a rebuild",
    excerpt: "The signals that separate a focused improvement from a full rebuild, and the questions that should be answered before either begins.",
    media: { id: "RW-GUIDES-FEATURED-01", category: "editorial-photography", purpose: "Featured guide cover about deciding when a website needs rebuilding", aspect: "3:2", composition: "A broad editorial field with one structured decision path", mood: "Decisive, useful, composed", replacement: "Approved featured-guide artwork", priority: "P0", motion: "none" },
  }),
  library: [
    guide({ id: "web-rebuild", category: "web", title: "When a website problem is really a system problem", excerpt: "How content, architecture, performance and ownership combine to shape what visitors experience." }),
    guide({ id: "cloud-foundation", category: "cloud", title: "Choosing a cloud foundation around what you operate", excerpt: "A practical way to compare platform fit, operating constraints and the work required after migration." }),
    guide({ id: "microsoft-readiness", category: "microsoft", title: "What Microsoft readiness should examine first", excerpt: "Identity, access, integration and operational questions to resolve before a wider platform change." }),
    guide({ id: "governed-ai", category: "ai", title: "What governed AI looks like in practice", excerpt: "The boundaries, evaluation and human review needed before an AI system becomes consequential." }),
    guide({ id: "automation-boundaries", category: "automation", title: "Automate the understood process first", excerpt: "Why useful automation begins with a clear workflow, named decisions and visible exception handling." }),
    guide({ id: "evidence-before-launch", category: "security-governance", title: "What to verify before a system goes live", excerpt: "A decision-oriented view of security, accessibility, deployment readiness and evidence." }),
  ] satisfies EditorialResource[],
  editorialFramework: {
    eyebrow: "From the field",
    heading: "Useful guidance should help you make a decision.",
    description: "Rive publishes to clarify the problem, expose the trade-offs and make the next responsible step easier to see.",
    steps: ["Understand the problem", "Separate signal from noise", "Make the trade-offs visible", "Choose the appropriate system", "Know what to verify"],
  },
  disciplines: [
    { id: "web", title: "Web", description: "Websites that remain usable, maintainable and fast." },
    { id: "cloud", title: "Cloud", description: "Infrastructure designed around the system you actually operate." },
    { id: "microsoft", title: "Microsoft", description: "Practical guidance across Microsoft’s business ecosystem." },
    { id: "ai", title: "AI", description: "Governed adoption, system design and evaluation." },
    { id: "automation", title: "Automation", description: "Connected workflows with clear boundaries and review points." },
    { id: "security-governance", title: "Security & Governance", description: "Security, evidence and readiness for responsible operation." },
  ] satisfies { id: GuideCategory; title: string; description: string }[],
  final: {
    heading: "Reading about the problem is sometimes enough. Sometimes it needs fixing.",
    description: "When the next step needs hands-on work, Rive can help define the problem and connect the system around it.",
    cta: contactCta,
  },
};
