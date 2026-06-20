import type { Metadata } from 'next'
import Link from 'next/link'
import { getActivityEvents, getSiteCopy } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'Attivita',
  description: 'Scopri le attivita svolte negli anni: seminari, tornei, eventi e dimostrazioni della scuola La Fenice Bianca ASD.',
}

export default async function AttivitaPage() {
  const [events, siteCopy] = await Promise.all([getActivityEvents(), getSiteCopy()])

  const groupedByYear = Object.entries(
    events.reduce<Record<string, typeof events>>((acc, event) => {
      if (!acc[event.year]) acc[event.year] = []
      acc[event.year].push(event)
      return acc
    }, {}),
  ).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            {siteCopy.attivitaBadge}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4">Attivita Svolte</h1>
          <p className="text-white/70 text-lg font-inter max-w-2xl mx-auto">
            {siteCopy.attivitaLead}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {groupedByYear.map(([year, yearEvents]) => (
            <article key={year} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-black">{year}</h2>
                <div className="h-px flex-1 bg-gray-light" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearEvents.map((event) => (
                  <Link
                    key={`${event.year}-${event.slug}`}
                    href={`/attivita/${event.year}/${event.slug}`}
                    className="group rounded-sm overflow-hidden border border-gray-light hover:border-red/50 transition-all duration-300 card-hover"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${event.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                      <span className="absolute top-3 right-3 bg-red text-white text-xs font-semibold font-inter tracking-wide px-2 py-1 rounded-sm">
                        {event.year}
                      </span>
                    </div>
                    <div className="p-5 bg-white">
                      <h3 className="font-cinzel text-black text-xl font-semibold mb-3 leading-snug">{event.title}</h3>
                      <div className="text-red text-sm font-inter font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        <span>Apri gallery</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
