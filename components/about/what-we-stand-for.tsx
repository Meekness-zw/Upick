"use client"

import { motion } from "framer-motion"
import { CircleIcon, ShieldCheck, Users, Calendar } from "lucide-react"

const values = [
  {
    icon: <CircleIcon className="h-8 w-8" />,
    title: "Simplicity",
    description: "One app. Endless mobility solutions",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Reliability",
    description: "Verified, experienced drivers and real-time tracking.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Opportunity",
    description: "We empower individuals and businesses to earn and expand.",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Flexibility",
    description: "Choose when, where, and how you ship or deliver.",
  },
]

export default function WhatWeStandFor() {
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
          <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary rounded-lg p-8 text-center"
            >
              <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-primary mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">{value.title}</h3>
              <p className="text-black/80">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
