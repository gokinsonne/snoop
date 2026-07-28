import type { Metadata } from "next"
import { TrackedAffiliateLink } from "@/components/tracked-affiliate-link"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Casino Bonus: Terms to Check (2026)",
  description:
    "Check current Snoop Dogg Dollars casino bonus terms: wagering, eligible games, max bet, withdrawal limits, expiry and country restrictions.",
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
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-400">Current offer guide</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
          Snoop Dogg Dollars bonus terms: check before you deposit
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          Casino promotions change by account and country. We do not promise a fixed bonus.
          Use this checklist to compare the offer shown to you at the operator.
        </p>

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
      </section>
    </main>
  )
}
