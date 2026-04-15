import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Mike Quimson, RDMS, RVT'),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
