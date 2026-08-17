import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTE = "/services/web/ux-audit-conversion-roadmap/";

test.describe("UX Audit + Conversion Roadmap (RW-PAGE-11 / RW-PAGE-11A)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/services\/web\/ux-audit-conversion-roadmap\/$/);
  });

  test("shows all five friction-map stages by title", async ({ page }) => {
    await page.goto(ROUTE);
    for (const title of ["The first several seconds", "Finding a way around", "Deciding whether to trust it", "Attempting the next step", "Knowing it worked"]) {
      await expect(page.getByRole("heading", { name: title, exact: true })).toBeVisible();
    }
  });

  test("states the authoritative UXR-01 commercial metadata, and never the old unresolved language", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["UXR-01", "$3,500-$14,500", "2-4 weeks", "E2"]) {
      expect(html).toContain(phrase);
    }
    expect(html.toLowerCase()).not.toMatch(/not yet published in the catalog/);
    expect(html.toLowerCase()).not.toMatch(/scope-priced/);
  });

  test("represents the 14-day Clarity collection period, GA4, WCAG and Core Web Vitals deliverables", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of [
      "14 days",
      "Microsoft Clarity",
      "GA4 funnel report",
      "WCAG 2.2 AA accessibility audit",
      "Core Web Vitals snapshot",
      "Five buyer paths",
      "Top five friction points",
    ]) {
      expect(html).toContain(phrase);
    }
  });

  test("represents the three authoritative roadmap bands", async ({ page }) => {
    await page.goto(ROUTE);
    // Scoped to the roadmap section's own accessible region: "Quick wins"/
    // "0-2 weeks" etc. also appear (hidden, inside a closed <details>) in
    // the "Prioritised roadmap" deliverable's sub-detail list earlier on
    // the page, so an unscoped .first() can resolve to a hidden match.
    const roadmapSection = page.getByRole("region", { name: "Every finding is placed into one of three bands, not a flat priority list." });
    await expect(roadmapSection.getByText("Quick wins", { exact: true })).toBeVisible();
    await expect(roadmapSection.getByText("0-2 weeks")).toBeVisible();
    await expect(roadmapSection.getByText("Medium", { exact: true })).toBeVisible();
    await expect(roadmapSection.getByText("2-8 weeks")).toBeVisible();
    await expect(roadmapSection.getByText("Rebuild scope", { exact: true })).toBeVisible();
    await expect(roadmapSection.getByText("8+ weeks")).toBeVisible();
  });

  test("represents the authoritative exclusions and the OPT-01/BLD-02/OPT-07 attach pathway", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of [
      "Implementation of changes",
      "Copywriting",
      "New design",
      "A/B testing",
      "Paid media analysis",
      "OPT-01",
      "BLD-02",
      "OPT-07",
    ]) {
      expect(html).toContain(phrase);
    }
  });

  test("the illustrative finding is reachable via native keyboard-accessible disclosure and labeled illustrative", async ({ page }) => {
    await page.goto(ROUTE);
    const details = page.locator("details").first();
    await expect(details).toHaveJSProperty("open", false);
    await details.locator("summary").click();
    await expect(details).toHaveJSProperty("open", true);
    await expect(details.getByText("Sample, illustrative only")).toBeVisible();
  });

  test("links to Evidence Pack, Work and Pricing", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "See the Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "See selected work" })).toHaveAttribute("href", "/work/");
    await expect(page.getByRole("link", { name: "See published pricing" }).first()).toHaveAttribute("href", "/pricing/");
  });

  test("has no horizontal overflow at required responsive widths", async ({ page }) => {
    for (const viewport of [
      { width: 320, height: 800 },
      { width: 375, height: 812 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1280, height: 800 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(ROUTE);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });

  test("remains usable at 200% zoom (simulated via a narrow, tall viewport)", async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 1200 });
    await page.goto(ROUTE);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto(ROUTE);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
    });
  }
});
