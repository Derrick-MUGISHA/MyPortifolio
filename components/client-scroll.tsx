"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Client {
  id: number
  name: string
  logo: string
  testimonial?: string
  role?: string
  company?: string
}

interface ClientScrollProps {
  clients: Client[]
  showTestimonials?: boolean
}

export function ClientScroll({ clients, showTestimonials = false }: ClientScrollProps) {
  const duplicatedClients = [...clients, ...clients]

  return (
    <div className="w-full overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.id}-${index}`}
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {showTestimonials ? (
                <Card className="w-[300px] md:w-[400px] bg-secondary/50 backdrop-blur-sm border-secondary/80">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4 h-16">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    {client.testimonial && (
                      <>
                        <p className="text-sm text-muted-foreground italic mb-4">"{client.testimonial}"</p>
                        <div className="text-sm">
                          <p className="font-medium">{client.name}</p>
                          {client.role && client.company && (
                            <p className="text-muted-foreground">
                              {client.role}, {client.company}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="w-[150px] h-[80px] flex items-center justify-center mx-4">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
