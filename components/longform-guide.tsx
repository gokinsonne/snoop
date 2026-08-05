import Link from "next/link"
import { ArticleSchema } from "@/components/seo-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

type Section = { title: string; paragraphs: string[]; bullets?: string[] }
type Props = { path: string; eyebrow: string; title: string; intro: string; facts: Array<[string, string]>; sections: Section[]; related: Array<[string, string]> }

export function LongformGuide({ path, eyebrow, title, intro, facts, sections, related }: Props) {
  return <>
    <ArticleSchema path={path} title={title} description={intro} section="Slot guides" published="2026-08-05" modified="2026-08-05" />
    <BreadcrumbSchema items={[{ name: "Home", url: "https://snoopdoggdollar.org/" }, { name: title, url: `https://snoopdoggdollar.org${path}` }]} />
    <main className="bg-[#080b09] text-neutral-100"><article className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <p className="text-sm font-black uppercase tracking-[.2em] text-emerald-400">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{intro}</p><p className="mt-4 text-sm text-neutral-500"><time dateTime="2026-08-05">Updated 5 August 2026</time> · Editorial guide</p>
      <dl className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{facts.map(([label,value]) => <div key={label} className="bg-[#101512] p-5"><dt className="text-xs uppercase tracking-wider text-neutral-500">{label}</dt><dd className="mt-2 font-black text-emerald-300">{value}</dd></div>)}</dl>
      <div className="mt-14 space-y-12">{sections.map((s) => <section key={s.title}><h2 className="text-3xl font-black">{s.title}</h2><div className="mt-4 space-y-4 text-base leading-8 text-neutral-300">{s.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>{s.bullets && <ul className="mt-5 grid gap-3 sm:grid-cols-2">{s.bullets.map((b) => <li key={b} className="rounded-xl border border-white/10 bg-neutral-900 p-4 text-neutral-300">✓ {b}</li>)}</ul>}</section>)}</div>
      <aside className="mt-14 rounded-3xl border border-white/10 bg-neutral-900 p-7"><h2 className="text-2xl font-black">Continue the research</h2><div className="mt-5 flex flex-wrap gap-3">{related.map(([href,label]) => <Link key={href} href={href} className="rounded-full border border-white/15 px-5 py-3 font-bold hover:border-emerald-400/50">{label} →</Link>)}</div></aside>
    </article></main>
  </>
}
