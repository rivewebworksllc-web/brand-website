import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Guides page (RW-PAGE-02)", () => {
  test("renders the complete editorial architecture with one H1", async ({ page }) => {
    await page.goto("/resources/guides/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Practical thinking for systems that have to work in the real world.");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const heading of ["How to know when your website needs a rebuild", "Explore the library", "Useful guidance should help you make a decision.", "Browse by discipline", "Reading about the problem is sometimes enough. Sometimes it needs fixing."]) {
      await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    }
  });

  test("filters the resource library without fabricating article routes", async ({ page }) => {
    await page.goto("/resources/guides/");
    await expect(page.getByRole("article")).toHaveCount(7);
    const ai = page.getByRole("tab", { name: "AI", exact: true });
    await ai.click();
    await expect(ai).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("article")).toHaveCount(2);
    await expect(page.getByRole("heading", { name: "What governed AI looks like in practice" })).toBeVisible();
    await expect(page.locator("main article a[href]")).toHaveCount(0);
  });

  test("Resources remains a trigger and exposes the real Guides destination", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/resources/guides/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    const resources = nav.getByRole("button", { name: "Resources", exact: true });
    await expect(resources).toHaveAttribute("aria-expanded", "false");
    await resources.click();
    await expect(resources).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#megamenu-resources").getByRole("link", { name: "Guides", exact: true })).toHaveAttribute("href", "/resources/guides/");
    await expect(nav.getByRole("link", { name: "Resources", exact: true })).toHaveCount(0);
  });

  test("mobile Resources disclosure navigates Guides to the canonical nested route", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
    await drawer.getByRole("button", { name: "Resources", exact: true }).click();
    const guides = drawer.getByRole("link", { name: "Guides", exact: true });
    await expect(guides).toHaveAttribute("href", "/resources/guides/");
    await guides.click();
    await expect(page).toHaveURL(/\/resources\/guides\/$/);
  });

  test("the former flat route is not a duplicate Guides implementation", async ({ page }) => {
    const response = await page.goto("/guides/");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
  });

  test("has no horizontal overflow or undersized filters at mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/resources/guides/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const button of await page.getByRole("tab").all()) {
      expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    }
  });

  test("reduced motion retains all content and collapses transition duration", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/resources/guides/");
    await expect(page.getByRole("heading", { name: "Browse by discipline" })).toBeVisible();
    const duration = await page.getByRole("tab", { name: "Web", exact: true }).evaluate((node) => getComputedStyle(node).transitionDuration);
    expect(duration).toMatch(/1e-05s|0\.00001s|0\.01ms|0s/);
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} theme`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto("/resources/guides/");
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical")).toEqual([]);
    });
  }
});
