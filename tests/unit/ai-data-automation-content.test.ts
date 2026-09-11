import { describe, expect, it } from "vitest";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { projectPackages } from "@/lib/content/pricing";
import {
  buyerPath,
  buyerProblem,
  final,
  governance,
  hero,
  heroPanelEngagements,
  managedFollowOn,
  pipelineGates,
  relationships,
  startingEngagements,
} from "@/lib/content/ai-data-automation";

describe("AI & Data Automation content (RW-PAGE-P0-SOLUTIONS-01)", () => {
  it("reuses the exact homepage buyer-path object, not a re-authored copy", () => {
    const homepagePath = homepageFallbackContent.buyerPaths.find((path) => path.title === "Secure AI & Automation");
    expect(buyerPath).toBe(homepagePath);
    expect(buyerPath.cta.href).toBe("/solutions/ai-data-automation/");
  });

  it("never invents a price: every engagement is a direct reference into the published pricing catalog", () => {
    for (const pkg of startingEngagements) {
      expect(projectPackages).toContain(pkg);
    }
    for (const pkg of heroPanelEngagements) {
      expect(projectPackages).toContain(pkg);
    }
  });

  it("lists exactly the four real AI engagements, no invented duplicates", () => {
    expect(startingEngagements.map((pkg) => pkg.id)).toEqual([
      "ai-readiness-sprint",
      "secure-rag-knowledge-search",
      "m365-copilot-readiness-adoption",
      "ai-red-teaming-guardrails-validation",
    ]);
  });

  it("declares a three-gate Readiness / Guardrails / Evaluation pipeline, distinct in form from Cloud's six-pillar grid", () => {
    expect(pipelineGates.map((gate) => gate.name)).toEqual(["Readiness", "Guardrails", "Evaluation"]);
    pipelineGates.forEach((gate) => expect(gate.items.length).toBeGreaterThanOrEqual(3));
  });

  it("attaches the real AI Ops + Eval Retainer managed follow-on", () => {
    expect(managedFollowOn.code).toBe("MGT-16");
  });

  it("never claims an AI certification or partner status", () => {
    const text = JSON.stringify({ hero, buyerProblem, governance, relationships, final });
    expect(text.toLowerCase()).not.toMatch(/certified|certification|partner status|gold partner/);
  });

  it("contains no em-dash anywhere in the page content", () => {
    const text = JSON.stringify({ hero, buyerProblem, governance, relationships, final, pipelineGates });
    expect(text).not.toMatch(/[–—]/);
  });

  it("cross-links to the sibling Cloud Modernization page, not a fabricated destination", () => {
    const sibling = relationships.items.find((item) => item.label === "Cloud Modernization");
    expect(sibling?.cta.href).toBe("/solutions/cloud-modernization/");
  });
});
