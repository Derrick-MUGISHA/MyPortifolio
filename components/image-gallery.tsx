"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  height?: number
}

export function ImageGallery({ images, height = 500 }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="gallery-container" style={{ height: `${height}px` }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover rounded-lg"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      </AnimatePresence>

      <div className="gallery-nav">
        {images.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
