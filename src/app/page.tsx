import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ChiSiamoSection from '@/components/home/ChiSiamoSection'
import DisciplineSection from '@/components/home/DisciplineSection'
import SediPreviewSection from '@/components/home/SediPreviewSection'
import CtaSection from '@/components/home/CtaSection'
import FaqSection from '@/components/home/FaqSection'
import { getDisciplines, getFaqs, getHomeSettings } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'La Fenice Bianca ASD | Kung Fu Como – Choy Li Fut e Tai Chi Chuan',
  description:
    'Scuola di Kung Fu a Como. Choy Li Fut Hung Sing e Tai Chi Chuan stile Yang. Tre sedi: Como, Albate, Ponte Lambro. Prima lezione gratuita.',
}

export default async function HomePage() {
  const [homeSettings, faqs, disciplines] = await Promise.all([
    getHomeSettings(),
    getFaqs(),
    getDisciplines(),
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
      <HeroSection />
      <ChiSiamoSection
        missionLabel={homeSettings.missionLabel}
        missionTitle={homeSettings.missionTitle}
        missionText1={homeSettings.missionText1}
        missionText2={homeSettings.missionText2}
        affiliations={homeSettings.affiliations}
      />
      <DisciplineSection disciplines={disciplineCards} />
      <SediPreviewSection />
      <CtaSection />
      <FaqSection faqs={faqs} />
    </>
  )
}
