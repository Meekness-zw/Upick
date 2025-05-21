"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function QuoteForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-black p-8 rounded-lg"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">We Are Here</h2>
        <p className="text-xl text-white">
          Get A Free <span className="text-primary">Quote</span>
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Enter your name"
            className="bg-black border-gray-700 text-white placeholder:text-gray-500"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-black border-gray-700 text-white placeholder:text-gray-500"
          />
        </div>
        <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
          Submit now
        </Button>
      </form>
    </motion.div>
  )
}
