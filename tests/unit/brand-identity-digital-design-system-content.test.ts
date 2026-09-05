import { describe, expect, it } from "vitest";
import {
  attach,
  brandGuideComparison,
  buyerProblem,
  colorRoles,
  commercialMeta,
  componentAnatomy,
  deliverables,
  designSystemContent,
  developerHandoff,
  entryPaths,
  exclusions,
  fragmentExamples,
  processSteps,
  relationships,
  service,
  systemStages,
  tokenExamples,
  typeRoles,
} from "@/lib/content/brand-identity-digital-design-system";

describe("Brand Identity + Digital Design System content (RW-PAGE-13)", () => {
  it("declares the authoritative FND-05 commercial metadata", () => {
    expect(service.code).toBe("FND-05");
    expect(commercialMeta.code).toBe("FND-05");
    expect(commercialMeta.priceDisplay).toBe("$4,000-$9,500");
    expect(commercialMeta.timelineDisplay).toBe("2-6 weeks");
    expect(commercialMeta.evidence).toBe("E2");
  });

  it("declares two buyer audiences and at least five fragmentation symptoms", () => {
    expect(buyerProblem.audiences).toHaveLength(2);
    expect(buyerProblem.symptoms.length).toBeGreaterThanOrEqual(5);
  });

  it("declares exactly two entry paths, not a duplicate standalone brand page", () => {
    expect(entryPaths).toHaveLength(2);
    expect(entryPaths.map((p) => p.id)).toEqual(["existing-identity", "starting-foundation"]);
  });

  it("resolves fragmentation into exactly the four authoritative system stages", () => {
    expect(fragmentExamples.length).toBeGreaterThanOrEqual(5);
    expect(systemStages.map((s) => s.label)).toEqual(["Tokens", "Primitives", "Components", "Patterns"]);
  });

  it("labels illustrative token examples without inventing a proprietary taxonomy as fact", () => {
    expect(tokenExamples.length).toBeGreaterThanOrEqual(2);
    for (const example of tokenExamples) {
      expect(example.tokenName.length).toBeGreaterThan(0);
    }
  });

  it("declares six type roles and six color roles, not a decorative font showcase", () => {
    expect(typeRoles).toHaveLength(6);
    expect(colorRoles).toHaveLength(6);
    expect(colorRoles.map((r) => r.id)).toEqual(["brand", "surface", "text", "border", "state", "feedback"]);
  });

  it("defines the button anatomy across exactly six decisions", () => {
    expect(componentAnatomy).toHaveLength(6);
    expect(componentAnatomy.map((a) => a.id)).toEqual(["typography", "spacing", "radius", "token", "state", "focus"]);
  });

  it("distinguishes brand guide from design system without positioning them as competitors", () => {
    expect(brandGuideComparison.brandGuide.items.length).toBeGreaterThan(0);
    expect(brandGuideComparison.designSystem.items.length).toBeGreaterThan(0);
    expect(brandGuideComparison.connector.toLowerCase()).not.toMatch(/instead of/);
  });

  it("declares exactly the three authoritative deliverable groups", () => {
    expect(deliverables).toHaveLength(3);
    expect(deliverables.map((d) => d.id)).toEqual(["figma-design-system", "react-export", "style-guide"]);
    const styleGuide = deliverables.find((d) => d.id === "style-guide")!;
    expect(styleGuide.detail.join(" ")).toMatch(/2-4 pages/);
  });

  it("declares exactly the five authoritative exclusions", () => {
    expect(exclusions).toEqual([
      "Content strategy",
      "Copywriting",
      "Page-design mockups beyond component examples",
      "Website build",
      "CMS implementation",
    ]);
  });

  it("declares a six-step process, not a generic Discovery/Design/Develop/Launch sequence", () => {
    expect(processSteps.map((s) => s.label)).toEqual([
      "Inventory",
      "Normalize",
      "Tokenize",
      "Componentize",
      "Document",
      "Handoff",
    ]);
    const text = processSteps.map((s) => s.label.toLowerCase());
    expect(text).not.toContain("discovery");
    expect(text).not.toContain("launch");
  });

  it("never guarantees a productivity or design-debt-reduction percentage", () => {
    const text = JSON.stringify(developerHandoff);
    expect(text).not.toMatch(/\d+(\.\d+)?%/);
    expect(text.toLowerCase()).not.toMatch(/guarantee/);
  });

  it("declares the authoritative attach path to BLD-02 and MGT-03", () => {
    const codes = attach.options.map((o) => o.code);
    expect(codes).toEqual(["BLD-02", "MGT-03"]);
    expect(attach.route).toBe("OP-01E → FND-05 → BLD-02");
  });

  it("the Evidence Pack relationship links to the real Evidence Pack route", () => {
    const evidencePackItem = relationships.items.find((i) => i.label === "Evidence Pack")!;
    expect(evidencePackItem.cta.href).toBe("/trust/evidence-pack/");
  });

  it("the Pricing relationship states the price without claiming Pricing already lists it", () => {
    const pricingItem = relationships.items.find((i) => i.label === "Pricing")!;
    expect(pricingItem.body).toMatch(/\$4,000/);
    expect(pricingItem.body.toLowerCase()).toMatch(/not yet listed/);
  });

  it("does not repeat the exact same CTA label and destination twice within the relationships row", () => {
    const seen = new Set<string>();
    for (const item of relationships.items) {
      const key = `${item.cta.label}|${item.cta.href}`;
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    }
  });

  it("never claims automatic Paid Discovery credit, matching the sitewide rule", () => {
    const text = JSON.stringify(designSystemContent);
    expect(text).not.toMatch(/automatically credited/i);
  });

  it("contains no em-dash anywhere in the content authority", () => {
    const text = JSON.stringify({
      service,
      commercialMeta,
      buyerProblem,
      entryPaths,
      fragmentExamples,
      systemStages,
      tokenExamples,
      typeRoles,
      colorRoles,
      componentAnatomy,
      brandGuideComparison,
      deliverables,
      exclusions,
      processSteps,
      developerHandoff,
      relationships,
      attach,
      designSystemContent,
    });
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });

  it("does not fabricate an unearned partner/certification claim", () => {
    const text = JSON.stringify({ deliverables, developerHandoff });
    expect(text).not.toMatch(/AWS Partner|Microsoft Partner|SOC 2 certified|ISO 27001 certified|WCAG 2\.2 AA certified/i);
  });
});
