import { sanityClient } from './client'
import {
  fallbackActivities,
  fallbackContactCards,
  fallbackDisciplinePrograms,
  fallbackDisciplines,
  fallbackFaqs,
  fallbackHomeSettings,
  fallbackInstructors,
  fallbackLocations,
  fallbackNews,
  fallbackPartners,
  fallbackSiteCopy,
} from './fallbacks'
import type {
  ActivityEvent,
  ContactCard,
  DisciplineProgram,
  Discipline,
  FaqItem,
  HomeSettings,
  InstructorItem,
  Location,
  NewsItem,
  PartnerItem,
  SiteCopy,
} from './types'

const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID

const hasSanityConfig =
  !!sanityProjectId && sanityProjectId !== 'placeholder-project-id'

// Set to true only for emergency rollback.
// Keep this false to surface missing/forgotten Sanity content immediately.
const USE_SANITY_FALLBACKS = false

function failMissingSanity(documentType: string): never {
  throw new Error(`Missing required Sanity content for type: ${documentType}`)
}

async function safeFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!hasSanityConfig) return null

  try {
    if (params) {
      return await sanityClient.fetch<T>(query, params as Record<string, string | number | boolean>, {
        cache: 'no-store',
      })
    }
    return await sanityClient.fetch<T>(query, {}, { cache: 'no-store' })
  } catch (error) {
    console.error('Sanity fetch failed:', error)
    return null
  }
}

export async function getHomeSettings(): Promise<HomeSettings> {
  const data = await safeFetch<HomeSettings>(`
    *[_type == "homeSettings"][0]{
      "missionLabel": coalesce(missionLabel, "La nostra missione"),
      "missionTitle": coalesce(missionTitle, "Chi Siamo"),
      "missionText1": coalesce(missionText1, ""),
      "missionText2": coalesce(missionText2, ""),
      "affiliations": coalesce(affiliations, [])
    }
  `)

  if (data) return data
  if (USE_SANITY_FALLBACKS) return fallbackHomeSettings
  return failMissingSanity('homeSettings')
}

export async function getFaqs(): Promise<FaqItem[]> {
  const data = await safeFetch<FaqItem[]>(`*[_type == "faq"] | order(order asc){question, answer, order}`)
  if (data && data.length > 0) return data
  if (USE_SANITY_FALLBACKS) return fallbackFaqs
  return failMissingSanity('faq')
}

export async function getDisciplines(): Promise<Discipline[]> {
  const data = await safeFetch<Discipline[]>(`
    *[_type == "discipline"] | order(order asc){
      "slug": slug.current,
      name,
      subtitle,
      tagline,
      description,
      "fullText": coalesce(fullText, []),
      "features": coalesce(features, []),
      "image": image.asset->url,
      "imageAlt": coalesce(imageAlt, name),
      "ctaText": coalesce(ctaText, "Inizia ora"),
      order
    }
  `)

  if (data && data.length > 0) return data
  if (USE_SANITY_FALLBACKS) return fallbackDisciplines
  return failMissingSanity('discipline')
}

export async function getDisciplineBySlug(slug: string): Promise<Discipline | null> {
  const data = await safeFetch<Discipline>(`
    *[_type == "discipline" && slug.current == $slug][0]{
      "slug": slug.current,
      name,
      subtitle,
      tagline,
      description,
      "fullText": coalesce(fullText, []),
      "features": coalesce(features, []),
      "image": image.asset->url,
      "imageAlt": coalesce(imageAlt, name),
      "ctaText": coalesce(ctaText, "Inizia ora"),
      order
    }
  `, { slug })

  if (data) return data
  if (USE_SANITY_FALLBACKS) return fallbackDisciplines.find((d) => d.slug === slug) || null
  return null
}

