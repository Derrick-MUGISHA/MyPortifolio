"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"

interface GithubTechIconProps {
  language: string | null
  size?: number
  className?: string
}

export function GithubTechIcon({ language, size = 24, className = "" }: GithubTechIconProps) {
  // Map languages to appropriate icons
  const getIcon = () => {
    if (!language) return <Code size={size} className={className} />

    const lang = language.toLowerCase()

    // Frontend languages
    if (["javascript", "typescript", "react", "vue", "angular", "html", "css", "sass"].includes(lang)) {
      return <Layout size={size} className={className} />
    }

    // Backend languages
    if (["python", "java", "ruby", "php", "go", "rust", "c#", "c++"].includes(lang)) {
      return <Server size={size} className={className} />
    }

    // Mobile languages
    if (["swift", "kotlin", "dart", "flutter", "react native"].includes(lang)) {
      return <Smartphone size={size} className={className} />
    }

    // Database languages
    if (["sql", "mysql", "postgresql", "mongodb", "firebase"].includes(lang)) {
      return <Database size={size} className={className} />
    }

    // Web languages (fallback)
    return <Globe size={size} className={className} />
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center"
    >
      {getIcon()}
    </motion.div>
  )
}
