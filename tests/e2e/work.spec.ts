import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Work page (RW-PAGE-01B)", () => {
  test("renders the editorial narrative with one H1 and every primary section", async ({ page }) => {
    await page.goto("/work/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("The work is the system, not just the screen.");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const heading of ["What the work can include", "What you see is only one layer.", "Selected work, prepared properly.", "Know what was decided, built, tested and handed over", "One accountable team.", "Frequently asked questions", "Have something that needs building, modernising or connecting?"]) {
      await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    }
  });

  test("engagement and system reveals are keyboard operable", async ({ page }) => {
    await page.goto("/work/");
    const cloud = page.getByRole("tab", { name: /Cloud foundation/ });
    await cloud.focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.getByRole("tab", { name: /^Microsoft / })).toHaveAttribute("aria-selected", "true");
    await page.getByRole("tab", { name: "Cloud and infrastructure" }).click();
    await expect(page.getByRole("tabpanel").filter({ hasText: "platform, identity" })).toBeVisible();
  });

  test("FAQ exposes accessible disclosure state", async ({ page }) => {
    await page.goto("/work/");
    const question = page.getByRole("button", { name: "What happens after launch?" });
    await expect(question).toHaveAttribute("aria-expanded", "false");
    await question.click();
    await expect(question).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByText(/The handover records what shipped/)).toBeVisible();
  });

  test("uses honest selected-work state and complete required placeholder inventory", async ({ page }) => {
    await page.goto("/work/");
    await expect(page.getByText(/project stories are being prepared for publication/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /View work/i })).toHaveCount(0);
    await expect(page.locator('[role="img"]')).toHaveCount(8);
    const text = await page.locator("body").innerText();
    expect(text).not.toMatch(/\d+%\s+(increase|improvement|growth|faster)/i);
  });

  test("has no empty links or horizontal overflow at mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/work/");
    const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    expect(hrefs).not.toContain("");
    expect(hrefs).not.toContain("#");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });

  for (const theme of ["light", "dark"] as const) {
    test(`has no serious or critical axe violations in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto("/work/");
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical")).toEqual([]);
    });
  }
});
