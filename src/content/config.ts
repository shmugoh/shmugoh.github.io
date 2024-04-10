import { z, defineCollection } from "astro:content";

// schema definition per collection

// home collection
const homeCollection = defineCollection({
  type: "content",
  schema: z.object({ title: z.string() }),
});

// project collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string(),
  }),
});

// register collection
export const collections = {
  home: homeCollection,
  projects: projectsCollection,
};
