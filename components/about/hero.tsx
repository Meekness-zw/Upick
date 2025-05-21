"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/truck-container.jpg"
        alt="About Upick - Our Transportation Services"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-white max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About us.</h1>
          <p className="text-xl md:text-2xl">
            Empowering Mobility. Connecting Possibilities
          </p>
        </motion.div>
      </div>
    </section>
  )
}
