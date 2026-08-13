import { describe, expect, it } from "vitest";
import { homepageFallbackContent } from "@/lib/content/homepage";

describe("homepage fallback content", () => {
  it("matches the approved hero copy", () => {
    const { hero } = homepageFallbackContent;

    expect(hero.eyebrow).toBe("RIVE WEBWORKS");
    expect(hero.heading).toBe(
      "Cloud, AI & Web Design Built on Evidence, Not Promises",
    );
    expect(hero.primaryCta).toEqual({ label: "Find Your Solution", href: "/start/" });
    expect(hero.secondaryCta).toEqual({
      label: "Explore Services",
      href: "/services/",
    });
  });

  it("carries the four-stage architecture flow", () => {
    expect(homepageFallbackContent.hero.architectureFlow.map((step) => step.label)).toEqual([
      "Digital Experience",
      "Cloud Foundation",
      "Governed AI",
      "Managed Outcomes",
    ]);
  });

  it("uses the four approved buyer path routes", () => {
    expect(homepageFallbackContent.buyerPaths.map((path) => path.cta.href)).toEqual([
      "/solutions/cloud-modernization/",
      "/solutions/ai-data-automation/",
      "/solutions/web-growth/",
      "/solutions/managed-services/",
    ]);
  });

  it("never invents a featured-engagement price", () => {
    const text = JSON.stringify(homepageFallbackContent.featuredEngagement);
    expect(text.toLowerCase()).not.toMatch(/\$\d|per month|per year|pricing/);
  });

  it("never invents resource author or reading-time data", () => {
    for (const card of homepageFallbackContent.resources.cards) {
      expect(card.metaStatus).toBe("pending");
    }
  });

  it("contains exactly six Evidence Pack artifacts", () => {
    expect(homepageFallbackContent.evidencePack.artifacts).toHaveLength(6);
  });

  it("never implies AWS or Microsoft partner status", () => {
    const text = JSON.stringify(homepageFallbackContent).toLowerCase();
    expect(text).not.toMatch(/aws partner|microsoft solutions partner|certified partner/);
  });

  it("the proof footnote never invents a numeric result", () => {
    expect(homepageFallbackContent.proofFootnote).not.toMatch(
      /\d+%\s+(increase|improvement|growth)/i,
    );
  });
});
