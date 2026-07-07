import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/sanity/client'

type ContactSettings = {
  recipientEmails: { email: string; label?: string }[]
  fromName: string
  fromEmail: string
}

const SEDE_LABELS: Record<string, string> = {
  'ponte-lambro': 'Ponte Lambro',
  'como': 'Como',
  'albate': 'Albate',
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.error('BREVO_API_KEY non configurata')
    return NextResponse.json({ ok: false, message: 'Configurazione server mancante' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const { name, email, phone, sede, subject, message } = body as Record<string, string>

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, message: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    const settings: ContactSettings | null = await sanityClient.fetch(
      `*[_type == "contactSettings"][0]{ recipientEmails, fromName, fromEmail }`,
      {},
      { cache: 'no-store' },
    )

    const recipients = settings?.recipientEmails?.map((r) => r.email).filter(Boolean)

    if (!recipients || recipients.length === 0) {
      console.error('contactSettings: nessun destinatario configurato in Sanity')
      return NextResponse.json(
        { ok: false, message: 'Configurazione email mancante' },
        { status: 500 }
      )
    }

    const fromName = settings?.fromName || 'Kung Fu Como'
    const fromEmail = settings?.fromEmail || 'noreply@kungfucomo.org'
    const emailSubject = subject?.trim() || `Nuovo messaggio dal sito — ${name}`
    const sedeLabel = sede ? (SEDE_LABELS[sede] ?? sede) : null

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: recipients.map((to) => ({ email: to })),
        replyTo: { email },
        subject: emailSubject,
        htmlContent: buildEmailHtml({ name, email, phone, sede: sedeLabel, subject, message }),
      }),
      cache: 'no-store',
    })

    if (!res.ok) {
      const details = await res.text().catch(() => '')
      console.error('Errore invio email (Brevo):', res.status, details)
      return NextResponse.json({ ok: false, message: 'Invio email non riuscito' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Errore invio email:', error)
    return NextResponse.json({ ok: false, message: 'Errore interno' }, { status: 500 })
  }
}

function buildEmailHtml(data: {
  name: string
  email: string
  phone?: string
  sede?: string | null
  subject?: string
  message: string
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#555;white-space:nowrap;vertical-align:top">${label}</td>
          <td style="padding:8px 12px;color:#111">${value}</td>
        </tr>`
      : ''

  return `<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:4px;overflow:hidden">

        <tr>
          <td style="background:#c0392b;padding:24px 32px">
            <span style="font-size:20px;font-weight:700;color:#fff;letter-spacing:0.5px">Kung Fu Como</span>
            <span style="display:block;font-size:13px;color:rgba(255,255,255,0.8);margin-top:4px">Nuovo messaggio dal form di contatto</span>
          </td>
        </tr>

        <tr>
          <td style="padding:32px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:4px">
              ${row('Nome', data.name)}
              ${row('Email', `<a href="mailto:${data.email}" style="color:#c0392b">${data.email}</a>`)}
              ${data.phone ? row('Telefono', `<a href="tel:${data.phone}" style="color:#c0392b">${data.phone}</a>`) : ''}
              ${data.sede ? row('Sede preferita', data.sede) : ''}
              ${data.subject ? row('Oggetto', data.subject) : ''}
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px">
              <tr>
                <td style="padding-bottom:8px;font-weight:600;color:#555;font-size:14px">Messaggio</td>
              </tr>
              <tr>
                <td style="background:#f9f9f9;border:1px solid #e5e5e5;border-radius:4px;padding:16px;color:#111;line-height:1.6;white-space:pre-wrap">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>
              </tr>
            </table>

            <p style="margin-top:24px;font-size:12px;color:#999">
              Puoi rispondere direttamente a questa email — la risposta verrà inviata a ${data.email}
            </p>
          </td>
        </tr>

        <tr>
          <td style="background:#f5f5f5;padding:16px 32px;font-size:11px;color:#aaa;text-align:center;border-top:1px solid #e5e5e5">
            www.kungfucomo.org
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}
