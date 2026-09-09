const SMARTLINK_URL = "https://slotpower365.space/IFdkjB2z0-SV"

export const dynamic = "force-dynamic"

function safePlacement(value: string | null) {
  const normalized = value?.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "_").slice(0, 80)
  return normalized || "site"
}

export function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const destination = new URL(SMARTLINK_URL)

  destination.searchParams.set("sub1", safePlacement(requestUrl.searchParams.get("placement")))
  destination.searchParams.set("utm_source", "seo")
  destination.searchParams.set("utm_medium", "affiliate")
  destination.searchParams.set("utm_campaign", "snoop_site")

  return new Response(null, {
    status: 307,
    headers: {
      Location: destination.toString(),
      "Cache-Control": "private, no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
    },
  })
}
