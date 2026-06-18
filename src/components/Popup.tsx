'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Popup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const closed = sessionStorage.getItem('popup-ponte-lambro-closed')
    if (!closed) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const close = () => {
    sessionStorage.setItem('popup-ponte-lambro-closed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative bg-[#0A0A0A] border border-red/60 rounded-sm max-w-md w-full shadow-2xl animate-fade-in-up">
        {/* Red top stripe */}
        <div className="bg-red h-1 rounded-t-sm" />

        <div className="p-7">
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            aria-label="Chiudi"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge */}
          <span className="inline-block bg-red/20 text-red text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 font-inter">
            Novità
          </span>

          {/* Title */}
          <h2
            id="popup-title"
            className="font-cinzel text-white text-2xl font-bold leading-tight mb-5"
          >
            Apertura Nuova Sede a<br />
            <span className="text-red">Ponte Lambro</span>
          </h2>

          {/* Schedule table */}
          <div className="space-y-4 mb-6">
            <div className="border border-white/10 rounded-sm overflow-hidden">
              <div className="bg-white/5 px-4 py-2">
                <p className="font-cinzel text-white text-sm font-semibold tracking-wider uppercase">
                  Tai Chi Chuan
                </p>
              </div>
              <div className="px-4 py-3 grid grid-cols-2 gap-2 text-sm font-inter">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Lunedì</p>
                  <p className="text-white font-medium">19:30 – 20:30</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Giovedì</p>
                  <p className="text-white font-medium">19:30 – 20:30</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-sm overflow-hidden">
              <div className="bg-white/5 px-4 py-2">
                <p className="font-cinzel text-white text-sm font-semibold tracking-wider uppercase">
                  Choy Li Fut
                </p>
              </div>
              <div className="px-4 py-3 grid grid-cols-2 gap-2 text-sm font-inter">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Lunedì</p>
                  <p className="text-white font-medium">20:30 – 21:30</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Giovedì</p>
                  <p className="text-white font-medium">20:30 – 21:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              href="/sedi#ponte-lambro"
              onClick={close}
              className="btn-primary flex-1 text-center text-sm"
            >
              Scopri la sede
            </Link>
            <button
              onClick={close}
              className="flex-1 text-sm text-white/50 hover:text-white/80 transition-colors font-inter"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
