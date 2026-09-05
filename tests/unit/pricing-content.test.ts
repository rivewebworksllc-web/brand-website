import { describe, expect, it } from "vitest";
import {
  managedServiceTermNote,
  managedServices,
  packageGroups,
  paidDiscovery,
  pricingContent,
  pricingDisclaimer,
  pricingFaq,
  projectPackages,
} from "@/lib/content/pricing";

describe("Pricing content (RW-PAGE-08B)", () => {
  it("declares exactly eleven project packages, numbered 1-11 without gaps", () => {
    expect(projectPackages).toHaveLength(11);
    expect(projectPackages.map((p) => p.number).slice().sort((a, b) => a - b)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ]);
  });

  it("leaves Package 1's exact starting price unresolved rather than inventing one", () => {
    const packageOne = projectPackages.find((p) => p.number === 1)!;
    expect(packageOne.price.unresolved).toBe(true);
    expect(packageOne.unresolvedFields).toContain("Exact starting price");
  });

  it("leaves Package 10's detail fields unresolved rather than inventing them", () => {
    const packageTen = projectPackages.find((p) => p.number === 10)!;
    expect(packageTen.price.unresolved).toBe(false);
    if (!packageTen.price.unresolved) {
      expect(packageTen.price.from).toBe(6500);
    }
    expect(packageTen.timeline).toBeUndefined();
    expect(packageTen.included).toBeUndefined();
    expect(packageTen.unresolvedFields).toEqual(
      expect.arrayContaining(["Timeline", "Evidence tier", "Detailed inclusions", "Detailed exclusions"]),
    );
  });

  it("matches the v49 starting prices for every resolved package", () => {
    const expected: Record<number, number> = {
      2: 2500,
      3: 8500,
      4: 5500,
      5: 6500,
      6: 8500,
      7: 7500,
      8: 6500,
      9: 9500,
      10: 6500,
    };
    for (const [number, from] of Object.entries(expected)) {
      const pkg = projectPackages.find((p) => p.number === Number(number))!;
      expect(pkg.price.unresolved).toBe(false);
      if (!pkg.price.unresolved) expect(pkg.price.from).toBe(from);
    }
  });

  it("corrects the WAFR floor to $6,500 and Package 7 to include CLD-DR-01", () => {
    const wafr = projectPackages.find((p) => p.id === "aws-wafr-review")!;
    expect(wafr.price.unresolved).toBe(false);
    if (!wafr.price.unresolved) expect(wafr.price.from).toBe(6500);

    const pkg7 = projectPackages.find((p) => p.number === 7)!;
    expect(pkg7.code).toContain("CLD-DR-01");
  });

  it("uses corrected MGT-16 tier bands, not the old $1,500/mo placeholder", () => {
    const mgt16 = managedServices.find((m) => m.code === "MGT-16")!;
    expect(mgt16.tiers.map((t) => t.price)).toEqual([
      "$2,500-$4,500/mo",
      "$5,000-$8,500/mo",
      "$9,000-$15,000/mo",
    ]);
    const text = JSON.stringify(mgt16);
    expect(text).not.toContain("$1,500/mo");
  });

  it("prices MGT-03 and MGT-21 tiers correctly", () => {
    const mgt03 = managedServices.find((m) => m.code === "MGT-03")!;
    expect(mgt03.tiers.map((t) => t.price)).toEqual(["$249/mo", "$599/mo", "$1,799/mo"]);
    const mgt21 = managedServices.find((m) => m.code === "MGT-21")!;
    expect(mgt21.tiers.map((t) => t.price)).toEqual(["$1,500/mo", "$3,500/mo", "$6,500+/mo"]);
  });

  it("does not publish a universal managed-service commitment/notice rule", () => {
    expect(managedServiceTermNote).toBe(
      "Term length, minimum commitment and cancellation notice are defined by the applicable signed SOW or Care Plan.",
    );
    const allManagedText = JSON.stringify(managedServices);
    expect(allManagedText).not.toMatch(/3-month minimum|30 days written notice/i);
  });

  it("prices Paid Discovery at $249 fixed for 60 minutes with no automatic-credit promise", () => {
    expect(paidDiscovery.priceDetail).toBe("$249 fixed");
    expect(paidDiscovery.duration).toBe("60 minutes");
    expect(paidDiscovery.creditNote).toMatch(/not automatically credited/i);
    expect(paidDiscovery.cta.analyticsEvent).toBe("book_discovery");
  });

  it("publishes the exact required pricing disclaimer, visibly", () => {
    expect(pricingDisclaimer).toBe(
      "All prices are starting bands. Final scope and pricing confirmed in Paid Discovery. Cloud consumption, licensing, and third-party fees are not included unless stated.",
    );
  });

  it("declares exactly seven pricing FAQ entries covering all required responsibilities", () => {
    expect(pricingFaq).toHaveLength(7);
    expect(pricingFaq.map((f) => f.id)).toEqual([
      "fixed-prices",
      "discovery-cost",
      "whats-included",
      "what-increases-price",
      "managed-terms",
      "start-smaller",
      "third-party-fees",
    ]);
  });

  it("never claims automatic Paid Discovery credit or affirms universal month-to-month terms in the FAQ", () => {
    const text = JSON.stringify(pricingFaq);
    expect(text).not.toMatch(/automatically credited toward future work\./i);
    // "month-to-month" may appear in the FAQ *question* itself (directive's own wording); the *answer* must
    // never affirm it as a universal fact.
    const managedTermsAnswer = pricingFaq.find((f) => f.id === "managed-terms")!.answer;
    expect(managedTermsAnswer.toLowerCase()).not.toContain("month-to-month");
    expect(managedTermsAnswer).toBe(managedServiceTermNote);
  });

  it("contains no em-dash anywhere in the pricing content authority", () => {
    const text = JSON.stringify({ projectPackages, managedServices, paidDiscovery, pricingContent, pricingFaq });
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });

  it("does not fabricate an unearned partner/certification claim", () => {
    const text = JSON.stringify({ projectPackages, managedServices });
    expect(text).not.toMatch(/AWS Partner|Microsoft Partner|SOC 2 certified|ISO 27001 certified/i);
  });
});

