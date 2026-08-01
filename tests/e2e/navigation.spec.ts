import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

const approvedLabels = [
  "Solutions",
  "Services",
  "Industries",
  "Platforms",
  "Work",
  "Resources",
  "Company",
  "Pricing",
];

test("header exposes the approved top-level navigation", async ({ page }) => {
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Primary" });
  for (const label of approvedLabels) {
    await expect(nav.getByRole("link", { name: label, exact: true })).toBeVisible();
  }

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Start", exact: true })).toBeVisible();
});

test("no navigation link uses a href=\"#\" placeholder", async ({ page }) => {
  await page.goto("/");

  const hrefs = await page.locator("a[href]").evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")),
  );

  for (const href of hrefs) {
    expect(href).not.toBe("#");
  }
});
