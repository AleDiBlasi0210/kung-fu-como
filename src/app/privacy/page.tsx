import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-4xl font-bold text-black mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-gray-mid font-inter leading-relaxed">
          <p>
            Questa pagina è un placeholder. Inserire qui la privacy policy completa relativa al
            trattamento dei dati personali e ai cookie, in conformità al GDPR.
          </p>
          <p>
            Dati raccolti tramite form di contatto: nome, email, telefono, messaggio e sede
            preferita.
          </p>
          <p>
            Per informazioni: info@kungfucomo.org
          </p>
        </div>
      </div>
    </section>
  )
}
