import type { Metadata } from 'next'
import Link from 'next/link'
import { getNews, getSiteCopy } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'News',
  description: 'Ultime novita, eventi e aggiornamenti della scuola La Fenice Bianca ASD.',
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export default async function NewsPage() {
  const [news, siteCopy] = await Promise.all([getNews(), getSiteCopy()])
  const sorted = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            {siteCopy.newsBadge}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4">News</h1>
          <p className="text-white/70 text-lg font-inter max-w-2xl mx-auto">
            {siteCopy.newsLead}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sorted.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="group block border border-gray-light rounded-sm overflow-hidden card-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <span className="absolute top-3 left-3 bg-red text-white text-xs font-inter font-semibold tracking-wide px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-gray-mid font-inter mb-2">{formatDate(item.date)}</p>
                  <h2 className="font-cinzel text-black text-2xl leading-snug mb-3 group-hover:text-red transition-colors">{item.title}</h2>
                  <p className="text-gray-mid text-sm font-inter leading-relaxed mb-4">{item.excerpt}</p>
                  <span className="text-red text-sm font-inter font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Leggi tutto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-black mb-4">Ultimi Post Facebook</h2>
          <p className="text-gray-mid font-inter mb-8 max-w-2xl mx-auto">
            Segui la pagina ufficiale per restare aggiornato su eventi, foto e comunicazioni della scuola.
          </p>

          <div className="bg-white border border-gray-light rounded-sm p-4 md:p-6">
            <div className="relative w-full overflow-hidden" style={{ minHeight: '520px' }}>
              <iframe
                title="Facebook La Fenice Bianca ASD"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHungSingKungfuComo&tabs=timeline&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="520"
                style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '500px', margin: '0 auto' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
