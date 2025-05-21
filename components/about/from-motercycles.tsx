"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function FromMotorcycles() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <Image src="/images/scooter.jpg" alt="motorcycle" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <Image src="/images/courier.jpg" alt="Courier" fill className="object-cover" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mt-12"
        >
          <p className="text-lg mb-6">
            From motorcycles to trucks, local runs to nationwide deliveries, Upick is your gateway to smarter transport.
          </p>
          <p className="text-xl font-bold mb-8">Move smarter. Earn more. Go further — with Upick.</p>
          <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
            Register to drive now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
