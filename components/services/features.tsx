"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  {
    title: "Real-Time Tracking",
    description: "Track your shipments in real-time with our advanced GPS tracking system",
  },
  {
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to assist you",
  },
  {
    title: "Secure Handling",
    description: "Your cargo is handled with utmost care and security throughout its journey",
  },
  {
    title: "Flexible Solutions",
    description: "Customizable logistics solutions to meet your specific requirements",
  },
  {
    title: "Global Network",
    description: "Access to an extensive network of trusted partners worldwide",
  },
  {
    title: "Cost Optimization",
    description: "Efficient routing and consolidation to minimize your logistics costs",
  },
]

export default function ServiceFeatures() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/truck-container.jpg"
              alt="Upick logistics features"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={90}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the difference with our comprehensive logistics solutions and dedicated support
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 