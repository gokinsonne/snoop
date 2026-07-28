"use client"

import type { AnchorHTMLAttributes, MouseEvent } from "react"

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  placement: string
  operator?: string
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function TrackedAffiliateLink({
  placement,
  operator = "1win",
  onClick,
  ...props
}: Props) {
  function track(event: MouseEvent<HTMLAnchorElement>) {
    window.gtag?.("event", "affiliate_click", {
      operator,
      placement,
      source_path: window.location.pathname,
      target_url: event.currentTarget.href,
    })
    onClick?.(event)
  }

  return <a {...props} onClick={track} />
}
