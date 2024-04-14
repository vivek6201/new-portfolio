import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "sanity-nextjs-site",
  title: "Sanity Next.js Site",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});