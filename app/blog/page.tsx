"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Search, Play } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image?: string
  slug: string
  hasVideo?: boolean
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: "post-1",
      title: "Building Responsive UIs with TailwindCSS",
      excerpt: "Learn how to create beautiful, responsive user interfaces using TailwindCSS utility classes.",
      date: "March 15, 2023",
      readTime: "5 min read",
      category: "Frontend",
      image: "/placeholder.svg?height=400&width=600&text=TailwindCSS",
      slug: "building-responsive-uis-with-tailwindcss",
    },
    {
      id: "post-2",
      title: "State Management in React: Context API vs. Redux",
      excerpt: "A comparison of different state management approaches in React applications.",
      date: "February 22, 2023",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg?height=400&width=600&text=React+State",
      slug: "state-management-in-react",
      hasVideo: true,
    },
    {
      id: "post-3",
      title: "Getting Started with Next.js 14",
      excerpt: "Explore the new features and improvements in Next.js 14 and how to use them in your projects.",
      date: "January 10, 2023",
      readTime: "6 min read",
      category: "Next.js",
      image: "/placeholder.svg?height=400&width=600&text=Next.js+14",
      slug: "getting-started-with-nextjs-14",
      hasVideo: true,
    },
    {
      id: "post-4",
      title: "Building a RESTful API with Node.js and Express",
      excerpt: "A step-by-step guide to creating a robust RESTful API using Node.js and Express.",
      date: "December 5, 2022",
      readTime: "10 min read",
      category: "Backend",
      image: "/placeholder.svg?height=400&width=600&text=Node.js+API",
      slug: "building-restful-api-nodejs-express",
    },
    {
      id: "post-5",
      title: "Mastering CSS Grid Layout",
      excerpt: "Deep dive into CSS Grid Layout and how to create complex layouts with ease.",
      date: "November 18, 2022",
      readTime: "7 min read",
      category: "CSS",
      image: "/placeholder.svg?height=400&width=600&text=CSS+Grid",
      slug: "mastering-css-grid-layout",
    },
    {
      id: "post-6",
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "Learn how TypeScript can improve your JavaScript development experience with static typing.",
      date: "October 3, 2022",
      readTime: "9 min read",
      category: "TypeScript",
      image: "/placeholder.svg?height=400&width=600&text=TypeScript",
      slug: "introduction-to-typescript",
      hasVideo: true,
    },
  ]

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  // Filter posts based on search term and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory ? post.category === activeCategory : true
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-12">
      <PageHeader title="Blog" description="Thoughts, insights, and tutorials on web development and technology" />

      {/* Search and filter */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber h-4 w-4" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 bg-teal/20 border-amber/30 text-cream placeholder:text-cream/50 focus-visible:ring-amber"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            className={`rounded-full ${activeCategory === null ? "bg-amber text-burgundy" : "border-amber/30 text-cream"}`}
            size="sm"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${activeCategory === category ? "bg-amber text-burgundy" : "border-amber/30 text-cream"}`}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-cream mb-2">No articles found</h3>
          <p className="text-cream/70">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="overflow-hidden hover-lift h-full flex flex-col border-amber/20 bg-teal/20 backdrop-blur-sm">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-amber text-burgundy border-none">{post.category}</Badge>
                      {post.hasVideo && (
                        <Badge className="bg-ruby text-cream border-none flex items-center gap-1">
                          <Play className="h-3 w-3" /> Video
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-xl mb-2 text-cream">{post.title}</h3>
                    <p className="text-cream/70 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-cream/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        className="mt-20 text-center p-12 border rounded-2xl bg-gradient-to-r from-teal/10 to-ruby/10 border-amber/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-cream">Subscribe to My Newsletter</h2>
        <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
          Stay updated with my latest articles, tutorials, and insights on web development and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="rounded-full bg-teal/20 border-amber/30 text-cream placeholder:text-cream/50"
          />
          <Button className="btn-fancy">
            Subscribe <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
