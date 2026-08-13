import { afterEach, describe, expect, it, vi } from "vitest";
import { handleConnectPost } from "@/lib/connect-handler";

function request(body: unknown) {
  return new Request("http://localhost/api/connect", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  organisation: "Analytical Engines",
  interest: "not_sure",
  message: "We need help understanding the right starting point for a platform change.",
  website: "",
};

describe("Connect route boundary", () => {
  afterEach(() => vi.restoreAllMocks());

  it("does not invoke delivery for invalid input", async () => {
    const deliver = vi.fn();
    const response = await handleConnectPost(request({ ...valid, email: "invalid" }), deliver, true);
    expect(response.status).toBe(400);
    expect(deliver).not.toHaveBeenCalled();
    await expect(response.json()).resolves.toMatchObject({ ok: false, fieldErrors: { email: expect.any(String) } });
  });

  it("does not invoke delivery for honeypot submissions", async () => {
    const deliver = vi.fn();
    const response = await handleConnectPost(request({ ...valid, website: "https://spam.invalid" }), deliver, true);
    expect(response.status).toBe(400);
    expect(deliver).not.toHaveBeenCalled();
  });

  it("returns success only after the delivery boundary accepts the enquiry", async () => {
    const deliver = vi.fn().mockResolvedValue({ ok: true });
    const response = await handleConnectPost(request(valid), deliver, true);
    expect(response.status).toBe(200);
    expect(deliver).toHaveBeenCalledTimes(1);
    expect(deliver).toHaveBeenCalledWith(expect.objectContaining({ email: "ada@example.com", website: "" }));
    await expect(response.json()).resolves.toEqual({ ok: true });
  });

  it("returns a safe failure without exposing provider details", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const deliver = vi.fn().mockResolvedValue({ ok: false, reason: "provider" });
    const response = await handleConnectPost(request(valid), deliver, true);
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({ ok: false, formError: "Your enquiry was not sent. Please try again." });
  });

  it("keeps the route closed before delivery activation", async () => {
    const deliver = vi.fn();
    const response = await handleConnectPost(request(valid), deliver, false);
    expect(response.status).toBe(503);
    expect(deliver).not.toHaveBeenCalled();
    await expect(response.json()).resolves.toEqual({
      ok: false,
      formError: "Online enquiries are not available yet.",
    });
  });
});
