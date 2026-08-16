import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Pricing (RW-PAGE-08B)", () => {
  test("renders the pricing page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto("/pricing/");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/pricing\/$/);
  });

  test("shows all ten project packages grouped into Web / AI / Cloud & Data", async ({ page }) => {
    await page.goto("/pricing/");
    for (const heading of ["Web", "AI", "Cloud & Data"]) {
      await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    }
    for (const name of [
      "Website Launch + LLM Discoverability",
      "AI Readiness Sprint",
      "Secure RAG + Knowledge Search",
      "Microsoft 365 Copilot Readiness + Adoption",
      "AWS Well-Architected Framework Review",
      "AI-Ready Cloud Foundation",
      "Cloud Security + Resilience Baseline",
      "AI Red Teaming + Guardrails Validation",
      "Microsoft Fabric / Analytics Quickstart",
      "Cloud Foundation Sprint",
    ]) {
      await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
    }
  });

  test("shows the pricing disclaimer visibly, not as hidden fine print", async ({ page }) => {
    await page.goto("/pricing/");
    await expect(
      page.getByText(
        "All prices are starting bands. Final scope and pricing confirmed in Paid Discovery.",
      ),
    ).toBeVisible();
  });

  test("shows Paid Discovery pricing and all three managed-service families", async ({ page }) => {
    await page.goto("/pricing/");
    await expect(page.getByText("$249 fixed", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Managed Website Care" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Monthly Cloud Care" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "AI Ops + Eval Retainer" })).toBeVisible();
  });

  test("package inclusions/exclusions are reachable via native keyboard-accessible disclosure", async ({ page }) => {
    await page.goto("/pricing/");
    const details = page.locator("details").first();
    await expect(details).toHaveJSProperty("open", false);
    await details.locator("summary").click();
    await expect(details).toHaveJSProperty("open", true);
  });

  test("essential pricing and FAQ content is present in server-rendered HTML", async ({ request }) => {
    const response = await request.get("/pricing/");
    expect(response.status()).toBe(200);
    const html = await response.text();
    for (const phrase of [
      "Website Launch + LLM Discoverability",
      // Not "From $2,500": RW-PAGE-08C's price-plate redesign renders the
      // "From" eyebrow and the figure as separate elements (pre-existing,
      // unrelated to RW-PAGE-08D), so they no longer sit adjacent in raw HTML.
      "$2,500",
      "$249 fixed",
      "Are these fixed prices?",
      "starting bands",
      "application/ld+json",
    ]) {
      expect(html).toContain(phrase);
    }
  });

  test("all seven FAQ questions are visible", async ({ page }) => {
    await page.goto("/pricing/");
    for (const question of [
      "Are these fixed prices?",
      "What does Paid Discovery cost?",
      "What is included in the displayed price?",
      "What can increase the final price?",
      "Are managed services month-to-month?",
      "Can I start with a smaller engagement and expand later?",
      "Are cloud, software or third-party fees included?",
    ]) {
      await expect(page.getByText(question, { exact: true })).toBeVisible();
    }
  });

  test("managed-service comparison detail is reachable via native keyboard-accessible disclosure", async ({ page }) => {
    await page.goto("/pricing/");
    const details = page.locator("details").filter({ hasText: "Compare service levels" }).first();
    const summary = details.locator("summary");
    await expect(details).toHaveJSProperty("open", false);
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(details).toHaveJSProperty("open", true);
    await expect(details.getByText("Scope boundaries")).toBeVisible();
  });

  test("managed-service scope boundaries are present in server-rendered HTML (discoverable, not hidden)", async ({ request }) => {
    const response = await request.get("/pricing/");
    const html = await response.text();
    for (const phrase of ["Scope boundaries", "Compare service levels", "New page builds", "Cloud consumption"]) {
      expect(html).toContain(phrase);
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
      await page.goto("/pricing/");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto("/pricing/");
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
    });
  }
});
