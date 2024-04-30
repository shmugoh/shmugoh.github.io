import { z, defineCollection } from "astro:content";

// schema definition per collection

// home collection
const homeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    language: z.literal("en").or(z.literal("es")),
  }),
});

// project collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    href: z.string(),
    language: z.literal("en").or(z.literal("es")),
    icon: z.string(),
  }),
});

// register collection
export const collections = {
  home: homeCollection,
  projects: projectsCollection,
};
