'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'È necessaria un\'esperienza precedente nelle arti marziali?',
    answer:
      'No, assolutamente. Le nostre classi accolgono principianti assoluti. Gli insegnanti strutturano le lezioni in modo che ogni praticante, qualunque sia il suo livello, possa partecipare e progredire al proprio ritmo.',
  },
  {
    question: 'Posso provare una lezione prima di iscrivermi?',
    answer:
      'Certo! La prima lezione è completamente gratuita e senza impegno. Contattaci per telefono o tramite il form per prenotare la tua prova.',
  },
  {
    question: 'Da che età si può iniziare?',
    answer:
      'Accettiamo praticanti a partire dai 7-8 anni. Il Tai Chi Chuan è adatto a qualsiasi età, anche in età avanzata. Non ci sono controindicazioni particolari, ma è sempre bene informarci di eventuali problemi fisici.',
  },
  {
    question: 'Qual è la differenza tra Choy Li Fut e Tai Chi Chuan?',
    answer:
      'Il Choy Li Fut è uno stile energico, con movimenti potenti e circolari, forme a mano libera e con le armi, sparring. Il Tai Chi Chuan è uno stile interno, con movimenti lenti e fluidi, particolarmente benefico per la salute, la flessibilità e la gestione dello stress.',
  },
  {
    question: 'Quante volte alla settimana si pratica?',
    answer:
      'Le classi si tengono di norma 2 volte a settimana per sede. Puoi scegliere la frequenza più adatta a te, anche una volta a settimana per cominciare.',
  },
  {
    question: 'Cosa devo portare alla prima lezione?',
    answer:
      'Abbigliamento comodo da ginnastica e scarpe da ginnastica leggere. Non è necessario un equipaggiamento specifico per iniziare: ki (divisa) e attrezzatura si acquistano in seguito.',
  },
  {
    question: 'La scuola fa parte di una federazione riconosciuta?',
    answer:
      'Sì. La Fenice Bianca ASD è affiliata a USAcli (riconosciuta dal CONI) e fa parte della Hung Sing Kung Fu Schools of Italy, sotto la guida del Grandmaster Doc Fai Wong.',
  },
]

export default function FaqSection() {
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
