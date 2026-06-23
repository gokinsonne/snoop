import type { Metadata } from "next"
import Script from "next/script"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Demo | Play Free (No Registration, 97% RTP)",
  description:
    "Play Snoop Dogg Dollars demo for free. No download, no registration. Same 97% RTP, all features. Try before playing real money at 1WIN.",
  keywords: [
    "snoop dogg dollars demo",
    "snoop dogg dollars free play",
    "snoop dogg dollars no deposit",
    "play snoop dogg dollars for free",
    "snoop dogg dollars practice mode",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/demo",
  },
  openGraph: {
    title: "Snoop Dogg Dollars Demo | Play Free",
    description: "Play the Snoop Dogg Dollars demo for free. No download, no registration. Same 97% RTP.",
    type: "website",
    url: "https://snoopdoggdollar.org/demo",
    siteName: "Snoop Dogg Dollars",
  },
}

export default function DemoPage() {
  return (
    <>
      <Script id="schema-demo" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoGame",
          name: "Snoop Dogg Dollars Demo",
          description: "Free demo version of Snoop Dogg Dollars slot by BGaming. Play without registration or deposit.",
          image: "https://snoopdoggdollar.org/og-image.jpg",
          author: {
            "@type": "Organization",
            name: "BGaming",
          },
          publisher: {
            "@type": "Organization",
            name: "Snoop Dogg Dollars",
            url: "https://snoopdoggdollar.org",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        })}
      </Script>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Demo", url: "https://snoopdoggdollar.org/demo" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">Demo</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Play Snoop Dogg Dollars Demo
          </h1>
          <p className="text-xl text-neutral-400 mb-8">
            Try the game for free. No download, no registration, no deposit. Same 97% RTP and all features.
          </p>

          {/* Game iframe */}
          <section className="mb-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 sm:p-6">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-neutral-700">
              <iframe
                className="w-full h-full"
                src="https://bgaming-network.com/play/SnoopDoggDollars/FUN?server=demo"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                title="Snoop Dogg Dollars Demo"
              />
            </div>
            <p className="mt-4 text-center text-sm text-neutral-500">
              If the game doesn't load, try refreshing the page or disable your ad blocker.
            </p>
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>What Is the Demo Mode?</h2>
            <p>
              The Snoop Dogg Dollars demo is a <strong>free-to-play version</strong> of the real money slot. It uses the exact same game engine, the same 97% RTP, and the same bonus features — but you play with virtual credits instead of real cash.
            </p>
            <p>
              This is perfect for learning the game mechanics, testing strategies, or simply enjoying the hip-hop themed visuals without any financial risk.
            </p>

            <h2>Demo vs Real Money — What's the Difference?</h2>
            <div className="my-8 overflow-x-auto rounded-xl border border-neutral-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-900 text-neutral-300">
                  <tr>
                    <th className="px-4 py-3">Feature</th>
                    <th className="px-4 py-3">Demo</th>
                    <th className="px-4 py-3">Real Money</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr className="hover:bg-neutral-900/50">
                    <td className="px-4 py-3 font-medium text-white">RTP</td>
                    <td className="px-4 py-3 text-green-400">97%</td>
                    <td className="px-4 py-3 text-green-400">97%</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/50">
                    <td className="px-4 py-3 font-medium text-white">Bonus Features</td>
                    <td className="px-4 py-3 text-green-400">All unlocked</td>
                    <td className="px-4 py-3 text-green-400">All unlocked</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/50">
                    <td className="px-4 py-3 font-medium text-white">Snoop Spin</td>
                    <td className="px-4 py-3 text-green-400">Available</td>
                    <td className="px-4 py-3 text-green-400">Available</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/50">
                    <td className="px-4 py-3 font-medium text-white">Bonus Buy</td>
                    <td className="px-4 py-3 text-green-400">Available</td>
                    <td className="px-4 py-3 text-green-400">Available</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/50">
                    <td className="px-4 py-3 font-medium text-white">Max Win</td>
                    <td className="px-4 py-3 text-neutral-400">Virtual credits</td>
                    <td className="px-4 py-3 text-green-400">Real cash (10,000x)</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/50">
                    <td className="px-4 py-3 font-medium text-white">Registration</td>
                    <td className="px-4 py-3 text-green-400">Not required</td>
                    <td className="px-4 py-3 text-yellow-400">Required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Why Play the Demo First?</h2>
            <ul>
              <li><strong>Learn the mechanics</strong> — Cluster pays, cascading wins, and multipliers are unique. The demo lets you understand them without losing money.</li>
              <li><strong>Test strategies</strong> — Try different bet sizes, Snoop Spin timing, and Bonus Buy tiers to see what works for your style.</li>
              <li><strong>Experience the volatility</strong> — Very high volatility means long dry spells. The demo shows you exactly what to expect.</li>
              <li><strong>Check the RTP</strong> — Verify the game info panel shows 97% RTP before switching to real money.</li>
              <li><strong>Enjoy the theme</strong> — Snoop Dogg's voiceovers and the hip-hop visuals are genuinely fun, even without real stakes.</li>
            </ul>

            <h2>When to Switch to Real Money?</h2>
            <p>
              Switch to real money when you:
            </p>
            <ul>
              <li>Understand the cascade rhythm and can spot hot/cold streaks</li>
              <li>Have a bankroll that covers at least 200 spins at your chosen bet</li>
              <li>Found a casino with the verified 97% RTP version</li>
              <li>Can play responsibly with pre-set win and loss limits</li>
            </ul>

            <h2>Demo Features Available</h2>
            <p>
              The demo includes <strong>every feature</strong> from the real money version:
            </p>
            <ul>
              <li>Cluster pays on 6×8 grid</li>
              <li>Multiplier Area system (x2 to x10)</li>
              <li>Wild symbols with up to x100 multipliers</li>
              <li>Weed, Skull, and Scatter bonus symbols</li>
              <li>Free spins with persistent multipliers</li>
              <li>Snoop Spin (20x bet)</li>
              <li>Bonus Buy (100x, 200x, 400x, 800x)</li>
            </ul>
          </article>

          <section className="mt-16 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Play for Real Money?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-xl mx-auto">
              Join 1WIN and get a 200% welcome bonus up to $500 + 100 free spins. Play Snoop Dogg Dollars with the best odds and fastest withdrawals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://lkhv.pro/581ee4"
                rel="nofollow noopener sponsored"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors"
              >
                Play at 1WIN →
              </a>
              <a
                href="/how-to-play"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                Read How-To Guide
              </a>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              18+ | Gamble Responsibly | T&Cs Apply
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="/review" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Full Slot Review</h3>
                <p className="mt-1 text-sm text-neutral-400">In-depth review of RTP, features, and max win potential.</p>
              </a>
              <a href="/how-to-play" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">How to Play</h3>
                <p className="mt-1 text-sm text-neutral-400">Step-by-step beginner's guide to cluster pays and bonuses.</p>
              </a>
              <a href="/strategy" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Winning Strategy</h3>
                <p className="mt-1 text-sm text-neutral-400">Bankroll management, Snoop Spin timing, and Bonus Buy tips.</p>
              </a>
              <a href="/casinos" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Where to Play</h3>
                <p className="mt-1 text-sm text-neutral-400">Best casinos offering Snoop Dogg Dollars with verified bonuses.</p>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
