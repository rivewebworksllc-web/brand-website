import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Presentation Tabs (RW-UX-01)", () => {
  test.setTimeout(60_000);

  test("Work presentation advances, pauses for inspection, then yields permanently on click", async ({ page }) => {
    await page.clock.install();
    await page.goto("/work/");
    const tablist = page.getByRole("tablist", { name: "What the work can include" });
    const presentation = tablist.locator("..");
    await presentation.scrollIntoViewIfNeeded();
    await page.mouse.move(0, 0);

    await expect(tablist.getByRole("tab").nth(0)).toHaveAttribute("aria-selected", "true");
    await page.clock.fastForward(7_100);
    await expect(tablist.getByRole("tab").nth(1)).toHaveAttribute("aria-selected", "true");

    await presentation.hover();
    const held = await tablist.getByRole("tab").evaluateAll((tabs) => tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true"));
    await page.clock.fastForward(7_400);
    await expect(tablist.getByRole("tab").nth(held)).toHaveAttribute("aria-selected", "true");

    await page.mouse.move(0, 0);
    await page.clock.fastForward(1_600);
    await page.clock.fastForward(7_100);
    await expect(tablist.getByRole("tab").nth((held + 1) % 6)).toHaveAttribute("aria-selected", "true");

    const manual = tablist.getByRole("tab").nth(4);
    await manual.click();
    await expect(presentation).toHaveAttribute("data-presentation-mode", "manual");
    await page.clock.fastForward(14_200);
    await expect(manual).toHaveAttribute("aria-selected", "true");
  });

  test("keyboard selection transfers the Insights analysis lens to manual mode", async ({ page }) => {
    await page.clock.install();
    await page.goto("/resources/insights/");
    const signal = page.getByRole("button", { name: /Signal/ });
    const presentation = signal.locator("xpath=ancestor::*[@data-presentation-mode]");
    await presentation.scrollIntoViewIfNeeded();
    const tradeoff = page.getByRole("button", { name: /Trade-off/ });
    await tradeoff.focus();
    await page.keyboard.press("Enter");
    await expect(presentation).toHaveAttribute("data-presentation-mode", "manual");
    await page.clock.fastForward(12_200);
    await expect(tradeoff).toHaveAttribute("aria-pressed", "true");
  });

  test("reduced-motion users begin in manual mode and can still select content", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/work/");
    const tablist = page.getByRole("tablist", { name: "System layers" });
    const presentation = tablist.locator("..");
    await presentation.scrollIntoViewIfNeeded();
    await expect(presentation).toHaveAttribute("data-presentation-mode", "manual");
    await expect(presentation.locator("[data-presentation-progress]")).toHaveCount(0);
    await tablist.getByRole("tab").nth(3).click();
    await expect(tablist.getByRole("tab").nth(3)).toHaveAttribute("aria-selected", "true");
  });

  test("mobile tap takeover is permanent", async ({ page }) => {
    await page.clock.install();
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/resources/insights/");
    const action = page.getByRole("button", { name: /Action/ });
    const presentation = action.locator("xpath=ancestor::*[@data-presentation-mode]");
    await presentation.scrollIntoViewIfNeeded();
    await action.dispatchEvent("pointerdown", { pointerType: "touch" });
    await action.click();
    await expect(presentation).toHaveAttribute("data-presentation-mode", "manual");
    await page.clock.fastForward(12_200);
    await expect(action).toHaveAttribute("aria-pressed", "true");
  });

  test("task controls remain manual and representative pages pass axe", async ({ page }) => {
    await page.goto("/resources/guides/");
    await expect(page.getByRole("tab", { name: "Cloud", exact: true })).not.toHaveAttribute("data-presentation-mode");
    await expect(page.locator("[data-presentation-mode]")).toHaveCount(0);

    await page.goto("/resources/insights/");
    const topicRegion = page.getByRole("region", { name: "Browse by perspective" });
    await expect(topicRegion.locator("[data-presentation-mode]")).toHaveCount(0);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter(({ impact }) => impact === "serious" || impact === "critical")).toEqual([]);
  });
});
