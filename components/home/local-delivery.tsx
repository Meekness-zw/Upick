"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Clock, Bike } from "lucide-react"

const features = [
  {
    icon: Bike,
    title: "Fast Delivery",
    description: "Quick and efficient delivery service right to your doorstep"
  },
  {
    icon: MapPin,
    title: "City-Wide Coverage",
    description: "Serving all areas within your city limits"
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Track your delivery in real-time through our app"
  }
]

export default function LocalDelivery() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Local Deliveries at Your Fingertips
            </h2>
            <p className="text-lg text-foreground">
              Experience lightning-fast local deliveries within your city. Our fleet of motorcycle couriers ensures your packages arrive quickly and safely.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
              Book a Delivery
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/local-transport.jpg"
              alt="Local delivery service"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 