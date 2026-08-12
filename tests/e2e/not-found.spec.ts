import { expect, test } from "@playwright/test";

test("404 foundation renders a useful recovery path", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist/");
  expect(response?.status()).toBe(404);

  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();

  const returnHome = page.getByRole("link", { name: "Return home" });
  await expect(returnHome).toHaveAttribute("href", "/");

  await expect(page.locator('#main-content a[href="/start/"]')).toHaveCount(0);
});
