"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function AffiliateTracker() {
  useEffect(() => {
    const track = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]")
      if (!link || !link.href.includes("lkhv.pro")) return

      window.gtag?.("event", "affiliate_click", {
        operator: link.dataset.operator || "1win",
        placement: link.dataset.placement || link.dataset.cta || "unlabeled",
        source_path: window.location.pathname,
        target_url: link.href,
      })
    }

    document.addEventListener("click", track)
    return () => document.removeEventListener("click", track)
  }, [])

  return null
}
