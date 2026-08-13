export const startIntentIds = ["build", "improve", "find", "connect", "unsure"] as const;

export type StartIntentId = (typeof startIntentIds)[number];

export type StartRefinement = {
  id: string;
  label: string;
};

export type StartIntent = {
  id: StartIntentId;
  label: string;
  description: string;
  prompt?: string;
  refinements: readonly StartRefinement[];
};

export type StartRecommendation = {
  title: string;
  direction: string;
  rationale: string;
  conversationPrompt: string;
};

export const startContent = {
  metadata: {
    title: "Find Your Solution",
    description:
      "Start with the change you need, the outcome you want or the problem in front of you. Rive will help you identify a practical direction.",
  },
  hero: {
    eyebrow: "Find your solution",
    heading: "Start with what needs to change.",
    description:
      "You do not need to arrive with the right service name. Choose the signal that feels closest and we will help frame a useful direction.",
  },
  finder: {
    heading: "What are you trying to change?",
    description: "Choose the closest fit. You can revise it at any time.",
    refinementHeading: "What matters most right now?",
    resultLabel: "A useful direction",
    emptyHeading: "Your direction will take shape here.",
    emptyBody: "One choice is enough to begin. This is guidance, not a diagnosis or a qualification score.",
    resetLabel: "Start again",
    cta: { label: "Continue the conversation", href: "/connect/" },
  },
  reassurance: {
    heading: "Bring the problem before the perfect brief.",
    body: "The recommendation is a starting point for discussion. Rive can test the assumptions with you before a scope is defined.",
  },
} as const;

export const startIntents: readonly StartIntent[] = [
  {
    id: "build",
    label: "Build something new",
    description: "A new website, digital product or technical foundation needs a clear starting point.",
    prompt: "What are you setting out to build?",
    refinements: [
      { id: "website", label: "A website or customer experience" },
      { id: "product", label: "A digital product or service" },
      { id: "foundation", label: "The platform behind the experience" },
    ],
  },
  {
    id: "improve",
    label: "Improve something existing",
    description: "What you have works in part, but it no longer supports the business well enough.",
    prompt: "Where is the pressure most visible?",
    refinements: [
      { id: "experience", label: "The customer experience feels weak or dated" },
      { id: "reliability", label: "The technology is hard to run or change" },
      { id: "clarity", label: "The offer is not communicated clearly" },
    ],
  },
  {
    id: "find",
    label: "Help more people find and choose us",
    description: "The business needs stronger visibility, clearer journeys or better-quality enquiries.",
    prompt: "Which outcome matters most?",
    refinements: [
      { id: "visibility", label: "Become easier to discover" },
      { id: "enquiries", label: "Generate more useful enquiries" },
      { id: "message", label: "Make the value easier to understand" },
    ],
  },
  {
    id: "connect",
    label: "Make our systems work better together",
    description: "Disconnected platforms, manual work or unclear data are slowing the organisation down.",
    prompt: "Where would a better connection help?",
    refinements: [
      { id: "cloud", label: "Cloud and platform foundations" },
      { id: "automation", label: "Repetitive work and handoffs" },
      { id: "intelligence", label: "Data, AI and decision support" },
    ],
  },
  {
    id: "unsure",
    label: "I am not sure yet",
    description: "Something is not working, but it is too early to name the solution.",
    refinements: [],
  },
] as const;

