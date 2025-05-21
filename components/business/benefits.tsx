"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  "Reduce delivery costs",
  "Improve turnaround times",
  "Deliver a better customer experience",
  "Focus more on your core business",
]

export default function BusinessBenefits() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Upick Business Benefits</h2>
          <p className="text-lg text-muted-foreground">
            Transform your logistics operations with our comprehensive business solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-lg font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
                Contact our team
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/ocean-freight.jpg" 
              alt="Ocean freight and logistics solutions" 
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
