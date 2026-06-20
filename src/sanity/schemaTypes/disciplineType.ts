import { defineArrayMember, defineField, defineType } from 'sanity'

export const disciplineType = defineType({
  name: 'discipline',
  title: 'Discipline',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({
      name: 'fullText',
      title: 'Long Text Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 3 })],
    }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
          ],
        }),
      ],
    }),
    defineField({ name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Hero Image Alt', type: 'string' }),
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
    defineField({
      name: 'programRef',
      title: 'Official Program (optional)',
      description: 'Collega il documento Discipline Program relativo a questa disciplina.',
      type: 'reference',
      to: [{ type: 'disciplineProgram' }],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
})
