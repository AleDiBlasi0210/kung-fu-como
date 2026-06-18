import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'

const contactRefs = [
  {
    role: 'Referente corsi',
    name: 'Sifu Corinna Corti',
    sedi: 'Contatto per la palestra di Ponte Lambro',
    phone: '333 000 0001 (placeholder)',
    phoneHref: 'tel:+393330000001',
    email: 'corinna.corti@kungfucomo.org (placeholder)',
    emailHref: 'mailto:corinna.corti@kungfucomo.org',
  },
  {
    role: 'Direttore tecnico',
    name: 'Sifu Cristiano',
    sedi: 'Contatto per le palestre di Albate e Como',
    phone: '338 846 6400',
    phoneHref: 'tel:+393388466400',
    email: 'info@kungfucomo.org (placeholder)',
    emailHref: 'mailto:info@kungfucomo.org',
  },
]

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta La Fenice Bianca ASD per informazioni, prova gratuita e iscrizione ai corsi.',
}

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            Siamo a disposizione
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
            Contatti
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-2xl mx-auto">
            Scrivici per informazioni sui corsi, prova gratuita o iscrizione.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left info */}
            <aside className="lg:col-span-5 space-y-5">
              {contactRefs.map((ref) => (
                <div key={ref.name} className="border border-gray-light rounded-sm overflow-hidden">
                  <div className="h-44 bg-gray-light flex items-center justify-center">
                    <span className="text-gray-mid text-sm font-inter">Foto {ref.name} (placeholder)</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-widest text-red font-inter font-semibold mb-2">
                      {ref.role}
                    </p>
                    <h2 className="font-cinzel text-2xl text-black font-semibold mb-2">{ref.name}</h2>
                    <p className="text-gray-mid text-sm font-inter leading-relaxed mb-4">{ref.sedi}</p>

                    <div className="space-y-3">
                      <a href={ref.phoneHref} className="flex items-center gap-3 text-black hover:text-red transition-colors">
                        <span className="w-9 h-9 rounded-full bg-red/10 text-red flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs text-gray-mid uppercase tracking-widest font-inter">Telefono</p>
                          <p className="font-inter font-semibold">{ref.phone}</p>
                        </div>
                      </a>

                      <a href={ref.emailHref} className="flex items-center gap-3 text-black hover:text-red transition-colors">
                        <span className="w-9 h-9 rounded-full bg-red/10 text-red flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.945a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs text-gray-mid uppercase tracking-widest font-inter">Email</p>
                          <p className="font-inter font-semibold">{ref.email}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </aside>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="border border-gray-light rounded-sm p-5 sm:p-6 lg:p-8">
                <h2 className="font-cinzel text-3xl text-black font-semibold mb-2">
                  Richiedi Informazioni
                </h2>
                <p className="text-gray-mid font-inter mb-7">
                  Compila il form e ti ricontatteremo il prima possibile.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
