"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  testimonial: string
  rating: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTouching, setIsTouching] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMobile()

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    resetAutoPlay()
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    resetAutoPlay()
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    resetAutoPlay()
  }

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(goToNext, 5000)
    }
  }

  useEffect(() => {
    if (isAutoPlaying && !isTouching) {
      autoPlayRef.current = setInterval(goToNext, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, isTouching])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true)
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching) return

    const touchEnd = e.touches[0].clientX
    const diff = touchStart - touchEnd

    // If swipe is significant enough (more than 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go next
        goToNext()
      } else {
        // Swipe right, go previous
        goToPrevious()
      }
      setIsTouching(false)
    }
  }

  const handleTouchEnd = () => {
    setIsTouching(false)
  }

  // Truncate testimonial text for mobile
  const getTruncatedTestimonial = (text: string) => {
    if (isMobile && text.length > 120) {
      return text.substring(0, 120) + "..."
    }
    return text
  }

  return (
    <div className="relative">
      <div
        className="overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full">
          <Card className="bg-secondary/70 backdrop-blur-sm border-secondary/80 mx-auto max-w-3xl">
            <CardContent className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-primary">
                    <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                    <AvatarFallback>
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 md:h-5 md:w-5 ${i < testimonials[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>

                  <p className="text-base md:text-lg italic mb-4 md:mb-6">
                    "{getTruncatedTestimonial(testimonials[currentIndex].testimonial)}"
                  </p>

                  <div>
                    <h4 className="font-bold text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 md:px-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white h-8 w-8 md:h-10 md:w-10"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white h-8 w-8 md:h-10 md:w-10"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 md:mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-4 md:w-6" : "bg-muted-foreground/30"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
