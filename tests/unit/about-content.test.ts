import { describe, expect, it } from "vitest";
import { aboutContent } from "@/lib/content/about";

describe("About content (RW-PAGE-04)", () => {
  it("uses only approved Company destinations", () => {
    expect(aboutContent.paths).toEqual([
      { label: "Process", href: "/company/process/" },
      { label: "Partners and Readiness", href: "/company/partners-and-readiness/" },
      { label: "Careers", href: "/company/careers/" },
      { label: "Contact", href: "/connect/" },
    ]);
  });

  it("carries complete metadata for every production-scale placeholder", () => {
    const media = [aboutContent.hero.media, aboutContent.definition.media, aboutContent.human.media];
    expect(media.map((item) => item.id)).toEqual(["RW-ABOUT-HERO-01", "RW-ABOUT-SYSTEM-01", "RW-ABOUT-HUMAN-01"]);
    for (const item of media) {
      expect(item).toMatchObject({ purpose: expect.any(String), aspect: expect.any(String), composition: expect.any(String), mood: expect.any(String), replacement: expect.any(String), priority: expect.stringMatching(/^P[01]$/), motion: "none" });
    }
  });

  it("does not introduce prohibited organisational proof", () => {
    const text = JSON.stringify(aboutContent);
    expect(text).not.toMatch(/\b(CEO|CTO|award-winning|certified partner|global offices?|employees?|clients served|founded in)\b/i);
    expect(text).not.toMatch(/\b\d+\s*(employees?|clients?|projects?|offices?|years?)\b/i);
    expect(text).not.toMatch(/\d+%/);
  });
});
