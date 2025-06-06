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

// ... (Keep the BlogPost interface and blogPosts object exactly as provided)

export default function BlogPostPage() {
  // ... (Keep all the existing useState and handler functions as provided)

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button 
          asChild 
          variant="outline" 
          className="mb-8 border-amber/30 text-cream hover:bg-amber/20"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </motion.div>

      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-amber text-burgundy border-none">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">{post.title}</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={50}
              height={50}
              className="rounded-full border-2 border-amber"
            />
            <div>
              <p className="font-medium text-cream">{post.author.name}</p>
              <div className="flex items-center text-sm text-cream/60 gap-4">
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

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 relative rounded-xl overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>

        {/* Video Embed */}
        {post.hasVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold mb-4 text-cream">Video Tutorial</h2>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-amber/20">
              <iframe
                src={post.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full bg-burgundy"
              />
            </div>
          </motion.div>
        )}

        {/* Article Content */}
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
            prose-pre:bg-burgundy/80 prose-pre:border prose-pre:border-amber/20"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Interaction Buttons */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col gap-6 border-t border-amber/20 pt-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${
                  hasLiked ? "bg-amber/20 text-amber border-amber" : "border-amber/30 text-cream hover:bg-amber/20"
                }`}
                onClick={handleLike}
              >
                <ThumbsUp className="h-4 w-4" /> {likes}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-amber/30 text-cream hover:bg-amber/20"
              >
                <MessageSquare className="h-4 w-4 mr-2" /> Comment
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className={`border-amber/30 ${isBookmarked ? "text-amber bg-amber/10" : "text-cream"}`}
                onClick={handleBookmark}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-amber" : ""}`} />
                <span className="sr-only">Bookmark</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-amber/30 text-cream hover:bg-amber/20"
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-6 text-cream">About the Author</h2>
            <Card className="border-amber/20 bg-teal/20 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-amber w-24 h-24"
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
        </motion.footer>
      </article>
    </div>
  )
}