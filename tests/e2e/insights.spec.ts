import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Insights page (RW-PAGE-03)", () => {
  test("renders the complete interpretive narrative with one H1", async ({ page }) => {
    await page.goto("/resources/insights/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Perspective on the systems shaping digital work.");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const heading of ["Latest thinking", "A change is useful when its consequence becomes clear.", "Browse by perspective", "Not every announcement changes the system.", "Browse all insights", "Thinking through a decision inside your own system?"]) await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("analysis lens and topic stream are keyboard operable", async ({ page }) => {
    await page.goto("/resources/insights/");
    const tradeoff = page.getByRole("button", { name: /Trade-off/ });
    await tradeoff.focus();
    await page.keyboard.press("Enter");
    await expect(tradeoff).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByText("What becomes easier or harder?", { exact: true })).toBeVisible();
    const cloud = page.getByRole("button", { name: "Cloud", exact: true });
    await cloud.click();
    await expect(cloud).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("region", { name: "Browse by perspective" }).getByRole("heading", { name: "Cloud choices should follow operating reality" })).toBeVisible();
  });

  test("Resources exposes Insights on desktop and mobile", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/resources/insights/");
    const resources = page.getByRole("navigation", { name: "Primary" }).getByRole("button", { name: "Resources", exact: true });
    await resources.click();
    await expect(page.locator("#megamenu-resources").getByRole("link", { name: "Insights", exact: true })).toHaveAttribute("href", "/resources/insights/");
    await page.setViewportSize({ width: 375, height: 812 });
    await page.getByRole("button", { name: "Open menu" }).click();
    const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
    await drawer.getByRole("button", { name: "Resources", exact: true }).click();
    await expect(drawer.getByRole("link", { name: "Insights", exact: true })).toHaveAttribute("href", "/resources/insights/");
  });

  test("the former flat route remains absent", async ({ page }) => {
    expect((await page.goto("/insights/"))?.status()).toBe(404);
  });

  test("has no overflow and keeps controls usable on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/resources/insights/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const button of await page.locator("main button").all()) expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  });

  test("reduced motion retains critical content", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/resources/insights/");
    await expect(page.getByRole("heading", { name: "Browse all insights" })).toBeVisible();
  });

  for (const theme of ["light", "dark"] as const) test(`passes axe in ${theme} theme`, async ({ page }) => {
    await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
    await page.goto("/resources/insights/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical")).toEqual([]);
  });
});
