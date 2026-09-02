import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const site = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/site' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    contact: z
      .object({
        email: z.email().optional(),
        phone: z.string().optional(),
        whatsapp: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { site };