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
  ],
})
