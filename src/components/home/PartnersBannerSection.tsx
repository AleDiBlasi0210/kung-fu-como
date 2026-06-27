import Link from 'next/link'
import { getPartners } from '@/sanity/content'

export default async function PartnersBannerSection() {
  const partners = await getPartners()

  if (!partners || partners.length === 0) return null

  return (
    <section className="bg-[#0A0A0A] py-14 lg:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/40 text-xs font-inter tracking-widest uppercase mb-10">
          Le nostre affiliazioni e partner
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {partners.map((partner) => {
            const href = partner.bannerHref || partner.href
            const isExternal = href.startsWith('http')
            return (
            <Link
              key={partner.name}
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105"
              title={partner.name}
            >
              <div className="h-14 w-28 flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-14 max-w-[112px] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-white/70 text-xs font-inter font-medium tracking-wide text-center leading-tight max-w-[120px]">
                {partner.name}
              </span>
            </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
