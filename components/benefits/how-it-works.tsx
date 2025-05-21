"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Enter Your Product Details",
  },
  {
    number: "02",
    title: "Make Your Service Tag Payment",
  },
  {
    number: "03",
    title: "Good to go",
  },
]

export default function HowItWorks() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm text-primary font-medium mb-2">How It Works</h3>
        <h2 className="text-2xl font-bold mb-6">Upick</h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium">{step.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
