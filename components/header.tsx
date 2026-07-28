import Image from "next/image"
import Link from "next/link"

const primary = [
  ["/review/", "Review"],
  ["/demo/", "Demo"],
  ["/how-to-play/", "How to Play"],
  ["/rtp/", "RTP"],
  ["/crypto-casinos/snoop-dogg-dollars/", "Crypto Casinos"],
]

const mobile = [
  ...primary,
  ["/free-spins/", "Free Spins"],
  ["/bonus-buy/", "Bonus Buy"],
  ["/snoop-spin/", "Snoop Spin"],
  ["/symbols-paytable/", "Symbols & Paytable"],
  ["/faq/", "FAQ"],
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-400/15 bg-[#080b09]/95">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Snoop Dogg Dollars home">
          <Image
            src="/logosnoop.webp"
            alt="Snoop Dogg Dollars"
            width={120}
            height={30}
            priority
            className="h-auto w-[100px] md:w-[120px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {primary.map(([href, label]) => (
            <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm font-semibold text-neutral-300 hover:bg-white/5 hover:text-emerald-300">
              {label}
            </Link>
          ))}
          <a href="https://lkhv.pro/581ee4" target="_blank" rel="nofollow sponsored noopener" data-cta="header" className="ml-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-black text-black hover:bg-emerald-300">
            Play Now
          </a>
        </nav>

        <details className="group relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/15 text-2xl text-white marker:content-none" aria-label="Open navigation">
            <span className="group-open:hidden">☰</span>
            <span className="hidden group-open:inline">×</span>
          </summary>
          <nav className="absolute right-0 top-12 w-[min(88vw,320px)] rounded-2xl border border-white/10 bg-[#101512] p-3 shadow-2xl" aria-label="Mobile navigation">
            {mobile.map(([href, label]) => (
              <Link key={href} href={href} className="block rounded-lg px-4 py-3 font-semibold text-neutral-200 hover:bg-white/5 hover:text-emerald-300">
                {label}
              </Link>
            ))}
            <a href="https://lkhv.pro/581ee4" target="_blank" rel="nofollow sponsored noopener" data-cta="header-mobile" className="mt-2 block rounded-xl bg-emerald-400 px-4 py-3 text-center font-black text-black">
              Play Now
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}
