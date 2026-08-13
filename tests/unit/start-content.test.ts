import { describe, expect, it } from "vitest";
import {
  getStartRecommendation,
  hasCompleteStartMapping,
  startIntentIds,
  startIntents,
} from "@/lib/content/start";

describe("Start recommendation content", () => {
  it("defines every approved primary intent exactly once", () => {
    expect(startIntents.map(({ id }) => id)).toEqual(startIntentIds);
    expect(new Set(startIntents.map(({ id }) => id)).size).toBe(startIntents.length);
  });

  it("maps every refinement to a deterministic recommendation", () => {
    expect(hasCompleteStartMapping()).toBe(true);
    for (const intent of startIntents) {
      for (const refinement of intent.refinements) {
        const first = getStartRecommendation(intent.id, refinement.id);
        expect(first).not.toBeNull();
        expect(getStartRecommendation(intent.id, refinement.id)).toEqual(first);
      }
    }
  });

  it("provides a useful fallback for uncertainty", () => {
    expect(getStartRecommendation("unsure")?.direction).toBe("A short discovery conversation");
  });

  it("does not recommend before a required refinement is selected", () => {
    expect(getStartRecommendation("build")).toBeNull();
  });

  it("rejects invalid or cross-intent refinements", () => {
    expect(getStartRecommendation("build", "not-real")).toBeNull();
    expect(getStartRecommendation("build", "automation")).toBeNull();
  });

  it("has no dead-end intent", () => {
    for (const intent of startIntents) {
      const reachable = intent.refinements.length === 0
        ? getStartRecommendation(intent.id)
        : getStartRecommendation(intent.id, intent.refinements[0].id);
      expect(reachable).not.toBeNull();
    }
  });
});
