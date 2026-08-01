import { describe, expect, it } from "vitest";
import { connectCta, footerNav, primaryNav, startCta } from "@/lib/nav";

describe("primary navigation data", () => {
  it("contains no dead href=\"#\" placeholders", () => {
    for (const item of primaryNav) {
      expect(item.href).not.toBe("#");
      expect(item.href.startsWith("/")).toBe(true);
    }
  });

  it("exposes the approved top-level model", () => {
    expect(primaryNav.map((item) => item.label)).toEqual([
      "Solutions",
      "Services",
      "Industries",
      "Platforms",
      "Work",
      "Resources",
      "Company",
      "Pricing",
    ]);
  });

  it("targets the approved Find Your Solution and Book a Discovery Call routes", () => {
    expect(startCta).toEqual({ label: "Find Your Solution", href: "/start/" });
    expect(connectCta).toEqual({ label: "Book a Discovery Call", href: "/connect/" });
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
