import type { Metadata } from "next"
import { CryptoGuidePage } from "@/components/crypto-guide-page"

export const metadata: Metadata = {
  title: "Play Snoop Dogg Dollars with Bitcoin (2026)",
  description: "Check how Bitcoin casino deposits work for Snoop Dogg Dollars, including networks, confirmations, RTP and withdrawal terms.",
  alternates: { canonical: "https://snoopdoggdollar.org/bitcoin-casinos/snoop-dogg-dollars/" },
}

export default function Page() {
  return <CryptoGuidePage currency="Bitcoin" title="Play Snoop Dogg Dollars with Bitcoin" intro="What to verify before using BTC at a casino that offers BGaming's Snoop Dogg Dollars slot." />
}
