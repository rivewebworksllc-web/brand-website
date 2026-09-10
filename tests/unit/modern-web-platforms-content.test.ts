import { describe, expect, it } from "vitest";
import { processContent } from "@/lib/content/process";
import {
  accessibilityNote,
  buyerProblem,
  commercialOrientation,
  contentModelFields,
  coupledVsComposable,
  headlessContentTreatment,
  modernWebPlatformsContent,
  multilingualNote,
  nextjsTreatment,
  performanceIntro,
  platformDecisionIntro,
  platformPaths,
  platformStack,
  processPhases,
  relationships,
  seoIntro,
  service,
} from "@/lib/content/modern-web-platforms";

describe("Modern Web Platforms content (RW-PAGE-14)", () => {
  it("declares the OP-40 catalog mapping without inventing commercial facts", () => {
    expect(service.code).toBe("OP-40");
    expect(service.mapping).toBe("OP-40 (OPT-15 + FND-02 + BLD-03)");
  });

  it("never states a fabricated OP-40 price, price band, timeline or evidence tier", () => {
    const text = JSON.stringify({ commercialOrientation, modernWebPlatformsContent });
    expect(text).not.toMatch(/\$[\d,]+/);
    expect(text.toLowerCase()).not.toMatch(/evidence tier|evidence e\d/);
    expect(text.toLowerCase()).not.toMatch(/\d+\s*(-|to)\s*\d+\s*weeks/);
  });

  it("states a claim-safe commercial orientation instead of a price plate", () => {
    expect(commercialOrientation.status).toBe("Flagship route");
    expect(commercialOrientation.scopeNote).toBe("Scoped in Paid Discovery");
  });

  it("declares at least five buyer-problem symptoms, not a generic scale claim", () => {
    expect(buyerProblem.symptoms.length).toBeGreaterThanOrEqual(5);
    const text = buyerProblem.heading.toLowerCase();
    expect(text).not.toBe("your website needs to scale.");
  });

  it("declares exactly the four authoritative platform-stack layers", () => {
    expect(platformStack.map((l) => l.label)).toEqual(["Experience", "Content", "Capabilities", "Delivery"]);
    for (const layer of platformStack) {
      expect(layer.examples.length).toBeGreaterThan(0);
      expect(layer.consequence.length).toBeGreaterThan(0);
    }
  });

  it("frames Coupled vs Composable neutrally, without declaring WordPress inferior", () => {
    expect(coupledVsComposable.coupled.label).toBe("Coupled");
    expect(coupledVsComposable.composable.label).toBe("Composable");
    expect(coupledVsComposable.connector.toLowerCase()).toMatch(/wordpress can remain the better choice/);
  });

  it("declares seven content-model fields, matching the directive's schema", () => {
    expect(contentModelFields.map((f) => f.label)).toEqual([
      "Name",
      "Summary",
      "Buyer problem",
      "Deliverables",
      "Evidence tier",
      "Related service",
      "SEO fields",
    ]);
  });

  it("declares exactly three neutral platform-decision paths with the commissioned mappings", () => {
    expect(platformPaths).toHaveLength(3);
    expect(platformPaths.map((p) => p.id)).toEqual(["composable", "wordpress", "custom-application"]);
    expect(platformPaths.map((p) => p.mapping)).toEqual([
      "OP-40 (OPT-15 + FND-02 + BLD-03)",
      "BLD-02/03 + ACC-03/OP-10B",
      "OP-40 / DEV-03",
    ]);
    for (const path of platformPaths) {
      expect(path.bestWhen.length).toBeGreaterThan(0);
      expect(path.routeNote.length).toBeGreaterThan(0);
    }
    const wordpress = platformPaths.find((p) => p.id === "wordpress")!;
    expect(wordpress.routeNote.toLowerCase()).toMatch(/better operating choice/);
    const custom = platformPaths.find((p) => p.id === "custom-application")!;
    expect(custom.routeNote.toLowerCase()).toMatch(/paid discovery/);
  });

  it("explains Next.js and structured content in buyer consequences without making either mandatory", () => {
    expect(nextjsTreatment.body).toMatch(/React foundation/);
    expect(nextjsTreatment.body).toMatch(/rendering choices/);
    expect(nextjsTreatment.body).toMatch(/structured metadata/);
    expect(nextjsTreatment.body).toMatch(/reusable components/);
    expect(nextjsTreatment.body).toMatch(/integrations/);
    expect(nextjsTreatment.body).toMatch(/application behavior/);
    expect(headlessContentTreatment.body).toMatch(/separates information from page layout/);
    expect(headlessContentTreatment.body).toMatch(/structured content rather than frontend code/);
    expect(headlessContentTreatment.body).toMatch(/several surfaces/);
    expect(headlessContentTreatment.body).toMatch(/evolve independently/);
    expect(headlessContentTreatment.body).toMatch(/not a mandatory choice/);
  });

  it("states the multilingual boundary as custom scope, not a standalone package", () => {
    expect(multilingualNote.body.toLowerCase()).toMatch(/custom scope/);
    expect(multilingualNote.body.toLowerCase()).toMatch(/not yet a standalone catalog code/);
  });

  it("never promises guaranteed rankings, AI-search inclusion, or fabricated performance scores", () => {
    const text = JSON.stringify({ seoIntro, performanceIntro });
    expect(text.toLowerCase()).not.toMatch(/guarantee/);
    expect(text.toLowerCase()).not.toMatch(/lighthouse score of|core web vitals score/);
    expect(text).not.toMatch(/\b\d{2,3}\/100\b/);
  });

  it("uses the exact approved WCAG 2.2 AA-informed phrase and links to the real accessibility page", () => {
    expect(accessibilityNote.body).toMatch(/WCAG 2\.2 AA-informed/);
    expect(accessibilityNote.body.toLowerCase()).not.toMatch(/certified|fully compliant|ada compliant|guaranteed accessib/);
    expect(accessibilityNote.cta.href).toBe("/trust/accessibility/");
  });

  it("reuses the exact canonical company process phases, not a re-authored sequence", () => {
    expect(processPhases).toBe(processContent.model.phases);
    expect(processPhases.map((p) => p.title)).toEqual([
      "Understand",
      "Define",
      "Architect",
      "Build",
      "Verify",
      "Launch & handover",
      "Operate & improve",
    ]);
  });

  it("links to Evidence Pack, FND-05 and UXR-01 with distinct CTA intents", () => {
    const hrefs = relationships.items.map((i) => i.cta.href);
    expect(hrefs).toEqual([
      "/trust/evidence-pack/",
      "/services/web/brand-identity-digital-design-system/",
      "/services/web/ux-audit-conversion-roadmap/",
    ]);
    const seen = new Set<string>();
    for (const item of relationships.items) {
      const key = `${item.cta.label}|${item.cta.href}`;
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    }
  });

  it("does not claim Next.js is objectively superior to WordPress anywhere in the content authority", () => {
    const text = JSON.stringify({ coupledVsComposable, platformPaths }).toLowerCase();
    expect(text).not.toMatch(/next\.js is (better|superior)/);
    expect(text).not.toMatch(/wordpress is (worse|inferior|outdated)/);
  });

  it("contains no em-dash anywhere in the content authority", () => {
    const text = JSON.stringify({
      service,
      commercialOrientation,
      buyerProblem,
      platformStack,
      coupledVsComposable,
      nextjsTreatment,
      contentModelFields,
      headlessContentTreatment,
      platformDecisionIntro,
      platformPaths,
      multilingualNote,
      seoIntro,
      performanceIntro,
      accessibilityNote,
      relationships,
      modernWebPlatformsContent,
    });
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });

  it("does not fabricate an unearned partner/certification claim", () => {
    const text = JSON.stringify({ platformStack, seoIntro, performanceIntro, accessibilityNote });
    expect(text).not.toMatch(/AWS Partner|Microsoft Partner|SOC 2 certified|ISO 27001 certified|WCAG 2\.2 AA certified/i);
  });
});
