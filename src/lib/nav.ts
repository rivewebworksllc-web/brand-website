export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  heading: string;
  items: NavItem[];
};

/**
 * Approved top-level model (directive §8). Every href is a real route this
 * repository will eventually implement — none are built yet beyond the
 * homepage, so unimplemented targets resolve to the styled 404 rather than
 * a fabricated page or a `href="#"` placeholder.
 */
export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "/solutions/" },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Platforms", href: "/platforms/" },
  { label: "Work", href: "/work/" },
  { label: "Resources", href: "/resources/" },
  { label: "Company", href: "/company/" },
  { label: "Pricing", href: "/pricing/" },
];

export const startCta: NavItem = { label: "Find Your Solution", href: "/start/" };
export const connectCta: NavItem = {
  label: "Book a Discovery Call",
  href: "/connect/",
};

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
