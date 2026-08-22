import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { JsonLd } from "@/components/json-ld"

const OFFER_URL = "https://lkhv.pro/581ee4"

export const metadata: Metadata = {
  title: "Where to Play Snoop Dogg Dollars | Verification Checklist",
  description: "How to verify a casino offering Snoop Dogg Dollars: live game availability, RTP, licence, bonus, KYC, payment and withdrawal terms.",
  robots: "index, follow",
  alternates: { canonical: "https://snoopdoggdollar.org/casinos/" },
  openGraph: {
    title: "Where to Play Snoop Dogg Dollars",
    description: "A verification-first guide to game availability, RTP, licensing and cashier terms.",
    type: "website",
    url: "https://snoopdoggdollar.org/casinos/",
    siteName: "Snoop Dogg Dollars",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Snoop Dogg Dollars casino checklist" }],
  },
}

const checks = [
  ["Game", "Search the live lobby for the exact BGaming title, not only a landing-page logo."],
  ["RTP", "Open the in-game information panel. BGaming currently lists 96.00%, but operator builds can differ."],
  ["Licence", "Follow the licence number to the regulator's own register and match the legal entity and domain."],
  ["Bonus", "Read wagering, maximum-bet, game contribution, expiry and withdrawal-cap clauses before opting in."],
  ["Cashier", "Confirm currencies, networks, fees, limits, KYC triggers and withdrawal times inside your account."],
  ["Access", "Verify that online casino play and the operator are permitted where you live."],
]

export default function CasinosPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Where to Play Snoop Dogg Dollars", url: "https://snoopdoggdollar.org/casinos/", description: "Verification checklist for casinos offering Snoop Dogg Dollars." }} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://snoopdoggdollar.org/" }, { name: "Where to Play", url: "https://snoopdoggdollar.org/casinos/" }]} />
      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400"><Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">Where to Play</span></nav>
          <p className="text-sm font-black uppercase tracking-[.18em] text-green-400">Verification first</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">Where to Play Snoop Dogg Dollars</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-neutral-400">We currently have one affiliate route, not a tested multi-casino ranking. Use this checklist instead of trusting a bonus badge or an invented score.</p>

          <section className="mt-12 grid gap-4 sm:grid-cols-2" aria-labelledby="operator-checks">
            <h2 id="operator-checks" className="sr-only">Operator checks</h2>
            {checks.map(([heading, detail]) => <article key={heading} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"><h3 className="text-xl font-bold text-white">{heading}</h3><p className="mt-3 leading-7 text-neutral-400">{detail}</p></article>)}
          </section>

          <section className="mt-12 rounded-2xl border border-green-900/40 bg-green-950/20 p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-green-400">Current affiliate route</p>
            <h2 className="mt-2 text-2xl font-bold text-white">1WIN availability check</h2>
            <p className="mt-4 max-w-3xl leading-7 text-neutral-300">We do not claim a universal bonus, deposit minimum, licence, RTP or withdrawal speed. Those details can change by country and account. Open the route only to inspect the current lobby, legal entity and terms.</p>
            <a href={OFFER_URL} target="_blank" rel="nofollow sponsored noopener" className="mt-6 inline-flex rounded-full bg-green-400 px-6 py-3 font-black text-black hover:bg-green-300">Check live availability →</a>
            <p className="mt-3 text-xs text-neutral-500">18+ · Affiliate link · Regional restrictions and terms apply</p>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white">Country and payment checks</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link href="/play-in-india/" className="rounded-xl border border-neutral-800 p-5 hover:border-green-700">India availability and legal checks →</Link>
              <Link href="/play-in-japan/" className="rounded-xl border border-neutral-800 p-5 hover:border-green-700">日本向けの利用確認ガイド →</Link>
              <Link href="/crypto-casinos/snoop-dogg-dollars/" className="rounded-xl border border-neutral-800 p-5 hover:border-green-700">Crypto casino checklist →</Link>
              <Link href="/responsible-gaming/" className="rounded-xl border border-neutral-800 p-5 hover:border-green-700">Responsible gambling →</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
