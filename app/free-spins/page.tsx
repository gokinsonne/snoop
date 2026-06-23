import type { Metadata } from "next"
import Script from "next/script"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Free Spins | How to Trigger & Maximize 2025",
  description: "How to trigger free spins on Snoop Dogg Dollars. Scatters, persistent multipliers, retriggers, and tips to maximize your bonus round wins.",
  keywords: [
    "snoop dogg dollars free spins",
    "snoop dogg dollars scatter",
    "snoop dogg dollars bonus round",
    "how to trigger free spins snoop dogg dollars",
    "snoop dogg dollars free spins strategy",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/free-spins",
  },
  openGraph: {
    title: "Snoop Dogg Dollars Free Spins | How to Trigger",
    description: "Complete guide to free spins on Snoop Dogg Dollars. Trigger, retrigger, and maximize wins.",
    type: "article",
    url: "https://snoopdoggdollar.org/free-spins",
    siteName: "Snoop Dogg Dollars",
  },
}

export default function FreeSpinsPage() {
  return (
    <>
      <Script id="schema-freespins" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Trigger Free Spins on Snoop Dogg Dollars",
          description: "Step-by-step guide to triggering and maximizing free spins.",
          step: [
            { "@type": "HowToStep", name: "Land 3+ Scatters", text: "Land 3, 4, 5, or 6 scatters to trigger 10, 12, 15, or 20 free spins." },
            { "@type": "HowToStep", name: "Watch Scatters Transform", text: "Triggering scatters become wilds or x10 multipliers that stay for the entire bonus." },
            { "@type": "HowToStep", name: "Build Multipliers", text: "Multipliers do not reset between spins. Every win on a marked cell increases the multiplier." },
            { "@type": "HowToStep", name: "Retrigger", text: "Land 3+ scatters during free spins to add more spins and more wilds/multipliers." },
          ],
        })}
      </Script>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Free Spins", url: "https://snoopdoggdollar.org/free-spins" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">Free Spins</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Snoop Dogg Dollars Free Spins
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            The money round. How to trigger it, how to maximize it, and why it's where the big wins happen.
          </p>

          <section className="mb-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Free Spins at a Glance</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "3 Scatters", value: "10 Free Spins" },
                { label: "4 Scatters", value: "12 Free Spins" },
                { label: "5 Scatters", value: "15 Free Spins" },
                { label: "6 Scatters", value: "20 Free Spins" },
                { label: "Wild Multiplier", value: "Up to x100" },
                { label: "Cell Multiplier", value: "Up to x10" },
                { label: "Multipliers Reset", value: "No" },
                { label: "Retrigger", value: "Yes" },
                { label: "Best Setup", value: "6 Scatters → 20 FS" },
              ].map((spec) => (
                <div key={spec.label} className="rounded-lg bg-neutral-800/50 p-3">
                  <dt className="text-xs text-neutral-500 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="text-lg font-semibold text-white">{spec.value}</dd>
                </div>
              ))}
            </div>
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>How to Trigger Free Spins</h2>
            <p>Land <strong>3 or more scatter symbols</strong> anywhere on the 6×8 grid. The number of scatters determines the starting free spins:</p>
            <ul>
              <li>3 Scatters = 10 Free Spins</li>
              <li>4 Scatters = 12 Free Spins</li>
              <li>5 Scatters = 15 Free Spins</li>
              <li>6 Scatters = 20 Free Spins</li>
            </ul>

            <h2>What Happens When Free Spins Start</h2>
            <p>The triggering scatters <strong>transform</strong> into either:</p>
            <ul>
              <li><strong>Wild symbols</strong> — Sticky for the entire bonus round</li>
              <li><strong>x10 Cell Multipliers</strong> — Permanent for the entire bonus</li>
            </ul>
            <p>This means you start with 3-6 wilds or multipliers already on the board. In a 20-spin round, these compound with every additional win.</p>

            <h2>Why Free Spins Are the Money Round</h2>
            <p>The key advantage: <strong>multipliers do not reset</strong> between spins. In the base game, marked cells reset after every spin. In free spins, they persist. A cell that starts at x10 can grow to x20, x30, x40+ over the course of the bonus.</p>
            <p>Wild multipliers also persist and can reach x100. A single wild at x100 on a grid with x10 cell multipliers can create massive payouts.</p>

            <h2>Retriggering Free Spins</h2>
            <p>During free spins, landing <strong>3+ scatters again</strong> awards additional free spins (same amounts as the initial trigger). The new scatters also transform into wilds or multipliers. This is how the biggest wins happen — a 20-spin round that retriggers to 35+ spins with 8+ wilds on the board.</p>

            <h2>Tips to Maximize Free Spins</h2>
            <ul>
              <li><strong>Weed Symbol</strong> — When it appears, it upgrades ALL active multipliers by +2. Early Weed = compound growth.</li>
              <li><strong>Skull Symbol</strong> — Removes low-paying symbols, increasing the chance of high-value clusters.</li>
              <li><strong>Retrigger is everything</strong> — A 20-spin round with 1 retrigger is worth far more than 2 separate 10-spin rounds.</li>
              <li><strong>800x Bonus Buy</strong> — All scatters become wilds. Highest potential setup for free spins.</li>
            </ul>
          </article>

          <section className="mt-16 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Play Snoop Dogg Dollars at 1WIN</h2>
            <p className="text-neutral-400 mb-6">200% bonus + 100 free spins. Verified 97% RTP.</p>
            <a href="https://lkhv.pro/581ee4" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors">Play at 1WIN →</a>
          </section>
        </div>
      </main>
    </>
  )
}
