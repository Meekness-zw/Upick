"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function EarnWithUpick() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Earn With Upick</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of partners and unlock new revenue opportunities with Upick&apos;s flexible earning platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/driver.jpg" 
              alt="Upick driver with their delivery vehicle" 
              fill 
              className="object-cover object-[center_30%]"
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={95}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Drive Your Success</h3>
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re a driver, courier, or fleet owner, Upick provides the tools and opportunities you need to grow your business and increase your earnings.
              </p>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Flexible scheduling - work when it suits you
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Competitive earnings with bonus opportunities
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Access to a growing customer base
                </li>
              </ul>
            </div>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 w-full md:w-auto">
              Start Earning Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
