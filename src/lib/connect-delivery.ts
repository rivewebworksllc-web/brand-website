import { Resend } from "resend";
import type { ConnectInterest, ConnectValues } from "@/lib/connect";

type DeliveryConfig = {
  apiKey?: string;
  from?: string;
  to?: string;
};

type EmailPayload = {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
};

export type ConnectEmailClient = {
  emails: {
    send(payload: EmailPayload): Promise<{ data: { id: string } | null; error: unknown | null }>;
  };
};

export type ConnectDeliveryResult =
  | { ok: true }
  | { ok: false; reason: "configuration" | "provider" };

const interestLabels: Record<ConnectInterest, string> = {
  not_sure: "Not sure yet",
  website: "Website or digital experience",
  cloud: "Cloud or platform foundations",
  ai_automation: "AI or automation",
  ongoing_support: "Ongoing improvement or support",
};

function environmentConfig(): DeliveryConfig {
  return {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONNECT_FROM_EMAIL,
    to: process.env.CONNECT_TO_EMAIL,
  };
}

function validControlledAddress(value?: string): value is string {
  return Boolean(value && !/[\r\n\u0000]/.test(value));
}

export function buildConnectEmail(data: ConnectValues, config: Required<Pick<DeliveryConfig, "from" | "to">>): EmailPayload {
  const lines = [
    "New Rive Webworks enquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ];

  if (data.organisation) lines.push(`Organisation: ${data.organisation}`);
  if (data.interest) lines.push(`Interest: ${interestLabels[data.interest]}`);
  lines.push("", "Message:", data.message);

  return {
    from: config.from,
    to: [config.to],
    replyTo: data.email,
    subject: `New Rive Webworks enquiry - ${data.name}`,
    text: lines.join("\n"),
  };
}

export async function deliverConnectEnquiry(
  data: ConnectValues,
  options: {
    config?: DeliveryConfig;
    createClient?: (apiKey: string) => ConnectEmailClient;
  } = {},
): Promise<ConnectDeliveryResult> {
  const config = options.config ?? environmentConfig();
  if (!config.apiKey || !validControlledAddress(config.from) || !validControlledAddress(config.to)) {
    return { ok: false, reason: "configuration" };
  }

  const client = options.createClient?.(config.apiKey) ?? new Resend(config.apiKey);

  try {
    const result = await client.emails.send(buildConnectEmail(data, { from: config.from, to: config.to }));
    if (result.error || !result.data?.id) return { ok: false, reason: "provider" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "provider" };
  }
}
