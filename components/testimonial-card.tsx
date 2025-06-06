"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  avatarSrc?: string
  index: number
}

export function TestimonialCard({ quote, author, role, company, avatarSrc, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover-lift border-amber/20 bg-teal/20 backdrop-blur-sm">
        <CardContent className="p-6 flex flex-col h-full">
          <Quote className="h-8 w-8 text-amber/50 mb-4" />
          <p className="text-cream/80 mb-6 flex-1 italic">"{quote}"</p>
          <div className="flex items-center gap-4">
            <Avatar className="border-2 border-amber">
              <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={author} />
              <AvatarFallback className="bg-amber/20 text-amber">
                {author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-cream">{author}</p>
              <p className="text-sm text-cream/70">
                {role}, {company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
