"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  index: number
}

export function ProjectCard({ id, title, description, image, tags, demoUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        id={id}
        className="overflow-hidden hover-lift h-full flex flex-col border-amber/20 bg-teal/20 backdrop-blur-sm"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-2">
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="backdrop-blur-sm bg-amber/80 text-burgundy hover:bg-amber"
              >
                <Link href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="backdrop-blur-sm bg-cream/80 text-burgundy hover:bg-cream"
              >
                <Link href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" /> Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-xl mb-2 text-cream">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs bg-amber/20 text-amber border border-amber/30">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-cream/70 text-sm flex-1">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
