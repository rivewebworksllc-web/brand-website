import { describe, expect, it } from "vitest";
import { trustContent } from "@/lib/content/trust";
import {
  accessPath,
  accessibilityContent,
  ariaContent,
  automatedVsManual,
  evidenceRelationship,
  illustrativeIssue,
  keyboardPath,
  positioning,
  principles,
  relationships,
  remediationLoop,
} from "@/lib/content/accessibility";

describe("Accessibility Trust page content (RW-PAGE-12R)", () => {
  it("never claims certification, compliance or guaranteed accessibility", () => {
    const text = JSON.stringify({ positioning, accessibilityContent, automatedVsManual, ariaContent, relationships });
    expect(text).not.toMatch(/wcag certified/i);
    expect(text).not.toMatch(/fully wcag compliant/i);
    expect(text).not.toMatch(/ada compliant/i);
    expect(text).not.toMatch(/legally compliant/i);
    expect(text).not.toMatch(/guaranteed accessib/i);
    expect(text).not.toMatch(/100% accessib/i);
    expect(text).not.toMatch(/zero accessibility risk/i);
  });

  it("states the WCAG 2.2 AA-informed framing, not a certification claim", () => {
    expect(positioning.statement).toMatch(/WCAG 2\.2 AA-informed/);
  });

  it("reuses the exact accessibility boundary from trustContent.boundaries, not a re-authored version", () => {
    const trustAccessibilityItem = trustContent.boundaries.items.find((i) => i.title === "Accessibility")!;
    expect(relationships.boundary).toBe(trustAccessibilityItem);
    expect(relationships.boundary.boundary).toMatch(/does not imply formal certification/i);
  });

  it("declares no new commercial fact: no price, no code, no CTA to buy", () => {
    const text = JSON.stringify(accessibilityContent);
    expect(text).not.toMatch(/\$\d/);
    expect(text).not.toMatch(/OPT-12|OPT-09/);
    expect(text.toLowerCase()).not.toMatch(/book paid discovery/);
  });

  it("declares five Access Path steps, each with a barrier and a verified state as full text", () => {
    expect(accessPath).toHaveLength(5);
    for (const step of accessPath) {
      expect(step.barrier.length).toBeGreaterThan(10);
      expect(step.verified.length).toBeGreaterThan(10);
    }
  });

  it("declares four principles framed as established WCAG concepts", () => {
    expect(principles.map((p) => p.title)).toEqual(["Perceivable", "Operable", "Understandable", "Robust"]);
  });

  it("declares seven Keyboard Path stops with a text state label for every stop (never color alone)", () => {
    expect(keyboardPath).toHaveLength(7);
    for (const stop of keyboardPath) {
      expect(["passes", "interrupted", "restored"]).toContain(stop.state);
      expect(stop.note.length).toBeGreaterThan(5);
    }
    const interrupted = keyboardPath.filter((s) => s.state === "interrupted");
    const restored = keyboardPath.filter((s) => s.state === "restored");
    expect(interrupted.length).toBeGreaterThan(0);
    expect(restored.length).toBeGreaterThan(0);
  });

  it("never invents an automated-detection percentage", () => {
    const text = JSON.stringify(automatedVsManual);
    expect(text).not.toMatch(/\d+%/);
  });

  it("states the not-a-score credibility point explicitly", () => {
    expect(automatedVsManual.notAScoreNote.toLowerCase()).toMatch(/not/);
    expect(automatedVsManual.notAScoreNote.toLowerCase()).toMatch(/score|badge/);
  });

  it("the ARIA section warns against incorrect ARIA, not 'more ARIA is better'", () => {
    expect(ariaContent.warning.toLowerCase()).toMatch(/incorrect aria/);
    expect(ariaContent.principle.toLowerCase()).toMatch(/native/);
  });

  it("the illustrative issue uses a qualitative impact label, not a fabricated severity score", () => {
    expect(["Blocks completion", "Significantly interferes", "Creates friction", "Minor improvement"]).toContain(illustrativeIssue.impact);
    expect(JSON.stringify(illustrativeIssue)).not.toMatch(/severity [0-9]|critical|p0|p1/i);
  });

  it("declares five Remediation Loop steps that close back to Detect, distinct from a roadmap", () => {
    expect(remediationLoop).toHaveLength(5);
    expect(remediationLoop.map((s) => s.label)).toEqual(["Detect", "Reproduce", "Fix", "Re-test", "Record"]);
  });

  it("the Evidence Pack relationship routes to the real route and includes a privacy-boundedness note", () => {
    expect(evidenceRelationship.cta.href).toBe("/trust/evidence-pack/");
    expect(evidenceRelationship.privacyNote.length).toBeGreaterThan(10);
  });

  it("distinguishes UXR-01 (commercial engagement) from this page (operating practice)", () => {
    const uxrItem = relationships.items.find((i) => i.label.includes("UX Audit"))!;
    expect(uxrItem.cta.href).toBe("/services/web/ux-audit-conversion-roadmap/");
    expect(uxrItem.body.toLowerCase()).toMatch(/commercial/);
  });

  it("contains no em-dash anywhere in the content authority", () => {
    const text = JSON.stringify({
      positioning,
      accessPath,
      principles,
      keyboardPath,
      automatedVsManual,
      ariaContent,
      illustrativeIssue,
      remediationLoop,
      evidenceRelationship,
      relationships,
      accessibilityContent,
    });
    expect(text).not.toContain("—");
    expect(text).not.toContain("–");
  });
});
