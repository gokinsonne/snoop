import type { Metadata } from "next"
import { CryptoGuidePage } from "@/components/crypto-guide-page"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Crypto Casinos (2026)",
  description: "How to find a crypto casino with Snoop Dogg Dollars, verify RTP, payment networks, bonus rules and regional availability.",
  alternates: { canonical: "https://snoopdoggdollar.org/crypto-casinos/snoop-dogg-dollars/" },
}

export default function Page() {
  return <CryptoGuidePage currency="Crypto" title="Snoop Dogg Dollars crypto casinos" intro="A practical guide to finding the BGaming slot at a crypto-friendly operator without confusing fast payments with trustworthy terms." />
}
