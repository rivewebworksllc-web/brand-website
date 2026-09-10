import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTE = "/services/web/modern-web-platforms/";

test.describe("Modern Web Platforms (RW-PAGE-14)", () => {
  test("renders the page with one H1 and canonical metadata", async ({ page }) => {
    const response = await page.goto(ROUTE);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /\/services\/web\/modern-web-platforms\/$/,
    );
  });

  test("states the OP-40 catalog mapping and claim-safe commercial orientation, never a fabricated price", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of ["OP-40", "OPT-15 + FND-02 + BLD-03", "Flagship route", "Scoped in Paid Discovery"]) {
      expect(html).toContain(phrase);
    }
    expect(html).not.toMatch(/\$[\d,]{3,}/);
  });

  test("shows the Platform Stack signature section with all four layers", async ({ page }) => {
    await page.goto(ROUTE);
    for (const layer of ["Experience", "Content", "Capabilities", "Delivery"]) {
      await expect(page.getByRole("heading", { name: layer, exact: true })).toBeVisible();
    }
  });

  test("shows Coupled vs Composable framed neutrally", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByText("Coupled", { exact: true })).toBeVisible();
    await expect(page.getByText("Composable", { exact: true })).toBeVisible();
    await expect(page.getByText("WordPress can remain the better choice", { exact: false })).toBeVisible();
  });

  test("declares the three platform-decision paths in server-rendered HTML", async ({ request }) => {
    const response = await request.get(ROUTE);
    const html = await response.text();
    for (const phrase of [
      "Composable Web / Next.js + Sanity",
      "Managed WordPress build or migration",
      "Composable / Next.js application or Laravel engineering",
      "OP-40 (OPT-15 + FND-02 + BLD-03)",
      "BLD-02/03 + ACC-03/OP-10B",
      "OP-40 / DEV-03",
      "Rive supports WordPress when it is the better operating choice",
      "Paid Discovery defines the security, integration and application boundary",
    ]) {
      expect(html).toContain(phrase);
    }
  });

  test("the content model specimen is reachable via native keyboard-accessible disclosure", async ({ page }) => {
    await page.goto(ROUTE);
    const details = page.locator("details").first();
    await expect(details).toHaveJSProperty("open", false);
    const summary = details.locator("summary");
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(details).toHaveJSProperty("open", true);
    // exact: true - "Illustrative" (the badge) also case-insensitively
    // substring-matches the note text "...one illustrative example...".
    await expect(details.getByText("Illustrative", { exact: true })).toBeVisible();
  });

  test("reuses the real seven-stage company process and links to it", async ({ page }) => {
    await page.goto(ROUTE);
    for (const stage of ["Understand", "Define", "Architect", "Build", "Verify", "Launch & handover", "Operate & improve"]) {
      await expect(page.getByText(stage, { exact: true }).first()).toBeVisible();
    }
    await expect(page.getByRole("link", { name: "See the full delivery process" })).toHaveAttribute("href", "/company/process/");
  });

  test("links to Evidence Pack, FND-05, UXR-01 and the accessibility practice", async ({ page }) => {
    await page.goto(ROUTE);
    await expect(page.getByRole("link", { name: "See the Evidence Pack" })).toHaveAttribute("href", "/trust/evidence-pack/");
    await expect(page.getByRole("link", { name: "See the design system service" })).toHaveAttribute(
      "href",
      "/services/web/brand-identity-digital-design-system/",
    );
    await expect(page.getByRole("link", { name: "See the UX audit" })).toHaveAttribute(
      "href",
      "/services/web/ux-audit-conversion-roadmap/",
    );
    await expect(page.getByRole("link", { name: "See the accessibility practice" })).toHaveAttribute(
      "href",
      "/trust/accessibility/",
    );
  });

  test("has no horizontal overflow at required responsive widths", async ({ page }) => {
    for (const viewport of [
      { width: 320, height: 800 },
      { width: 360, height: 800 },
      { width: 375, height: 812 },
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1280, height: 800 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(ROUTE);
      const overflow = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        return [...document.querySelectorAll<HTMLElement>("body *")]
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              tag: element.tagName.toLowerCase(),
              text: element.textContent?.trim().slice(0, 80) ?? "",
              className: typeof element.className === "string" ? element.className : "",
              left: Math.round(rect.left),
              right: Math.round(rect.right),
            };
          })
          // Deliberately off-canvas accessibility helpers (for example the
          // skip link before focus) do not increase the document scroll
          // width. Only right-edge overflow can do that in this LTR page.
          .filter(({ right }) => right > viewportWidth + 1);
      });
      expect(overflow, `overflowing elements at ${viewport.width}px`).toEqual([]);
    }
  });

  test("disables nonessential disclosure motion when reduced motion is requested", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(ROUTE);
    const indicator = page.locator("details summary [aria-hidden='true']").first();
    const transitionSeconds = await indicator.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).transitionDuration),
    );
    // The repository-wide reduced-motion policy uses 0.01ms rather than
    // literal zero so browser events still complete deterministically.
    expect(transitionSeconds).toBeLessThanOrEqual(0.00001);
  });

  test("remains usable at 200% zoom (simulated via a narrow, tall viewport)", async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 1200 });
    await page.goto(ROUTE);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
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
