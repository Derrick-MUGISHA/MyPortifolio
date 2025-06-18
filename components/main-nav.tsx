"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { LoadingBar } from "@/components/loading-bar"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const isMobile = useMobile()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simplified loading state management without router events
  const handleNavigation = () => {
    setIsLoading(true)
    // Reset loading state after a short delay to simulate navigation
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
    }, 500)
  }

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/skills",
      label: "Skills",
      active: pathname === "/skills",
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col justify-between transition-all duration-300",
        scrolled ? "bg-teal/80 backdrop-blur-md" : "bg-transparent",
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center py-3 md:py-4 px-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm font-medium">
          {routes.map((route, i) => (
            <motion.div
              key={route.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                href={route.href}
                className={cn(
                  "transition-colors hover:text-amber animated-underline text-base",
                  route.active ? "text-amber font-bold" : "text-cream/80",
                )}
                onClick={handleNavigation}
              >
                {route.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden text-cream"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-amber/20 w-[80vw] sm:w-[350px] bg-teal/95">
            <div className="mt-8 mb-6">
              <Logo />
            </div>
            <nav className="flex flex-col gap-6 mt-8">
              {routes.map((route, i) => (
                <motion.div
                  key={route.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <Link
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-amber block py-2",
                      route.active ? "text-amber font-bold" : "text-cream/80",
                    )}
                    onClick={handleNavigation}
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-cream/70">Get in touch:</p>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-amber/50 text-cream hover:bg-amber/20"
                  >
                    <Link href="mailto:contact@annemarie.dev">Email</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-amber/50 text-cream hover:bg-amber/20"
                  >
                    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Loading bar at the bottom of navbar */}
      <LoadingBar isLoading={isLoading} />
    </motion.div>
  )
}