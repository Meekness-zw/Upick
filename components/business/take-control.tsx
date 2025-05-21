"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function TakeControl() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Take Control of Your Logistics
            </h2>
            <p className="text-lg text-muted-foreground">
              Take control of your logistics with Upick — the all-in-one platform designed to help your business move
              smarter, faster, and more affordably.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/land-transport.jpg"
              alt="Land transportation logistics control"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
