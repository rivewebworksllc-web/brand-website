import type { MetadataRoute } from "next";
import { isProductionSite } from "@/lib/sanity/env";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isProductionSite()) {
    return [];
  }

  return [];
}
