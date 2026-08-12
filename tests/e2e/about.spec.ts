import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("About page (RW-PAGE-04)", () => {
  test("renders the complete organisational narrative with one H1 and canonical metadata", async ({ page }) => {
    await page.goto("/company/about/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Digital work is rarely just one discipline.");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const heading of ["One team across connected disciplines.", "The boundaries are artificial. The consequences are not.", "Principles that shape the work.", "Capability without accountability is not enough.", "Systems are built for people. And by people.", "What working with Rive should make clearer.", "The work should leave a record.", "Continue through Company."]) await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/company\/about\/$/);
    await expect(page.locator("main [role=img]")).toHaveCount(3);
  });

  test("Company remains a trigger and exposes About on desktop and mobile", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/company/about/");
    const company = page.getByRole("navigation", { name: "Primary" }).getByRole("button", { name: "Company", exact: true });
    await company.click();
    await expect(company).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#megamenu-company").getByRole("link", { name: "About", exact: true })).toHaveAttribute("href", "/company/about/");

    await page.setViewportSize({ width: 375, height: 812 });
    await page.getByRole("button", { name: "Open menu" }).click();
    const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
    await drawer.getByRole("button", { name: "Company", exact: true }).click();
    await expect(drawer.getByRole("link", { name: "About", exact: true })).toHaveAttribute("href", "/company/about/");
  });

  test("connected disciplines use presentation mode and permanently yield after selection", async ({ page }) => {
    await page.clock.install();
    await page.goto("/company/about/");
    const tablist = page.getByRole("tablist", { name: "Connected Rive disciplines" });
    const presentation = tablist.locator("..");
    await presentation.scrollIntoViewIfNeeded();
    await page.mouse.move(0, 0);
    await expect(tablist.getByRole("tab").nth(0)).toHaveAttribute("aria-selected", "true");
    await expect(presentation).toHaveAttribute("data-presentation-mode", "presentation");
    await page.clock.fastForward(7_100);
    await expect(tablist.getByRole("tab").nth(1)).toHaveAttribute("aria-selected", "true");
    const manual = tablist.getByRole("tab", { name: /Automation/ });
    await manual.click();
    await expect(presentation).toHaveAttribute("data-presentation-mode", "manual");
    await page.clock.fastForward(14_200);
    await expect(manual).toHaveAttribute("aria-selected", "true");
  });

  test("reduced motion starts the connected disciplines in manual mode", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/company/about/");
    const presentation = page.getByRole("tablist", { name: "Connected Rive disciplines" }).locator("..");
    await presentation.scrollIntoViewIfNeeded();
    await expect(presentation).toHaveAttribute("data-presentation-mode", "manual");
    await expect(presentation.locator("[data-presentation-progress]")).toHaveCount(0);
  });

  test("does not create a flat About duplicate and does not fabricate organisational scale", async ({ page }) => {
    expect((await page.goto("/about/"))?.status()).toBe(404);
    await page.goto("/company/about/");
    const text = await page.locator("main").innerText();
    expect(text).not.toMatch(/\b(CEO|CTO|award-winning|certified partner|global offices?|employees?|clients served|founded in)\b/i);
    expect(text).not.toMatch(/\d+%/);
  });

  test("has no horizontal overflow and keeps presentation controls usable on mobile and tablet", async ({ page }) => {
    for (const viewport of [{ width: 375, height: 812 }, { width: 768, height: 1024 }, { width: 1024, height: 768 }]) {
      await page.setViewportSize(viewport);
      await page.goto("/company/about/");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      for (const button of await page.getByRole("tablist", { name: "Connected Rive disciplines" }).getByRole("tab").all()) expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    }
  });

  for (const theme of ["light", "dark"] as const) test(`passes axe in ${theme} theme`, async ({ page }) => {
    await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
    await page.goto("/company/about/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
  });
});
