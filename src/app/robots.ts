import type { MetadataRoute } from "next";
import { isProductionSite } from "@/lib/sanity/env";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
