import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/lib/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

/**
 * Minimum valid Studio configuration for Week 0. Not deployed; used only to
 * validate the schema/config wiring locally. Week 2 expands the schema set.
 */
export default defineConfig({
  name: "rive-webworks",
  title: "Rive Webworks",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
