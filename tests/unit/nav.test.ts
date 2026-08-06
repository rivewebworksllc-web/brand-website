import { describe, expect, it } from "vitest";
import { connectCta, contactCta, footerNav, megaMenu, primaryNav, startCta } from "@/lib/nav";

describe("primary navigation data", () => {
  it("contains no dead href=\"#\" placeholders", () => {
    for (const item of primaryNav) {
      expect(item.href).not.toBe("#");
      expect(item.href.startsWith("/")).toBe(true);
    }
  });

  it("exposes the RW-PW07B reduced five-item top-level model", () => {
    // Product Office withdrew the earlier "preserve all eight" instruction —
    // Industries/Platforms/Pricing/Trust are grouped into mega-menu
    // secondaryLinks below, not dropped. See the "no route is orphaned" test.
    expect(primaryNav.map((item) => item.label)).toEqual([
      "Solutions",
      "Services",
      "Work",
      "Resources",
      "Company",
    ]);
  });

  it("targets the approved Find Your Solution and Book a Discovery Call routes", () => {
    expect(startCta).toEqual({ label: "Find Your Solution", href: "/start/" });
    expect(connectCta).toEqual({ label: "Book a Discovery Call", href: "/connect/" });
  });

  it("RW-PW11: the header's single Contact Us action targets the same already-approved /connect/ route as Book a Discovery Call, not a new page", () => {
    expect(contactCta).toEqual({ label: "Contact Us", href: "/connect/" });
    expect(contactCta.href).toBe(connectCta.href);
  });
});

describe("footer navigation data", () => {
  it("contains no dead href=\"#\" placeholders", () => {
    for (const group of footerNav) {
      for (const item of group.items) {
        expect(item.href).not.toBe("#");
        expect(item.href.startsWith("/")).toBe(true);
      }
    }
  });

  it("exposes the approved five footer groups", () => {
    expect(footerNav.map((group) => group.heading)).toEqual([
      "Solutions",
      "Services",
      "Company",
      "Trust",
      "Resources",
    ]);
  });
});

describe("mega-menu content (RW-PW07B)", () => {
  const megaMenuLabels = Object.keys(megaMenu);

  it("every primary nav label has a mega menu (each of the 5 groups now carries real content)", () => {
    expect(megaMenuLabels.sort()).toEqual([...primaryNav.map((item) => item.label)].sort());
  });

  it("every mega-menu link (primary and secondary) is byte-identical to a real footerNav item or approved route — nothing invented", () => {
    const industriesLink = { label: "Industries", href: "/industries/" };
    const platformsLink = { label: "Platforms", href: "/platforms/" };
    const pricingLink = { label: "Pricing", href: "/pricing/" };
    const trustLinks = footerNav.find((group) => group.heading === "Trust")!.items;

    for (const label of megaMenuLabels) {
      const group = megaMenu[label]!;
      if (group.links.length > 0) {
        const footerGroup = footerNav.find((g) => g.heading === label);
        expect(footerGroup, `${label} has real links but no matching footerNav group`).toBeDefined();
        expect(group.links).toEqual(footerGroup!.items);
      }
    }

    expect(megaMenu.Solutions!.secondaryLinks).toEqual([industriesLink, platformsLink]);
    expect(megaMenu.Company!.secondaryLinks).toEqual([pricingLink]);
    expect(megaMenu.Resources!.secondaryLinks).toEqual(trustLinks);
  });

  it("every group with secondaryLinks also has a secondaryHeading to label them", () => {
    for (const label of megaMenuLabels) {
      const group = megaMenu[label]!;
      if (group.secondaryLinks && group.secondaryLinks.length > 0) {
        expect(group.secondaryHeading, `${label} has secondaryLinks but no heading`).toBeTruthy();
      }
    }
  });

  it("no route from the old 8-item model is orphaned — every one is reachable from primaryNav, secondaryLinks, or footerNav", () => {
    const oldEightItemRoutes = [
      "/solutions/",
      "/services/",
      "/industries/",
      "/platforms/",
      "/work/",
      "/resources/",
      "/company/",
      "/pricing/",
    ];

    const reachable = new Set<string>();
    for (const item of primaryNav) reachable.add(item.href);
    for (const label of megaMenuLabels) {
      const group = megaMenu[label]!;
      for (const link of [...group.links, ...(group.secondaryLinks ?? [])]) reachable.add(link.href);
    }

    for (const route of oldEightItemRoutes) {
      expect(reachable.has(route), `${route} is no longer reachable from the header`).toBe(true);
    }
  });

  it("every mega-menu panel CTA targets a real, already-approved route", () => {
    const approvedCtaHrefs = new Set([
      startCta.href,
      connectCta.href,
      "/trust/evidence-pack/", // homepageFallbackContent.evidencePack.cta
      "/work/website-rebuild/", // homepageFallbackContent.featuredEngagement.primaryCta
    ]);
    for (const label of megaMenuLabels) {
      expect(approvedCtaHrefs.has(megaMenu[label]!.panel.cta.href)).toBe(true);
    }
  });

  it("every group carries a placeholder with full traceability metadata", () => {
    for (const label of megaMenuLabels) {
      const { placeholder } = megaMenu[label]!;
      expect(placeholder.id).toMatch(/^RW-NAV-/);
      expect(placeholder.purpose.length).toBeGreaterThan(0);
      expect(placeholder.replacement.length).toBeGreaterThan(0);
    }
  });

  it("contains no dead href=\"#\" placeholders", () => {
    for (const label of megaMenuLabels) {
      const group = megaMenu[label]!;
      for (const link of [...group.links, ...(group.secondaryLinks ?? []), group.panel.cta]) {
        expect(link.href).not.toBe("#");
        expect(link.href.startsWith("/")).toBe(true);
      }
    }
  });
});
