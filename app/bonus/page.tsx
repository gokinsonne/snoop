import type { Metadata } from "next"
import Link from "next/link"
import { TrackedAffiliateLink } from "@/components/tracked-affiliate-link"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: {
    absolute: "Snoop Dogg Dollars Bonus & No-Deposit Offers Explained",
  },
  description:
    "Looking for a Snoop Dogg Dollars no-deposit bonus? Learn what can be verified, avoid fake codes and check wagering, game eligibility and withdrawal terms.",
  alternates: { canonical: "/bonus/" },
}

const checks = [
  ["Wagering", "Confirm what must be wagered and whether deposits, bonuses or both count."],
  ["Eligible games", "Check whether Snoop Dogg Dollars contributes to wagering and at what rate."],
  ["Maximum bet", "Bonus play may impose a lower maximum bet than cash play."],
  ["Withdrawals", "Review limits, excluded payment methods and identity requirements."],
  ["Expiry", "Offers can expire or change; rely on the live operator terms."],
  ["Availability", "Bonuses and the game itself can be restricted by country."],
]

export default function BonusPage() {
  return (
    <main className="bg-black text-white">
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Is there a Snoop Dogg Dollars no-deposit bonus?",acceptedAnswer:{"@type":"Answer",text:"We do not publish an unverified universal no-deposit code. Offers vary by operator, account and country, so availability must be confirmed in the live promotion terms."}},{"@type":"Question",name:"Do casino bonuses work on Snoop Dogg Dollars?",acceptedAnswer:{"@type":"Answer",text:"Only when the operator lists the game as eligible. Slots, bonus buys or individual features may contribute differently or be excluded."}},{"@type":"Question",name:"What should I check before claiming a bonus?",acceptedAnswer:{"@type":"Answer",text:"Check wagering, eligible games, maximum bet, expiry, withdrawal limits, payment restrictions and country availability."}}]}} />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-400">Current offer guide</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
          Snoop Dogg Dollars bonus terms: check before you deposit
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          Casino promotions change by account and country. We do not promise a fixed bonus.
          Use this checklist to compare the offer shown to you at the operator.
        </p>

        <section className="mt-10 rounded-3xl border border-amber-300/25 bg-amber-300/10 p-7">
          <p className="text-sm font-black uppercase tracking-[.18em] text-amber-300">No-deposit answer</p>
          <h2 className="mt-3 text-3xl font-black">Is there a verified Snoop Dogg Dollars no-deposit bonus?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-neutral-300">
            There is no universal code we can honestly promise to every visitor. No-deposit offers are normally limited by country, account status and expiry, and the slot may be excluded from wagering. Treat pages claiming a permanent secret code without live terms as unverified.
          </p>
          <p className="mt-4 text-neutral-300">
            If you only want to test the game without paying, use the <Link href="/demo/" className="font-bold text-emerald-300 hover:text-emerald-200">free browser demo</Link>: it requires no deposit, but virtual wins cannot be withdrawn.
          </p>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {checks.map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-2 leading-7 text-neutral-400">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-7">
          <h2 className="text-2xl font-black">Inspect the live terms</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Open the operator, select your country and read the cashier and promotion rules.
            Never deposit solely because of a headline percentage.
          </p>
          <TrackedAffiliateLink
            href="https://lkhv.pro/581ee4"
            placement="bonus_terms"
            rel="nofollow sponsored noopener"
            className="mt-6 inline-flex rounded-full bg-emerald-400 px-7 py-3 font-black text-black hover:bg-emerald-300"
          >
            Check current offer →
          </TrackedAffiliateLink>
          <p className="mt-3 text-xs text-neutral-500">18+ · Affiliate link · Terms and regional restrictions apply</p>
        </div>

        <nav className="mt-8 flex flex-wrap gap-3" aria-label="Related bonus guides">
          <Link href="/crypto-casino-bonuses/" className="rounded-full border border-white/15 px-5 py-3 font-bold hover:border-emerald-400/50">Crypto bonus terms →</Link>
          <Link href="/free-spins/" className="rounded-full border border-white/15 px-5 py-3 font-bold hover:border-emerald-400/50">Free-spins feature →</Link>
          <Link href="/bonus-buy/" className="rounded-full border border-white/15 px-5 py-3 font-bold hover:border-emerald-400/50">Bonus Buy costs →</Link>
        </nav>
      </section>
    </main>
  )
}
