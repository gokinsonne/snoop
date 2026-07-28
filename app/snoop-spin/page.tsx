import type { Metadata } from "next"
import { SlotFeatureGuide } from "@/components/slot-feature-guide"

export const metadata: Metadata = {
  title: "Snoop Spin in Snoop Dogg Dollars: Cost & Mechanics (2026)",
  description: "Learn how the 20x Snoop Spin works in Snoop Dogg Dollars, what it guarantees, what remains random and when the feature is available.",
  alternates: { canonical: "/snoop-spin/" },
}

export default function SnoopSpinPage() {
  return <SlotFeatureGuide
    eyebrow="Mechanics explained"
    title="Snoop Spin: what the 20x feature actually changes"
    intro="Snoop Spin is an enhanced paid spin costing 20 times the selected base bet. It guarantees special-symbol activity, but it does not guarantee a winning cluster, a bonus round or a profitable return."
    facts={[["Cost", "20× base bet"], ["Guarantee", "Special symbols"], ["Bonus guaranteed?", "No"], ["Outcome", "Random"]]}
    sections={[
      { title: "How Snoop Spin works", paragraphs: ["After choosing the stake, activating Snoop Spin charges 20× that amount for one enhanced outcome. The feature guarantees that bonus symbols are dug up on the board. Those symbols can be Wilds, multipliers or Scatters depending on the random result.", "The guarantee applies to the appearance of special symbols—not to their position or their ability to complete a paying cluster. That distinction is important when comparing the feature with a direct Bonus Buy."] },
      { title: "Snoop Spin versus a normal spin", paragraphs: ["A normal spin costs one unit and may produce no dug-up special symbol. Snoop Spin concentrates twenty units into a single enhanced attempt. It therefore produces faster swings in the balance even though its visual action is more frequent.", "The feature is best understood as a volatility choice, not a strategy for beating the RTP. Changing how quickly risk is concentrated does not make future outcomes predictable."] },
      { title: "Snoop Spin versus Bonus Buy", paragraphs: ["Snoop Spin does not directly open free spins. The 100×–800× Bonus Buy options do. Five Snoop Spins cost the same total stake as one standard 100× purchase, but their possible paths and outcomes are different.", "Use the demo and paytable to understand both controls before real-money play. Operators may disable either feature in restricted jurisdictions."] },
    ]}
    related={[["/bonus-buy/", "Bonus Buy"], ["/how-to-play/", "How to play"], ["/strategy/", "Risk guide"], ["/demo/", "Free demo"]]}
  />
}
