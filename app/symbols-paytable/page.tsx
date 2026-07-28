import type { Metadata } from "next"
import { SlotFeatureGuide } from "@/components/slot-feature-guide"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Symbols & Paytable Guide (2026)",
  description: "A practical guide to Snoop Dogg Dollars symbols, cluster payouts, Wilds, Scatters, multipliers and why the live paytable matters.",
  alternates: { canonical: "/symbols-paytable/" },
}

export default function SymbolsPaytablePage() {
  return <SlotFeatureGuide
    eyebrow="Paytable guide"
    title="Snoop Dogg Dollars symbols, clusters and special icons"
    intro="Snoop Dogg Dollars uses Cluster Pays on a 6×8 grid. Wins come from groups of matching symbols touching horizontally or vertically, so there are no traditional paylines to count."
    facts={[["Grid", "6×8"], ["Mechanic", "Cluster Pays"], ["Minimum cluster", "5 symbols"], ["Top cap", "10,000×"]]}
    sections={[
      { title: "Regular paying symbols", paragraphs: ["The regular set mixes lower-value card-style icons with higher-value themed symbols. A cluster normally needs at least five matching symbols connected on adjacent horizontal or vertical cells. Diagonal contact alone does not join a cluster.", "Larger clusters pay more than smaller ones. Exact values depend on the selected stake and are displayed in the live in-game paytable. Always treat that screen as authoritative because configurations and currency presentation can vary."] },
      { title: "Wild, Scatter and multiplier symbols", paragraphs: ["Wilds substitute for regular paying symbols and can help connect a cluster. Scatter symbols are linked to the free-spins trigger: three, four, five or six Scatters award 10, 12, 15 or 20 spins.", "Multiplier cells can increase a qualifying win that passes through their position. During free spins, persistent special positions can create much larger combinations across later cascades, but their locations and results remain random."], bullets: ["Wild: substitutes for regular symbols", "Scatter: triggers free spins", "Multiplier: boosts qualifying cluster wins", "Cascades: remove winners and refill the grid"] },
      { title: "Why the paytable must be checked live", paragraphs: ["Marketing pages summarize mechanics, but the game client contains the operative payout table, bet limits, feature costs and RTP information for that session. Open the information menu before wagering.", "Do not infer a likely result from the maximum win or a promotional screenshot. The 10,000× figure is a cap, while short-session outcomes can be far above or below the long-term theoretical RTP."] },
    ]}
    related={[["/how-to-play/", "How to play"], ["/free-spins/", "Free spins"], ["/rtp/", "RTP explained"], ["/max-win/", "Max win"]]}
  />
}
