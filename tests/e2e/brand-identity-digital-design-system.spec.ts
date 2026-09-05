import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTE = "/services/web/brand-identity-digital-design-system/";

test.describe("Brand Identity + Digital Design System (RW-PAGE-13)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /\/services\/web\/brand-identity-digital-design-system\/$/,
    );
  });

  test("states the authoritative FND-05 commercial metadata in server-rendered HTML", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["FND-05", "$4,000-$9,500", "2-6 weeks", "E2"]) {
      expect(html).toContain(phrase);
    }
  });

  test("shows the Fragments to System signature section with real fragment labels", async ({ page }) => {
    await page.goto(ROUTE);
    // Scoped to the section itself: "Components" also appears as a plain
    // list item in the unrelated brand-guide-vs-design-system comparison
    // further down the page, so an unscoped locator resolves to two matches.
    const section = page.locator("section", { has: page.getByRole("heading", { name: "The same handful of decisions, made once instead of every time." }) });
    await expect(section.getByText("Button, page A")).toBeVisible();
    await expect(section.getByText("Tokens", { exact: true })).toBeVisible();
    await expect(section.getByText("Primitives", { exact: true })).toBeVisible();
    await expect(section.getByText("Components", { exact: true })).toBeVisible();
    await expect(section.getByText("Patterns", { exact: true })).toBeVisible();
  });

  test("shows the two entry paths and the brand guide vs design system comparison", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByText("Existing identity, inconsistent execution")).toBeVisible();
    await expect(page.getByText("Starting or refreshing the identity")).toBeVisible();
    await expect(page.getByText("Brand guide", { exact: true })).toBeVisible();
    await expect(page.getByText("Digital design system", { exact: true })).toBeVisible();
  });

  test("declares exactly the three deliverable groups and the five exclusions in server-rendered HTML", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of [
      "Figma design-system file",
      "React component-library export",
      "Style guide PDF",
      "Content strategy",
      "Copywriting",
      "Page-design mockups beyond component examples",
      "Website build",
      "CMS implementation",
    ]) {
      expect(html).toContain(phrase);
    }
  });

  test("declares the six-step process, not a generic Discovery/Design/Develop/Launch sequence", async ({ page }) => {
    await page.goto(ROUTE);
    for (const step of ["Inventory", "Normalize", "Tokenize", "Componentize", "Document", "Handoff"]) {
      await expect(page.getByText(step, { exact: true }).first()).toBeVisible();
    }
  });

  test("the component anatomy specimen is reachable via native keyboard-accessible disclosure", async ({ page }) => {
    await page.goto(ROUTE);
    const details = page.locator("details").first();
    await expect(details).toHaveJSProperty("open", false);
    const summary = details.locator("summary");
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(details).toHaveJSProperty("open", true);
    await expect(details.getByText("Focus behavior")).toBeVisible();
  });

  test("declares the BLD-02/MGT-03 attach path and catalog route", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["BLD-02", "MGT-03", "FND-05"]) {
      expect(html).toContain(phrase);
    }
  });

  test("links to Evidence Pack and published Pricing", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "See the Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
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
