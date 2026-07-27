import { expect, test } from "@playwright/test";

test("interactive elements respect prefers-reduced-motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const primaryCta = page.getByRole("link", { name: "Find Your Solution" }).first();
  const transitionDuration = await primaryCta.evaluate(
    (el) => getComputedStyle(el).transitionDuration,
  );

  for (const duration of transitionDuration.split(",")) {
    const seconds = Number.parseFloat(duration.trim());
    expect(seconds).toBeLessThanOrEqual(0.01);
  }
});
