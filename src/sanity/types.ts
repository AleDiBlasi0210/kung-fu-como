import type { PortableTextBlock } from '@portabletext/react'

export type HomeSettings = {
  missionLabel: string
  missionTitle: string
  missionText1: string
  missionText2: string
  affiliations: string[]
  heroImage?: string
}

export type FaqItem = {
  question: string
  answer: string
  order?: number
}

export type DisciplineFeature = {
  icon: string
  title: string
  desc: string
}

export type Discipline = {
  slug: string
  name: string
  subtitle: string
  tagline: string
  description: string
  fullText: string[]
  features: DisciplineFeature[]
  image: string
  imageAlt: string
  ctaText: string
  order?: number
}

export type LocationSchedule = {
  discipline: string
  entries: string[]
}

export type Location = {
  id: string
  name: string
  subtitle: string
  address: string
  mapsEmbed: string
  mapsLink: string
  schedule: LocationSchedule[]
  order?: number
  homeBadge?: string
  homeBadgeHighlight?: boolean
  homeShortAddress?: string
  homeDisciplines?: string
  homeDays?: string
}

export type NewsItem = {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
  content?: PortableTextBlock[]
}

export type ActivityImage = {
  src: string
  alt: string
  title?: string
}

export type ActivityEvent = {
  slug: string
  title: string
  year: string
  coverImage: string
  images: ActivityImage[]
}

export type PartnerItem = {
  name: string
  href: string
  bannerHref?: string
  image: string
  description: string
  order?: number
}

export type InstructorItem = {
  name: string
  title: string
  grade?: string
  gradeOrder?: number
  description: string
  image: string
  order?: number
}

export type ContactCard = {
  role: string
  name: string
  sedi: string
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  image?: string
  order?: number
}

export type SiteCopy = {
  footerBrandTitle: string
  footerOrgLine: string
  footerDescription: string
  fiscalCode?: string
  vatNumber?: string
  homeCtaTitle: string
  homeCtaText: string
  sediBadge: string
  sediLead: string
  attivitaBadge: string
  attivitaLead: string
  istruttoriBadge: string
  istruttoriLead: string
  newsBadge: string
  newsLead: string
  contattiBadge: string
  contattiLead: string
  partnerBadge: string
  partnerLead: string
}

export type DisciplineProgramStripe = {
  name: string
  items: string[]
}

export type DisciplineProgramLevel = {
  level: string
  sash?: string
  curriculum: string[]
  stripes?: DisciplineProgramStripe[]
  notes?: string[]
}

export type DisciplineProgram = {
  disciplineSlug: string
  title: string
  federationTitle: string
  logoUrl?: string
  levels: DisciplineProgramLevel[]
}

export type PopupScheduleEntry = {
  day: string
  time: string
}

export type PopupScheduleRow = {
  discipline: string
  entries: PopupScheduleEntry[]
}

export type PopupItem = {
  _id: string
  type: 'sede' | 'evento' | 'testo'
  badge?: string
  title: string
  titleAccent?: string
  schedule?: PopupScheduleRow[]
  image?: string
  text?: string
  ctaText?: string
  ctaHref?: string
  order: number
}
