"use client"

import { motion } from "framer-motion"

export default function AboutDescription() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl">
            At <span className="text-primary font-semibold">Upick</span>, we are redefining how people and businesses
            move goods and services. Founded with the mission to make cargo transportation simple, efficient, and
            accessible, Upick is a digital platform that connects cargo owners with a trusted network of drivers,
            couriers, and logistics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
