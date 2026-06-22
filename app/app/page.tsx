"use client"

import { useEffect } from "react"

export default function AppRedirect() {
  useEffect(() => {
    window.location.href = "https://lkhv.pro/581ee4"
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4" />
        <p>Redirecting to 1WIN...</p>
      </div>
    </div>
  )
}
