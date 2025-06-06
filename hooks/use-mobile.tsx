"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768) {
  // Default to false for server-side rendering
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Initial check
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Run once on mount
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [breakpoint])

  return isMobile
}
