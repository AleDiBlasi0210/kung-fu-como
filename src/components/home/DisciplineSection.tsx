import Link from 'next/link'

type DisciplineCard = {
  slug: string
  name: string
  subtitle: string
  description: string
  features: string[]
  image: string
}

export default function DisciplineSection({ disciplines }: { disciplines: DisciplineCard[] }) {
  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            Cosa pratichiamo
          </span>
          <h2 className="section-title text-white mb-4">Le Nostre Discipline</h2>
          <div className="w-12 h-0.5 bg-red mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {disciplines.map((disc) => (
            <Link
              key={disc.slug}
              href={`/discipline/${disc.slug}`}
              className="group relative overflow-hidden rounded-sm block card-hover"
            >
              {/* Image */}
              <div className="relative h-72 lg:h-96 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${disc.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <span className="text-red text-xs font-inter font-semibold tracking-widest uppercase mb-2">
                  {disc.subtitle}
                </span>
                <h3 className="font-cinzel text-white text-2xl lg:text-3xl font-bold mb-3">
                  {disc.name}
                </h3>
                <p className="hidden sm:block text-white/70 text-sm font-inter leading-relaxed mb-4 max-w-sm">
                  {disc.description}
                </p>

                {/* Feature pills */}
                <div className="hidden sm:flex flex-wrap gap-2 mb-5">
                  {disc.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-inter text-white/60 border border-white/20 px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-red text-sm font-inter font-semibold group-hover:gap-3 transition-all">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Red border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red/60 rounded-sm transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
