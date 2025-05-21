"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ServiceCTA() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Contact our team today to discuss your logistics needs and discover how we can help streamline your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-black text-black hover:bg-black/10">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 