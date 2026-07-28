import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { TrackedAffiliateLink } from "@/components/tracked-affiliate-link"

const OFFER_URL = "https://lkhv.pro/581ee4"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Slot: Demo, RTP & Review (2026)",
  description:
    "Play the Snoop Dogg Dollars demo, check its 97% RTP, 10,000x max win, free spins and Bonus Buy rules, then compare real-money and crypto payment options.",
  alternates: { canonical: "https://snoopdoggdollar.org/" },
  openGraph: {
    title: "Snoop Dogg Dollars Slot — Demo, RTP & Honest Review",
    description:
      "A fact-checked guide to BGaming's Snoop Dogg Dollars: free demo, mechanics, RTP, max win and where to play.",
    url: "https://snoopdoggdollar.org/",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Snoop Dogg Dollars slot guide" }],
  },
}

const specs = [
  ["Provider", "BGaming"],
  ["Release", "30 October 2024"],
  ["Grid", "6 reels × 8 rows"],
  ["Mechanic", "Cluster Pays"],
  ["Default RTP", "97.00%"],
  ["Volatility", "High"],
  ["Max win", "10,000× bet"],
  ["Bet range", "$0.25–$25"],
]

const guides = [
  ["/review/", "Full review", "Mechanics, verdict, strengths and drawbacks"],
  ["/demo/", "Free demo", "Try the game without registration or a deposit"],
  ["/rtp/", "RTP explained", "Check the game version before wagering"],
  ["/free-spins/", "Free spins", "Scatter requirements and persistent multipliers"],
  ["/max-win/", "10,000× max win", "What the maximum means in practice"],
  ["/how-to-play/", "How to play", "Clusters, refills and multiplier cells"],
  ["/bonus/", "Current bonus", "Offer details, restrictions and terms"],
  ["/mobile/", "Mobile guide", "Browser play on Android and iPhone"],
  ["/bonus-buy/", "Bonus Buy", "Compare the 100×, 200×, 400× and 800× options"],
  ["/snoop-spin/", "Snoop Spin", "What the 20× enhanced spin guarantees"],
  ["/symbols-paytable/", "Symbols & paytable", "Clusters, Wilds, Scatters and multipliers"],
]

