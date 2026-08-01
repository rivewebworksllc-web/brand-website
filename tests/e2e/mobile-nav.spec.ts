import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test("mobile navigation opens, closes via Escape, and restores focus", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open menu" });
  await trigger.click();

  const panel = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(panel).toBeVisible();
  await expect(panel.getByRole("link", { name: "Solutions" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
});

test("selecting a mobile nav link closes the panel", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });
  await panel.getByRole("link", { name: "Start" }).click();

  await expect(panel).toBeHidden();
});

test("background scroll is locked while the panel is open", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();

  const overflow = await page.evaluate(() => document.body.style.overflow);
  expect(overflow).toBe("hidden");

  await page.keyboard.press("Escape");
  const overflowAfter = await page.evaluate(() => document.body.style.overflow);
  expect(overflowAfter).not.toBe("hidden");
});
