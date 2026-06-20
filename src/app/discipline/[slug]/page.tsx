import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getDisciplineBySlug, getDisciplineProgramBySlug, getDisciplines } from '@/sanity/content'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const disciplines = await getDisciplines()

    return disciplines
      .filter((discipline): discipline is typeof discipline & { slug: string } => !!discipline.slug)
      .map((discipline) => ({ slug: discipline.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const discipline = await getDisciplineBySlug(params.slug)
  if (!discipline) return {}

  return {
    title: `${discipline.name} - ${discipline.subtitle}`,
    description: discipline.description,
  }
}

export default async function DisciplinePage({ params }: { params: { slug: string } }) {
  const [discipline, disciplineProgram] = await Promise.all([
    getDisciplineBySlug(params.slug),
    getDisciplineProgramBySlug(params.slug),
  ])
  if (!discipline) notFound()

  return (
    <>
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${discipline.image}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-28">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-3">
            {discipline.subtitle}
          </span>
          <h1 className="font-cinzel text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide mb-4 text-shadow-lg">
            {discipline.name}
          </h1>
          <p className="text-white/70 text-xl font-inter max-w-xl leading-relaxed">{discipline.tagline}</p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
                La disciplina
              </span>
              <h2 className="section-title text-black mb-5">Che cos&apos;e il {discipline.name}?</h2>
              <div className="w-10 h-0.5 bg-red mb-6" />
              <p className="text-gray-mid text-lg font-inter leading-relaxed">{discipline.description}</p>

              <div className="mt-8">
                <Link href="/contatti" className="btn-primary">
                  {discipline.ctaText}
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {discipline.fullText.map((paragraph, index) => (
                <p key={index} className="text-gray-mid text-base font-inter leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="text-xs text-gray-mid/60 font-inter italic pt-2">Fonte: Hung Sing Academy Italia</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
              Il programma
            </span>
            <h2 className="section-title text-white">Cosa Praticherai</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {discipline.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-sm p-6 hover:border-red/40 hover:bg-white/8 transition-all duration-200"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-cinzel text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm font-inter leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {disciplineProgram && (
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
                {disciplineProgram.title}
              </span>
              <h2 className="section-title text-black mb-3">Programma Ufficiale</h2>
              <p className="text-gray-mid font-inter max-w-3xl mx-auto">{disciplineProgram.federationTitle}</p>
              {disciplineProgram.logoUrl && (
                <img
                  src={disciplineProgram.logoUrl}
                  alt="Plum Blossom International Federation"
                  className="h-16 w-16 object-contain mx-auto mt-5"
                  loading="lazy"
                />
              )}
            </div>

            <div className="space-y-5">
              {disciplineProgram.levels.map((level) => (
                <article key={level.level} className="border border-gray-light rounded-sm overflow-hidden">
                  <header className="bg-[#0A0A0A] text-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-semibold tracking-wide">{level.level}</h3>
                    {level.sash && (
                      <span className="text-xs font-inter tracking-widest uppercase text-red">{level.sash}</span>
                    )}
                  </header>

                  <div className="p-5 sm:p-6 bg-white">
                    <ul className="space-y-2">
                      {level.curriculum.map((item, index) => (
                        <li key={`${level.level}-curriculum-${index}`} className="flex items-start gap-3 text-gray-mid font-inter text-sm sm:text-base">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {level.notes && level.notes.length > 0 && (
                      <div className="mt-5 border-t border-gray-light pt-4">
                        <p className="text-xs uppercase tracking-widest text-gray-mid/70 font-inter mb-2">Focus</p>
                        <div className="flex flex-wrap gap-2">
                          {level.notes.map((note, index) => (
                            <span
                              key={`${level.level}-note-${index}`}
                              className="inline-flex items-center rounded-full border border-red/40 px-3 py-1 text-xs font-inter text-red"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {level.stripes && level.stripes.length > 0 && (
                      <div className="mt-5 border-t border-gray-light pt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {level.stripes.map((stripe) => (
                          <div key={`${level.level}-${stripe.name}`} className="rounded-sm border border-gray-light p-4 bg-gray-light/40">
                            <p className="font-cinzel text-black text-base mb-2">{stripe.name}</p>
                            <ul className="space-y-1.5">
                              {stripe.items.map((stripeItem, index) => (
                                <li
                                  key={`${level.level}-${stripe.name}-${index}`}
                                  className="text-sm text-gray-mid font-inter flex items-start gap-2"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red/80 flex-shrink-0" />
                                  <span>{stripeItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-light py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-black text-2xl sm:text-3xl font-bold mb-4">Pronto a iniziare?</h2>
          <p className="text-gray-mid font-inter mb-8">
            La prima lezione e gratuita. Contattaci per prenotare la tua prova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary">
              Prenota la prima lezione
            </Link>
            <Link href="/sedi" className="btn-outline-red">
              Trova la sede piu vicina
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
