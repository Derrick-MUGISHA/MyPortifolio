"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
}

interface SkillCardProps {
  title: string
  skills: Skill[]
  index: number
}

export function SkillCard({ title, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover-lift">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-1.5 w-6 rounded-full mr-0.5 ${i < skill.level ? "bg-primary" : "bg-muted"}`}
                      initial={{ width: 0 }}
                      animate={{ width: 24 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + skillIndex * 0.05 + i * 0.05,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
