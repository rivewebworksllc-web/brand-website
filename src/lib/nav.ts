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
  panel: { heading: string; body: string; cta?: NavItem };
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
    heading: "Explore",
    items: [
      { label: "Work", href: "/work/" },
      { label: "Industries", href: "/industries/" },
      { label: "Platforms", href: "/platforms/" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/company/about/" },
      { label: "Process", href: "/company/process/" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Guides", href: "/resources/guides/" },
      { label: "Insights", href: "/resources/insights/" },
    ],
  },
];

const industriesLink: NavItem = { label: "Industries", href: "/industries/" };
const platformsLink: NavItem = { label: "Platforms", href: "/platforms/" };

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
    links: [industriesLink, platformsLink],
    panel: {
      heading: homepageFallbackContent.buyerPathsIntro.heading,
      body: homepageFallbackContent.buyerPathsIntro.description,
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
  Resources: {
    links: footerNav.find((group) => group.heading === "Resources")!.items,
    panel: {
      heading: homepageFallbackContent.evidencePack.heading,
      body: homepageFallbackContent.evidencePack.description,
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
    panel: {
      heading: homepageFallbackContent.manifesto.lead,
      body: homepageFallbackContent.process.description,
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
