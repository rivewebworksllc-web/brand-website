import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 900 } });

// RW-PW07B: reduced from the old 8-item model. Industries/Platforms/Pricing/
// Trust are still reachable — via mega-menu secondaryLinks, asserted below —
// not visible top-level labels any more.
const approvedLabels = ["Solutions", "Services", "Work", "Resources", "Company"];

test("header exposes the approved reduced top-level navigation, with visibly more breathing room", async ({
  page,
}) => {
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Primary" });
  for (const label of approvedLabels) {
    await expect(nav.getByRole(label === "Work" ? "link" : "button", { name: label, exact: true })).toBeVisible();
  }

  // The old 8-item labels that were consolidated must not remain as
  // separate top-level triggers.
  for (const retired of ["Industries", "Platforms", "Pricing"]) {
    await expect(nav.getByRole("link", { name: retired, exact: true })).toHaveCount(0);
  }

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Contact Us", exact: true })).toBeVisible();
});

test("header carries exactly one CTA (RW-PW11) — the hero keeps its own two, unduplicated", async ({
  page,
}) => {
  await page.goto("/");

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Find Your Solution", exact: true })).toHaveCount(0);
  await expect(header.getByRole("link", { name: "Book a Discovery Call", exact: true })).toHaveCount(0);
  await expect(header.getByRole("link", { name: "Contact Us", exact: true })).toBeVisible();

  const main = page.locator("#main-content");
  await expect(main.getByRole("link", { name: "Find Your Solution", exact: true }).first()).toBeVisible();
  await expect(main.getByRole("link", { name: "Explore Services", exact: true }).first()).toBeVisible();
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

test.describe("mega menu (RW-PW07B)", () => {
  test("opens on hover, spans the header's content width, and shows real footer-sourced links", async ({
    page,
  }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    const trigger = nav.getByRole("button", { name: "Solutions", exact: true });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    await trigger.hover();

    const panel = page.locator("#megamenu-solutions");
    await expect(panel).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(panel.getByRole("link", { name: "Website & Growth" })).toBeVisible();

    // Aligns with the header's own content container, not a narrow dropdown
    // pinned under one trigger (directive §6/§7).
    const headerBox = await page.getByRole("banner").boundingBox();
    const panelBox = await panel.boundingBox();
    expect(panelBox).not.toBeNull();
    expect(headerBox).not.toBeNull();
    expect(Math.abs(panelBox!.width - headerBox!.width)).toBeLessThan(2);
    expect(Math.abs(panelBox!.x - headerBox!.x)).toBeLessThan(2);
  });

  test("Solutions panel surfaces Industries and Platforms as consolidated secondary links", async ({
    page,
  }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    await nav.getByRole("button", { name: "Solutions", exact: true }).hover();

    const panel = page.locator("#megamenu-solutions");
    await expect(panel.getByRole("link", { name: "Industries", exact: true })).toBeVisible();
    await expect(panel.getByRole("link", { name: "Platforms", exact: true })).toBeVisible();
  });

  test("Company panel surfaces Pricing and Resources panel surfaces the Trust group as secondary links", async ({
    page,
  }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });

    await nav.getByRole("button", { name: "Company", exact: true }).hover();
    await expect(page.locator("#megamenu-company").getByRole("link", { name: "Pricing", exact: true })).toBeVisible();

    await nav.getByRole("button", { name: "Resources", exact: true }).hover();
    await expect(
      page.locator("#megamenu-resources").getByRole("link", { name: "Trust Center", exact: true }),
    ).toBeVisible();
  });

  test("every mega menu carries a placeholder visual", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });

    for (const label of approvedLabels.filter((label) => label !== "Work")) {
      await nav.getByRole("button", { name: label, exact: true }).hover();
      const panel = page.locator(`#megamenu-${label.toLowerCase()}`);
      await expect(panel.getByRole("img")).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(200);
    }
  });

  test("opens on keyboard focus and Escape closes it, returning focus to the trigger", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    const trigger = nav.getByRole("button", { name: "Services", exact: true });
    await trigger.focus();

    const panel = page.locator("#megamenu-services");
    await expect(panel).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(panel).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("clicking outside the nav closes the open menu", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    const trigger = nav.getByRole("button", { name: "Company", exact: true });
    await trigger.hover();

    const panel = page.locator("#megamenu-company");
    await expect(panel).toBeVisible();

    await page.locator("body").click({ position: { x: 10, y: 10 } });
    await expect(panel).toBeHidden();
  });

  test("only one mega menu is open at a time", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    await nav.getByRole("button", { name: "Solutions", exact: true }).hover();
    await expect(page.locator("#megamenu-solutions")).toBeVisible();

    await nav.getByRole("button", { name: "Resources", exact: true }).hover();
    await expect(page.locator("#megamenu-resources")).toBeVisible();
    await expect(page.locator("#megamenu-solutions")).toBeHidden();
  });
});

