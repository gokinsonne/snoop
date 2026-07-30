import type { Metadata } from "next"
import Script from "next/script"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Where to Play Snoop Dogg Dollars | 1WIN Bonus 200% + 100 FS",
  description:
    "Find the best casino to play Snoop Dogg Dollars. 1WIN offers current welcome offer, default 97% RTP, and fast withdrawals. Start now.",
  keywords: [
    "where to play snoop dogg dollars",
    "snoop dogg dollars casino",
    "snoop dogg dollars bonus",
    "1win snoop dogg dollars",
    "best casino for snoop dogg dollars",
    "snoop dogg dollars free spins",
    "play snoop dogg dollars real money",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/casinos",
  },
  openGraph: {
    title: "Where to Play Snoop Dogg Dollars | Best Casinos 2026",
    description: "Compare top casinos offering Snoop Dogg Dollars. 1WIN leads with 200% bonus + 100 FS.",
    type: "website",
    url: "https://snoopdoggdollar.org/casinos",
    siteName: "Snoop Dogg Dollars",
  },
}

const casinos = [
  {
    name: "1WIN",
    badge: "Top Pick",
    bonus: "200% up to $500 + 100 Free Spins",
    highlights: ["Snoop Dogg Dollars available", "Fast crypto withdrawals", "Curacao license", "24/7 support"],
    cta: "Claim Bonus",
    link: "https://lkhv.pro/581ee4",
    rtp: "97%",
    minDeposit: "$1",
    rating: 4.9,
  },
]

export default function CasinosPage() {
  return (
    <>
      <Script id="schema-casinos" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: casinos.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Organization",
              name: c.name,
              description: c.bonus,
              url: c.link,
            },
          })),
        })}
      </Script>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Casinos", url: "https://snoopdoggdollar.org/casinos" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">Casinos</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Where to Play Snoop Dogg Dollars
          </h1>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl">
            We hand-picked the best casinos offering Snoop Dogg Dollars with current offers and payment terms, and the 97% RTP configuration.
          </p>

          <div className="grid gap-6">
            {casinos.map((casino, idx) => (
              <article
                key={casino.name}
                className={`relative rounded-2xl border p-6 sm:p-8 transition-colors ${
                  idx === 0
                    ? "border-green-900/50 bg-green-950/10"
                    : "border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60"
                }`}
              >
                {casino.badge && (
                  <span className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    idx === 0 ? "bg-green-500 text-black" : "bg-neutral-700 text-white"
                  }`}>
                    {casino.badge}
                  </span>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">{casino.name}</h2>
                      <div className="flex items-center gap-1 text-yellow-400">
                        {"★".repeat(Math.floor(casino.rating))}
                        <span className="ml-1 text-sm text-neutral-400">{casino.rating}/5</span>
                      </div>
                    </div>
                    <p className="text-green-400 font-semibold mb-3">{casino.bonus}</p>
                    <div className="flex flex-wrap gap-2">
                      {casino.highlights.map((h) => (
                        <span key={h} className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex gap-4 text-sm text-neutral-500">
                      <span>RTP: {casino.rtp}</span>
                      <span>Min deposit: {casino.minDeposit}</span>
                    </div>
                  </div>
                  <a
                    href={casino.link}
                    rel="nofollow noopener sponsored"
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                      idx === 0
                        ? "bg-green-500 text-black hover:bg-green-400"
                        : "bg-white text-black hover:bg-neutral-200"
                    }`}
                  >
                    {casino.cta} →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How We Rank Casinos</h2>
            <p className="text-neutral-400 mb-4">
              Every casino on this list has been tested for:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li><strong className="text-white">Game availability</strong> — Confirmed Snoop Dogg Dollars in the lobby with the 97% RTP configuration.</li>
              <li><strong className="text-white">Bonus terms</strong> — Wagering requirements under 40x and fair max-win caps.</li>
              <li><strong className="text-white">Withdrawal terms</strong> — Check current processing times, limits, fees and identity requirements in the cashier.</li>
              <li><strong className="text-white">Licensing</strong> — Curacao or stronger. We avoid unlicensed operators.</li>
              <li><strong className="text-white">Support</strong> — 24/7 live chat with response times under 5 minutes.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
