import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Trust Center (RW-PAGE-09)", () => {
  test("renders the complete trust narrative with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto("/trust/");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Trust should leave a record.");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/trust\/$/);

    for (const heading of [
      "Confidence comes from visible operating discipline.",
      "Proof accumulates while the work is happening.",
      "Three trust questions, answered through practice.",
      "What Rive can say is bounded by what Rive can support.",
      "The record should remain useful after the engagement changes hands.",
    ]) {
      await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    }
  });

  test("keeps all six artifacts visible and links to the distinct Evidence Pack and Process routes", async ({ page }) => {
    await page.goto("/trust/");
    for (const artifact of [
      "Scope decisions",
      "Architecture record",
      "QA evidence",
      "Launch checklist",
      "Operations runbook",
      "Improvement backlog",
    ]) {
      await expect(page.getByRole("heading", { name: artifact, exact: true })).toBeVisible();
    }
    await expect(page.getByRole("link", { name: "Explore Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "See the Process" })).toHaveAttribute("href", "/company/process/");
    await expect(page.getByRole("tablist")).toHaveCount(0);
  });

  test("essential trust information is present in server-rendered HTML", async ({ request }) => {
    const response = await request.get("/trust/");
    expect(response.status()).toBe(200);
    const html = await response.text();
    for (const phrase of ["Scope decisions", "Architecture record", "QA evidence", "Operations runbook", "Unearned partner designations"]) {
      expect(html).toContain(phrase);
    }
  });

  test("pins the Evidence Spine narrative only on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/trust/");
    const narrative = page.locator("#evidence-spine-heading").locator("..");
    await expect(narrative).toHaveCSS("position", "sticky");
    await expect(narrative).toHaveCSS("top", "112px");

    await page.setViewportSize({ width: 375, height: 812 });
    await expect(narrative).toHaveCSS("position", "static");
  });

  test("contains no prohibited status claims or badge imagery", async ({ page }) => {
    await page.goto("/trust/");
    const mainText = await page.locator("main").innerText();
    expect(mainText).not.toMatch(/AWS Partner|Microsoft Partner|Solutions Partner/i);
    expect(mainText).not.toMatch(/SOC 2 certified|ISO 27001 certified|HIPAA compliant|GDPR certified|PCI certified/i);
    await expect(page.locator('main img[alt*="technical"]')).toHaveCount(2);
    await expect(page.locator('main img[alt*="badge" i], main img[alt*="certification" i]')).toHaveCount(0);
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
      await page.goto("/trust/");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto("/trust/");
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
    });
  }
});
