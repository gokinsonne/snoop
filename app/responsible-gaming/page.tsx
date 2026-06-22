import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsible Gaming | Snoop Dogg Dollars",
  description: "Responsible gaming information. Play safely and know your limits.",
  robots: "index, follow",
  alternates: { canonical: "https://snoopdoggdollar.org/responsible-gaming" },
}

export default function ResponsibleGamingPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">Responsible Gaming</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-neutral-400 mb-6">
            Gambling should be fun and entertaining, not a source of stress or financial problems. We are committed to promoting responsible gaming and helping you stay in control.
          </p>
          <h2>1. Set Limits</h2>
          <p>Before you start playing, decide how much time and money you can afford to spend. Stick to these limits no matter what.</p>
          <h2>2. Know the Signs</h2>
          <p>Problem gambling can affect anyone. Watch for these warning signs:</p>
          <ul>
            <li>Spending more than you can afford to lose</li>
            <li>Borrowing money to gamble</li>
            <li>Neglecting work, family, or friends due to gambling</li>
            <li>Feeling anxious or depressed about gambling losses</li>
            <li>Chasing losses by increasing bets</li>
          </ul>
          <h2>3. Self-Exclusion</h2>
          <p>If you feel you need a break, most reputable casinos offer self-exclusion options. You can block your account for a period of time or permanently.</p>
          <h2>4. Help Resources</h2>
          <p>If you or someone you know has a gambling problem, help is available:</p>
          <ul>
            <li><strong>Gamblers Anonymous:</strong> www.gamblersanonymous.org</li>
            <li><strong>National Council on Problem Gambling:</strong> www.ncpgambling.org</li>
            <li><strong>GamCare:</strong> www.gamcare.org.uk</li>
            <li><strong>BeGambleAware:</strong> www.begambleaware.org</li>
          </ul>
          <h2>5. Underage Gambling</h2>
          <p>It is illegal for anyone under the age of 18 to gamble. We take this seriously and do not target minors with our content.</p>
          <h2>6. Parental Controls</h2>
          <p>If you share your device with minors, consider using parental control software to block gambling websites and apps.</p>
        </div>
      </div>
    </main>
  )
}
