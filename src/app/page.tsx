import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ChiSiamoSection from '@/components/home/ChiSiamoSection'
import DisciplineSection from '@/components/home/DisciplineSection'
import SediPreviewSection from '@/components/home/SediPreviewSection'
import PartnersBannerSection from '@/components/home/PartnersBannerSection'
import CtaSection from '@/components/home/CtaSection'
import FaqSection from '@/components/home/FaqSection'
import { getDisciplines, getFaqs, getHomeSettings, getLocations } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'Hung Sing Martial Arts Como | La Fenice Bianca ASD | Kung Fu Como',
  description:
    'Scuola di Kung Fu a Como. Choy Li Fut Hung Sing e Tai Chi Chuan stile Yang. Tre sedi: Como, Albate, Ponte Lambro. Prima lezione gratuita.',
}

export default async function HomePage() {
  const [homeSettings, faqs, disciplines, sedi] = await Promise.all([
    getHomeSettings(),
    getFaqs(),
    getDisciplines(),
    getLocations(),
  ])

  const disciplineCards = disciplines.map((d) => ({
    slug: d.slug,
    name: d.name,
    subtitle: d.subtitle,
    description: d.description,
    features: d.features.slice(0, 4).map((f) => f.title),
    image: d.image,
  }))

  return (
    <>
      <HeroSection heroImage={homeSettings.heroImage} />
      <ChiSiamoSection
        missionLabel={homeSettings.missionLabel}
        missionTitle={homeSettings.missionTitle}
        missionText1={homeSettings.missionText1}
        missionText2={homeSettings.missionText2}
        affiliations={homeSettings.affiliations}
      />
      <DisciplineSection disciplines={disciplineCards} />
      <SediPreviewSection sedi={sedi} />
      <PartnersBannerSection />
      <CtaSection />
      <FaqSection faqs={faqs} />
    </>
  )
}
