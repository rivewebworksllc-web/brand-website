function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const projectId = required(
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
);

export const dataset = required(
  "NEXT_PUBLIC_SANITY_DATASET",
  process.env.NEXT_PUBLIC_SANITY_DATASET,
);

export const apiVersion = required(
  "NEXT_PUBLIC_SANITY_API_VERSION",
  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
);

/** Server-only. Never expose this value to the browser. */
export const readToken = process.env.SANITY_API_READ_TOKEN;

/**
 * staging | production. Defaults closed (non-indexable) when unset or
 * anything other than the literal string "production".
 */
export function siteEnv(): "staging" | "production" {
  return process.env.SITE_ENV === "production" ? "production" : "staging";
}

export function isProductionSite(): boolean {
  return siteEnv() === "production";
}
