import type { AnchorHTMLAttributes } from "react"

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  placement: string
  operator?: string
}

export function TrackedAffiliateLink({
  placement,
  operator = "1win",
  ...props
}: Props) {
  return <a {...props} data-placement={placement} data-operator={operator} />
}
