import { describe, expect, it } from "vitest";
import { connectCta, primaryNav, startCta } from "@/lib/nav";

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

  it("targets the approved Start and Book a Discovery Call routes", () => {
    expect(startCta).toEqual({ label: "Start", href: "/start/" });
    expect(connectCta).toEqual({ label: "Book a Discovery Call", href: "/connect/" });
  });
});
