import { homepageFallbackContent } from "@/lib/content/homepage";
import type { PlaceholderMeta } from "@/components/media/Placeholder";

export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  heading: string;
  items: NavItem[];
};

export type MegaMenuGroup = {
  links: NavItem[];
  /**
   * RW-PW07B: routes that don't have their own top-level nav slot after the
   * 8→5 consolidation, grouped here instead of being dropped or stuffed into
   * a separate drawer. Every route from the old 8-item model, plus the
   * previously-unreachable Trust group, is still reachable from somewhere.
   */
  secondaryLinks?: NavItem[];
  /** Heading shown above `secondaryLinks` in the panel — required whenever secondaryLinks is set. */
  secondaryHeading?: string;
  panel: { heading: string; body: string; cta: NavItem };
  placeholder: PlaceholderMeta;
};

/**
 * RW-PW07B: consolidated from the previous 8-item model (Solutions/
 * Services/Industries/Platforms/Work/Resources/Company/Pricing) down to 5
 * visible items, per Product Office's explicit withdrawal of the earlier
 * "preserve all eight" instruction. Industries and Platforms move into the
 * Solutions mega-menu's `secondaryLinks`; Pricing moves into Company's;
 * the previously-orphaned Trust group moves into Resources's. No route is
 * dropped — see `megaMenu` below for where each one now lives.
 */
export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "/solutions/" },
  { label: "Services", href: "/services/" },
  { label: "Work", href: "/work/" },
  { label: "Resources", href: "/resources/" },
  { label: "Company", href: "/company/" },
];

export const startCta: NavItem = { label: "Find Your Solution", href: "/start/" };
export const connectCta: NavItem = {
  label: "Book a Discovery Call",
  href: "/connect/",
};
/**
 * RW-PW11: the header's own single global action — distinct from
 * `connectCta` (same `/connect/` route, no new page) which stays the
 * hero's/footer's/mega-menu's specific "Book a Discovery Call" intent. The
 * header previously showed both `connectCta` and `startCta` as simultaneous
 * CTAs, directly duplicating the hero immediately below it; Product Office
 * reduced the header to this one generic action, leaving the two specific
 * intents (Find Your Solution / Book a Discovery Call) to the hero alone.
 */
export const contactCta: NavItem = { label: "Contact Us", href: "/connect/" };

