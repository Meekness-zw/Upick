"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Gateway() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Your Gateway to Reliable Transportation
              </h2>
              <p className="text-lg text-foreground">
                Connect with skilled drivers through our extensive network. Upick simplifies cargo transportation with real-time tracking and efficient management tools.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">How It Works</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Post your shipment details
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Get matched with drivers
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Track in real-time
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Why Choose Us</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Verified drivers
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Secure payments
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    24/7 support
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-7 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <Image 
              src="/images/gateway.jpg"
              alt="Transportation gateway"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={90}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
