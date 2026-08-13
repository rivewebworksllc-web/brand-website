import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const deliveryEnabled = process.env.CONNECT_DELIVERY_ENABLED === "true";

test("Connect renders with canonical metadata and its authored conversation surface", async ({ page }) => {
  const response = await page.goto("/connect/");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/Connect/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/connect\/$/);
  await expect(page.getByRole("heading", { level: 1, name: "Start with what you know." })).toBeVisible();
  await expect(page.getByLabel("Name", { exact: true })).toBeVisible();
  await expect(page.getByLabel("Email", { exact: true })).toHaveAttribute("type", "email");
  await expect(page.getByLabel("What would you like to discuss?")).toBeVisible();
  await expect(page.getByText("What is changing?", { exact: true })).toBeVisible();
});

if (!deliveryEnabled) {
  test("interim status appears before effort and disabled delivery never posts", async ({ page }) => {
    let posts = 0;
    await page.route("**/api/connect", (route) => {
      posts += 1;
      return route.fulfill({ status: 500 });
    });
    await page.goto("/connect/");
    await expect(page.getByText("Online enquiries are being enabled.", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Name", { exact: true })).toBeDisabled();
    await expect(page.getByLabel("Email", { exact: true })).toBeDisabled();
    await expect(page.getByLabel("What would you like to discuss?")).toBeDisabled();
    await expect(page.getByRole("button", { name: "Online sending opens shortly" })).toBeDisabled();
    await page.getByRole("button", { name: "Online sending opens shortly" }).press("Enter");
    expect(posts).toBe(0);
  });
}

if (deliveryEnabled) {
  test("server validation preserves values and announces field errors", async ({ page }) => {
    await page.goto("/connect/");
    await page.getByLabel("Name", { exact: true }).fill("Ada Lovelace");
    await page.getByLabel("Email", { exact: true }).fill("invalid");
    await page.getByRole("button", { name: "Start the conversation" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "The enquiry was not sent" })).toContainText("not sent");
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Tell us what you would like to discuss.")).toBeVisible();
    await expect(page.getByLabel("Name", { exact: true })).toHaveValue("Ada Lovelace");
  });

  test("provider acceptance reaches the accessible success state", async ({ page }) => {
    await page.route("**/api/connect", (route) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) }));
    await page.goto("/connect/");
    await page.getByLabel("Name", { exact: true }).fill("Ada Lovelace");
    await page.getByLabel("Email", { exact: true }).fill("ada@example.com");
    await page.getByLabel("Organisation (optional)").fill("Analytical Engines");
    await page.getByLabel("What would help? (optional)").selectOption("not_sure");
    await page.getByLabel("What would you like to discuss?").fill("We need help understanding the right starting point for a platform change.");
    await page.getByRole("button", { name: "Start the conversation" }).click();
    await expect(page.getByRole("status").filter({ hasText: "Your enquiry has been received." })).toBeVisible();
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  });

  test("provider failure preserves data and allows retry", async ({ page }) => {
    await page.route("**/api/connect", (route) => route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ ok: false, formError: "Your enquiry was not sent. Please try again." }) }));
    await page.goto("/connect/");
    await page.getByLabel("Name", { exact: true }).fill("Ada Lovelace");
    await page.getByLabel("Email", { exact: true }).fill("ada@example.com");
    await page.getByLabel("What would you like to discuss?").fill("We need help understanding the right starting point for a platform change.");
    await page.getByRole("button", { name: "Start the conversation" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "The enquiry was not sent" })).toContainText("Please try again");
    await expect(page.getByLabel("Email", { exact: true })).toHaveValue("ada@example.com");
    await expect(page.getByRole("button", { name: "Start the conversation" })).toBeEnabled();
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  });
}

for (const theme of ["light", "dark"] as const) {
  test(`Connect has no detectable axe violations in ${theme} mode`, async ({ page }) => {
    await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
    await page.goto("/connect/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("existing desktop and mobile Connect actions resolve to Connect", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.locator("header").getByRole("link", { name: "Contact Us", exact: true }).click();
  await expect(page).toHaveURL(/\/connect\/$/);

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("dialog", { name: "Mobile navigation" }).getByRole("link", { name: "Book a Discovery Call", exact: true }).click();
  await expect(page).toHaveURL(/\/connect\/$/);
});

test("existing footer Contact link resolves to Connect", async ({ page }) => {
  await page.goto("/");
  await page.locator("footer").getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/\/connect\/$/);
});

test("Start conversation action resolves to Connect", async ({ page }) => {
  await page.goto("/start/");
  await page.getByRole("radio", { name: "I am not sure yet" }).check();
  await page.getByRole("link", { name: /Continue the conversation/ }).click();
  await expect(page).toHaveURL(/\/connect\/$/);
});

for (const viewport of [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
]) {
  test(`Connect has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/connect/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
}
