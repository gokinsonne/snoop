import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { JsonLd } from "@/components/json-ld"
import { ArticleSchema } from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Feature Cost Dataset & Research",
  description: "Original cost-normalization dataset for Snoop Spin, four Bonus Buy levels and the theoretical 10,000x cap across representative stakes.",
  alternates: { canonical: "/research/snoop-dogg-dollars-feature-costs/" },
}

const rows = [
  ["$0.25", "$5", "$25", "$50", "$100", "$200", "$2,500"],
  ["$1", "$20", "$100", "$200", "$400", "$800", "$10,000"],
  ["$5", "$100", "$500", "$1,000", "$2,000", "$4,000", "$50,000"],
  ["$25", "$500", "$2,500", "$5,000", "$10,000", "$20,000", "$250,000"],
]

export default function ResearchPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Snoop Dogg Dollars feature-cost normalization dataset",
    alternateName: "Snoop Dogg Dollars Feature Cost Dataset",
    description:
      "An open, deterministic dataset that converts the documented 20x Snoop Spin, 100x to 800x Bonus Buy prices and theoretical 10,000x maximum into absolute costs across representative base bets.",
    url: "https://snoopdoggdollar.org/research/snoop-dogg-dollars-feature-costs/",
    sameAs: "https://github.com/gokinsonne/snoop",
    identifier: "https://snoopdoggdollar.org/research/snoop-dogg-dollars-feature-costs/",
    creator: {
      "@type": "Organization",
      name: "Snoop Dogg Dollars Data Lab",
      url: "https://snoopdoggdollar.org/research/snoop-dogg-dollars-feature-costs/",
    },
    publisher: {
      "@type": "Organization",
      name: "Snoop Dogg Dollars",
      url: "https://snoopdoggdollar.org/",
    },
    datePublished: "2026-08-24",
    dateModified: "2026-08-26",
    version: "1.0",
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    keywords: [
      "Snoop Dogg Dollars",
      "BGaming",
      "feature cost",
      "Bonus Buy",
      "Snoop Spin",
      "slot dataset",
    ],
    variableMeasured: [
      "Base bet",
      "Snoop Spin cost",
      "Bonus Buy cost",
      "Theoretical maximum win",
    ],
    measurementTechnique:
      "Deterministic multiplication of each representative base bet by the documented feature-cost multiplier.",
    isBasedOn: "https://bgaming.com/games/snoop-dogg-dollars",
    distribution: [
      {
        "@type": "DataDownload",
        name: "Snoop Dogg Dollars feature costs in CSV format",
        encodingFormat: "text/csv",
        contentUrl: "https://snoopdoggdollar.org/data/snoop-dogg-dollars-feature-costs.csv",
        license: "https://creativecommons.org/licenses/by/4.0/",
      },
      {
        "@type": "DataDownload",
        name: "Snoop Dogg Dollars feature costs in JSON format",
        encodingFormat: "application/json",
        contentUrl: "https://snoopdoggdollar.org/data/snoop-dogg-dollars-feature-costs.json",
        license: "https://creativecommons.org/licenses/by/4.0/",
      },
    ],
  }

  return (
    <>
      <JsonLd data={datasetSchema} />
      <ArticleSchema
        path="/research/snoop-dogg-dollars-feature-costs/"
        title="Snoop Dogg Dollars feature costs normalized by stake"
        description="Original cost-normalization research for Snoop Spin, four Bonus Buy levels and the theoretical 10,000x cap."
        section="Original research"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Feature cost research", url: "https://snoopdoggdollar.org/research/snoop-dogg-dollars-feature-costs/" },
      ]} />
      <main className="bg-[#080b09] text-neutral-100">
      <article className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <p className="text-sm font-black uppercase tracking-[.2em] text-emerald-400">Open research · CC BY 4.0</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight sm:text-6xl">
          Snoop Dogg Dollars feature costs normalized by stake
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          This dataset converts the game&apos;s 20× Snoop Spin and 100×–800× Bonus Buy
          prices into actual stake-denominated costs. It is deterministic arithmetic—not a
          prediction, strategy or simulation of wins.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/data/snoop-dogg-dollars-feature-costs.csv" download className="rounded-full bg-emerald-400 px-5 py-3 font-black text-black">Download CSV</a>
          <a href="/data/snoop-dogg-dollars-feature-costs.json" download className="rounded-full border border-white/20 px-5 py-3 font-black">Download JSON</a>
          <a href="https://github.com/gokinsonne/snoop" rel="noopener" className="rounded-full border border-white/20 px-5 py-3 font-black">GitHub dataset</a>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-emerald-400/15 text-emerald-200">
              <tr>{["Base bet","Snoop Spin 20×","Buy 100×","Buy 200×","Buy 400×","Buy 800×","10,000× cap"].map(h => <th key={h} className="px-4 py-4">{h}</th>)}</tr>
            </thead>
            <tbody>{rows.map(row => <tr key={row[0]} className="border-t border-white/10">{row.map((v,i) => <td key={i} className="px-4 py-4 font-semibold text-neutral-300">{v}</td>)}</tr>)}</tbody>
          </table>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
            <h2 className="text-2xl font-black">Key derived result</h2>
            <p className="mt-3 leading-7 text-neutral-300">A 100× Bonus Buy costs the same stake as five Snoop Spins. The 200×, 400× and 800× options equal 10, 20 and 40 Snoop Spins respectively. Equal cost does not mean equal probability distribution or expected session outcome.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
            <h2 className="text-2xl font-black">Why normalization matters</h2>
            <p className="mt-3 leading-7 text-neutral-300">Feature labels hide the absolute balance exposure. At a $1 base bet, the four purchases cost $100–$800; at $25 they cost $2,500–$20,000. The table makes that scaling visible without implying that a feature is profitable.</p>
          </div>
        </section>

        <section className="mt-14 max-w-4xl space-y-4 leading-8 text-neutral-300">
          <h2 className="text-3xl font-black text-white">Methodology and limitations</h2>
          <p>Each feature cost is calculated as base bet × documented feature multiplier. The theoretical cap is base bet × 10,000. No spins were simulated and no return distribution was estimated.</p>
          <p>Operator configuration, jurisdiction, currency presentation, bet limits and feature availability can differ. The live game information panel remains authoritative. The maximum win is a theoretical ceiling, never a promise.</p>
          <p>Reuse is permitted under CC BY 4.0 with attribution to this page. See the <Link href="/editorial-policy/" className="font-bold text-emerald-300">editorial methodology</Link> and the <Link href="/bonus-buy/" className="font-bold text-emerald-300">Bonus Buy explanation</Link>.</p>
        </section>
        <p className="mt-12 text-sm text-neutral-500">Dataset version 1.0 · Sources and calculations rechecked 24 August 2026</p>
      </article>
      </main>
    </>
  )
}
