import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ActivityGallery from '@/components/activities/ActivityGallery'
import { getActivityEvents } from '@/sanity/content'

async function findEvent(year: string, slug: string) {
  const events = await getActivityEvents()
  return events.find((event) => event.year === year && event.slug === slug)
}

export async function generateStaticParams() {
  const events = await getActivityEvents()
  return events.map((event) => ({ year: event.year, slug: event.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { year: string; slug: string }
}): Promise<Metadata> {
  const event = await findEvent(params.year, params.slug)
  if (!event) return {}

  return {
    title: `${event.title} (${params.year})`,
    description: `Gallery fotografica dell'evento ${event.title}.`,
  }
}

export default async function ActivityEventPage({
  params,
}: {
  params: { year: string; slug: string }
}) {
  const event = await findEvent(params.year, params.slug)
  if (!event) notFound()

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/attivita"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-inter mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna a tutte le attivita
          </Link>

          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            {params.year}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-wide mb-4">{event.title}</h1>
          <p className="text-white/70 text-lg font-inter">Clicca una foto per aprire il carosello in fullscreen.</p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ActivityGallery images={event.images} />
        </div>
      </section>
    </>
  )
}
