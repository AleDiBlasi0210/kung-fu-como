import { defineField, defineType } from 'sanity'

export const contactCardType = defineType({
  name: 'contactCard',
  title: 'Contact Card',
  type: 'document',
  fields: [
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'sedi', title: 'Assigned locations', type: 'string' }),
    defineField({ name: 'phone', title: 'Telefono', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
})
