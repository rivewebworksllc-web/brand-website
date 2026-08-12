import { expect, test } from "@playwright/test";

test("home route renders the approved H1 without advertising missing conversion routes", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("main")).toHaveCount(1);

  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveText(
    "One accountable team — not three vendors pointing at each other.",
  );

  await expect(page.locator('a[href="/start/"], a[href="/connect/"]')).toHaveCount(0);
});

test("trust line is visible in server-rendered content", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText(
      "AWS-aligned · Microsoft cloud-aligned · Security-first · Evidence Pack™ on every engagement",
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
