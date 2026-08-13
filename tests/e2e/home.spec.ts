import { expect, test } from "@playwright/test";

test("home route renders the approved H1 and primary CTA", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("main")).toHaveCount(1);

  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveText(
    "Cloud, AI & Web Design Built on Evidence, Not Promises",
  );

  const primaryCta = page.getByRole("link", { name: "Find Your Solution" }).first();
  await expect(primaryCta).toBeVisible();
  await expect(primaryCta).toHaveAttribute("href", "/start/");
});

test("authority signals are visible in server-rendered content", async ({ page }) => {
  await page.goto("/");
  for (const signal of ["Founder-led delivery", "AWS & Microsoft Cloud", "Governed AI", "Modern Web & Next.js", "Evidence-led delivery", "GCP / Oracle on request"]) {
    await expect(page.getByLabel("Rive delivery authority").getByText(signal, { exact: true })).toBeVisible();
  }
});

test("skip link is keyboard reachable and focuses main content", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeVisible();
});
