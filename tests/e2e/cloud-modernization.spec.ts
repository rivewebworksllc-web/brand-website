import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTE = "/solutions/cloud-modernization/";

test.describe("Cloud Modernization (RW-PAGE-P0-SOLUTIONS-01)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/solutions\/cloud-modernization\/$/);
  });

  test("states real, already-published engagement facts, never a fabricated price", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["OP-18", "AWS Well-Architected Framework Review", "From $6,500", "Cloud Foundation Sprint", "Monthly Cloud Care", "MGT-21"]) {
      expect(html).toContain(phrase);
    }
  });

  test("shows the Six-Pillar Review signature section with all six pillars", async ({ page }) => {
    await page.goto(ROUTE);
    for (const pillar of ["Operational Excellence", "Security", "Reliability", "Performance Efficiency", "Cost Optimization", "Sustainability"]) {
      await expect(page.getByRole("heading", { name: pillar, exact: true })).toBeVisible();
    }
  });

  test("shows the four severity-ranked roadmap bands", async ({ page }) => {
    await page.goto(ROUTE);
    for (const band of ["Critical", "High", "Medium", "Low"]) {
      await expect(page.getByText(band, { exact: true }).first()).toBeVisible();
    }
  });

  test("lists all five real cloud engagement cards with See full scope links to Pricing", async ({ page }) => {
    await page.goto(ROUTE);
    const links = page.getByRole("link", { name: "See full scope on Pricing" });
    await expect(links).toHaveCount(5);
  });

  test("never claims an AWS or Microsoft partner status or certification", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = (await response.text()).toLowerCase();
    expect(html).not.toMatch(/certified|certification|gold partner|partner status/);
  });

  test("links to Evidence Pack, AI & Data Automation, Pricing and Company Process", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "Explore the Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "Explore AI & Data Automation" })).toHaveAttribute("href", "/solutions/ai-data-automation/");
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
