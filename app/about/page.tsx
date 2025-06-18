"use client"

import { PageHeader } from "@/components/page-header"
import { ImageGallery } from "@/components/image-gallery"
import { TimelineItem } from "@/components/timeline-item"
import { motion } from "framer-motion"

export default function AboutPage() {
  const timelineItems = [
    {
      year: "2024",
      title: "High School Graduate",
      company: "St. Joseph's College",
      description: "Graduated with a focus on Computer Science and Mathematics.",
    },
    {
      year: "2024",
      title: "university student",
      company: "Auca University",
      description: "Started my university journey studying Computer Science.",
    },
    {
      year: "2024",
      title: "studied Frontend",
      company: "Shecancode",
      description: "Started my professional journey developing websites with HTML, CSS, and JavaScript even all the flame works.",
    },
    {
      year: "2015",
      title: "Backend Developer",
      company: "IgireRwanda organisation",
      description: "Staarted my professional journey in backend development with java, node, and database ",
    },
  ]

  const galleryImages = [
    {
      src: "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
      alt: "Anne Marie at a tech conference",
    },
    {
      src: "/placeholder.svg?height=500&width=800&text=About+Image+2",
      alt: "Anne Marie working on a project",
    },
    {
      src: "/placeholder.svg?height=500&width=800&text=About+Image+3",
      alt: "Anne Marie giving a presentation",
    },
    {
      src: "/placeholder.svg?height=500&width=800&text=About+Image+4",
      alt: "Anne Marie with her team",
    },
  ]

  return (
    <div className="container py-12">
      <PageHeader title="About Me" description="My journey, experience, and passion for software development" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">My Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hello! I'm Muhimpundu Anne Marie, a passionate software developer with a love for creating elegant solutions
            to complex problems. My journey in tech began during my HighSchool years when I discovered the power of
            coding to transform ideas into reality.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With over years of professional experience, I've had the opportunity to work and study on a diverse range of
            projects, from responsive web applications to mobile apps and backend systems. I'm particularly passionate
            about creating intuitive user interfaces and optimizing performance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's
            possible with technology.
          </p>

          <motion.blockquote
            className="border-l-4 pl-4 italic"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            "The best way to predict the future is to create it. I strive to build software that makes a positive impact
            on people's lives."
          </motion.blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ImageGallery images={galleryImages} />
        </motion.div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-12 text-center">Professional Journey</h2>
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              company={item.company}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="mt-20 bg-muted/30 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">My Philosophy</h2>
          <p className="text-xl italic text-muted-foreground">
            "I believe that great software is not just about code—it's about understanding people and solving real
            problems. Every line of code should serve a purpose and enhance the user experience."
          </p>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">Muhimpundu Anne Marie</p>
          </div>
        </div>
      </div>
    </div>
  )
}
