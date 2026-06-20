import { createClient } from '@sanity/client'

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  'placeholder-project-id'

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2026-01-01',
  useCdn: false,
  perspective: 'published',
})
