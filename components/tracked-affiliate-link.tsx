import type { AnchorHTMLAttributes } from "react"

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  placement: string
  operator?: string
}

export function TrackedAffiliateLink({
  placement,
  operator = "smartlink",
  href: _href,
  ...props
}: Props) {
  const href = `/go/?placement=${encodeURIComponent(placement)}`

  return <a {...props} href={href} data-placement={placement} data-operator={operator} />
}
