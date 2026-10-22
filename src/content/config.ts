import { defineCollection, z } from 'astro:content';

const membersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.enum(['executive', 'advisor', 'member']),
    order: z.number().default(99),
    position_en: z.string(),
    position_fr: z.string(),
    bio_en: z.string(),
    bio_fr: z.string(),
    email: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
  }),
});

const papersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    date: z.string(),
    featured: z.boolean().default(false),
    link: z.string(),
    tags: z.array(z.string()).default([]),
    summary_en: z.string(),
    summary_fr: z.string(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_en: z.string(),
    title_fr: z.string(),
    date: z.string(),
    time: z.string(),
    location_en: z.string(),
    location_fr: z.string(),
    type: z.enum(['weekly-meeting', 'workshop', 'reading-group', 'meeting-note']),
    upcoming: z.boolean().default(true),
    summary_en: z.string(),
    summary_fr: z.string(),
    link: z.string().optional(),
  }),
});

const presentationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    semester_en: z.string(),
    semester_fr: z.string(),
    week: z.number(),
    title_en: z.string(),
    title_fr: z.string(),
    date: z.string(),
    pdfUrl: z.string(),
    summary_en: z.string(),
    summary_fr: z.string(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slugId: z.string(),
    lang: z.enum(['en', 'fr']),
    title: z.string(),
    author: z.string(),
    date: z.string(),
    venue: z.string().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
  }),
});

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    sectionId: z.string(),
    lang: z.enum(['en', 'fr']),
    title: z.string(),
    subtitle: z.string().optional(),
  }),
});

export const collections = {
  members: membersCollection,
  papers: papersCollection,
  events: eventsCollection,
  presentations: presentationsCollection,
  posts: postsCollection,
  sections: sectionsCollection,
};
