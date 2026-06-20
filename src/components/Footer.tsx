import Link from 'next/link'
import { getSiteCopy } from '@/sanity/content'

const footerLinks = {
  discipline: [
    { label: 'Choy Li Fut', href: '/discipline/choy-li-fut' },
    { label: 'Tai Chi Chuan', href: '/discipline/tai-chi-chuan' },
  ],
  sedi: [
    { label: 'Ponte Lambro', href: '/sedi#ponte-lambro' },
    { label: 'Como – Palestra Mariani', href: '/sedi#como' },
    { label: 'Albate', href: '/sedi#albate' },
  ],
  pagine: [
    { label: 'Attività', href: '/attivita' },
    { label: 'Istruttori', href: '/istruttori' },
    { label: 'News', href: '/news' },
    { label: 'Contatti', href: '/contatti' },
    { label: 'Partner', href: '/partner' },
  ],
}

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/HungSingKungfuComo',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kungfucomo/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export default async function Footer() {
  const siteCopy = await getSiteCopy()
  const year = new Date().getFullYear()
  const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL

  return (
    <footer className="bg-[#0A0A0A] text-white/70 border-t border-white/10">
      {/* Top band */}
      <div className="bg-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter font-medium text-white text-sm tracking-wide">
            Vuoi iniziare? La prima lezione è gratuita.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 bg-white text-red font-semibold font-inter text-sm px-5 py-2 rounded-sm hover:bg-gray-light transition-colors"
          >
            Contattaci
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-cinzel font-bold text-white text-lg tracking-wider">
                {siteCopy.footerBrandTitle}
              </p>
              <p className="text-xs text-red tracking-widest uppercase mt-0.5">{siteCopy.footerOrgLine}</p>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              {siteCopy.footerDescription}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center hover:bg-red transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Discipline */}
          <div>
            <h4 className="font-cinzel font-semibold text-white text-sm tracking-widest uppercase mb-4 border-b border-red/40 pb-2">
              Discipline
            </h4>
            <ul className="space-y-2">
              {footerLinks.discipline.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sedi */}
          <div>
            <h4 className="font-cinzel font-semibold text-white text-sm tracking-widest uppercase mb-4 border-b border-red/40 pb-2">
              Le Nostre Sedi
            </h4>
            <ul className="space-y-2">
              {footerLinks.sedi.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pagine + Contatti */}
          <div>
            <h4 className="font-cinzel font-semibold text-white text-sm tracking-widest uppercase mb-4 border-b border-red/40 pb-2">
              Informazioni
            </h4>
            <ul className="space-y-2 mb-5">
              {footerLinks.pagine.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+393388466400"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                338 846 6400
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} La Fenice Bianca ASD · Tutti i diritti riservati</p>
          <div className="flex flex-wrap items-center justify-center gap-1 text-white/30">
            {studioUrl && (
              <>
                <a
                  href={studioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Area Admin
                </a>
                <span className="text-white/50 mx-1">·</span>
              </>
            )}
            <span>Affiliata</span>
            <span className="text-white/50 mx-1">·</span>
            <span>USAcli</span>
            <span className="text-white/50 mx-1">·</span>
            <span>Hung Sing Kung Fu Schools of Italy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
