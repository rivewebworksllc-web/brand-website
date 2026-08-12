import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

test("desktop navigation distinguishes disclosure parents from Work", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  for (const label of ["Solutions", "Resources", "Company"]) await expect(nav.getByRole("button", { name: label, exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Work", exact: true })).toHaveAttribute("href", "/work/");
  await expect(nav.getByText("Services", { exact: true })).toHaveCount(0);
});

test("mega menus expose only built child destinations", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  const expected = {
    Solutions: [["Industries", "/industries/"], ["Platforms", "/platforms/"]],
    Resources: [["Guides", "/resources/guides/"], ["Insights", "/resources/insights/"]],
    Company: [["About", "/company/about/"], ["Process", "/company/process/"]],
  } as const;
  for (const [label, children] of Object.entries(expected)) {
    await nav.getByRole("button", { name: label, exact: true }).click();
    const panel = page.locator(`#megamenu-${label.toLowerCase()}`);
    for (const [child, href] of children) await expect(panel.getByRole("link", { name: child, exact: true })).toHaveAttribute("href", href);
  }
});

test("disclosures support keyboard focus and Escape", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("navigation", { name: "Primary" }).getByRole("button", { name: "Resources" });
  await trigger.focus();
  await expect(page.locator("#megamenu-resources")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#megamenu-resources")).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("rendered homepage advertises no missing internal route", async ({ page }) => {
  await page.goto("/");
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  const allowed = new Set(["/", "/work/", "/industries/", "/platforms/", "/resources/guides/", "/resources/insights/", "/company/about/", "/company/process/"]);
  for (const href of hrefs) expect(allowed.has(href!)).toBe(true);
});

test("navigation passes axe in light and dark", async ({ page }) => {
  await page.goto("/");
  for (const theme of ["light", "dark"]) {
    await page.evaluate((value) => document.documentElement.setAttribute("data-theme", value), theme);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical")).toEqual([]);
  }
});
