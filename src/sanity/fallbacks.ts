import { activitiesData } from '@/data/activities'
import { newsData } from '@/data/news'
import type {
  ActivityEvent,
  ContactCard,
  DisciplineProgram,
  Discipline,
  FaqItem,
  HomeSettings,
  InstructorItem,
  Location,
  NewsItem,
  PartnerItem,
  SiteCopy,
} from './types'

const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Canonical local fallback content.
// Keep these strings aligned with the original site copy so the public website
// can gracefully fall back when Sanity is unavailable or a document is missing.

export const fallbackHomeSettings: HomeSettings = {
  missionLabel: 'La nostra missione',
  missionTitle: 'Chi Siamo',
  missionText1:
    'Lo scopo della nostra scuola è la pratica e la divulgazione delle arti marziali cinesi tradizionali, in particolare lo stile Choy Li Fut e il Tai Chi Chuan stile Yang.',
  missionText2:
    "Ci rivolgiamo a coloro che vogliono avvicinarsi alla pratica di un'arte marziale tradizionale non limitandosi ad apprendere tecniche di combattimento e autodifesa, ma avendo come obiettivo un corretto sviluppo psico-fisico e un generale benessere incoraggiato da una sana pratica fisica.",
  affiliations: ['USAcli', 'Hung Sing Kung Fu Schools of Italy', 'Grandmaster Doc Fai Wong'],
}

export const fallbackFaqs: FaqItem[] = [
  {
    question: "E necessaria un'esperienza precedente nelle arti marziali?",
    answer:
      'No, assolutamente. Le nostre classi accolgono principianti assoluti. Gli insegnanti strutturano le lezioni in modo che ogni praticante possa progredire al proprio ritmo.',
    order: 1,
  },
  {
    question: 'Posso provare una lezione prima di iscrivermi?',
    answer: 'Certo. La prima lezione è gratuita e senza impegno.',
    order: 2,
  },
]

