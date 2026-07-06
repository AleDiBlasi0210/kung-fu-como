import { defineArrayMember, defineField, defineType } from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'Location / Sede',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'anchorId', title: 'Anchor ID (optional)', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'mapsEmbed', title: 'Google Maps Embed URL', type: 'url' }),
    defineField({ name: 'mapsLink', title: 'Google Maps External URL', type: 'url' }),
    defineField({
      name: 'schedule',
      title: 'Schedule Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'discipline', title: 'Section title', type: 'string' }),
            defineField({
              name: 'entries',
              title: 'Entries',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
        }),
      ],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),

    // ── Anteprima nella home ("Dove Ci Trovi") ──────────────
    defineField({
      name: 'homeBadge',
      title: 'Home · Etichetta',
      type: 'string',
      description: 'Badge mostrato sulla card in homepage, es. "Nuova sede", "Sede storica", "Palestra Mariani". Se vuoto usa il sottotitolo.',
    }),
    defineField({
      name: 'homeBadgeHighlight',
      title: 'Home · Etichetta in evidenza (rossa)',
      type: 'boolean',
      description: 'Se attivo, il badge è rosso pieno (per la sede da mettere in risalto). Altrimenti è grigio.',
      initialValue: false,
    }),
    defineField({
      name: 'homeShortAddress',
      title: 'Home · Indirizzo breve',
      type: 'string',
      description: 'Riga breve sulla card in homepage, es. "Como (CO)". Se vuoto usa l\'indirizzo completo.',
    }),
    defineField({
      name: 'homeDisciplines',
      title: 'Home · Discipline (riga)',
      type: 'string',
      description: 'Es. "Choy Li Fut · Tai Chi Chuan". Se vuoto viene ricavato dagli orari.',
    }),
    defineField({
      name: 'homeDays',
      title: 'Home · Giorni (riga)',
      type: 'string',
      description: 'Es. "Lunedì e Giovedì". Se vuoto, la riga non viene mostrata (niente più "Da definire").',
    }),
  ],
})
