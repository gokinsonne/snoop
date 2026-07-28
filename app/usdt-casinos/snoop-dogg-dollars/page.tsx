import type { Metadata } from "next"
import { CryptoGuidePage } from "@/components/crypto-guide-page"

export const metadata: Metadata = {
  title: "Play Snoop Dogg Dollars with USDT (2026)",
  description: "A USDT casino guide for Snoop Dogg Dollars: supported networks, fees, RTP, bonuses and withdrawal checks.",
  alternates: { canonical: "https://snoopdoggdollar.org/usdt-casinos/snoop-dogg-dollars/" },
}

export default function Page() {
  return <CryptoGuidePage currency="USDT" title="Play Snoop Dogg Dollars with USDT" intro="How to avoid network mistakes and verify the real casino terms before funding a Snoop Dogg Dollars session with a stablecoin." />
}
