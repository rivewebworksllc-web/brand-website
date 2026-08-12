import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Solutions page (RW-PHASE-02)", () => {
  test("renders the approved intro and the guided outcome explorer", async ({ page }) => {
    await page.goto("/solutions/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Tell us what's broken. We'll tell you where to start.",
    );

    const tablist = page.getByRole("tablist", { name: "Buyer outcomes" });
    for (const name of [
      "Website & Growth",
      "AWS & Microsoft Cloud",
      "Secure AI & Automation",
      "Managed Care & Advisory",
    ]) {
      await expect(tablist.getByRole("tab", { name })).toBeVisible();
    }
  });

  test("the Solutions nav item reflects the current page", async ({ page }) => {
    await page.goto("/solutions/");
    const trigger = page.getByRole("navigation", { name: "Primary" }).getByRole("button", {
      name: "Solutions",
      exact: true,
    });
    await expect(trigger).toHaveAttribute("aria-controls", "megamenu-solutions");
  });

  test("no href=\"#\" placeholders", async ({ page }) => {
    await page.goto("/solutions/");
    const hrefs = await page.locator("a[href]").evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")),
    );
    for (const href of hrefs) expect(href).not.toBe("#");
  });

  test("has no serious or critical accessibility violations", async ({ page }) => {
    await page.goto("/solutions/");
    const results = await new AxeBuilder({ page }).analyze();
    const seriousOrCritical = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(seriousOrCritical).toEqual([]);
  });
});

test.describe("Company page (RW-PHASE-02)", () => {
  test("renders the approved statement and real Company links, with no invented team content", async ({
    page,
  }) => {
    await page.goto("/company/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "A website, its cloud, and the AI layered on top are one system.",
    );

    const main = page.locator("main");
    for (const name of ["About", "Process", "Partners and Readiness", "Careers", "Contact"]) {
      await expect(main.getByRole("link", { name, exact: true })).toBeVisible();
    }

    // Honest about the gap — no fabricated names, no case-study numbers.
    await expect(page.getByText(/Full team profiles aren't published yet/)).toBeVisible();
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toMatch(/\d+%\s+(increase|improvement|growth|faster)/i);
  });

  test("the Company nav item reflects the current page", async ({ page }) => {
    await page.goto("/company/");
    const trigger = page.getByRole("navigation", { name: "Primary" }).getByRole("button", {
      name: "Company",
      exact: true,
    });
    await expect(trigger).toHaveAttribute("aria-controls", "megamenu-company");
  });

  test("no href=\"#\" placeholders", async ({ page }) => {
    await page.goto("/company/");
    const hrefs = await page.locator("a[href]").evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")),
    );
    for (const href of hrefs) expect(href).not.toBe("#");
  });

  test("has no serious or critical accessibility violations", async ({ page }) => {
    await page.goto("/company/");
    const results = await new AxeBuilder({ page }).analyze();
    const seriousOrCritical = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(seriousOrCritical).toEqual([]);
  });
});
