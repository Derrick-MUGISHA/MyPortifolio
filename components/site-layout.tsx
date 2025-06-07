import type React from "react"
import Navbar from "@/components/main-nav"
// import { SiteFooter } from "@/components/site-footer"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40">
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
