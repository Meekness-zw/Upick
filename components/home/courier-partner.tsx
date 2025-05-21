"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CourierPartner() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold">Become a Upick courier partner</h3>
            <p className="text-lg text-muted-foreground">
              You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour —
              it&apos;s up to you.
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90">Register to drive</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/courier.jpg" 
              alt="Upick courier" 
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
