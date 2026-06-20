import { defineArrayMember, defineField, defineType } from 'sanity'

export const homeSettingsType = defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [
    defineField({ name: 'missionLabel', title: 'Mission Label', type: 'string' }),
    defineField({ name: 'missionTitle', title: 'Mission Title', type: 'string' }),
    defineField({ name: 'missionText1', title: 'Mission Text 1', type: 'text', rows: 3 }),
    defineField({ name: 'missionText2', title: 'Mission Text 2', type: 'text', rows: 4 }),
    defineField({
      name: 'affiliations',
      title: 'Affiliations',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})
