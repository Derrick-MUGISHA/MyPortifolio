"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GithubTechIcon } from "@/components/github-tech-icon"

interface GithubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  forks_count: number
  language: string
  created_at: string
  topics: string[]
  image?: string
}

export function GithubProjects({ 
  username, 
  projectImages = {}
}: { 
  username: string
  projectImages?: Record<string, string>
}) {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`
        )
        
        if (!response.ok) throw new Error("Failed to fetch GitHub repositories")
        
        const data = await response.json()
        
        const dataWithImages = data.map((repo: GithubRepo) => ({
          ...repo,
          image: projectImages[repo.name] || null
        }))
        
        setRepos(dataWithImages)
      } catch (err) {
        console.error("Error fetching GitHub repositories:", err)
        setError("Failed to load GitHub repositories")

        // Fallback data with your image example
        setRepos([
          {
            id: 1,
            name: "portfolio-website",
            description: "My personal portfolio website built with Next.js and TailwindCSS",
            html_url: "https://github.com/muhimpunduanne/portfolio-website",
            homepage: "https://annemarie.dev",
            stargazers_count: 45,
            forks_count: 12,
            language: "TypeScript",
            created_at: "2023-01-15T12:00:00Z",
            topics: ["nextjs", "tailwindcss", "portfolio", "typescript"],
            image: projectImages["portfolio-website"] || "/images/projects/portfolio.jpg"
          },
          {
            id: 2,
            name: "e-commerce-platform",
            description: "A full-stack e-commerce platform with user authentication and payment integration",
            html_url: "https://github.com/muhimpunduanne/e-commerce-platform",
            homepage: "https://demo-ecommerce.example.com",
            stargazers_count: 78,
            forks_count: 23,
            language: "JavaScript",
            created_at: "2022-11-20T10:30:00Z",
            topics: ["react", "nodejs", "mongodb", "express"],
            image: projectImages["e-commerce-platform"] || "/images/projects/ecommerce.jpg"
          },
          {
            id: 3,
            name: "task-management-app",
            description: "A productivity application for managing tasks and projects with team collaboration features",
            html_url: "https://github.com/muhimpunduanne/task-management-app",
            homepage: "https://tasks.example.com",
            stargazers_count: 32,
            forks_count: 8,
            language: "TypeScript",
            created_at: "2023-03-05T15:45:00Z",
            topics: ["nextjs", "typescript", "tailwindcss", "prisma"],
            image: projectImages["task-management-app"] || "/images/projects/tasks.jpg"
          },

        ])
      } finally {
        setLoading(false)
      }
    }

    fetchGithubRepos()
  }, [username])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-muted-foreground py-8">{error}</div>
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="project-card h-[320px] rounded-xl overflow-hidden border border-amber/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
          >
            {/* Animated Image Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-1/2"
            >
              {repo.image ? (
                <Image 
                  src={repo.image}
                  alt={`${repo.name} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 1}
                />
              ) : (
                <div className="h-full bg-gradient-to-br from-burgundy/80 to-teal/60 flex items-center justify-center">
                  <GithubTechIcon 
                    language={repo.language} 
                    size={64} 
                    className="text-cream/80"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/50 to-transparent" />
            </motion.div>

            {/* Content Section with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 h-full flex flex-col pt-[55%]"
            >
              <div className="px-4 pb-4 flex-grow flex flex-col bg-gradient-to-t from-burgundy via-burgundy/95 to-burgundy">
                <motion.div
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  className="flex justify-between items-start mb-2"
                >
                  <h3 className="font-bold text-lg text-cream capitalize">
                    {repo.name.replace(/-/g, " ")}
                  </h3>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="bg-amber/10 border-amber/30 text-amber py-1 px-2">
                      <Star className="h-3 w-3 mr-1" /> {repo.stargazers_count}
                    </Badge>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-cream/80 text-sm mb-3 line-clamp-2"
                >
                  {repo.description}
                </motion.p>

                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="flex flex-wrap gap-2 mb-3"
                >
                  {repo.topics?.slice(0, 2).map((topic) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="text-xs bg-cream/10 text-cream/90 border border-cream/20"
                    >
                      {topic}
                    </Badge>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  className="mt-auto flex gap-2"
                >
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-amber hover:bg-amber/80 text-burgundy"
                  >
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <Github className="h-4 w-4" /> Code
                    </Link>
                  </Button>

                  {repo.homepage && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 border-amber/50 text-amber hover:bg-amber/20"
                    >
                      <Link
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}