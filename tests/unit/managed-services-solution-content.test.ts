import { describe, expect, it } from "vitest";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { managedServices } from "@/lib/content/pricing";
import {
  assessment,
  buyerPath,
  buyerProblem,
  coverageDomains,
  final,
  hero,
  relationships,
} from "@/lib/content/managed-services-solution";

describe("Managed Care & Advisory content (RW-PAGE-P0-SOLUTIONS-02)", () => {
  it("reuses the exact homepage buyer-path object, not a re-authored copy", () => {
    const homepagePath = homepageFallbackContent.buyerPaths.find((path) => path.title === "Managed Care & Advisory");
    expect(buyerPath).toBe(homepagePath);
    expect(buyerPath.cta.href).toBe("/solutions/managed-services/");
  });

  it("never invents a price: all three coverage domains are direct references into the published managed-services catalog", () => {
    for (const domain of coverageDomains) {
      expect(managedServices).toContain(domain.service);
    }
  });

  it("covers exactly the three real managed-service domains, no invented fourth", () => {
    expect(coverageDomains.map((domain) => domain.service.code)).toEqual(["MGT-03", "MGT-21", "MGT-16"]);
  });

  it("renders the Managed Care Assessment honestly as unresolved, never a fabricated price", () => {
    expect(assessment.body.toLowerCase()).toMatch(/no fixed catalog price|paid discovery/);
    expect(assessment.body).not.toMatch(/\$\d/);
  });

  it("contains no em-dash anywhere in the page content", () => {
    const text = JSON.stringify({ hero, buyerProblem, assessment, relationships, final });
    expect(text).not.toMatch(/[–—]/);
  });

  it("cross-links to the sibling Website & Growth page, not a fabricated destination", () => {
    const sibling = relationships.items.find((item) => item.label === "Website & Growth");
    expect(sibling?.cta.href).toBe("/solutions/web-growth/");
  });

  it("distinguishes the advisory assessment from the recurring tiers (RW-PAGE-P0-SOLUTIONS-02 scope reconciliation)", () => {
    expect(assessment.distinction.toLowerCase()).toMatch(/advisory/);
    expect(assessment.distinction.toLowerCase()).toMatch(/recurring/);
  });

  it("every coverage domain carries its real, already-published exclusions (what is not covered)", () => {
    for (const domain of coverageDomains) {
      expect(domain.service.exclusions.length).toBeGreaterThan(0);
    }
  });

  it("never implies 24/7 support, a SOC/NOC, unlimited support or a guaranteed uptime/response-time promise", () => {
    const text = JSON.stringify({ hero, buyerProblem, assessment, coverageDomains, relationships, final }).toLowerCase();
    expect(text).not.toMatch(/24\/7|24x7|\bsoc\b|\bnoc\b|unlimited support|guaranteed uptime|guaranteed response/);
  });

  it("Managed Website Care's real published uptime disclaimer is a direct object reference, not re-authored", () => {
    const website = coverageDomains.find((domain) => domain.id === "website")!;
    expect(website.service.note).toBe("No uptime guarantee at any tier without a separate SLA-backed upgrade.");
  });
});
