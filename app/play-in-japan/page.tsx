import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "スヌープ・ドッグ・ダラーズ | 日本語デモ・RTP確認ガイド",
  description: "スヌープ・ドッグ・ダラーズの日本語確認ガイド。無料デモ、公式RTP、ゲーム仕様、運営会社・入出金・地域制限の確認方法。",
  robots: "index, follow",
  alternates: { canonical: "https://snoopdoggdollar.org/play-in-japan/" },
  openGraph: { title: "スヌープ・ドッグ・ダラーズ | 日本語確認ガイド", description: "無料デモと、RTP・運営会社・地域制限・入出金条件の確認方法。", type: "article", url: "https://snoopdoggdollar.org/play-in-japan/", siteName: "Snoop Dogg Dollars", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "スヌープ・ドッグ・ダラーズ日本語ガイド" }] },
}

export default function PlayInJapanPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "スヌープ・ドッグ・ダラーズ日本語確認ガイド", dateModified: "2026-08-22", inLanguage: "ja" }} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://snoopdoggdollar.org/" }, { name: "日本語ガイド", url: "https://snoopdoggdollar.org/play-in-japan/" }]} />
      <main lang="ja" className="min-h-screen bg-black text-neutral-100">
        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="パンくずリスト" className="mb-8 text-sm text-neutral-400"><Link href="/">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">日本語ガイド</span></nav>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">スヌープ・ドッグ・ダラーズ</h1>
          <p className="mt-5 text-xl leading-8 text-neutral-400">BGaming公式情報と、デモ・運営会社・地域制限・入出金条件を自分で確認するための日本語ガイドです。</p>
          <section className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3" aria-label="ゲーム基本情報">
            {[["開発会社", "BGaming"], ["公式RTP", "96.00%"], ["ボラティリティ", "非常に高い"], ["最大倍率", "10,000倍"], ["グリッド", "6×8"], ["発売日", "2024年10月30日"]].map(([label, value]) => <div key={label} className="rounded-xl bg-neutral-900 p-4"><dt className="text-xs text-neutral-500">{label}</dt><dd className="mt-1 font-bold text-white">{value}</dd></div>)}
          </section>
          <div className="prose prose-invert prose-lg mt-12 max-w-none">
            <h2>公式情報</h2><p>BGamingの公開ページではRTP 96.00%、最大倍率10,000倍、非常に高いボラティリティと記載されています。運営会社ごとに設定が異なる場合があるため、実際のゲーム内情報画面も確認してください。</p><p><a href="https://bgaming.com/games/snoop-dogg-dollars" target="_blank" rel="noopener noreferrer">BGaming公式ゲームページ</a>（2026年8月22日確認）</p>
            <h2>日本から利用する前の確認</h2><p>サイトが日本語表示に対応していても、日本からの利用やオンライン賭博の適法性を保証するものではありません。現在地の法令、運営会社の法人名、ライセンス登録、利用規約、本人確認、出金条件を確認してください。</p>
            <h2>入出金の注意</h2><p>カード、暗号資産、電子ウォレットの表示は国・口座・決済会社によって変わります。「即時出金」や固定ボーナスを保証せず、ログイン後のキャッシャーと規約を一次情報として確認してください。</p>
            <h2>無料デモ</h2><p><Link href="/demo/">無料デモ</Link>では仮想クレジットで基本メカニクスを確認できます。デモ結果は将来の結果や利益を予測しません。</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3"><Link href="/casinos/" className="rounded-full border border-neutral-700 px-5 py-3">運営会社の確認項目</Link><Link href="/responsible-gaming/" className="rounded-full border border-neutral-700 px-5 py-3">責任あるプレイ</Link></div>
        </article>
      </main>
    </>
  )
}
