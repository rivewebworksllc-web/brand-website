/**
 * Only set when a real deployed URL is known. Left undefined on a bare
 * checkout so Next falls back to relative canonicals instead of a
 * hard-coded personal staging domain.
 */
export function getSiteUrl(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  return raw ? new URL(raw) : undefined;
}

export const siteName = "Rive Webworks";
