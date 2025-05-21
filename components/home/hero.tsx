"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="bg-primary py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Ship Anything.
              <br />
              Anytime.
            </h1>
            <p className="text-lg md:text-xl text-black/80 mb-8">Mobile. Reliable. Efficient. On Demand.</p>
            <Button size="lg" className="bg-black text-white hover:bg-black/80">
              Download the app
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.jpg"
            alt="Trucks on highway at sunset"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
    </section>
  )
}