const faq = [
  ["What is Snoop Dogg Dollars?", "It is a 6×8 cluster-pays slot created by BGaming with licensed Snoop Dogg visuals, voiceovers and a hip-hop soundtrack."],
  ["What is the maximum win?", "The documented maximum is 10,000× the bet. It is a theoretical cap, not a likely or guaranteed outcome."],
  ["How many free spins can I get?", "Three, four, five or six Scatters award 10, 12, 15 or 20 free spins respectively."],
  ["Can I play for free?", "Yes. The demo lets you inspect the mechanics without registration, a deposit or real-money risk."],
  ["Can I use Bitcoin or USDT?", "Availability depends on the casino and your country. The crypto guides explain deposits and withdrawals; always verify current operator terms before paying."],
]

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <main className="bg-[#080b09] text-neutral-100">
      <Script id="home-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="relative isolate overflow-hidden border-b border-emerald-400/15">
        <Image
          src="/hip-hop-background-with-gold-chains-and-smoke.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,.22),transparent_36%),linear-gradient(to_bottom,rgba(8,11,9,.35),#080b09)]" />
        <div className="relative mx-auto grid min-h-[670px] max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.12fr_.88fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-emerald-300">
              Updated July 2026 · Independent slot guide
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">
              Snoop Dogg Dollars
              <span className="mt-3 block text-emerald-400">demo, RTP & real review</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
              A fact-checked guide to BGaming&apos;s hip-hop cluster slot. Learn the real
              10,000× cap, inspect its 97% default RTP, try the demo, and compare
              real-money and crypto payment options without fake win promises.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo/"
                className="rounded-xl bg-emerald-400 px-7 py-4 text-center font-extrabold text-black transition hover:bg-emerald-300"
              >
                Play free demo
              </Link>
              <TrackedAffiliateLink
                href={OFFER_URL}
                placement="home_hero"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="rounded-xl border border-white/20 bg-black/30 px-7 py-4 text-center font-extrabold text-white backdrop-blur transition hover:border-emerald-400/60"
              >
                Play with real money
              </TrackedAffiliateLink>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              18+ · Gambling involves risk · Affiliate link · Terms and regional restrictions apply
            </p>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-black/55 p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-bold">Verified game facts</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">BGaming</span>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
              {specs.map(([label, value]) => (
                <div key={label} className="bg-[#101512] p-4">
                  <dt className="text-xs text-neutral-500">{label}</dt>
                  <dd className="mt-1 font-bold text-neutral-100">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-400">Straight answer</p>
            <h2 className="mt-3 text-4xl font-black">Is it worth playing?</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-neutral-300">
            <p>
              Snoop Dogg Dollars is more than a celebrity skin. Winning clusters remove
              symbols, new ones refill the grid, and repeated wins build multiplier cells.
              In free spins those cells persist, which is where the game&apos;s biggest
              sequences can develop.
            </p>
            <p>
              The 97% default RTP is attractive, but operators may use a lower configuration.
              High volatility also means long losing stretches are possible. Our verdict:
              try the demo first, verify the RTP in the game information panel, and never
              treat the 10,000× maximum as an expected result.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d120f]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-400">How the bonus works</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black">Free spins reward a board that builds over time</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[["3 Scatters", "10 spins"], ["4 Scatters", "12 spins"], ["5 Scatters", "15 spins"], ["6 Scatters", "20 spins"]].map(([a, b]) => (
              <div key={a} className="rounded-2xl border border-white/10 bg-black/25 p-6">
                <p className="text-sm text-neutral-500">{a}</p>
                <p className="mt-2 text-2xl font-black text-emerald-300">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/free-spins/" className="font-bold text-emerald-300 hover:text-emerald-200">Read the free-spins guide →</Link>
            <Link href="/strategy/" className="font-bold text-neutral-300 hover:text-white">Bankroll and risk guide →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl border border-amber-300/20 bg-[linear-gradient(135deg,rgba(245,158,11,.12),rgba(16,185,129,.08))] p-7 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-amber-300">Crypto-ready route</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h2 className="text-4xl font-black">Play with BTC or USDT — after checking the terms</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                Crypto can make deposits and withdrawals faster, but it does not make a
                casino trustworthy by itself. Check supported networks, fees, wagering
                requirements, KYC rules and regional availability before sending funds.
              </p>
            </div>
            <div className="grid content-start gap-3">
              <Link href="/crypto-casinos/snoop-dogg-dollars/" className="rounded-xl border border-white/15 bg-black/25 px-5 py-4 font-bold hover:border-emerald-400/50">Snoop Dogg Dollars crypto casinos →</Link>
              <Link href="/bitcoin-casinos/snoop-dogg-dollars/" className="rounded-xl border border-white/15 bg-black/25 px-5 py-4 font-bold hover:border-amber-300/50">Bitcoin casino guide →</Link>
              <Link href="/usdt-casinos/snoop-dogg-dollars/" className="rounded-xl border border-white/15 bg-black/25 px-5 py-4 font-bold hover:border-emerald-400/50">USDT casino guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d120f]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-4xl font-black">Explore every part of the game</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map(([href, title, description]) => (
              <Link key={href} href={href} className="group rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-emerald-400/50">
                <h3 className="font-black group-hover:text-emerald-300">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="text-4xl font-black">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {faq.map(([question, answer]) => (
            <article key={question} className="py-6">
              <h3 className="text-xl font-black">{question}</h3>
              <p className="mt-3 leading-7 text-neutral-400">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-emerald-400 px-5 py-14 text-black">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em]">Ready to compare?</p>
            <h2 className="mt-2 text-4xl font-black">Demo first. Real money only if the terms fit.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/demo/" className="rounded-xl bg-black px-6 py-4 font-black text-white">Play demo</Link>
            <TrackedAffiliateLink href={OFFER_URL} placement="home_bottom" target="_blank" rel="nofollow sponsored noopener" className="rounded-xl border-2 border-black px-6 py-4 font-black">Visit 1WIN</TrackedAffiliateLink>
          </div>
        </div>
      </section>
    </main>
  )
}
