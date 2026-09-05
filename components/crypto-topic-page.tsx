import Link from "next/link"
import { TrackedAffiliateLink } from "@/components/tracked-affiliate-link"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { ArticleSchema } from "@/components/seo-schema"
import { EditorialAttribution } from "@/components/editorial-attribution"

type Props = {
  eyebrow: string
  title: string
  intro: string
  facts: Array<[string, string]>
  sections: Array<{ title: string; text: string; checks?: string[] }>
  placement: string
  modified?: string
}

const cluster = [
  ["/crypto-casinos/snoop-dogg-dollars/", "Crypto casino hub"],
  ["/crypto-casino-deposits/", "Deposit guide"],
  ["/crypto-casino-withdrawals/", "Withdrawal guide"],
  ["/bitcoin-vs-usdt-casinos/", "Bitcoin vs USDT"],
  ["/crypto-casino-networks/", "Networks"],
  ["/crypto-casino-fees/", "Fees"],
  ["/crypto-casino-kyc/", "KYC checks"],
  ["/crypto-casino-bonuses/", "Bonus terms"],
  ["/crypto-casino-security/", "Security"],
]

const paths: Record<string, string> = {
  btc_vs_usdt: "/bitcoin-vs-usdt-casinos/",
  crypto_bonuses: "/crypto-casino-bonuses/",
  crypto_deposits: "/crypto-casino-deposits/",
  crypto_fees: "/crypto-casino-fees/",
  crypto_kyc: "/crypto-casino-kyc/",
  crypto_networks: "/crypto-casino-networks/",
  crypto_security: "/crypto-casino-security/",
  crypto_withdrawals: "/crypto-casino-withdrawals/",
}

export function CryptoTopicPage({ eyebrow, title, intro, facts, sections, placement, modified = "2026-08-27" }: Props) {
  const path = paths[placement]

  return (
    <>
      <ArticleSchema path={path} title={title} description={intro} section="Crypto casino guides" modified={modified} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Crypto casino guides", url: "https://snoopdoggdollar.org/crypto-casinos/snoop-dogg-dollars/" },
        { name: title, url: `https://snoopdoggdollar.org${path}` },
      ]} />
      <main className="bg-[#080b09] text-neutral-100">
        <article className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[.2em] text-emerald-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{intro}</p>
        <EditorialAttribution />

        <div className="mt-8 rounded-2xl border border-amber-300/25 bg-amber-300/10 p-5 text-sm leading-6 text-amber-100">
          Crypto transfers are normally irreversible. Availability, limits, verification and
          processing times vary by operator, account and country. Confirm the live cashier first.
        </div>

        <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-300">{section.text}</p>
              {section.checks && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.checks.map((check) => <li key={check} className="rounded-xl border border-white/10 bg-neutral-900 p-4 text-neutral-300">✓ {check}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="mt-14 rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-7">
          <h2 className="text-2xl font-black">Check the live operator terms</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">The current route leads to 1WIN. We do not guarantee that a currency, network, bonus or game is available for every visitor.</p>
          <TrackedAffiliateLink href="https://lkhv.pro/581ee4" placement={placement} target="_blank" rel="nofollow sponsored noopener" className="mt-6 inline-flex rounded-full bg-emerald-400 px-7 py-3 font-black text-black hover:bg-emerald-300">
            Check availability →
          </TrackedAffiliateLink>
          <p className="mt-3 text-xs text-neutral-500">18+ · Affiliate link · Regional restrictions and terms apply</p>
        </aside>

        <nav className="mt-12" aria-label="Crypto guides">
          <h2 className="text-2xl font-black">Crypto payment guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {cluster.map(([href, label]) => <Link key={href} href={href} className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold hover:border-emerald-400/50">{label}</Link>)}
          </div>
        </nav>
        </article>
      </main>
    </>
  )
}
