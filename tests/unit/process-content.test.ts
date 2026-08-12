import { describe, expect, it } from "vitest";
import { processContent } from "@/lib/content/process";

describe("Process content (RW-PAGE-05)", () => {
  it("keeps the complete operating sequence in semantic order", () => {
    expect(processContent.model.phases.map((phase) => phase.title)).toEqual([
      "Understand",
      "Define",
      "Architect",
      "Build",
      "Verify",
      "Launch & handover",
      "Operate & improve",
    ]);
  });

  it("makes non-linear return paths explicit", () => {
    const returnPaths = processContent.model.phases.filter((phase) => "returnNote" in phase);
    expect(returnPaths.map((phase) => phase.id)).toEqual(["architect", "verify", "operate-improve"]);
  });

  it("covers every approved service-domain family without unsupported claims", () => {
    expect(processContent.disciplines.items.map((item) => item.title)).toEqual([
      "Website & digital experience",
      "Cloud & Microsoft",
      "AI & automation",
      "Managed services",
    ]);

    const text = JSON.stringify(processContent);
    expect(text).not.toMatch(/\d+%/);
    expect(text).not.toMatch(/\b(award-winning|certified partner|guaranteed|proven methodology)\b/i);
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });
});