export async function getLocations(): Promise<Location[]> {
  const data = await safeFetch<Location[]>(`
    *[_type == "location"] | order(order asc){
      "id": coalesce(anchorId, slug.current),
      name,
      subtitle,
      address,
      mapsEmbed,
      mapsLink,
      "schedule": coalesce(schedule, []),
      order
    }
  `)

  if (data && data.length > 0) return data

  const legacyData = await safeFetch<Location[]>(`
    *[_type == "sede"] | order(name asc){
      "id": slug.current,
      name,
      subtitle,
      address,
      "mapsEmbed": mapsEmbedUrl,
      "mapsLink": "",
      "schedule": coalesce(orari, [])[]{
        "discipline": disciplina,
        "entries": coalesce(entries, [])
      },
      "order": 999
    }
  `)

  if (legacyData && legacyData.length > 0) return legacyData
  if (USE_SANITY_FALLBACKS) return fallbackLocations
  return failMissingSanity('location')
}

export async function getNews(): Promise<NewsItem[]> {
  const data = await safeFetch<NewsItem[]>(`
    *[_type == "news"] | order(date desc){
      "slug": slug.current,
      title,
      date,
      excerpt,
      "image": image.asset->url,
      category
    }
  `)

  if (data && data.length > 0) return data
  if (USE_SANITY_FALLBACKS) return fallbackNews
  return failMissingSanity('news')
}

export async function getActivityEvents(): Promise<ActivityEvent[]> {
  const data = await safeFetch<ActivityEvent[]>(`
    *[_type == "event"] | order(year desc, title asc){
      "slug": slug.current,
      title,
      "year": string(year),
      "coverImage": coverImage.asset->url,
      "images": images[]{
        "src": asset->url,
        alt,
        title
      }
    }
  `)

  if (data && data.length > 0) return data
  if (USE_SANITY_FALLBACKS) return fallbackActivities

  // Events are optional content: return an empty list when nothing is published.
  return []
}

export async function getPartners(): Promise<PartnerItem[]> {
  const data = await safeFetch<PartnerItem[]>(`
    *[_type == "partner"] | order(order asc){
      name,
      href,
      "image": image.asset->url,
      description,
      order
    }
  `)

  if (data && data.length > 0) return data
  if (USE_SANITY_FALLBACKS) return fallbackPartners
  return failMissingSanity('partner')
}

export async function getInstructors(): Promise<InstructorItem[]> {
  const data = await safeFetch<InstructorItem[]>(`
    *[_type == "instructor"] | order(order asc){
      name,
      title,
      description,
      "image": image.asset->url,
      order
    }
  `)

  if (data && data.length > 0) return data
  if (USE_SANITY_FALLBACKS) return fallbackInstructors
  return failMissingSanity('instructor')
}

export async function getContactCards(): Promise<ContactCard[]> {
  const data = await safeFetch<ContactCard[]>(`
    *[_type == "contactCard"] | order(order asc){
      role,
      name,
      sedi,
      phone,
      phoneHref,
      email,
      emailHref,
      "image": image.asset->url,
      order
    }
  `)

  if (data && data.length > 0) return data
  if (USE_SANITY_FALLBACKS) return fallbackContactCards
  return failMissingSanity('contactCard')
}

