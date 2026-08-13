import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Start page (RW-PAGE-07)", () => {
  test("renders the canonical guided experience", async ({ page }) => {
    const response = await page.goto("/start/");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Start with what needs to change.");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/start\/$/);
    await expect(page.getByRole("radio", { name: "Build something new" })).toBeVisible();
    await expect(page.getByRole("tablist")).toHaveCount(0);
    await expect(page.locator("[data-presentation-mode]")).toHaveCount(0);
  });

  test("supports keyboard selection, refinement and revision", async ({ page }) => {
    await page.goto("/start/");
    const build = page.getByRole("radio", { name: "Build something new" });
    await build.focus();
    await page.keyboard.press("Space");
    await expect(build).toBeChecked();

    const website = page.getByRole("radio", { name: "A website or customer experience" });
    await website.focus();
    await page.keyboard.press("Space");
    await expect(page.getByRole("heading", { name: "Shape the experience and its foundation together." })).toBeVisible();
    await expect(page.getByRole("link", { name: /Continue the conversation/ })).toHaveAttribute("href", "/connect/");

    await page.getByRole("radio", { name: "Make our systems work better together" }).check();
    await expect(page.getByRole("radio", { name: "Cloud and platform foundations" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Shape the experience and its foundation together." })).toHaveCount(0);
  });

  test("returns a deterministic uncertain path without fake scoring", async ({ page }) => {
    await page.goto("/start/");
    await page.getByRole("radio", { name: "I am not sure yet" }).check();
    await expect(page.getByRole("heading", { name: "Start by making the problem easier to see." })).toBeVisible();
    await expect(page.getByText("A short discovery conversation", { exact: true })).toBeVisible();
    await expect(page.getByText(/% match|solution score/i)).toHaveCount(0);
  });

  test("works on mobile without overflow", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/start/");
    await page.getByRole("radio", { name: "Help more people find and choose us" }).check();
    await expect(page.getByRole("radio", { name: "Generate more useful enquiries" })).toBeVisible();
    await page.getByRole("radio", { name: "Generate more useful enquiries" }).check();
    await expect(page.getByRole("heading", { name: "Improve the journey from interest to conversation." })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });

  test("remains complete with reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/start/");
    await page.getByRole("radio", { name: "Improve something existing" }).check();
    await page.getByRole("radio", { name: "The technology is hard to run or change" }).check();
    await expect(page.getByRole("heading", { name: "Make the operating problem visible first." })).toBeVisible();
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto("/start/");
      await page.getByRole("radio", { name: "I am not sure yet" }).check();
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
    });
  }
});
