import type React from "react"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteLayout } from "@/components/site-layout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhimpundu Anne Marie | Creative Software Developer",
  description:
    "Portfolio of Muhimpundu Anne Marie, a creative software developer specializing in modern web and mobile applications",
  keywords: ["software developer", "web developer", "frontend developer", "React developer", "Next.js developer"],
  authors: [{ name: "Muhimpundu Anne Marie" }],
  creator: "Muhimpundu Anne Marie",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        {/* ✅ Google Fonts: Space Grotesk and Figtree */}
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("min-h-screen bg-background antialiased font-primary")}>
        <div className="noise-texture"></div>
        <div className="dot-grid"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
