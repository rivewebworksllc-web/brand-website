import { describe, expect, it } from "vitest";
import { homepageFallbackContent } from "@/lib/content/homepage";
import { projectPackages } from "@/lib/content/pricing";
import {
  architectureNote,
  brandNote,
  buyerPath,
  buyerProblem,
  final,
  forkPaths,
  hero,
  heroPanelEngagements,
  managedFollowOn,
  relationships,
} from "@/lib/content/web-growth";

describe("Website & Growth content (RW-PAGE-P0-SOLUTIONS-02)", () => {
  it("reuses the exact homepage buyer-path object, not a re-authored copy", () => {
    const homepagePath = homepageFallbackContent.buyerPaths.find((path) => path.title === "Website & Growth");
    expect(buyerPath).toBe(homepagePath);
    expect(buyerPath.cta.href).toBe("/solutions/web-growth/");
  });

  it("never invents a price: both engagements are direct references into the published pricing catalog", () => {
    for (const pkg of heroPanelEngagements) {
      expect(projectPackages).toContain(pkg);
    }
  });

  it("lists exactly the two real website engagements, no invented third", () => {
    expect(heroPanelEngagements.map((pkg) => pkg.id)).toEqual([
      "ux-audit-conversion-roadmap",
      "website-launch-llm-discoverability",
    ]);
  });

  it("renders the build package's unresolved price honestly, never a fabricated figure", () => {
    const buildPkg = heroPanelEngagements[1];
    expect(buildPkg.price.unresolved).toBe(true);
    expect(buildPkg.price.display).toBe("Scope-priced");
  });

  it("declares a two-path fork, Diagnose and Build, each carrying a real package reference", () => {
    expect(forkPaths.map((path) => path.label)).toEqual(["Diagnose first", "Build now"]);
    expect(forkPaths[0].pkg.id).toBe("ux-audit-conversion-roadmap");
    expect(forkPaths[1].pkg.id).toBe("website-launch-llm-discoverability");
  });

  it("attaches the real Managed Website Care managed follow-on", () => {
    expect(managedFollowOn.code).toBe("MGT-03");
  });

  it("contains no em-dash anywhere in the page content", () => {
    const text = JSON.stringify({ hero, buyerProblem, relationships, final, forkPaths });
    expect(text).not.toMatch(/[–—]/);
  });

  it("cross-links to the sibling Managed Care & Advisory page, not a fabricated destination", () => {
    const sibling = relationships.items.find((item) => item.label === "Managed Care & Advisory");
    expect(sibling?.cta.href).toBe("/solutions/managed-services/");
  });

  it("references the real, already-implemented FND-05 brand/design-system page (RW-PAGE-P0-SOLUTIONS-02 scope reconciliation)", () => {
    expect(brandNote.cta.href).toBe("/services/web/brand-identity-digital-design-system/");
  });

  it("never links to a canonical destination that does not yet exist in this repository", () => {
    const links = [architectureNote.cta.href, brandNote.cta.href, ...relationships.items.map((item) => item.cta.href)];
    for (const href of links) {
      expect(href).not.toMatch(/wordpress-build-migration|\/ecommerce\/|seo-llm-discoverability|ux-research-conversion-design-sprint|digital-solutions-discovery-blueprint/);
    }
  });

  it("never claims guaranteed conversion, ranking or revenue outcomes", () => {
    const text = JSON.stringify({ hero, buyerProblem, final, forkPaths, architectureNote, brandNote }).toLowerCase();
    expect(text).not.toMatch(/guarantee(d)? (conversion|ranking|traffic|revenue)/);
  });
});
