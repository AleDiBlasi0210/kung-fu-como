import { defineField, defineType } from 'sanity'

export const instructorType = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'grade', title: 'Grado / Livello', type: 'string', description: 'Es. "Sifu", "Si Jie", "Si Hing". Usato per raggruppare nella pagina istruttori.' }),
    defineField({ name: 'gradeOrder', title: 'Ordine del grado', type: 'number', description: 'Numero per ordinare i gruppi (1 = primo). Tutti gli istruttori dello stesso grado devono avere lo stesso valore.' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Order (dentro il gruppo)', type: 'number' }),
  ],
})
