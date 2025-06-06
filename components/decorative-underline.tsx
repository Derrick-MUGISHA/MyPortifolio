"use client"

import { motion } from "framer-motion"

interface DecorativeUnderlineProps {
  width?: string
  className?: string
}

export function DecorativeUnderline({ width = "50%", className = "" }: DecorativeUnderlineProps) {
  return (
    <div className={`flex justify-center w-full my-2 ${className}`}>
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-amber to-transparent"
        style={{ width }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  )
}
