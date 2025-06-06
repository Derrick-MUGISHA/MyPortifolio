"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TimeCircleProps {
  value: number
  maxValue: number
  size?: number
  strokeWidth?: number
  label: string
  unit?: string
}

export function TimeCircle({ value, maxValue, size = 160, strokeWidth = 8, label, unit }: TimeCircleProps) {
  const [progress, setProgress] = useState(0)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const valuePercentage = (value / maxValue) * 100

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(valuePercentage)
    }, 500)

    return () => clearTimeout(timer)
  }, [valuePercentage])

  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="circular-progress">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted opacity-20"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-primary"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <motion.span
          className="text-3xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {value}
          {unit}
        </motion.span>
        <motion.span
          className="text-sm text-muted-foreground mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {label}
        </motion.span>
      </div>
    </div>
  )
}
