import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type DisciplineData = {
  name: string
  subtitle: string
  tagline: string
  description: string
  fullText: string[]
  features: { icon: string; title: string; desc: string }[]
  image: string
  imageAlt: string
  ctaText: string
}

const disciplines: Record<string, DisciplineData> = {
  'choy-li-fut': {
    name: 'Choy Li Fut',
    subtitle: 'Branca Hung Sing',
    tagline: 'Il sistema marziale più completo di origine Shaolin',
    description:
      'Uno degli stili di Kung Fu più completi ed efficaci, che combina l\'agile gioco di gambe del nord con le potenti tecniche di mano del sud.',
    fullText: [
      'Lo stile di Kung Fu Choy Li Fut è un sistema tradizionale di Arti Marziali di origine Shaolin. Esso combina l\'agile gioco di gambe delle arti marziali del nord della Cina, con le complesse tecniche di mano del sud. Il Choy Li Fut è uno dei più completi ed efficaci stili per il miglioramento della salute e della difesa personale.',
      'Lo stile enfatizza l\'essere rilassati e l\'energia interna piuttosto che l\'essere rigidi e la forza muscolare. Questo lo rende non solo più efficace, ma anche ideale per migliorare la salute del praticante. Le forme del Choy Li Fut sono circolari, potenti, e tanto belle a vedersi quanto efficaci in combattimento.',
      'Il Choy Li Fut contiene un\'ampia varietà di tecniche: pugni a lungo e corto raggio, svariate tecniche di calcio, spazzate e proiezioni, attacchi portati sui punti di pressione vitali, leve articolari e tecniche di grappling. Il sistema include inoltre cinquantadue armi tradizionali cinesi, divise in categorie di armi corte, lunghe, gemelle e flessibili.',
      'Grazie agli insegnamenti del Grandmaster Doc Fai Wong — tra i maggiori esponenti mondiali dello stile, riconosciuto come l\'unico maestro vivente in grado di ricostruire l\'intero sistema — all\'interno delle scuole Hung Sing sarà possibile studiare l\'intero percorso, dalle forme base ai segreti avanzati.',
    ],
    features: [
      { icon: '✊', title: 'Forme a mano libera', desc: 'Sequenze codificate con oltre 150 movimenti, dalla base all\'avanzato.' },
      { icon: '⚔️', title: '52 Armi Tradizionali', desc: 'Corte, lunghe, gemelle e flessibili. Il simbolo è il tridente dei nove draghi.' },
      { icon: '🛡️', title: 'Difesa Personale', desc: 'Tecniche pratiche applicabili in ogni situazione, pugni, calci, proiezioni.' },
      { icon: '🥊', title: 'Sparring', desc: 'Combattimento controllato per mettere in pratica le tecniche apprese.' },
      { icon: '🧘', title: 'Chi Kung', desc: 'Esercizi di respirazione e meditazione per sviluppare l\'energia interna.' },
      { icon: '💪', title: 'Condizionamento', desc: 'Lavoro cardiovascolare intenso tramite le forme eseguite a piena velocità.' },
    ],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Pratica del Choy Li Fut',
    ctaText: 'Inizia con il Choy Li Fut',
  },
  'tai-chi-chuan': {
    name: 'Tai Chi Chuan',
    subtitle: 'Stile Yang',
    tagline: 'L\'arte della salute e dell\'equilibrio interiore',
    description:
      'Antica arte marziale cinese di movimenti lenti e fluidi. Praticata da millenni per le sue capacità rigenerative, adatta a qualsiasi età.',
    fullText: [
      'Il Taiji Quan (Tai Chi Chuan) è un\'antica Arte Marziale Cinese. Basato principalmente su movimenti lenti, fluidi come la seta e sincronizzati, questa delicata pratica cinese è ben conosciuta per i suoi elevati benefici per la salute. Praticato da millenni per le sue capacità rigenerative, il Taiji Quan è un\'arte gentile dalle innumerevoli risorse terapeutiche.',
      'Attraverso i suoi movimenti armoniosi, particolarmente fluidi e circolari, il corpo si tonifica e grazie alla profonda respirazione gli organi interni rinvigoriscono mantenendosi elastici ed in perfetta efficienza anche in età avanzata. Stile Interno di Kung Fu, il Taiji Quan si pone come obiettivo di risvegliare il Qi (energia vitale) attraverso un giusto equilibrio tra Yin e Yang.',
      'In Cina, dove il Taiji Quan si pratica da oltre 600 anni, non è soltanto un modo per sentirsi bene: è una terapia, uno strumento di prevenzione ed un rimedio per quasi tutti i disturbi. Questa disciplina è rapidamente divenuta popolare in Occidente perché adatta a qualsiasi età, persino in gravidanza poiché non prevede alcuna controindicazione.',
      'Le forme, eseguite in modo lento e rilassato, generano calma nel pensiero, liberano la mente e sciolgono le tensioni fisiche. Attraverso una pratica costante si potranno contrastare efficacemente stress, insonnia ed altri mali legati allo stile di vita moderno. Antica disciplina marziale per esercitare corpo, mente e spirito, il Taiji Quan è famoso anche per il suo alto livello di efficacia in combattimento.',
    ],
    features: [
      { icon: '🌊', title: 'Forme Yang', desc: 'Sequenze originali dello stile Yang, eseguite in modo lento e meditativo.' },
      { icon: '⚔️', title: 'Forme con armi', desc: 'Forme di Tai Ji con spada (jian) e altri strumenti tradizionali.' },
      { icon: '🤝', title: 'Tui Shou', desc: 'Spinta delle mani: esercizio a coppie per sviluppare sensibilità e radicamento.' },
      { icon: '🛡️', title: 'Applicazioni marziali', desc: 'Studio dei movimenti come tecniche pratiche di difesa personale.' },
      { icon: '🧘', title: 'Meditazione e Chi Kung', desc: 'Esercizi per sviluppare il Qi, ridurre lo stress e migliorare la salute.' },
      { icon: '🌿', title: 'Benefici per la salute', desc: 'Flessibilità, equilibrio, riduzione dello stress, benefici cardiovascolari.' },
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Pratica del Tai Chi Chuan',
    ctaText: 'Inizia con il Tai Chi',
  },
}

export async function generateStaticParams() {
  return Object.keys(disciplines).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const disc = disciplines[params.slug]
  if (!disc) return {}
  return {
    title: `${disc.name} – ${disc.subtitle}`,
    description: disc.description,
  }
}

export default function DisciplinePage({ params }: { params: { slug: string } }) {
  const disc = disciplines[params.slug]
  if (!disc) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${disc.image}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-28">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-3">
            {disc.subtitle}
          </span>
          <h1 className="font-cinzel text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide mb-4 text-shadow-lg">
            {disc.name}
          </h1>
          <p className="text-white/70 text-xl font-inter max-w-xl leading-relaxed">
            {disc.tagline}
          </p>
        </div>
      </section>

      {/* Text sections */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Sticky summary */}
            <div className="lg:sticky lg:top-28">
              <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
                La disciplina
              </span>
              <h2 className="section-title text-black mb-5">
                Che cos&apos;è il {disc.name}?
              </h2>
              <div className="w-10 h-0.5 bg-red mb-6" />
              <p className="text-gray-mid text-lg font-inter leading-relaxed">
                {disc.description}
              </p>

              <div className="mt-8">
                <Link href="/contatti" className="btn-primary">
                  {disc.ctaText}
                </Link>
              </div>
            </div>

            {/* Right: full text */}
            <div className="space-y-6">
              {disc.fullText.map((para, i) => (
                <p key={i} className="text-gray-mid text-base font-inter leading-relaxed">
                  {para}
                </p>
              ))}
              <p className="text-xs text-gray-mid/60 font-inter italic pt-2">
                Fonte: Hung Sing Academy Italia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-[#0A0A0A] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
              Il programma
            </span>
            <h2 className="section-title text-white">Cosa Praticherai</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {disc.features.map((feat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-sm p-6 hover:border-red/40 hover:bg-white/8 transition-all duration-200"
              >
                <span className="text-3xl mb-4 block">{feat.icon}</span>
                <h3 className="font-cinzel text-white font-semibold text-base mb-2">{feat.title}</h3>
                <p className="text-white/50 text-sm font-inter leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-gray-light py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-black text-2xl sm:text-3xl font-bold mb-4">
            Pronto a iniziare?
          </h2>
          <p className="text-gray-mid font-inter mb-8">
            La prima lezione è gratuita. Contattaci per prenotare la tua prova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary">
              Prenota la prima lezione
            </Link>
            <Link href="/sedi" className="btn-outline-red">
              Trova la sede più vicina
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
