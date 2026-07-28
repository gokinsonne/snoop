import type { Metadata } from "next"
import { SlotFeatureGuide } from "@/components/slot-feature-guide"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Bonus Buy: 100x–800x Explained (2026)",
  description: "Compare all four Snoop Dogg Dollars Bonus Buy levels, their costs, added Wilds, volatility and jurisdiction restrictions.",
  alternates: { canonical: "/bonus-buy/" },
}

export default function BonusBuyPage() {
  return <SlotFeatureGuide
    eyebrow="Feature guide"
    title="Snoop Dogg Dollars Bonus Buy: every 100x–800x option explained"
    intro="The Bonus Buy menu skips the base-game wait and opens a free-spins round for a fixed multiple of the stake. Paying more changes the starting setup, not the mathematical fact that every result remains random."
    facts={[["Entry levels", "4"], ["Cost", "100×–800×"], ["Feature", "Free spins"], ["Availability", "Jurisdiction-based"]]}
    sections={[
      { title: "The four purchase levels", paragraphs: ["The standard 100× option buys the regular feature. The 200× and 400× levels begin with one or two additional Wilds. At 800×, the triggering Scatter positions convert to Wilds. These enhanced setups create more ways for clusters and multipliers to interact, but they also require a dramatically larger upfront stake."], bullets: ["100×: standard free-spins setup", "200×: starts with one added Wild", "400×: starts with two added Wilds", "800×: triggering Scatters become Wilds"] },
      { title: "Cost is not a guarantee", paragraphs: ["An 800× purchase can still return less than its cost. A stronger initial board increases feature potential but does not create a guaranteed profit or a predictable result. The published maximum win remains a theoretical ceiling.", "Compare a buy with the same bankroll logic as hundreds of normal spins. If losing the full purchase price would materially affect you, the correct stake is lower—or no purchase at all."] },
      { title: "RTP and regional restrictions", paragraphs: ["Bonus Buy availability depends on the casino, game configuration and local rules. Some regulated markets disable feature purchases entirely. Check the in-game information panel for the RTP shown in your session instead of assuming every operator uses the default setting.", "A casino promotion may also exclude Bonus Buy wagers from wagering contribution or impose a maximum bet. Read the live terms before combining a promotion with a feature purchase."] },
    ]}
    related={[["/free-spins/", "Free spins"], ["/rtp/", "RTP explained"], ["/strategy/", "Risk guide"], ["/demo/", "Free demo"]]}
  />
}
