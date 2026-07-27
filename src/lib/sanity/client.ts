import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

/**
 * Public, read-only client for published content. Uses the CDN and never
 * attaches a token, so it can safely run in Server Components and route
 * handlers without risking authenticated/private reads.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
