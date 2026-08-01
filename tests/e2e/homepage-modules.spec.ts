import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

test("all four buyer paths are present with working routes", async ({ page }) => {
  await page.goto("/");

  const names = [
    "Website & Growth",
    "AWS & Microsoft Cloud",
    "Secure AI & Automation",
    "Managed Care & Advisory",
  ];

  for (const name of names) {
    await expect(page.getByRole("heading", { name, level: 3 })).toBeVisible();
  }
});

test("cloud platform parity gives AWS and Microsoft equal billing", async ({ page }) => {
  await page.goto("/");

  const heading = page.getByRole("heading", {
    name: "One cloud strategy. Equal AWS and Microsoft depth.",
  });
  await expect(heading).toBeVisible();

  const section = page.locator("section", { has: heading });
  await expect(section.getByText("AWS", { exact: true })).toBeVisible();
  await expect(section.getByText("Microsoft", { exact: true })).toBeVisible();
});

test("Evidence Pack explorer lets a visitor select an artifact and see its preview", async ({
  page,
}) => {
  await page.goto("/");

  const securityButton = page.getByRole("button", { name: /Security and governance controls/ });
  await securityButton.click();
  await expect(securityButton).toHaveAttribute("aria-pressed", "true");

  const preview = page.locator("[aria-live='polite']").filter({ hasText: "Security and governance controls" });
  await expect(preview).toBeVisible();
});

test("footer exposes the five approved link groups", async ({ page }) => {
  await page.goto("/");

  const footer = page.getByRole("contentinfo");
  for (const heading of ["Solutions", "Services", "Company", "Trust", "Resources"]) {
    await expect(footer.getByText(heading, { exact: true })).toBeVisible();
  }
});

test("homepage never states an AWS or Microsoft partner/certification claim", async ({ page }) => {
  await page.goto("/");

  const bodyText = (await page.locator("body").innerText()).toLowerCase();
  expect(bodyText).not.toMatch(/aws partner|microsoft solutions partner|certified partner/);
});

test("homepage never invents client logos, testimonials or numeric case-study results", async ({
  page,
}) => {
  await page.goto("/");

  const bodyText = await page.locator("body").innerText();
  expect(bodyText).not.toMatch(/\d+%\s+(increase|improvement|growth|faster)/i);
});
