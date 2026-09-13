import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTE = "/solutions/web-growth/";

test.describe("Website & Growth (RW-PAGE-P0-SOLUTIONS-02)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/solutions\/web-growth\/$/);
  });

  test("states real, already-published engagement facts, including the honest unresolved build price", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["UXR-01", "From $3,500", "Website Launch + LLM Discoverability", "Scope-priced", "Managed Website Care"]) {
      expect(html).toContain(phrase);
    }
  });

  test("shows the Diagnose or Build fork with both real paths", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByText("Diagnose first", { exact: true })).toBeVisible();
    await expect(page.getByText("Build now", { exact: true })).toBeVisible();
  });

  test("lists both real website engagement cards, one linking to the full UX Audit page", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "See the full UX Audit page" })).toHaveAttribute(
      "href",
      "/services/web/ux-audit-conversion-roadmap/",
    );
    await expect(page.getByRole("link", { name: "See full scope on Pricing" })).toHaveAttribute("href", "/pricing/");
  });

  test("links to Evidence Pack, Managed Care & Advisory, Modern Web Platforms, FND-05 and Company Process", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "Explore the Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "Explore Managed Care & Advisory" })).toHaveAttribute("href", "/solutions/managed-services/");
    await expect(page.getByRole("link", { name: "Explore Modern Web Platforms" })).toHaveAttribute("href", "/services/web/modern-web-platforms/");
    await expect(page.getByRole("link", { name: "Explore Brand Identity + Digital Design System" })).toHaveAttribute(
      "href",
      "/services/web/brand-identity-digital-design-system/",
    );
    await expect(page.getByRole("link", { name: "See Delivery Process" })).toHaveAttribute("href", "/company/process/");
  });

  test("never links to a still-missing canonical destination (WordPress, Ecommerce, SEO/LLM, etc.)", async ({ page }) => {
    await page.goto(ROUTE);
    const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((el) => el.getAttribute("href")));
    for (const href of hrefs) {
      expect(href).not.toMatch(/wordpress-build-migration|\/ecommerce\/|seo-llm-discoverability|ux-research-conversion-design-sprint|digital-solutions-discovery-blueprint/);
    }
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
