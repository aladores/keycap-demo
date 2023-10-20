import { z, defineCollection } from 'astro:content';

const gmkCollection = defineCollection ({
    type:'data',
    // schema: z.object({

    // }),
})

export const collections = {
    'gmk': gmkCollection,
}