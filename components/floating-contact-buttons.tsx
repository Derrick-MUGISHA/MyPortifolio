"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Updated WhatsApp Button component
interface WhatsAppButtonProps {
  phoneNumber: string;
  size: string;
  className: string;
  text?: string;
}

export function WhatsAppButton({ phoneNumber, size, className, text = "WhatsApp" }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`
  
  return (
    <Button
      asChild
      size={size as "default" | "sm" | "lg" | "icon" | null | undefined}
      className={className}
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        {size === "icon" ? (
          <>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="sr-only">WhatsApp</span>
          </>
        ) : (
          text
        )}
      </Link>
    </Button>
  )
}

export function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleOpen = () => setIsOpen(!isOpen)
  
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mb-3 sm:mb-4"
            >
              <WhatsAppButton
                phoneNumber="+250795306939"
                size="icon"
                className="rounded-full bg-amber hover:bg-amber/90 shadow-lg h-10 w-10 sm:h-12 sm:w-12 text-burgundy"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mb-3 sm:mb-4"
            >
              <Button
                asChild
                size="icon"
                className="rounded-full bg-teal hover:bg-teal/90 shadow-lg h-10 w-10 sm:h-12 sm:w-12 text-cream"
              >
                <Link href="mailto:muhimpunduan@gmail.com">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <Button
        size="icon"
        className={`rounded-full shadow-lg h-12 w-12 sm:h-14 sm:w-14 ${isOpen ? "bg-ruby hover:bg-ruby/90" : "bg-amber hover:bg-amber/90"}`}
        onClick={toggleOpen}
      >
        {isOpen ? 
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-cream" /> : 
          <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-burgundy" />
        }
        <span className="sr-only">{isOpen ? "Close contact options" : "Open contact options"}</span>
      </Button>
    </div>
  )
}