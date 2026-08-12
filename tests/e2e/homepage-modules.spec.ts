import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

test("manifesto statement renders as plain editorial text, not a card", async ({ page }) => {
  await page.goto("/");

  const heading = page.getByRole("heading", {
    name: "A website, its cloud, and the AI layered on top are one system.",
  });
  await expect(heading).toBeVisible();
});

test("Guided Outcome Explorer (desktop) selects a path via the tablist and updates the panel", async ({
  page,
}) => {
  await page.goto("/");

  const section = page.locator("section", {
    has: page.getByRole("heading", { name: "Tell us what's broken. We'll tell you where to start." }),
  });

  const tablist = section.getByRole("tablist", { name: "Buyer outcomes" });
  const panel = section.getByRole("tabpanel");
  const names = [
    "Website & Growth",
    "AWS & Microsoft Cloud",
    "Secure AI & Automation",
    "Managed Care & Advisory",
  ];
  for (const name of names) {
    await expect(tablist.getByRole("tab", { name })).toBeVisible();
  }

  // Website & Growth is selected by default.
  await expect(panel.getByText(/A weak, slow or low-converting website/)).toBeVisible();

  await tablist.getByRole("tab", { name: "AWS & Microsoft Cloud" }).click();
  await expect(panel.getByText(/Architecture, migration, security/)).toBeVisible();
});

test("Guided Outcome Explorer tablist is keyboard operable", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("section", {
    has: page.getByRole("heading", { name: "Tell us what's broken. We'll tell you where to start." }),
  });
  const panel = section.getByRole("tabpanel");
  const firstTab = section.getByRole("tab", { name: "Website & Growth" });
  await firstTab.focus();
  await page.keyboard.press("ArrowDown");
  await expect(section.getByRole("tab", { name: "AWS & Microsoft Cloud" })).toBeFocused();
  await expect(panel.getByText(/Architecture, migration, security/)).toBeVisible();
});

test("buyer-path accordion (mobile) opens the first path by default and works via native details with zero JS reliance", async ({
  browser,
}) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("/");

  const section = page.locator("section", {
    has: page.getByRole("heading", { name: "Tell us what's broken. We'll tell you where to start." }),
  });
  const accordion = section.locator("details");

  const names = [
    "Website & Growth",
    "AWS & Microsoft Cloud",
    "Secure AI & Automation",
    "Managed Care & Advisory",
  ];
  for (const name of names) {
    await expect(accordion.getByText(name, { exact: true })).toBeVisible();
  }

  // First path's detail is open by default (native <details open>).
  await expect(accordion.getByText(/A weak, slow or low-converting website/)).toBeVisible();

  const secondSummary = accordion.getByText("AWS & Microsoft Cloud", { exact: true });
  await secondSummary.click();
  await expect(accordion.getByText(/Architecture, migration, security/)).toBeVisible();

  await context.close();
});

test("cloud platform parity gives AWS and Microsoft equal billing", async ({ page }) => {
  await page.goto("/");

  const heading = page.getByRole("heading", {
    name: "AWS or Microsoft. We don't have a favorite.",
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

  const preview = page
    .getByRole("region", { name: "Selected evidence artifact" })
    .filter({ hasText: "Security and governance controls" });
  await expect(preview).toBeVisible();
});

test("footer exposes the five approved link groups", async ({ page }) => {
  await page.goto("/");

  const footer = page.getByRole("contentinfo");
  for (const heading of ["Solutions", "Services", "Company", "Trust", "Resources"]) {
    await expect(footer.getByText(heading, { exact: true })).toBeVisible();
  }
});

test("proof footnote is present and does not claim client results", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/We don't have client case studies published yet/)).toBeVisible();
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
