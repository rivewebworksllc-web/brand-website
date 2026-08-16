import { describe, expect, it } from "vitest";
import { trustContent } from "@/lib/content/trust";
import { evidenceArtifactDetails, evidenceArtifacts, evidencePackContent } from "@/lib/content/evidence-pack";

describe("Evidence Pack content (RW-PAGE-10)", () => {
  it("reuses the six artifacts verbatim from trustContent, not a re-authored copy", () => {
    expect(evidenceArtifacts).toBe(trustContent.evidence.artifacts);
    expect(evidenceArtifacts).toHaveLength(6);
  });

  it("declares a detail extension for every artifact, matched by id", () => {
    expect(evidenceArtifactDetails).toHaveLength(6);
    const artifactIds = evidenceArtifacts.map((a) => a.id).sort();
    const detailIds = evidenceArtifactDetails.map((d) => d.id).sort();
    expect(detailIds).toEqual(artifactIds);
  });

  it("never presents a sample view as real client evidence: no fixed-precision numbers, no client-like names", () => {
    const text = JSON.stringify(evidenceArtifactDetails);
    expect(text).not.toMatch(/\d+(\.\d+)?%/);
    expect(text).not.toMatch(/Acme|Nexus|SmartFlow|Cloudly/i);
    expect(text).not.toMatch(/testimonial|logo/i);
  });

  it("explicitly denies certification/guarantee implication rather than staying silent on it", () => {
    expect(evidencePackContent.claimNote.description).toMatch(/illustrative/i);
    expect(evidencePackContent.claimNote.description).toMatch(/does not imply|no claim|nothing.*implies/i);
  });

  it("reuses the exact evidence-tier copy from trustContent.depth, not a re-authored version", () => {
    expect(evidencePackContent.tierIntro.heading).toBe(trustContent.depth.heading);
    expect(evidencePackContent.tierIntro.description).toBe(trustContent.depth.description);
    expect(evidencePackContent.tierIntro.note).toBe(trustContent.depth.note);
  });

  it("every tier note is phrased as typical, not universal, matching the depth note's own qualification", () => {
    for (const detail of evidenceArtifactDetails) {
      expect(detail.tierNote.toLowerCase()).toMatch(/typically/);
    }
  });

  it("declares distinct hero and final CTAs on the same page (no duplicate CTA intent)", () => {
    const labels = [
      evidencePackContent.hero.primary.label,
      evidencePackContent.hero.secondary.label,
      evidencePackContent.final.primary.label,
      evidencePackContent.final.secondary.label,
    ];
    expect(new Set(labels).size).toBe(labels.length);
  });

  it("contains no em-dash anywhere in the Evidence Pack content authority", () => {
    const text = JSON.stringify(evidencePackContent) + JSON.stringify(evidenceArtifactDetails);
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });
});
