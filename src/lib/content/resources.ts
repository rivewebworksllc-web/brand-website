import type { PlaceholderMeta } from "@/components/media/Placeholder";

export const resourceCategories = [
  "all",
  "web",
  "cloud",
  "microsoft",
  "ai",
  "automation",
  "security-governance",
] as const;

export type ResourceCategory = (typeof resourceCategories)[number];
export type GuideCategory = Exclude<ResourceCategory, "all">;

export const resourceCategoryLabels: Record<ResourceCategory, string> = {
  all: "All",
  web: "Web",
  cloud: "Cloud",
  microsoft: "Microsoft",
  ai: "AI",
  automation: "Automation",
  "security-governance": "Security & Governance",
};

export type EditorialResource = {
  id: string;
  title: string;
  excerpt: string;
  category: GuideCategory;
  status: "editorial-review";
  featured?: boolean;
  href?: string;
  readingTime?: string;
  publishedAt?: string;
  media?: PlaceholderMeta;
};
