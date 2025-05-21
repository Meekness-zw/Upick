"use client"

import { motion } from "framer-motion"

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg md:text-xl text-foreground/80">
            From everyday deliveries to business-scale logistics, Upick gives you more control, flexibility, and earning
            potential — all in one platform.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
