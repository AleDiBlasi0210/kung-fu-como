import { defineField, defineType } from 'sanity'

export const partnerType = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'href', title: 'Link (pagina Partner)', type: 'url' }),
    defineField({ name: 'bannerHref', title: 'Link (banner homepage)', type: 'string', description: 'URL esterno (https://...) o pagina interna (es. /partner). Se vuoto, usa il link della pagina Partner.' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
})
