import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

type SanityWebhookBody = {
  _type?: string
  slug?: { current?: string } | string
  year?: number | string
  disciplineSlug?: string
}

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: 'Invalid revalidation secret' }, { status: 401 })
  }

  const payload = (await request.json().catch(() => ({}))) as SanityWebhookBody
  const type = payload._type
  const slug = typeof payload.slug === 'string' ? payload.slug : payload.slug?.current
  const year = payload.year ? String(payload.year) : undefined

  if (type) {
    revalidateTag(type)
  }

  switch (type) {
    case 'homeSettings':
      revalidatePath('/')
      break

    case 'siteCopy':
      revalidatePath('/')
      revalidatePath('/sedi')
      revalidatePath('/attivita')
      revalidatePath('/istruttori')
      revalidatePath('/news')
      revalidatePath('/contatti')
      revalidatePath('/partner')
      break

    case 'discipline':
      revalidateTag('discipline')
      revalidatePath('/')
      if (slug) revalidatePath(`/discipline/${slug}`)
      break

    case 'disciplineProgram':
      revalidateTag('disciplineProgram')
      if (payload.disciplineSlug) revalidatePath(`/discipline/${payload.disciplineSlug}`)
      break

    case 'location':
    case 'sede':
      revalidateTag('location')
      revalidatePath('/sedi')
      break

    case 'instructor':
      revalidateTag('instructor')
      revalidatePath('/istruttori')
      break

    case 'contactCard':
      revalidateTag('contactCard')
      revalidatePath('/contatti')
      break

    case 'partner':
      revalidateTag('partner')
      revalidatePath('/partner')
      break

    case 'news':
      revalidateTag('news')
      revalidatePath('/news')
      if (slug) revalidatePath(`/news/${slug}`)
      break

    case 'event':
      revalidateTag('event')
      revalidatePath('/attivita')
      if (slug && year) revalidatePath(`/attivita/${year}/${slug}`)
      break

    case 'popup':
      revalidateTag('popup')
      revalidatePath('/', 'layout')
      break

    case 'faq':
      revalidateTag('faq')
      revalidatePath('/')
      break

    default:
      // Fallback path invalidation when webhook does not provide a known _type.
      revalidatePath('/')
      break
  }

  return NextResponse.json({
    ok: true,
    revalidatedType: type || 'unknown',
    revalidatedSlug: slug || null,
  })
}
