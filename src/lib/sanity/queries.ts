import { defineQuery } from "next-sanity";

/** Harmless connectivity check: counts all published documents. Reads no content. */
export const documentCountQuery = defineQuery("count(*[])");
