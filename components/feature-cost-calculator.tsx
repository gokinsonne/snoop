"use client"

import { useMemo, useState } from "react"

const modes = [
  ["Snoop Spin", 20],
  ["Standard feature buy", 100],
  ["Feature buy + 1 Wild", 200],
  ["Feature buy + 2 Wilds", 400],
  ["Highest feature tier", 800],
] as const

export function FeatureCostCalculator() {
  const [stake, setStake] = useState("0.20")
  const value = Math.max(0, Number(stake) || 0)
  const rows = useMemo(() => modes.map(([name, multiple]) => ({ name, multiple, cost: value * multiple })), [value])

  return (
    <section className="rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-6 sm:p-8">
      <h2 className="text-2xl font-black">Feature cost calculator</h2>
      <p className="mt-3 max-w-2xl text-neutral-300">Enter the base stake shown in the game. The calculator converts each advertised multiplier into an exact cash cost.</p>
      <label className="mt-6 block max-w-xs text-sm font-bold" htmlFor="stake">Base stake</label>
      <input id="stake" inputMode="decimal" min="0" step="0.01" value={stake} onChange={(event) => setStake(event.target.value)} className="mt-2 w-full max-w-xs rounded-xl border border-white/15 bg-black px-4 py-3 text-lg" />
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-left text-sm"><thead className="bg-black/40"><tr><th className="p-3">Mode</th><th className="p-3">Multiple</th><th className="p-3">Cost</th></tr></thead><tbody className="divide-y divide-white/10">{rows.map((row) => <tr key={row.name}><td className="p-3">{row.name}</td><td className="p-3">{row.multiple}×</td><td className="p-3 font-black text-emerald-300">{row.cost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td></tr>)}</tbody></table>
      </div>
      <p className="mt-4 text-xs leading-5 text-neutral-400">This is arithmetic, not a winning system. Buying a feature changes the price and entry point; it does not make a positive expected return or predict the outcome.</p>
    </section>
  )
}
