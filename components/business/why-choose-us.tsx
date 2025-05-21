"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  {
    title: "On-Demand & Scheduled Deliveries",
    description: "Need it now or later? Book instant or future deliveries to match your business workflow.",
  },
  {
    title: "Scalable & Flexible",
    description: "From startups to large enterprises, Upick grows with you and adapts to your delivery needs.",
  },
  {
    title: "Live Tracking & Notifications",
    description: "Track your cargo in real-time and keep your customers informed with delivery updates.",
  },
  {
    title: "Business Dashboard",
    description:
      "Easily manage orders, view analytics, track driver performance, and handle invoices — all in one place.",
  },
  {
    title: "Vehicle Variety",
    description: "Choose the right vehicle for every job: motorbikes, vans, trucks, and more.",
  },
  {
    title: "Priority Support",
    description: "Enjoy premium customer service and access to a dedicated account manager.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/shared-container.jpg" 
              alt="Upick shared container service" 
              fill 
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
