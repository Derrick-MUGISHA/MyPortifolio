"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="my-12 md:my-16 space-y-4 text-center max-w-3xl mx-auto px-4">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          className="text-xl text-cream/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-amber to-ruby mx-auto mt-6"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  )
}
