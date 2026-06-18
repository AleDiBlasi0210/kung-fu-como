import { defineType, defineField } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Domanda', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'answer', title: 'Risposta', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'order', title: 'Ordine', type: 'number' }),
  ],
})
