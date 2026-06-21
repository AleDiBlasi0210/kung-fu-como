import { defineField, defineType } from 'sanity'

export const contactSettingsType = defineType({
  name: 'contactSettings',
  title: 'Impostazioni Form Contatti',
  type: 'document',
  fields: [
    defineField({
      name: 'recipientEmails',
      title: 'Email destinatari',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'email', title: 'Email', type: 'string' }),
            defineField({ name: 'label', title: 'Etichetta (es. Segreteria)', type: 'string' }),
          ],
          preview: {
            select: { title: 'email', subtitle: 'label' },
          },
        },
      ],
      description: 'Lista delle email che riceveranno i messaggi inviati dal form di contatto.',
    }),
    defineField({
      name: 'fromName',
      title: 'Nome mittente',
      type: 'string',
      initialValue: 'Kung Fu Como',
      description: 'Nome visualizzato come mittente nelle email inviate.',
    }),
    defineField({
      name: 'fromEmail',
      title: 'Email mittente',
      type: 'string',
      initialValue: 'onboarding@resend.dev',
      description: 'Indirizzo email mittente. Per i test usa onboarding@resend.dev. In produzione inserire un indirizzo su dominio verificato in Resend.',
    }),
  ],
})
