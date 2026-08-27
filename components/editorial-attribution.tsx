import Link from "next/link"

type Props = {
  checked?: string
}

export function EditorialAttribution({ checked = "27 August 2026" }: Props) {
  return (
    <aside className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-5 text-sm leading-6 text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
      <p>
        <span className="font-bold text-neutral-200">Independent editorial review.</span>{" "}
        Game facts are checked against provider documentation; casino terms are verified separately.
        {" "}<time dateTime="2026-08-27">Checked {checked}</time>.
      </p>
      <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-2 font-bold">
        <Link href="/editorial-policy/" className="text-emerald-300 hover:text-emerald-200">
          Methodology
        </Link>
        <Link href="/research/snoop-dogg-dollars-feature-costs/" className="text-emerald-300 hover:text-emerald-200">
          Open data
        </Link>
      </div>
    </aside>
  )
}
