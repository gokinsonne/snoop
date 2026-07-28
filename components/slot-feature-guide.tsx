import Link from "next/link"

type Section = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type Props = {
  eyebrow: string
  title: string
  intro: string
  facts: Array<[string, string]>
  sections: Section[]
  related: Array<[string, string]>
}

export function SlotFeatureGuide({ eyebrow, title, intro, facts, sections, related }: Props) {
  return (
    <main className="bg-[#080b09] text-neutral-100">
      <article className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{intro}</p>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="bg-[#101512] p-5">
              <dt className="text-xs uppercase tracking-wider text-neutral-500">{label}</dt>
              <dd className="mt-2 font-black text-emerald-300">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl font-black">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-neutral-300">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-xl border border-white/10 bg-neutral-900 p-4 text-neutral-300">✓ {bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="mt-14 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-7">
          <h2 className="text-2xl font-black">Continue researching the game</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {related.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-full border border-white/15 bg-black/25 px-5 py-3 font-bold hover:border-emerald-400/50">
                {label} →
              </Link>
            ))}
          </div>
        </aside>
      </article>
    </main>
  )
}
