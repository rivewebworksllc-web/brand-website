import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Evidence Pack (RW-PAGE-10)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto("/trust/evidence-pack/");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/trust\/evidence-pack\/$/);
  });

  test("shows all six evidence artifacts by title", async ({ page }) => {
    await page.goto("/trust/evidence-pack/");
    for (const title of [
      "Scope decisions",
      "Architecture record",
      "QA evidence",
      "Launch checklist",
      "Operations runbook",
      "Improvement backlog",
    ]) {
      await expect(page.getByRole("heading", { name: title, exact: true })).toBeVisible();
    }
  });

  test("sample views are reachable via native keyboard-accessible disclosure and labeled illustrative", async ({ page }) => {
    await page.goto("/trust/evidence-pack/");
    const details = page.locator("details").first();
    await expect(details).toHaveJSProperty("open", false);
    await details.locator("summary").click();
    await expect(details).toHaveJSProperty("open", true);
    await expect(details.getByText("Sample, illustrative only")).toBeVisible();
  });

  test("every sample-view disclosure carries the illustrative-only label (essential HTML)", async ({ request }) => {
    const response = await request.get("/trust/evidence-pack/");
    const html = await response.text();
    // Next.js RSC streaming renders each static string once in the DOM and
    // once more in the flight-data payload script, so 6 artifacts yields 12
    // raw occurrences (same duplication pattern as Pricing's "Compare
    // service levels" assertions) - assert "at least 6", not an exact
    // multiple tied to a Next.js internal that could change.
    const occurrences = html.match(/Sample, illustrative only/g) ?? [];
    expect(occurrences.length).toBeGreaterThanOrEqual(6);
  });

  test("essential content is present in server-rendered HTML", async ({ request }) => {
    const response = await request.get("/trust/evidence-pack/");
    expect(response.status()).toBe(200);
    const html = await response.text();
    for (const phrase of [
      "Six records",
      "Scope decisions",
      "Improvement backlog",
      "Evidence tier",
      "See the claim boundary",
      "application/ld+json",
    ]) {
      expect(html).toContain(phrase);
    }
  });

  test("links to Process and Trust Center without duplicating Trust's full claim panel", async ({ page }) => {
    await page.goto("/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "See the Process" })).toHaveAttribute("href", "/company/process/");
    await expect(page.getByRole("link", { name: "Back to Trust Center" })).toHaveAttribute("href", "/trust/");
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
      await page.goto("/trust/evidence-pack/");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto("/trust/evidence-pack/");
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
    });
  }
});
