import type { StructureResolver } from "sanity/structure";

/** Minimal Week 0 placeholder. No document types exist yet to structure. */
export const structure: StructureResolver = (S) =>
  S.list().title("Content").items([]);