describe("Pricing content - UXR-01 expansion (RW-PRICING-UXR-01A)", () => {
  it("lists UXR-01 exactly once, in a new strategy group, ahead of the existing three families", () => {
    const matches = projectPackages.filter((p) => p.code === "UXR-01");
    expect(matches).toHaveLength(1);
    expect(matches[0].group).toBe("strategy");
    expect(pricingContent.hero.eyebrow).toBeDefined();
    expect(packageGroups[0].id).toBe("strategy");
    expect(packageGroups.map((g) => g.id)).toEqual(["strategy", "web", "ai", "cloud-data"]);
  });

  it("publishes UXR-01's approved commercial facts (from CLM-008), not the family-level band", () => {
    const uxr = projectPackages.find((p) => p.code === "UXR-01")!;
    expect(uxr.name).toBe("UX Audit + Conversion Roadmap");
    expect(uxr.price.unresolved).toBe(false);
    if (!uxr.price.unresolved) {
      expect(uxr.price.from).toBe(3500);
      expect(uxr.price.display).toBe("From $3,500");
    }
    expect(uxr.timeline).toBe("2-4 weeks");
    expect(uxr.evidence).toBe("E2");
  });

  it("states UXR-01's exclusions so the diagnosis/implementation boundary is explicit", () => {
    const uxr = projectPackages.find((p) => p.code === "UXR-01")!;
    expect(uxr.excluded).toEqual([
      "Implementation of changes",
      "Copywriting",
      "New design",
      "A/B testing",
      "Paid media analysis",
    ]);
  });

  it("does not disturb any previously-approved package's number, price or code", () => {
    const byNumber: Record<number, { code: string; from?: number }> = {
      1: { code: "Web launch" },
      2: { code: "AI-10", from: 2500 },
      3: { code: "AI-11 + AI-14", from: 8500 },
      4: { code: "M365-01 + GOV-15", from: 5500 },
      5: { code: "OP-18", from: 6500 },
      6: { code: "CLD-AI-01 + CLD-SEC-02", from: 8500 },
      7: { code: "CLD-SEC-02 + CLD-RES-01 + CLD-DR-01", from: 7500 },
      8: { code: "AI-18 + AI-14", from: 6500 },
      9: { code: "CLD-DATA-03 + CLD-BI-01", from: 9500 },
      10: { code: "OP-10 / CLD-FND-01", from: 6500 },
    };
    for (const [number, expected] of Object.entries(byNumber)) {
      const pkg = projectPackages.find((p) => p.number === Number(number))!;
      expect(pkg.code).toBe(expected.code);
      if (expected.from !== undefined && !pkg.price.unresolved) {
        expect(pkg.price.from).toBe(expected.from);
      }
    }
  });
});
