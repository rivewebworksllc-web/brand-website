import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every approved route in the build directive ends in a trailing slash
  // (e.g. /start/, /solutions/web-growth/) — keep rendered hrefs consistent
  // with that contract instead of Next's default no-trailing-slash form.
  trailingSlash: true,
};

export default nextConfig;
