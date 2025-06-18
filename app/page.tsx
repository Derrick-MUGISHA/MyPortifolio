"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowDownIcon,
  ArrowUpIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { GithubProjects } from "@/components/github-projects";
// import { GithubContributions } from "@/components/github-contributions";
import { CircularProgress } from "@/components/circular-progress";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { useEffect, useRef, useState } from "react";
import { DecorativeUnderline } from "@/components/decorative-underline";
import { useMobile } from "@/hooks/use-mobile";
import { FloatingContactButtons } from "@/components/floating-contact-buttons";
import IconCloud from "@/components/ui/icon-cloud";
import BlurFade from "@/components/ui/blur-fade";
import { IconCloudComponent } from "@/components/widgets/IconCloudComponent";
import { MyServices } from "./database/services";
import GitHubActivity from "@/components/github-contributions";
import { GitHubData } from "@/types/github";
import { fetchGitHubData } from "@/lib/github";
import allProjects from "./database/projects";
import MarqueeDemo from "@/components/marquee-demo";
import { LTRVersion } from "@/components/demo";
// import { BlurFade } from "@/components/blur-fade";

export default function page() {
const jssStyles = {
  backgroundImage: `linear-gradient(to bottom, rgba(39, 39, 42, 0), rgba(9, 9, 11, 1)), url("https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png")`,
  backgroundSize: "cover", // <- changed from "contain"
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: "background-image 0.3s ease-in-out",
  willChange: "background-image",
};

  const targetRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const githubUsername = "muhimpunduanne";

  const [gitHubData, setGitHubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getGitHubData = async () => {
      try {
        const data = await fetchGitHubData("muhimpunduanne");
        setGitHubData(data);
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    getGitHubData();
  }, []);

  const skills = [
    { name: "Web Development", progress: 90 },
    { name: "UI/UX Design", progress: 85 },
    { name: "Mobile Apps", progress: 75 },
    { name: "Backend", progress: 80 },
  ];

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
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "MUGISHA Derrick",
      role: "Client",
      company: "TechStart Inc.",
      avatar:
        "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
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
        "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
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
        "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
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
        "https://i.postimg.cc/jjRg1M59/Chat-GPT-Image-Jun-6-2025-01-25-43-PM.png",
      testimonial:
        "We've worked with many developers, but Anne Marie stands out for her ability to understand business requirements and translate them into elegant technical solutions.",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col mx-auto justify-center items-center w-full pt-48 pb-36 px-4"
        style={jssStyles}
      >
        <BlurFade delay={0.25} className="mt-80" inView>
          <h1 className="text-center z-40">
            <span className="text-primary mb-10 text-2xl md:text-4xl block">
              Hello, I&apos;m
            </span>
            <span className="text-primary text-4xl md:text-6xl block">
              MUHIMPUNDU Anne Marie
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <h2 className="text-center text-3xl md:text-5xl mt-10">
            A Software Developer
          </h2>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <h3 className="text-center text-xl text-wrap md:text-2xl mt-4">
            I design and build software and systems that respond to user needs
            and vision.
          </h3>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div>
            <motion.div
              className="flex mt-12 flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                size={isMobile ? "default" : "lg"}
                className="btn-fancy w-auto min-w-[140px]"
              >
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2"
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size={isMobile ? "default" : "lg"}
                className="rounded-full bg-transparent text-cream border-cream hover:bg-cream/10 w-auto min-w-[140px]"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center"
                >
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
              <Link
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/annemarie"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:contact@annemarie.dev" aria-label="Email">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-amber/10 hover:bg-amber/20 text-cream"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </BlurFade>
      </section>

      {/* Skills Section */}
      <section
        id="expertise-combined"
        className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
      >
        {/* Icon Cloud as Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              opacity: 20, // Increased from 0.10 to 0.25
              filter: "brightness(1.1) contrast(1.1)", // Slight enhancement for visibility
            }}
          >
            <IconCloudComponent />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-zinc-800 dark:text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Expertise & Services
          </motion.h2>

          {/* Skills Circle Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
            {skills.map((skill, index) => (
              <motion.div
                key={`skill-${index}`}
                className="relative bg-white/30 dark:bg-zinc-700/30 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center shadow-xl border border-white/20 dark:border-zinc-600/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 50, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CircularProgress
                  value={skill.progress}
                  size={100}
                  strokeWidth={6}
                  label={skill.name}
                  unit="%"
                />
                <span className="mt-4 text-lg font-semibold text-zinc-800 dark:text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MyServices.map((service, index) => (
              <motion.div
                key={`service-${index}`}
                className="relative group bg-white/30 dark:bg-zinc-700/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-zinc-600/20 transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  0{index + 1}
                </span>
                <h4 className="text-2xl font-bold uppercase mt-2 text-zinc-800 dark:text-white">
                  {service.name}
                </h4>
                <p className="my-4 text-sm text-zinc-600 dark:text-zinc-300">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                  {service.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 text-xs bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-zinc-100 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.slug}`}
                  className="flex items-center gap-2 mt-6 text-sm text-cream"
                >
                  <ArrowUpIcon className="rotate-45 w-4 h-4 transition-transform group-hover:rotate-90" />
                  <span>ABOUT {service.name.toUpperCase()}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
              GitHub Activity
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <GitHubActivity data={gitHubData} />
            )}

            <div className="mt-8 text-center">
              <Button
                asChild
                variant="outline"
                className="text-cream border-cream hover:bg-white hover:text-black"
              >
                <a
                  href="https://github.com/muhimpunduanne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section
        id="works"
        className="max-w-screen-xl mx-auto w-full px-4 pt-32 pb-12 lg:pb-32"
      >
        <div className="flex justify-between items-center w-full">
          <h3 className="text-3xl md:text-4xl text-zinc-800 dark:text-zinc-300">
            Selected project
          </h3>
          <Link
            href="/work"
            className="flex items-center justify-center gap-4 group"
          >
            <span className="border border-zinc-800 dark:border-zinc-500 dark:hover:border-zinc-200 p-2 rounded-full bg-zinc-300 dark:bg-zinc-800">
              <ArrowUpIcon className="rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            </span>
            <span className="text-base md:text-xl text-cream">SEE ALL</span>
          </Link>
        </div>
        <LTRVersion />
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
            <MarqueeDemo />
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </div>
  );
}
