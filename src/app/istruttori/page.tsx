import type { Metadata } from 'next'
import { getInstructors, getSiteCopy } from '@/sanity/content'
import type { InstructorItem } from '@/sanity/types'

export const metadata: Metadata = {
  title: 'Istruttori',
  description: 'Team istruttori della scuola La Fenice Bianca ASD.',
}

type GradeGroup = {
  grade: string
  gradeOrder: number
  instructors: InstructorItem[]
}

function groupByGrade(instructors: InstructorItem[]): GradeGroup[] {
  const map = new Map<string, GradeGroup>()

  for (const ins of instructors) {
    const grade = ins.grade || 'Istruttori'
    const gradeOrder = ins.gradeOrder ?? 99

    if (!map.has(grade)) {
      map.set(grade, { grade, gradeOrder, instructors: [] })
    }
    map.get(grade)!.instructors.push(ins)
  }

  return Array.from(map.values()).sort((a, b) => a.gradeOrder - b.gradeOrder)
}

function gridClass(count: number) {
  if (count === 1) return 'grid grid-cols-1 max-w-sm mx-auto'
  if (count === 2) return 'grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
}

export default async function IstruttoriPage() {
  const [instructors, siteCopy] = await Promise.all([getInstructors(), getSiteCopy()])
  const groups = groupByGrade(instructors)
  const hasGrades = instructors.some((i) => i.grade)

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red font-inter font-semibold text-xs tracking-widest uppercase mb-4">
            {siteCopy.istruttoriBadge}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-4">Istruttori</h1>
          <p className="text-white/70 text-lg font-inter max-w-2xl mx-auto">
            {siteCopy.istruttoriLead}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {groups.map((group, i) => (
            <div key={group.grade}>
              {hasGrades && (
                <div className="flex items-center gap-4 mb-10">
                  {i > 0 && <div className="h-px flex-1 bg-gray-light" />}
                  {i === 0 && <div className="h-px flex-1 bg-transparent" />}
                  <h2 className="font-cinzel text-xl sm:text-2xl font-semibold text-black uppercase tracking-widest whitespace-nowrap">
                    {group.grade}
                  </h2>
                  <div className="h-px flex-1 bg-gray-light" />
                </div>
              )}

              <div className={`${gridClass(group.instructors.length)} gap-6 lg:gap-8`}>
                {group.instructors.map((ins) => (
                  <article key={ins.name} className="border border-gray-light rounded-sm overflow-hidden card-hover">
                    <div className="h-64 bg-gray-light overflow-hidden">
                      <img src={ins.image} alt={ins.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-red font-inter font-semibold mb-2">{ins.title}</p>
                      <h3 className="font-cinzel text-2xl text-black font-semibold mb-3 leading-snug">{ins.name}</h3>
                      <p className="text-gray-mid text-sm font-inter leading-relaxed">{ins.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
