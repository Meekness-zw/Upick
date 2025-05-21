"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HowItWorks() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get The App</h2>
          <p className="text-foreground/80">
            Join over 4.5 million partners worldwide that earn with Upick. For drivers, couriers, business owners, cargo
            owners and fleet owners looking for new ways to boost revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-black font-bold mb-4">
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step === 1
                  ? "Enter Your Product Details"
                  : step === 2
                    ? "Make Your Service Tag Payment"
                    : "Good to go"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {step === 1
                  ? "Tell us what you need to ship and where it's going."
                  : step === 2
                    ? "Choose your preferred payment method and complete your booking."
                    : "Track your shipment in real-time and receive updates along the way."}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
            Get the app
          </Button>
        </div>
      </div>
    </section>
  )
}
