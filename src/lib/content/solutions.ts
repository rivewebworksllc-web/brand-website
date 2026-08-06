import { homepageFallbackContent } from "@/lib/content/homepage";

/**
 * RW-PHASE-02: the Solutions page is the expanded home for content that
 * already exists — the homepage's buyer-path explorer and featured
 * engagement. Nothing here is new copy; it re-exports the same approved
 * content object so the two surfaces can never drift apart silently.
 */
export const solutionsContent = {
  intro: homepageFallbackContent.buyerPathsIntro,
  paths: homepageFallbackContent.buyerPaths,
  featured: homepageFallbackContent.featuredEngagement,
};
