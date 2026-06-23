'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { PopupItem } from '@/sanity/types'

const colsClass: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}

export default function PopupModal({ popups }: { popups: PopupItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const idx = popups.findIndex(
        (p) => !sessionStorage.getItem(`popup-${p._id}-closed`),
      )
      setActiveIndex(idx === -1 ? null : idx)
    }, 1200)
    return () => clearTimeout(timer)
  }, [popups])

  const close = () => {
    if (activeIndex === null) return
    sessionStorage.setItem(`popup-${popups[activeIndex]._id}-closed`, '1')
    const next = popups.findIndex(
      (p, i) => i > activeIndex && !sessionStorage.getItem(`popup-${p._id}-closed`),
    )
    setActiveIndex(next === -1 ? null : next)
  }

  if (activeIndex === null) return null
  const popup = popups[activeIndex]

  const hasCta = !!popup.ctaText && !!popup.ctaHref

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
        <div className="p-7">
          {/* Close button */}
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
          {popup.badge && (
            <span className="inline-block bg-red/20 text-red text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 font-inter">
              {popup.badge}
            </span>
          )}

          {/* Title */}
          <h2 id="popup-title" className="font-cinzel text-white text-2xl font-bold leading-tight mb-5">
            {popup.title}
            {popup.titleAccent && (
              <>
                <br />
                <span className="text-red">{popup.titleAccent}</span>
              </>
            )}
          </h2>

          {/* SEDE: schedule tables */}
          {popup.type === 'sede' && popup.schedule && popup.schedule.length > 0 && (
            <div className="space-y-4 mb-6">
              {popup.schedule.map((row) => (
                <div key={row.discipline} className="border border-white/10 rounded-sm overflow-hidden">
                  <div className="bg-white/5 px-4 py-2">
                    <p className="font-cinzel text-white text-sm font-semibold tracking-wider uppercase">
                      {row.discipline}
                    </p>
                  </div>
                  <div className={`px-4 py-3 grid ${colsClass[Math.min(row.entries.length, 4)] ?? 'grid-cols-2'} gap-2 text-sm font-inter`}>
                    {row.entries.map((entry) => (
                      <div key={entry.day}>
                        <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{entry.day}</p>
                        <p className="text-white font-medium">{entry.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EVENTO: image */}
          {popup.type === 'evento' && popup.image && (
            <div className="mb-4 rounded-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={popup.image} alt={popup.title} className="w-full object-cover max-h-52" />
            </div>
          )}

          {/* EVENTO + TESTO: text */}
          {popup.text && (
            <p className="text-white/70 font-inter text-sm mb-5 leading-relaxed">{popup.text}</p>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            {hasCta && (
              <Link
                href={popup.ctaHref!}
                onClick={close}
                className="btn-primary flex-1 text-center text-sm"
              >
                {popup.ctaText}
              </Link>
            )}
            <button
              onClick={close}
              className={`${hasCta ? 'flex-1' : 'w-full'} text-sm text-white/50 hover:text-white/80 transition-colors font-inter`}
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
