import { expect, test, type Page } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

async function openMenu(page: Page) {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  return page.getByRole("dialog", { name: "Mobile navigation" });
}

test("mobile drawer opens, closes with Escape and restores focus", async ({ page }) => {
  const panel = await openMenu(page);
  await expect(panel.getByRole("button", { name: "Close menu" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
});

test("mobile IA matches desktop and exposes no conversion dead links", async ({ page }) => {
  const panel = await openMenu(page);
  for (const label of ["Solutions", "Resources", "Company"]) await expect(panel.getByRole("button", { name: label, exact: true })).toBeVisible();
  await expect(panel.getByRole("link", { name: "Work", exact: true })).toHaveAttribute("href", "/work/");
  await expect(panel.getByText("Services", { exact: true })).toHaveCount(0);
  await expect(panel.locator('a[href="/connect/"], a[href="/start/"]')).toHaveCount(0);
});

test("mobile disclosure children are reachable and only one group stays open", async ({ page }) => {
  const panel = await openMenu(page);
  await panel.getByRole("button", { name: "Solutions", exact: true }).click();
  await expect(panel.getByRole("link", { name: "Industries", exact: true })).toBeVisible();
  await panel.getByRole("button", { name: "Company", exact: true }).click();
  await expect(panel.getByRole("link", { name: "Industries", exact: true })).toBeHidden();
  await expect(panel.getByRole("link", { name: "About", exact: true })).toBeVisible();
  await expect(panel.getByRole("link", { name: "Process", exact: true })).toBeVisible();
});

test("selecting Work closes the drawer and navigates", async ({ page }) => {
  const panel = await openMenu(page);
  await panel.getByRole("link", { name: "Work", exact: true }).click();
  await expect(page).toHaveURL(/\/work\/$/);
  await expect(panel).toBeHidden();
});
