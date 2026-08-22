"use client"

import { useState } from "react"

const DEMO_URL = "https://bgaming-network.com/play/SnoopDoggDollars/FUN?server=demo"

export function DemoGameFrame() {
  const [started, setStarted] = useState(false)

  function startDemo() {
    setStarted(true)
    window.dataLayer?.push({ event: "demo_start", game: "snoop_dogg_dollars" })
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-700 bg-black">
      {started ? (
        <iframe
          className="h-full w-full"
          src={DEMO_URL}
          allow="fullscreen"
          allowFullScreen
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Snoop Dogg Dollars free demo game"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,197,94,.18),transparent_55%)] p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-green-400">Free demo</p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Load the game when you are ready</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">
            The provider game is loaded only after you click, saving bandwidth and avoiding a slow third-party request on the initial page view.
          </p>
          <button
            type="button"
            onClick={startDemo}
            className="mt-6 rounded-full bg-green-400 px-7 py-3 font-black text-black transition-colors hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            Start free demo
          </button>
        </div>
      )}
    </div>
  )
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}
