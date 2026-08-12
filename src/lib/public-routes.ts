export const builtPublicRoutes = [
  "/", "/company/", "/company/about/", "/company/process/", "/industries/",
  "/platforms/", "/resources/guides/", "/resources/insights/", "/solutions/", "/work/",
] as const;

const builtRouteSet = new Set<string>(builtPublicRoutes);

export function isAvailableHref(href: string): boolean {
  if (href.startsWith("#") || !href.startsWith("/")) return true;
  return builtRouteSet.has(href);
}
