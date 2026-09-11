import { describe, expect, it } from "vitest";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { projectPackages } from "@/lib/content/pricing";
import {
  buyerPath,
  buyerProblem,
  enginePillars,
  final,
  heroPanelEngagements,
  hero,
  managedFollowOn,
  neutrality,
  relationships,
  roadmapBands,
  startingEngagements,
} from "@/lib/content/cloud-modernization";

describe("Cloud Modernization content (RW-PAGE-P0-SOLUTIONS-01)", () => {
  it("reuses the exact homepage buyer-path object, not a re-authored copy", () => {
    const homepagePath = homepageFallbackContent.buyerPaths.find((path) => path.title === "AWS & Microsoft Cloud");
    expect(buyerPath).toBe(homepagePath);
    expect(buyerPath.cta.href).toBe("/solutions/cloud-modernization/");
  });

  it("never invents a price: every engagement is a direct reference into the published pricing catalog", () => {
    for (const pkg of startingEngagements) {
      expect(projectPackages).toContain(pkg);
    }
    for (const pkg of heroPanelEngagements) {
      expect(projectPackages).toContain(pkg);
    }
  });

  it("lists exactly the five real cloud-modernization engagements, no invented duplicates", () => {
    expect(startingEngagements.map((pkg) => pkg.id)).toEqual([
      "aws-wafr-review",
      "cloud-foundation-sprint",
      "ai-ready-cloud-foundation",
      "cloud-security-resilience-baseline",
      "microsoft-fabric-analytics-quickstart",
    ]);
  });

  it("declares the real six-pillar Well-Architected structure, not a generic architecture diagram", () => {
    expect(enginePillars.map((pillar) => pillar.name)).toEqual([
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
      "Sustainability",
    ]);
    expect(roadmapBands.map((band) => band.severity)).toEqual(["Critical", "High", "Medium", "Low"]);
  });

  it("attaches the real Monthly Cloud Care managed follow-on", () => {
    expect(managedFollowOn.code).toBe("MGT-21");
  });

  it("never claims an AWS or Microsoft partner status or certification", () => {
    const text = JSON.stringify({ hero, buyerProblem, neutrality, relationships, final });
    expect(text.toLowerCase()).not.toMatch(/certified|certification|partner status|advanced partner|gold partner/);
  });

  it("contains no em-dash anywhere in the page content", () => {
    const text = JSON.stringify({
      hero,
      buyerProblem,
      neutrality,
      relationships,
      final,
      enginePillars,
      roadmapBands,
    });
    expect(text).not.toMatch(/[–—]/);
  });

  it("cross-links to the sibling AI & Data Automation page, not a fabricated destination", () => {
    const sibling = relationships.items.find((item) => item.label === "AI & Data Automation");
    expect(sibling?.cta.href).toBe("/solutions/ai-data-automation/");
  });
});
