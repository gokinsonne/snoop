import type { Metadata } from "next"
import { CoinWithdrawalPage } from "@/components/coin-withdrawal-page"

export const metadata: Metadata = {
  title: "Dogecoin Casino Withdrawals: Pending, Limits & KYC (2026)",
  description: "Check DOGE casino withdrawal processing, pending status, limits, fees, KYC, transaction hashes and Dogecoin network details before depositing.",
  alternates: { canonical: "/dogecoin-casino-withdrawals/" },
}

export default function Page() {
  return <CoinWithdrawalPage profile={{
    coin: "Dogecoin",
    ticker: "DOGE",
    path: "/dogecoin-casino-withdrawals/",
    title: "Dogecoin casino withdrawals: pending, limits and KYC",
    intro: "A DOGE payout passes through the casino's approval process before it reaches the Dogecoin network. Use the transaction hash to separate an operator delay from network confirmation time.",
    network: "Dogecoin network",
    networkWarning: "Native DOGE and tokens that represent DOGE on another chain are not interchangeable. The withdrawal route selected in the casino must match the receiving wallet's supported Dogecoin network and address format.",
    pendingExplanation: "If the casino has not supplied a Dogecoin transaction hash, the request is normally still in its internal queue. After broadcast, a transaction can remain pending until a miner includes it in a block; the operator or receiving wallet may then require additional confirmations.",
    feeExplanation: "A casino can set its own DOGE minimum, maximum and withdrawal charge. Check whether the displayed fee is deducted from the requested amount and whether the receiving service has a separate minimum credit threshold.",
    officialUrl: "https://dogecoin.com/dogepedia/articles/send-and-receive-dogecoin/",
    officialLabel: "Dogecoin: sending and receiving DOGE",
    officialNote: "Dogecoin's official guide explains that sending requires a destination wallet address and amount. Dogepedia's mining documentation separately explains that a transaction remains pending until a miner includes it in a block. Casino review time is outside that network process.",
    placement: "dogecoin_withdrawal_primary",
  }} />
}
