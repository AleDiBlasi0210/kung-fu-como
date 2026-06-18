import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" aria-hidden="true" />

      {/* Red accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-red" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 border border-red/50 bg-red/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
          <span className="text-white/80 text-xs font-inter tracking-widest uppercase font-medium">
            Hung Sing Kung Fu Schools of Italy
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide text-shadow-lg mb-4">
          La Fenice Bianca
          <span className="block text-red mt-1">ASD</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg sm:text-xl font-inter leading-relaxed mb-3 text-shadow max-w-2xl mx-auto">
          Arte Marziale Tradizionale Cinese a Como
        </p>
        <p className="text-white/50 text-sm sm:text-base font-inter tracking-wide mb-10">
          Choy Li Fut · Tai Chi Chuan · Dal 1990
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/discipline/choy-li-fut" className="btn-primary w-full sm:w-auto text-base px-8 py-4">
            Scopri il Choy Li Fut
          </Link>
          <Link href="/discipline/tai-chi-chuan" className="btn-outline w-full sm:w-auto text-base px-8 py-4">
            Scopri il Tai Chi Chuan
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
