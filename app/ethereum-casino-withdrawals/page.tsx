import type { Metadata } from "next"
import { CoinWithdrawalPage } from "@/components/coin-withdrawal-page"

export const metadata: Metadata = {
  title: "Ethereum Casino Withdrawals: Pending, Fees & KYC (2026)",
  description: "Check ETH casino withdrawal processing, pending status, gas and operator fees, limits, KYC, transaction hashes and exact Ethereum network support.",
  alternates: { canonical: "/ethereum-casino-withdrawals/" },
}

export default function Page() {
  return <CoinWithdrawalPage profile={{
    coin: "Ethereum",
    ticker: "ETH",
    path: "/ethereum-casino-withdrawals/",
    title: "Ethereum casino withdrawals: pending, fees and KYC",
    intro: "An ETH withdrawal is not on-chain until the casino broadcasts a transaction. Check the request status and transaction hash before blaming Ethereum congestion or changing wallet settings.",
    network: "Exact ETH network",
    networkWarning: "ETH can appear on Ethereum mainnet and other supported routes. An address format alone does not prove that the network matches. Select the same named network in the casino and receiving platform, including any supported layer-2 route.",
    pendingExplanation: "Before a hash exists, the casino may still be reviewing KYC, wagering, limits or the destination. Once broadcast, Ethereum places the transaction in a pool until a validator includes it; the block then progresses through stronger confirmation states.",
    feeExplanation: "Separate the operator's stated withdrawal fee from Ethereum network costs and any receiving-platform minimum. The casino controls the amount it broadcasts and may use a fee policy that differs from a transfer initiated from your own wallet.",
    officialUrl: "https://ethereum.org/developers/docs/transactions/",
    officialLabel: "Ethereum.org transaction lifecycle",
    officialNote: "Ethereum.org documents that a submitted transaction is broadcast, enters a transaction pool and must be included in a validated block before progressing toward finality. The casino's approval queue happens before that protocol lifecycle.",
    placement: "ethereum_withdrawal_primary",
  }} />
}
