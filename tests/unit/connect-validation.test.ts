import { describe, expect, it } from "vitest";
import { validateConnectPayload } from "@/lib/connect";

const valid = {
  name: "Ada Lovelace",
  email: "ADA@EXAMPLE.COM",
  organisation: "Analytical Engines",
  interest: "not_sure",
  message: "We have an early platform question and would like help defining the right next step.",
  website: "",
};

describe("Connect server validation", () => {
  it("normalises and accepts the minimal valid payload", () => {
    const result = validateConnectPayload({ ...valid, organisation: "", interest: "" });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.data.email).toBe("ada@example.com");
  });

  it("rejects missing required fields and malformed email", () => {
    const result = validateConnectPayload({ ...valid, name: "", email: "not-an-email", message: "" });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.fieldErrors).toMatchObject({ name: expect.any(String), email: expect.any(String), message: expect.any(String) });
  });

  it("rejects message overflow, unknown interests and unexpected fields", () => {
    const overflow = validateConnectPayload({ ...valid, message: "x".repeat(4001), interest: "internal_taxonomy" });
    expect(overflow.ok).toBe(false);
    if (!overflow.ok) expect(overflow.fieldErrors).toMatchObject({ message: expect.any(String), interest: expect.any(String) });

    const unexpected = validateConnectPayload({ ...valid, budget: "large" });
    expect(unexpected.ok).toBe(false);
    if (!unexpected.ok) expect(unexpected.formError).toMatch(/fields we could not accept/i);
  });

  it("rejects header control characters and arbitrary relay fields", () => {
    const injected = validateConnectPayload({ ...valid, name: "Ada\r\nBcc: attacker@example.com" });
    expect(injected.ok).toBe(false);
    if (!injected.ok) expect(injected.fieldErrors.name).toMatch(/control characters/i);

    for (const key of ["to", "from", "cc", "bcc", "replyTo", "subject"]) {
      const result = validateConnectPayload({ ...valid, [key]: "attacker@example.com" });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.formError).toMatch(/fields we could not accept/i);
    }
  });
});
