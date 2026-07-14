'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Discipline',
    href: '#',
    dropdown: [
      { label: 'Choy Li Fut', href: '/discipline/choy-li-fut' },
      { label: 'Tai Chi Chuan', href: '/discipline/tai-chi-chuan' },
    ],
  },
  {
    label: 'Sedi & Orari',
    href: '#',
    dropdown: [
      { label: 'Tutte le Sedi', href: '/sedi' },
      { label: 'Ponte Lambro', href: '/sedi#ponte-lambro' },
      { label: 'Como', href: '/sedi#como' },
      { label: 'Albate', href: '/sedi#albate' },
    ],
  },
  { label: 'Attività', href: '/attivita' },
  { label: 'Istruttori', href: '/istruttori' },
  { label: 'News', href: '/news' },
  { label: 'Contatti', href: '/contatti' },
  { label: 'Partner', href: '/partner' },
]

export default function Header() {
  const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
              <div className="w-full h-full rounded-full border-2 border-red bg-black/50 p-1 overflow-hidden">
                <img
                  src={`${publicBase}/logo.png`}
                  alt="Logo La Fenice Bianca"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-cinzel font-bold text-sm lg:text-base leading-tight tracking-wider">
                Hung Sing Martial Arts
              </p>
              <p className="text-gray-mid text-xs tracking-widest uppercase">ASD · Kung Fu Como</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`nav-link px-3 py-2 rounded-sm flex items-center gap-1 ${
                        pathname.startsWith(link.href) && link.href !== '#'
                          ? 'text-red'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 w-48 pt-1">
                        <div className="bg-black/95 backdrop-blur-sm border border-white/10 rounded-sm shadow-xl overflow-hidden">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-red/20 text-sm font-inter tracking-wide transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`nav-link px-3 py-2 rounded-sm ${
                      pathname === link.href ? 'text-red' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contatti"
              className="hidden sm:inline-flex btn-primary text-sm px-4 py-2"
            >
              Prova Gratis
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-3 text-white/80 hover:text-white nav-link text-left"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 border-l border-red/40 ml-3 mb-2 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-white/70 hover:text-white text-sm font-inter tracking-wide"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-3 nav-link ${
                      pathname === link.href ? 'text-red' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link href="/contatti" className="btn-primary w-full text-center text-sm">
                Prova Gratuitamente
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
