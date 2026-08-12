import { describe, expect, it } from "vitest";
import { workContent } from "@/lib/content/work";

describe("RW-PAGE-01B work content", () => {
  it("keeps a complete, unique placeholder inventory", () => {
    const placeholders = [
      workContent.hero.visual,
      ...workContent.includes.map((item) => item.visual),
      workContent.system.visual,
      workContent.selected.visual,
      ...workContent.artefacts.items.map((item) => item.meta),
    ];
    expect(new Set(placeholders.map((item) => item.id)).size).toBe(placeholders.length);
    for (const item of placeholders) {
      expect(item).toMatchObject({ id: expect.any(String), category: expect.any(String), purpose: expect.any(String), aspect: expect.any(String), composition: expect.any(String), mood: expect.any(String), replacement: expect.any(String), priority: expect.stringMatching(/^P[0-2]$/), motion: expect.any(String) });
    }
  });

  it("does not populate unsupported public proof", () => {
    const content = JSON.stringify(workContent);
    expect(content).not.toMatch(/testimonial|revenue|conversion increase|uptime guarantee/i);
    expect(content).not.toMatch(/\d+%/);
  });
});
