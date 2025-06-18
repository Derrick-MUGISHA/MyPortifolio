import type React from "react"
import { SiteFooter } from "./site-footer"
import { MainNav } from "./main-nav"


interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40">
        <MainNav />
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
