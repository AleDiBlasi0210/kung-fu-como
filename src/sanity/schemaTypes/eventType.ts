import { defineType, defineField, defineArrayMember } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Evento Attività',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Evento',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Anno',
      type: 'number',
      validation: (rule) => rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'coverImage',
      title: 'Immagine Copertina',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Gallery Immagini',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            }),
            defineField({
              name: 'title',
              type: 'string',
              title: 'Titolo',
            }),
          ],
        }),
      ],
    }),
  ],
})
