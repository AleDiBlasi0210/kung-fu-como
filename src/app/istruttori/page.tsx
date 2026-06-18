import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Istruttori',
  description: 'Team istruttori della scuola La Fenice Bianca ASD.',
}

type Instructor = {
  name: string
  title: string
  description: string
  image: string
}

const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || ''

const instructors: Instructor[] = [
  {
    name: 'Tai Sifu Cristiano',
    title: 'Direttore Tecnico',
    description:
      'Riferimento tecnico per Choy Li Fut e Tai Chi Chuan nelle sedi di Albate e Como. Segue il percorso didattico adulti e avanzati.',
    image: `${publicBase}/instructors/tai-sifu-cristiano.jpg`,
  },
  {
    name: 'Sifu Corinna Corti',
    title: 'Responsabile Sede Ponte Lambro',
    description:
      'Referente corsi e nuove iscrizioni per la sede di Ponte Lambro. Cura la pratica tecnica e l\'accoglienza dei nuovi praticanti.',
    image: `${publicBase}/instructors/sifu-corinna-corti.jpg`,
  },
  {
    name: 'Si Hing Giuseppe',
    title: 'Istruttore',
    description:
      'Supporta la formazione dei praticanti nei corsi base e intermedi, con attenzione alla qualità tecnica e alla progressione individuale.',
    image: `${publicBase}/instructors/si-hing-giuseppe.jpg`,
  },
  {
    name: 'Istruttore Placeholder 1',
    title: 'Istruttore Assistente',
    description:
      'Profilo in aggiornamento. Qui puoi inserire bio, specializzazione e ruolo didattico all\'interno della scuola.',
    image: `${publicBase}/instructors/placeholder-1.jpg`,
  },
  {
    name: 'Istruttore Placeholder 2',
    title: 'Istruttore Assistente',
    description:
      'Profilo in aggiornamento. Qui puoi inserire bio, specializzazione e ruolo didattico all\'interno della scuola.',
    image: `${publicBase}/instructors/placeholder-2.jpg`,
  },
  {
    name: 'Istruttore Placeholder 3',
    title: 'Istruttore Assistente',
    description:
      'Profilo in aggiornamento. Qui puoi inserire bio, specializzazione e ruolo didattico all\'interno della scuola.',
    image: `${publicBase}/instructors/placeholder-3.jpg`,
  },
]

export default function IstruttoriPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            Il nostro team
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
            Istruttori
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-2xl mx-auto">
            Persone, esperienza e tradizione: il gruppo che guida la pratica quotidiana della scuola.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {instructors.map((ins) => (
              <article
                key={ins.name}
                className="border border-gray-light rounded-sm overflow-hidden card-hover"
              >
                <div className="h-64 bg-gray-light overflow-hidden">
                  <img
                    src={ins.image}
                    alt={ins.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-red font-inter font-semibold mb-2">
                    {ins.title}
                  </p>
                  <h2 className="font-cinzel text-2xl text-black font-semibold mb-3 leading-snug">
                    {ins.name}
                  </h2>
                  <p className="text-gray-mid text-sm font-inter leading-relaxed">
                    {ins.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
