import type { Metadata } from "next"
import { CryptoGuidePage } from "@/components/crypto-guide-page"

export const metadata: Metadata = {
  title: {
    absolute: "Snoop Dogg Dollars Crypto Casinos: BTC & USDT Guide",
  },
  description: "Find crypto casinos with Snoop Dogg Dollars. Compare BTC and USDT payments, then verify RTP, networks, fees, KYC and bonus terms before depositing.",
  alternates: { canonical: "https://snoopdoggdollar.org/crypto-casinos/snoop-dogg-dollars/" },
  openGraph: {
    title: "Snoop Dogg Dollars Crypto Casinos: BTC & USDT",
    description: "A practical checklist for finding the slot and checking crypto payment terms safely.",
    type: "article",
    url: "https://snoopdoggdollar.org/crypto-casinos/snoop-dogg-dollars/",
  },
}

export default function Page() {
  return <CryptoGuidePage currency="Crypto" title="Snoop Dogg Dollars crypto casinos: BTC and USDT guide" intro="Find the BGaming slot at a crypto-friendly operator, compare Bitcoin and USDT payment tradeoffs, and verify the live terms before sending funds." />
}
