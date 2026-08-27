import { permanentRedirect } from "next/navigation"

export default function AppRedirect() {
  permanentRedirect("/mobile/")
}
