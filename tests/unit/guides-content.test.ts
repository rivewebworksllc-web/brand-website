import { describe, expect, it } from "vitest";
import { guidesContent } from "@/lib/content/guides";
import { resourceCategories } from "@/lib/content/resources";

describe("RW-PAGE-02 Guides content", () => {
  it("covers only the approved editorial disciplines", () => {
    expect(guidesContent.library.map((guide) => guide.category).sort()).toEqual(
      resourceCategories.filter((category) => category !== "all").sort(),
    );
  });

  it("keeps unpublished resources in an honest non-link state", () => {
    for (const resource of [guidesContent.featured, ...guidesContent.library]) {
      expect(resource.status).toBe("editorial-review");
      expect(resource.href).toBeUndefined();
      expect(resource.publishedAt).toBeUndefined();
      expect(resource.readingTime).toBeUndefined();
    }
  });

  it("provides complete traceability for both editorial placeholders", () => {
    for (const media of [guidesContent.hero.media, guidesContent.featured.media!]) {
      expect(media.id).toMatch(/^RW-GUIDES-/);
      expect(media.purpose).toBeTruthy();
      expect(media.composition).toBeTruthy();
      expect(media.replacement).toBeTruthy();
    }
  });
});
