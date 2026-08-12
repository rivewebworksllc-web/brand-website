import { expect, test } from "@playwright/test";

const builtRoutes = [
  "/", "/work/", "/resources/guides/", "/resources/insights/", "/company/",
  "/company/about/", "/company/process/", "/solutions/", "/industries/", "/platforms/",
];

const advertisedRoutes = new Set([
  "/", "/work/", "/resources/guides/", "/resources/insights/", "/company/about/",
  "/company/process/", "/industries/", "/platforms/",
]);

test("all built public routes return success", async ({ request }) => {
  for (const route of builtRoutes) expect((await request.get(route)).ok(), route).toBe(true);
});

test("every rendered internal link points to a canonical advertised route", async ({ page }) => {
  for (const route of builtRoutes) {
    await page.goto(route);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")).filter((href): href is string => Boolean(href)),
    );
    for (const href of hrefs) expect(advertisedRoutes.has(href), `${route} advertises ${href}`).toBe(true);
  }
});

test("trigger-only parents and deferred conversion routes are not advertised", async ({ page }) => {
  await page.goto("/");
  for (const route of ["/solutions/", "/services/", "/resources/", "/company/", "/connect/", "/start/"]) {
    await expect(page.locator(`a[href="${route}"]`), route).toHaveCount(0);
  }
});

for (const width of [375, 768, 1440]) {
  test(`global navigation and footer do not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
    await page.goto("/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
}
