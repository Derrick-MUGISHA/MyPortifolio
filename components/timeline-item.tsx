"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TimelineItemProps {
  year: string
  title: string
  company: string
  description: string
  index: number
}

export function TimelineItem({ year, title, company, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="hidden md:block absolute top-6 left-[calc(50%-0.5px)] w-px h-full bg-border" />
      <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
        <div
          className={`hidden md:flex items-center justify-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
        >
          <div className="font-bold text-2xl text-primary">{year}</div>
        </div>
        <div className={`${index % 2 === 0 ? "" : "md:col-start-1"}`}>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="md:hidden font-bold text-xl text-primary mb-2">{year}</div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-primary font-medium">{company}</p>
              <p className="text-muted-foreground mt-2">{description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
