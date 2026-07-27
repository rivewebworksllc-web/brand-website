import { expect, test } from "@playwright/test";

test("home route renders the approved H1 and primary CTA", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("main")).toHaveCount(1);

  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveText(
    "Web, Cloud & AI Solutions Built for Growth, Security and Scale",
  );

  const primaryCta = page.getByRole("link", { name: "Find Your Solution" }).first();
  await expect(primaryCta).toBeVisible();
  await expect(primaryCta).toHaveAttribute("href", "/start/");
});

test("trust line is visible in server-rendered content", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText(
      "AWS-aligned · Microsoft cloud-aligned · Security-first · Evidence Pack™ delivery",
    ),
  ).toBeVisible();
});

test("skip link is keyboard reachable and focuses main content", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeVisible();
});
