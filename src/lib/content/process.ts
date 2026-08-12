import { contactCta } from "@/lib/nav";

export type ProcessPhase = {
  id: string;
  title: string;
  intent: string;
  description: string;
  activities: string[];
  returnNote?: string;
};

export const processContent = {
  hero: {
    eyebrow: "Process",
    heading: "The build is only one part of the work.",
    summary:
      "Rive carries decisions from first questions through delivery, verification and what happens next.",
    cta: contactCta,
  },
  model: {
    heading: "A clear direction, with room to learn.",
    description:
      "The work moves forward, but it does not pretend to be a perfect waterfall. What we learn in architecture, testing and operation can change an earlier decision.",
    phases: [
      {
        id: "understand",
        title: "Understand",
        intent: "Find the real problem",
        description:
          "We clarify the organisation, users, current environment, constraints and intended outcome before prescribing a solution.",
        activities: ["Business context", "Users and journeys", "Current systems", "Constraints and risks", "Desired outcomes"],
      },
      {
        id: "define",
        title: "Define",
        intent: "Turn ambiguity into decisions",
        description:
          "Priorities, requirements, scope and success measures become clear enough to guide the work and expose what remains undecided.",
        activities: ["Priorities", "Requirements", "Scope boundary", "Success measures", "Decision owners"],
      },
      {
        id: "architect",
        title: "Architect",
        intent: "Connect the whole system",
        description:
          "Experience, platforms, integrations, data, security and operating implications are considered together before they become expensive assumptions.",
        activities: ["Experience structure", "Technical architecture", "Platforms and cloud", "Data and integrations", "Delivery approach"],
        returnNote: "Architecture can reveal a question that needs to be understood or defined again.",
      },
      {
        id: "build",
        title: "Build",
        intent: "Make and validate together",
        description:
          "Design, engineering, configuration, integration and automation progress with frequent checks instead of waiting for a final reveal.",
        activities: ["Design", "Engineering", "Configuration", "Integration", "Iteration"],
      },
      {
        id: "verify",
        title: "Verify",
        intent: "Test the assumptions as well as the output",
        description:
          "Behaviour, responsive quality, accessibility, performance and integrations are checked against the decisions that shaped the work.",
        activities: ["Functional testing", "Responsive QA", "Accessibility", "Performance", "Integration validation"],
        returnNote: "Verification can send a design, implementation or architecture decision back for correction.",
      },
      {
        id: "launch-handover",
        title: "Launch & handover",
        intent: "Make ownership explicit",
        description:
          "Deployment is deliberate. Documentation, knowledge transfer, support boundaries and the next owner are clear before responsibility changes hands.",
        activities: ["Deployment", "Documentation", "Knowledge transfer", "Ownership", "Support boundary"],
      },
      {
        id: "operate-improve",
        title: "Operate & improve",
        intent: "Keep the system useful",
        description:
          "Where the engagement continues, monitoring, maintenance, support, automation and further improvement become part of the operating relationship.",
        activities: ["Monitoring", "Maintenance", "Support", "Optimisation", "Further iteration"],
        returnNote: "Operational evidence can begin the next cycle with better questions and clearer priorities.",
      },
    ] satisfies ProcessPhase[],
  },
  evidence: {
    heading: "Decisions should survive the project.",
    description:
      "A finished interface is not the whole record. The useful evidence depends on the engagement, but the important decisions and ownership should remain understandable.",
    items: [
      { title: "Scope", detail: "What the engagement includes, excludes and depends on." },
      { title: "Decisions", detail: "The choices that shaped the experience and system." },
      { title: "Architecture", detail: "How platforms, data, integrations and responsibilities connect." },
      { title: "Verification", detail: "What was checked, what passed and what remains known." },
      { title: "Handover", detail: "What shipped, how it is operated and who owns the next action." },
    ],
  },
  collaboration: {
    heading: "You should know where the work stands.",
    description:
      "Collaboration is not a workshop added to the schedule. It is the way decisions stay timely, feedback stays useful and scope stays understandable.",
    moments: [
      { title: "Context", detail: "Your team brings the operating reality, constraints and people affected by the work." },
      { title: "Decisions", detail: "Decision owners are identified so important questions do not disappear into an approval queue." },
      { title: "Feedback", detail: "Work is reviewed while there is still time to respond to what it reveals." },
      { title: "Visibility", detail: "Progress, open questions and changes to the boundary are made clear." },
    ],
  },
  disciplines: {
    heading: "Different work. The same discipline.",
    description:
      "The operating model stays consistent while the practical work changes with the system, environment and responsibility involved.",
    items: [
      {
        title: "Website & digital experience",
        focus: "People, content and the visible journey",
        work: "Research, UX, design, development, content integration, quality assurance and deployment.",
      },
      {
        title: "Cloud & Microsoft",
        focus: "Environment, access and platform decisions",
        work: "Current-state understanding, architecture, configuration, migration or integration, validation and operational handover.",
      },
      {
        title: "AI & automation",
        focus: "Workflows, data and decision boundaries",
        work: "Workflow understanding, access constraints, design, implementation, safeguards, testing and monitoring.",
      },
      {
        title: "Managed services",
        focus: "Continuity after delivery",
        work: "Baseline understanding, operational ownership, monitoring, reporting, support and continued improvement.",
      },
    ],
  },
  faq: [
    {
      question: "Does every project follow exactly the same process?",
      answer:
        "No. The responsibilities remain visible, but their depth and sequence change with the engagement. A focused architecture review and an ongoing managed service do not need identical delivery plans.",
    },
    {
      question: "When do we see work in progress?",
      answer:
        "Work is reviewed while decisions can still change it. The right review points depend on what is being designed, configured, integrated or tested.",
    },
    {
      question: "What happens if requirements change?",
      answer:
        "The effect on scope, architecture, timing and responsibility is made visible before the change is absorbed into the build.",
    },
    {
      question: "How are decisions documented?",
      answer:
        "The format depends on the work. Scope, architecture choices, implementation records, testing evidence and handover information are documented where they are relevant to ownership and operation.",
    },
    {
      question: "How involved does our team need to be?",
      answer:
        "Your team is most important where context, priorities and approvals are required. Rive makes those moments explicit rather than asking for constant participation without a clear purpose.",
    },
    {
      question: "What happens after launch?",
      answer:
        "Ownership and support boundaries are agreed before handover. Where continued operation forms part of the engagement, monitoring, maintenance and improvement continue within that defined relationship.",
    },
    {
      question: "Can Rive work with an existing internal or external team?",
      answer:
        "Yes. Responsibilities, dependencies, decision owners and handoff points are clarified so the work can connect without creating another opaque boundary.",
    },
  ],
  final: {
    heading: "Bring us the problem before you have the perfect brief.",
    cta: contactCta,
  },
} as const;
