"use client"

import { motion } from "framer-motion"

interface LoadingBarProps {
  isLoading: boolean
}

export function LoadingBar({ isLoading }: LoadingBarProps) {
  return (
    <div className="relative h-0.5 w-full overflow-hidden">
      {isLoading ? (
        <motion.div
          className="absolute inset-x-0 bg-gradient-to-r from-amber/80 via-ruby/80 to-amber/80 h-full"
          initial={{ x: "-100%" }}
          animate={{
            x: "100%",
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "linear",
          }}
        />
      ) : (
        <motion.div
          className="absolute inset-x-0 bg-amber/30 h-full"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0, originX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}
