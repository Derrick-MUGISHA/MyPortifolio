"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { GithubProjects } from "@/components/github-projects"
import { GithubContributions } from "@/components/github-contributions"
import { CircularProgress } from "@/components/circular-progress"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { useRef } from "react"
import { DecorativeUnderline } from "@/components/decorative-underline"
import { useMobile } from "@/hooks/use-mobile"
import { FloatingContactButtons } from "@/components/floating-contact-buttons"

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const githubUsername = "muhimpunduanne"

  const skills = [
    { name: "Web Development", progress: 90 },
    { name: "UI/UX Design", progress: 85 },
    { name: "Mobile Apps", progress: 75 },
    { name: "Backend", progress: 80 },
  ]

  const customProjects = [
    {
      id: "project1",
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and admin dashboard.",
      image: "https://i.postimg.cc/MHCn5Qvr/pexels-rdne-8370752.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example-ecommerce.com",
      sourceUrl: "https://github.com/example/ecommerce",
    },
    {
      id: "project2",
      title: "Health & Fitness App",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "https://i.postimg.cc/TYbLwCs8/istockphoto-860688956-1024x1024.jpg",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
      liveUrl: "https://example-fitness.com",
      sourceUrl: "https://github.com/example/fitness-app",
    },
    {
      id: "project3",
      title: "AI Content Generator",
      description: "Web application that uses AI to generate marketing content, blog posts, and social media captions.",
      image: "https://i.postimg.cc/9MfwQ261/istockphoto-1495008087-1024x1024.jpg",
      tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
      liveUrl: "https://example-ai-generator.com",
      sourceUrl: "https://github.com/example/ai-generator",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "MUGISHA Derrick",
      role: "Client",
      company: "TechStart Inc.",
      avatar: "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
      testimonial:
        "Anne Marie delivered our project ahead of schedule with outstanding quality. Her attention to detail and problem-solving skills are remarkable.",
      rating: 5,
    },
    {
      id: 2,
      name: "MUKAMUHANGA Jean",
      role: "co-worker",
      company: "InnovateLabs",
      avatar: "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
      testimonial:
        "Working with Anne Marie was a game-changer for our startup. She not only built a robust application but also provided valuable insights that improved our overall product strategy.",
      rating: 5,
    },
    {
      id: 3,
      name: "",
      role: "Marketing Director",
      company: "TechSphere",
      avatar: "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
      testimonial:
        "Anne Marie's technical expertise helped us transform our outdated website into a modern, user-friendly platform that increased our conversion rates significantly.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "CTO",
      company: "FutureTech",
      avatar: "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
      testimonial:
        "We've worked with many developers, but Anne Marie stands out for her ability to understand business requirements and translate them into elegant technical solutions.",
      rating: 5,
    },
  ]

  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section */}
      <section ref={targetRef} className="hero-section relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png"
            alt="Background"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        {/* Decorative Circles */}
        <div className="decorative-circle decorative-circle-1 animate-pulse"></div>
        <div className="decorative-circle decorative-circle-2 animate-pulse"></div>

        <div className="container max-w-4xl mx-auto relative z-10 text-center w-full">
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="px-3 py-1 text-sm mb-4 mt-12 sm:mt-0 bg-amber/20 text-amber border border-amber/30 backdrop-blur-sm inline-block">
                Creative Software Developer
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-cream mb-4">
                Muhimpundu Anne Marie
              </h1>
              <DecorativeUnderline width={isMobile ? "150px" : "200px"} />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight mt-2 mb-4 md:mb-6 text-cream">
                Building Digital Experiences for the Modern <span className="gradient-text">World</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-cream/80 mt-2 md:mt-4 max-w-xl mx-auto">
                I build modern web and mobile applications with a focus on user experience and performance.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size={isMobile ? "default" : "lg"} className="btn-fancy w-auto min-w-[140px]">
                <Link href="/projects" className="flex items-center justify-center gap-2">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size={isMobile ? "default" : "lg"}
                className="rounded-full bg-transparent text-cream border-cream hover:bg-cream/10 w-auto min-w-[140px]"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Get in Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/annemarie" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:contact@annemarie.dev" aria-label="Email">
                <Button variant="ghost" size="icon" className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container py-12 md:py-24 animated-bg w-full">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cream section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center custom-card p-4 md:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CircularProgress
                  value={skill.progress}
                  size={isMobile ? 80 : 100}
                  strokeWidth={isMobile ? 5 : 6}
                  label={skill.name}
                  unit="%"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="section-container py-12 md:py-24 w-full">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cream section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            GitHub Activity
          </motion.h2>
          <motion.div
            className="w-full custom-card p-4 md:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GithubContributions username={githubUsername} />
          </motion.div>
        </div>
      </section>

      {/* GitHub Projects */}
      <section className="section-container py-12 md:py-24 w-full">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cream section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            GitHub Projects
          </motion.h2>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GithubProjects username={githubUsername} />
          </motion.div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section className="section-container py-12 md:py-24 animated-bg w-full">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cream section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-6 md:gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {customProjects.map(({ id, title, description, image, tags, liveUrl, sourceUrl }) => (
              <motion.div
                key={id}
                className="custom-card rounded-lg shadow-lg overflow-hidden flex flex-col bg-dark w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-cream">{title}</h3>
                  <p className="text-sm md:text-base text-cream/80 flex-grow mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-amber/10 text-amber border-amber/30 px-2 py-1 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      aria-label={`View live project: ${title}`}
                    >
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                        Live <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      aria-label={`View source code: ${title}`}
                    >
                      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                        Code <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container py-12 md:py-24 w-full">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-cream section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>
          <div className="w-full">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </div>
  )
}