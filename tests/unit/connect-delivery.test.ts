import { describe, expect, it, vi } from "vitest";
import { buildConnectEmail, deliverConnectEnquiry, type ConnectEmailClient } from "@/lib/connect-delivery";

const enquiry = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  organisation: "Analytical Engines",
  interest: "not_sure" as const,
  message: "We need help defining the right next step.",
  website: "",
};

describe("Resend Connect delivery", () => {
  it("keeps sender and recipient server-controlled and uses validated reply-to", async () => {
    const send = vi.fn().mockResolvedValue({ data: { id: "provider-id" }, error: null });
    const createClient = vi.fn(() => ({ emails: { send } }) as ConnectEmailClient);
    const result = await deliverConnectEnquiry(enquiry, {
      config: { apiKey: "test-key", from: "Rive <sender@rive.invalid>", to: "inbox@rive.invalid" },
      createClient,
    });

    expect(result).toEqual({ ok: true });
    expect(createClient).toHaveBeenCalledWith("test-key");
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(expect.objectContaining({
      from: "Rive <sender@rive.invalid>",
      to: ["inbox@rive.invalid"],
      replyTo: "ada@example.com",
      subject: "New Rive Webworks enquiry - Ada Lovelace",
      text: expect.stringContaining("Message:\nWe need help defining the right next step."),
    }));
  });

  it("does not create a provider client when configuration is missing", async () => {
    const createClient = vi.fn();
    const result = await deliverConnectEnquiry(enquiry, { config: {}, createClient });
    expect(result).toEqual({ ok: false, reason: "configuration" });
    expect(createClient).not.toHaveBeenCalled();
  });

  it("maps provider errors and thrown failures to a safe category", async () => {
    const providerError = await deliverConnectEnquiry(enquiry, {
      config: { apiKey: "test-key", from: "sender@rive.invalid", to: "inbox@rive.invalid" },
      createClient: () => ({ emails: { send: vi.fn().mockResolvedValue({ data: null, error: { message: "sensitive" } }) } }),
    });
    const thrown = await deliverConnectEnquiry(enquiry, {
      config: { apiKey: "test-key", from: "sender@rive.invalid", to: "inbox@rive.invalid" },
      createClient: () => ({ emails: { send: vi.fn().mockRejectedValue(new Error("sensitive")) } }),
    });
    expect(providerError).toEqual({ ok: false, reason: "provider" });
    expect(thrown).toEqual({ ok: false, reason: "provider" });
  });

  it("constructs plain text only and never accepts public relay/header fields", () => {
    const email = buildConnectEmail(enquiry, { from: "sender@rive.invalid", to: "inbox@rive.invalid" });
    expect(email).not.toHaveProperty("html");
    expect(email).not.toHaveProperty("cc");
    expect(email).not.toHaveProperty("bcc");
    expect(email.to).toEqual(["inbox@rive.invalid"]);
  });
});
