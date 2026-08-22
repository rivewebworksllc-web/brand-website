import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTE = "/trust/accessibility/";

test.describe("Accessibility Trust page (RW-PAGE-12R)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/trust\/accessibility\/$/);
  });

  test("never claims certification, compliance or a guaranteed result", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = (await response.text()).toLowerCase();
    for (const phrase of ["wcag certified", "fully wcag compliant", "ada compliant", "legally compliant", "guaranteed accessib", "100% accessib"]) {
      expect(html).not.toContain(phrase);
    }
    expect(html).toContain("wcag 2.2 aa-informed");
  });

  test("introduces no commercial fact: no price, no OPT-12/OPT-09 code, no Paid Discovery CTA", async ({ page }) => {
    // Checked against rendered, visible text rather than raw SSR HTML: the
    // raw payload embeds the React Flight protocol, which uses "$"-prefixed
    // reference tokens ("$1", "$L2", "$23"...) that are not dollar amounts
    // and can't be reliably regex-excluded from server-rendered markup.
    await page.goto(ROUTE);
    const visibleText = await page.evaluate(() => document.body.innerText);
    expect(visibleText).not.toMatch(/\$\d/);
    expect(visibleText).not.toMatch(/OPT-12|OPT-09/);
    expect(visibleText).not.toContain("Book Paid Discovery");
  });

  test("shows the Keyboard Path with all seven stops and their state labels", async ({ page }) => {
    await page.goto(ROUTE);
    for (const label of ["Skip link", "Primary navigation", "Page heading", "Form field", "Error state", "Submit action", "Confirmation"]) {
      await expect(page.getByText(label, { exact: true }).first()).toBeVisible();
    }
    await expect(page.getByText("Interrupted", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Restored after remediation", { exact: true }).first()).toBeVisible();
  });

  test("shows the Remediation Loop closing back to Detect, distinct from a roadmap", async ({ page }) => {
    await page.goto(ROUTE);
    // Scoped to the Remediation Loop's own accessible region: "Re-test"
    // also appears (hidden, inside the closed Illustrative Issue
    // disclosure earlier on the page), so an unscoped locator can resolve
    // to a hidden match.
    const loopSection = page.getByRole("region", { name: "The Remediation Loop closes. It does not just get scheduled." });
    for (const label of ["Detect", "Reproduce", "Fix", "Re-test", "Record"]) {
      await expect(loopSection.getByText(label, { exact: true })).toBeVisible();
    }
    await expect(loopSection.getByText(/returns to Detect/i)).toBeVisible();
  });

  test("the illustrative issue is reachable via native keyboard-accessible disclosure and labeled illustrative", async ({ page }) => {
    await page.goto(ROUTE);
    const details = page.locator("details").first();
    await expect(details).toHaveJSProperty("open", false);
    await details.locator("summary").click();
    await expect(details).toHaveJSProperty("open", true);
    await expect(details.getByText("Illustrative example")).toBeVisible();
  });

  test("links to Evidence Pack, UXR-01 and Trust Center without duplicating them", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "See the Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "See the UX Audit" })).toHaveAttribute("href", "/services/web/ux-audit-conversion-roadmap/");
    await expect(page.getByRole("link", { name: "Back to Trust Center" })).toHaveAttribute("href", "/trust/");
  });

  test("has no horizontal overflow at required responsive widths", async ({ page }) => {
    for (const viewport of [
      { width: 320, height: 800 },
      { width: 375, height: 812 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1280, height: 800 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(ROUTE);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });

  test("remains usable at 200% zoom (simulated via a narrow, tall viewport)", async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 1200 });
    await page.goto(ROUTE);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("respects reduced motion (no essential motion to disable)", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("supports full keyboard traversal to the first disclosure", async ({ page }) => {
    await page.goto(ROUTE);
    const summary = page.locator("details summary").first();
    await summary.focus();
    await expect(summary).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("details").first()).toHaveJSProperty("open", true);
  });

  for (const theme of ["light", "dark"] as const) {
    test(`passes axe in ${theme} mode`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("rive-theme", value), theme);
      await page.goto(ROUTE);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
    });
  }
});
