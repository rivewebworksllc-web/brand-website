import type { NextConfig } from "next";

const isVisualDev = process.env.RIVE_VISUAL_DEV === "1";

const nextConfig: NextConfig = {
  // Every approved route in the build directive ends in a trailing slash
  // (e.g. /start/, /solutions/web-growth/) — keep rendered hrefs consistent
  // with that contract instead of Next's default no-trailing-slash form.
  trailingSlash: true,

  // Keep the long-running visual-review server isolated from
  // Codex/Claude build and test processes that use the normal `.next`.
  distDir: isVisualDev ? ".next-visual" : ".next",
};

export default nextConfig;
