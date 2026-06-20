type Props = {
  missionLabel: string
  missionTitle: string
  missionText1: string
  missionText2: string
  affiliations: string[]
}

export default function ChiSiamoSection({
  missionLabel,
  missionTitle,
  missionText1,
  missionText2,
  affiliations,
}: Props) {

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            {missionLabel}
          </span>

          {/* Title */}
          <h2 className="section-title text-black mb-6">
            {missionTitle}
          </h2>
          <div className="w-12 h-0.5 bg-red mx-auto mb-8" />

          {/* Text */}
          <p className="text-gray-mid text-lg font-inter leading-relaxed mb-5">
            {missionText1}
          </p>
          <p className="text-gray-mid text-lg font-inter leading-relaxed mb-10">
            {missionText2}
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
