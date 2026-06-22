import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Bonus | 200% + 100 Free Spins at 1WIN 2025",
  description:
    "Get the best Snoop Dogg Dollars bonus. 1WIN offers 200% up to $500 + 100 free spins. Claim now and play with extra bankroll.",
  keywords: [
    "snoop dogg dollars bonus",
    "snoop dogg dollars free spins",
    "snoop dogg dollars welcome bonus",
    "1win bonus snoop dogg dollars",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/bonus",
  },
  openGraph: {
    title: "Snoop Dogg Dollars Bonus | 200% + 100 Free Spins",
    description: "Best bonus for Snoop Dogg Dollars. 200% up to $500 + 100 free spins at 1WIN.",
    type: "article",
    url: "https://snoopdoggdollar.org/bonus",
    siteName: "Snoop Dogg Dollars",
  },
}

export default function BonusPage() {
  return (
    <>
      <Script id="schema-bonus" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          name: "Snoop Dogg Dollars Welcome Bonus",
          description: "200% up to $500 + 100 free spins for Snoop Dogg Dollars at 1WIN.",
          url: "https://snoopdoggdollar.org/bonus",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "1WIN" },
        })}
      </Script>

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">Bonus</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Snoop Dogg Dollars Bonus
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            Maximize your first session with the best welcome bonus for Snoop Dogg Dollars players.
          </p>

          <section className="mb-12 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <div className="bg-gradient-to-r from-gold to-coral text-black rounded-2xl p-6 mb-8 transform rotate-1 shadow-lg">
              <div className="text-3xl md:text-5xl font-black mb-2">+200% Bonus</div>
              <p className="text-lg md:text-xl font-semibold">Up to $500 + 100 Free Spins</p>
            </div>
            <p className="text-neutral-400 mb-6 max-w-xl mx-auto">
              Deposit $250, play with $750. Plus 100 free spins on selected slots. Fast crypto withdrawals, 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://lkhv.pro/581ee4" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors">
                Claim Bonus at 1WIN →
              </a>
            </div>
            <p className="mt-4 text-xs text-neutral-500">18+ | Gamble Responsibly | T&Cs Apply</p>
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>What You Get</h2>
            <p>
              The 1WIN welcome bonus for Snoop Dogg Dollars players includes:
            </p>
            <ul>
              <li><strong>200% match</strong> on your first deposit (up to $500)</li>
              <li><strong>100 free spins</strong> on selected BGaming slots</li>
              <li><strong>Minimum deposit:</strong> $1</li>
              <li><strong>Wagering requirement:</strong> 35x bonus amount</li>
              <li><strong>Max bet with bonus:</strong> $5 per spin</li>
              <li><strong>Valid for:</strong> 30 days from activation</li>
            </ul>

            <h2>How to Claim</h2>
            <ol>
              <li>Click the button above to visit 1WIN</li>
              <li>Register a new account (takes under 2 minutes)</li>
              <li>Make your first deposit (minimum $1)</li>
              <li>The 200% bonus is credited automatically</li>
              <li>Open Snoop Dogg Dollars and start spinning</li>
            </ol>

            <h2>Terms & Conditions</h2>
            <ul>
              <li>New players only. One bonus per household/IP.</li>
              <li>Bonus funds must be wagered 35x before withdrawal.</li>
              <li>Not all games contribute equally to wagering. Slots contribute 100%, table games 10%.</li>
              <li>Maximum withdrawal from bonus winnings: $10,000.</li>
              <li>Bonus is void if wagering is not completed within 30 days.</li>
            </ul>
          </article>

          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="/review" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Full Slot Review</h3><p className="mt-1 text-sm text-neutral-400">In-depth review of RTP, features, and max win potential.</p></a>
              <a href="/how-to-play" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">How to Play</h3><p className="mt-1 text-sm text-neutral-400">Step-by-step beginner's guide to cluster pays and bonuses.</p></a>
              <a href="/strategy" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Winning Strategy</h3><p className="mt-1 text-sm text-neutral-400">Bankroll management, Snoop Spin timing, and Bonus Buy tips.</p></a>
              <a href="/casinos" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Where to Play</h3><p className="mt-1 text-sm text-neutral-400">Best casinos offering Snoop Dogg Dollars with verified bonuses.</p></a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
