import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { getNews, getNewsBySlug } from '@/sanity/content'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export async function generateStaticParams() {
  const news = await getNews()
  return news.filter((n) => !!n.slug).map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const item = await getNewsBySlug(params.slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.excerpt,
  }
}

const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-gray-mid font-inter leading-relaxed mb-5">{children}</p>,
    h2: ({ children }) => <h2 className="font-cinzel text-black text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="font-cinzel text-black text-xl font-semibold mt-6 mb-3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-red pl-4 italic text-gray-mid my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 mb-5 space-y-2 text-gray-mid font-inter">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 mb-5 space-y-2 text-gray-mid font-inter">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-red underline hover:text-red-light">
        {children}
      </a>
    ),
  },
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = await getNewsBySlug(params.slug)
  if (!item) notFound()

  const hasContent = Array.isArray(item.content) && item.content.length > 0

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-inter mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna a tutte le news
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red text-white text-xs font-inter font-semibold tracking-wide px-2.5 py-1 rounded-full">
              {item.category}
            </span>
            <span className="text-white/50 text-xs uppercase tracking-widest font-inter">
              {formatDate(item.date)}
            </span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-wide leading-tight">{item.title}</h1>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {item.image && (
            <div className="mb-10 rounded-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.title} className="w-full object-cover max-h-[420px]" />
            </div>
          )}

          {hasContent ? (
            <div className="prose-news">
              <PortableText value={item.content!} components={portableComponents} />
            </div>
          ) : (
            <p className="text-gray-mid font-inter leading-relaxed text-lg">{item.excerpt}</p>
          )}
        </div>
      </section>
    </>
  )
}