const recommendationMap: Record<StartIntentId, Record<string, StartRecommendation>> = {
  build: {
    website: {
      title: "Shape the experience and its foundation together.",
      direction: "Website and digital experience",
      rationale: "Begin by aligning audience needs, content, journeys and the technology that will keep the experience useful.",
      conversationPrompt: "Tell us what the new experience needs to make possible.",
    },
    product: {
      title: "Define the service before committing to the build.",
      direction: "Digital product direction",
      rationale: "Clarify the users, essential workflow and operating constraints before choosing features or platforms.",
      conversationPrompt: "Tell us who the product is for and what they need to accomplish.",
    },
    foundation: {
      title: "Start with an accountable technical foundation.",
      direction: "Cloud and platform architecture",
      rationale: "Map the required experience, integrations, governance and operational responsibilities as one system.",
      conversationPrompt: "Tell us what the platform needs to support now and later.",
    },
  },
  improve: {
    experience: {
      title: "Find the friction before redesigning the surface.",
      direction: "Experience review and focused redesign",
      rationale: "Identify where the current journey, content or interface has stopped serving visitors and the business.",
      conversationPrompt: "Tell us where the current experience feels weakest.",
    },
    reliability: {
      title: "Make the operating problem visible first.",
      direction: "Technical review and modernisation",
      rationale: "Examine the architecture, delivery workflow and ownership gaps before deciding what should be repaired or replaced.",
      conversationPrompt: "Tell us what has become difficult to maintain, change or trust.",
    },
    clarity: {
      title: "Clarify the proposition and the path through it.",
      direction: "Content and experience structure",
      rationale: "Connect what the business offers to the questions visitors bring, then shape the right journey around that understanding.",
      conversationPrompt: "Tell us what visitors struggle to understand or choose.",
    },
  },
  find: {
    visibility: {
      title: "Build discoverability into the experience.",
      direction: "Search and content direction",
      rationale: "Align useful content, technical foundations and clear journeys around the questions your audience is already asking.",
      conversationPrompt: "Tell us who needs to find you and what they are looking for.",
    },
    enquiries: {
      title: "Improve the journey from interest to conversation.",
      direction: "Conversion journey and web experience",
      rationale: "Find where confidence or clarity breaks down, then make the next useful action easier to take.",
      conversationPrompt: "Tell us what a useful enquiry looks like for your business.",
    },
    message: {
      title: "Make the value easier to recognise and act on.",
      direction: "Positioning, content and experience",
      rationale: "Turn internal expertise into a clear public story with routes that match how visitors think about their needs.",
      conversationPrompt: "Tell us what people often misunderstand about the business.",
    },
  },
  connect: {
    cloud: {
      title: "Treat the platform as an operating system, not a collection of tools.",
      direction: "Cloud and platform modernisation",
      rationale: "Clarify responsibilities, integration boundaries and governance before changing the underlying environment.",
      conversationPrompt: "Tell us where the current platform creates risk or friction.",
    },
    automation: {
      title: "Remove the handoffs that create avoidable work.",
      direction: "Workflow and automation direction",
      rationale: "Map the real process first, then identify where integration or automation can reduce repetition without hiding responsibility.",
      conversationPrompt: "Tell us which repeated task or handoff costs the most attention.",
    },
    intelligence: {
      title: "Begin with the decision, not the AI feature.",
      direction: "Data and governed AI direction",
      rationale: "Define the decision, evidence and safeguards required before selecting an automation or intelligence approach.",
      conversationPrompt: "Tell us which decision needs better information or support.",
    },
  },
  unsure: {
    default: {
      title: "Start by making the problem easier to see.",
      direction: "A short discovery conversation",
      rationale: "You do not need to classify the work yet. A useful first step is to describe what has changed, what feels constrained and what better would mean.",
      conversationPrompt: "Tell us what prompted you to look for a different direction.",
    },
  },
};

export function getStartIntent(id: string): StartIntent | undefined {
  return startIntents.find((intent) => intent.id === id);
}

export function getStartRecommendation(
  intentId: StartIntentId,
  refinementId?: string,
): StartRecommendation | null {
  const intent = getStartIntent(intentId);
  if (!intent) return null;
  if (intent.refinements.length === 0) return recommendationMap[intentId].default ?? null;
  if (!refinementId || !intent.refinements.some((item) => item.id === refinementId)) return null;
  return recommendationMap[intentId][refinementId] ?? null;
}

export function hasCompleteStartMapping(): boolean {
  return startIntents.every((intent) =>
    intent.refinements.length === 0
      ? Boolean(recommendationMap[intent.id].default)
      : intent.refinements.every((refinement) => Boolean(recommendationMap[intent.id][refinement.id])),
  );
}
