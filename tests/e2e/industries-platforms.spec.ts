import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Industries page (RW-PHASE-02)", () => {
  test("renders the approved heading and all five real sectors", async ({ page }) => {
    await page.goto("/industries/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Built where mistakes are expensive.",
    );

    for (const name of [
      "Healthcare",
      "Professional Services",
      "SaaS and Technology Companies",
      "Local and Multi-Location Businesses",
      "Nonprofits and Mission-Led Organizations",
    ]) {
      await expect(page.getByRole("heading", { name })).toBeVisible();
    }
  });

  test("the Industries mega-menu link reflects the current page (RW-PW07B: consolidated under Solutions)", async ({
    page,
  }) => {
    await page.goto("/industries/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    await nav.getByRole("link", { name: "Solutions", exact: true }).hover();

    const link = page.locator("#megamenu-solutions").getByRole("link", { name: "Industries", exact: true });
    await expect(link).toHaveAttribute("aria-current", "page");
  });

  test("no href=\"#\" placeholders and no invented claims", async ({ page }) => {
    await page.goto("/industries/");
    const hrefs = await page.locator("a[href]").evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")),
    );
    for (const href of hrefs) expect(href).not.toBe("#");

    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toMatch(/\d+%\s+(increase|improvement|growth|faster)/i);
  });

  test("has no serious or critical accessibility violations", async ({ page }) => {
    await page.goto("/industries/");
    const results = await new AxeBuilder({ page }).analyze();
    const seriousOrCritical = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(seriousOrCritical).toEqual([]);
  });
});

test.describe("Platforms page (RW-PHASE-02)", () => {
  test("gives AWS and Microsoft equal billing with their real capability lists", async ({ page }) => {
    await page.goto("/platforms/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "AWS or Microsoft. We don't have a favorite.",
    );

    const main = page.locator("main");
    await expect(main.getByText("AWS", { exact: true })).toBeVisible();
    await expect(main.getByText("Microsoft", { exact: true })).toBeVisible();
    await expect(main.getByText("Cloud foundations and landing zones", { exact: true }).first()).toBeVisible();
    await expect(main.getByText("Azure architecture and modernization", { exact: true }).first()).toBeVisible();

    for (const item of ["Identity", "Security", "Observability", "Cost", "Evidence", "Operations"]) {
      await expect(main.getByText(item, { exact: true })).toBeVisible();
    }
  });

  test("the Platforms mega-menu link reflects the current page (RW-PW07B: consolidated under Solutions)", async ({
    page,
  }) => {
    await page.goto("/platforms/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    await nav.getByRole("link", { name: "Solutions", exact: true }).hover();

    const link = page.locator("#megamenu-solutions").getByRole("link", { name: "Platforms", exact: true });
    await expect(link).toHaveAttribute("aria-current", "page");
  });

  test("no href=\"#\" placeholders", async ({ page }) => {
    await page.goto("/platforms/");
    const hrefs = await page.locator("a[href]").evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")),
    );
    for (const href of hrefs) expect(href).not.toBe("#");
  });

  test("has no serious or critical accessibility violations", async ({ page }) => {
    await page.goto("/platforms/");
    const results = await new AxeBuilder({ page }).analyze();
    const seriousOrCritical = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(seriousOrCritical).toEqual([]);
  });
});
