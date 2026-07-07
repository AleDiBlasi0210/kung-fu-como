import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Popup from '@/components/Popup'

export const metadata: Metadata = {
  title: {
    default: 'Hung Sing Martial Arts Como | La Fenice Bianca ASD',
    template: '%s | La Fenice Bianca ASD',
  },
  description:
    'Scuola di arti marziali cinesi tradizionali a Como. Choy Li Fut e Tai Chi Chuan stile Yang. Sedi a Como, Albate e Ponte Lambro. Prova gratuita.',
  keywords: ['kung fu como', 'choy li fut', 'tai chi chuan', 'arti marziali como', 'hung sing', 'la fenice bianca'],
  openGraph: {
    siteName: 'Hung Sing Martial Arts Como',
    locale: 'it_IT',
    type: 'website',
    url: 'https://www.kungfucomo.org',
  },
  metadataBase: new URL('https://www.kungfucomo.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>
        <Popup />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
