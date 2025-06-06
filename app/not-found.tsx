"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12 text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-bold gradient-text"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-bold"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-md mx-auto"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <Button asChild className="rounded-full">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
