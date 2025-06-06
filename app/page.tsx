"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import { GithubProjects } from "@/components/github-projects";
import { GithubContributions } from "@/components/github-contributions";
import { CircularProgress } from "@/components/circular-progress";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { useRef } from "react";
import { DecorativeUnderline } from "@/components/decorative-underline";
import { useMobile } from "@/hooks/use-mobile";
import { FloatingContactButtons } from "@/components/floating-contact-buttons";

export default function HomePage() {
  // Refs for scroll animations
  const targetRef = useRef<HTMLDivElement>(null);

  const isMobile = useMobile();

  // GitHub username
  const githubUsername = "muhimpunduanne";

  // Skills with progress
  const skills = [
    { name: "Web Development", progress: 90 },
    { name: "UI/UX Design", progress: 85 },
    { name: "Mobile Apps", progress: 75 },
    { name: "Backend", progress: 80 },
  ];

  // Non-GitHub projects with enhanced styling data
  const customProjects = [
    {
      id: "project1",
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration and admin dashboard.",
      image: "https://i.postimg.cc/MHCn5Qvr/pexels-rdne-8370752.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example-ecommerce.com",
      sourceUrl: "https://github.com/example/ecommerce",
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      accent: "blue",
    },
    {
      id: "project2",
      title: "Health & Fitness App",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image:
        "https://i.postimg.cc/TYbLwCs8/istockphoto-860688956-1024x1024.jpg",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
      liveUrl: "https://example-fitness.com",
      sourceUrl: "https://github.com/example/fitness-app",
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      accent: "green",
    },
    {
      id: "project3",
      title: "AI Content Generator",
      description:
        "Web application that uses AI to generate marketing content, blog posts, and social media captions.",
      image:
        "https://i.postimg.cc/9MfwQ261/istockphoto-1495008087-1024x1024.jpg",
      tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
      liveUrl: "https://example-ai-generator.com",
      sourceUrl: "https://github.com/example/ai-generator",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      accent: "orange",
    },
  ];

  // Testimonials with ratings
  const testimonials = [
    {
      id: 1,
      name: "MUGISHA Derrick",
      role: "Client",
      company: "TechStart Inc.",
      avatar:
        "https://i.postimg.cc/3NcXTNWg/pexels-moh-adbelghaffar-771742.jpg",
      testimonial:
        "Anne Marie delivered our project ahead of schedule with outstanding quality. Her attention to detail and problem-solving skills are remarkable.",
      rating: 5,
    },
    {
      id: 2,
      name: "MUKAMUHANGA Jean",
      role: "co-worker",
      company: "InnovateLabs",
      avatar:
        "https://i.postimg.cc/3NcXTNWg/pexels-moh-adbelghaffar-771742.jpg",
      testimonial:
        "Working with Anne Marie was a game-changer for our startup. She not only built a robust application but also provided valuable insights that improved our overall product strategy.",
      rating: 5,
    },
    {
      id: 3,
      name: "",
      role: "Marketing Director",
      company: "TechSphere",
      avatar:
        "https://i.postimg.cc/3NcXTNWg/pexels-moh-adbelghaffar-771742.jpg",
      testimonial:
        "Anne Marie's technical expertise helped us transform our outdated website into a modern, user-friendly platform that increased our conversion rates significantly.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "CTO",
      company: "FutureTech",
      avatar:
        "https://i.postimg.cc/3NcXTNWg/pexels-moh-adbelghaffar-771742.jpg",
      testimonial:
        "We've worked with many developers, but Anne Marie stands out for her ability to understand business requirements and translate them into elegant technical solutions.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section with enhanced responsive styling */}
      <section
        ref={targetRef}
        className="hero-section flex items-center justify-center min-h-screen relative bg-black overflow-hidden"
      >
        {/* Background Image - Optimized for different screen sizes */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="https://i.postimg.cc/4x70SJgH/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png"
            alt="Background"
            fill
            className="object-cover object-center w-full h-full opacity-60 sm:opacity-80"
            priority
            sizes="100vw"
          />
        </div>

        {/* Decorative Elements - Hide on very small screens */}
        <div className="decorative-circle decorative-circle-1 animate-pulse hidden sm:block"></div>
        <div className="decorative-circle decorative-circle-2 animate-pulse hidden sm:block"></div>

        {/* Hero Content - Enhanced responsive padding and spacing */}
        <div className="container px-4 sm:px-6 lg:px-8 hero-content z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="space-y-4 sm:space-y-6 md:space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header Section - Better responsive text scaling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3 sm:space-y-4"
              >
                <Badge className="px-2 py-1 text-xs sm:text-sm mb-2 sm:mb-4 bg-amber/20 text-amber border border-amber/30 backdrop-blur-sm">
                  Creative Software Developer
                </Badge>
                
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] text-cream mb-2 sm:mb-4 px-2">
                  Muhimpundu Anne Marie
                </h1>
                
                <div className="flex justify-center mb-3 sm:mb-4">
                  <DecorativeUnderline width={isMobile ? "120px" : "200px"} />
                </div>
                
                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-tight mb-3 sm:mb-4 md:mb-6 text-cream px-2">
                  Building Digital Experiences for the Modern{" "}
                  <span className="gradient-text">World</span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/80 mt-2 md:mt-4 max-w-3xl mx-auto px-4">
                  I build modern web and mobile applications with a focus on user experience and performance.
                </p>
              </motion.div>

              {/* Buttons - Improved mobile layout */}
             <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            size={isMobile ? "default" : "lg"}
            className="btn-fancy w-full sm:w-auto"
          >
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size={isMobile ? "default" : "lg"}
            className="rounded-full bg-transparent text-cream border-cream hover:bg-cream/10 w-full sm:w-auto"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>

              {/* Social Icons - Better spacing and touch targets */}
              <motion.div
                className="flex gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/annemarie"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:contact@annemarie.dev">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Improved responsive grid */}
      <section className="section-container py-8 sm:py-12 md:py-16 lg:py-24 animated-bg">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-cream section-header px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center custom-card p-3 sm:p-4 md:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CircularProgress
                  value={skill.progress}
                  size={isMobile ? 80 : 120}
                  strokeWidth={isMobile ? 4 : 8}
                  label={skill.name}
                  unit="%"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section - Enhanced to match GitHub look */}
      <section className="section-container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-cream section-header px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            GitHub Activity
          </motion.h2>
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* GitHub-style container */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 sm:p-6 shadow-2xl">
              {/* Header section like GitHub */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#30363d]">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-[#7d8590]" />
                  <span className="text-[#f0f6fc] font-medium">@{githubUsername}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#7d8590]">
                  <span>Contributions in the last year</span>
                </div>
              </div>
              
              {/* Contributions graph */}
              <div className="overflow-x-auto">
                <GithubContributions username={githubUsername} />
              </div>
              
              {/* GitHub stats footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#30363d] text-sm">
                <span className="text-[#7d8590]">
                  Learn how we count contributions
                </span>
                <div className="flex items-center gap-4 text-[#7d8590]">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
                    Less
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
                    More
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Projects - Keep existing different design */}
      <section className="section-container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-cream section-header px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            GitHub Projects
          </motion.h2>
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GithubProjects username={githubUsername} />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Enhanced with no hover effects, better design */}
      <section className="section-container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-cream section-header px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {customProjects.slice(0, isMobile ? 2 : 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Enhanced project card with no hover effects */}
                <div className="relative h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/40 via-black/20 to-transparent backdrop-blur-sm">
                  
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                  
                  {/* Background image with better overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover opacity-15"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-7 md:p-8 h-full flex flex-col">
                    
                    {/* Title */}
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-cream leading-tight">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                      {project.tags.slice(0, isMobile ? 3 : 4).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-white/10 text-cream border border-white/20 backdrop-blur-sm px-2.5 py-1 font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-cream/80 text-sm sm:text-base mb-6 sm:mb-8 line-clamp-3 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Action buttons - Enhanced styling */}
                    <div className="flex flex-col xs:flex-row gap-3 mt-auto">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold min-h-[42px] text-sm shadow-lg border-0 transition-all duration-300"
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" /> 
                          <span>Live Demo</span>
                        </Link>
                      </Button>

                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-white/30 text-cream hover:bg-white/10 backdrop-blur-sm min-h-[42px] text-sm font-medium transition-all duration-300"
                      >
                        <Link
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" /> 
                          <span>Source</span>
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show more projects button */}
          {isMobile && customProjects.length > 2 && (
            <div className="flex justify-center mt-8 sm:mt-10">
              <Button
                asChild
                variant="outline"
                className="border-amber/50 text-cream hover:bg-amber/20 w-full xs:w-auto max-w-xs px-8 py-3"
              >
                <Link href="/projects" className="flex items-center justify-center gap-2">
                  <span>View All Projects</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section - Enhanced mobile layout */}
      <section className="section-container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-cream section-header px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            What Clients Say
          </motion.h2>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TestimonialSlider testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Better responsive text and spacing */}
      <section className="section-container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glow-effect p-4 sm:p-6 md:p-8 lg:p-12 border border-amber/20 bg-teal/20 backdrop-blur-sm rounded-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 text-cream px-2">
                Ready to bring your ideas to life?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-cream/70 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                Let's collaborate to create something amazing together. I'm
                currently available for freelance work and new opportunities.
              </p>
              <Button
                asChild
                size={isMobile ? "default" : "lg"}
                className="btn-fancy w-full xs:w-auto min-w-[160px]"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </>
  );
}