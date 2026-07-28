import type { Metadata } from "next"
import Script from "next/script"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Mobile | Play on Android & iOS 2026",
  description:
    "Play Snoop Dogg Dollars on mobile. Android APK, iOS browser, HTML5 optimized. Same 97% RTP, all features. Best mobile casinos with fast payouts.",
  keywords: [
    "snoop dogg dollars mobile",
    "snoop dogg dollars android",
    "snoop dogg dollars ios",
    "snoop dogg dollars app",
    "play snoop dogg dollars on phone",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/mobile",
  },
  openGraph: {
    title: "Snoop Dogg Dollars Mobile | Android & iOS",
    description: "Play Snoop Dogg Dollars on mobile. HTML5 optimized, all features, same 97% RTP.",
    type: "article",
    url: "https://snoopdoggdollar.org/mobile",
    siteName: "Snoop Dogg Dollars",
  },
}

export default function MobilePage() {
  return (
    <>
      <Script id="schema-mobile" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Snoop Dogg Dollars Mobile | Play on Android & iOS 2026",
          description: "Complete guide to playing Snoop Dogg Dollars on mobile devices. Android, iOS, and HTML5.",
          image: "https://snoopdoggdollar.org/og-image.jpg",
          author: { "@type": "Organization", name: "Snoop Dogg Dollars", url: "https://snoopdoggdollar.org" },
          publisher: { "@type": "Organization", name: "Snoop Dogg Dollars", logo: { "@type": "ImageObject", url: "https://snoopdoggdollar.org/favicon.ico" } },
          datePublished: "2026-06-22",
          dateModified: "2026-06-22",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://snoopdoggdollar.org/mobile" },
        })}
      </Script>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Mobile", url: "https://snoopdoggdollar.org/mobile" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">Mobile</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Snoop Dogg Dollars on Mobile
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            Play Snoop Dogg Dollars anywhere. HTML5-optimized for Android and iOS. Same 97% RTP, all features, no app download needed.
          </p>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Mobile Compatibility</h2>
            <p>
              Snoop Dogg Dollars is built on <strong>HTML5</strong> and runs directly in your mobile browser. No download, no app store, no installation. Just open your casino, find the game, and spin.
            </p>
            <p>
              The game adapts to any screen size from 4-inch phones to tablets. The 6×8 grid is optimized for touch controls — tap to spin, swipe to browse the paytable, and pinch to zoom on the cascading symbols.
            </p>

            <h2>Android</h2>
            <p>
              On Android, you have two options:
            </p>
            <ul>
              <li><strong>Browser play</strong> — Chrome, Firefox, or Samsung Browser. Works on any Android 5.0+ device. Just log into your casino and launch the game.</li>
              <li><strong>Casino app</strong> — Some casinos offer Android APK downloads. These often include push notifications for bonuses and faster loading times.</li>
            </ul>
            <p>
              <strong>Recommended browsers:</strong> Chrome 90+, Firefox 88+, Samsung Browser 14+. Enable "Desktop site" mode if the game doesn't load properly — though it should work natively.
            </p>

            <h2>iOS (iPhone & iPad)</h2>
            <p>
              iOS users can play directly in Safari or Chrome. The game is tested on iOS 14+ and works flawlessly on iPhone 8 and newer, including all iPad models.
            </p>
            <ul>
              <li><strong>Safari</strong> — Best performance on iOS. Add the casino to your home screen for app-like experience.</li>
              <li><strong>Chrome for iOS</strong> — Works well, but Safari has slightly better WebGL performance for the animations.</li>
            </ul>
            <p>
              <strong>Tip:</strong> Add the casino to your home screen (Share → Add to Home Screen). It creates an app icon and launches in full-screen mode, hiding the browser chrome for an immersive experience.
            </p>

            <h2>Mobile Features</h2>
            <p>
              Every desktop feature is available on mobile:
            </p>
            <ul>
              <li>Full 6×8 cluster pays grid</li>
              <li>Multiplier Area system (x2 to x10)</li>
              <li>Wild, Weed, Skull, and Scatter bonus symbols</li>
              <li>Free spins with persistent multipliers</li>
              <li>Snoop Spin (20x bet)</li>
              <li>Bonus Buy (100x, 200x, 400x, 800x)</li>
              <li>Quick spin and turbo mode</li>
              <li>Autoplay with loss/win limits</li>
            </ul>

            <h2>Mobile Performance Tips</h2>
            <ul>
              <li><strong>Use Wi-Fi</strong> — The game streams high-quality audio (Snoop Dogg's voiceovers) and animations. A stable connection prevents lag during cascades.</li>
              <li><strong>Close background apps</strong> — Free up RAM for smooth animations. 2GB+ free RAM is recommended.</li>
              <li><strong>Enable battery saver</strong> — The game is optimized, but very long sessions can drain battery. Bring a charger for extended play.</li>
              <li><strong>Portrait vs Landscape</strong> — Landscape mode gives the best view of the 6×8 grid. Portrait works but the grid is compressed.</li>
            </ul>

            <h2>Mobile vs Desktop</h2>
            <div className="my-8 overflow-x-auto rounded-xl border border-neutral-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-900 text-neutral-300">
                  <tr><th className="px-4 py-3">Feature</th><th className="px-4 py-3">Mobile</th><th className="px-4 py-3">Desktop</th></tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr className="hover:bg-neutral-900/50"><td className="px-4 py-3 font-medium text-white">RTP</td><td className="px-4 py-3 text-green-400">97%</td><td className="px-4 py-3 text-green-400">97%</td></tr>
                  <tr className="hover:bg-neutral-900/50"><td className="px-4 py-3 font-medium text-white">Max Win</td><td className="px-4 py-3 text-green-400">10,000x</td><td className="px-4 py-3 text-green-400">10,000x</td></tr>
                  <tr className="hover:bg-neutral-900/50"><td className="px-4 py-3 font-medium text-white">Bonus Features</td><td className="px-4 py-3 text-green-400">All</td><td className="px-4 py-3 text-green-400">All</td></tr>
                  <tr className="hover:bg-neutral-900/50"><td className="px-4 py-3 font-medium text-white">Screen Size</td><td className="px-4 py-3 text-yellow-400">4-12 inches</td><td className="px-4 py-3 text-green-400">13+ inches</td></tr>
                  <tr className="hover:bg-neutral-900/50"><td className="px-4 py-3 font-medium text-white">Controls</td><td className="px-4 py-3 text-yellow-400">Touch</td><td className="px-4 py-3 text-green-400">Mouse/Keyboard</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <section className="mt-16 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Play on Mobile Now</h2>
            <p className="text-neutral-400 mb-6 max-w-xl mx-auto">Join 1WIN and play Snoop Dogg Dollars on any device. current welcome offer. No app download required.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://lkhv.pro/581ee4" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors">Play at 1WIN →</a>
              <a href="/demo" className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-colors">Try Demo</a>
            </div>
            <p className="mt-4 text-xs text-neutral-500">18+ | Gamble Responsibly | T&Cs Apply</p>
          </section>

          <section className="mt-16">
            <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="/review" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Full Slot Review</h3><p className="mt-1 text-sm text-neutral-400">In-depth review of RTP, features, and max win potential.</p></a>
              <a href="/how-to-play" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">How to Play</h3><p className="mt-1 text-sm text-neutral-400">Step-by-step beginner's guide to cluster pays and bonuses.</p></a>
              <a href="/strategy" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Winning Strategy</h3><p className="mt-1 text-sm text-neutral-400">Bankroll management, Snoop Spin timing, and Bonus Buy tips.</p></a>
              <a href="/casinos" className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors"><h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">Where to Play</h3><p className="mt-1 text-sm text-neutral-400">Best casinos offering Snoop Dogg Dollars with current operator terms.</p></a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
