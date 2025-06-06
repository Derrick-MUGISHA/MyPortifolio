"use client"

import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "devicon-react-original colored",
      skills: [
        { name: "React", level: 5, icon: "devicon-react-original colored" },
        { name: "Next.js", level: 5, icon: "devicon-nextjs-original" },
        { name: "HTML5", level: 5, icon: "devicon-html5-plain colored" },
        { name: "CSS3", level: 5, icon: "devicon-css3-plain colored" },
        { name: "TailwindCSS", level: 5, icon: "devicon-tailwindcss-plain colored" },
        { name: "JavaScript", level: 5, icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", level: 4, icon: "devicon-typescript-plain colored" },
        { name: "Redux", level: 4, icon: "devicon-redux-original colored" },
        { name: "Framer Motion", level: 3, icon: "devicon-figma-plain" },
      ],
    },
    {
      title: "Backend Development",
      icon: "devicon-nodejs-plain colored",
      skills: [
        { name: "Node.js", level: 4, icon: "devicon-nodejs-plain colored" },
        { name: "Express", level: 4, icon: "devicon-express-original" },
        { name: "MongoDB", level: 4, icon: "devicon-mongodb-plain colored" },
        { name: "Firebase", level: 4, icon: "devicon-firebase-plain colored" },
        { name: "GraphQL", level: 3, icon: "devicon-graphql-plain colored" },
        { name: "REST API", level: 5, icon: "devicon-nodejs-plain colored" },
        { name: 'PostgreSQL", level: 3, icon  level: 5, icon: "devicon-nodejs-plain colored' },
        { name: "PostgreSQL", level: 3, icon: "devicon-postgresql-plain colored" },
      ],
    },
    {
      title: "Tools & Others",
      icon: "devicon-git-plain colored",
      skills: [
        { name: "Git", level: 5, icon: "devicon-git-plain colored" },
        { name: "GitHub", level: 5, icon: "devicon-github-original" },
        { name: "VS Code", level: 5, icon: "devicon-vscode-plain colored" },
        { name: "Figma", level: 4, icon: "devicon-figma-plain colored" },
        { name: "Docker", level: 3, icon: "devicon-docker-plain colored" },
        { name: "CI/CD", level: 3, icon: "devicon-jenkins-plain colored" },
        { name: "Jest", level: 4, icon: "devicon-jest-plain colored" },
        { name: "Responsive Design", level: 5, icon: "devicon-css3-plain colored" },
      ],
    },
  ]

  const certifications = [
    {
      name: "Frontend Developer",
      issuer: "SheCanCode",
      year: "2024",
    },
    {
      name: "Ui/Ux Design",
      issuer: "SheCanCode",
      year: "2024",
    },
    {
      name: "",
      issuer: "Art",
      year: "2021",
    },
  ]

  return (
    <div className="container py-12">
      <PageHeader title="Skills & Expertise" description="Technologies and tools I work with" />

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <Card className="h-full hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <i className={`${category.icon} text-3xl`}></i>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * skillIndex + 0.3 }}
                    >
                      <div className="skill-icon mb-2">
                        <i className={`${skill.icon} text-2xl`}></i>
                      </div>
                      <p className="font-medium text-sm">{skill.name}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 w-2 rounded-full mx-0.5 ${skill.level !== undefined && i < skill.level ? "bg-primary" : "bg-muted"}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-lift h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex items-start gap-4 h-full">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">{cert.name}</h3>
                      <p className="text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Areas of Expertise</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[
            "Web Development",
            "Mobile Apps",
            "Responsive Design",
            "UI/UX Implementation",
            "API Development",
            "Database Design",
            "Performance Optimization",
            "Authentication Systems",
            "State Management",
            "Testing & Debugging",
            "Code Reviews",
            "Technical Documentation",
          ].map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <Badge className="px-3 py-1.5 text-sm">{area}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 bg-muted/30 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Continuous Learning</h2>
          <p className="text-muted-foreground">
            Technology evolves rapidly, and I'm committed to staying at the forefront. I regularly participate in
            workshops, online courses, and tech conferences to expand my knowledge and refine my skills.
          </p>
        </div>
      </div>
    </div>
  )
}