export async function getSiteCopy(): Promise<SiteCopy> {
  const data = await safeFetch<SiteCopy>(`
    *[_type == "siteCopy"][0]{
      "footerBrandTitle": coalesce(footerBrandTitle, ""),
      "footerOrgLine": coalesce(footerOrgLine, ""),
      "footerDescription": coalesce(footerDescription, ""),
      "homeCtaTitle": coalesce(homeCtaTitle, ""),
      "homeCtaText": coalesce(homeCtaText, ""),
      "sediBadge": coalesce(sediBadge, ""),
      "sediLead": coalesce(sediLead, ""),
      "attivitaBadge": coalesce(attivitaBadge, ""),
      "attivitaLead": coalesce(attivitaLead, ""),
      "istruttoriBadge": coalesce(istruttoriBadge, ""),
      "istruttoriLead": coalesce(istruttoriLead, ""),
      "newsBadge": coalesce(newsBadge, ""),
      "newsLead": coalesce(newsLead, ""),
      "contattiBadge": coalesce(contattiBadge, ""),
      "contattiLead": coalesce(contattiLead, ""),
      "partnerBadge": coalesce(partnerBadge, ""),
      "partnerLead": coalesce(partnerLead, "")
    }
  `)

  if (!data) {
    if (USE_SANITY_FALLBACKS) return fallbackSiteCopy
    return failMissingSanity('siteCopy')
  }

  const isComplete =
    !!data.footerBrandTitle &&
    !!data.footerOrgLine &&
    !!data.footerDescription &&
    !!data.homeCtaTitle &&
    !!data.homeCtaText &&
    !!data.sediBadge &&
    !!data.sediLead &&
    !!data.attivitaBadge &&
    !!data.attivitaLead &&
    !!data.istruttoriBadge &&
    !!data.istruttoriLead &&
    !!data.newsBadge &&
    !!data.newsLead &&
    !!data.contattiBadge &&
    !!data.contattiLead &&
    !!data.partnerBadge &&
    !!data.partnerLead

  if (!isComplete && !USE_SANITY_FALLBACKS) {
    return failMissingSanity('siteCopy (one or more fields are empty)')
  }

  if (!isComplete && USE_SANITY_FALLBACKS) {
    return fallbackSiteCopy
  }

  return {
    footerBrandTitle: data.footerBrandTitle || fallbackSiteCopy.footerBrandTitle,
    footerOrgLine: data.footerOrgLine || fallbackSiteCopy.footerOrgLine,
    footerDescription: data.footerDescription || fallbackSiteCopy.footerDescription,
    homeCtaTitle: data.homeCtaTitle || fallbackSiteCopy.homeCtaTitle,
    homeCtaText: data.homeCtaText || fallbackSiteCopy.homeCtaText,
    sediBadge: data.sediBadge || fallbackSiteCopy.sediBadge,
    sediLead: data.sediLead || fallbackSiteCopy.sediLead,
    attivitaBadge: data.attivitaBadge || fallbackSiteCopy.attivitaBadge,
    attivitaLead: data.attivitaLead || fallbackSiteCopy.attivitaLead,
    istruttoriBadge: data.istruttoriBadge || fallbackSiteCopy.istruttoriBadge,
    istruttoriLead: data.istruttoriLead || fallbackSiteCopy.istruttoriLead,
    newsBadge: data.newsBadge || fallbackSiteCopy.newsBadge,
    newsLead: data.newsLead || fallbackSiteCopy.newsLead,
    contattiBadge: data.contattiBadge || fallbackSiteCopy.contattiBadge,
    contattiLead: data.contattiLead || fallbackSiteCopy.contattiLead,
    partnerBadge: data.partnerBadge || fallbackSiteCopy.partnerBadge,
    partnerLead: data.partnerLead || fallbackSiteCopy.partnerLead,
  }
}

export async function getDisciplineProgramBySlug(slug: string): Promise<DisciplineProgram | null> {
  const data = await safeFetch<DisciplineProgram>(`
    *[_type == "disciplineProgram" && disciplineSlug == $slug][0]{
      disciplineSlug,
      "title": coalesce(title, "Programma ufficiale"),
      "federationTitle": coalesce(federationTitle, "Programma ufficiale della Plum Blossom International Federation"),
      logoUrl,
      "levels": coalesce(levels, [])[]{
        level,
        sash,
        "curriculum": coalesce(curriculum, []),
        "stripes": coalesce(stripes, [])[]{
          name,
          "items": coalesce(items, [])
        },
        "notes": coalesce(notes, [])
      }
    }
  `, { slug })

  if (data && data.levels && data.levels.length > 0) return data

  if (USE_SANITY_FALLBACKS) {
    return fallbackDisciplinePrograms.find((program) => program.disciplineSlug === slug) || null
  }

  return failMissingSanity(`disciplineProgram (${slug})`)
}
