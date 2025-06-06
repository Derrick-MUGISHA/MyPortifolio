"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  category: string
  type: "github" | "personal"
}

interface ProjectFilterProps {
  projects: Project[]
  githubUsername: string
}

export function ProjectFilter({ projects, githubUsername }: ProjectFilterProps) {
  const [filter, setFilter] = useState<string>("all")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  useEffect(() => {
    let result = projects

    // Filter by category
    if (filter !== "all") {
      result = result.filter((project) => project.category === filter)
    }

    setFilteredProjects(result)
  }, [filter, projects])

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-md"
          >
            All Categories
          </Button>
          <Button
            variant={filter === "web" ? "default" : "outline"}
            onClick={() => setFilter("web")}
            className="rounded-md"
          >
            Web Apps
          </Button>
          <Button
            variant={filter === "mobile" ? "default" : "outline"}
            onClick={() => setFilter("mobile")}
            className="rounded-md"
          >
            Mobile Apps
          </Button>
          <Button
            variant={filter === "api" ? "default" : "outline"}
            onClick={() => setFilter("api")}
            className="rounded-md"
          >
            APIs
          </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-cream/70">No projects found matching your filters.</p>
              <Button
                onClick={() => {
                  setFilter("all")
                }}
                className="mt-4"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
