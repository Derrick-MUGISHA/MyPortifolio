"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, MessageSquare } from "lucide-react"
import { useState } from "react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
  hasVideo?: boolean
  videoUrl?: string
  content?: string
  author: {
    name: string
    avatar: string
    bio: string
  }
}

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
    author: {
      name: "Jane Doe",
      avatar: "/authors/jane-doe.jpg",
      bio: "Frontend developer and UI/UX enthusiast passionate about building accessible web apps.",
    },
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
    author: {
      name: "John Smith",
      avatar: "/authors/john-smith.jpg",
      bio: "React expert and JavaScript enthusiast focused on clean and maintainable code.",
    },
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
    author: {
      name: "Emily Johnson",
      avatar: "/authors/emily-johnson.jpg",
      bio: "Full-stack developer specializing in modern React and Next.js applications.",
    },
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
    author: {
      name: "Michael Brown",
      avatar: "/authors/michael-brown.jpg",
      bio: "Backend engineer and API design advocate with a focus on performance and scalability.",
    },
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
    author: {
      name: "Sara Wilson",
      avatar: "/authors/sara-wilson.jpg",
      bio: "UI designer turned front-end developer passionate about CSS and responsive design.",
    },
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
    author: {
      name: "David Lee",
      avatar: "/authors/david-lee.jpg",
      bio: "Software engineer specializing in TypeScript and strongly typed programming languages.",
    },
  },
]


export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState(blogPosts.find((post) => post.slug === params.slug))
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1)
      setHasLiked(true)
    }
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  if (!post) return <div className="text-center py-20 text-cream">Post not found</div>

  return (
    <div className="container max-w-5xl px-4 sm:px-6 lg:px-8 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Button
          asChild
          variant="outline"
          className="border-amber/30 text-cream hover:bg-amber/20 transition-colors duration-200"
        >
          <Link href="/blog" className="flex items-center mt-12">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </motion.div>

      <article className="mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Badge className="mb-4 bg-amber text-burgundy border-none inline-block">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-cream">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={50}
              height={50}
              className="rounded-full border-2 border-amber flex-shrink-0"
              priority
            />
            <div>
              <p className="font-medium text-cream">{post.author.name}</p>
              <div className="flex flex-wrap text-sm text-cream/60 gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 relative rounded-xl overflow-hidden shadow-lg"
          style={{ aspectRatio: "16 / 9" }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            priority
          />
        </motion.div>

        {/* Video if exists */}
        {post.hasVideo && post.videoUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="text-xl font-bold mb-4 text-cream">Video Tutorial</h2>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-amber/20 shadow-md">
              <iframe
                src={post.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full bg-burgundy rounded-xl"
              />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg max-w-none
            prose-headings:text-cream
            prose-p:text-cream/80
            prose-a:text-amber hover:prose-a:text-amber/80
            prose-strong:text-amber
            prose-code:bg-teal/30 prose-code:text-cream prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-ul:text-cream/80 prose-ol:text-cream/80
            prose-blockquote:text-cream/70 prose-blockquote:border-amber/50
            prose-pre:bg-burgundy/80 prose-pre:border prose-pre:border-amber/20
            max-w-full
            "
          dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
        />

        {/* Interaction */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 border-t border-amber/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 transition-colors duration-200 ${
                hasLiked
                  ? "bg-amber/20 text-amber border-amber"
                  : "border-amber/30 text-cream hover:bg-amber/20"
              }`}
              onClick={handleLike}
              aria-pressed={hasLiked}
            >
              <ThumbsUp className="h-4 w-4" aria-hidden="true" /> {likes}
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-amber/30 text-cream hover:bg-amber/20 transition-colors duration-200"
            >
              <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" /> Comment
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className={`border-amber/30 transition-colors duration-200 ${
                isBookmarked ? "text-amber bg-amber/10" : "text-cream hover:bg-amber/20"
              }`}
              onClick={handleBookmark}
              aria-pressed={isBookmarked}
              aria-label="Bookmark post"
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-amber" : ""}`} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="border-amber/30 text-cream hover:bg-amber/20 transition-colors duration-200"
              aria-label="Share post"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </motion.footer>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-xl font-bold mb-6 text-cream">About the Author</h2>
          <Card className="border-amber/20 bg-teal/20 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={100}
                height={100}
                className="rounded-full border-2 border-amber w-24 h-24 flex-shrink-0"
                priority
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold mb-2 text-cream">{post.author.name}</h3>
                <p className="text-cream/70 mb-4">{post.author.bio}</p>
                <Button asChild className="bg-amber hover:bg-amber/90 text-burgundy">
                  <Link href="/about" className="flex items-center gap-2">
                    View Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </article>
    </div>
  )
}