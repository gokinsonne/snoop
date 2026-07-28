import type { Metadata } from "next"
import Script from "next/script"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "スヌープ・ドッグ・ダラーズ | 日本語ガイド & デモプレイ 2026",
  description: "スヌープ・ドッグ・ダラーズを日本語でプレイ。無料デモ、レビュー、攻略法。1WINで200%ボーナス + 100フリースピン。97% RTP。",
  keywords: [
    "スヌープ・ドッグ・ダラーズ",
    "snoop dogg dollars 日本語",
    "snoop dogg dollars 日本",
    "スヌープ・ドッグ スロット",
    "オンラインカジノ 日本語",
    "1WIN 日本語",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/play-in-japan",
  },
  openGraph: {
    title: "スヌープ・ドッグ・ダラーズ | 日本語ガイド",
    description: "スヌープ・ドッグ・ダラーズを日本語でプレイ。無料デモ、攻略法、1WINボーナス。",
    type: "article",
    url: "https://snoopdoggdollar.org/play-in-japan",
    siteName: "Snoop Dogg Dollars",
  },
}

export default function PlayInJapanPage() {
  return (
    <>
      <Script id="schema-japan" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "スヌープ・ドッグ・ダラーズ | 日本語ガイド & デモプレイ",
          description: "スヌープ・ドッグ・ダラーズの日本語ガイド。無料デモ、攻略法、ボーナス。",
          author: { "@type": "Organization", name: "Snoop Dogg Dollars" },
          datePublished: "2026-06-22",
        })}
      </Script>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Play in Japan", url: "https://snoopdoggdollar.org/play-in-japan" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">日本語ガイド</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            スヌープ・ドッグ・ダラーズ
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            ヒップホップのレジェンド、スヌープ・ドッグとBGamingがコラボしたクラスターペイ型スロット。97% RTP、10,000倍の最大配当。
          </p>

          <section className="mb-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">ゲームの基本情報</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "プロバイダー", value: "BGaming" },
                { label: "RTP", value: "97.00%" },
                { label: "ボラティリティ", value: "非常に高い" },
                { label: "最大配当", value: "10,000倍" },
                { label: "最低ベット", value: "$0.25" },
                { label: "グリッド", value: "6×8" },
                { label: "ペイシステム", value: "クラスターペイ" },
                { label: "フリースピン", value: "あり" },
                { label: "ボーナスバイ", value: "100x–800x" },
              ].map((spec) => (
                <div key={spec.label} className="rounded-lg bg-neutral-800/50 p-3">
                  <dt className="text-xs text-neutral-500 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="text-lg font-semibold text-white">{spec.value}</dd>
                </div>
              ))}
            </div>
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>スヌープ・ドッグ・ダラーズとは？</h2>
            <p>スヌープ・ドッグ・ダラーズは、BGamingが2024年10月にリリースした、スヌープ・ドッグとの初のコラボレーションスロットです。6×8のグリッドでクラスターペイ（5つ以上の同じシンボルが縦横に繋がると配当）という珍しい仕様で、最大10,000倍の配当が可能です。</p>
            <p>スヌープ・ドッグ本人のボイスオーバーが入っており、ヒップホップのビートに乗りながらプレイできるのが最大の魅力。RTP97%は、ブランドスロットとしては異例の高さです。</p>

            <h2>日本語対応カジノ</h2>
            <p>1WINは日本語サポートに対応しており、日本人プレイヤーがスヌープ・ドッグ・ダラーズをプレイするのに最適です。入出金は以下の方法が利用可能：</p>
            <ul>
              <li><strong>ビットコイン / イーサリアム</strong> — 入金即時、出金1時間以内</li>
              <li><strong>Visa / Mastercard</strong> — 国際カード対応</li>
              <li><strong>ecoPayz</strong> — 電子ウォレット</li>
            </ul>

            <h2>無料デモプレイ</h2>
            <p>登録なしで無料デモがプレイできます。実際のお金を使わずに、ゲームの仕組みやボラティリティを体験できます。デモでもボーナスバイやスヌープスピンなど全機能が使用可能です。</p>

            <h2>ボーナス</h2>
            <p>1WINでは初回入金で<strong>200%ボーナス</strong>（最大$500相当）+ <strong>100フリースピン</strong>がもらえます。最低入金額は約100円（$1）から。日本円での表示にも対応しています。</p>
          </article>

          <section className="mt-16 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">1WINでプレイする</h2>
            <p className="text-neutral-400 mb-6">200%ボーナス + 100フリースピン。日本語対応。</p>
            <a href="https://lkhv.pro/581ee4" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors">1WINでプレイ →</a>
          </section>
        </div>
      </main>
    </>
  )
}
