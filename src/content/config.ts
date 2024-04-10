import { z, defineCollection } from "astro:content";

// schema definition per collection
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
  projects: projectsCollection,
};
