import { defineType, defineField, defineArrayMember } from 'sanity'

export const sedeType = defineType({
  name: 'sede',
  title: 'Sede',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome Sede', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', title: 'Sottotitolo', type: 'string' }),
    defineField({ name: 'address', title: 'Indirizzo', type: 'string' }),
    defineField({ name: 'mapsEmbedUrl', title: 'Google Maps Embed URL', type: 'url' }),
    defineField({
      name: 'orari',
      title: 'Orari',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'disciplina', title: 'Disciplina', type: 'string' }),
            defineField({
              name: 'entries',
              title: 'Voci Orario',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        }),
      ],
    }),
  ],
})
