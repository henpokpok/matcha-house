import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    price: z.number(),
    priceString: z.string(),
    category: z.string(),
    tag: z.string(),
    location: z.string().optional(),
    description: z.string(),
    mainImage: z.string(),
    thumbnails: z.array(z.string()),
    altText: z.string(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string().default('Zenith Editorial'),
    category: z.string(),
    readTime: z.string(),
    mainImage: z.string(),
    altText: z.string(),
  }),
});

export const collections = {
  products: productsCollection,
  blog: blogCollection,
};
