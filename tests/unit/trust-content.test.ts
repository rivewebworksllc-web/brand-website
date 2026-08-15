import { describe, expect, it } from "vitest";
import { trustContent } from "@/lib/content/trust";

describe("Trust Center content (RW-PAGE-09)", () => {
  it("preserves the six authoritative Evidence Pack records in order", () => {
    expect(trustContent.evidence.artifacts.map((artifact) => artifact.title)).toEqual([
      "Scope decisions",
      "Architecture record",
      "QA evidence",
      "Launch checklist",
      "Operations runbook",
      "Improvement backlog",
    ]);
  });

  it("keeps Trust and Evidence Pack as distinct routes", () => {
    expect(trustContent.hero.primary.href).toBe("/trust/evidence-pack/");
    expect(trustContent.routes.items[0].cta.href).toBe("/trust/evidence-pack/");
    expect(trustContent.routes.items[1].cta.href).toBe("/company/process/");
  });

  it("contains no prohibited claim language or unsupported status wording", () => {
    const text = JSON.stringify(trustContent);
    expect(text).not.toMatch(/AWS Partner|Microsoft Partner|Solutions Partner/i);
    expect(text).not.toMatch(/SOC 2 certified|ISO 27001 certified|HIPAA compliant|GDPR certified|PCI certified/i);
    expect(text).not.toMatch(/100% secure|guaranteed uptime|enterprise-grade security/i);
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });
});
