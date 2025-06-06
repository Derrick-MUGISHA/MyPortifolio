"use client"

import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <PageHeader title="Get in Touch" description="Have a question or want to work together? Reach out to me!" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="gradient-border overflow-hidden">
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="hover-lift h-full">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:contact@annemarie.dev"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                         muhimpunduan@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+250795306939"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +250 795 306 939
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Kigali Rwanda</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="hover-lift h-full">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                    <Link href="https://github.com/muhimpunduanne" target="_blank" rel="noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                    <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <WhatsAppButton phoneNumber="+250795306939" size="icon" variant="outline" className="rounded-full">
                    <span className="sr-only">WhatsApp</span>
                  </WhatsAppButton>
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                    <Link href="mailto:muhimpunduan@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="hover-lift h-full">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Schedule a Meeting</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer to talk in person? Schedule a virtual meeting at your convenience.
                </p>
                <Button asChild className="w-full rounded-full" variant="outline">
                  <Link
                    href="https://calendly.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" /> Book a Time Slot
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
