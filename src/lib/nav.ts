export type NavItem = {
  label: string;
  href: string;
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

export const startCta: NavItem = { label: "Start", href: "/start/" };
export const connectCta: NavItem = {
  label: "Book a Discovery Call",
  href: "/connect/",
};
