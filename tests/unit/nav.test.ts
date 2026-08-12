import { describe, expect, it } from "vitest";
import { footerNav, megaMenu, primaryNav } from "@/lib/nav";
import { builtPublicRoutes, isAvailableHref } from "@/lib/public-routes";

describe("RW-IA-01 canonical public IA", () => {
  it("exposes only the approved top-level labels", () => {
    expect(primaryNav.map((item) => item.label)).toEqual(["Solutions", "Work", "Resources", "Company"]);
  });

  it("keeps Work direct and gives only true disclosure parents a group", () => {
    expect(megaMenu.Work).toBeUndefined();
    expect(Object.keys(megaMenu).sort()).toEqual(["Company", "Resources", "Solutions"]);
  });

  it("advertises only implemented destinations", () => {
    const links = [
      ...footerNav.flatMap((group) => group.items),
      ...Object.values(megaMenu).flatMap((group) => [...group.links, ...(group.secondaryLinks ?? [])]),
    ];
    for (const link of links) expect(isAvailableHref(link.href), link.href).toBe(true);
  });

  it("keeps the footer bounded to valid Explore, Company and Resources groups", () => {
    expect(footerNav.map((group) => group.heading)).toEqual(["Explore", "Company", "Resources"]);
    expect(footerNav.flatMap((group) => group.items).map((item) => item.href)).toEqual([
      "/work/", "/industries/", "/platforms/", "/company/about/", "/company/process/",
      "/resources/guides/", "/resources/insights/",
    ]);
  });

  it("classifies all currently built public pages", () => {
    expect(builtPublicRoutes).toContain("/company/");
    expect(builtPublicRoutes).toContain("/solutions/");
    expect(isAvailableHref("/connect/")).toBe(false);
    expect(isAvailableHref("/start/")).toBe(false);
  });

  it("retains full placeholder traceability for each disclosure group", () => {
    for (const group of Object.values(megaMenu)) {
      expect(group.placeholder.id).toMatch(/^RW-NAV-/);
      expect(group.placeholder.purpose).toBeTruthy();
      expect(group.placeholder.replacement).toBeTruthy();
    }
  });
});
