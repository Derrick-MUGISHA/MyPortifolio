"use client"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ProjectFilter } from "@/components/project-filter"

export default function ProjectsPage() {
  const githubUsername = "muhimpunduanne"

  type Project = {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    demoUrl: string
    githubUrl: string
    category: string
    type: "personal" | "github"
  }

  // Sample projects data with categories and types
  const projects: Project[] = [
    {
      id: "project1",
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500&text=E-Commerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      category: "web",
      type: "personal",
    },
    {
      id: "project2",
      title: "Health & Fitness App",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "/placeholder.svg?height=300&width=500&text=Fitness+App",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
      demoUrl: "https://example-fitness.com",
      githubUrl: "https://github.com/example/fitness-app",
      category: "mobile",
      type: "personal",
    },
    {
      id: "project3",
      title: "AI Content Generator",
      description: "Web application that uses AI to generate marketing content, blog posts, and social media captions.",
      image: "/placeholder.svg?height=300&width=500&text=AI+Generator",
      tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
      demoUrl: "https://example-ai-generator.com",
      githubUrl: "https://github.com/example/ai-generator",
      category: "web",
      type: "personal",
    },
    {
      id: "project4",
      title: "Portfolio Website",
      description: "My personal portfolio website built with Next.js and TailwindCSS",
      image: "/placeholder.svg?height=300&width=500&text=Portfolio",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      demoUrl: "https://annemarie.dev",
      githubUrl: "https://github.com/muhimpunduanne/portfolio-website",
      category: "web",
      type: "github",
    },
    {
      id: "project5",
      title: "Task Management API",
      description: "RESTful API for task management with authentication and team collaboration features",
      image: "/placeholder.svg?height=300&width=500&text=API",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      demoUrl: "https://api-docs.example.com",
      githubUrl: "https://github.com/muhimpunduanne/task-api",
      category: "api",
      type: "github",
    },
    {
      id: "project6",
      title: "Augmented Reality Navigation",
      description: "Mobile app for indoor navigation using augmented reality",
      image: "/placeholder.svg?height=300&width=500&text=AR+Navigation",
      tags: ["Swift", "ARKit", "CoreLocation", "iOS"],
      demoUrl: "https://ar-nav.example.com",
      githubUrl: "https://github.com/muhimpunduanne/ar-navigation",
      category: "mobile",
      type: "github",
    },
  ]

  return (
    <div className="container py-12">
      <PageHeader title="My Projects" description="A showcase of my work and contributions to the tech world" />

      <ProjectFilter projects={projects} githubUsername={githubUsername} />

      <motion.div
        className="mt-20 text-center p-12 border rounded-2xl bg-gradient-to-r from-primary/10 to-purple-400/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Want to collaborate on something amazing?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg" className="rounded-md">
          <Link href="/contact">
            Let's Build Together <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
