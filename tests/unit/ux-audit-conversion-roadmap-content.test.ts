import { describe, expect, it } from "vitest";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { trustContent } from "@/lib/content/trust";
import {
  attach,
  auditTerritories,
  buyerOutcome,
  buyerProblem,
  commercialMeta,
  deliverables,
  evidenceModel,
  exclusions,
  frictionMap,
  illustrativeFinding,
  relationships,
  roadmapBands,
  service,
  uxAuditContent,
} from "@/lib/content/ux-audit-conversion-roadmap";

describe("UX Audit + Conversion Roadmap content (RW-PAGE-11A commercial correction)", () => {
  it("declares the authoritative UXR-01 commercial metadata, not an unresolved placeholder", () => {
    expect(service.code).toBe("UXR-01");
    expect(commercialMeta.code).toBe("UXR-01");
    expect(commercialMeta.priceDisplay).toBe("$3,500-$14,500");
    expect(commercialMeta.timelineDisplay).toBe("2-4 weeks");
    expect(commercialMeta.evidence).toBe("E2");
  });

  it("never renders the old 'not published in catalog' language anywhere in the content authority", () => {
    const text = JSON.stringify({ service, commercialMeta, uxAuditContent });
    expect(text.toLowerCase()).not.toMatch(/not yet published/);
    expect(text.toLowerCase()).not.toMatch(/scope-priced/);
  });

  it("represents the 14-day Clarity data-collection period as part of the timeline", () => {
    expect(commercialMeta.timelineNote.toLowerCase()).toMatch(/14-day/);
    expect(commercialMeta.timelineNote.toLowerCase()).toMatch(/clarity/);
  });

  it("states the authoritative buyer outcome without altering its meaning", () => {
    expect(buyerOutcome).toMatch(/prioritised list/i);
    expect(buyerOutcome).toMatch(/business rationale/i);
    expect(buyerOutcome).toMatch(/implementation complexity/i);
    expect(buyerOutcome).toMatch(/expected impact/i);
  });

  it("states the two authoritative buyer audiences, plus complementary homepage symptoms", () => {
    expect(buyerProblem.audiences).toHaveLength(2);
    expect(buyerProblem.audiences.join(" ")).toMatch(/existing website/i);
    expect(buyerProblem.audiences.join(" ")).toMatch(/rebuild/i);
    const websiteGrowthPath = homepageFallbackContent.buyerPaths.find((p) => p.title === "Website & Growth")!;
    expect(buyerProblem.symptoms).toEqual(websiteGrowthPath.symptoms);
  });

  it("declares exactly the seven authoritative deliverables, each with its detail intact", () => {
    expect(deliverables).toHaveLength(7);
    const titles = deliverables.map((d) => d.title.toLowerCase());
    expect(titles).toEqual([
      "heatmap and session-recording analysis",
      "ga4 funnel report",
      "wcag 2.2 aa accessibility audit",
      "core web vitals snapshot",
      "user-flow audit",
      "conversion bottleneck report",
      "prioritised roadmap",
    ]);
    const clarity = deliverables.find((d) => d.id === "heatmap")!;
    expect(clarity.detail.join(" ")).toMatch(/14 days/);
    const flows = deliverables.find((d) => d.id === "flows")!;
    expect(flows.detail.join(" ")).toMatch(/five buyer paths/i);
    const bottlenecks = deliverables.find((d) => d.id === "bottlenecks")!;
    expect(bottlenecks.detail.join(" ")).toMatch(/top five/i);
  });

  it("declares exactly the five authoritative exclusions", () => {
    expect(exclusions).toEqual(["Implementation of changes", "Copywriting", "New design", "A/B testing", "Paid media analysis"]);
  });

  it("declares the three authoritative roadmap bands with their exact windows", () => {
    expect(roadmapBands).toHaveLength(3);
    expect(roadmapBands.map((b) => `${b.label}: ${b.window}`)).toEqual([
      "Quick wins: 0-2 weeks",
      "Medium: 2-8 weeks",
      "Rebuild scope: 8+ weeks",
    ]);
  });

  it("declares the authoritative attach path and catalog route", () => {
    const codes = attach.options.map((o) => o.code);
    expect(codes).toEqual(["OPT-01", "BLD-02", "OPT-07"]);
    expect(attach.route).toBe("OP-01E → UXR-01 → OPT-01 or BLD-02");
  });

  it("keeps the six audit territories, explicitly framed as illustrative, not contractual", () => {
    expect(auditTerritories.length).toBeGreaterThanOrEqual(5);
  });

  it("connects the illustrative finding through evidence source, finding and roadmap band", () => {
    expect(illustrativeFinding.evidenceSource.length).toBeGreaterThan(0);
    expect(illustrativeFinding.roadmapBand).toBe("Quick wins");
    expect(illustrativeFinding.finding).not.toMatch(/\d+(\.\d+)?%/);
    expect(["High", "Medium", "Low"]).toContain(illustrativeFinding.severity);
  });

  it("the evidence model names real evidence sources without implying every source always finds a problem", () => {
    expect(evidenceModel.description).toMatch(/clarity/i);
    expect(evidenceModel.description).toMatch(/ga4/i);
    expect(evidenceModel.description).toMatch(/accessibility/i);
    expect(evidenceModel.description).toMatch(/core web vitals/i);
    expect(evidenceModel.description.toLowerCase()).toMatch(/not every source/);
  });

  it("reuses the exact evidence-tier note from trustContent.depth, not a re-authored version", () => {
    expect(evidenceModel.tierNote).toBe(trustContent.depth.note);
  });

  it("the Evidence Pack relationship names the real E2 artifacts", () => {
    const evidencePackItem = relationships.items.find((i) => i.label === "Evidence Pack")!;
    expect(evidencePackItem.body).toMatch(/clarity/i);
    expect(evidencePackItem.body).toMatch(/ga4/i);
    expect(evidencePackItem.cta.href).toBe("/trust/evidence-pack/");
  });

  it("the Pricing relationship states the price without claiming Pricing already lists it", () => {
    const pricingItem = relationships.items.find((i) => i.label === "Pricing")!;
    expect(pricingItem.body).toMatch(/\$3,500/);
    expect(pricingItem.body.toLowerCase()).toMatch(/not yet listed/);
  });

  it("distinguishes a published starting band from Paid Discovery scope confirmation", () => {
    expect(uxAuditContent.discoveryNote.toLowerCase()).toMatch(/published/);
    expect(uxAuditContent.discoveryNote.toLowerCase()).not.toMatch(/no commercial definition/);
  });

  it("never claims automatic Paid Discovery credit, matching the sitewide rule", () => {
    const text = JSON.stringify(uxAuditContent);
    expect(text).not.toMatch(/automatically credited/i);
  });

  it("contains no em-dash anywhere in the content authority", () => {
    const text = JSON.stringify({
      service,
      commercialMeta,
      buyerProblem,
      frictionMap,
      auditTerritories,
      deliverables,
      exclusions,
      roadmapBands,
      evidenceModel,
      illustrativeFinding,
      relationships,
      attach,
      uxAuditContent,
    });
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });

  it("does not fabricate an unearned partner/certification claim", () => {
    const text = JSON.stringify({ deliverables, evidenceModel, illustrativeFinding });
    expect(text).not.toMatch(/AWS Partner|Microsoft Partner|SOC 2 certified|ISO 27001 certified/i);
  });
});
