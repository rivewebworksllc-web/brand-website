export const CONNECT_INTERESTS = [
  "not_sure",
  "website",
  "cloud",
  "ai_automation",
  "ongoing_support",
] as const;

export type ConnectInterest = (typeof CONNECT_INTERESTS)[number];

export type ConnectValues = {
  name: string;
  email: string;
  organisation: string;
  interest: ConnectInterest | "";
  message: string;
  website: string;
};

export type ConnectField = keyof Omit<ConnectValues, "website">;

export type ConnectValidationResult =
  | { ok: true; data: ConnectValues }
  | { ok: false; fieldErrors: Partial<Record<ConnectField, string>>; formError?: string };

const LIMITS = {
  name: 120,
  email: 254,
  organisation: 160,
  message: 4000,
  website: 200,
} as const;

const ALLOWED_KEYS = new Set(["name", "email", "organisation", "interest", "message", "website"]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HEADER_CONTROL_PATTERN = /[\u0000-\u001f\u007f]/;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().replace(/\r\n?/g, "\n") : "";
}

export function validateConnectPayload(payload: unknown): ConnectValidationResult {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ok: false, fieldErrors: {}, formError: "We could not read this enquiry. Please review the form and try again." };
  }

  const record = payload as Record<string, unknown>;
  if (Object.keys(record).some((key) => !ALLOWED_KEYS.has(key))) {
    return { ok: false, fieldErrors: {}, formError: "The enquiry contained fields we could not accept." };
  }

  const data: ConnectValues = {
    name: clean(record.name),
    email: clean(record.email).toLowerCase(),
    organisation: clean(record.organisation),
    interest: clean(record.interest) as ConnectValues["interest"],
    message: clean(record.message),
    website: clean(record.website),
  };
  const fieldErrors: Partial<Record<ConnectField, string>> = {};

  if (!data.name) fieldErrors.name = "Enter your name.";
  else if (HEADER_CONTROL_PATTERN.test(data.name)) fieldErrors.name = "Enter your name without line breaks or control characters.";
  else if (data.name.length > LIMITS.name) fieldErrors.name = `Keep your name to ${LIMITS.name} characters or fewer.`;

  if (!data.email) fieldErrors.email = "Enter your email address.";
  else if (data.email.length > LIMITS.email || !EMAIL_PATTERN.test(data.email)) fieldErrors.email = "Enter a valid email address.";

  if (data.organisation.length > LIMITS.organisation) {
    fieldErrors.organisation = `Keep the organisation name to ${LIMITS.organisation} characters or fewer.`;
  }

  if (data.interest && !CONNECT_INTERESTS.includes(data.interest as ConnectInterest)) {
    fieldErrors.interest = "Choose one of the available options.";
  }

  if (!data.message) fieldErrors.message = "Tell us what you would like to discuss.";
  else if (data.message.length > LIMITS.message) fieldErrors.message = `Keep your message to ${LIMITS.message} characters or fewer.`;

  if (data.website.length > LIMITS.website) {
    return { ok: false, fieldErrors: {}, formError: "We could not accept this enquiry." };
  }

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };
  return { ok: true, data };
}

export const connectLimits = LIMITS;
