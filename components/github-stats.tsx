"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, GitFork, Code, Users, BookOpen } from "lucide-react"

interface GithubStats {
  followers: number
  following: number
  public_repos: number
  public_gists: number
  stars: number
  forks: number
}

export function GithubStats({ username }: { username: string }) {
  const [stats, setStats] = useState<GithubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        setLoading(true)

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        if (!userResponse.ok) {
          throw new Error("Failed to fetch GitHub user data")
        }
        const userData = await userResponse.json()

        // Fetch repositories to calculate stars and forks
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        if (!reposResponse.ok) {
          throw new Error("Failed to fetch GitHub repositories")
        }
        const reposData = await reposResponse.json()

        // Calculate total stars and forks
        const stars = reposData.reduce((total: number, repo: any) => total + repo.stargazers_count, 0)
        const forks = reposData.reduce((total: number, repo: any) => total + repo.forks_count, 0)

        setStats({
          followers: userData.followers,
          following: userData.following,
          public_repos: userData.public_repos,
          public_gists: userData.public_gists,
          stars,
          forks,
        })

        setLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub stats:", err)
        setError("Failed to load GitHub stats")
        setLoading(false)

        // Set fallback data for demo purposes
        setStats({
          followers: 120,
          following: 80,
          public_repos: 25,
          public_gists: 8,
          stars: 350,
          forks: 120,
        })
      }
    }

    fetchGithubStats()
  }, [username])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-muted-foreground py-8">{error}</div>
  }

  const statItems = [
    { icon: <Users className="h-5 w-5" />, value: stats?.followers || 0, label: "Followers" },
    { icon: <Users className="h-5 w-5" />, value: stats?.following || 0, label: "Following" },
    { icon: <Code className="h-5 w-5" />, value: stats?.public_repos || 0, label: "Repositories" },
    { icon: <BookOpen className="h-5 w-5" />, value: stats?.public_gists || 0, label: "Gists" },
    { icon: <Star className="h-5 w-5" />, value: stats?.stars || 0, label: "Stars" },
    { icon: <GitFork className="h-5 w-5" />, value: stats?.forks || 0, label: "Forks" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {statItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="hover-lift h-full">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="text-primary mb-2 mt-2">{item.icon}</div>
              <div className="text-2xl font-bold">{item.value.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">{item.label}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
