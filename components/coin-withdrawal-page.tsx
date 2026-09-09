import Link from "next/link"
import { ArticleSchema } from "@/components/seo-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { EditorialAttribution } from "@/components/editorial-attribution"
import { JsonLd } from "@/components/json-ld"
import { TrackedAffiliateLink } from "@/components/tracked-affiliate-link"

type CoinProfile = {
  coin: "Dogecoin" | "Ethereum"
  ticker: "DOGE" | "ETH"
  path: string
  title: string
  intro: string
  network: string
  networkWarning: string
  pendingExplanation: string
  feeExplanation: string
  officialUrl: string
  officialLabel: string
  officialNote: string
  placement: string
}

export function CoinWithdrawalPage({ profile }: { profile: CoinProfile }) {
  const faq = [
    {
      question: `How long does a ${profile.coin} casino withdrawal take?`,
      answer: "There is no universal time. The operator must review and approve the request before broadcasting it, then the receiving platform may wait for its own number of network confirmations.",
    },
    {
      question: `Why is my ${profile.ticker} withdrawal pending?`,
      answer: "First check whether the operator has supplied a transaction hash. No hash usually means the request is still inside the casino; a hash lets you inspect the separate blockchain stage.",
    },
    {
      question: `Can a casino request KYC before a ${profile.coin} withdrawal?`,
      answer: "Yes. Paying with crypto does not guarantee KYC-free withdrawals. Identity, address, payment or source-of-funds checks can be triggered by the operator's rules and applicable obligations.",
    },
    {
      question: `What should I verify before entering a ${profile.ticker} withdrawal address?`,
      answer: `Confirm the asset, exact ${profile.network} route, destination address, minimum amount and fee. A familiar-looking address is not proof that the selected network is correct.`,
    },
  ]

  return (
    <>
      <ArticleSchema path={profile.path} title={profile.title} description={profile.intro} section="Crypto casino withdrawals" modified="2026-09-09" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Crypto casino withdrawals", url: "https://snoopdoggdollar.org/crypto-casino-withdrawals/" },
        { name: `${profile.coin} casino withdrawals`, url: `https://snoopdoggdollar.org${profile.path}` },
      ]} />

      <main className="bg-[#080b09] text-neutral-100">
        <article className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <p className="text-sm font-black uppercase tracking-[.2em] text-emerald-400">Updated 9 September 2026 · Cashier guide</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{profile.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{profile.intro}</p>
          <EditorialAttribution />

          <div className="mt-8 rounded-2xl border border-amber-300/25 bg-amber-300/10 p-5 text-sm leading-6 text-amber-100">
            A fast blockchain does not guarantee a fast casino payout. Operator review, KYC, wagering checks and withdrawal queues happen before the network transaction exists.
          </div>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Asset", profile.ticker],
              ["Exact route", profile.network],
              ["Proof", "Transaction hash"],
              ["First check", "Operator status"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#101512] p-5">
                <dt className="text-xs uppercase tracking-wider text-neutral-500">{label}</dt>
                <dd className="mt-2 font-black text-emerald-300">{value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-14">
            <h2 className="text-3xl font-black">The two clocks behind a {profile.ticker} withdrawal</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
                <p className="text-xs font-black uppercase tracking-wider text-emerald-400">1 · Operator processing</p>
                <h3 className="mt-3 text-xl font-black">Before a transaction hash exists</h3>
                <p className="mt-3 leading-7 text-neutral-300">The casino can review account eligibility, wagering, limits, KYC, withdrawal address and internal risk checks. “Pending” at this stage is not blockchain congestion.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
                <p className="text-xs font-black uppercase tracking-wider text-emerald-400">2 · Network settlement</p>
                <h3 className="mt-3 text-xl font-black">After the transaction is broadcast</h3>
                <p className="mt-3 leading-7 text-neutral-300">The transaction hash lets you inspect whether the transfer is pending, included and accumulating confirmations. The casino and receiving wallet may apply different confirmation thresholds.</p>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-black">Why a {profile.coin} casino withdrawal can be pending</h2>
            <p className="mt-4 max-w-3xl leading-8 text-neutral-300">{profile.pendingExplanation}</p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Open the casino cashier and record the request status and time.",
                "Check email and account messages for a KYC or security request.",
                "Look for a transaction hash; do not confuse a request ID with a blockchain hash.",
                "If a hash exists, inspect it using a suitable explorer for the selected network.",
                "Compare the asset, network, address and amount with the withdrawal receipt.",
                "Contact official support with the request ID and hash; never share a seed phrase or private key.",
              ].map((step, index) => (
                <li key={step} className="rounded-xl border border-white/10 bg-neutral-900 p-4 text-neutral-300"><span className="mr-2 font-black text-emerald-300">{index + 1}.</span>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-14 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">Limits and fees</h2>
              <p className="mt-4 leading-8 text-neutral-300">{profile.feeExplanation}</p>
              <ul className="mt-5 space-y-3 text-neutral-300">
                <li>✓ Minimum and maximum amount per request</li>
                <li>✓ Daily, weekly or account-level limits</li>
                <li>✓ Operator fee and amount actually sent</li>
                <li>✓ Receiving-wallet minimum and crediting policy</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black">Network and address check</h2>
              <p className="mt-4 leading-8 text-neutral-300">{profile.networkWarning}</p>
              <ul className="mt-5 space-y-3 text-neutral-300">
                <li>✓ Select the asset before copying the address</li>
                <li>✓ Match the exact network on both sides</li>
                <li>✓ Recheck the first and last address characters</li>
                <li>✓ Use a small test where limits and fees make it practical</li>
              </ul>
            </div>
          </section>

          <section className="mt-14 rounded-2xl border border-sky-300/20 bg-sky-300/[.06] p-6">
            <h2 className="text-2xl font-black">Official network reference</h2>
            <p className="mt-3 leading-7 text-neutral-300">{profile.officialNote}</p>
            <a href={profile.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-black text-sky-300 underline underline-offset-4">{profile.officialLabel} →</a>
          </section>

          <aside className="mt-14 rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-7">
            <h2 className="text-2xl font-black">Check the live {profile.ticker} withdrawal terms first</h2>
            <p className="mt-3 max-w-3xl text-neutral-300">The route selects an option by country. Confirm that the operator supports your region, Snoop Dogg Dollars and the exact {profile.ticker} withdrawal route before registering or depositing.</p>
            <ul className="mt-5 grid gap-2 text-sm text-neutral-200 sm:grid-cols-3">
              <li className="rounded-xl border border-emerald-300/15 bg-black/20 px-4 py-3">✓ Withdrawal limits and fee</li>
              <li className="rounded-xl border border-emerald-300/15 bg-black/20 px-4 py-3">✓ KYC and processing estimate</li>
              <li className="rounded-xl border border-emerald-300/15 bg-black/20 px-4 py-3">✓ Exact asset and network</li>
            </ul>
            <TrackedAffiliateLink placement={profile.placement} target="_blank" rel="nofollow sponsored noopener" className="mt-6 inline-flex rounded-full bg-emerald-400 px-7 py-3 font-black text-black hover:bg-emerald-300">
              Check regional {profile.ticker} terms →
            </TrackedAffiliateLink>
            <p className="mt-3 text-xs text-neutral-500">18+ · Affiliate link · Regional restrictions and terms apply</p>
          </aside>

          <section className="mt-14">
            <h2 className="text-3xl font-black">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {faq.map((item) => (
                <section key={item.question} className="py-6">
                  <h3 className="text-xl font-black">{item.question}</h3>
                  <p className="mt-3 leading-7 text-neutral-300">{item.answer}</p>
                </section>
              ))}
            </div>
          </section>

          <nav className="mt-12" aria-label="Related crypto guides">
            <h2 className="text-2xl font-black">Continue the withdrawal check</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link href="/crypto-casino-withdrawals/" className="rounded-xl border border-white/10 p-4 font-bold hover:border-emerald-400/50">Complete crypto withdrawal guide →</Link>
              <Link href="/crypto-casino-kyc/" className="rounded-xl border border-white/10 p-4 font-bold hover:border-emerald-400/50">KYC before withdrawal →</Link>
              <Link href="/crypto-casino-fees/" className="rounded-xl border border-white/10 p-4 font-bold hover:border-emerald-400/50">Calculate crypto fees →</Link>
              <Link href="/crypto-casino-networks/" className="rounded-xl border border-white/10 p-4 font-bold hover:border-emerald-400/50">Match the correct network →</Link>
            </div>
          </nav>
        </article>
      </main>
    </>
  )
}
