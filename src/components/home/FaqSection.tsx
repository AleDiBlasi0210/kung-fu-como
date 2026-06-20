'use client'

import { useState } from 'react'

type Faq = {
  question: string
  answer: string
}

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            Hai delle domande?
          </span>
          <h2 className="section-title text-black mb-4">Domande Frequenti</h2>
          <div className="w-12 h-0.5 bg-red mx-auto" />
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-light rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-inter font-semibold text-black text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-red/10 flex items-center justify-center transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-3 h-3 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-1">
                  <p className="text-gray-mid text-sm font-inter leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="text-center text-gray-mid font-inter text-sm mt-10">
          Non hai trovato la risposta che cercavi?{' '}
          <a href="/contatti" className="text-red font-semibold hover:underline">
            Contattaci direttamente
          </a>
        </p>
      </div>
    </section>
  )
}
