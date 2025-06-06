import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber to-ruby flex items-center justify-center text-cream font-bold text-lg shadow-lg">
        AM
      </div>
      <span className="font-heading text-xl font-bold text-cream">Anne Marie</span>
    </div>
  )
}
