import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("home route has no serious or critical accessibility violations in dark theme", async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("rive-theme", "dark");
  });
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();
  const seriousOrCritical = results.violations.filter(
    (violation) => violation.impact === "serious" || violation.impact === "critical",
  );

  expect(seriousOrCritical).toEqual([]);
});

test("light theme confines navy/near-black chapter surfaces to the Evidence Pack", async ({
  page,
}) => {
  await page.goto("/");

  const navyElements = await page.evaluate(() => {
    const navyLike = ["rgb(15, 23, 42)", "rgb(10, 17, 32)", "rgb(11, 20, 36)", "rgb(16, 26, 48)"];
    const results: string[] = [];
    document.querySelectorAll("body *").forEach((el) => {
      const bg = getComputedStyle(el).backgroundColor;
      if (navyLike.includes(bg)) {
        const rect = el.getBoundingClientRect();
        if (rect.width >= window.innerWidth * 0.9) {
          results.push(`${el.tagName}.${el.className} (${rect.width}px)`);
        }
      }
    });
    return results;
  });

  expect(navyElements).toEqual(["SECTION.bg-navy-950 text-white (1280px)"]);
});

test("dark theme accent surface is distinct from the regular dark surface (not a flat inversion)", async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("rive-theme", "dark");
  });
  await page.goto("/");

  const colors = await page.evaluate(() => ({
    body: getComputedStyle(document.body).backgroundColor,
    accentSurfaceVar: getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent-surface")
      .trim(),
    surfaceAltVar: getComputedStyle(document.documentElement)
      .getPropertyValue("--color-surface-alt")
      .trim(),
  }));

  expect(colors.accentSurfaceVar).not.toBe(colors.surfaceAltVar);
});
