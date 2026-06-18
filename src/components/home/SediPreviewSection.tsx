import Link from 'next/link'

const sedi = [
  {
    id: 'ponte-lambro',
    name: 'Ponte Lambro',
    badge: 'Nuova sede',
    badgeColor: 'bg-red text-white',
    address: 'Ponte Lambro (CO)',
    disciplines: 'Choy Li Fut · Tai Chi Chuan',
    days: 'Lunedì e Giovedì',
    icon: '📍',
  },
  {
    id: 'como',
    name: 'Como',
    badge: 'Palestra Mariani',
    badgeColor: 'bg-white/10 text-white/70',
    address: 'Como (CO)',
    disciplines: 'Choy Li Fut · Tai Chi Chuan',
    days: 'Da definire',
    icon: '📍',
  },
  {
    id: 'albate',
    name: 'Albate',
    badge: 'Sede storica',
    badgeColor: 'bg-white/10 text-white/70',
    address: 'Albate, Como (CO)',
    disciplines: 'Choy Li Fut · Tai Chi Chuan',
    days: 'Da definire',
    icon: '📍',
  },
]

export default function SediPreviewSection() {
  return (
    <section className="bg-gray-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            Tre sedi a Como e dintorni
          </span>
          <h2 className="section-title text-black mb-4">Dove Ci Trovi</h2>
          <div className="w-12 h-0.5 bg-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sedi.map((sede) => (
            <div
              key={sede.id}
              className="bg-[#0A0A0A] rounded-sm p-6 card-hover group border border-white/5 hover:border-red/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-sm bg-red/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className={`text-xs font-inter font-semibold tracking-wide px-2.5 py-1 rounded-full ${sede.badgeColor}`}>
                  {sede.badge}
                </span>
              </div>

              <h3 className="font-cinzel text-white text-xl font-bold mb-2">{sede.name}</h3>
              <p className="text-white/50 text-sm font-inter mb-3">{sede.address}</p>
              <p className="text-white/70 text-sm font-inter mb-1">{sede.disciplines}</p>
              <p className="text-gray-mid text-xs font-inter">{sede.days}</p>

              <div className="mt-5 pt-5 border-t border-white/10">
                <Link
                  href={`/sedi#${sede.id}`}
                  className="text-red text-sm font-inter font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Orari e mappa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/sedi" className="btn-outline-red">
            Vedi tutte le sedi
          </Link>
        </div>
      </div>
    </section>
  )
}
