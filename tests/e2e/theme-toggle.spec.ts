import { expect, test } from "@playwright/test";

test("theme toggle has an accessible label describing the next state and switches the theme", async ({
  page,
}) => {
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /Switch to (dark|light) theme/ });
  await expect(toggle).toBeVisible();

  const initialIsDark = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );

  await toggle.click();

  await expect(page.getByRole("button", { name: /Switch to (dark|light) theme/ })).toHaveAttribute(
    "aria-label",
    initialIsDark ? "Switch to dark theme" : "Switch to light theme",
  );

  const toggledIsDark = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );
  expect(toggledIsDark).toBe(!initialIsDark);
});

test("theme choice persists across reload", async ({ page }) => {
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /Switch to (dark|light) theme/ });
  await toggle.click();

  const chosen = await page.evaluate(() => window.localStorage.getItem("rive-theme"));
  expect(chosen).toMatch(/^(light|dark)$/);

  await page.reload();

  const afterReload = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );
  expect(afterReload).toBe(chosen === "dark");
});

test("theme toggle is keyboard operable", async ({ page }) => {
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /Switch to (dark|light) theme/ });
  await toggle.focus();
  await expect(toggle).toBeFocused();

  const before = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  await page.keyboard.press("Enter");
  const after = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  expect(after).toBe(!before);
});
