import Link from 'next/link'
import { getSiteCopy } from '@/sanity/content'

export default async function CtaSection() {
  const siteCopy = await getSiteCopy()

  return (
    <section className="bg-red py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-cinzel text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-4">
          {siteCopy.homeCtaTitle}
        </h2>
        <p className="text-white/80 text-lg font-inter leading-relaxed mb-8 max-w-xl mx-auto">
          {siteCopy.homeCtaText}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+393388466400"
            className="inline-flex items-center gap-3 bg-white text-red font-bold font-inter px-7 py-4 rounded-sm hover:bg-gray-light transition-colors text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            338 846 6400
          </a>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold font-inter px-7 py-4 rounded-sm hover:bg-white/10 transition-colors text-base"
          >
            Scrivici
          </Link>
        </div>
      </div>
    </section>
  )
}
