import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg">
        <Image
          src="https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png" // Replace with the path to your logo image
          alt="Anne Marie Logo"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
      <span className="font-heading text-xl font-bold text-cream">Muhimpundu Anne Marie</span>
    </div>
  )
}
