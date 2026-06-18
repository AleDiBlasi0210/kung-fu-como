export type ActivityImage = {
  src: string
  alt: string
  title?: string
}

export type ActivityEvent = {
  slug: string
  title: string
  coverImage: string
  images: ActivityImage[]
}

export type ActivityYear = {
  year: string
  events: ActivityEvent[]
}

export const activitiesData: ActivityYear[] = [
  {
    year: '2025',
    events: [
      {
        slug: 'seminario-roma-gm-doc-fai-wong-2025',
        title: 'Seminario Roma GM Doc Fai Wong 2025',
        coverImage:
          'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
        images: [
          {
            src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80',
            alt: 'Foto gruppo seminario Roma 2025',
            title: 'Foto gruppo',
          },
          {
            src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80',
            alt: 'Allenamento in palestra durante il seminario',
            title: 'Allenamento tecnico',
          },
          {
            src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80',
            alt: 'Dimostrazione in palestra',
            title: 'Dimostrazione',
          },
          {
            src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80',
            alt: 'Momento di gruppo',
            title: 'Team Hung Sing',
          },
          {
            src: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1600&q=80',
            alt: 'Esercizio con bastone',
            title: 'Pratica con armi',
          },
        ],
      },
      {
        slug: 'torneo-hung-sing-2025',
        title: 'Torneo Hung Sing 2025',
        coverImage:
          'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80',
        images: [
          {
            src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1600&q=80',
            alt: 'Combattimento torneo Hung Sing',
            title: 'Match finale',
          },
          {
            src: 'https://images.unsplash.com/photo-1528914702050-4c3f1f47b386?auto=format&fit=crop&w=1600&q=80',
            alt: 'Atleti sul tatami',
            title: 'Riscaldamento',
          },
          {
            src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80',
            alt: 'Premiazione torneo',
            title: 'Premiazione',
          },
        ],
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        slug: 'festa-della-repubblica-2024',
        title: 'Festa della Repubblica 2024',
        coverImage:
          'https://images.unsplash.com/photo-1544717684-75f0d7f9a5ca?auto=format&fit=crop&w=1200&q=80',
        images: [
          {
            src: 'https://images.unsplash.com/photo-1544717684-75f0d7f9a5ca?auto=format&fit=crop&w=1600&q=80',
            alt: 'Esibizione in piazza',
            title: 'Esibizione',
          },
          {
            src: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1600&q=80',
            alt: 'Pratica collettiva all aperto',
            title: 'Pratica outdoor',
          },
        ],
      },
    ],
  },
]

export function getYears(): string[] {
  return activitiesData.map((y) => y.year)
}

export function getYearData(year: string): ActivityYear | undefined {
  return activitiesData.find((y) => y.year === year)
}

export function getEventBySlug(year: string, slug: string): ActivityEvent | undefined {
  return getYearData(year)?.events.find((e) => e.slug === slug)
}
