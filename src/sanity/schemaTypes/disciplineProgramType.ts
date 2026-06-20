import { defineArrayMember, defineField, defineType } from 'sanity'

export const disciplineProgramType = defineType({
  name: 'disciplineProgram',
  title: 'Discipline Program',
  type: 'document',
  fields: [
    defineField({
      name: 'disciplineSlug',
      title: 'Discipline slug',
      type: 'string',
      options: {
        list: [
          { title: 'Choy Li Fut', value: 'choy-li-fut' },
          { title: 'Tai Chi Chuan', value: 'tai-chi-chuan' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      initialValue: 'Programma ufficiale',
    }),
    defineField({
      name: 'federationTitle',
      title: 'Federation title',
      type: 'string',
      initialValue: 'Programma ufficiale della Plum Blossom International Federation',
    }),
    defineField({ name: 'logoUrl', title: 'Logo URL (optional)', type: 'url' }),
    defineField({
      name: 'levels',
      title: 'Levels',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'level', title: 'Level name', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'sash', title: 'Sash/Fringe', type: 'string' }),
            defineField({
              name: 'curriculum',
              title: 'Curriculum items',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              validation: (rule) => rule.min(1),
            }),
            defineField({
              name: 'stripes',
              title: 'Stripes (optional)',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'name', title: 'Stripe name', type: 'string', validation: (rule) => rule.required() }),
                    defineField({
                      name: 'items',
                      title: 'Stripe items',
                      type: 'array',
                      of: [defineArrayMember({ type: 'string' })],
                    }),
                  ],
                }),
              ],
            }),
            defineField({
              name: 'notes',
              title: 'Notes (optional)',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'disciplineSlug',
      subtitle: 'federationTitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title === 'tai-chi-chuan' ? 'Programma Tai Chi Chuan' : 'Programma Choy Li Fut',
        subtitle,
      }
    },
  },
})
