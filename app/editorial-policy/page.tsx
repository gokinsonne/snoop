import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Editorial Policy & Review Methodology",
  description: "How SnoopDoggDollar.org verifies slot facts, crypto payment information, operator claims and page updates.",
  alternates: { canonical: "/editorial-policy/" },
}

export default function EditorialPolicyPage() {
  return (
    <main className="bg-[#080b09] text-neutral-100">
      <article className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[.2em] text-emerald-400">Transparency</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Editorial policy and review methodology</h1>
        <p className="mt-6 text-lg leading-8 text-neutral-300">
          SnoopDoggDollar.org is an independent informational and affiliate website. We separate
          documented game facts from operator-controlled information and clearly label uncertainty.
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-neutral-300">
          <section>
            <h2 className="text-3xl font-black text-white">How game facts are checked</h2>
            <p className="mt-3">Provider, release, grid, RTP, volatility, bet range, maximum win and feature rules are checked against BGaming materials and the information panel available in the game. Where operator configurations can differ, we tell readers to verify the live version. The current official BGaming listing reports 96.00% RTP and very-high volatility.</p>
          </section>
          <section>
            <h2 className="text-3xl font-black text-white">Who publishes this site</h2>
            <p className="mt-3">The publisher is the independent Snoop Dogg Dollars Guide editorial project—not BGaming, Snoop Dogg, a casino or a fictional expert. Reusable calculations and source-linked game facts are published in our <Link href="/research/snoop-dogg-dollars-feature-costs/" className="font-bold text-emerald-300">open Data Lab</Link> and <a href="https://github.com/gokinsonne/snoop-dogg-dollars-data" className="font-bold text-emerald-300" rel="noopener">public GitHub repository</a>.</p>
          </section>
          <section>
            <h2 className="text-3xl font-black text-white">Crypto and casino information</h2>
            <p className="mt-3">Casinos control availability, currencies, networks, identity checks, bonuses and withdrawals. We do not present these changing conditions as universal guarantees. Readers are directed to the authenticated cashier and current operator terms.</p>
          </section>
          <section>
            <h2 className="text-3xl font-black text-white">Affiliate relationship</h2>
            <p className="mt-3">Some outbound links are affiliate links and may generate a commission without changing the visitor&apos;s price. Commercial relationships do not change the game mathematics, and no outcome or withdrawal is guaranteed.</p>
          </section>
          <section>
            <h2 className="text-3xl font-black text-white">Corrections and updates</h2>
            <p className="mt-3">Pages show their update context where relevant. Material factual errors are corrected rather than silently preserved. Search visibility, operator availability and promotional terms are reviewed separately because they change at different speeds.</p>
          </section>
          <section>
            <h2 className="text-3xl font-black text-white">Responsible use</h2>
            <p className="mt-3">The site is intended for adults. Gambling is entertainment with a risk of loss, not an investment or income method. See our <Link href="/responsible-gaming/" className="font-bold text-emerald-300">responsible gambling guide</Link>.</p>
          </section>
        </div>
        <p className="mt-12 text-sm text-neutral-500">Last reviewed: 27 August 2026</p>
      </article>
    </main>
  )
}
