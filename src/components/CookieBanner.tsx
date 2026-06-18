'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="banner"
      aria-label="Cookie banner"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-white/70 text-sm font-inter leading-relaxed">
            Utilizziamo cookie tecnici per il corretto funzionamento del sito.{' '}
            <a href="/privacy" className="text-red hover:underline">
              Leggi la Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="text-white/50 hover:text-white text-sm font-inter transition-colors px-3 py-2"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="btn-primary text-sm px-5 py-2"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
