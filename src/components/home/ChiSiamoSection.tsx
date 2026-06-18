export default function ChiSiamoSection() {
  const affiliations = ['USAcli', 'Hung Sing Kung Fu Schools of Italy', 'Grandmaster Doc Fai Wong']

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            La nostra missione
          </span>

          {/* Title */}
          <h2 className="section-title text-black mb-6">
            Chi Siamo
          </h2>
          <div className="w-12 h-0.5 bg-red mx-auto mb-8" />

          {/* Text */}
          <p className="text-gray-mid text-lg font-inter leading-relaxed mb-5">
            Lo scopo della nostra scuola è la pratica e la divulgazione delle arti marziali cinesi
            tradizionali, in particolare lo stile <strong className="text-black">Choy Li Fut</strong> e
            il <strong className="text-black">Tai Chi Chuan stile Yang</strong>.
          </p>
          <p className="text-gray-mid text-lg font-inter leading-relaxed mb-10">
            Ci rivolgiamo a coloro che vogliono avvicinarsi alla pratica di un&apos;arte marziale
            tradizionale non limitandosi ad apprendere tecniche di combattimento e autodifesa,
            ma avendo come obiettivo un corretto sviluppo psico-fisico e un generale benessere
            incoraggiato da una sana pratica fisica.
          </p>

          {/* Affiliations */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {affiliations.map((aff) => (
              <span
                key={aff}
                className="border border-gray-light text-gray-mid text-xs font-inter font-medium tracking-wide uppercase px-4 py-2 rounded-full"
              >
                {aff}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
