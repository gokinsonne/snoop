import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "How to Play Snoop Dogg Dollars | Rules, Demo & Bonus Guide",
  description:
    "Learn how to play Snoop Dogg Dollars slot. Step-by-step guide: cluster pays, symbols, bonus features, Snoop Spin, free spins. Play free demo or real money at 1WIN.",
  keywords: [
    "how to play snoop dogg dollars",
    "snoop dogg dollars guide",
    "snoop dogg dollars rules",
    "snoop dogg dollars tutorial",
    "snoop dogg dollars cluster pays",
    "snoop dogg dollars symbols",
    "snoop dogg dollars bonus features",
    "snoop dogg dollars free spins",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/how-to-play/",
  },
  openGraph: {
    title: "How to Play Snoop Dogg Dollars | Complete Guide",
    description: "Step-by-step guide to playing Snoop Dogg Dollars slot. Cluster pays, symbols, bonuses & tips.",
    type: "article",
    url: "https://snoopdoggdollar.org/how-to-play/",
    siteName: "Snoop Dogg Dollars",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "How to play Snoop Dogg Dollars" }],
  },
}

export default function HowToPlayPage() {
  return (
    <>
      <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Play Snoop Dogg Dollars",
          description: "A step-by-step guide to playing the Snoop Dogg Dollars slot by BGaming.",
          image: "https://snoopdoggdollar.org/og-image.jpg",
          totalTime: "PT5M",
          step: [
            {
              "@type": "HowToStep",
              name: "Choose Your Casino",
              text: "Pick an operator available in your country, then verify its licence details, RTP setting, payment methods and current terms.",
              url: "https://snoopdoggdollar.org/how-to-play/#step-1",
            },
            {
              "@type": "HowToStep",
              name: "Set Your Bet",
              text: "Adjust your bet size from $0.25 to $25 per spin. Start with smaller bets to learn the game mechanics before going higher.",
              url: "https://snoopdoggdollar.org/how-to-play/#step-2",
            },
            {
              "@type": "HowToStep",
              name: "Spin the Reels",
              text: "Click the spin button. Wins form when 5+ matching symbols connect horizontally or vertically. Winning clusters disappear and new symbols cascade.",
              url: "https://snoopdoggdollar.org/how-to-play/#step-3",
            },
            {
              "@type": "HowToStep",
              name: "Trigger Bonuses",
              text: "Land 3+ Scatters for free spins. Use Snoop Spin (20x bet) for guaranteed Wilds. Buy bonus directly with Bonus Buy feature.",
              url: "https://snoopdoggdollar.org/how-to-play/#step-4",
            },
          ],
        }} />

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "How to Play", url: "https://snoopdoggdollar.org/how-to-play/" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">How to Play</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            How to Play Snoop Dogg Dollars
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            A complete beginner's guide to BGaming's hip-hop cluster-pays slot. Learn the rules, symbols, and features in 5 minutes.
          </p>

          {/* Quick Specs */}
          <section className="mb-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Game at a Glance</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "Provider", value: "BGaming" },
                { label: "Reels", value: "6 × 8" },
                { label: "Pay System", value: "Cluster Pays" },
                { label: "Min Bet", value: "$0.25" },
                { label: "Max Bet", value: "$25" },
                { label: "BGaming RTP", value: "96.00%" },
                { label: "Volatility", value: "Very High" },
                { label: "Max Win", value: "10,000x" },
                { label: "Hit Rate", value: "3.00 (listed)" },
              ].map((spec) => (
                <div key={spec.label} className="rounded-lg bg-neutral-800/50 p-3">
                  <dt className="text-xs text-neutral-500 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="text-lg font-semibold text-white">{spec.value}</dd>
                </div>
              ))}
            </div>
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2 id="step-1">Step 1: Choose Your Casino</h2>
            <p>
              First, choose an operator available in your country and open the game information panel. RTP, payment methods and feature availability can vary. The current affiliate route leads to <strong>1WIN</strong>, but we cannot verify one configuration for every visitor or country.
            </p>
            <p>
              Registration time, minimum deposit and identity checks vary by operator, country and payment method. Check these terms before sending funds.
            </p>

            <h2 id="step-2">Step 2: Set Your Bet</h2>
            <p>
              Snoop Dogg Dollars accepts bets from <strong>$0.25 to $25 per spin</strong>. The bet controls all payouts and bonus buy costs. For beginners, we recommend starting at $0.25–$1 to learn the rhythm of the game before scaling up.
            </p>
            <p>
              Convert the stake into cash before playing: a $50 limit at $0.25 equals at most 200 ordinary spins before wins or optional features. That is cost arithmetic, not a “safe” bankroll recommendation. Set a hard loss and time limit before starting.
            </p>

            <h2 id="step-3">Step 3: Spin the Reels</h2>
            <p>
              Snoop Dogg Dollars uses <strong>cluster pays</strong> instead of traditional paylines. Wins form when <strong>5 or more matching symbols</strong> connect horizontally or vertically on the 6×8 grid. After a win, the symbols disappear and new ones cascade from above — potentially creating chain reactions.
            </p>
            <p>
              The key mechanic is the <strong>Multiplier Area</strong>. Every winning cluster marks its cells. If another win hits the same cell, a multiplier starting at x2 is applied. Each consecutive win increases the multiplier by +2, up to x10 in the base game.
            </p>

            <h3>Symbol Paytable</h3>
            <div className="my-8 overflow-x-auto rounded-xl border border-neutral-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-900 text-neutral-300">
                  <tr>
                    <th className="px-4 py-3">Symbol</th>
                    <th className="px-4 py-3">5-of-a-kind</th>
                    <th className="px-4 py-3">15+ cluster</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {[
                    { sym: "Purple Doberman", x5: "0.8x", x15: "120x" },
                    { sym: "Red Bulldog", x5: "0.6x", x15: "80x" },
                    { sym: "Green Collie", x5: "0.4x", x15: "48x" },
                    { sym: "X Symbol", x5: "0.32x", x15: "32x" },
                    { sym: "Square", x5: "0.24x", x15: "24x" },
                    { sym: "Triangle", x5: "0.2x", x15: "20x" },
                    { sym: "Circle", x5: "0.16x", x15: "16x" },
                  ].map((row) => (
                    <tr key={row.sym} className="hover:bg-neutral-900/50">
                      <td className="px-4 py-3 font-medium text-white">{row.sym}</td>
                      <td className="px-4 py-3 text-neutral-400">{row.x5}</td>
                      <td className="px-4 py-3 text-neutral-400">{row.x15}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="step-4">Step 4: Trigger Bonuses</h2>
            <p>
              After winning symbols disappear and before new ones cascade, empty cells have a chance to reveal one of four bonus symbols:
            </p>
            <ul>
              <li><strong>Wild</strong> — Sticky during cascades. Adopts cell multiplier up to x10. Every win increases Wild multiplier by +10, up to x100.</li>
              <li><strong>Weed</strong> — Upgrades all active multipliers by +2. Adds +10 to any Wild multipliers.</li>
              <li><strong>Skull</strong> — Destroys all low-paying symbols and triggers a refill.</li>
              <li><strong>Scatter</strong> — 3, 4, 5, or 6 Scatters trigger 10, 12, 15, or 20 free spins.</li>
            </ul>

            <h3>Free Spins Round</h3>
            <p>
              Triggering Scatters can transform into <strong>Wild symbols or x10 Cell Multipliers</strong> that remain for the bonus. Multipliers do <strong>not reset</strong> between free spins, which changes the feature structure but never guarantees a profitable result.
            </p>

            <h3>Snoop Spin</h3>
            <p>
              For <strong>20x the base bet</strong>, Snoop Spin guarantees at least one Wild before the result. It concentrates twenty ordinary stake units into one paid action and does not guarantee a win.
            </p>

            <h3>Bonus Buy</h3>
            <p>
              Four listed tiers are available where legal: 100x, 200x, 400x, and 800x. The 800x option turns triggering Scatters into Wilds, but can still return less than its purchase price.
            </p>

            <h2>Beginner Tips</h2>
            <ul>
              <li>BGaming lists 96.00% RTP; verify the value in the exact game build before wagering.</li>
              <li>Start with the demo to understand the cascade rhythm.</li>
              <li>Don't chase Bonus Buy at 800x on a small bankroll — it's a high-risk move.</li>
              <li>Hot and cold streaks do not predict the next random result.</li>
              <li>Watch for the Weed symbol — it can turn a modest cascade into a monster win.</li>
            </ul>
          </article>

          {/* CTA */}
          <section className="mt-16 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Play?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-xl mx-auto">
              Join 1WIN and get a current welcome offer. Play Snoop Dogg Dollars with the current game and payment terms.
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
                href="/demo/"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                Try Demo First
              </a>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              18+ | Gamble Responsibly | T&Cs Apply
            </p>
          </section>

          {/* Internal Links */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="/review/" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Full Slot Review</h3>
                <p className="mt-1 text-sm text-neutral-400">In-depth review of RTP, features, and max win potential.</p>
              </a>
              <a href="/casinos/" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Where to Play</h3>
                <p className="mt-1 text-sm text-neutral-400">Best casinos offering Snoop Dogg Dollars with current operator terms.</p>
              </a>
              <a href="/strategy/" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Winning Strategy</h3>
                <p className="mt-1 text-sm text-neutral-400">Bankroll management, Snoop Spin timing, and Bonus Buy tips.</p>
              </a>
              <a href="/faq/" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">FAQ</h3>
                <p className="mt-1 text-sm text-neutral-400">Common questions about mobile play, withdrawals, and more.</p>
              </a>
              <a href="/vs-aztec-clusters/" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400">Snoop vs Aztec Clusters</h3><p className="mt-1 text-sm text-neutral-400">Compare two BGaming approaches to cluster wins.</p></a>
              <a href="/best-cluster-pays-slots/" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400">Cluster-pays shortlist</h3><p className="mt-1 text-sm text-neutral-400">Choose by mechanics, cost and disclosed configuration.</p></a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
