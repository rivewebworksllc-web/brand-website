import { describe, expect, it } from "vitest";
import { insightsContent } from "@/lib/content/insights";

describe("RW-PAGE-03 Insights content", () => {
  const resources = [insightsContent.lead, ...insightsContent.latest];

  it("keeps provisional analysis honest and non-navigable", () => {
    for (const resource of resources) {
      expect(resource.type).toBe("insight");
      expect(resource.status).toBe("editorial-review");
      expect(resource.href).toBeUndefined();
      expect(resource.publishedAt).toBeUndefined();
      expect(resource.readingTime).toBeUndefined();
    }
  });

  it("does not introduce fabricated editorial proof fields", () => {
    expect(JSON.stringify(insightsContent)).not.toMatch(/author|percent|survey|customer quote/i);
  });

  it("provides traceable production placeholders", () => {
    for (const media of [insightsContent.lead.media!, insightsContent.signal.media]) {
      expect(media.id).toMatch(/^RW-INSIGHTS-/);
      expect(media.replacement).toBeTruthy();
      expect(media.priority).toMatch(/^P[01]$/);
    }
  });
});
