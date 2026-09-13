import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTE = "/solutions/managed-services/";

test.describe("Managed Care & Advisory (RW-PAGE-P0-SOLUTIONS-02)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/solutions\/managed-services\/$/);
  });

  test("states real, already-published managed-service facts, never a fabricated price", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["MGT-03", "Managed Website Care", "$249/mo", "MGT-21", "Monthly Cloud Care", "$1,500/mo", "MGT-16", "AI Ops + Eval Retainer"]) {
      expect(html).toContain(phrase);
    }
  });

  test("never states a fixed price for the Managed Care Assessment itself", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    expect(html.toLowerCase()).not.toMatch(/managed care assessment.{0,80}\$\d/);
  });

  test("never implies 24/7 support, a SOC/NOC, unlimited support or a guaranteed uptime/response-time promise", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = (await response.text()).toLowerCase();
    expect(html).not.toMatch(/24\/7|24x7|\bsoc\b|\bnoc\b|unlimited support|guaranteed uptime|guaranteed response/);
  });

  test("shows what's not covered and the real published uptime disclaimer, distinguishing advisory from recurring", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["Not covered at this tier", "New page builds", "No uptime guarantee at any tier", "advisory", "recurring"]) {
      expect(html).toContain(phrase);
    }
  });

  test("shows the Coverage Register with all three real domains", async ({ page }) => {
    await page.goto(ROUTE);
    for (const domain of ["Website", "Cloud", "AI & Automation"]) {
      await expect(page.getByRole("heading", { name: domain, exact: true })).toBeVisible();
    }
  });

  test("links to Evidence Pack, Website & Growth, Pricing and Company Process", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "Explore the Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "Explore Website & Growth" })).toHaveAttribute("href", "/solutions/web-growth/");
    await expect(page.getByRole("link", { name: "See published pricing" }).first()).toHaveAttribute("href", "/pricing/");
    await expect(page.getByRole("link", { name: "See Delivery Process" })).toHaveAttribute("href", "/company/process/");
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
