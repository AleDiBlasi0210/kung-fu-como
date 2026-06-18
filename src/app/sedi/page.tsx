import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sedi e Orari',
  description: 'Scopri dove ci trovi: Ponte Lambro, Como e Albate. Orari dei corsi di Choy Li Fut e Tai Chi Chuan.',
}

type Sede = {
  id: string
  name: string
  subtitle: string
  address: string
  mapsEmbed: string
  mapsLink: string
  schedule: {
    discipline: string
    entries: string[]
  }[]
}

const sedi: Sede[] = [
  {
    id: 'ponte-lambro',
    name: 'Ponte Lambro',
    subtitle: 'Nuova sede',
    address: 'Istituto Santa Chiara · Via Luigi Cadorna, 6, 22037 Ponte Lambro CO',
    mapsEmbed:
      'https://www.google.com/maps?q=Via+Luigi+Cadorna+6+22037+Ponte+Lambro+CO&output=embed',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=Via+Luigi+Cadorna+6+22037+Ponte+Lambro+CO',
    schedule: [
      {
        discipline: 'Tai Chi Chuan',
        entries: ['Lunedì 19:30 - 20:30', 'Giovedì 19:30 - 20:30'],
      },
      {
        discipline: 'Choy Li Fut',
        entries: ['Lunedì 20:30 - 21:30', 'Giovedì 20:30 - 21:30'],
      },
    ],
  },
  {
    id: 'como',
    name: 'Como',
    subtitle: 'Palestra Mariani',
    address: 'Via Nazario Sauro, 6, 22100 Como CO, Italia',
    mapsEmbed:
      'https://www.google.com/maps?q=Via+Nazario+Sauro+6+22100+Como+CO+Italia&output=embed',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=Via+Nazario+Sauro+6+22100+Como+CO+Italia',
    schedule: [
      {
        discipline: 'Tai Chi Chuan',
        entries: ['Lunedì 19:00 - 20:30', 'Venerdì 19:00 - 20:30'],
      },
      {
        discipline: 'Choy Li Fut',
        entries: ['Lunedì 19:00 - 20:30', 'Venerdì 19:00 - 20:30'],
      },
    ],
  },
  {
    id: 'albate',
    name: 'Albate',
    subtitle: 'Sede Albate',
    address: 'Via Mariano Tentorio, 4, 22100 Como CO',
    mapsEmbed:
      'https://www.google.com/maps?q=Hung+Sing+Como+Via+Mariano+Tentorio+4+22100+Como+CO&output=embed',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=Hung+Sing+Como+Via+Mariano+Tentorio+4+22100+Como+CO',
    schedule: [
      {
        discipline: 'Bambini',
        entries: ['Dai 6 anni · Lunedì 18:30 - 19:30', 'Dai 6 anni · Giovedì 18:30 - 19:30'],
      },
      {
        discipline: 'Tai Chi Chuan',
        entries: [
          'Lunedì 19:00 - 20:00 · Principianti e avanzati',
          'Mercoledì 19:00 - 20:00 · Principianti',
          'Mercoledì 20:00 - 21:00 · Avanzati',
        ],
      },
      {
        discipline: 'Choy Li Fut',
        entries: [
          'Lunedì 20:00 - 21:00 · Arancio',
          'Lunedì 21:00 - 22:00 · Viola / Rosso',
          'Martedì 19:00 - 20:00 · Principianti',
          'Martedì 20:00 - 21:00 · Verde / Blu',
          'Martedì 21:00 - 22:00 · Istruttori',
          'Giovedì 20:00 - 21:00 · Arancio',
          'Giovedì 21:00 - 22:00 · Viola / Rosso',
          'Venerdì 20:00 - 21:00 · Principianti',
          'Venerdì 21:00 - 22:00 · Verde / Blu',
        ],
      },
      {
        discipline: 'Classe Combat',
        entries: ['Mercoledì 21:00 - 22:00'],
      },
      {
        discipline: 'Danza Leone',
        entries: ['In occasione di manifestazioni'],
      },
    ],
  },
]

export default function SediPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            Como e provincia
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
            Sedi & Orari
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-2xl mx-auto">
            Allenati nella sede più comoda per te. Qui trovi mappe, discipline e orari aggiornati.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-16 lg:top-20 z-30 bg-black/95 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-2 justify-center">
          {sedi.map((sede) => (
            <a
              key={sede.id}
              href={`#${sede.id}`}
              className="text-sm font-inter font-medium tracking-wide px-4 py-2 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-red/60 transition-colors"
            >
              {sede.name}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {sedi.map((sede) => (
            <article
              key={sede.id}
              id={sede.id}
              className="scroll-mt-36 bg-gray-light border border-gray-light rounded-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left - map */}
                <div className="lg:col-span-3 min-h-[320px] lg:min-h-[420px]">
                  <iframe
                    title={`Mappa ${sede.name}`}
                    src={sede.mapsEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Right - details */}
                <div className="lg:col-span-2 bg-[#0A0A0A] text-white p-6 lg:p-8">
                  <span className="inline-block text-red text-xs font-inter font-semibold tracking-widest uppercase mb-3">
                    {sede.subtitle}
                  </span>
                  <h2 className="font-cinzel text-3xl font-bold mb-2">{sede.name}</h2>
                  <p className="text-white/60 text-sm font-inter mb-6">{sede.address}</p>

                  <div className="space-y-4">
                    {sede.schedule.map((item) => (
                      <div key={item.discipline} className="border border-white/10 rounded-sm overflow-hidden">
                        <div className="bg-white/5 px-4 py-2">
                          <h3 className="font-cinzel text-sm text-white font-semibold tracking-wider uppercase">
                            {item.discipline}
                          </h3>
                        </div>
                        <ul className="px-4 py-3 space-y-2">
                          {item.entries.map((entry, idx) => (
                            <li key={idx} className="text-sm text-white/80 font-inter flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 flex-shrink-0" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a
                      href={sede.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red text-sm font-inter font-semibold hover:text-red-light transition-colors"
                    >
                      Apri su Google Maps
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
