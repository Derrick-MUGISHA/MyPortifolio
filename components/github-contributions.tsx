"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useMobile } from "@/hooks/use-mobile"

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface ContributionWeek {
  days: ContributionDay[]
}

interface ContributionsData {
  weeks: ContributionWeek[]
  totalContributions: number
}

export function GithubContributions({ username }: { username: string }) {
  const [contributions, setContributions] = useState<ContributionsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const isMobile = useMobile()

  useEffect(() => {
    async function fetchContributions() {
      try {
        setLoading(true)

        // In a real implementation, you would fetch from GitHub's GraphQL API
        // For this demo, we'll generate mock data
        const mockData = generateMockContributions()
        setContributions(mockData)

        setLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err)
        setError("Failed to load GitHub contributions")
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  // Generate mock contribution data
  function generateMockContributions(): ContributionsData {
    const weeks: ContributionWeek[] = []
    let totalContributions = 0

    // Generate 52 weeks (1 year) of data
    for (let w = 0; w < 52; w++) {
      const days: ContributionDay[] = []

      // Generate 7 days per week
      for (let d = 0; d < 7; d++) {
        // Create a date string (not accurate, just for display)
        const date = new Date()
        date.setDate(date.getDate() - ((52 - w) * 7 + (7 - d)))

        // Random contribution count, weighted to have more zeros and occasional high values
        const rand = Math.random()
        let count = 0
        let level = 0

        if (rand > 0.6) {
          if (rand > 0.9) {
            count = Math.floor(Math.random() * 10) + 10 // 10-20 contributions
            level = 4
          } else if (rand > 0.85) {
            count = Math.floor(Math.random() * 5) + 5 // 5-10 contributions
            level = 3
          } else if (rand > 0.75) {
            count = Math.floor(Math.random() * 3) + 2 // 2-5 contributions
            level = 2
          } else {
            count = 1 // 1 contribution
            level = 1
          }
        }

        totalContributions += count

        days.push({
          date: date.toISOString().split("T")[0],
          count,
          level,
        })
      }

      weeks.push({ days })
    }

    return { weeks, totalContributions }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error || !contributions) {
    return <div className="text-center text-muted-foreground py-8">{error || "No contribution data available"}</div>
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const currentDate = new Date()
  const monthLabels = []

  // Generate month labels for the last year
  for (let i = 0; i < 12; i++) {
    const date = new Date()
    date.setMonth(currentDate.getMonth() - 11 + i)
    monthLabels.push(months[date.getMonth()])
  }

  // For mobile, we'll show fewer weeks to fit the screen
  const displayWeeks = isMobile
    ? contributions.weeks.slice(contributions.weeks.length - 26) // Show last 6 months on mobile
    : contributions.weeks

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            {contributions.totalContributions} contributions in the last year
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs text-muted-foreground">Less</div>
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-3 h-3 rounded-sm contribution-level-${level}`} />
            ))}
            <div className="text-xs text-muted-foreground">More</div>
          </div>
        </div>

        <div className="hidden md:flex justify-between mb-2">
          {monthLabels.map((month, i) => (
            <div key={i} className="text-xs text-muted-foreground">
              {month}
            </div>
          ))}
        </div>

        <div className="overflow-x-auto pb-4">
          <TooltipProvider>
            <div
              className="contributions-calendar"
              style={{
                gridTemplateColumns: isMobile ? `repeat(${displayWeeks.length}, 1fr)` : "repeat(52, 1fr)",
              }}
            >
              {displayWeeks.flatMap((week, weekIndex) =>
                week.days.map((day, dayIndex) => (
                  <Tooltip key={`${weekIndex}-${dayIndex}`}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className={`contribution-day contribution-level-${day.level}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: weekIndex * 0.01 }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <div>{day.count} contributions</div>
                        <div>{day.date}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                )),
              )}
            </div>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
