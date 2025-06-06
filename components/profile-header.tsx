"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

interface ProfileHeaderProps {
  name: string
  title: string
  location: string
  avatarUrl: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

export function ProfileHeader({ name, title, location, avatarUrl, githubUrl, linkedinUrl, email }: ProfileHeaderProps) {
  return (
    <div className="profile-header mb-12">
      <div className="container px-4 md:px-6">
        <div className="profile-content flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={name}
              width={120}
              height={120}
              className="profile-avatar"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-2xl md:text-3xl font-bold mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {name}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.p>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{location}</span>
            </motion.div>

            <motion.div
              className="flex gap-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <Link href={`mailto:${email}`}>
                  <Mail className="h-4 w-4 mr-2" /> Email
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
