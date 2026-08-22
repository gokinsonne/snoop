import type { Metadata } from "next"
import { CryptoGuidePage } from "@/components/crypto-guide-page"

export const metadata: Metadata = {
  title: "USDT Casinos for Snoop Dogg Dollars | Payment Guide",
  description: "A USDT casino guide for Snoop Dogg Dollars: supported networks, fees, RTP, bonuses and withdrawal checks.",
  alternates: { canonical: "https://snoopdoggdollar.org/usdt-casinos/snoop-dogg-dollars/" },
}

export default function Page() {
  return <CryptoGuidePage currency="USDT" title="USDT casinos for Snoop Dogg Dollars: network and payment checks" intro="How to avoid network mistakes and verify the real casino terms before funding a Snoop Dogg Dollars session with a stablecoin." />
}
