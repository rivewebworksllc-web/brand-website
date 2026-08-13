import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.use({ viewport: { width: 1440, height: 900 } });

test("homepage presents the v48 chapters in authoritative order", async ({ page }) => {
  await page.goto("/");
  const main = page.locator("main");
  const text = await main.innerText();
  const chapters = [
    "Cloud, AI & Web Design Built on Evidence, Not Promises",
    "Evidence is part of the deliverable.",
    "Start with the problem you can see.",
    "Three lead capabilities. One accountable relationship.",
    "Continuity from first engagement to lasting ownership.",
    "Technology decisions land in real organisations.",
    "The wider system stays within reach.",
    "Make the next technology decision with more context.",
    "Start with direction, or start the conversation.",
  ];
  let cursor = -1;
  for (const chapter of chapters) {
    const next = text.indexOf(chapter);
    expect(next).toBeGreaterThan(cursor);
    cursor = next;
  }
});

test("four buyer cards route by problem in Cloud, AI, Web and Care order", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("section", { has: page.getByRole("heading", { name: "Start with the problem you can see." }) });
  const links = section.getByRole("link");
  await expect(links).toHaveCount(4);
  const expected = [
    ["Explore Cloud Modernization", "/solutions/cloud-modernization/"],
    ["Explore Secure AI & Automation", "/solutions/ai-data-automation/"],
    ["Explore Website & Growth", "/solutions/web-growth/"],
    ["Explore Managed Care & Advisory", "/solutions/managed-services/"],
  ] as const;
  for (const [name, href] of expected) await expect(section.getByRole("link", { name: new RegExp(name) })).toHaveAttribute("href", href);
});

test("Presentation Tabs select Cloud, AI and Web in one editorial plane", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("section", { has: page.getByRole("heading", { name: "Three lead capabilities. One accountable relationship." }) });
  const tablist = section.getByRole("tablist", { name: "Cloud, AI and Web services" });
  const cloud = tablist.getByRole("tab", { name: /Cloud Architecture/ });
  const ai = tablist.getByRole("tab", { name: /AI & Intelligent/ });
  const web = tablist.getByRole("tab", { name: /Web Design/ });
  await expect(cloud).toHaveAttribute("aria-selected", "true");
  await expect(section.getByRole("tabpanel")).toContainText("AWS and Microsoft foundations");
  await ai.click();
  await expect(ai).toHaveAttribute("aria-selected", "true");
  await expect(section.getByRole("tabpanel")).toContainText("Copilot Studio");
  await web.click();
  await expect(web).toHaveAttribute("aria-selected", "true");
  await expect(section.getByRole("tabpanel")).toContainText("WordPress remains supported");
});

test("Presentation Tabs support arrow, Home and End keys", async ({ page }) => {
  await page.goto("/");
  const tablist = page.getByRole("tablist", { name: "Cloud, AI and Web services" });
  const cloud = tablist.getByRole("tab", { name: /Cloud Architecture/ });
  const ai = tablist.getByRole("tab", { name: /AI & Intelligent/ });
  const web = tablist.getByRole("tab", { name: /Web Design/ });
  await cloud.focus();
  await page.keyboard.press("ArrowRight");
  await expect(ai).toBeFocused();
  await page.keyboard.press("End");
  await expect(web).toBeFocused();
  await page.keyboard.press("Home");
  await expect(cloud).toBeFocused();
});

test("all three offer summaries remain in server-rendered HTML", async ({ page }) => {
  await page.goto("/");
  const mainHtml = await page.locator("main").innerText();
  expect(mainHtml).toContain("A cloud foundation you can explain and operate.");
  expect(mainHtml).toContain("Intelligence with boundaries, evaluation and ownership.");
  expect(mainHtml).toContain("A modern platform chosen for the work, not the trend.");
});

test("Evidence Pack is structured proof with six records", async ({ page }) => {
  await page.goto("/");
  const evidence = page.locator("#evidence-pack");
  await expect(evidence.getByRole("listitem")).toHaveCount(6);
  for (const name of ["Scope record", "Architecture", "QA evidence", "Launch checklist", "Runbook", "Improvement backlog"]) await expect(evidence.getByText(name, { exact: true })).toBeVisible();
});

test("process, industries, capabilities and resources expose the approved routes", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "See Delivery Process" })).toHaveAttribute("href", "/company/process/");
  await expect(page.getByRole("link", { name: "Choose My Industry" })).toHaveAttribute("href", "/industries/");
  await expect(page.getByRole("link", { name: "View All Capabilities" })).toHaveAttribute("href", "/services/");
  await expect(page.getByRole("link", { name: "Explore Resources" })).toHaveAttribute("href", "/resources/guides/");
  for (const stage of ["Land", "Expand", "Retain"]) await expect(page.getByRole("heading", { name: stage, exact: true })).toBeVisible();
  for (const industry of ["Healthcare", "B2B SaaS / IT Services", "Professional Services", "Local Services", "Nonprofit"]) await expect(page.getByRole("heading", { name: industry })).toBeVisible();
});

test("final conversion uses approved Start and Connect routes", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("section", { has: page.getByRole("heading", { name: "Start with direction, or start the conversation." }) });
  await expect(section.getByRole("link", { name: "Find Your Solution" })).toHaveAttribute("href", "/start/");
  await expect(section.getByRole("link", { name: "Start a Conversation" })).toHaveAttribute("href", "/connect/");
});

test("homepage never invents partner, testimonial or numeric proof claims", async ({ page }) => {
  await page.goto("/");
  const body = (await page.locator("body").innerText()).toLowerCase();
  expect(body).not.toMatch(/aws partner|microsoft solutions partner|certified partner/);
  expect(body).not.toMatch(/\d+%\s+(increase|improvement|growth|faster)/i);
});

for (const viewport of [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
]) {
  test(`homepage has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ browser }) => {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    await context.close();
  });
}

test("homepage Presentation Tabs begin manual under reduced motion", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  const presentation = page.getByRole("tablist", { name: "Cloud, AI and Web services" }).locator("..");
  await expect(presentation).toHaveAttribute("data-presentation-mode", "manual");
  await context.close();
});

test("homepage has no serious or critical accessibility violations in dark mode", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("rive-theme", "dark"));
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/dark/);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical")).toEqual([]);
});
