import type { Metadata } from 'next'
import { getPartners, getSiteCopy } from '@/sanity/content'

export const metadata: Metadata = {
  title: 'Partner',
  description: 'Scuole e organizzazioni partner affiliate al percorso Hung Sing Kung Fu.',
}

export default async function PartnerPage() {
  const [partners, siteCopy] = await Promise.all([getPartners(), getSiteCopy()])

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            {siteCopy.partnerBadge}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4">Partner</h1>
          <p className="text-white/70 text-lg font-inter max-w-2xl mx-auto">
            {siteCopy.partnerLead}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-light rounded-sm p-6 card-hover hover:border-red/40"
              >
                <div className="h-36 bg-gray-light rounded-sm flex items-center justify-center mb-5 p-4 relative overflow-hidden">
                  <img src={partner.image} alt={partner.name} className="w-full h-full object-contain p-2" loading="lazy" />
                </div>
                <h2 className="font-cinzel text-2xl text-black font-semibold mb-3 leading-snug group-hover:text-red transition-colors">
                  {partner.name}
                </h2>
                <p className="text-gray-mid text-sm font-inter leading-relaxed mb-4">{partner.description}</p>
                <span className="text-red text-sm font-inter font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Visita sito
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
