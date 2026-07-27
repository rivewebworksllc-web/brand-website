import { expect, test } from "@playwright/test";

test("home route renders the Week 0 diagnostic foundation", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Rive Webworks/);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("skip link is keyboard reachable and focuses main content", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeVisible();
});
