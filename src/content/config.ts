import { z, defineCollection } from 'astro:content';

const licytacjeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    location: z.string(),
    startPrice: z.string().optional(),
    estimatedValue: z.string().optional(),
    images: z.array(z.string()).optional(),
    category: z.enum(['nieruchomosci', 'ruchomosci', 'pojazdy', 'inne']),
    status: z.enum(['aktywna', 'zakonczona', 'anulowana']).default('aktywna'),
    publishDate: z.date(),
  }),
});

const aktualnosciCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Kancelaria Komornicza'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const formulazeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    fileUrl: z.string(),
    fileSize: z.string().optional(),
    publishDate: z.date(),
  }),
});

const wydarzeniaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    category: z.enum(['licytacja', 'termin', 'wakacje', 'wazne']),
    allDay: z.boolean().default(false),
  }),
});

export const collections = {
  'licytacje': licytacjeCollection,
  'aktualnosci': aktualnosciCollection,
  'formularze': formulazeCollection,
  'wydarzenia': wydarzeniaCollection,
};