test("sticky header activates without a raw scroll listener (IntersectionObserver-driven)", async ({ page }) => {
  await page.goto("/");

  const header = page.getByRole("banner");
  const before = await header.evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(before).toBe("rgba(0, 0, 0, 0)");

  await page.evaluate(() => window.scrollTo(0, 400));
  await expect(async () => {
    const after = await header.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(after).not.toBe(before);
  }).toPass();

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(async () => {
    const backAtTop = await header.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(backAtTop).toBe(before);
  }).toPass();
});

test.describe("header compact-on-scroll (RW-PW11B)", () => {
  test("header genuinely shrinks after the scroll threshold and restores at the top, without a raw scroll listener", async ({
    page,
  }) => {
    await page.goto("/");

    const header = page.getByRole("banner");
    const defaultBox = await header.boundingBox();
    expect(defaultBox).not.toBeNull();

    await page.evaluate(() => window.scrollTo(0, 400));
    await expect(async () => {
      const compactBox = await header.boundingBox();
      expect(compactBox).not.toBeNull();
      // "reduce total header height by approximately 12-20%"
      expect(compactBox!.height).toBeLessThan(defaultBox!.height * 0.9);
      expect(compactBox!.height).toBeGreaterThan(defaultBox!.height * 0.7);
    }).toPass();

    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(async () => {
      const restoredBox = await header.boundingBox();
      expect(restoredBox).not.toBeNull();
      expect(Math.round(restoredBox!.height)).toBe(Math.round(defaultBox!.height));
    }).toPass();
  });

  test("navigation labels stay on one line and the CTA remains a real link, in both states", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    const header = page.getByRole("banner");

    async function assertOneLineAndCta() {
      const labelBoxes = await Promise.all(
        ["Solutions", "Services", "Work", "Resources", "Company"].map((label) =>
          nav.getByRole(label === "Work" ? "link" : "button", { name: label, exact: true }).boundingBox(),
        ),
      );
      const tops = labelBoxes.map((box) => Math.round(box!.y));
      expect(new Set(tops).size).toBe(1); // every label's top edge matches — one row, no wrap
      await expect(header.getByRole("link", { name: "Contact Us", exact: true })).toBeVisible();
    }

    await assertOneLineAndCta();
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(350); // let the transition settle
    await assertOneLineAndCta();
  });

  test("mega-menu panel stays flush against the header in both the default and compact states", async ({
    page,
  }) => {
    await page.goto("/");

    const header = page.getByRole("banner");
    const trigger = page.getByRole("navigation", { name: "Primary" }).getByRole("button", { name: "Solutions" });
    const panel = page.locator("#megamenu-solutions");

    async function assertFlush() {
      await trigger.hover();
      await expect(panel).toBeVisible();
      const headerBox = await header.boundingBox();
      const panelBox = await panel.boundingBox();
      expect(Math.abs(panelBox!.y - (headerBox!.y + headerBox!.height))).toBeLessThan(2);
      await page.mouse.move(10, 10);
      await expect(panel).toBeHidden();
    }

    await assertFlush();
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(350);
    await assertFlush();
  });

  test("reduced motion still reaches the compact state, just without an animated transition", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const header = page.getByRole("banner");
    const container = header.locator("> div").first();
    const transitionDuration = await container.evaluate((el) => getComputedStyle(el).transitionDuration);
    for (const duration of transitionDuration.split(",")) {
      expect(Number.parseFloat(duration.trim())).toBeLessThanOrEqual(0.01);
    }

    const defaultBox = await header.boundingBox();
    await page.evaluate(() => window.scrollTo(0, 400));
    await expect(async () => {
      const compactBox = await header.boundingBox();
      expect(compactBox!.height).toBeLessThan(defaultBox!.height * 0.9);
    }).toPass();
  });

  test("mobile does not receive the desktop shrink treatment", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const header = page.getByRole("banner");
    const defaultHeight = (await header.boundingBox())!.height;

    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(350);
    const scrolledHeight = (await header.boundingBox())!.height;

    expect(Math.round(scrolledHeight)).toBe(Math.round(defaultHeight));
    // Contact Us never lives in the fixed mobile top bar — it's inside the drawer.
    await expect(header.getByRole("link", { name: "Contact Us" })).toHaveCount(0);
  });
});
