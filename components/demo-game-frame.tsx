"use client"

import { useState } from "react"

const DEMO_URL = "https://bgaming-network.com/play/SnoopDoggDollars/FUN?server=demo"

type Props = {
  locale?: "en" | "ru"
}

const copy = {
  en: {
    eyebrow: "Free demo",
    title: "Load the game when you are ready",
    description:
      "The provider game is loaded only after you click, saving bandwidth and avoiding a slow third-party request on the initial page view.",
    button: "Start free demo",
    frameTitle: "Snoop Dogg Dollars free demo game",
  },
  ru: {
    eyebrow: "Бесплатное демо",
    title: "Запустите игру, когда будете готовы",
    description:
      "Игра провайдера загружается только после нажатия: это экономит трафик и не замедляет первый показ страницы сторонним запросом.",
    button: "Запустить демо",
    frameTitle: "Бесплатная демо-игра Snoop Dogg Dollars",
  },
} as const

export function DemoGameFrame({ locale = "en" }: Props) {
  const [started, setStarted] = useState(false)
  const labels = copy[locale]

  function startDemo() {
    setStarted(true)
    window.dataLayer?.push({ event: "demo_start", game: "snoop_dogg_dollars" })
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-700 bg-black">
      {started ? (
        <iframe
          className="h-full w-full"
          src={DEMO_URL}
          allow="fullscreen"
          allowFullScreen
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          title={labels.frameTitle}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,197,94,.18),transparent_55%)] p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-green-400">{labels.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">{labels.title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">
            {labels.description}
          </p>
          <button
            type="button"
            onClick={startDemo}
            className="mt-6 rounded-full bg-green-400 px-7 py-3 font-black text-black transition-colors hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            {labels.button}
          </button>
        </div>
      )}
    </div>
  )
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}
