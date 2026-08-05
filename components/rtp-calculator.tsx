"use client"

import { useState } from "react"

export function RtpCalculator() {
  const [wagered, setWagered] = useState("1000")
  const amount = Math.max(0, Number(wagered) || 0)
  return (
    <section className="rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-6 sm:p-8">
      <h2 className="text-2xl font-black">RTP difference calculator</h2>
      <p className="mt-3 text-neutral-300">Compare the theoretical long-run cost of the listed 97%, 96% and 94% configurations.</p>
      <label className="mt-6 block text-sm font-bold" htmlFor="wagered">Total amount wagered</label>
      <input id="wagered" inputMode="decimal" min="0" step="10" value={wagered} onChange={(event) => setWagered(event.target.value)} className="mt-2 w-full max-w-xs rounded-xl border border-white/15 bg-black px-4 py-3 text-lg" />
      <div className="mt-6 grid gap-3 sm:grid-cols-3">{[97, 96, 94].map((rtp) => <div key={rtp} className="rounded-xl border border-white/10 bg-black/30 p-4"><p className="text-sm text-neutral-400">{rtp}% RTP</p><p className="mt-1 text-xl font-black">{(amount * (1 - rtp / 100)).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p><p className="text-xs text-neutral-500">theoretical house edge</p></div>)}</div>
      <p className="mt-4 text-xs leading-5 text-neutral-400">RTP is measured across a very large number of plays. These figures do not forecast one session, and a higher RTP does not remove volatility.</p>
    </section>
  )
}
