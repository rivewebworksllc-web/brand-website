import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Process page (RW-PAGE-05)", () => {
  test("renders the complete methodology with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto("/company/process/");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("The build is only one part of the work.");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

    for (const heading of [
      "A clear direction, with room to learn.",
      "Decisions should survive the project.",
      "You should know where the work stands.",
      "Different work. The same discipline.",
      "Questions about the process",
      "Bring us the problem before you have the perfect brief.",
    ]) {
      await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    }

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/company\/process\/$/);
    await expect(page.getByRole("list", { name: "Rive engagement responsibilities" }).locator(":scope > li")).toHaveCount(7);
    await expect(page.getByText("Return path:", { exact: true })).toHaveCount(3);
  });

  test("Company remains a disclosure parent and exposes Process on desktop and mobile", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/company/process/");
    const company = page.getByRole("navigation", { name: "Primary" }).getByRole("button", { name: "Company", exact: true });
    await company.click();
    await expect(company).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#megamenu-company").getByRole("link", { name: "Process", exact: true })).toHaveAttribute("href", "/company/process/");

    await page.setViewportSize({ width: 375, height: 812 });
    await page.getByRole("button", { name: "Open menu" }).click();
    const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
    await drawer.getByRole("button", { name: "Company", exact: true }).click();
    await expect(drawer.getByRole("link", { name: "Process", exact: true })).toHaveAttribute("href", "/company/process/");
  });

  test("keeps the model understandable without presentation controls", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/company/process/");
    await expect(page.getByRole("tablist")).toHaveCount(0);
    await expect(page.locator("[data-presentation-mode]")).toHaveCount(0);
    for (const phase of ["Understand", "Define", "Architect", "Build", "Verify", "Launch & handover", "Operate & improve"]) {
      await expect(page.getByRole("heading", { name: phase, exact: true })).toBeVisible();
    }
  });

  test("FAQ is keyboard-operable and reports disclosure state", async ({ page }) => {
    await page.goto("/company/process/");
    const question = page.getByRole("button", { name: "What happens if requirements change?" });
    await expect(question).toHaveAttribute("aria-expanded", "false");
    await question.focus();
    await page.keyboard.press("Enter");
    await expect(question).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByText(/effect on scope, architecture, timing and responsibility/i)).toBeVisible();
  });

  test("has no horizontal overflow at required responsive widths", async ({ page }) => {
    for (const viewport of [
      { width: 375, height: 812 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1280, height: 800 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/company/process/");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto("/company/process/");
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
    });
  }
});