export const fallbackDisciplines: Discipline[] = [
  // Original discipline copy kept as source-of-truth fallback text.
  {
    slug: 'choy-li-fut',
    name: 'Choy Li Fut',
    subtitle: 'Branca Hung Sing',
    tagline: 'Il sistema marziale più completo di origine Shaolin',
    description:
      "Uno degli stili di Kung Fu più completi ed efficaci, che combina l'agile gioco di gambe del nord con le potenti tecniche di mano del sud.",
    fullText: [
      "Lo stile di Kung Fu Choy Li Fut è un sistema tradizionale di Arti Marziali di origine Shaolin. Esso combina l'agile gioco di gambe delle arti marziali del nord della Cina, con le complesse tecniche di mano del sud. Il Choy Li Fut è uno dei più completi ed efficaci stili per il miglioramento della salute e della difesa personale.",
      "Lo stile enfatizza l'essere rilassati e l'energia interna piuttosto che l'essere rigidi e la forza muscolare. Questo lo rende non solo più efficace, ma anche ideale per migliorare la salute del praticante. Le forme del Choy Li Fut sono circolari, potenti, e tanto belle a vedersi quanto efficaci in combattimento.",
      "Il Choy Li Fut contiene un'ampia varietà di tecniche: pugni a lungo e corto raggio, svariate tecniche di calcio, spazzate e proiezioni, attacchi portati sui punti di pressione vitali, leve articolari e tecniche di grappling. Il sistema include inoltre cinquantadue armi tradizionali cinesi, divise in categorie di armi corte, lunghe, gemelle e flessibili.",
      "Grazie agli insegnamenti del Grandmaster Doc Fai Wong — tra i maggiori esponenti mondiali dello stile, riconosciuto come l'unico maestro vivente in grado di ricostruire l'intero sistema — all'interno delle scuole Hung Sing sarà possibile studiare l'intero percorso, dalle forme base ai segreti avanzati.",
    ],
    features: [
      { icon: '✊', title: 'Forme a mano libera', desc: "Sequenze codificate con oltre 150 movimenti, dalla base all'avanzato." },
      { icon: '⚔️', title: '52 Armi Tradizionali', desc: 'Corte, lunghe, gemelle e flessibili. Il simbolo è il tridente dei nove draghi.' },
      { icon: '🛡️', title: 'Difesa Personale', desc: 'Tecniche pratiche applicabili in ogni situazione, pugni, calci, proiezioni.' },
      { icon: '🥊', title: 'Sparring', desc: 'Combattimento controllato per mettere in pratica le tecniche apprese.' },
      { icon: '🧘', title: 'Chi Kung', desc: "Esercizi di respirazione e meditazione per sviluppare l'energia interna." },
      { icon: '💪', title: 'Condizionamento', desc: 'Lavoro cardiovascolare intenso tramite le forme eseguite a piena velocità.' },
    ],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Pratica del Choy Li Fut',
    ctaText: 'Inizia con il Choy Li Fut',
    order: 1,
  },
  {
    slug: 'tai-chi-chuan',
    name: 'Tai Chi Chuan',
    subtitle: 'Stile Yang',
    tagline: "L'arte della salute e dell'equilibrio interiore",
    description:
      'Antica arte marziale cinese di movimenti lenti e fluidi. Praticata da millenni per le sue capacità rigenerative, adatta a qualsiasi età.',
    fullText: [
      "Il Taiji Quan (Tai Chi Chuan) è un'antica Arte Marziale Cinese. Basato principalmente su movimenti lenti, fluidi come la seta e sincronizzati, questa delicata pratica cinese è ben conosciuta per i suoi elevati benefici per la salute. Praticato da millenni per le sue capacità rigenerative, il Taiji Quan è un'arte gentile dalle innumerevoli risorse terapeutiche.",
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
    order: 2,
  },
]

export const fallbackLocations: Location[] = [
  {
    id: 'ponte-lambro',
    name: 'Ponte Lambro',
    subtitle: 'Nuova sede',
    address: 'Istituto Santa Chiara · Via Luigi Cadorna, 6, 22037 Ponte Lambro CO',
    mapsEmbed: 'https://www.google.com/maps?q=Via+Luigi+Cadorna+6+22037+Ponte+Lambro+CO&output=embed',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Via+Luigi+Cadorna+6+22037+Ponte+Lambro+CO',
    schedule: [
      { discipline: 'Tai Chi Chuan', entries: ['Lunedi 19:30 - 20:30', 'Giovedi 19:30 - 20:30'] },
      { discipline: 'Choy Li Fut', entries: ['Lunedi 20:30 - 21:30', 'Giovedi 20:30 - 21:30'] },
    ],
    order: 1,
    homeBadge: 'Nuova sede',
    homeBadgeHighlight: true,
    homeShortAddress: 'Ponte Lambro (CO)',
    homeDisciplines: 'Choy Li Fut · Tai Chi Chuan',
    homeDays: 'Lunedì e Giovedì',
  },
  {
    id: 'como',
    name: 'Como',
    subtitle: 'Palestra Mariani',
    address: 'Via Nazario Sauro, 6, 22100 Como CO, Italia',
    mapsEmbed: 'https://www.google.com/maps?q=Via+Nazario+Sauro+6+22100+Como+CO+Italia&output=embed',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Via+Nazario+Sauro+6+22100+Como+CO+Italia',
    schedule: [
      { discipline: 'Tai Chi Chuan', entries: ['Lunedi 19:00 - 20:30', 'Venerdi 19:00 - 20:30'] },
      { discipline: 'Choy Li Fut', entries: ['Lunedi 19:00 - 20:30', 'Venerdi 19:00 - 20:30'] },
    ],
    order: 2,
    homeBadge: 'Palestra Mariani',
    homeBadgeHighlight: false,
    homeShortAddress: 'Como (CO)',
    homeDisciplines: 'Choy Li Fut · Tai Chi Chuan',
    homeDays: 'Lunedì e Venerdì',
  },
  {
    id: 'albate',
    name: 'Albate',
    subtitle: 'Sede Albate',
    address: 'Via Mariano Tentorio, 4, 22100 Como CO',
    mapsEmbed: 'https://www.google.com/maps?q=Hung+Sing+Como+Via+Mariano+Tentorio+4+22100+Como+CO&output=embed',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Hung+Sing+Como+Via+Mariano+Tentorio+4+22100+Como+CO',
    schedule: [
      { discipline: 'Bambini', entries: ['Dai 6 anni · Lunedi 18:30 - 19:30', 'Dai 6 anni · Giovedi 18:30 - 19:30'] },
      { discipline: 'Classe Combat', entries: ['Mercoledi 21:00 - 22:00'] },
    ],
    order: 3,
    homeBadge: 'Sede storica',
    homeBadgeHighlight: false,
    homeShortAddress: 'Albate, Como (CO)',
    homeDisciplines: 'Bambini · Classe Combat',
    homeDays: 'Lunedì, Giovedì e Mercoledì',
  },
]

export const fallbackNews: NewsItem[] = newsData

export const fallbackActivities: ActivityEvent[] = activitiesData.flatMap((year) =>
  year.events.map((event) => ({
    slug: event.slug,
    title: event.title,
    year: year.year,
    coverImage: event.coverImage,
    images: event.images,
  })),
)

export const fallbackPartners: PartnerItem[] = [
  {
    name: 'Kung Fu Ti (Svizzera)',
    href: 'http://www.kungfu-ti.ch/',
    image: `${publicBase}/partners/kung-fu-ti.png`,
    description: 'Scuola partner in Svizzera, riferimento nella divulgazione del Kung Fu tradizionale.',
    order: 1,
  },
  {
    name: 'Plum Blossom International',
    href: 'http://plumblossom.net/',
    image: `${publicBase}/partners/plum-blossom.png`,
    description: 'Organizzazione internazionale con risorse, materiali e formazione sulle arti marziali cinesi tradizionali.',
    order: 2,
  },
  {
    name: 'Hung Sing Academy Italia',
    href: 'http://www.gongfu.it/hungsing/',
    image: `${publicBase}/partners/hung-sing-academy-italia.png`,
    description: 'Punto di riferimento nazionale per il sistema Hung Sing e il percorso tecnico del Choy Li Fut.',
    order: 3,
  },
]

export const fallbackInstructors: InstructorItem[] = [
  {
    name: 'Tai Sifu Cristiano',
    title: 'Direttore Tecnico',
    description: 'Riferimento tecnico per Choy Li Fut e Tai Chi Chuan nelle sedi di Albate e Como.',
    image: `${publicBase}/instructors/tai-sifu-cristiano.jpg`,
    order: 1,
  },
  {
    name: 'Sifu Corinna Corti',
    title: 'Responsabile Sede Ponte Lambro',
    description: 'Referente corsi e nuove iscrizioni per la sede di Ponte Lambro.',
    image: `${publicBase}/instructors/sifu-corinna-corti.jpg`,
    order: 2,
  },
  {
    name: 'Si Hing Giuseppe',
    title: 'Istruttore',
    description: 'Supporta la formazione dei praticanti nei corsi base e intermedi.',
    image: `${publicBase}/instructors/si-hing-giuseppe.jpg`,
    order: 3,
  },
]

export const fallbackContactCards: ContactCard[] = [
  {
    role: 'Direttore tecnico',
    name: 'Sifu Cristiano',
    sedi: 'Contatto per le palestre di Albate e Como',
    phone: '338 846 6400',
    phoneHref: 'tel:+393388466400',
    email: 'info@kungfucomo.org (placeholder)',
    emailHref: 'mailto:info@kungfucomo.org',
    order: 1,
  },
  {
    role: 'Referente corsi',
    name: 'Sifu Corinna Corti',
    sedi: 'Contatto per la palestra di Ponte Lambro',
    phone: '393 293 857848',
    phoneHref: 'tel:+393293857848',
    email: 'corinna.corti@kungfucomo.org (placeholder)',
    emailHref: 'mailto:corinna.corti@kungfucomo.org',
    order: 2,
  },
]

export const fallbackSiteCopy: SiteCopy = {
  // Original shared page copy (footer, CTA, and page taglines).
  // If Site Copy & Tagline is empty in Sanity, these values are rendered.
  footerBrandTitle: 'La Fenice Bianca',
  footerOrgLine: 'Associazione Sportiva Dilettantistica',
  footerDescription:
    "Scuola di arti marziali cinesi tradizionali a Como. Choy Li Fut e Tai Chi Chuan stile Yang, nell'ambito della Hung Sing Kung Fu Schools of Italy.",
  homeCtaTitle: 'Inizia il tuo percorso',
  homeCtaText:
    'La prima lezione è completamente gratuita. Vieni a provare senza impegno e scopri la via delle arti marziali tradizionali cinesi.',
  sediBadge: 'Como e provincia',
  sediLead: 'Allenati nella sede più comoda per te. Qui trovi mappe, discipline e orari aggiornati.',
  attivitaBadge: 'Memorie e percorso',
  attivitaLead: 'Seminari, tornei, esibizioni e momenti di crescita condivisi nel corso degli anni.',
  istruttoriBadge: 'Il nostro team',
  istruttoriLead: 'Persone, esperienza e tradizione: il gruppo che guida la pratica quotidiana della scuola.',
  newsBadge: 'Novità e aggiornamenti',
  newsLead: 'Segui attività, comunicazioni importanti e appuntamenti della scuola.',
  contattiBadge: 'Siamo a disposizione',
  contattiLead: 'Scrivici per informazioni sui corsi, prova gratuita o iscrizione.',
  partnerBadge: 'Rete e collaborazioni',
  partnerLead: 'Le scuole e le realtà con cui condividiamo valori, pratica e percorso tecnico.',
}

export const fallbackDisciplinePrograms: DisciplineProgram[] = [
  // Original official Plum Blossom curriculum, split by discipline slug.
  // If a Discipline Program document is not published yet, this content is used.
  {
    disciplineSlug: 'choy-li-fut',
    title: 'Programma ufficiale',
    federationTitle: 'Programma ufficiale della Plum Blossom International Federation',
    logoUrl:
      'https://static.wixstatic.com/media/48e7d2_295b4ea79fc1456294686278afa6d26d.png/v1/fill/w_121,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/48e7d2_295b4ea79fc1456294686278afa6d26d.png',
    levels: [
      {
        level: 'Beginner I',
        sash: 'Red Sash / No Fringe',
        curriculum: ['Basic Stances', 'Basic Punches & Kicks', 'Basic Blocks'],
      },
      {
        level: 'Beginner II',
        sash: 'White Fringe',
        curriculum: ['Jau Sang Ma', 'Small Arrow Fist Form', 'Small Leopard Hand Form'],
      },
      {
        level: 'Beginner III',
        sash: 'Yellow Fringe',
        curriculum: ['5 Wheel Horse', '5 Wheel Fist', '9 Star Blocking'],
      },
      {
        level: 'Intermediate I',
        sash: 'Orange Fringe',
        curriculum: ['Wall Bag Set', 'Small Cross Pattern Form', 'Chau Sot Single-Ended Staff'],
      },
      {
        level: 'Intermediate II',
        sash: 'Green Fringe',
        curriculum: ['Small Plum Blossom Hand Form', 'Mui Fa Don Do Form', 'Tiger vs. Leopard Two Person Form'],
      },
      {
        level: 'Intermediate III',
        sash: 'Blue Fringe',
        curriculum: ['Fut San Sup Ji Kuen', '2 Person Staff', 'Hung Sing Long Fist Form'],
        notes: ['Sparring', 'Takedowns', 'Joint Locks'],
      },
      {
        level: 'Advanced I',
        sash: 'Purple Fringe',
        curriculum: ['Yee Jong Bot Gwa Kuen', 'Butterfly Knives Form', 'Sup Ji Jit Fu Kuen'],
        notes: ['Push Hands', 'Pressure Points'],
      },
      {
        level: 'Advanced II',
        sash: 'Red Fringe',
        curriculum: ['Single-Double End Staff', 'Small Five Animal Form', 'Empty Hands vs. Double Daggers Form'],
      },
      {
        level: 'Advanced III',
        sash: 'Brown Fringe',
        curriculum: ['Sup Ji Kau Da Kuen'],
        stripes: [
          { name: '1st Stripe', items: ['2 Person II', 'Spear Form'] },
          { name: '2nd Stripe', items: ['Horse Bench', 'Ping Keun'] },
          { name: '3rd Stripe', items: ['Don Do vs Spear', 'Seung Do'] },
          { name: '4th Stripe', items: ['Seung Do vs Spear', 'Bok Mo Kuen'] },
          { name: '5th Stripe', items: ['Fan', 'Shaolin 5 Animals', '2 Person Weapon'] },
        ],
      },
      {
        level: 'Senior',
        sash: 'Black Fringe',
        curriculum: [
          'Bin Gwai Staff',
          'Tiger Hand Form',
          'Double Hookswords',
          '3 Sectioned Staff',
          'Gung Ji Kuen',
          'Siu Bot Gwa Kuen',
          'Horse Chopper',
          'Wooden Dummy',
          'Dragon vs Tiger',
          'Butterfly Knives Form 2',
          'Dai Hung Kuen',
          'Double Axes',
        ],
        stripes: [
          {
            name: '1st Stripe',
            items: [
              'L and R Bot Gwa Broadswords',
              'Buddha Taming Tiger',
              'Bot Gwa Sum Kuen',
              'Crane Hand Form',
              'Snake vs Crane',
              'Golden Dragon Gim',
              'Spear vs Spear',
              'Fan Form 2',
              'Dai Sup Ji Kuen',
              'Small Plum Blossom Double Broadswords',
              "Farmer's Hoe",
            ],
          },
          {
            name: '2nd Stripe',
            items: [
              'Iron Arrow Long Fist',
              'Throat Locking Spear',
              'Lan Moon Jai Do',
              'Kwando vs Spear',
              'Mui Fa Cheung Staff',
              'Continuous Dual Kicking Form',
              'Walking Cane Form',
              'Flute Form',
              'Wind and Fire Wheel',
              'Dai Bot Gwa Kuen',
              'Dragon Hand Form',
            ],
          },
          {
            name: '3rd Stripe',
            items: [
              'Hung Yen Bot Gwa Kuen',
              'Don Do and Whip',
              '18 Lohan Chi-Kung',
              'Kwan Do Form',
              '3 Sectioned Staff vs Spear',
              'Ping Jang Kuen',
              'Hook Spear',
              'Horse Bench Form 2',
              'Double Hammer Form',
              'Dau Fu Bot Gwa Kuen',
              'Leopard Form',
              '13 L-R Lance Spear',
            ],
          },
          {
            name: '4th Stripe',
            items: [
              'Diving Dragon Staff',
              'Seven Star Double Broadswords',
              'Buddha Palm',
              'Taming Trident',
              'Trident vs Shield and Sword',
              'Fan Form 3',
              'Snake Tongue Spear',
              'Monkey Staff Form',
              'Shield and Sword',
              'Dot Ting Bot Gwa Kuen',
              'Snake Hand Form',
            ],
          },
          {
            name: '5th Stripe',
            items: [
              'Elephant Form',
              'Gum Gong Trident',
              'Mui Fa Bot Gwa Kuen',
              'Dragon and Tiger Form',
              'Plum Blossom Bot Gwa Staff',
              'Horse Form',
              'Double Chain Whips',
              'Monkey Form',
              'Elephant vs Horse Form',
              'Kwan Yin Palm Form',
              'Gik',
              'Drunken Form',
              '3-Person Hand Forms',
              'CLF 5 Animals',
              '3-Person Weapon Forms',
            ],
          },
        ],
        notes: ['Many more animal and weapon forms'],
      },
    ],
  },
  {
    disciplineSlug: 'tai-chi-chuan',
    title: 'Programma ufficiale',
    federationTitle: 'Programma ufficiale della Plum Blossom International Federation',
    logoUrl:
      'https://static.wixstatic.com/media/48e7d2_295b4ea79fc1456294686278afa6d26d.png/v1/fill/w_121,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/48e7d2_295b4ea79fc1456294686278afa6d26d.png',
    levels: [
      {
        level: 'Beginner I',
        sash: 'Blue Sash / No Fringe',
        curriculum: ['Tai Chi Walking, Cloud Hands', "Brush Knee, Horse's Mane", '8 Brocade Exercises'],
      },
      {
        level: 'Beginner II',
        sash: 'White Fringe',
        curriculum: ['8 Step Form to the Horse Mane', '8 Step Form to The Kicks', '8 Step Form (Complete)'],
      },
      {
        level: 'Beginner III',
        sash: 'Yellow Fringe',
        curriculum: ['16 Step Form', 'Single Push Hands', 'Double Push Hands Pattern'],
      },
      {
        level: 'Intermediate I',
        sash: 'Orange Fringe',
        curriculum: ['Left and Right Tai Chi Fan', '24 Form Complete', 'Moving Step Push Hands'],
      },
      {
        level: 'Intermediate II',
        sash: 'Green Fringe',
        curriculum: ['Plum Blossom Fan', 'Plum Blossom Straight Sword', 'Free Style Push Hands'],
      },
      {
        level: 'Intermediate III',
        sash: 'Blue Fringe',
        curriculum: ['Da Lu Push Hands', '40 Form', '32 Tai Chi Sword Form'],
      },
      {
        level: 'Advanced I',
        sash: 'Purple Fringe',
        curriculum: ['108 Form to 1st Cross Hands', '108 Form to 2nd Cross Hands', '108 Form Complete'],
      },
      {
        level: 'Advanced II',
        sash: 'Red Fringe',
        curriculum: ['48 Form to Punch Downwards', '48 Form Complete', 'Tai Chi Saber Form'],
      },
      {
        level: 'Advanced III',
        sash: 'Brown Fringe',
        curriculum: ['Two Man Saber', 'Tai Chi Long Sword Form'],
        stripes: [
          { name: '1st Stripe', items: ['Wind Chasing Fan', 'Two Person Form'] },
          { name: '2nd Stripe', items: ['Five Elements Broadsword', 'Five Elements Flute'] },
          { name: '3rd Stripe', items: ['Yuen-Chou Sword', 'Taming Dragon Staff'] },
          {
            name: '4th Stripe',
            items: ['Plum Blossom Flute Form', 'Small Plum Blossom Double Broadsword Form'],
          },
          { name: '5th Stripe', items: ['Tai Chi Spear', 'Yin-Yang Double Jian'] },
        ],
      },
      {
        level: 'Senior',
        sash: 'Black Fringe',
        curriculum: ['Big Frame Fast Form', 'Plum Blossom Double End Staff'],
        stripes: [
          { name: '1st Stripe', items: ['Sun and Moon Twin Wheels', 'Yang Fajing Form'] },
          { name: '2nd Stripe', items: ['Dragon and Tiger Double Stick', 'Plum Blossom Double Jian'] },
          { name: '3rd Stripe', items: ['Dragon and Phoenix Twin Wheels', 'Small Circle Fast Form'] },
          { name: '4th Stripe', items: ['Nine House Cane-Sword', 'Plum Blossom Mother and Son Saber'] },
          { name: '5th Stripe', items: ['Golden Dragon Cane-Sword', 'Yin-Yang Five Elements Palm'] },
        ],
      },
    ],
  },
]
