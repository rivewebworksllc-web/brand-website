import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test("mobile navigation opens, closes via Escape, and restores focus", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open menu" });
  await trigger.click();

  const panel = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(panel).toBeVisible();
  await expect(panel.getByRole("link", { name: "Solutions" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
});

test("selecting a mobile nav link closes the panel", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });
  await panel.getByRole("link", { name: "Find Your Solution" }).click();

  await expect(panel).toBeHidden();
});

test("background scroll is locked while the panel is open", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();

  const overflow = await page.evaluate(() => document.body.style.overflow);
  expect(overflow).toBe("hidden");

  await page.keyboard.press("Escape");
  const overflowAfter = await page.evaluate(() => document.body.style.overflow);
  expect(overflowAfter).not.toBe("hidden");
});

test("a group with real sub-content (Solutions) expands to reveal its real links, without replacing the top-level link (RW-PW07A)", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });

  // The top-level item is still a real link, unaffected by the disclosure.
  await expect(panel.getByRole("link", { name: "Solutions", exact: true })).toBeVisible();

  // The button's accessible name flips ("Expand" <-> "Collapse") with its
  // state, so it's re-located after each click rather than reusing one
  // locator bound to a name that's about to become stale.
  await expect(panel.getByRole("button", { name: "Expand Solutions" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await panel.getByRole("button", { name: "Expand Solutions" }).click();

  const collapseToggle = panel.getByRole("button", { name: "Collapse Solutions" });
  await expect(collapseToggle).toHaveAttribute("aria-expanded", "true");
  await expect(panel.getByRole("link", { name: "Website & Growth" })).toBeVisible();

  await page.getByRole("button", { name: "Collapse Solutions" }).click();
  await expect(panel.getByRole("link", { name: "Website & Growth" })).toBeHidden();
});

test("an item with no reachable children (Work) has no expand control", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });

  await expect(panel.getByRole("link", { name: "Work", exact: true })).toBeVisible();
  await expect(panel.getByRole("button", { name: /Work/ })).toHaveCount(0);
});

test("a group with only secondaryLinks (Company -> Pricing) still gets an expand control on mobile", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });

  await panel.getByRole("button", { name: "Expand Company" }).click();
  await expect(panel.getByRole("link", { name: "Pricing", exact: true })).toBeVisible();
});

// --- RW-PW10: right-side drawer additions ---

test("the drawer is a right-side panel with its own close control, focused on open", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(panel).toBeVisible();

  const box = await panel.boundingBox();
  const viewport = page.viewportSize()!;
  expect(box).not.toBeNull();
  // Anchored to the right edge, not full-width (near-full-screen, not a
  // downward-expanding accordion under the header).
  expect(box!.x + box!.width).toBeGreaterThan(viewport.width - 5);
  expect(box!.width).toBeLessThan(viewport.width);

  const closeButton = panel.getByRole("button", { name: "Close menu" });
  await expect(closeButton).toBeFocused();
  await closeButton.click();
  await expect(panel).toBeHidden();
});

test("clicking the backdrop closes the drawer", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(panel).toBeVisible();

  // Click near the left edge of the viewport — outside the right-anchored
  // drawer, on the backdrop.
  await page.mouse.click(5, 5);
  await expect(panel).toBeHidden();
});

test("only one group is expanded at a time", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });

  await panel.getByRole("button", { name: "Expand Solutions" }).click();
  await expect(panel.getByRole("link", { name: "Website & Growth" })).toBeVisible();

  await panel.getByRole("button", { name: "Expand Company" }).click();
  await expect(panel.getByRole("link", { name: "Website & Growth" })).toBeHidden();
  await expect(panel.getByRole("link", { name: "About" })).toBeVisible();
});

test("expanding a group with a Placeholder reveals its Visual Story illustration", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });

  await expect(panel.getByRole("img")).toHaveCount(0);
  await panel.getByRole("button", { name: "Expand Solutions" }).click();
  await expect(panel.getByRole("img")).toHaveCount(1);
});

test("the primary CTA stays visible in the drawer without scrolling", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();
  const panel = page.getByRole("dialog", { name: "Mobile navigation" });

  await panel.getByRole("button", { name: "Expand Solutions" }).click();
  await expect(panel.getByRole("link", { name: "Find Your Solution" })).toBeVisible();
});
