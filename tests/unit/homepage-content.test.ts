import { describe, expect, it } from "vitest";
import { homepageFallbackContent } from "@/lib/content/homepage";

describe("homepage fallback content", () => {
  it("matches the approved hero copy exactly", () => {
    const { hero } = homepageFallbackContent;

    expect(hero.eyebrow).toBe("RIVE WEBWORKS · WEB, CLOUD & AI");
    expect(hero.heading).toBe(
      "Web, Cloud & AI Solutions Built for Growth, Security and Scale",
    );
    expect(hero.summary).toBe(
      "Rive Webworks helps growing and regulated organizations create high-converting websites, modernize AWS and Microsoft cloud environments, and deploy governed AI solutions — with clear scope, documented evidence, and ongoing support.",
    );
    expect(hero.primaryCta).toEqual({ label: "Find Your Solution", href: "/start/" });
    expect(hero.secondaryCta).toEqual({
      label: "Book a Discovery Call",
      href: "/connect/",
    });
    expect(hero.trustLine).toBe(
      "AWS-aligned · Microsoft cloud-aligned · Security-first · Evidence Pack™ delivery",
    );
  });

  it("uses the four approved buyer lane routes", () => {
    expect(homepageFallbackContent.buyerLanes.map((lane) => lane.href)).toEqual([
      "/solutions/web-growth/",
      "/solutions/cloud-modernization/",
      "/solutions/ai-data-automation/",
      "/solutions/managed-services/",
    ]);
  });

  it("never invents a featured-engagement price", () => {
    expect(homepageFallbackContent.featuredEngagement.priceStatus).toBe("pending");
  });
});
