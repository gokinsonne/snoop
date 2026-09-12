import Link from "next/link"
import { ArticleSchema } from "@/components/seo-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { EditorialAttribution } from "@/components/editorial-attribution"
import { JsonLd } from "@/components/json-ld"
import { TrackedAffiliateLink } from "@/components/tracked-affiliate-link"

type Section = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type Props = {
  path: string
  eyebrow: string
  title: string
  intro: string
  targetKeyword: string
  monthlySearches: number
  keywordDifficulty: number
  cpc?: string
  facts: Array<[string, string]>
  sections: Section[]
  faq: Array<[string, string]>
  ctaTitle: string
  ctaCopy: string
  ctaLabel: string
  placement: string
}

const related = [
  ["/crypto-casinos/", "Best crypto casino guide"],
  ["/crypto-casino-bonuses/", "No-deposit bonus checks"],
  ["/crypto-casino-kyc/", "No-KYC claims explained"],
  ["/instant-withdrawal-crypto-casinos/", "Instant withdrawal checks"],
  ["/crypto-casino-withdrawals/", "Withdrawal process"],
  ["/crypto-casino-security/", "Casino and wallet security"],
  ["/crypto-casino-networks/", "Networks and wrong-chain risk"],
  ["/research/crypto-casino-keyword-landscape/", "Open keyword research"],
] as const

export function CryptoCommercialPage({
  path,
  eyebrow,
  title,
  intro,
  targetKeyword,
  monthlySearches,
  keywordDifficulty,
  cpc,
  facts,
  sections,
  faq,
  ctaTitle,
  ctaCopy,
  ctaLabel,
  placement,
}: Props) {
  const absoluteUrl = `https://snoopdoggdollar.org${path}`
  const breadcrumbs = path === "/crypto-casinos/"
    ? [
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Crypto casinos", url: absoluteUrl },
      ]
    : [
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Crypto casinos", url: "https://snoopdoggdollar.org/crypto-casinos/" },
        { name: title, url: absoluteUrl },
      ]

  return (
    <>
      <ArticleSchema
        path={path}
        title={title}
        description={intro}
        section="Crypto casino research"
        published="2026-09-12"
        modified="2026-09-12"
        aboutGame={false}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <main className="min-h-screen bg-[#070a08] text-neutral-100">
        <article>
          <header className="overflow-hidden border-b border-emerald-300/10 bg-[radial-gradient(circle_at_82%_12%,rgba(16,185,129,.22),transparent_34%),radial-gradient(circle_at_12%_70%,rgba(234,179,8,.12),transparent_32%)]">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
              <p className="text-xs font-black uppercase tracking-[.24em] text-emerald-400">
                {eyebrow} · Updated 12 September 2026
              </p>
              <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 sm:text-xl">{intro}</p>
              <EditorialAttribution />

              <dl className="mt-9 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {facts.map(([label, value]) => (
                  <div key={label} className="bg-[#0d120f] p-5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-neutral-500">{label}</dt>
                    <dd className="mt-2 text-lg font-black text-emerald-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </header>

          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_310px]">
            <div className="min-w-0">
              <section className="rounded-3xl border border-sky-300/20 bg-sky-300/[.06] p-6 sm:p-8" aria-labelledby="research-signal">
                <p className="text-xs font-black uppercase tracking-[.2em] text-sky-300">Search-demand evidence</p>
                <h2 id="research-signal" className="mt-3 text-2xl font-black sm:text-3xl">
                  Why this page exists
                </h2>
                <p className="mt-4 leading-7 text-neutral-300">
                  DataForSEO reported approximately <strong className="text-white">{monthlySearches.toLocaleString("en-US")} US searches per month</strong> for
                  {` “${targetKeyword}”`} with keyword difficulty {keywordDifficulty}{cpc ? ` and CPC ${cpc}` : ""} on 12 September 2026.
                  Search volumes are rounded estimates, not promised traffic, and related phrases can overlap.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
                  <Link href="/research/crypto-casino-keyword-landscape/" className="rounded-full border border-sky-300/25 px-4 py-2 text-sky-200 hover:bg-sky-300/10">
                    View methodology and dataset →
                  </Link>
                  <a href="/data/crypto-casino-keyword-landscape.csv" className="rounded-full border border-white/10 px-4 py-2 text-neutral-300 hover:border-white/25">
                    Download CSV
                  </a>
                </div>
              </section>

              <div className="mt-14 space-y-14">
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-3xl font-black tracking-tight text-white">{section.title}</h2>
                    <div className="mt-5 space-y-4 text-base leading-8 text-neutral-300 sm:text-lg">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 leading-6 text-neutral-300">
                            <span className="mr-2 text-emerald-400">✓</span>{bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <section className="mt-14 rounded-3xl border border-emerald-300/25 bg-emerald-300/[.08] p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[.2em] text-emerald-300">Regional route</p>
                <h2 className="mt-3 text-3xl font-black">{ctaTitle}</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-300">{ctaCopy}</p>
                <TrackedAffiliateLink
                  placement={placement}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="mt-7 inline-flex rounded-full bg-emerald-400 px-7 py-3.5 font-black text-black transition hover:bg-emerald-300"
                >
                  {ctaLabel}
                </TrackedAffiliateLink>
                <p className="mt-3 text-xs leading-5 text-neutral-500">
                  18+ · Affiliate link · The destination depends on country and may exclude states or regions. Verify eligibility, licence, game availability and current terms before registering or depositing.
                </p>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-black">Frequently asked questions</h2>
                <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                  {faq.map(([question, answer]) => (
                    <section key={question} className="py-6">
                      <h3 className="text-xl font-black text-white">{question}</h3>
                      <p className="mt-3 leading-7 text-neutral-300">{answer}</p>
                    </section>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-20 lg:self-start">
              <div className="rounded-3xl border border-white/10 bg-[#0d120f] p-6">
                <h2 className="text-xl font-black">Research path</h2>
                <nav className="mt-4 grid gap-2" aria-label="Crypto casino research path">
                  {related.map(([href, label]) => (
                    <Link key={href} href={href} className={`rounded-xl px-4 py-3 text-sm font-bold transition ${href === path ? "bg-emerald-400 text-black" : "border border-white/10 text-neutral-300 hover:border-emerald-300/35 hover:text-white"}`}>
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/[.06] p-5 text-sm leading-6 text-amber-100">
                Crypto payments do not remove gambling risk, KYC obligations or local restrictions. Never borrow money or chase losses.
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  )
}
