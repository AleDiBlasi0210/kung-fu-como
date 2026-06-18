import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ChiSiamoSection from '@/components/home/ChiSiamoSection'
import DisciplineSection from '@/components/home/DisciplineSection'
import SediPreviewSection from '@/components/home/SediPreviewSection'
import CtaSection from '@/components/home/CtaSection'
import FaqSection from '@/components/home/FaqSection'

export const metadata: Metadata = {
  title: 'La Fenice Bianca ASD | Kung Fu Como – Choy Li Fut e Tai Chi Chuan',
  description:
    'Scuola di Kung Fu a Como. Choy Li Fut Hung Sing e Tai Chi Chuan stile Yang. Tre sedi: Como, Albate, Ponte Lambro. Prima lezione gratuita.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChiSiamoSection />
      <DisciplineSection />
      <SediPreviewSection />
      <CtaSection />
      <FaqSection />
    </>
  )
}
