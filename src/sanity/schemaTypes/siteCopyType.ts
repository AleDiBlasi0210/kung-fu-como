import { defineField, defineType } from 'sanity'

export const siteCopyType = defineType({
  name: 'siteCopy',
  title: 'Site Copy & Tagline',
  type: 'document',
  fields: [
    defineField({ name: 'footerBrandTitle', title: 'Footer brand title', type: 'string' }),
    defineField({ name: 'footerOrgLine', title: 'Footer organization line', type: 'string' }),
    defineField({ name: 'footerDescription', title: 'Footer description', type: 'text', rows: 4 }),
    defineField({ name: 'homeCtaTitle', title: 'Home CTA title', type: 'string' }),
    defineField({ name: 'homeCtaText', title: 'Home CTA text', type: 'text', rows: 3 }),
    defineField({ name: 'sediBadge', title: 'Sedi page badge', type: 'string' }),
    defineField({ name: 'sediLead', title: 'Sedi page lead text', type: 'text', rows: 3 }),
    defineField({ name: 'attivitaBadge', title: 'Attivita page badge', type: 'string' }),
    defineField({ name: 'attivitaLead', title: 'Attivita page lead text', type: 'text', rows: 3 }),
    defineField({ name: 'istruttoriBadge', title: 'Istruttori page badge', type: 'string' }),
    defineField({ name: 'istruttoriLead', title: 'Istruttori page lead text', type: 'text', rows: 3 }),
    defineField({ name: 'newsBadge', title: 'News page badge', type: 'string' }),
    defineField({ name: 'newsLead', title: 'News page lead text', type: 'text', rows: 3 }),
    defineField({ name: 'contattiBadge', title: 'Contatti page badge', type: 'string' }),
    defineField({ name: 'contattiLead', title: 'Contatti page lead text', type: 'text', rows: 3 }),
    defineField({ name: 'partnerBadge', title: 'Partner page badge', type: 'string' }),
    defineField({ name: 'partnerLead', title: 'Partner page lead text', type: 'text', rows: 3 }),
  ],
})
