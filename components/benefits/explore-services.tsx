"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const cargoOwnerBenefits = [
  "Fast, reliable delivery from local to long distance",
  "Transparent pricing and instant booking",
  "Real-time tracking and proof of delivery",
  "Access to a network of verified, professional drivers",
]

const driverBenefits = [
  "Drive when you want — full-time or part-time",
  "Get paid for every trip, every delivery",
  "Choose the jobs that work for you",
  "Built-in navigation and support for a smoother experience",
]

export default function ExploreServices() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Explore Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-lg p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">For Cargo Owners</h3>
            <ul className="space-y-3 mb-8">
              {cargoOwnerBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">•</span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <Button className="bg-primary text-black hover:bg-primary/90 w-full">Ship with Upick</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-lg p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">For Drivers & Couriers</h3>
            <ul className="space-y-3 mb-8">
              {driverBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">•</span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <Button className="bg-primary text-black hover:bg-primary/90 w-full">Register to Drive</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