/** Footer link architecture. Same safe-route convention as `primaryNav`. */
export const footerNav: NavGroup[] = [
  {
    heading: "Solutions",
    items: [
      { label: "Website & Growth", href: "/solutions/web-growth/" },
      { label: "Cloud Modernization", href: "/solutions/cloud-modernization/" },
      { label: "AI & Automation", href: "/solutions/ai-data-automation/" },
      { label: "Managed Services", href: "/solutions/managed-services/" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Web", href: "/services/web/" },
      { label: "Cloud", href: "/services/cloud/" },
      { label: "Microsoft", href: "/services/microsoft/" },
      { label: "AI", href: "/services/ai/" },
      { label: "Automation", href: "/services/automation/" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/company/about/" },
      { label: "Process", href: "/company/process/" },
      { label: "Work", href: "/work/" },
      { label: "Partners and Readiness", href: "/company/partners-and-readiness/" },
      { label: "Careers", href: "/company/careers/" },
      { label: "Contact", href: "/connect/" },
    ],
  },
  {
    heading: "Trust",
    items: [
      { label: "Trust Center", href: "/trust/" },
      { label: "Evidence Pack™", href: "/trust/evidence-pack/" },
      { label: "Accessibility", href: "/trust/accessibility/" },
      { label: "Privacy", href: "/trust/privacy/" },
      { label: "Security", href: "/trust/security/" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Guides", href: "/resources/guides/" },
      { label: "Insights", href: "/resources/insights/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "FAQs", href: "/resources/faqs/" },
    ],
  },
];

const industriesLink: NavItem = { label: "Industries", href: "/industries/" };
const platformsLink: NavItem = { label: "Platforms", href: "/platforms/" };
const pricingLink: NavItem = { label: "Pricing", href: "/pricing/" };
const trustLinks: NavItem[] = footerNav.find((group) => group.heading === "Trust")!.items;

/**
 * RW-PW07B: every mega menu now carries a real content panel, a real link
 * group (plus secondary links where a route was consolidated in), and a
 * `Placeholder` visual — no more plain-link-only items, since Product
 * Office withdrew the "thin panel is worse than no panel" reasoning from
 * RW-PW07A now that every one of the 5 groups has real content to show.
 * Every string is either a `footerNav` item or copied verbatim from
 * `homepageFallbackContent` — nothing here is new copy.
 */
export const megaMenu: Record<string, MegaMenuGroup> = {
  Solutions: {
    links: footerNav.find((group) => group.heading === "Solutions")!.items,
    secondaryLinks: [industriesLink, platformsLink],
    secondaryHeading: "By industry & platform",
    panel: {
      heading: homepageFallbackContent.buyerPathsIntro.heading,
      body: homepageFallbackContent.buyerPathsIntro.description,
      cta: startCta,
    },
    placeholder: {
      id: "RW-NAV-SOLUTIONS-01",
      category: "architecture-diagram",
      purpose: "How Rive connects strategy, platform and governance",
      aspect: "4:3",
      composition: "Four paths converging on one accountable engagement",
      mood: "Calm, architectural, technically precise",
      replacement: "Commissioned Rive illustration",
      priority: "P0",
      motion: "none",
    },
  },
  Services: {
    links: footerNav.find((group) => group.heading === "Services")!.items,
    panel: {
      heading: homepageFallbackContent.platformParity.heading,
      body: homepageFallbackContent.platformParity.description,
      cta: connectCta,
    },
    placeholder: {
      id: "RW-NAV-SERVICES-01",
      category: "device-render",
      purpose: "Platform-agnostic service delivery",
      aspect: "4:3",
      composition: "Two platforms, one operating layer",
      mood: "Precise, structured",
      replacement: "Commissioned Rive illustration",
      priority: "P1",
      motion: "none",
    },
  },
  Work: {
    links: [],
    panel: {
      heading: homepageFallbackContent.featuredEngagement.heading,
      body: homepageFallbackContent.featuredEngagement.description,
      cta: homepageFallbackContent.featuredEngagement.primaryCta,
    },
    placeholder: {
      id: "RW-NAV-WORK-01",
      category: "editorial-photography",
      purpose: "Case study cover — evidence pending",
      aspect: "4:3",
      composition: "Real project context, not stock imagery",
      mood: "Honest, credible",
      replacement: "Real case-study photography, once published",
      priority: "P2",
      motion: "none",
    },
  },
  Resources: {
    links: footerNav.find((group) => group.heading === "Resources")!.items,
    secondaryLinks: trustLinks,
    secondaryHeading: "Trust & compliance",
    panel: {
      heading: homepageFallbackContent.evidencePack.heading,
      body: homepageFallbackContent.evidencePack.description,
      cta: homepageFallbackContent.evidencePack.cta,
    },
    placeholder: {
      id: "RW-NAV-RESOURCES-01",
      category: "feature-illustration",
      purpose: "Documented evidence, not implied claims",
      aspect: "4:3",
      composition: "Simple mark representing a verified record",
      mood: "Trustworthy, restrained",
      replacement: "Commissioned Rive illustration",
      priority: "P1",
      motion: "none",
    },
  },
  Company: {
    links: footerNav.find((group) => group.heading === "Company")!.items,
    secondaryLinks: [pricingLink],
    secondaryHeading: "Also",
    panel: {
      heading: homepageFallbackContent.manifesto.lead,
      body: homepageFallbackContent.process.description,
      cta: connectCta,
    },
    placeholder: {
      id: "RW-NAV-COMPANY-01",
      category: "team-photography",
      purpose: "Team profile — not yet published",
      aspect: "4:3",
      composition: "Founder-led, not an anonymous production queue",
      mood: "Approachable, credible",
      replacement: "Real team photography",
      priority: "P2",
      motion: "none",
    },
  },
};
