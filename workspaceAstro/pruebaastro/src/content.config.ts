import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({
        pattern: ['**/*.md', '**/*.mdx'],
        base: './src/content/posts'
    }),
    schema: z.object({
        titulo: z.string(),
        autor: z.string().optional(),
        fecha: z.string(),
        tags: z.array(z.string()).optional()
    })
})

const projects = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx'],
    base: './src/content/projects'
  }),
  schema: z.object({
    titulo: z.string(),
    autor: z.string().optional(),
    fecha: z.string(),
    tags: z.array(z.string()).optional()
  }),
});

export const collections = { posts, projects }