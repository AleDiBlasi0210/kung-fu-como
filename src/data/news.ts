export type NewsItem = {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
}

export const newsData: NewsItem[] = [
  {
    slug: 'apertura-nuova-sede-ponte-lambro',
    title: 'Apertura Nuova Sede a Ponte Lambro',
    date: '2026-01-12',
    excerpt:
      'Nuovi corsi di Tai Chi Chuan e Choy Li Fut attivi il lunedì e il giovedì. Prima lezione gratuita su prenotazione.',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    category: 'Sedi',
  },
  {
    slug: 'seminario-roma-2025-report',
    title: 'Report Seminario Roma GM Doc Fai Wong 2025',
    date: '2025-05-08',
    excerpt:
      'Un weekend intenso di pratica, correzioni tecniche e lavoro tradizionale con istruttori da tutta Italia.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    category: 'Seminari',
  },
  {
    slug: 'nuovo-ciclo-corsi-settembre',
    title: 'Nuovo Ciclo Corsi da Settembre',
    date: '2025-08-25',
    excerpt:
      'Ripartono i corsi in tutte le sedi con nuovi percorsi per principianti e praticanti intermedi.',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80',
    category: 'Corsi',
  },
]
