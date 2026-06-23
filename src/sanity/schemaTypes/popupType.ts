import { defineType, defineField, defineArrayMember } from 'sanity'

export const popupType = defineType({
  name: 'popup',
  title: 'Modali apertura pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'isActive',
      title: 'Attiva',
      type: 'boolean',
      description: 'Se disattivata, la modale non viene mostrata sul sito.',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Ordine',
      type: 'number',
      description: 'Ordine di apparizione (1 = prima). Se attive più modali, appaiono in sequenza.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'type',
      title: 'Tipo modale',
      type: 'string',
      options: {
        list: [
          { title: 'Sede — orari + bottone CTA', value: 'sede' },
          { title: 'Evento — immagine + testo opzionale', value: 'evento' },
          { title: 'Testo — solo testo e titolo', value: 'testo' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge (opzionale)',
      type: 'string',
      description: 'Etichetta piccola sopra il titolo, es. "Novità", "Evento".',
    }),
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      description: 'Riga principale del titolo.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleAccent',
      title: 'Parola in evidenza (rosso, nuova riga)',
      type: 'string',
      description: 'Testo aggiuntivo mostrato in rosso su una nuova riga sotto il titolo. Lascia vuoto per non usarlo.',
    }),

    // ── SEDE ─────────────────────────────────────────────
    defineField({
      name: 'schedule',
      title: 'Orari per disciplina',
      type: 'array',
      description: 'Tabella degli orari: aggiungi una riga per disciplina.',
      hidden: ({ document }) => document?.type !== 'sede',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'scheduleRow',
          title: 'Disciplina',
          fields: [
            defineField({
              name: 'discipline',
              title: 'Disciplina',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'entries',
              title: 'Giorni e orari',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'scheduleEntry',
                  title: 'Giorno',
                  fields: [
                    defineField({
                      name: 'day',
                      title: 'Giorno',
                      type: 'string',
                      description: 'Es. "Lunedì", "Giovedì"',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'time',
                      title: 'Orario',
                      type: 'string',
                      description: 'Es. "19:30 – 20:30"',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: {
                    select: { title: 'day', subtitle: 'time' },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'discipline' },
          },
        }),
      ],
    }),

    // ── EVENTO ───────────────────────────────────────────
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => document?.type !== 'evento',
    }),

    // ── EVENTO + TESTO ───────────────────────────────────
    defineField({
      name: 'text',
      title: 'Testo (opzionale)',
      type: 'text',
      rows: 3,
      hidden: ({ document }) => document?.type !== 'evento' && document?.type !== 'testo',
    }),

    // ── CTA (sede + evento) ───────────────────────────────
    defineField({
      name: 'ctaText',
      title: 'Testo bottone CTA',
      type: 'string',
      description: 'Es. "Scopri la sede", "Registrati". Lascia vuoto per non mostrare il bottone.',
      hidden: ({ document }) => document?.type === 'testo',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Link bottone CTA',
      type: 'string',
      description: 'Percorso interno es. "/sedi#ponte-lambro", oppure URL esterno.',
      hidden: ({ document }) => document?.type === 'testo',
    }),
  ],
  orderings: [
    {
      title: 'Ordine apparizione',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, isActive }: { title?: string; subtitle?: string; isActive?: boolean }) {
      const typeLabel: Record<string, string> = {
        sede: 'Sede',
        evento: 'Evento',
        testo: 'Testo',
      }
      return {
        title: `${isActive ? '✅' : '❌'} ${title ?? '(senza titolo)'}`,
        subtitle: typeLabel[subtitle ?? ''] ?? subtitle,
      }
    },
  },
})
